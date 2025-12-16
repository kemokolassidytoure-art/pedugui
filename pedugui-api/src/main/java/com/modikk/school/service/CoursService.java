package com.modikk.school.service;

import com.modikk.school.document.CoursDocument;
import com.modikk.school.document.SchoolDocument;
import com.modikk.school.dto.command.CreateCoursCommand;
import com.modikk.school.dto.command.CreateSchoolCommand;
import com.modikk.school.dto.result.CoursResult;
import com.modikk.school.dto.result.SchoolResult;
import com.modikk.school.repository.CoursRepository;
import com.modikk.school.repository.SchoolRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CoursService {
    private final CoursRepository coursRepository;


    public CoursResult create(CreateCoursCommand command) {
        var document = CoursDocument.builder()
                .schoolYearId(command.schoolYearId())
                .coursLevel(command.coursLevel())
                .classRoom(command.classRoom())
                .classSubject(command.classSubject())
                .teacher(command.teacher())
                .occurrences(command.occurrences())
                .build();

        document = coursRepository.save(document);

        return CoursResult.builder()
                .id(document.getId())
                .coursLevel(document.getCoursLevel())
                .classRoom(document.getClassRoom())
                .schoolYearId(document.getSchoolYearId())
                .classSubject(document.getClassSubject())
                .occurrences(document.getOccurrences())
                .teacher(command.teacher())
                .build();
    }
}
