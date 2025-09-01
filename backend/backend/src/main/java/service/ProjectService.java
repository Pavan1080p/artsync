package com.example.backend.service;

import com.example.backend.dto.ProjectRequest;
import com.example.backend.dto.ProjectResponse;
import com.example.backend.entity.Project;
import com.example.backend.entity.User;
import com.example.backend.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;

    public ProjectResponse createProject(ProjectRequest request, User user) {
        Project project = Project.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .imageUrl(request.getImageUrl())
                .user(user)
                .build();

        Project savedProject = projectRepository.save(project);
        return new ProjectResponse(savedProject);
    }

    public List<ProjectResponse> getUserProjects(User user) {
        List<Project> projects = projectRepository.findByUserOrderByCreatedAtDesc(user);
        return projects.stream()
                .map(ProjectResponse::new)
                .collect(Collectors.toList());
    }

    // NEW METHOD: Check if user has projects (for profile edit access)
    public boolean userHasProjects(User user) {
        return projectRepository.existsByUser(user);
    }

    // NEW METHOD: Get project count for user
    public long getUserProjectCount(User user) {
        return projectRepository.countByUser(user);
    }
}