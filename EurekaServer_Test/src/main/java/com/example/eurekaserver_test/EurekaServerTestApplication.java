package com.example.eurekaserver_test;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@EnableEurekaServer
@SpringBootApplication
public class EurekaServerTestApplication {

    public static void main(String[] args) {
        SpringApplication.run(EurekaServerTestApplication.class, args);
    }

}
