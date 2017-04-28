package com.employee.app.employee;

import java.text.SimpleDateFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.employee.app.location.Location;
import com.employee.app.location.LocationRepository;

@RestController
public class EmployeeController {

	SimpleDateFormat formatter = new SimpleDateFormat("yyyy-mm-dd");

	@Autowired
	private EmployeeRepository employeeRepository;
	@Autowired
	private LocationRepository locationRepository;
	
	@CrossOrigin(origins = "http://localhost:9000")
	@GetMapping("employees/")
	public Iterable<Employee> getAllEmployee() {
		return employeeRepository.findAll();
	}

	@CrossOrigin(origins = "http://localhost:9000")
	@PostMapping("employees/add/")
	@ResponseStatus(HttpStatus.OK)
	public Employee saveEmployee(@RequestBody Employee emp){
		 	Location empLoc = locationRepository.findByLocationCityIgnoreCase(emp.getLocation().getLocationCity());
		 	emp.setLocation(empLoc);
		return employeeRepository.save(emp);
	}

	@CrossOrigin(origins = "http://localhost:9000")
	@GetMapping("employees/{id}")
	public Employee getEmployeeById(@PathVariable long id) {
		return employeeRepository.findOne(id);
	}

	@CrossOrigin(origins = "http://localhost:9000")
	@DeleteMapping("employees/delete/{id}")
	public Long deleteEmployeeById(@PathVariable long id) {
		return employeeRepository.deleteByEmpId(id);
	}

	@CrossOrigin(origins = "http://localhost:9000")
	@GetMapping("filter/employees/")
	public Iterable<Employee> getAllEmployeeContaining(@RequestParam String gender, @RequestParam String location) {

		if (gender.equals("") && location.equals("")) {
			return employeeRepository.findAll();
		} else if (gender.equals("") && !location.equals("")) {
			return employeeRepository.findByLocation(locationRepository.findByLocationCityIgnoreCase(location));
		} else if (!gender.equals("") && location.equals("")) {
			return employeeRepository.findByGenderIgnoreCase(gender);
		} else {
			return employeeRepository.findByGenderAndLocationAllIgnoreCase(gender.toUpperCase(), location.toUpperCase());
		}
	}

}
