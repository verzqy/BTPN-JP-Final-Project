import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdIconModule, MdInputModule, MdChipsModule, MdTabsModule, MdSelectModule, MdDialogModule, MdCheckboxModule, MdSnackBarModule } from '@angular/material';
import { Md2Module } from 'md2';
import { MdlModule } from '@angular-mdl/core';

import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { SearchBarComponent, DeleteDialogComponent, FilterDialogComponent } from './search-bar/search-bar.component';
import { FormEmployeeComponent } from './form-employee/form-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { NavigatorBarComponent } from './shared/directives/navigator-bar.component';
import { BtnSvgComponent } from './shared/btn-svg/btn-svg.component';
import { GlobalService } from './shared/services/global.service';
import { EmployeeService } from './shared/services/employee.service';
import { LocationService } from './shared/services/location.service';
import { AppService } from './shared/services/app.service';
import { SelectedDirective } from './shared/directives/selected.directive';
import { lookupListToken, lookupList } from './shared/providers';
import { OrderByAscDesc } from './shared/pipes/order-by-asc-desc.pipe';
import { SafeUrl } from './shared/pipes/safe-url.pipe';

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
    DeleteDialogComponent,
    FilterDialogComponent,
    OrderByAscDesc,
    SafeUrl
  ],
  entryComponents: [
    DeleteDialogComponent,
    FilterDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdChipsModule,
    MdTabsModule,
    MdSelectModule,
    MdDialogModule,
    MdCheckboxModule,
    MdSnackBarModule,
    MdlModule,
    Md2Module.forRoot()
  ],
  providers: [
    EmployeeService,
    LocationService,
    GlobalService,
    AppService,
    { provide: lookupListToken, useValue: lookupList }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
