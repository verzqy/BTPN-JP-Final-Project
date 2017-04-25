import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
	selector: 'employee',
	templateUrl: 'employee.component.html',
	styleUrls: ['employee.component.css']
})

export class EmployeeComponent implements OnInit {
	@Input() employees;
	@Output() clicked = new EventEmitter();

	@Input() selectedEmployee;

	ngOnInit() { }

	onClick(emp) {
		this.selectedEmployee = emp;
		// if(this.selectedEmployee.suspendDate==="") {
		// 	this.selectedEmployee.suspendDate = "-"
		// }
		this.clicked.emit(this.selectedEmployee);
	}
}