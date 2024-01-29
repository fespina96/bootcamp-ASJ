package com.integrador.spring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.integrador.spring.models.Order;

public interface OrderRepository extends JpaRepository<Order, Integer> {

}
