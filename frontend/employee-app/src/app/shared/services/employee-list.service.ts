import { Employee } from "../model/employee.model";

export class EmployeeService {

  get() {
    return this.employees;
  }

employees = [
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