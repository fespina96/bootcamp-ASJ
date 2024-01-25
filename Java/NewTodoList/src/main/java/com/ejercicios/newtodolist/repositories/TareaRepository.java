package com.ejercicios.newtodolist.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ejercicios.newtodolist.models.TareaModel;

public interface TareaRepository extends JpaRepository<TareaModel, Integer>{

}
