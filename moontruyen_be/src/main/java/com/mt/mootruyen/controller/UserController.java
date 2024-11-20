package com.mt.mootruyen.controller;

import com.mt.mootruyen.dto.request.UserCreationRequest;
import com.mt.mootruyen.dto.request.UserUpdatingRequest;
import com.mt.mootruyen.dto.response.ApiResponse;
import com.mt.mootruyen.entity.User;
import com.mt.mootruyen.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    ApiResponse<List<User>> getAllUsers(){
        return ApiResponse.<List<User>>builder()
                .result(userService.getAllUsers())
                .build();
    }

    @GetMapping("/id/{userId}")
    ApiResponse<User> getUserById(@PathVariable String userId){
        return ApiResponse.<User>builder()
                .result(userService.getUserById(userId))
                .build();
    }

    @PostMapping
    ApiResponse<User> createUser(@RequestBody UserCreationRequest request){
        return ApiResponse.<User>builder()
                .result(userService.createUser(request))
                .build();
    }

    @PutMapping("{userId}")
    ApiResponse<User> updateUser(@PathVariable String userId, @RequestBody UserUpdatingRequest request){
        return ApiResponse.<User>builder()
                .result(userService.updateUser(userId, request))
                .build();
    }

    @DeleteMapping("{userId}")
    ApiResponse<String> deleteUser(@PathVariable String userId){
        return ApiResponse.<String>builder()
                .message("User deleted successfully!")
                .build();
    }
}
