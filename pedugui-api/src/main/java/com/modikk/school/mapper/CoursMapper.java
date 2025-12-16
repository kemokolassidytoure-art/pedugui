package com.modikk.school.mapper;

import com.modikk.school.document.CoursDocument;
import com.modikk.school.dto.result.CoursResult;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface CoursMapper {
    CoursMapper INSTANCE = Mappers.getMapper(CoursMapper.class);

    CoursResult documentToResult(CoursDocument document);
}
