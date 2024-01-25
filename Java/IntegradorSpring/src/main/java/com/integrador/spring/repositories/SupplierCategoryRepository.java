package com.integrador.spring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.integrador.spring.models.SupplierCategory;

public interface SupplierCategoryRepository extends JpaRepository<SupplierCategory, Integer> {

}
