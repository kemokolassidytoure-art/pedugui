package com.modikk.student.dto.result;

import com.modikk.common.dto.result.BasePersonResult;
import lombok.Builder;

import java.util.Date;

@Builder
public record StudentResult(
        String id,
        String lastName,
        String firstName,
        Date dateOfBirth,
        String sex,
        String quartier,
        String commune,
        String phoneNumber,
        String email,
        BasePersonResult father,
        BasePersonResult mother,
        BasePersonResult legalGuardian
) {
}
