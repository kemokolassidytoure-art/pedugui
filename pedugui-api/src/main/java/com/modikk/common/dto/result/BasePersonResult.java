package com.modikk.common.dto.result;

public record BasePersonResult(
    String lastName,
    String firstName,
    String phoneNumber,
    String email
) {
}
