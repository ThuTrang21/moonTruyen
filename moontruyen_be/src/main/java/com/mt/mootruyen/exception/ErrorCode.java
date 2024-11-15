package com.mt.mootruyen.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;

@Getter
public enum ErrorCode {
    STORY_NOT_FOUND(404,"Story not found", HttpStatus.NOT_FOUND),
    STORY_EXISTED(409,"Story already existed", HttpStatus.CONFLICT),
    AUTHOR_NOT_FOUND(404,"Author not found", HttpStatus.NOT_FOUND),
    AUTHOR_EXISTED(409,"Author already existed", HttpStatus.CONFLICT),
    CATEGORY_NOT_FOUND(404,"Category not found", HttpStatus.NOT_FOUND),
    CATEGORY_EXISTED(409,"Category already existed", HttpStatus.CONFLICT),
    CHAPTER_NOT_FOUND(404,"Chapter not found", HttpStatus.NOT_FOUND),
    CHAPTER_EXISTED(409,"Chapter already existed", HttpStatus.CONFLICT),
    ;
    ErrorCode(int code, String message, HttpStatusCode statusCode){
        this.code = code;
        this.message = message;
        this.statusCode = statusCode;
    }
    private final int code;
    private final String message;
    private final HttpStatusCode statusCode;
}
