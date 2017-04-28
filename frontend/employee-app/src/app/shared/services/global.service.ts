import { Injectable } from '@angular/core';
import { Employee } from "../model/employee.model";

@Injectable()
export class GlobalService {
    showForm = false;
    selectedEmployee;
	locations;
}
