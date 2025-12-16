package com.modikk.school.document;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;
import java.util.List;

@Data
@Builder
@Document(collection = "schoolYear")
public class SchoolYearDocument {
    @Id
    private String id;
    private long year;
    private boolean isActive;
    private boolean isViewable;
    private List<SchoolLevelDocument> schoolLevels;
}
