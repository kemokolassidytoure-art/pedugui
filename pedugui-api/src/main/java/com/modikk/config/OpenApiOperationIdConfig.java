package com.modikk.config;

import io.swagger.v3.oas.models.Operation;
import org.springdoc.core.customizers.OperationCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.method.HandlerMethod;

@Configuration
public class OpenApiOperationIdConfig {

    @Bean
    public OperationCustomizer operationIdCustomizer() {
        return (Operation operation, HandlerMethod handlerMethod) -> {

            String controllerName = handlerMethod.getBeanType().getSimpleName();
            String methodName = handlerMethod.getMethod().getName();

            // ✅ Remove "Controller" suffix for cleaner IDs (optional)
            if (controllerName.endsWith("Controller")) {
                controllerName = controllerName.replace("Controller", "");
            }

            // ✅ Final enterprise-grade operationId
            String operationId = controllerName + "_" + methodName;

            operation.setOperationId(operationId);

            return operation;
        };
    }
}
