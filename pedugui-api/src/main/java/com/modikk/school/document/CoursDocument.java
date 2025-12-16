package com.modikk.school.document;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Builder
@Document(collection = "cours")
public class CoursDocument {
    @Id
    private String id;
    private String schoolYearId;
    private CoursLevelDocument coursLevel;
    private ClassRoomDocument classRoom;
    private ClassSubjectDocument classSubject;
    private CoursTeacherDocument teacher;
    private List<CoursOccurrenceDocument> occurrences;
}
