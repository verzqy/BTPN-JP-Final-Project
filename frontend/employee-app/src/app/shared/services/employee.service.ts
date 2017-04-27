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
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return Observable.create(observer => {
      let formData: FormData = new FormData(),
        xhr: XMLHttpRequest = new XMLHttpRequest();

      formData.append("empId", employee.empId);
      formData.append("firstName", employee.firstName);
      formData.append("lastName", employee.lastName);
      formData.append("gender", employee.gender);
      formData.append("dob", employee.dob);
      formData.append("nationality", employee.nationality);
      formData.append("maritalStatus", employee.maritalStatus);
      formData.append("phone", employee.phone);
      formData.append("subDivision", employee.subDivision);
      formData.append("status", employee.status);
      if (employee.suspendDate == null) {
        employee.suspendDate = "";
      }
      formData.append("suspendDate", employee.suspendDate);
      formData.append("hiredDate", employee.hiredDate);
      formData.append("grade", employee.grade);
      formData.append("division", employee.division);
      formData.append("email", employee.email);
      formData.append("location", employee.location.locationCity);
      formData.append("file", null);
      if (employee.image != null) {
        if (employee.image != "src/images/no-image.png") {
              formData.append("file", employee.image);
        }
      }
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            observer.next(JSON.parse(xhr.response));
            observer.complete();
          } else {
            observer.error(xhr.response);
          }
        }
      };

      xhr.upload.onprogress = (event) => {
        if (this.progressObserver) {
          this.progress = Math.round(event.loaded / event.total * 100);
          this.progressObserver.next(this.progress);
        }
      };
      console.log("OK");
      xhr.open('POST', 'http://localhost:8080/employees/addorupdate', true);
      xhr.send(formData);
    });
  }

  delete(empId) {
    return this.http.delete("http://localhost:8080/employees/delete/" + empId)
      .map(response => response);
  }

  _employees = [
    {
      Id: 1,
      firstName: "Albertus",
      lastName: "Mahaputra",
      gender: "Male",
      dob: "01/04/1990",
      nationality: "Australian",
      maritalStatus: "Single",
      phone: "+628123456787",
      subDivision: "Java Bootcamp",
      status: "Contract",
      suspendDate: "",
      hiredDate: "22/08/2005",
      grade: "SE - PG",
      division: "CDC AsteRx",
      email: "milla.khan@gmail.com",
      location: "Bali",
      photo: null
    },
    {
      Id: 2,
      firstName: "Karena",
      lastName: "Cindy Alika",
      gender: "Female",
      dob: "06/05/1992",
      nationality: "Yogyakarta",
      maritalStatus: "Single",
      phone: "+62812565787",
      subDivision: "Angular2 Bootcamp",
      status: "Permanent",
      suspendDate: "",
      hiredDate: "20/08/2007",
      grade: "SE - AP",
      division: "SWD Pink",
      email: "cindy.karena@gmail.com",
      location: "Yogyakarta",
      photo: null
    },
    {
      Id: 3,
      firstName: "Nicholas",
      lastName: "Kondang",
      gender: "Male",
      dob: "19/01/1988",
      nationality: "Bandung",
      maritalStatus: "Married",
      phone: "+628123456500",
      subDivision: "Java Bootcamp",
      status: "Permanent",
      suspendDate: "",
      hiredDate: "20/04/2002",
      grade: "SE - PG",
      division: "SWD Green",
      email: "kon.dang@gmail.com",
      location: "Bandung",
      photo: null
    },
    {
      Id: 4,
      firstName: "Diandra",
      lastName: "Sastrowardoyo",
      gender: "Female",
      dob: "09/21/1991",
      nationality: "Jakarta",
      maritalStatus: "Single",
      phone: "+628123456000",
      subDivision: "Finance",
      status: "Contract",
      suspendDate: "",
      hiredDate: "06/07/2009",
      grade: "FA-FA4",
      division: "Finance & Accounting",
      email: "wardoyo.sastro@gmail.com",
      location: "Jakarta",
      photo: null
    }
  ];

}