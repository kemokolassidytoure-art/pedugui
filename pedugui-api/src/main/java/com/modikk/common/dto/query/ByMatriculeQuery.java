package com.modikk.common.dto.query;

import org.springframework.web.bind.annotation.RequestParam;

public record ByMatriculeQuery(@RequestParam(required = true) String matricule) {
}
