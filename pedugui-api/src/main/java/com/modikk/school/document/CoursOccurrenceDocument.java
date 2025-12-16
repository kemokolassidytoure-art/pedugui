package com.modikk.school.document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.Instant;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
public class CoursOccurrenceDocument {
    private String dayCode;
    private LocalDate firstOccurrence;
    private List<Date> fixedDates;
    private String repetitionCode;
    private Instant startTime;
    private Instant endTime;
}
