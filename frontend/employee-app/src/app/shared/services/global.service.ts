import { Injectable } from '@angular/core';
import { Employee } from "../model/employee.model";
import { Location } from "../model/location.model";

@Injectable()
export class GlobalService {
    showForm = false;
    selectedEmployee;
    initialEmployee: Employee;

    setInitialEmployee() {
        this.initialEmployee = new Employee();
		this.initialEmployee.empId = this.selectedEmployee.empId;
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
		this.initialEmployee.location = new Location();
		this.initialEmployee.location.locId = this.selectedEmployee.location.locId;
		this.initialEmployee.location.locationCity = this.selectedEmployee.location.locationCity;
		this.initialEmployee.image = this.selectedEmployee.image;
    }
}
