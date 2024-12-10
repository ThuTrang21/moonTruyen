package com.mt.mootruyen.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
<<<<<<< HEAD:moontruyen_be/src/main/java/com/mt/moontruyen/dto/request/AuthenticationRequest.java
public class AuthenticationRequest {
    private String email;
    private String password;
=======
@AllArgsConstructor
@NoArgsConstructor
public class CategoryUdatingRequest {
    private String id;
    private String name;
    private String description;
>>>>>>> 597fa535633348a20dae44cff428295a05917136:moontruyen_be/src/main/java/com/mt/mootruyen/dto/request/CategoryUdatingRequest.java
}
