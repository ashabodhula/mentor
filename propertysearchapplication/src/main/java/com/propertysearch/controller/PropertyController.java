package com.propertysearch.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.propertysearch.model.Property;
import com.propertysearch.repository.PropertyRepository;
import com.propertysearch.service.PropertyService;


@CrossOrigin(origins="*")
@RestController
@RequestMapping("/propertysearch")
public class PropertyController {

	@Autowired
	private PropertyService propertyService;

	@Autowired
	private PropertyRepository propertyRepo;
	
	
//	@PostMapping("/users/{username}/addproperties")
//    public List<Property> addProperty(@PathVariable String username) {
//
//		
//
//	}

	@GetMapping("/users/{username}/properties")
    public List<Property> getAllProperties(@PathVariable String username) {

		return propertyService.findAll();

	}
	
	
}
