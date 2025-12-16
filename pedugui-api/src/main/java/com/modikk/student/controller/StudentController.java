package com.modikk.student.controller;

import com.modikk.student.dto.command.CreateStudentCommand;
import com.modikk.student.dto.result.StudentResult;
import com.modikk.student.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "student")
@RequiredArgsConstructor
public class StudentController {
    private final StudentService studentService;

    @PostMapping(path = "create")
    @ResponseBody
    @ResponseStatus(HttpStatus.CREATED)
    public StudentResult create(@RequestBody CreateStudentCommand command) {
        return studentService.create(command);
    }
}
