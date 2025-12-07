package com.modikk.student.repository;

import com.modikk.student.document.StudentDocument;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StudentRepository extends MongoRepository<StudentDocument, String> {
}
