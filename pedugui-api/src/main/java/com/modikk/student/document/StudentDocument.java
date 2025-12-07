package com.modikk.student.document;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Builder
@Document(collection = "student")
public class StudentDocument {
    @Id
    String id;
    String lastName;
    String firstName;
    Date dateOfBirth;
    String sex;
    String quartier;
    String commune;
    String phoneNumber;
    String email;
    private String fatherLastName;
    private String fatherFirstName;
    private String fatherPhoneNumber;
    private String fatherEmail;
    private String motherLastName;
    private String motherFirstName;
    private String motherPhoneNumber;
    private String motherEmail;
    private String legalGuardianLastName;
    private String legalGuardianFirstName;
    private String legalGuardianPhoneNumber;
    private String legalGuardianEmail;
}
