package com.modikk.teacher;

import java.util.Date;

public record RegisterTeacherCommand(
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
