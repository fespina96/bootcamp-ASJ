package com.integrador.spring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.integrador.spring.models.Supplier;

public interface SupplierRepository extends JpaRepository<Supplier, Integer> {

}
