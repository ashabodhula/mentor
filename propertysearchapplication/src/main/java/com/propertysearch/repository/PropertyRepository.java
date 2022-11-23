package com.propertysearch.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.propertysearch.model.Property;

public interface PropertyRepository extends JpaRepository<Property ,Integer> {

}
