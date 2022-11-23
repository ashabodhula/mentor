package com.propertysearch.service;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.propertysearch.enums.Status;
import com.propertysearch.model.Property;

@Service
public class PropertyService {
	
	private static List<Property> properties = new ArrayList<Property>();
	
	
	
	static {
		properties.add(new Property(1,"hyd","house","lknfiucwbubdnlk",200.00,Status.PAID,new Date(),false));
		properties.add(new Property(2,"hydd","house","lknfiucwbubdnlk",200.00,Status.PAID,new Date(),false));
		properties.add(new Property(3,"hysad","appartment","lknfiucwbubdnlk",2008.00,Status.PARTLY_PAID,new Date(),false));
	}
	
	public List<Property>findAll(){
		return properties;
	}
}
