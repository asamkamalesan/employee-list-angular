import { MatSortModule } from '@angular/material/sort';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EmployeeRoutingModule } from './employee-routing-module';
import { Employee } from './employee';
import { EmployeeList } from './employee-list/employee-list';
import { EmployeeAddDialog } from './employee-add-dialog/employee-add-dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [Employee, EmployeeList, EmployeeAddDialog],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule
  ],
})
export class EmployeeModule {}
