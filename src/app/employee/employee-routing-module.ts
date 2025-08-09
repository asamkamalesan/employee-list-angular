import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Employee } from './employee';
import { EmployeeList } from './employee-list/employee-list';
import { EmployeeListGrid } from './employee-list-grid/employee-list-grid';

const routes: Routes = [
  { path: '', component: Employee },
  { path: 'list', component: EmployeeList },
  { path: 'list-grid', component: EmployeeListGrid }, // Assuming EmployeeListGrid is used in the same way as EmployeeList
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
