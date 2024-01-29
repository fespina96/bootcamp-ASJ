package com.integrador.spring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.integrador.spring.models.Product;

public interface ProductRepository extends JpaRepository<Product,Integer>{

}
