package com.modikk.school.service;

import com.modikk.school.document.SchoolDocument;
import com.modikk.school.dto.command.CreateSchoolCommand;
import com.modikk.school.dto.result.SchoolResult;
import com.modikk.school.repository.SchoolRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SchoolService {
    private final SchoolRepository schoolRepository;


    public SchoolResult create(CreateSchoolCommand command) {
        var document = SchoolDocument.builder()
                .name(command.name())
                .creationDate(command.creationDate())
                .level(command.level())
                .quartier(command.quartier())
                .commune(command.commune())
                .phoneNumber(command.phoneNumber())
                .email(command.email())
                .ownerLastName(command.ownerLastName())
                .ownerFirstName(command.ownerFirstName())
                .ownerDateOfBirth(command.ownerDateOfBirth())
                .ownerGender(command.ownerGender())
                .ownerQuartier(command.ownerQuartier())
                .ownerCommune(command.ownerCommune())
                .ownerPhoneNumber(command.ownerPhoneNumber())
                .ownerEmail(command.ownerEmail())
                .directorLastName(command.directorLastName())
                .directorFirstName(command.directorFirstName())
                .directorDateOfBirth(command.directorDateOfBirth())
                .directorGender(command.directorGender())
                .directorQuartier(command.directorQuartier())
                .directorCommune(command.directorCommune())
                .directorPhoneNumber(command.directorPhoneNumber())
                .directorEmail(command.directorEmail())
                .build();

        document = schoolRepository.save(document);

        return SchoolResult.builder()
                .id(document.getId())
                .name(document.getName())
                .creationDate(document.getCreationDate())
                .level(document.getLevel())
                .quartier(document.getQuartier())
                .commune(document.getCommune())
                .phoneNumber(document.getPhoneNumber())
                .email(document.getEmail())
                .ownerLastName(document.getOwnerLastName())
                .ownerFirstName(document.getOwnerFirstName())
                .ownerDateOfBirth(document.getOwnerDateOfBirth())
                .ownerGender(document.getOwnerGender())
                .ownerQuartier(document.getOwnerQuartier())
                .ownerCommune(document.getOwnerCommune())
                .ownerPhoneNumber(document.getOwnerPhoneNumber())
                .ownerEmail(document.getOwnerEmail())
                .directorLastName(document.getDirectorLastName())
                .directorFirstName(document.getDirectorFirstName())
                .directorDateOfBirth(document.getDirectorDateOfBirth())
                .directorGender(document.getDirectorGender())
                .directorQuartier(document.getDirectorQuartier())
                .directorCommune(document.getDirectorCommune())
                .directorPhoneNumber(document.getDirectorPhoneNumber())
                .directorEmail(document.getDirectorEmail())
                .build();
    }
}
