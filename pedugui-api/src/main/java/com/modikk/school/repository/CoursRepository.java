package com.modikk.school.repository;

import com.modikk.school.document.CoursDocument;
import com.modikk.school.document.SchoolDocument;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CoursRepository extends MongoRepository<CoursDocument, String> {
    List<CoursDocument> findAllBySchoolYearId(String id);
}
