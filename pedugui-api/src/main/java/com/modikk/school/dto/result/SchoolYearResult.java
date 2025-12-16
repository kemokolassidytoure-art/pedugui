package com.modikk.school.dto.result;

import lombok.Builder;

import java.util.Date;
import java.util.List;

@Builder
public record SchoolYearResult(
        String id,
        long year,
        boolean isActive,
        boolean isViewable,
        List<SchoolLevelResult> schoolLevels,
        List<CoursResult> coursResults

        ) {
}

