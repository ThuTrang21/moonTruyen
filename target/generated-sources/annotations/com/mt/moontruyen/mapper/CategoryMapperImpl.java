package com.mt.moontruyen.mapper;

import com.mt.moontruyen.dto.request.CategoryCreationRequest;
import com.mt.moontruyen.dto.request.CategoryUdatingRequest;
import com.mt.moontruyen.entity.Category;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-11-26T16:58:35+0700",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 21.0.1 (Oracle Corporation)"
)
@Component
public class CategoryMapperImpl implements CategoryMapper {

    @Override
    public Category toCategory(CategoryCreationRequest request) {
        if ( request == null ) {
            return null;
        }

        Category.CategoryBuilder category = Category.builder();

        category.id( request.getId() );
        category.name( request.getName() );
        category.description( request.getDescription() );

        return category.build();
    }

    @Override
    public Category toUpdateCategory(CategoryUdatingRequest request, Category category) {
        if ( request == null ) {
            return category;
        }

        category.setId( request.getId() );
        category.setName( request.getName() );
        category.setDescription( request.getDescription() );

        return category;
    }
}
