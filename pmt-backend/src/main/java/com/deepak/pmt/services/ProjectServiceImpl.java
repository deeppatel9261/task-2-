package com.deepak.pmt.services;


import com.deepak.pmt.entity.ProjectEntity;
import com.deepak.pmt.model.Project;
import com.deepak.pmt.repository.ProjectRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProjectServiceImpl implements ProjectService{

    private ProjectRepository projectRepository;


    public ProjectServiceImpl(ProjectRepository employeeRepository) {
        this.projectRepository = employeeRepository;
    }

    @Override
    public Project createProject(Project project){
        ProjectEntity projectEntity =new ProjectEntity();

        BeanUtils.copyProperties(project,projectEntity);
        projectRepository.save(projectEntity);
        return project;
    }

    @Override
    public List<Project> getAllProjects() {
        List<ProjectEntity> projectEntities
                = projectRepository.findAll();

        List<Project> projects =projectEntities
                .stream()
                .map(emp -> new Project(
                        emp.getId(),
                        emp.getProjectName(),
                        emp.getDescription()))
                .collect(Collectors.toList());
        return projects;
    }

    @Override
    public boolean deleteProject(Long id) {
        ProjectEntity project = projectRepository.findById(id).get();
        projectRepository.delete(project);
        return true;
    }

    @Override
    public Project getProjectById(Long id) {
        ProjectEntity projectEntity
                = projectRepository.findById(id).get();
        Project project =new Project();
        BeanUtils.copyProperties(projectEntity, project);
        return project;
    }

    @Override
    public Project updateProject(Long id, Project project) {
        ProjectEntity projectEntity
                = projectRepository.findById(id).get();
        projectEntity.setProjectName(project.getProjectName());
        projectEntity.setDescription(project.getDescription());


        projectRepository.save(projectEntity);
        return project;
    }


}
