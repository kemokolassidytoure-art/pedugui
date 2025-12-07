package com.modikk.common.dto.command;

public record BasePersonCommand(
    String lastName,
    String firstName,
    String phoneNumber,
    String email
) {
}
