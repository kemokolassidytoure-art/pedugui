package com.modikk.school.controller;

import com.modikk.school.dto.command.CreateCoursCommand;
import com.modikk.school.dto.result.CoursResult;
import com.modikk.school.dto.result.SchoolYearResult;
import com.modikk.school.service.CoursService;
import com.modikk.school.service.SchoolYearService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "cours")
@RequiredArgsConstructor
public class CoursController {
    private final CoursService coursService;

    @PostMapping(path = "create")
    @ResponseBody
    @ResponseStatus(HttpStatus.CREATED)
    public CoursResult create(@RequestBody CreateCoursCommand command) {
        return coursService.create(command);
    }
}
