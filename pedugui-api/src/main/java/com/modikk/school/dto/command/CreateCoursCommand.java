package com.modikk.school.dto.command;

import com.modikk.school.document.*;

import java.util.List;

public record CreateCoursCommand(
        String schoolYearId,
        CoursLevelDocument coursLevel,
        ClassRoomDocument classRoom,
        ClassSubjectDocument classSubject,
        CoursTeacherDocument teacher,
        List<CoursOccurrenceDocument> occurrences
        ) {
}
