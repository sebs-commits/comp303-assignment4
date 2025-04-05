package com.example.comp303_301241956_assignment4.repository;

import com.example.comp303_301241956_assignment4.entity.Staff;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StaffRepository extends JpaRepository<Staff, Integer> {
    @Query("SELECT s FROM Staff s LEFT JOIN s.department d ORDER BY " +
            "CASE " +
            "    WHEN d.departmentName = 'Reception' THEN 1 " +
            "    WHEN d.departmentName = 'Cleaning' THEN 2 " +
            "    WHEN d.departmentName = 'Management' THEN 3 " +
            "    WHEN d.departmentName = 'Restaurant' THEN 4 " +
            "    ELSE 5 " +
            "END")
    List<Staff> findAllOrderedByDepartment();

}
