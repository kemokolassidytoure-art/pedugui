package com.modikk.school.dto.command;

import java.util.Date;

public record CreateSchoolCommand(
        String name,
        Date creationDate,
        String level,
        String quartier,
        String commune,
        String phoneNumber,
        String email,
        String ownerLastName,
        String ownerFirstName,
        Date ownerDateOfBirth,
        String ownerGender,
        String ownerQuartier,
        String ownerCommune,
        String ownerPhoneNumber,
        String ownerEmail,
        String directorLastName,
        String directorFirstName,
        Date directorDateOfBirth,
        String directorGender,
        String directorQuartier,
        String directorCommune,
        String directorPhoneNumber,
        String directorEmail
        ) {
}
