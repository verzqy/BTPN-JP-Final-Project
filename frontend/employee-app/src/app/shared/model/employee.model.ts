import { Location } from "../model/location.model";

export class Employee {
    empId: number;
    firstName: string;
    lastName: string;
    gender: string;
    dob: string;
    nationality: string;
    maritalStatus: string;
    phone: string;
    subDivision: string;
    status: string;
    suspendDate: string;
    hiredDate: string;
    grade: string;
    division: string;
    email: string;
    location: Location;
    image: any;

    Employee() {}
}