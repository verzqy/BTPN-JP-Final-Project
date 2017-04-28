import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { GlobalService } from '../shared/services/global.service';
import { AppService } from '../shared/services/app.service';

@Component({
	selector: 'employee',
	templateUrl: 'employee.component.html',
	styleUrls: ['employee.component.css']
})

export class EmployeeComponent implements OnInit {
	@Input() employee;
	@Input() sortFlag;

	constructor(private g: GlobalService,
		private appService: AppService, ) { }

	ngOnInit() { }

	onClick(emp) {
		this.g.selectedEmployee = emp;
		if (emp.image == null) {
			this.g.selectedEmployee.image = "src/images/no-image.png";
		}
		this.appService.notifyOther({ option: 'select' });
		this.g.showForm = true;
	}

	setImage() {
		if (this.employee.image == null) {
			return "src/images/no-image.png";
		} else {
			return this.employee.image;
		}
	}
}