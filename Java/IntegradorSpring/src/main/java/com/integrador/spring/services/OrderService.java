package com.integrador.spring.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.integrador.spring.models.Order;
import com.integrador.spring.repositories.OrderRepository;

@Service
public class OrderService {
	@Autowired
	OrderRepository orderRepository;
	
	public List<Order> getOrders(){
		return orderRepository.findAll();
	}
	
	public Order getOrderById(int id) {
		Order  o= null;
		for(Order order:orderRepository.findAll()) {
			if(order.getId()==id) {
				o=order;
			}
		}
		return o;
	}
}
