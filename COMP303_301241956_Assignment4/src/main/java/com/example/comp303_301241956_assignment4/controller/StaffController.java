package com.example.comp303_301241956_assignment4.controller;


import com.example.comp303_301241956_assignment4.entity.Staff;
import com.example.comp303_301241956_assignment4.repository.StaffRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class StaffController {

    @Autowired
    private StaffRepository staffRepository;

    @GetMapping("/staff")
    public ResponseEntity<?> getAllStaff(){

        try{
            List<Staff> staff = staffRepository.findAll();

            if(staff.isEmpty()){
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No staff found");
            }

            return ResponseEntity.ok(staff);
        } catch (Exception e){
            return ResponseEntity.badRequest().body("Error getting staff" + e.getMessage());
        }

    }
    @GetMapping("/staff/{staffId}")
    public ResponseEntity<?> getStaffById(@PathVariable int staffId) {

        try {
            Optional<Staff> optionalStaff = staffRepository.findById(staffId);
            if (optionalStaff.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Staff not found");
            }
            return ResponseEntity.ok(optionalStaff.get());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error getting staff: " + e.getMessage());
        }
    }

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

    @PutMapping("/update-staff/{staffId}")
    public ResponseEntity<?> updateStaff(@RequestBody Staff staff, @PathVariable int staffId) {
        try {
            Optional<Staff> optionalStaff = staffRepository.findById(staffId);
            if (optionalStaff.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Staff not found");
            }

            Staff existingStaff = optionalStaff.get();
            if (staff.getDepartment() != null) {
                existingStaff.setDepartment(staff.getDepartment());
            }
            if (staff.getHotel() != null) {
                existingStaff.setHotel(staff.getHotel());
            }
            if(staff.getStaffRating() != 0) {
                int rating = staff.getStaffRating();

                if (rating < 0 || rating > 5) {
                    return ResponseEntity.badRequest().body("Rating must be between 0 and 5");
                }
                existingStaff.setStaffRating(staff.getStaffRating());
            }
            return ResponseEntity.ok(staffRepository.save(existingStaff));

        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error adding staff: " + e.getMessage());
        }
    }

}
