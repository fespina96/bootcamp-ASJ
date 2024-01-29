package com.integrador.spring.services;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.integrador.spring.models.Supplier;
import com.integrador.spring.repositories.SupplierRepository;

@Service
public class SupplierService {
	@Autowired
	SupplierRepository supplierRepository;
	
	public List<Supplier> getSuppliers(){
		return supplierRepository.findAll();
	}
	
	public Supplier getSupplierById(int id) {
		Supplier  s= null;
		for(Supplier supplier:supplierRepository.findAll()) {
			if(supplier.getId()==id) {
				s=supplier;
			}
		}
		return s;
	}
	
	public String addSupplier(Supplier supplier) {
		supplierRepository.save(supplier);
		return "Proveedor agregada correctamente";
	}
	
	public String editSupplier(Integer id,Supplier supplier) {
		Supplier s = supplierRepository.findById(id).get();
		if(s!=null) {
			s.setName(supplier.getName());
			supplierRepository.save(s);
			return "Proveedor #"+id+" modificada correctamente";
		}
		return "Error";
	}
	
	public String deleteSupplierById(Integer id) {
		Supplier s = supplierRepository.findById(id).get();
		if(s!=null) {
			s.setDeletedAt(new Date(System.currentTimeMillis()));
			supplierRepository.save(s);
			return "Proveedor #"+id+" eliminada correctamente";
		}
		return "Error";
	}
}
