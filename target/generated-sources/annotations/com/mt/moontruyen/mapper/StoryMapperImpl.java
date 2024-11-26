package com.mt.moontruyen.mapper;

import com.mt.moontruyen.dto.request.StoryCreationRequest;
import com.mt.moontruyen.dto.request.StoryUpdateRequest;
import com.mt.moontruyen.entity.Story;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-11-26T16:58:35+0700",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 21.0.1 (Oracle Corporation)"
)
@Component
public class StoryMapperImpl implements StoryMapper {

    @Override
    public Story toStory(StoryCreationRequest request) {
        if ( request == null ) {
            return null;
        }

        Story.StoryBuilder story = Story.builder();

        story.title( request.getTitle() );
        story.description( request.getDescription() );
        story.image( request.getImage() );
        story.views( request.getViews() );
        story.isCompleted( request.getIsCompleted() );

        return story.build();
    }

    @Override
    public void toUpdateStory(StoryUpdateRequest request, Story story) {
        if ( request == null ) {
            return;
        }

        story.setTitle( request.getTitle() );
        story.setDescription( request.getDescription() );
        story.setImage( request.getImage() );
        story.setViews( request.getViews() );
        story.setIsCompleted( request.getIsCompleted() );
    }
}
