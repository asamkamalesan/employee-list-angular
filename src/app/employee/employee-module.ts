import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { Employee } from './employee';
import { EmployeeAddDialog } from './employee-add-dialog/employee-add-dialog';
import { EmployeeList } from './employee-list/employee-list';
import { EmployeeRoutingModule } from './employee-routing-module';
import { EmployeeListGrid } from './employee-list-grid/employee-list-grid';

@NgModule({
  declarations: [Employee, EmployeeList, EmployeeAddDialog, EmployeeListGrid],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatDialogModule,
  ],
})
export class EmployeeModule {}
