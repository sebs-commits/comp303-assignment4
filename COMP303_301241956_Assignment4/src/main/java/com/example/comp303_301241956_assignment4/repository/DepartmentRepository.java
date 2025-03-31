package com.example.comp303_301241956_assignment4.repository;

import com.example.comp303_301241956_assignment4.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DepartmentRepository extends JpaRepository<Department, Integer> {
    List<Department> findAll();
}
