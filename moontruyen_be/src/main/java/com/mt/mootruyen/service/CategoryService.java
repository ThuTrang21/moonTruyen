package com.mt.mootruyen.service;


import com.mt.mootruyen.dto.request.CategoryCreationRequest;
import com.mt.mootruyen.dto.request.CategoryUdatingRequest;
import com.mt.mootruyen.entity.Category;
import com.mt.mootruyen.exception.AppException;
import com.mt.mootruyen.exception.ErrorCode;
import com.mt.mootruyen.mapper.CategoryMapper;
import com.mt.mootruyen.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private CategoryMapper categoryMapper;

    public List<Category> getAllCategories(){
        return categoryRepository.findAll();
    }

    public Category getCategoryById(String categoryId){
        return categoryRepository.findById(categoryId).orElseThrow(() -> new AppException(ErrorCode.CATEGORY_NOT_FOUND));
    }

    public Category getCategoryBySlug(String slug){
        return categoryRepository.findBySlug(slug).orElseThrow(() -> new AppException(ErrorCode.CATEGORY_NOT_FOUND));
    }

    public Category createCategory(CategoryCreationRequest request){
        if(categoryRepository.existsByName(request.getName())){
            throw new AppException(ErrorCode.CATEGORY_EXISTED);
        }
        Category category = categoryMapper.toCategory(request);
        return categoryRepository.save(category);
    }

    public Category updateCategory(CategoryUdatingRequest request, String categoryId){
        Category category = getCategoryById(categoryId);
        categoryMapper.toUpdateCategory(request, category);
        return categoryRepository.save(category);
    }

    public void deleteCategory(String categoryId){
        categoryRepository.deleteById(categoryId);
    }
}
