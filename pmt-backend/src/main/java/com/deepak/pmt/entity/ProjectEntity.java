package com.deepak.pmt.entity;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name ="projects")
public class ProjectEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    private long id;
    private String projectName;
    private String description;

}
