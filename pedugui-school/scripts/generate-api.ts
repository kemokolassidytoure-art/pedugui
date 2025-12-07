import fs from "fs";
import path from "path";

/* ================================
   CONFIG
================================ */
const OPENAPI_PATH = path.resolve("src/api/pedugui-api.json");
const OUTPUT_DIR = path.resolve("src/api/generated");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "pedugui-api.ts");

/* ======================================================
   TYPES
====================================================== */
type OpenAPI = {
  paths: Record<string, any>;
  components?: {
    schemas?: Record<string, any>;
  };
};

/* ======================================================
   UTILS
====================================================== */
function toPascalCase(str: string) {
  return str
    .replace(/[{}]/g, "")
    .split(/[\/_-]/g)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}

function resolveType(schema: any): string {
  if (!schema) return "any";
  if (schema.$ref) return schema.$ref.split("/").pop()!;
  if (schema.enum)
    return schema.enum.map((v: any) => JSON.stringify(v)).join(" | ");
  if (["integer", "number"].includes(schema.type)) return "number";
  if (schema.type === "string") return "string";
  if (schema.type === "boolean") return "boolean";
  if (schema.type === "array") return `${resolveType(schema.items)}[]`;
  if (schema.type === "object") return "Record<string, any>";
  return "any";
}

/* ======================================================
   SCHEMA GENERATOR
====================================================== */
function generateSchemas(schemas: Record<string, any> = {}) {
  return Object.entries(schemas)
    .map(([name, schema]) => {
      const fields = Object.entries(schema.properties || {}).map(
        ([key, value]: any) => {
          const optional = schema.required?.includes(key) ? "" : "?";
          return `  ${key}${optional}: ${resolveType(value)};`;
        }
      );

      return `
export interface ${name} {
${fields.join("\n")}
}
`;
    })
    .join("\n");
}

/* ======================================================
   API FUNCTION GENERATOR (✅ QUERY BUG FIXED ✅)
====================================================== */
function generateApiFunctions(paths: Record<string, any>) {
  return Object.entries(paths)
    .flatMap(([route, methods]) =>
      Object.entries(methods).map(([method, spec]: any) => {
        const fnName = spec.operationId ?? `${method}${toPascalCase(route)}`;

        const params =
          spec.parameters?.map((p: any) => ({
            name: p.name,
            type: resolveType(p.schema),
            required: p.required,
            in: p.in,
          })) || [];

        const pathParams = params.filter((p: any) => p.in === "path");
        const queryParams = params.filter((p: any) => p.in === "query");

        const requestBodySchema =
          spec.requestBody?.content?.["application/json"]?.schema;

        const responseSchema =
          spec.responses?.["200"]?.content?.["application/json"]?.schema;

        const returnType = resolveType(responseSchema);

        const args = [
          ...pathParams.map((p: any) => `${p.name}: ${p.type}`),
          queryParams.length
            ? `query${
                queryParams.some((q: any) => q.required) ? "" : "?"
              }: { ${queryParams
                .map((q: any) => `${q.name}${q.required ? "" : "?"}: ${q.type}`)
                .join("; ")} }`
            : null,
          requestBodySchema ? `body: ${resolveType(requestBodySchema)}` : null,
        ]
          .filter(Boolean)
          .join(", ");

        let finalUrl = route;
        pathParams.forEach((p: any) => {
          finalUrl = finalUrl.replace(`{${p.name}}`, `\${${p.name}}`);
        });

        const configBlock = queryParams.length
          ? `const axiosConfig = query ? { params: query } : undefined;`
          : "";

        return `
export async function ${fnName}(${args}): Promise<${returnType}> {
  ${configBlock}
  const res = await api.${method}(
    \`${finalUrl}\`,
    ${requestBodySchema ? "body" : "undefined"},
    ${queryParams.length ? "axiosConfig" : "undefined"}
  );
  return res.data;
}
`;
      })
    )
    .join("\n");
}

/* ======================================================
   TANSTACK QUERY HOOK GENERATOR
====================================================== */
function generateReactQueryHooks(paths: Record<string, any>) {
  return Object.entries(paths)
    .flatMap(([route, methods]) =>
      Object.entries(methods).map(([method, spec]: any) => {
        const fnName = spec.operationId ?? `${method}${toPascalCase(route)}`;

        const hookBaseName = fnName.charAt(0).toUpperCase() + fnName.slice(1);

        const responseSchema =
          spec.responses?.["200"]?.content?.["application/json"]?.schema;

        const returnType = resolveType(responseSchema);

        const params =
          spec.parameters?.map((p: any) => ({
            name: p.name,
            type: resolveType(p.schema),
            required: p.required,
            in: p.in,
          })) || [];

        const pathParams = params.filter((p: any) => p.in === "path");
        const queryParams = params.filter((p: any) => p.in === "query");

        const requestBodySchema =
          spec.requestBody?.content?.["application/json"]?.schema;

        const args = [
          ...pathParams.map((p: any) => `${p.name}: ${p.type}`),
          queryParams.length
            ? `query${
                queryParams.some((q: any) => q.required) ? "" : "?"
              }: { ${queryParams
                .map((q: any) => `${q.name}${q.required ? "" : "?"}: ${q.type}`)
                .join("; ")} }`
            : null,
          requestBodySchema ? `body: ${resolveType(requestBodySchema)}` : null,
        ]
          .filter(Boolean)
          .join(", ");

        // ✅ GET → useQuery
        if (method.toLowerCase() === "get") {
          return `
export function use${hookBaseName}Query(${args}) {
  return useQuery<${returnType}>({
    queryKey: ["${fnName}", ${pathParams
            .map((p: any) => p.name)
            .join(", ")}, query],
    queryFn: () => ${fnName}(${[
            ...pathParams.map((p: any) => p.name),
            queryParams.length ? "query" : null,
          ]
            .filter(Boolean)
            .join(", ")}),
  });
}`;
        }

        // ✅ MUTATION → useMutation
        return `
export function use${hookBaseName}Mutation() {
  return useMutation({
    mutationFn: (${requestBodySchema ? "body" : "data"}: ${
          requestBodySchema ? resolveType(requestBodySchema) : "any"
        }) =>
      ${fnName}(${requestBodySchema ? "body" : ""}),
  });
}`;
      })
    )
    .join("\n");
}

/* ======================================================
   MAIN
====================================================== */
function main() {
  const openapi = JSON.parse(fs.readFileSync(OPENAPI_PATH, "utf8")) as OpenAPI;

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const file = `
// =======================================================
// ✅ AUTO-GENERATED FILE — DO NOT EDIT MANUALLY
// ✅ Generated from: ${OPENAPI_PATH}
// =======================================================

import axios from "axios";
import type { AxiosInstance } from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";

// ================================
// API INSTANCE
// ================================
export const api: AxiosInstance = axios.create({
  baseURL: process.env.API_URL || "http://localhost:8080",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

// ================================
// SCHEMAS
// ================================
${generateSchemas(openapi.components?.schemas)}

// ================================
// API FUNCTIONS
// ================================
${generateApiFunctions(openapi.paths)}

// ================================
// ✅ TANSTACK QUERY HOOKS
// ================================
${generateReactQueryHooks(openapi.paths)}
`;

  fs.writeFileSync(OUTPUT_FILE, file);
  console.log("✅ Enterprise SDK Generated:");
  console.log("➡️", OUTPUT_FILE);
}

main();
