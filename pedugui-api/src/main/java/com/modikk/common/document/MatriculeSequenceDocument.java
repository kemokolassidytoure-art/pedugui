package com.modikk.common.document;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "matriculeSeq")
@Data
@Builder
public class MatriculeSequenceDocument {
    @Id
    private String id;
    private long seq;
}
