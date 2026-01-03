package com.example.CRUD.Application.controller;

import com.example.CRUD.Application.entity.UserEntity;
import com.example.CRUD.Application.exception.ResourceNotFoundException;
import com.example.CRUD.Application.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<UserEntity> getUsers(){
        return userRepository.findAll();
    }

    @PostMapping
    public UserEntity createUser(@RequestBody UserEntity user){
        return userRepository.save(user);
    }

    @GetMapping("/{id}")
    public UserEntity getSingleUser(@PathVariable Long id){
        return userRepository.findById(id).orElseThrow( () -> new ResourceNotFoundException("user not found with id : " + id));
    }

    @PutMapping("/{id}")
    public UserEntity updateUser(@RequestBody UserEntity user,@PathVariable Long id){
        UserEntity userData = userRepository.findById(id).orElseThrow( () -> new ResourceNotFoundException("user not found with id : " + id) );
        userData.setEmail(user.getEmail());
        userData.setName(user.getName());
        return userRepository.save(userData);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id){
        UserEntity userData = userRepository.findById(id).orElseThrow( () -> new ResourceNotFoundException("user not found with id : " + id) );
        userRepository.delete(userData);
        return ResponseEntity.ok().build();
    }
}
