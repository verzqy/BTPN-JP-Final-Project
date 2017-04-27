package com.employee.app.employee;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

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
	@RequestMapping(value = "employees/addorupdate/", method = { RequestMethod.POST, RequestMethod.PUT })
	public Employee addOrUpdateEmployee(@RequestParam(value = "empId", required = false) String empId,
			@RequestParam String firstName, @RequestParam String lastName, @RequestParam String gender,
			@RequestParam String dob, @RequestParam String nationality, @RequestParam String maritalStatus,
			@RequestParam String phone, @RequestParam String subDivision, @RequestParam String status,
			@RequestParam String suspendDate, @RequestParam String hiredDate, @RequestParam String grade,
			@RequestParam String division, @RequestParam String email, @RequestParam String location,
			@RequestParam(value = "file", required = false) MultipartFile file) {
		Employee emp = new Employee();
		if (empId != null) {
			// Employee already exist => update data
			emp.setEmpId(Long.parseLong(empId));
		}
		emp.setFirstName(firstName);
		emp.setLastName(lastName);
		emp.setGender(gender);
		try {
			if (!suspendDate.equals("")) {
				emp.setDob(formatter.parse(dob));
			}
			if (!suspendDate.equals("")) {
				emp.setSuspendDate(formatter.parse(suspendDate));
			}
			if (!suspendDate.equals("")) {
				emp.setHiredDate(formatter.parse(hiredDate));
			}
		} catch (ParseException e) {
			e.printStackTrace();
		}
		emp.setNationality(nationality);
		emp.setMaritalStatus(maritalStatus);
		emp.setPhone(phone);
		emp.setSubDivision(subDivision);
		emp.setStatus(status);
		emp.setGrade(grade);
		emp.setDivision(division);
		emp.setEmail(email);
		Location empLoc = locationRepository.findByLocationCityIgnoreCase(location);
		emp.setLocation(empLoc);
		try {
			if (file != null) {
				emp.setImage(file.getBytes());
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		return employeeRepository.save(emp);
	}

	@CrossOrigin(origins = "http://localhost:9000")
	@GetMapping("employees/{id}")
	public Employee getEmployeeById(@PathVariable long id) {
		return employeeRepository.findOne(id);
	}

	@CrossOrigin(origins = "http://localhost:9000")
	@DeleteMapping("/employees/delete/{id}")
	public Long deleteEmployeeById(@PathVariable long id) {
		return employeeRepository.deleteByEmpId(id);
	}

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
