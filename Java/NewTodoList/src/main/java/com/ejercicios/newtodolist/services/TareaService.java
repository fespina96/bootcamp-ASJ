package com.ejercicios.newtodolist.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ejercicios.newtodolist.models.TareaModel;
import com.ejercicios.newtodolist.repositories.TareaRepository;

@Service
public class TareaService {
	
	@Autowired
	TareaRepository tareaRepository;
	
	public List<TareaModel> obtenerTareas(){
		return tareaRepository.findAll();
	}
	
	public TareaModel obtenerTareaPorId(int id) {
		TareaModel t = null;
		for(TareaModel tarea:tareaRepository.findAll()) {
			if(tarea.getId()==id) {
				t=tarea;
			}
		}
		return t;
	}
	
	public String crearTarea(TareaModel tarea) {
		tareaRepository.save(tarea);
		return "Tarea creada correctamente";
	}
	
	public String eliminarTarea(int id) {
		tareaRepository.deleteById(id);
		return "Tarea eliminada correctamente";
	}
	
	public String editarTarea(int id,TareaModel tarea) {
		TareaModel t = tareaRepository.findById(id).get();
		if(t!=null) {
			t.setNombre(tarea.getNombre());
			t.setDescripcion(tarea.getDescripcion());
			tareaRepository.save(t);
			return "Tarea #"+id+" modificada correctamente";
		}
		return "Error";
	}
	
	public String toggleTarea(int id) {
		TareaModel t = tareaRepository.findById(id).get();
		if(t!=null) {
			t.setEstado(!t.isEstado());
			tareaRepository.save(t);
			return "Tarea #"+id+" modificada correctamente";
		}
		return "Error";
	}
	
}
