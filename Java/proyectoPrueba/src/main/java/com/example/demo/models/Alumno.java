package com.example.demo.models;

public class Alumno {
	private String nombre,apellido;
	private Double nota;
	private int id;
	
	public Alumno(int id, String nombre, String apellido, Double nota) {
		this.id = id;
		this.nombre = nombre;
		this.apellido = apellido;
		this.nota = nota;
	}
	
	
	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public Double getNota() {
		return nota;
	}

	public void setNota(Double nota) {
		this.nota = nota;
	}
	
	public void update(Alumno alumno) {
		this.id = alumno.getId();
		this.nombre = alumno.getNombre();
		this.apellido = alumno.getApellido();
		this.nota = alumno.getNota();
	}
	
}
