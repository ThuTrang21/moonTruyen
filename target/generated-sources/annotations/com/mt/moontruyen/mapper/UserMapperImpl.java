package com.mt.moontruyen.mapper;

import com.mt.moontruyen.dto.request.UserCreationRequest;
import com.mt.moontruyen.dto.request.UserUpdatingRequest;
import com.mt.moontruyen.dto.response.UserResponse;
import com.mt.moontruyen.entity.Role;
import com.mt.moontruyen.entity.User;
import java.util.LinkedHashSet;
import java.util.Set;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-11-26T16:58:35+0700",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 21.0.1 (Oracle Corporation)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public User toUser(UserCreationRequest request) {
        if ( request == null ) {
            return null;
        }

        User.UserBuilder user = User.builder();

        user.username( request.getUsername() );
        user.password( request.getPassword() );
        user.email( request.getEmail() );
        user.avatar( request.getAvatar() );

        return user.build();
    }

    @Override
    public User toUpdateUser(UserUpdatingRequest request, User user) {
        if ( request == null ) {
            return user;
        }

        user.setPassword( request.getPassword() );
        user.setEmail( request.getEmail() );
        user.setAvatar( request.getAvatar() );

        return user;
    }

    @Override
    public UserResponse toUserResponse(User user) {
        if ( user == null ) {
            return null;
        }

        UserResponse.UserResponseBuilder userResponse = UserResponse.builder();

        userResponse.id( user.getId() );
        userResponse.username( user.getUsername() );
        userResponse.email( user.getEmail() );
        userResponse.avatar( user.getAvatar() );
        Set<Role> set = user.getRoles();
        if ( set != null ) {
            userResponse.roles( new LinkedHashSet<Role>( set ) );
        }
        userResponse.createdAt( user.getCreatedAt() );
        userResponse.updatedAt( user.getUpdatedAt() );

        return userResponse.build();
    }
}
