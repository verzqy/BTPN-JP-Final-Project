import { Component, Input, Output, OnInit, Inject, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { lookupListToken } from '../shared/providers';
import { Employee } from "../shared/model/employee.model";
import { Location } from "../shared/model/location.model";
import { EmployeeService } from '../shared/services/employee.service';
import { GlobalService } from '../shared/services/global.service';
import { AppService } from '../shared/services/app.service';
import { Subscription } from 'rxjs/Subscription';
import { MdSnackBar } from '@angular/material';

@Component({
	selector: 'form-employee',
	templateUrl: 'form-employee.component.html',
	styleUrls: ['form-employee.component.css'],

})

export class FormEmployeeComponent implements OnInit {

	subscription: Subscription;
	private formEmployee;
	empImage;
	initialEmployee: Employee;

	constructor(
		private eService: EmployeeService,
		private g: GlobalService,
		private appService: AppService,
		private formBuilder: FormBuilder,
		public snackBar: MdSnackBar,
		@Inject(lookupListToken) public lookupList) { }

	ngOnInit() {
		this.g.showForm = false;

		this.subscription = this.appService.notifyObservable$.subscribe((res) => {

			if (res.hasOwnProperty('option') && res.option === 'select') {
				this.setValues(this.g.selectedEmployee);
			}
		});
	}

	setValues(employee) {
		this.formEmployee = this.formBuilder.group({
			empId: this.formBuilder.control(employee.empId),
			firstName: this.formBuilder.control(employee.firstName, Validators.compose([Validators.required, Validators.pattern('[\\w\\-\\s\\/]+')])),
			lastName: this.formBuilder.control(employee.lastName, Validators.compose([Validators.required, Validators.pattern('[\\w\\-\\s\\/]+')])),
			gender: this.formBuilder.control(employee.gender, Validators.compose([Validators.required])),
			dob: this.formBuilder.control(employee.dob, Validators.compose([Validators.required])),
			nationality: this.formBuilder.control(employee.nationality, Validators.compose([Validators.required])),
			maritalStatus: this.formBuilder.control(employee.maritalStatus, Validators.compose([Validators.required])),
			phone: this.formBuilder.control(employee.phone, Validators.compose([Validators.required, Validators.pattern(/^[0-9\(\)\-\+]{5,25}$/)])),
			location: this.formBuilder.control(employee.location.locationCity, Validators.compose([Validators.required])),
			subDivision: this.formBuilder.control(employee.subDivision, Validators.compose([Validators.required])),
			status: this.formBuilder.control(employee.status, Validators.compose([Validators.required])),
			suspendDate: this.formBuilder.control(employee.suspendDate),
			hiredDate: this.formBuilder.control(employee.hiredDate, Validators.compose([Validators.required])),
			grade: this.formBuilder.control(employee.grade, Validators.compose([Validators.required])),
			division: this.formBuilder.control(employee.division, Validators.compose([Validators.required])),
			email: this.formBuilder.control(employee.email, Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]))
		});
		this.empImage = employee.image;
	}

	onSave(emp) {
		this.setSaveEmployee(emp);
		if (this.empImage == "src/images/no-image.png") {
			this.initialEmployee.image = null;
		}
		this.eService.post(this.initialEmployee)
			.subscribe(response => {
				console.log(response);
				this.appService.notifyOther({ option: 'refresh' });
				this.onCancel();
				this.snackBar.open("Saved.", "", {
					duration: 2000,
				});
			})
		return false;
	}

	setSaveEmployee(emp) {
		this.initialEmployee = new Employee();
		this.initialEmployee.empId = emp.empId;
		this.initialEmployee.firstName = emp.firstName;
		this.initialEmployee.lastName = emp.lastName;
		this.initialEmployee.gender = emp.gender;
		this.initialEmployee.dob = emp.dob;
		this.initialEmployee.nationality = emp.nationality;
		this.initialEmployee.maritalStatus = emp.maritalStatus;
		this.initialEmployee.phone = emp.phone;
		this.initialEmployee.subDivision = emp.subDivision;
		this.initialEmployee.status = emp.status;
		this.initialEmployee.suspendDate = emp.suspendDate;
		this.initialEmployee.hiredDate = emp.hiredDate;
		this.initialEmployee.grade = emp.grade;
		this.initialEmployee.division = emp.division;
		this.initialEmployee.email = emp.email;
		this.initialEmployee.location = new Location();
		this.initialEmployee.location.locationCity = emp.location;
		this.initialEmployee.image = this.empImage;
	}

	onCancel() {
		this.g.selectedEmployee = this.eService.getNewBlankEmployee();
		this.g.showForm = false;
	}

	empFile;
	onChange(event) {
		var file = event.target.files[0];
		this.empFile = event.target.files[0];
		console.log(file[0]);
		var reader = new FileReader();

		reader.onload = (event: any) => {
			this.empImage = event.target.result;
		}
		reader.readAsDataURL(event.target.files[0]);
	}

}