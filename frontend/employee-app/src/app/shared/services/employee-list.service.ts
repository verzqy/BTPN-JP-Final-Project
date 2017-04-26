import { Employee } from "../model/employee.model";

export class EmployeeService {
  showForm = false;

  getNewBlankEmployee() {
    var blankEmp = new Employee();
		blankEmp.gender = "Male";
		blankEmp.grade = "SE - PG";
		blankEmp.division = "CDC AsteRx";
    return blankEmp;
  }

  get() {
    return this._employees;
  }

  getById(Id) {
    return this._employees.find(emp => emp.Id === Id);
  }

  add(employee) {
    if (employee.Id) {
      var updEmployee = this._employees.find(emp => emp.Id === employee.Id);
      updEmployee.firstName = employee.firstName;
      updEmployee.lastName = employee.lastName;
      updEmployee.gender = employee.gender;
      updEmployee.dob = employee.dob;
      updEmployee.nationality = employee.nationality;
      updEmployee.maritalStatus = employee.maritalStatus;
      updEmployee.phone = employee.phone;
      updEmployee.subDivision = employee.subDivision;
      updEmployee.status = employee.status;
      updEmployee.suspendDate = employee.suspendDate;
      updEmployee.hiredDate = employee.hiredDate;
      updEmployee.grade = employee.grade;
      updEmployee.division = employee.division;
      updEmployee.email = employee.email;
      updEmployee.location = employee.location;
      updEmployee.photo = employee.photo;
      console.log("Updated");
    } else {
      employee.Id = this._getNewId();
      this._employees.push(employee);
      console.log("Added");
    }
  }

  delete(Id) {
    var updEmployee = this._employees.find(emp => emp.Id === Id);
    var index = this._employees.indexOf(updEmployee);
    if (index >= 0) {
      this._employees.splice(index, 1);
    }
    console.log("Deleted");
  }

  _getNewId() {
    if (this._employees.length > 0) {
      return Math.max.apply(Math, this._employees.map(emp => emp.Id)) + 1;
    }
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