package com.example.mytodolistapi.service;

import java.util.List;

import com.example.mytodolistapi.model.ToDo;

public interface ToDoService {
	
	
	ToDo getToDo(long id);
	
	List<ToDo> getToDos();
	
	ToDo addToDo(String description,String priority);
	
	void deleteToDo(long id);
	
	void updateToDo(long id,boolean completed);
}
