package com.modikk.school.dto.result;

import com.modikk.school.document.*;
import lombok.Builder;

import java.util.List;

@Builder
public record CoursResult(
        String id,
        String schoolYearId,
        CoursLevelDocument coursLevel,
        ClassRoomDocument classRoom,
        ClassSubjectDocument classSubject,
        CoursTeacherDocument teacher,
        List<CoursOccurrenceDocument> occurrences
        ) {
}
