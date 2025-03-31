package com.example.comp303_301241956_assignment4.controller;


import com.example.comp303_301241956_assignment4.entity.Staff;
import com.example.comp303_301241956_assignment4.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class CreateStaffController {

    @Autowired
    private StaffRepository staffRepository;

    @PostMapping("/create-staff")
    public ResponseEntity<?> createStaff(@RequestBody Staff staff) {

        try{
            staffRepository.save(staff);
            return ResponseEntity.ok("Staff created successfully!");
        }
        catch(Exception e){
            return ResponseEntity.badRequest().body("Error creating staff: " + e.getMessage());
        }
    }
}
