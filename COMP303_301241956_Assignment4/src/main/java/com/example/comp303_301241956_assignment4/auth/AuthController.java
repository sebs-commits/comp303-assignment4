package com.example.comp303_301241956_assignment4.auth;

import com.example.comp303_301241956_assignment4.entity.Staff;
import com.example.comp303_301241956_assignment4.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private StaffRepository staffRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Staff staff) {
        try {
            staff.setPassword(passwordEncoder.encode(staff.getPassword()));
            staffRepository.save(staff);
            return ResponseEntity.ok("You are now registed!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error during registration: " + e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> request) {
        try {
            Optional<Staff> staff = staffRepository.findByUsername(request.get("username"));

            if(staff.isEmpty()) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
            }

            if(!passwordEncoder.matches(request.get("password"), staff.get().getPassword())) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Wrong password");
            }

            return ResponseEntity.ok(Map.of(
                    "message", "Login successful",
                    "department", staff.get().getDepartment().getDepartmentName()
            ));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error during login: " + e.getMessage());
        }
    }
}