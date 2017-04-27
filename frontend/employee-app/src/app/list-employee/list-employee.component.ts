import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Employee } from "../shared/model/employee.model";
import { Location } from "../shared/model/location.model";

import { EmployeeService } from '../shared/services/employee.service';
import { GlobalService } from '../shared/services/global.service';

@Component({
	selector: 'list-employee',
	templateUrl: 'list-employee.component.html',
	styleUrls: ['list-employee.component.css']
})

export class ListEmployeeComponent implements OnInit {
	employees;
	originEmployees;
	searchFlag;
	sortFlag = true;

	constructor(private eService: EmployeeService,
		private g: GlobalService) { }

	ngOnInit() {
		this.getEmployees();
	}

	getEmployees() {
		this.eService.get()
			.subscribe(emp => {
				this.employees = emp;
				this.originEmployees = this.employees;
			});
	}

	setNew() {
		this.g.selectedEmployee = this.eService.getNewBlankEmployee();
		this.g.initialEmployee = this.eService.getNewBlankEmployee();
		this.g.showForm = true;
	}

	onEmpDelete() {
		//delete method here
		this.eService.delete(this.g.selectedEmployee.empId)
			.subscribe(empId => {
				this.setNew();
				this.onEmpSearch(this.searchFlag);
				this.g.showForm = false;
				this.getEmployees();
				// this.getEmployees(this.query, this.genderFilter, this.locationFilter, this.sort);
			});
	}

	onEmpSort(flag) {
		this.sortFlag = flag;
	}

	onEmpSearch($event) {
		if ($event) {
			this.searchFlag = $event;
			const query = $event.target.value.toLowerCase();
			if (query) {
				this.employees = this.originEmployees.filter(emp => {
					let empName = `${emp.firstName} ${emp.lastName}`;
					return empName.toLowerCase().includes(query);
				})
			} else {
				this.employees = this.originEmployees;
			}
		}

	}
}