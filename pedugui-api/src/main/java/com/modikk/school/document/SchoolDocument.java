package com.modikk.school.document;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Builder
@Document(collection = "school")
public class SchoolDocument {
    @Id
    private String id;
    private String name;
    private Date creationDate;
    private String level;
    private String quartier;
    private String commune;
    private String phoneNumber;
    private String email;
    private String ownerLastName;
    private String ownerFirstName;
    private Date ownerDateOfBirth;
    private String ownerGender;
    private String ownerQuartier;
    private String ownerCommune;
    private String ownerPhoneNumber;
    private String ownerEmail;
    private String directorLastName;
    private String directorFirstName;
    private Date directorDateOfBirth;
    private String directorGender;
    private String directorQuartier;
    private String directorCommune;
    private String directorPhoneNumber;
    private String directorEmail;
}
