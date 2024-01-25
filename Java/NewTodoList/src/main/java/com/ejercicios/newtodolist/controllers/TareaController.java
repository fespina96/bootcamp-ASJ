package com.ejercicios.newtodolist.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ejercicios.newtodolist.models.TareaModel;
import com.ejercicios.newtodolist.services.TareaService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/tarea")
public class TareaController {
	
	@Autowired
	TareaService tareaservice;
	
	@GetMapping()
	public ResponseEntity<List<TareaModel>> getTareas(){
		return ResponseEntity.ok(tareaservice.obtenerTareas());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<TareaModel> getTareaById(@PathVariable int id){
		return ResponseEntity.ok(tareaservice.obtenerTareaPorId(id));
	}
	
	@PostMapping()
	public ResponseEntity<String> createTarea(@RequestBody TareaModel tarea){
		return ResponseEntity.ok(tareaservice.crearTarea(tarea));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<String> updateTareaById(@PathVariable int id,@RequestBody TareaModel tarea) {
		return ResponseEntity.ok(tareaservice.editarTarea(id,tarea));
	}
	
	@GetMapping("/{id}/toggle")
	public ResponseEntity<String> toggleTareaById(@PathVariable int id) {
		return ResponseEntity.ok(tareaservice.toggleTarea(id));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteTareaById(@PathVariable int id) {
		return ResponseEntity.ok(tareaservice.eliminarTarea(id));
	}
}
