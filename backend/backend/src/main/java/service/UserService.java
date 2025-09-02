package com.example.backend.service;

import com.example.backend.dto.ProfileUpdateRequest;
import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    @Transactional
    public User updateProfile(User user, ProfileUpdateRequest request) {
        // Update only non-null fields
        if (request.getName() != null && !request.getName().trim().isEmpty()) {
            user.setName(request.getName().trim());
        }

        if (request.getBio() != null) {
            user.setBio(request.getBio().trim().isEmpty() ? null : request.getBio().trim());
        }

        if (request.getProfilePic() != null) {
            user.setProfilePic(request.getProfilePic().trim().isEmpty() ? null : request.getProfilePic().trim());
        }

        return userRepository.save(user);
    }
}
