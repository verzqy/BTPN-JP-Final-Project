package com.employee.app.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository empRepository;
	

	@GetMapping("getAllEmployee")
	public ResponseEntity<Iterable<Employee>> getAllEmployees()
	{
		Iterable<Employee> hasil = empRepository.findAll();
		return new ResponseEntity<Iterable<Employee>>(hasil, HttpStatus.OK);
	};
	
	@GetMapping("getEmployeebyId/{Id}")
	public ResponseEntity<Employee> getEmployeebyId(@PathVariable long Id)
	{
		Employee hasil = empRepository.findOne(Id);
		return new ResponseEntity<Employee>(hasil, HttpStatus.OK);
	};
	
	@GetMapping("getEmployeebyName/{name}")
	public ResponseEntity<Iterable<Employee>>getEmployeebyName(@PathVariable String name)
	{
		Iterable<Employee> hasil = empRepository.findByFirstNameContainsOrLastNameContains(name, name);
		return new ResponseEntity<Iterable<Employee>>(hasil, HttpStatus.OK);
	};
	
	@GetMapping("getEmployeebyOffice/{office}")
	public ResponseEntity<Iterable<Employee>>getEmployeebyOffice(@PathVariable String office)
	{
		Iterable<Employee> hasil = empRepository.findByOffice(office);
		return new ResponseEntity<Iterable<Employee>>(hasil, HttpStatus.OK);
	};
	
	@GetMapping("getEmployeebyGender/{gender}")
	public ResponseEntity<Iterable<Employee>>getEmployeebyGender(@PathVariable String gender)
	{
		Iterable<Employee> hasil = empRepository.findByGender(gender);
		return new ResponseEntity<Iterable<Employee>>(hasil, HttpStatus.OK);
	};
}
