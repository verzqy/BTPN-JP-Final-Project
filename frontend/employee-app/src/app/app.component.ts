import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  initialEmployee;
  // title = 'app works!';

  saveFormClicked(emp) {
    this.initialEmployee = emp;
  }
}
