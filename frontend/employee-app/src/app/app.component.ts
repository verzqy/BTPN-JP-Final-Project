import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedEmployee;
  initialEmployee;
  // title = 'app works!';
  onEmployeeInListClicked(emp) {
    this.selectedEmployee = emp;
  }

  cancelFormClicked(emp) {
    this.selectedEmployee = emp;
  }

  saveFormClicked(emp) {
    this.initialEmployee = emp;
  }
}
