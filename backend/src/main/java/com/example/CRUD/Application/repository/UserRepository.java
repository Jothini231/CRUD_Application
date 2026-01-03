package com.example.CRUD.Application.repository;

import com.example.CRUD.Application.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity,Long> {

}
