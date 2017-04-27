package com.employee.app.employee;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.employee.app.location.Location;


@Repository
@RepositoryRestResource
public interface EmployeeRepository extends PagingAndSortingRepository<Employee,Long>{
	public Iterable<Employee> findByGenderIgnoreCase(@Param("gender") String gender);
	public Iterable<Employee> findByLocation(@Param("location") Location location);
	public Iterable<Employee> findByGenderAndLocationAllIgnoreCase(@Param("gender") String gender, @Param("location") String location);
	
	@Transactional
    public Long deleteByEmpId(long empId);
}
