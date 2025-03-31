package com.example.mytodolistapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.mytodolistapi.model.ToDo;



public interface ToDoRepository extends JpaRepository<ToDo, Long> {

}
