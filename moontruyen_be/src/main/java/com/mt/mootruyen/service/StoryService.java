package com.mt.mootruyen.service;

import com.mt.mootruyen.dto.request.StoryCreationRequest;
import com.mt.mootruyen.dto.request.StoryUpdateRequest;
import com.mt.mootruyen.entity.Author;
import com.mt.mootruyen.entity.Category;
import com.mt.mootruyen.entity.Story;
import com.mt.mootruyen.exception.AppException;
import com.mt.mootruyen.exception.ErrorCode;
import com.mt.mootruyen.mapper.StoryMapper;
import com.mt.mootruyen.repository.AuthorRepository;
import com.mt.mootruyen.repository.CategoryRepository;
import com.mt.mootruyen.repository.StoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StoryService {
    @Autowired
    private StoryRepository storyRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private AuthorRepository authorRepository;

    @Autowired
    private StoryMapper storyMapper;

    public List<Story> getAllStories(){
        return storyRepository.findAll();
    }

    public Story getStoryById(String storyId){
        return storyRepository.findById(storyId).orElseThrow(() -> new AppException(ErrorCode.STORY_NOT_FOUND));
    }

    public Story getStoryBySlug(String slug){
        return storyRepository.findBySlug(slug).orElseThrow(() -> new AppException(ErrorCode.STORY_NOT_FOUND));
    }

    public Story createStory(StoryCreationRequest request){

        Optional<Author> authorOptional = authorRepository.findById(request.getAuthorId());
        if(authorOptional.isEmpty()){
            throw new AppException(ErrorCode.AUTHOR_NOT_FOUND);
        }

        List<Category> categories = categoryRepository.findAllById(request.getCategoryIds());
        if(categories.isEmpty()){
            throw new AppException(ErrorCode.CATEGORY_NOT_FOUND);
        }
        if(storyRepository.existsByTitle(request.getTitle())){
            throw new AppException(ErrorCode.STORY_EXISTED);
        }

        Author author = authorOptional.get();
        Story story = storyMapper.toStory(request);
        story.setAuthor(author);
        story.setCategories(categories);
        return storyRepository.save(story);
    }

    public Story updateStory(String storyId, StoryUpdateRequest request){

        Optional<Author> authorOptional = authorRepository.findById(request.getAuthorId());
        if(authorOptional.isEmpty()){
            throw new AppException(ErrorCode.AUTHOR_NOT_FOUND);
        }

        List<Category> categories = categoryRepository.findAllById(request.getCategoryIds());
        if(categories.isEmpty()){
            throw new AppException(ErrorCode.CATEGORY_NOT_FOUND);
        }

        Author author = authorOptional.get();
        Story story = getStoryById(storyId);
        storyMapper.toUpdateStory(request,story);
        story.setAuthor(author);
        story.setCategories(categories);
        return storyRepository.save(story);
    }
    public void deleteStory(String storyId){
        storyRepository.deleteById(storyId);
    }
}
