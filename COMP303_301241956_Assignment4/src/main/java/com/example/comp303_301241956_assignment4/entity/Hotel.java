package com.example.comp303_301241956_assignment4.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "hotel")
@NoArgsConstructor
public class Hotel {
    @Id
    @Column(name = "hotel_id")
    private int hotelId;

    @Column(name = "hotel_name")
    private String hotelName;

    @Column(name = "hotel_rating")
    private int hotelRating;

    public Hotel(int hotelId) {
        this.hotelId = hotelId;
    }
}
