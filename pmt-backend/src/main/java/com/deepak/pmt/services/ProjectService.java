package com.deepak.pmt.services;

import com.deepak.pmt.model.Project;

import java.util.List;

public interface ProjectService {
    Project createProject(Project project);

    List<Project> getAllProjects();

    boolean deleteProject(Long id);

    Project getProjectById(Long id);

    Project updateProject(Long id, Project project);
}
