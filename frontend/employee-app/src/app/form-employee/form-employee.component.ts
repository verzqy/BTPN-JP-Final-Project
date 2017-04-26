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
	@Input() set selectedEmpSelect(value) {
		this.initialEmployee = this.eService.getNewBlankEmployee();
		if (value) {
			this.selectedEmployee = this.eService.getById(value);
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
	@Output() saveClicked = new EventEmitter();
	selectedEmployee;
	initialEmployee: Employee;
	employeeForm;

	constructor(
		private eService: EmployeeService,
		@Inject(lookupListToken) public lookupList) { }

	ngOnInit() {

	}

	onSave() {
		this.saveClicked.emit(this.initialEmployee);
		this.onCancel();
	}

	onCancel() {
		this.selectedEmployee = this.eService.getNewBlankEmployee();
		this.initialEmployee = this.selectedEmployee;
		this.cancelClicked.emit(this.selectedEmployee);
	}

	employeeImage="src/images/no-image.png";
	onChange(event) {
		var file = event.srcElement.files;

		console.log(file[0]);
		var reader = new FileReader();

		reader.onload = (event: any) => {
			this.employeeImage = event.target.result;
		}
		reader.readAsDataURL(event.target.files[0]);
		console.log(this.employeeImage);
		
	}
}