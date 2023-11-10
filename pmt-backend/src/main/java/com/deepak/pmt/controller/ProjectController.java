package com.deepak.pmt.controller;

import com.deepak.pmt.model.Employee;
import com.deepak.pmt.model.Project;
import com.deepak.pmt.services.EmployeeService;
import com.deepak.pmt.services.ProjectService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@CrossOrigin(origins = "http://localhost:3000")
    @RestController
    @RequestMapping("/api/v2/")
    public class ProjectController {

        private ProjectService projectService;

        public ProjectController(ProjectService projectService){
            this.projectService=projectService;
        }

        @PostMapping("/projects")
        public Project createProject(@RequestBody Project project){
            return projectService.createProject(project);
        }

        @GetMapping("/projects")
        public List<Project> getAllProjects(){
            return projectService.getAllProjects();
        }
        @DeleteMapping("/projects/{id}")
        public ResponseEntity<Map<String,Boolean>> deleteProjects(@PathVariable Long id){
            boolean deleted = false;
            deleted = projectService.deleteProject(id);
            Map<String,Boolean> response = new HashMap<>();
            response.put("deleted",deleted);
            return ResponseEntity.ok(response);

        }
        @GetMapping("//projects/{id}")
        public ResponseEntity<Project> getProjectById(@PathVariable Long id){
            Project project = null;
            project = projectService.getProjectById(id);
            return ResponseEntity.ok(project);
        }
        @PutMapping("//projects/{id}")
        public ResponseEntity<Project> updateProject(@PathVariable Long id, @RequestBody Project project){
            project = projectService.updateProject(id, project);
            return ResponseEntity.ok(project);
        }


    }



