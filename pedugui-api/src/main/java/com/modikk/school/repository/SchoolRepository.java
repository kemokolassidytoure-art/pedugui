package com.modikk.school.repository;

import com.modikk.school.document.SchoolDocument;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SchoolRepository extends MongoRepository<SchoolDocument, String> {
}
