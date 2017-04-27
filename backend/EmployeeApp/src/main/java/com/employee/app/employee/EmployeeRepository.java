package com.employee.app.employee;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@Repository
@RepositoryRestResource
public interface EmployeeRepository extends PagingAndSortingRepository<Employee, Long>{
	List<Employee> findByFirstNameContainsOrLastNameContains(String firstName, String lastName);
	List<Employee> findByOffice(String office);
	List<Employee> findByGender(String gender);
}
