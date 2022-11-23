package com.propertysearch.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/propertysearch")

public class TestController {
	
	
	@GetMapping(path ="/test")
	public String test() {
		return "hi";
	}
	
	
}
