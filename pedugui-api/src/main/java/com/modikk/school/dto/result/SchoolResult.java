package com.modikk.school.dto.result;

import lombok.Builder;

import java.util.Date;

@Builder
public record SchoolResult(
        String id,
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
