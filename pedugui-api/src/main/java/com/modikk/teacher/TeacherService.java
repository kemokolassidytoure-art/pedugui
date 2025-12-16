package com.modikk.teacher;

import com.modikk.common.dto.query.ByMatriculeQuery;
import com.modikk.common.service.MatriculeService;
import com.modikk.student.document.StudentDocument;
import com.modikk.student.dto.result.StudentResult;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TeacherService {
    private final TeacherRepository teacherRepository;
    private final MatriculeService matriculeService;

    public TeacherResult register(RegisterTeacherCommand command) {
        var documentBuilder = TeacherDocument.builder()
                .lastName(command.lastName())
                .firstName(command.firstName())
                .dateOfBirth(command.dateOfBirth())
                .sex(command.sex())
                .quartier(command.quartier())
                .commune(command.commune())
                .phoneNumber(command.phoneNumber())
                .email(command.email());

        var document = documentBuilder.build();
        document.setId(matriculeService.generateID());
        document = teacherRepository.save(document);

        return TeacherResult.builder()
                .id(document.getId())
                .lastName(document.getLastName())
                .firstName(document.getFirstName())
                .dateOfBirth(document.getDateOfBirth())
                .sex(document.getSex())
                .quartier(document.getQuartier())
                .commune(document.getCommune())
                .phoneNumber(document.getPhoneNumber())
                .email(document.getEmail())
                .build();
    }

    public TeacherResult findByMatricule(ByMatriculeQuery query) {
        var teacher = teacherRepository.findById(query.matricule());
        if (teacher.isEmpty()) {
            return TeacherResult.builder().build();
        }

        return TeacherMapper.INSTANCE.documentToResult(teacher.get());
    }

//    public TeacherResult register(RegisterTeacherCommand command) {
//        TeacherDocument document = null;
//        for (var i = 0; i < 20; i++){
//            var documentBuilder = TeacherDocument.builder()
//                    .lastName(command.lastName() + i)
//                    .firstName(command.firstName() + i)
//                    .dateOfBirth(command.dateOfBirth())
//                    .sex(command.sex())
//                    .quartier(command.quartier())
//                    .commune(command.commune())
//                    .phoneNumber(command.phoneNumber())
//                    .email(command.email());
//
//            document = documentBuilder.build();
//            document.setId(matriculeService.generateID());
//            document = teacherRepository.save(document);
//        }
//
//
//        return TeacherResult.builder()
//                .id(document.getId())
//                .lastName(document.getLastName())
//                .firstName(document.getFirstName())
//                .dateOfBirth(document.getDateOfBirth())
//                .sex(document.getSex())
//                .quartier(document.getQuartier())
//                .commune(document.getCommune())
//                .phoneNumber(document.getPhoneNumber())
//                .email(document.getEmail())
//                .build();
//    }
}
