import { Component, Input, Output, OnInit, Inject, EventEmitter } from '@angular/core';
import { lookupListToken } from '../shared/providers';
import { Employee } from "../shared/model/employee.model";
import { EmployeeService } from '../shared/services/employee.service';
import { LocationService } from '../shared/services/location.service';
import { GlobalService } from '../shared/services/global.service';

@Component({
	selector: 'form-employee',
	templateUrl: 'form-employee.component.html',
	styleUrls: ['form-employee.component.css'],

})

export class FormEmployeeComponent implements OnInit {

	// getEmployee(value) {
	// 	this.eService.getById(value)
	// 		.subscribe(emp => {
	// 			this.initialEmployee = emp;
	// 		});
	// }
	
	locations;

	constructor(
		private eService: EmployeeService,
		private locationService: LocationService,
		private g: GlobalService,
		@Inject(lookupListToken) public lookupList) { }

	ngOnInit() {
		this.g.showForm = false;
		this.getLocations();
	}

	onSave() {
		if (this.g.initialEmployee.image == "src/resources/images/no-image.png") {
			this.g.initialEmployee.image = null;
		}

		this.eService.post(this.g.initialEmployee)
			.subscribe(response => {
				console.log(response);
				this.onCancel();
			})
	}

	onCancel() {
		this.g.selectedEmployee = this.eService.getNewBlankEmployee();
		this.g.initialEmployee = this.eService.getNewBlankEmployee();
		this.g.showForm = false;
	}

	getLocations() {
		this.locationService.get()
			.subscribe(location => {
				this.locations = location;
			});
	}


	onChange(event) {
		var file = event.srcElement.files;

		console.log(file[0]);
		var reader = new FileReader();

		reader.onload = (event: any) => {
			this.g.initialEmployee.image = event.target.result;
		}
		reader.readAsDataURL(event.target.files[0]);
		// console.log(this.g.selectedEmployee);
	}

}