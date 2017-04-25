import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'detail-employee',
	templateUrl: 'detail-employee.component.html',
	styleUrls: ['detail-employee.component.css']
})

export class DetailEmployeeComponent implements OnInit {
	@Input() selectedEmployee;
	selectedGrade;
	selectedDivision;

	ngOnInit() { }
}