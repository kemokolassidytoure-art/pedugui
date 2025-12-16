package com.modikk.teacher;

import com.modikk.common.dto.query.ByMatriculeQuery;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "teacher")
@RequiredArgsConstructor
public class TeacherController {
    private final TeacherService teacherService;

    @PostMapping("register")
    @ResponseBody
    @ResponseStatus(HttpStatus.CREATED)
    public TeacherResult register(@RequestBody RegisterTeacherCommand command) {
        return teacherService.register(command);
    }

    @GetMapping("find")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public TeacherResult findByMatricule(ByMatriculeQuery query) {
        return teacherService.findByMatricule(query);
    }
}
