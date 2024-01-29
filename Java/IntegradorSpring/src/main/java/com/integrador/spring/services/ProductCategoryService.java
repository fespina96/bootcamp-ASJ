package com.integrador.spring.services;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.integrador.spring.models.ProductCategory;
import com.integrador.spring.repositories.ProductCategoryRepository;

@Service
public class ProductCategoryService {
	@Autowired
	ProductCategoryRepository productCategoryRepository;
	
	public List<ProductCategory> getProductCategories(){
		return productCategoryRepository.findAll();
	}
	
	public ProductCategory getProductCategoryById(int id) {
		ProductCategory  pc= null;
		for(ProductCategory productCategory:productCategoryRepository.findAll()) {
			if(productCategory.getId()==id) {
				pc=productCategory;
			}
		}
		return pc;
	}
	
	public String addProductCategory(ProductCategory productCategory) {
		productCategoryRepository.save(productCategory);
		return "Categoría de producto agregada correctamente";
	}
	
	public String editProductCategory(Integer id,ProductCategory productCategory) {
		ProductCategory pc = productCategoryRepository.findById(id).get();
		if(pc!=null) {
			pc.setName(productCategory.getName());
			productCategoryRepository.save(pc);
			return "Categoria #"+id+" modificada correctamente";
		}
		return "Error";
	}
	
	public String deleteProductCategoryById(Integer id) {
		ProductCategory pc = productCategoryRepository.findById(id).get();
		if(pc!=null) {
			pc.setDeletedAt(new Date(System.currentTimeMillis()));
			productCategoryRepository.save(pc);
			return "Categoria #"+id+" eliminada correctamente";
		}
		return "Error";
	}
}
