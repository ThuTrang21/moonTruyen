package com.mt.mootruyen.controller;


import com.mt.mootruyen.dto.request.ApiResponse;
import com.mt.mootruyen.dto.request.ChapterCreationRequest;
import com.mt.mootruyen.dto.request.ChapterUpdatingRequest;
import com.mt.mootruyen.entity.Chapter;
import com.mt.mootruyen.service.ChapterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/chapters")
public class ChapterController {
    @Autowired
    private ChapterService chapterService;

    @GetMapping("/story/{storyId}")
    ApiResponse<List<Chapter>> getAllChaptersByStoryId(@PathVariable String storyId) {
        return ApiResponse.<List<Chapter>>builder()
                .data(chapterService.getAllChaptersByStoryId(storyId))
                .build();
    }

    @GetMapping("/story/{storySlug}")
    ApiResponse<List<Chapter>> getChapterBySlug(@PathVariable String storySlug) {
        return ApiResponse.<List<Chapter>>builder()
                .data(chapterService.getAllChaptersByStorySlug(storySlug))
                .build();
    }

    @GetMapping("/id/{chapterId}")
    ApiResponse<Chapter> getChapterById(@PathVariable String chapterId) {
        return ApiResponse.<Chapter>builder()
                .data(chapterService.getChapterById(chapterId))
                .build();
    }

    @PostMapping
    ApiResponse<Chapter> createChapter(@RequestBody ChapterCreationRequest request) {
        return ApiResponse.<Chapter>builder()
                .data(chapterService.createChapter(request))
                .build();
    }

    @PutMapping("{chapterId}")
    ApiResponse<Chapter> updateChapter(@RequestBody ChapterUpdatingRequest request, @PathVariable String chapterId) {
        return ApiResponse.<Chapter>builder()
                .data(chapterService.updateChapter(request, chapterId))
                .build();
    }

    @DeleteMapping
    ApiResponse<String> deleteChapter(@PathVariable String chapterId) {
        chapterService.deleteChapter(chapterId);
        return ApiResponse.<String>builder()
                .message("Story deleted successfully!")
                .build();
    }
}
