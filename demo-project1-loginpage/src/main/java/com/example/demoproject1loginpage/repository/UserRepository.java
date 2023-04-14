package com.example.demoproject1loginpage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demoproject1loginpage.domain.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
    void deleteUserByUsername(String username);
}