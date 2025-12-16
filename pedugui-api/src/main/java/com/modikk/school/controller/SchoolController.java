package com.modikk.school.controller;

import com.modikk.school.dto.command.CreateSchoolCommand;
import com.modikk.school.dto.result.SchoolResult;
import com.modikk.school.service.SchoolService;
import com.modikk.school.service.SchoolYearService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "school")
@RequiredArgsConstructor
public class SchoolController {
    private final SchoolService schoolService;

    @PostMapping(path = "create")
    @ResponseBody
    @ResponseStatus(HttpStatus.CREATED)
    public SchoolResult create(@RequestBody CreateSchoolCommand command) {
        return schoolService.create(command);
    }


}
