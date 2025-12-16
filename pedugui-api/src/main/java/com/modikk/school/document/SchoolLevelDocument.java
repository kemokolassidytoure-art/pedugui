package com.modikk.school.document;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Builder
public class SchoolLevelDocument {
    private String code;
    private String description;
    private List<ClassSubjectDocument> classSubjects;
    private List<ClassRoomDocument> classRooms;
}
