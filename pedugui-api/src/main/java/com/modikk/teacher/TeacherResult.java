package com.modikk.teacher;

import lombok.Builder;

import java.util.Date;

@Builder
public record TeacherResult(
        String id,
        String lastName,
        String firstName,
        Date dateOfBirth,
        String sex,
        String quartier,
        String commune,
        String phoneNumber,
        String email
) {
}
