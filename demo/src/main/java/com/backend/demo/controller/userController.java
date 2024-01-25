package com.backend.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.demo.exception.UserNotFoundException;
import com.backend.demo.model.User;
import com.backend.demo.repository.UserRepo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin("http://localhost:3000")
public class userController {

    @Autowired
    private UserRepo userRepo;

    @PostMapping("/user")
    User newUser(@RequestBody User newUser) {
        return userRepo.save(newUser);
    }

    @GetMapping("/users")
    List<User> getAllUsers(){
        return userRepo.findAll();
    }

    @GetMapping("/getuser/{id}")
    User getUserBuId(@PathVariable Long id){
        return userRepo.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }
    

    @PutMapping("/updateuser/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id){
        return userRepo.findById(id).map(user -> {
            user.setUsername(newUser.getUsername());
            user.setName(newUser.getName());
            user.setEmail(newUser.getEmail());
            return userRepo.save(user);
        }).orElseThrow(() -> new UserNotFoundException(id));
    }
    
    
    @DeleteMapping("/deleteuser/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepo.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepo.deleteById(id);
        return "User with id " + id + " is deleted successfully.";
    }

}
