import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Employee } from './employee';
import { EmployeeList } from './employee-list/employee-list';

const routes: Routes = [
  { path: '', component: Employee },
  { path: 'list', component: EmployeeList },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
