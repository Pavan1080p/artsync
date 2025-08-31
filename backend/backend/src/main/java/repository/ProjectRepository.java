package com.example.backend.repository;

import com.example.backend.entity.Project;
import com.example.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {

    List<Project> findByUserOrderByCreatedAtDesc(User user);

}