package com.modikk.student.service;

import com.modikk.common.dto.result.BasePersonResult;
import com.modikk.common.service.MatriculeService;
import com.modikk.student.document.StudentDocument;
import com.modikk.student.dto.command.CreateStudentCommand;
import com.modikk.student.dto.result.StudentResult;
import com.modikk.student.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class StudentService {
    private final StudentRepository studentRepository;
    private final MatriculeService matriculeService;

    public StudentResult create(CreateStudentCommand command) {
        var documentBuilder = StudentDocument.builder()
                .lastName(command.lastName())
                .firstName(command.firstName())
                .dateOfBirth(command.dateOfBirth())
                .sex(command.sex())
                .quartier(command.quartier())
                .commune(command.commune())
                .phoneNumber(command.phoneNumber())
                .email(command.email())
                .fatherLastName(command.father().lastName())
                .fatherFirstName(command.father().firstName())
                .fatherPhoneNumber(command.father().phoneNumber())
                .fatherEmail(command.father().email())
                .motherLastName(command.mother().lastName())
                .motherFirstName(command.mother().firstName())
                .motherPhoneNumber(command.mother().phoneNumber())
                .motherEmail(command.mother().email());


        if (command.legalGuardian() != null) {
            documentBuilder
                    .legalGuardianLastName(command.legalGuardian().lastName())
                    .legalGuardianFirstName(command.legalGuardian().firstName())
                    .legalGuardianPhoneNumber(command.legalGuardian().phoneNumber())
                    .legalGuardianEmail(command.legalGuardian().email());
        }

        var document = documentBuilder.build();
        document.setId(matriculeService.generateID());
        document = studentRepository.save(document);


        return StudentResult.builder()
                .id(document.getId())
                .lastName(document.getLastName())
                .firstName(document.getFirstName())
                .dateOfBirth(document.getDateOfBirth())
                .sex(document.getSex())
                .quartier(document.getQuartier())
                .commune(document.getCommune())
                .phoneNumber(document.getPhoneNumber())
                .email(document.getEmail())
                .father(new BasePersonResult(
                        document.getFatherLastName(),
                        document.getFatherLastName(),
                        document.getFatherPhoneNumber(),
                        document.getFatherEmail()
                ))
                .mother(new BasePersonResult(
                        document.getMotherLastName(),
                        document.getMotherLastName(),
                        document.getMotherPhoneNumber(),
                        document.getMotherEmail()
                ))
                .legalGuardian(new BasePersonResult(
                        document.getLegalGuardianLastName(),
                        document.getLegalGuardianLastName(),
                        document.getLegalGuardianPhoneNumber(),
                        document.getLegalGuardianEmail()
                ))
                .build();
    }

//    public StudentResult create(CreateStudentCommand command) {
//        StudentDocument document = null;
//        for (var i = 0; i < 600; i++) {
//            var documentBuilder = StudentDocument.builder()
//                    .lastName(command.lastName() + i)
//                    .firstName(command.firstName() + i)
//                    .dateOfBirth(command.dateOfBirth())
//                    .sex(i % 2 == 0 ? command.sex() : "F")
//                    .quartier(command.quartier() + i)
//                    .commune(command.commune())
//                    .phoneNumber(command.phoneNumber())
//                    .email(command.email())
//                    .fatherLastName(command.father().lastName())
//                    .fatherFirstName(command.father().firstName())
//                    .fatherPhoneNumber(command.father().phoneNumber())
//                    .fatherEmail(command.father().email())
//                    .motherLastName(command.mother().lastName())
//                    .motherFirstName(command.mother().firstName())
//                    .motherPhoneNumber(command.mother().phoneNumber())
//                    .motherEmail(command.mother().email());
//
//
//            if (command.legalGuardian() != null) {
//                documentBuilder
//                        .legalGuardianLastName(command.legalGuardian().lastName())
//                        .legalGuardianFirstName(command.legalGuardian().firstName())
//                        .legalGuardianPhoneNumber(command.legalGuardian().phoneNumber())
//                        .legalGuardianEmail(command.legalGuardian().email());
//            }
//
//            document = documentBuilder.build();
//            document.setId(matriculeService.generateID());
//            document = studentRepository.save(document);
//        }
//
//
//        return StudentResult.builder()
//                .id(document.getId())
//                .lastName(document.getLastName())
//                .firstName(document.getFirstName())
//                .dateOfBirth(document.getDateOfBirth())
//                .sex(document.getSex())
//                .quartier(document.getQuartier())
//                .commune(document.getCommune())
//                .phoneNumber(document.getPhoneNumber())
//                .email(document.getEmail())
//                .father(new BasePersonResult(
//                        document.getFatherLastName(),
//                        document.getFatherLastName(),
//                        document.getFatherPhoneNumber(),
//                        document.getFatherEmail()
//                ))
//                .mother(new BasePersonResult(
//                        document.getMotherLastName(),
//                        document.getMotherLastName(),
//                        document.getMotherPhoneNumber(),
//                        document.getMotherEmail()
//                ))
//                .legalGuardian(new BasePersonResult(
//                        document.getLegalGuardianLastName(),
//                        document.getLegalGuardianLastName(),
//                        document.getLegalGuardianPhoneNumber(),
//                        document.getLegalGuardianEmail()
//                ))
//                .build();
//    }
}
