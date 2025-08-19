package com.example.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder; // Import Builder
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder // ✅ Add @Builder annotation
public class AuthResponse {
    private String token;
    // You can keep message if you need it for specific cases, but UserResponse is more common
    // private String message;

    private com.example.backend.dto.UserResponse user; // ✅ Add UserResponse to hold user details
}