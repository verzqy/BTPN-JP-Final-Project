package com.employee.app.location;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LocationController {
	
	@Autowired
	private LocationRepository locRepository;
	
	@GetMapping("getAllLocation")
	public ResponseEntity<Iterable<Location>> getAllLocation()
	{
		Iterable<Location> hasil = locRepository.findAll();
		return new ResponseEntity<Iterable<Location>>(hasil, HttpStatus.OK);
	};
	
}
