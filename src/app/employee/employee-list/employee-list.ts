import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeAddDialog } from '../employee-add-dialog/employee-add-dialog';
import { EmployeeService } from '../employee-service';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  department: string;
  startDate: string;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.html',
  standalone: false,
  styleUrl: './employee-list.scss'
})
export class EmployeeList implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'position', 'department', 'startDate', 'actions'];
  dataSource = new MatTableDataSource<Employee>([]);

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private employeeService: EmployeeService,
    private dialog: MatDialog
  ) {}

  get employees(): Employee[] {
    return this.employeeService.employees;
  }

  set employees(data: Employee[]) {
    this.employeeService.employees = data;
    this.dataSource.data = data;
  }

  ngOnInit(): void {
    this.employeeService.loadEmployees().then(data => {
      this.dataSource.data = [...data];
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  addEmployee(): void {
    const dialogRef = this.dialog.open(EmployeeAddDialog, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Assign next ID
        const newId = this.dataSource.data.length ? Math.max(...this.dataSource.data.map(e => e.id)) + 1 : 1;
        const newEmployee = { ...result, id: newId };
        const newData = [
          ...this.dataSource.data,
          newEmployee
        ];
        this.employees = newData;
      }
    });
  }

  removeEmployee(id: number): void {
    const filtered = this.dataSource.data.filter(e => e.id !== id);
    const newData = filtered.map((e, idx) => ({ ...e, id: idx + 1 }));
    this.employees = newData;
  }
}
