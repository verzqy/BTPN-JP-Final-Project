package com.employee.app.location;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LocationController {
	
	@Autowired
	private LocationRepository locationRepository;
	
	@CrossOrigin(origins = "http://localhost:9000")
	@GetMapping("locations/")
	public Iterable<Location> getAllLocation() {
		return locationRepository.findAll();
	}
	
}
