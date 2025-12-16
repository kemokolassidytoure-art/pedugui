package com.modikk.school.repository;

import com.modikk.school.document.SchoolDocument;
import com.modikk.school.document.SchoolLevelDocument;
import com.modikk.school.document.SchoolYearDocument;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SchoolYearRepository extends MongoRepository<SchoolYearDocument, String> {
    List<SchoolYearDocument> findByIsActiveTrue();
    List<SchoolYearDocument> findByIsViewableTrue();
}
