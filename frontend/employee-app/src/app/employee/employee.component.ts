import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { GlobalService } from '../shared/services/global.service';

@Component({
	selector: 'employee',
	templateUrl: 'employee.component.html',
	styleUrls: ['employee.component.css']
})

export class EmployeeComponent implements OnInit {
	@Input() employees;
	@Input() sortFlag;

	constructor(private g: GlobalService) { }

	ngOnInit() { }

	onClick(emp) {
		this.g.selectedEmployee = emp;
		this.g.setInitialEmployee();
		this.g.showForm = true;
	}
}