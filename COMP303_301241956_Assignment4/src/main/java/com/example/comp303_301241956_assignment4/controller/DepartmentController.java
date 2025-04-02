package com.example.comp303_301241956_assignment4.controller;

import com.example.comp303_301241956_assignment4.entity.Department;
import com.example.comp303_301241956_assignment4.repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class DepartmentController {
    @Autowired
    private DepartmentRepository departmentRepository;

    @GetMapping("/departments")
    public ResponseEntity<?> getAllDepartments() {
        try{
            List<Department> departments = departmentRepository.findAll();

            if(departments.isEmpty())
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No departments found");

            return ResponseEntity.ok(departments);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error getting departments" + e.getMessage());
        }

    }
}
