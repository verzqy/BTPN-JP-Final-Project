import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdIconModule, MdInputModule, MdChipsModule, MdTabsModule, MdSelectModule } from '@angular/material';
import { Md2Module } from 'md2';
import { MdlModule } from '@angular-mdl/core';

import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormEmployeeComponent } from './form-employee/form-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { NavigatorBarComponent } from './navigator-bar/navigator-bar.component';
import { BtnSvgComponent } from './shared/btn-svg/btn-svg.component';
import { EmployeeService } from './shared/services/employee-list.service';
import { SelectedDirective } from './shared/directives/selected.directive';
import { lookupListToken, lookupList } from './shared/providers';
import { MaterialSelect } from './shared/directives/material-select.component';
import { OrderByAscDesc } from './shared/pipes/order-by-asc-desc.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    SearchBarComponent,
    FormEmployeeComponent,
    EmployeeComponent,
    NavigatorBarComponent,
    BtnSvgComponent,
    SelectedDirective,
    MaterialSelect,
    OrderByAscDesc
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdChipsModule,
    MdTabsModule,
    MdSelectModule,
    MdlModule,
    Md2Module.forRoot()
  ],
  providers: [
    EmployeeService,
    { provide: lookupListToken, useValue: lookupList }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
