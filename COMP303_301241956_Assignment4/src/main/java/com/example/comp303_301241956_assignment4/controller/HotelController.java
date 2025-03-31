package com.example.comp303_301241956_assignment4.controller;

import com.example.comp303_301241956_assignment4.entity.Hotel;
import com.example.comp303_301241956_assignment4.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class HotelController {

    @Autowired
    private HotelRepository hotelRepository;
    @GetMapping("/hotels")
    public ResponseEntity<?>getAllHotels(){
        List<Hotel> hotels = hotelRepository.findAll();

        Map<String, Object> response = new HashMap<>();
        response.put("hotels", hotels);
        return ResponseEntity.ok(response);

    }
}
