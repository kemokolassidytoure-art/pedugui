package com.modikk.school.service;

import com.modikk.school.document.*;
import com.modikk.school.dto.command.CreateSchoolCommand;
import com.modikk.school.dto.result.*;
import com.modikk.school.mapper.CoursMapper;
import com.modikk.school.repository.CoursRepository;
import com.modikk.school.repository.SchoolRepository;
import com.modikk.school.repository.SchoolYearRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SchoolYearService {
    private final SchoolYearRepository schoolYearRepository;
    private final CoursRepository coursRepository;

    public List<CoursResult> findCoursBySchoolYearId(String id) {
        return coursRepository.findAllBySchoolYearId(id).stream().map(CoursMapper.INSTANCE::documentToResult).toList();
    }

    public List<SchoolYearResult> findActiveSchoolYears() {
        var activeYears = schoolYearRepository.findByIsActiveTrue();
        return activeYears.stream().map(activeOne ->
            SchoolYearResult.builder()
                .id(activeOne.getId())
                .isViewable(activeOne.isViewable())
                .year(activeOne.getYear())
                .isActive(activeOne.isActive())
                .schoolLevels(
                    activeOne.getSchoolLevels().stream().map(s -> SchoolLevelResult.builder()
                        .code(s.getCode())
                        .description(s.getDescription())
                        .classSubjects(s.getClassSubjects().stream()
                            .map(cs -> ClassSubjectResult.builder()
                                .code(cs.getCode())
                                .description(cs.getDescription())
                                .build()
                            ).toList())
                        .classRooms(s.getClassRooms().stream()
                            .map(cs -> ClassRoomResult.builder()
                                .code(cs.getCode())
                                .description(cs.getDescription())
                                .build()
                            ).toList())
                        .build()).toList()
                ).build()
        ).toList();
    }

    public List<SchoolYearResult> findViewableSchoolYears() {
        var activeYears = schoolYearRepository.findByIsViewableTrue();
        return activeYears.stream().map(activeOne ->
                SchoolYearResult.builder()
                        .id(activeOne.getId())
                        .isViewable(activeOne.isViewable())
                        .year(activeOne.getYear())
                        .isActive(activeOne.isActive())
                        .schoolLevels(
                                activeOne.getSchoolLevels().stream().map(s -> SchoolLevelResult.builder()
                                        .code(s.getCode())
                                        .description(s.getDescription())
                                        .classSubjects(s.getClassSubjects().stream()
                                                .map(cs -> ClassSubjectResult.builder()
                                                        .code(cs.getCode())
                                                        .description(cs.getDescription())
                                                        .build()
                                                ).toList())
                                        .classRooms(s.getClassRooms().stream()
                                                .map(cs -> ClassRoomResult.builder()
                                                        .code(cs.getCode())
                                                        .description(cs.getDescription())
                                                        .build()
                                                ).toList())
                                        .build()).toList()
                        ).build()
        ).toList();
    }

    public void test() {
        var document = SchoolYearDocument.builder()
                .year(2026)
                .isActive(false)
                .schoolLevels(List.of(
                    tsm(), tse(), tss()
                )).build();


        document = schoolYearRepository.save(document);
    }

    private SchoolLevelDocument tsm() {
        return SchoolLevelDocument.builder()
                .code("TSM")
                .description("Terminal SM")
                .classRooms(List.of(
                        ClassRoomDocument.builder()
                                .code("TSM1")
                                .description("TSM1")
                                .build(),
                        ClassRoomDocument.builder()
                                .code("TSM2")
                                .description("TSM2")
                                .build()
                ))
                .classSubjects(List.of(
                        ClassSubjectDocument.builder()
                                .code("MTH")
                                .description("Maths")
                                .build(),
                        ClassSubjectDocument.builder()
                                .code("PHY")
                                .description("Physique")
                                .build(),
                        ClassSubjectDocument.builder()
                                .code("CHM")
                                .description("Chimie")
                                .build(),
                        ClassSubjectDocument.builder()
                                .code("BIO")
                                .description("Biologie")
                                .build(),
                        ClassSubjectDocument.builder()
                                .code("ECO")
                                .description("Economie")
                                .build(),
                        ClassSubjectDocument.builder()
                                .code("ANG")
                                .description("Anglais")
                                .build()
                ))
                .build();
    }

    private SchoolLevelDocument tse() {
        return SchoolLevelDocument.builder()
                .code("TSE")
                .description("Terminal SE")
                .classRooms(List.of(
                        ClassRoomDocument.builder()
                                .code("TSE")
                                .description("TSE")
                                .build()
                ))
                .classSubjects(List.of(
                        ClassSubjectDocument.builder()
                                .code("CHM")
                                .description("Chimie")
                                .build(),
                        ClassSubjectDocument.builder()
                                .code("BIO")
                                .description("Biologie")
                                .build(),
                        ClassSubjectDocument.builder()
                                .code("FRA")
                                .description("Français")
                                .build(),
                        ClassSubjectDocument.builder()
                                .code("ANG")
                                .description("Anglais")
                                .build()
                ))
                .build();
    }

    private SchoolLevelDocument tss() {
        return SchoolLevelDocument.builder()
                .code("TSS")
                .description("Terminal SS")
                .classRooms(List.of(
                        ClassRoomDocument.builder()
                                .code("TSS")
                                .description("TSS")
                                .build()
                ))
                .classSubjects(List.of(
                        ClassSubjectDocument.builder()
                                .code("PHL")
                                .description("Phylosophie")
                                .build(),
                        ClassSubjectDocument.builder()
                                .code("HIS")
                                .description("Histoire")
                                .build(),
                        ClassSubjectDocument.builder()
                                .code("FRA")
                                .description("Français")
                                .build(),
                        ClassSubjectDocument.builder()
                                .code("ANG")
                                .description("Anglais")
                                .build(),
                        ClassSubjectDocument.builder()
                                .code("GEO")
                                .description("Géographie")
                                .build()
                ))
                .build();
    }
}
