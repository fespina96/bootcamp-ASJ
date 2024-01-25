package com.integrador.spring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.integrador.spring.models.ProductCategory;
import com.integrador.spring.services.ProductCategoryService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/product-category")
public class ProductCategoryController {
	@Autowired
	ProductCategoryService productCategoryService;
	
	@GetMapping
	public ResponseEntity<List<ProductCategory>> getProductCategorys(){
		return ResponseEntity.ok(productCategoryService.getProductCategories());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<ProductCategory> getProductCategoryById(@PathVariable int id){
		return ResponseEntity.ok(productCategoryService.getProductCategoryById(id));
	}
}
