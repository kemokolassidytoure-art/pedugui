package com.modikk.school.dto.result;

import lombok.Builder;

@Builder
public record ClassRoomResult (
        String code,
        String description
) {
}
