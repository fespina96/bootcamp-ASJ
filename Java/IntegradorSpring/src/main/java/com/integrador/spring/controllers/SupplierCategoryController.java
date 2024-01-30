package com.integrador.spring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.integrador.spring.models.SupplierCategory;
import com.integrador.spring.services.SupplierCategoryService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/supplier-category")
public class SupplierCategoryController {
	@Autowired
	SupplierCategoryService supplierCategoryService;
	
	@GetMapping
	public ResponseEntity<List<SupplierCategory>> getSupplierCategories(){
		return ResponseEntity.ok(supplierCategoryService.getSupplierCategories());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<SupplierCategory> getSupplierCategoryById(@PathVariable int id){
		return ResponseEntity.ok(supplierCategoryService.getSupplierCategoryById(id));
	}
}