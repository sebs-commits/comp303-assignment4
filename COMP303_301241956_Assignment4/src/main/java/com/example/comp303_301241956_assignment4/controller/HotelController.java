package com.example.comp303_301241956_assignment4.controller;

import com.example.comp303_301241956_assignment4.entity.Hotel;
import com.example.comp303_301241956_assignment4.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class HotelController {

    @Autowired
    private HotelRepository hotelRepository;
    @GetMapping("/hotels")
    public ResponseEntity<?>getAllHotels(){


        try{
            List<Hotel> hotels = hotelRepository.findAll();
            if(hotels.isEmpty()){
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No Hotels found");
            }
            return ResponseEntity.ok(hotels);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error getting Hotels" + e.getMessage());
        }


    }
}
