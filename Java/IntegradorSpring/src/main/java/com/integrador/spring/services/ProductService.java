package com.integrador.spring.services;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.integrador.spring.models.Product;
import com.integrador.spring.repositories.ProductRepository;

@Service
public class ProductService {
	@Autowired
	ProductRepository productRepository;
	
	public List<Product> getProducts(){
		return productRepository.findAll();
	}
	
	public Product getProductById(int id) {
		Product  p= null;
		for(Product product:productRepository.findAll()) {
			if(product.getId()==id) {
				p=product;
			}
		}
		return p;
	}
	
	public String addProduct(Product Product) {
		productRepository.save(Product);
		return "Producto agregado correctamente";
	}
	
	public String editProduct(Integer id,Product Product) {
		Product pc = productRepository.findById(id).get();
		if(pc!=null) {
			pc.setName(Product.getName());
			productRepository.save(pc);
			return "Producto #"+id+" modificado correctamente";
		}
		return "Error";
	}
	
	public String deleteProductById(Integer id) {
		Product p = productRepository.findById(id).get();
		if(p!=null) {
			p.setDeletedAt(new Date(System.currentTimeMillis()));
			productRepository.save(p);
			return "Categoria #"+id+" eliminada correctamente";
		}
		return "Error";
	}
}
