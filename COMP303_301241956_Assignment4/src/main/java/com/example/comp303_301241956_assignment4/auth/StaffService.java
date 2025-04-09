package com.example.comp303_301241956_assignment4.auth;

import com.example.comp303_301241956_assignment4.entity.Staff;
import com.example.comp303_301241956_assignment4.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Collections;
import java.util.Optional;

@Service
public class StaffService implements UserDetailsService {

    @Autowired
    private StaffRepository staffRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Staff> staffOptional = staffRepository.findByUsername(username);

        if (staffOptional.isEmpty()) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }

        Staff staff = staffOptional.get();

        GrantedAuthority authority = new SimpleGrantedAuthority(staff.getDepartment().getDepartmentName());
        Collection<GrantedAuthority> authorities = Collections.singletonList(authority);

        return new User(staff.getUsername(), staff.getPassword(), authorities);
    }
}
