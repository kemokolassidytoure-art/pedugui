package com.modikk.teacher;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Builder
@Document(collection = "teacher")
public class TeacherDocument {
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
}
