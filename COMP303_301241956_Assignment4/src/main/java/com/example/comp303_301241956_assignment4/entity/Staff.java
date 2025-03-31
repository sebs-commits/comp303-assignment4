package com.example.comp303_301241956_assignment4.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.context.properties.bind.DefaultValue;

@Data
@Entity
@Table(name = "staff")
@NoArgsConstructor
@AllArgsConstructor
public class Staff {
    @Id
    @Column(name = "staff_id")
    private int staffId;


    @NotNull(message = "Staff name is required!")
    @Column(name = "staff_name")
    private String staffName;

    @Column(name = "staff_rating")
    private int staffRating;

    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;

    @ManyToOne
    @JoinColumn(name = "hotel_id")
    private Hotel hotel;

}
