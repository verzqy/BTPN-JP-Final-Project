import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Employee } from "../shared/model/employee.model";
import { Location } from "../shared/model/location.model";

import { EmployeeService } from '../shared/services/employee.service';
import { LocationService } from '../shared/services/location.service';
import { GlobalService } from '../shared/services/global.service';
import { AppService } from '../shared/services/app.service';
import { Subscription } from 'rxjs/Subscription';
import { MdSnackBar } from '@angular/material';

@Component({
	selector: 'list-employee',
	templateUrl: 'list-employee.component.html',
	styleUrls: ['list-employee.component.css']
})

export class ListEmployeeComponent implements OnInit {
	employees;
	originEmployees;
	searchFlag;
	sortFlag = true;
	filterFlag;
	subscription: Subscription;

	constructor(
		private eService: EmployeeService,
		private locationService: LocationService,
		private appService: AppService,
		public snackBar: MdSnackBar,
		private g: GlobalService) { }

	ngOnInit() {
		this.getEmployees();
		this.getLocations();

		this.subscription = this.appService.notifyObservable$.subscribe((res) => {

			if (res.hasOwnProperty('option') && res.option === 'refresh') {
				this.onEmpFilter(this.filterFlag);
			}
		});
	}

	getEmployees() {
		this.eService.get()
			.subscribe(emp => {
				this.employees = emp;
				this.originEmployees = this.employees;
			});
	}

	getLocations() {
		this.locationService.get()
			.subscribe(location => {
				this.g.locations = location;
			});
	}

	setNew() {
		this.g.selectedEmployee = this.eService.getNewBlankEmployee();
		this.appService.notifyOther({ option: 'select' });
		this.g.showForm = true;
	}

	onEmpDelete() {
		this.eService.delete(this.g.selectedEmployee.empId)
			.subscribe(empId => {
				this.setNew();
				this.g.showForm = false;
				this.snackBar.open("Deleted.", "", {
					duration: 2000,
				});
				this.onEmpFilter(this.filterFlag);
			});
	}

	onEmpSort(flag) {
		this.sortFlag = flag;
	}

	onEmpSearch($event) {
		if ($event) {
			this.searchFlag = $event;
			const query = $event.target.value.toLowerCase();
			if (query) {
				this.employees = this.originEmployees.filter(emp => {
					let empName = `${emp.firstName} ${emp.lastName}`;
					return empName.toLowerCase().includes(query);
				})
			} else {
				this.employees = this.originEmployees;
			}
		}
	}

	onEmpFilter($event) {
		if ($event) {
			this.filterFlag = $event;
			this.eService.getByFilter($event.gender, $event.location)
				.subscribe(emp => {
					this.employees = emp;
					this.originEmployees = this.employees;
					this.onEmpSearch(this.searchFlag);
				});
		} else {
			this.getEmployees();
		}
	}

}