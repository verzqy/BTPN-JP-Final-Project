import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Employee } from "../shared/model/employee.model";

import { EmployeeService } from '../shared/services/employee-list.service';

@Component({
	selector: 'list-employee',
	templateUrl: 'list-employee.component.html',
	styleUrls: ['list-employee.component.css']
})

export class ListEmployeeComponent implements OnInit {
	employees;
	selectedEmployee: Employee;
	toggleDelete = false;

	@Output() employeeClicked = new EventEmitter();

	constructor(private eService: EmployeeService) { }

	ngOnInit() {
		this.employees = this.eService.get();
	}

	onEmployeeClicked(emp) {
		this.selectedEmployee = emp;
		this.employeeClicked.emit(emp);
		this.toggleDelete = true;
		// console.log(this.selectedEmployee.dob);
	}

	setNew() {
		this.selectedEmployee = new Employee();
		this.selectedEmployee.gender = "Male";
		this.selectedEmployee.grade = "SE - PG";
		this.selectedEmployee.division = "CDC AsteRx";
		this.onEmployeeClicked(this.selectedEmployee);
		this.toggleDelete = false;
	}
}