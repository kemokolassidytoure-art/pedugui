package com.modikk.school.dto.result;

import lombok.Builder;

import java.util.List;

@Builder
public record SchoolLevelResult(
        String code,
        String description,
        List<ClassSubjectResult> classSubjects,
        List<ClassRoomResult> classRooms
) {
}

