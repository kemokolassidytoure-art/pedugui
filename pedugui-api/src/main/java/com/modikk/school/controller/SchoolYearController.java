package com.modikk.school.controller;

import com.modikk.school.dto.command.CreateSchoolCommand;
import com.modikk.school.dto.result.CoursResult;
import com.modikk.school.dto.result.SchoolResult;
import com.modikk.school.dto.result.SchoolYearResult;
import com.modikk.school.mapper.CoursMapper;
import com.modikk.school.service.SchoolService;
import com.modikk.school.service.SchoolYearService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "schoolYear")
@RequiredArgsConstructor
public class SchoolYearController {
    private final SchoolYearService schoolYearService;

//    @PostMapping(path = "schoolYear")
//    @ResponseBody
//    @ResponseStatus(HttpStatus.CREATED)
//    public String schoolYear() {
//        schoolYearService.test();
//        return "OK";
//    }

    @GetMapping(path = "activeSchoolYears")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public List<SchoolYearResult> findActiveSchoolYears() {
        return schoolYearService.findActiveSchoolYears();
    }

    @GetMapping(path = "viewableSchoolYears")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public List<SchoolYearResult> findViewableSchoolYears() {
        return schoolYearService.findViewableSchoolYears();
    }

    @GetMapping(path = "{id}/cours")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public List<CoursResult> findCours(@PathVariable String id) {
        return schoolYearService.findCoursBySchoolYearId(id);
    }
}
