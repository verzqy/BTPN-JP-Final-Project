import { Component, Input, Output, OnInit, Inject, EventEmitter } from '@angular/core';
import { lookupListToken } from '../shared/providers';
import { Employee } from "../shared/model/employee.model";
import { EmployeeService } from '../shared/services/employee-list.service';

@Component({
	selector: 'form-employee',
	templateUrl: 'form-employee.component.html',
	styleUrls: ['form-employee.component.css'],

})

export class FormEmployeeComponent implements OnInit {
	@Input() set selectedEmp(value: Employee) {
		this.selectedEmployee = value;
		this.initialEmployee = null;
		if (this.selectedEmployee) {
			this.initialEmployee = new Employee();
			this.initialEmployee.Id = this.selectedEmployee.Id;
			this.initialEmployee.firstName = this.selectedEmployee.firstName;
			this.initialEmployee.lastName = this.selectedEmployee.lastName;
			this.initialEmployee.gender = this.selectedEmployee.gender;
			this.initialEmployee.dob = this.selectedEmployee.dob;
			this.initialEmployee.nationality = this.selectedEmployee.nationality;
			this.initialEmployee.maritalStatus = this.selectedEmployee.maritalStatus;
			this.initialEmployee.phone = this.selectedEmployee.phone;
			this.initialEmployee.subDivision = this.selectedEmployee.subDivision;
			this.initialEmployee.status = this.selectedEmployee.status;
			this.initialEmployee.suspendDate = this.selectedEmployee.suspendDate;
			this.initialEmployee.hiredDate = this.selectedEmployee.hiredDate;
			this.initialEmployee.grade = this.selectedEmployee.grade;
			this.initialEmployee.division = this.selectedEmployee.division;
			this.initialEmployee.email = this.selectedEmployee.email;
			this.initialEmployee.location = this.selectedEmployee.location;
			this.initialEmployee.photo = this.selectedEmployee.photo;
		}
	}
	@Output() cancelClicked = new EventEmitter();
	selectedEmployee: Employee;
	initialEmployee: Employee;
	employeeForm;

	constructor(
		private eService: EmployeeService,
		@Inject(lookupListToken) public lookupList) { }

	ngOnInit() {

	}

	onSave() {
		this.eService.add(this.initialEmployee);
		this.onCancel();
	}

	onCancel() {
		this.selectedEmployee = null;
		this.initialEmployee = null;
		this.cancelClicked.emit(this.selectedEmployee);
	}
}

			// this.selectedEmployee.Id = this.initialEmployee.Id;
			// this.selectedEmployee.firstName = this.initialEmployee.firstName;
			// this.selectedEmployee.lastName = this.initialEmployee.lastName;
			// this.selectedEmployee.gender = this.initialEmployee.gender;
			// this.selectedEmployee.dob = this.initialEmployee.dob;
			// this.selectedEmployee.nationality = this.initialEmployee.nationality;
			// this.selectedEmployee.maritalStatus = this.initialEmployee.maritalStatus;
			// this.selectedEmployee.phone = this.initialEmployee.phone;
			// this.selectedEmployee.subDivision = this.initialEmployee.subDivision;
			// this.selectedEmployee.status = this.initialEmployee.status;
			// this.selectedEmployee.suspendDate = this.initialEmployee.suspendDate;
			// this.selectedEmployee.hiredDate = this.initialEmployee.hiredDate;
			// this.selectedEmployee.grade = this.initialEmployee.grade;
			// this.selectedEmployee.division = this.initialEmployee.division;
			// this.selectedEmployee.email = this.initialEmployee.email;
			// this.selectedEmployee.location = this.initialEmployee.location;
			// this.selectedEmployee.photo = this.initialEmployee.photo;