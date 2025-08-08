import { Injectable } from '@angular/core';
import { Employee } from './employee-list/employee-list';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private _employees: Employee[] = [];

  get employees(): Employee[] {
    return this._employees;
  }

  set employees(data: Employee[]) {
    this._employees = data;
  }

  loadEmployees(): Promise<Employee[]> {
    return fetch('assets/mocks/employee-list.json')
      .then(res => res.json())
      .then((data: Employee[]) => {
        this._employees = JSON.parse(JSON.stringify(data));
        return this._employees;
      });
  }
}
