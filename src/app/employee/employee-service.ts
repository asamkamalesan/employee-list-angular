import { Injectable, signal } from '@angular/core';
import { Employee } from './employee-list/employee-list';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private _employees = signal<Employee[]>([]);

  get employees(): Employee[] {
    return this._employees();
  }

  set employees(data: Employee[]) {
    this._employees.set(data);
  }

  employeesSignal = this._employees.asReadonly();

  loadEmployees(): Promise<Employee[]> {
    return fetch('assets/mocks/employee-list.json')
      .then(res => res.json())
      .then((data: Employee[]) => {
        const copy = JSON.parse(JSON.stringify(data));
        this._employees.set(copy);
        return copy;
      });
  }
}
