package com.example.comp303_301241956_assignment4;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication( exclude = {SecurityAutoConfiguration.class})
public class Comp303301241956Assignment4Application {

    public static void main(String[] args) {
        SpringApplication.run(Comp303301241956Assignment4Application.class, args);
    }

}
