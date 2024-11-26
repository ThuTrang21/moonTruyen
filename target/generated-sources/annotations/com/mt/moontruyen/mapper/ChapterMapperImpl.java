package com.mt.moontruyen.mapper;

import com.mt.moontruyen.dto.request.ChapterCreationRequest;
import com.mt.moontruyen.entity.Chapter;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-11-26T16:58:35+0700",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 21.0.1 (Oracle Corporation)"
)
@Component
public class ChapterMapperImpl implements ChapterMapper {

    @Override
    public Chapter toChapter(ChapterCreationRequest request) {
        if ( request == null ) {
            return null;
        }

        Chapter.ChapterBuilder chapter = Chapter.builder();

        chapter.content( request.getContent() );
        chapter.chapterNumber( request.getChapterNumber() );

        return chapter.build();
    }
}
