package com.example.mytodolistapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mytodolistapi.exception.ToDoNotFoundException;
import com.example.mytodolistapi.model.ToDo;
import com.example.mytodolistapi.repository.ToDoRepository;

import lombok.RequiredArgsConstructor;


@Service
public class ToDoServiceImpl implements ToDoService {
	
	@Autowired
	private ToDoRepository toDoRepository;

	@Override
	public ToDo getToDo(long id) {
		
		return toDoRepository.findById(id)
				.orElseThrow(()-> new ToDoNotFoundException(String.format("ToDo with id '%s' not found", id)));
	}

	@Override
	public List<ToDo> getToDos() {
		
		return toDoRepository.findAll();
	}

	@Override
	public ToDo addToDo(String description,String priority) {
		ToDo toDo=new ToDo();
		
		toDo.setDescription(description);
		toDo.setPriority(priority);
		
		return toDoRepository.save(toDo);
		
	}

	@Override
	public void deleteToDo(long id) {
		
		toDoRepository.delete(getToDo(id));

	}

	@Override
	public void updateToDo(long id, boolean completed) {
		// TODO Auto-generated method stub
		ToDo toDo=getToDo(id);
		toDo.setCompleted(completed);
		toDoRepository.save(toDo);

	}

}
