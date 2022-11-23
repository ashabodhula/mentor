package com.propertysearch.model;



import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.propertysearch.enums.Status;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Property {
	public Property(int i, String string, String string2, String string3, double d, Status paid, Date date, boolean b) {
		// TODO Auto-generated constructor stub
	}
	@Id
	private int id;
    private String address;
    private String type;
    private String legalDescription;
    private double amount;
    private Status taxStatus;
    private Date lastRegistrationDate;
    private boolean isSold;

}
