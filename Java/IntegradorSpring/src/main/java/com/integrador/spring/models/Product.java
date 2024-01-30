package com.integrador.spring.models;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="products")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String skuCode;
	private String name;
	
	@ManyToOne
	@JoinColumn(referencedColumnName="id",nullable=false)
	private Supplier supplier;
	
	@ManyToOne
	@JoinColumn(referencedColumnName="id",nullable=false)
	private ProductCategory productCategory;
	
	private String description;
	private Double price;
	private String imageUrl;
	
	@OneToMany(mappedBy="product")
	private List<ProductsPerOrder> listOrders= new ArrayList<>();
	
	@Column(columnDefinition="date default CURRENT_TIMESTAMP()")
	private Date createdAt;
	private Date updatedAt;
	private Date deletedAt;
	
	
	
	
	public Product() {
		
	}




	public Product(String skuCode, String name, Supplier supplier, ProductCategory productCategory, String description,
			Double price, String imageUrl, List<ProductsPerOrder> listOrders) {
		super();
		this.skuCode = skuCode;
		this.name = name;
		this.supplier = supplier;
		this.productCategory = productCategory;
		this.description = description;
		this.price = price;
		this.imageUrl = imageUrl;
		this.listOrders = listOrders;
	}




	public String getSkuCode() {
		return skuCode;
	}




	public void setSkuCode(String skuCode) {
		this.skuCode = skuCode;
	}




	public String getName() {
		return name;
	}




	public void setName(String name) {
		this.name = name;
	}




	public Supplier getSupplier() {
		return supplier;
	}




	public void setSupplier(Supplier supplier) {
		this.supplier = supplier;
	}




	public ProductCategory getProductCategory() {
		return productCategory;
	}




	public void setProductCategory(ProductCategory productCategory) {
		this.productCategory = productCategory;
	}




	public String getDescription() {
		return description;
	}




	public void setDescription(String description) {
		this.description = description;
	}




	public Double getPrice() {
		return price;
	}




	public void setPrice(Double price) {
		this.price = price;
	}




	public String getImageUrl() {
		return imageUrl;
	}




	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}




	public Date getUpdatedAt() {
		return updatedAt;
	}




	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}




	public Date getDeletedAt() {
		return deletedAt;
	}




	public void setDeletedAt(Date deletedAt) {
		this.deletedAt = deletedAt;
	}




	public Integer getId() {
		return id;
	}




	public List<ProductsPerOrder> getListOrders() {
		return listOrders;
	}




	public Date getCreatedAt() {
		return createdAt;
	}

	
	
}