import { Component, Input, OnInit, Inject } from '@angular/core';
import { lookupListToken } from '../shared/providers';
import { Employee } from "../shared/model/employee.model";

@Component({
	selector: 'form-employee',
	templateUrl: 'form-employee.component.html',
	styleUrls: ['form-employee.component.css'],

})

export class FormEmployeeComponent implements OnInit {
	@Input() set selectedEmp(value: Employee) {
		console.log(value);
		this.selectedEmployee = value;
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
	selectedEmployee: Employee;
	initialEmployee: Employee;
	employeeForm;

	constructor(
		@Inject(lookupListToken) public lookupList) { }

	ngOnInit() { }

	cek() {
			this.selectedEmployee.Id = this.initialEmployee.Id;
			this.selectedEmployee.firstName = this.initialEmployee.firstName;
			this.selectedEmployee.lastName = this.initialEmployee.lastName;
			this.selectedEmployee.gender = this.initialEmployee.gender;
			this.selectedEmployee.dob = this.initialEmployee.dob;
			this.selectedEmployee.nationality = this.initialEmployee.nationality;
			this.selectedEmployee.maritalStatus = this.initialEmployee.maritalStatus;
			this.selectedEmployee.phone = this.initialEmployee.phone;
			this.selectedEmployee.subDivision = this.initialEmployee.subDivision;
			this.selectedEmployee.status = this.initialEmployee.status;
			this.selectedEmployee.suspendDate = this.initialEmployee.suspendDate;
			this.selectedEmployee.hiredDate = this.initialEmployee.hiredDate;
			this.selectedEmployee.grade = this.initialEmployee.grade;
			this.selectedEmployee.division = this.initialEmployee.division;
			this.selectedEmployee.email = this.initialEmployee.email;
			this.selectedEmployee.location = this.initialEmployee.location;
			this.selectedEmployee.photo = this.initialEmployee.photo;
	}

	// checkEdit(): boolean {
	// 	_.isEqual(object, other);

	// 	if (this.initialEmployee.Id === this.selectedEmployee.Id) {
	// 		return false;
	// 	}
	// 	if (this.initialEmployee.firstName === this.selectedEmployee.firstName) {
	// 		return false;
	// 	}
	// 	if (this.initialEmployee.lastName === this.selectedEmployee.lastName) {
	// 		return false;
	// 	}
	// 	if (this.initialEmployee.gender === this.selectedEmployee.gender) {
	// 		return false;
	// 	}
	// 	if (this.initialEmployee.dob === this.selectedEmployee.dob) {
	// 		return false;
	// 	}
	// 	if (this.initialEmployee.nationality === this.selectedEmployee.nationality) {
	// 		return false;
	// 	}
	// 	if (this.initialEmployee.maritalStatus === this.selectedEmployee.maritalStatus) {
	// 		return false;
	// 	}
	// 	if (this.initialEmployee.phone === this.selectedEmployee.phone) {
	// 		return false;
	// 	}
	// 	if (this.initialEmployee.subDivision === this.selectedEmployee.subDivision) {
	// 		return false;
	// 	}
	// 	if (this.initialEmployee.status === this.selectedEmployee.status) {
	// 		return false;
	// 	}
	// 	if (this.initialEmployee.suspendDate === this.selectedEmployee.suspendDate) {
	// 		return false;
	// 	}
	// 	if (this.initialEmployee.hiredDate === this.selectedEmployee.hiredDate) {
	// 		return false;
	// 	}
	// 	if (this.initialEmployee.grade === this.selectedEmployee.grade) {
	// 		return false;
	// 	}
	// 	if (this.initialEmployee.division === this.selectedEmployee.division) {
	// 		return false;
	// 	}
	// 	if (this.initialEmployee.email === this.selectedEmployee.email) {
	// 		return false;
	// 	}
	// 	if (this.initialEmployee.location === this.selectedEmployee.location) {
	// 		return false;
	// 	}
	// 	if (this.initialEmployee.photo === this.selectedEmployee.photo) {
	// 		return false;
	// 	}
	// 	return true;
	// }

}