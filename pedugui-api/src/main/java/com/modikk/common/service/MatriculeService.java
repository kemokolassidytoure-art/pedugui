package com.modikk.common.service;

import com.modikk.common.document.MatriculeSequenceDocument;
import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.stereotype.Service;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import static org.springframework.data.mongodb.core.query.Criteria.where;

@Service
@RequiredArgsConstructor
public class MatriculeService {
    private final MongoOperations mongo;

    /**
     * Atomically increments and returns the next value for the given key.
     */
    public long next(String key) {
        var query = new Query(where("_id").is(key));
        var update = new Update().inc("seq", 1);
        var options = FindAndModifyOptions.options()
                .returnNew(true)
                .upsert(true);

        MatriculeSequenceDocument counter = mongo.findAndModify(query, update, options, MatriculeSequenceDocument.class);
        return (counter != null) ? counter.getSeq() : 1L;
    }

    public String generateID() {
        final String SEQ_KEY = "mat_seq";
        final String PREFIX = "A-";
        final int PAD = 8;

        long n = this.next(SEQ_KEY);
        String padded = String.format("%0" + PAD + "d", n);
        return PREFIX + padded;
    }
}
