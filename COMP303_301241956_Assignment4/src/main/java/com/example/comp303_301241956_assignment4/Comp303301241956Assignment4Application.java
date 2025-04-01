package com.example.comp303_301241956_assignment4;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication( exclude = {SecurityAutoConfiguration.class})
@CrossOrigin(origins = "*")
public class Comp303301241956Assignment4Application {

    public static void main(String[] args) {
        SpringApplication.run(Comp303301241956Assignment4Application.class, args);
    }

}
