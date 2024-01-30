package com.integrador.spring.models;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="countries")
public class Country {
	@Id
	private Integer id;
	
	private String name;
	
	@OneToMany(mappedBy="country")
	private List<State> listStates = new ArrayList<>();
	
	@OneToMany(mappedBy="country")
	private List<Supplier> listSuppliers = new ArrayList<>();

	public Country() {
		
	}
	
	public Country(Integer id, String name) {
		this.id = id;
		this.name = name;
	}

	public Integer getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public List<State> getListStates() {
		return listStates;
	}

	public List<Supplier> getListSuppliers() {
		return listSuppliers;
	}
	
}