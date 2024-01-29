package com.integrador.spring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.integrador.spring.models.ProductsPerOrder;

public interface ProductsPerOrderRepository extends JpaRepository<ProductsPerOrder, Integer> {

}
