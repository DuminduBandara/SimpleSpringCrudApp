package com.backend.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.demo.model.User;

public interface UserRepo extends JpaRepository<User, Long>{

}
