package com.modikk.school.document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
public class CoursLevelDocument {
    private String code;
    private String description;
}
