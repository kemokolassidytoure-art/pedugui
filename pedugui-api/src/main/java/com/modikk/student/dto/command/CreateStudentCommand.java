package com.modikk.student.dto.command;

import com.modikk.common.dto.command.BasePersonCommand;

import java.util.Date;

public record CreateStudentCommand(
        String lastName,
        String firstName,
        Date dateOfBirth,
        String sex,
        String quartier,
        String commune,
        String phoneNumber,
        String email,
        BasePersonCommand father,
        BasePersonCommand mother,
        BasePersonCommand legalGuardian
) {
}
