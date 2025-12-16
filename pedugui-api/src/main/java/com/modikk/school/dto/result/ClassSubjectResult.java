package com.modikk.school.dto.result;

import lombok.Builder;

@Builder
public record ClassSubjectResult(
    String code,
    String description
) {
}
