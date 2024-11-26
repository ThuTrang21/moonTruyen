package com.mt.moontruyen.mapper;

import com.mt.moontruyen.dto.request.AuthorCreationRequest;
import com.mt.moontruyen.dto.request.AuthorUpdateRequest;
import com.mt.moontruyen.entity.Author;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-11-26T16:58:35+0700",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 21.0.1 (Oracle Corporation)"
)
@Component
public class AuthorMapperImpl implements AuthorMapper {

    @Override
    public Author toAuthor(AuthorCreationRequest request) {
        if ( request == null ) {
            return null;
        }

        Author.AuthorBuilder author = Author.builder();

        author.name( request.getName() );
        author.description( request.getDescription() );
        author.bio( request.getBio() );
        author.avatar( request.getAvatar() );

        return author.build();
    }

    @Override
    public Author toUpdateAuthor(AuthorUpdateRequest request, Author author) {
        if ( request == null ) {
            return author;
        }

        author.setName( request.getName() );
        author.setDescription( request.getDescription() );
        author.setBio( request.getBio() );
        author.setAvatar( request.getAvatar() );

        return author;
    }
}
