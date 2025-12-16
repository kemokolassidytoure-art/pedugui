package com.modikk.common.repository;

import com.modikk.common.document.MatriculeSequenceDocument;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MatriculeRepository extends MongoRepository<MatriculeSequenceDocument, String> {
}
