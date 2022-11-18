package com.propertysearch.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

import com.propertysearch.enums.Status;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Data
@Getter
@Setter
@Entity
public class Property {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long id;
	@NotBlank(message = "Property should have address ")
	public String address;
	@NotBlank(message = "Property should have a type like house/flat/land ")
	public String type;
	@NotBlank(message = "Property should have legal description according to rules ")
	public String legalDescription;
	@NotBlank(message = "Please mention the tax amount of property ")
	public double taxAmount;
	@NotBlank(message = "Please mention the tax status of property ")
	public Status taxStatus;
	@NotBlank(message = "Please mention latest  last registration date of property ")
	public Date lastregistrationDate;

}
