"use client";
import {
  Teacher_findByMatricule,
  TeacherResult,
  useTeacher_findByMatriculeQuery,
} from "@/api/generated/pedugui-api";
import { getValidateStatus, useDebounce, ValidMatriculeStatus } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { Form, FormInstance, Input } from "antd";
import { ValidateStatus } from "antd/es/form/FormItem";
import {
  ComponentProps,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

type FormItemErrorProps = null | Pick<
  ComponentProps<typeof Form.Item>,
  "validateStatus" | "help"
>;
type ValidTeacherMatriculeFieldProps = {
  fieldProps?: ComponentProps<typeof Form.Item>;
  formInstance: FormInstance;
  onValidTeacherFound?: (teacher: TeacherResult) => void;
  onValidTeacherFoundStatusChange?: () => void;
} & ComponentProps<typeof Input>;

export type ValidTeacherMatriculeFieldRef = {};

const ValidTeacherMatriculeField = forwardRef<
  ValidTeacherMatriculeFieldRef,
  ValidTeacherMatriculeFieldProps
>(
  (
    {
      fieldProps: fieldPropsParam,
      formInstance,
      onValidTeacherFound,
      onValidTeacherFoundStatusChange,
      ...props
    },
    ref
  ) => {
    const [teacherMatricule, setTeacherMatricule] = useState<string>();
    const [debouncedTeacherMatricule, isDebouncedTeacherMatricule] =
      useDebounce<string>(teacherMatricule ?? "");
    const [status, setStatus] = useState<ValidMatriculeStatus>("not-found");
    const [errorProps, setErrorProps] = useState<FormItemErrorProps>(null);

    const fieldProps = {
      name: "teacher",
      label: "Enseignant(e)",
      ...fieldPropsParam,
    };

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget?.value ?? "";
        setStatus("loading");
        if (value.length > 2) {
          formInstance.setFieldValue(fieldProps.name, value);
        }

        setTeacherMatricule(value);
        setErrorProps(null);
      },
      [setTeacherMatricule, setErrorProps, setStatus]
    );

    const {
      isPending: isSearchingTeacher,
      error: searchFailed,
      data: teacherResult,
    } = useQuery<TeacherResult>({
      queryKey: ["Teacher_findByMatricule", , debouncedTeacherMatricule],
      queryFn: () =>
        Teacher_findByMatricule({
          query: { matricule: debouncedTeacherMatricule },
        }),
      enabled: debouncedTeacherMatricule?.trim()?.length > 3,
    });

    console.log(teacherResult);
    useEffect(() => {
      console.log("use", teacherResult);
      if (!searchFailed && !!teacherResult?.id) {
        setStatus("found");
        onValidTeacherFound?.(teacherResult);
      } else {
        setErrorProps({
          validateStatus: "error",
          help: "Matricule est invalide",
        });
        setStatus("not-found");
      }
    }, [
      searchFailed,
      teacherResult,
      setStatus,
      setErrorProps,
      onValidTeacherFound,
    ]);

    const validateStatus: ValidateStatus = useMemo(() => {
      return debouncedTeacherMatricule
        ? getValidateStatus(
            status,
            isSearchingTeacher || isDebouncedTeacherMatricule
          )
        : "";
    }, [
      debouncedTeacherMatricule,
      status,
      isSearchingTeacher,
      isDebouncedTeacherMatricule,
    ]);

    return (
      <Form.Item
        {...fieldProps}
        hasFeedback
        validateStatus={validateStatus}
        {...(errorProps ?? {})}
      >
        <Input onChange={handleChange} {...props} />
      </Form.Item>
    );
  }
);

export default ValidTeacherMatriculeField;
