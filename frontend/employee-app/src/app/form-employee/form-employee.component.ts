import { Component, Input, Output, OnInit, Inject, EventEmitter } from '@angular/core';
import { lookupListToken } from '../shared/providers';
import { Employee } from "../shared/model/employee.model";
import { EmployeeService } from '../shared/services/employee.service';
import { GlobalService } from '../shared/services/global.service';
import { AppService } from '../shared/services/app.service';

@Component({
	selector: 'form-employee',
	templateUrl: 'form-employee.component.html',
	styleUrls: ['form-employee.component.css'],

})

export class FormEmployeeComponent implements OnInit {

	constructor(
		private eService: EmployeeService,
		private g: GlobalService,
		private appService: AppService,
		@Inject(lookupListToken) public lookupList) { }

	ngOnInit() {
		this.g.showForm = false;
	}

	onSave() {
		if (this.g.initialEmployee.image == "src/resources/images/no-image.png") {
			this.g.initialEmployee.image = null;
		}

		this.eService.post(this.g.initialEmployee)
			.subscribe(response => {
				console.log(response);
				this.appService.notifyOther({ option: 'refresh' });
				this.onCancel();
			})
	}

	onCancel() {
		this.g.selectedEmployee = this.eService.getNewBlankEmployee();
		this.g.initialEmployee = this.eService.getNewBlankEmployee();
		this.g.showForm = false;
	}

	onChange(event) {
		var file = event.target.files[0];

		console.log(file[0]);
		var reader = new FileReader();

		reader.onload = (event: any) => {
			this.g.initialEmployee.image = event.target.result;
		}
		reader.readAsDataURL(event.target.files[0]);
		// console.log(this.g.selectedEmployee);
	}

}