package com.mt.mootruyen.service;

import com.mt.mootruyen.dto.request.UserCreationRequest;
import com.mt.mootruyen.dto.request.UserUpdatingRequest;
import com.mt.mootruyen.entity.User;
import com.mt.mootruyen.exception.AppException;
import com.mt.mootruyen.exception.ErrorCode;
import com.mt.mootruyen.mapper.UserMapper;
import com.mt.mootruyen.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserMapper userMapper;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(String userId) {
        return userRepository.findById(userId).orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND));
    }

    public User createUser(UserCreationRequest request){
        if(userRepository.existsByUsername(request.getUsername())){
            throw new AppException(ErrorCode.USERNAME_EXISTED);
        }
        User user = userMapper.toUser(request);
        user.setCreatedAt(LocalDateTime.now());
        return userRepository.save(user);
    }

    public User updateUser(String userId ,UserUpdatingRequest request){
        User user = getUserById(userId);
        userMapper.toUpdateUser(request, user);
        return userRepository.save(user);
    }

    public void deleteUser(String userId) {
        userRepository.deleteById(userId);
    }
}
