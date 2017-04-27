import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LocationService {

    constructor(private http: Http) { }

    get() {
        return this.http.get('http://localhost:8080/locations/')
            .map(response => {
                return response.json();
            });
    }
}