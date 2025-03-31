package com.example.comp303_301241956_assignment4.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "department")
@NoArgsConstructor
public class Department {
    @Id
    @Column(name = "department_id")
    private int departmentId;

    @NotNull(message = "Department name is required!")
    @Column(name = "department_name")
    private String departmentName;
    public Department(int departmentId) {
        this.departmentId = departmentId;
    }
}
