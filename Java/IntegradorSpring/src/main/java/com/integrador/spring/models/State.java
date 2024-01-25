package com.integrador.spring.models;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="states")
public class State {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@ManyToOne
	@JoinColumn(referencedColumnName="id",nullable=false)
	private Country country;
	
	@OneToMany(mappedBy="state")
	private List<Supplier> listSuppliers = new ArrayList<>();
	
	private String name;

	public State() {
		
	}

	public Integer getId() {
		return id;
	}

	public Country getCountry() {
		return country;
	}

	public String getName() {
		return name;
	}
	
	
	
	
}
