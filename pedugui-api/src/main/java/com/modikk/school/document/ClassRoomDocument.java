package com.modikk.school.document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class ClassRoomDocument {
    private String code;
    private String description;
}
