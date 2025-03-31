package com.example.comp303_301241956_assignment4.repository;

import com.example.comp303_301241956_assignment4.entity.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HotelRepository extends JpaRepository<Hotel, Integer> {
    List<Hotel> findAll();
}
