import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Employee } from "../model/employee.model";
import { Location } from "../model/location.model";

@Injectable()
export class EmployeeService {

  constructor(private http: Http) { }
  progress;
  progressObserver;

  getNewBlankEmployee() {
    var blankEmp = new Employee();
    blankEmp.gender = "Male";
    blankEmp.grade = "SE - PG";
    blankEmp.division = "CDC AsteRx";
    blankEmp.maritalStatus = "Single";
    blankEmp.status = 'Contract';
    blankEmp.location = new Location();
    blankEmp.location.locationCity = "Bali";
    blankEmp.image = "src/images/no-image.png";
    return blankEmp;
  }

  get() {
    return this.http.get('http://localhost:8080/employees/')
      .map(response => {
        return response.json();
      });
  }

  getById(employeeId) {
    return this.http.get('http://localhost:8080/employees/' + employeeId)
      .map(response => {
        if (response != null) {
          return response.json();
        } else {
          return this.getNewBlankEmployee();
        }
      });
  }

  post(employee: Employee): Observable<Employee> {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      return this.http.post('http://localhost:8080/employees/add/', JSON.stringify(employee), { headers: headers })
        .map(response => response.json());
  }

  delete(empId) {
    return this.http.delete("http://localhost:8080/employees/delete/" + empId)
      .map(response => response);
  }
  
}