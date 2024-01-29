package com.integrador.spring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.integrador.spring.models.Supplier;
import com.integrador.spring.services.SupplierService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/supplier")
public class SupplierController {
	@Autowired
	SupplierService supplierService;
	
	@GetMapping
	public ResponseEntity<List<Supplier>> getSuppliers(){
		return ResponseEntity.ok(supplierService.getSuppliers());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Supplier> getSupplierById(@PathVariable int id){
		return ResponseEntity.ok(supplierService.getSupplierById(id));
	}
}
