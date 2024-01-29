package com.integrador.spring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.integrador.spring.models.ProductsPerOrder;
import com.integrador.spring.services.ProductsPerOrderService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/products-per-order")
public class ProductsPerOrderController {
	@Autowired
	ProductsPerOrderService productsPerOrderService;
	
	@GetMapping
	public ResponseEntity<List<ProductsPerOrder>> getProductsPerOrders(){
		return ResponseEntity.ok(productsPerOrderService.getProductsPerOrders());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<ProductsPerOrder> getProductsPerOrderById(@PathVariable int id){
		return ResponseEntity.ok(productsPerOrderService.getProductsPerOrderById(id));
	}
}
