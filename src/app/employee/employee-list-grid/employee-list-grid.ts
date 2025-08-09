import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee-service';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  department: string;
  startDate: Date;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list-grid.html',
  standalone: false,
  styleUrl: './employee-list-grid.scss'
})
export class EmployeeListGrid implements OnInit {
  employees: Employee[] = [];
  sortField: string = 'id';
  sortDirection: string = 'asc';

  showAddModal: boolean = false;
  addForm = {
    firstName: '',
    lastName: '',
    email: '',
    position: '',
    department: '',
    startDate: ''
  };

  showDeleteModal: boolean = false;
  employeeToDelete: Employee | null = null;

  // Pagination
  page: number = 1;
  pageSize: number = 10;
  get totalPages(): number {
    return Math.ceil(this.employees.length / this.pageSize) || 1;
  }
  get pagedEmployees(): Employee[] {
    const start = (this.page - 1) * this.pageSize;
    return this.employees.slice(start, start + this.pageSize);
  }

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.loadEmployees().then(data => {
      this.employees = [...data];
      this.sortEmployees();
    });
  }

  openAddModal(): void {
    this.showAddModal = true;
    this.addForm = {
      firstName: '',
      lastName: '',
      email: '',
      position: '',
      department: '',
      startDate: ''
    };
  }

  closeAddModal(): void {
    this.showAddModal = false;
  }

  submitAddEmployee(): void {
    if (!this.addForm.firstName || !this.addForm.lastName || !this.addForm.email || !this.addForm.position || !this.addForm.department || !this.addForm.startDate) {
      return;
    }
    const newId = this.employees.length ? Math.max(...this.employees.map(e => e.id)) + 1 : 1;
    const newEmployee: Employee = {
      id: newId,
      firstName: this.addForm.firstName,
      lastName: this.addForm.lastName,
      email: this.addForm.email,
      position: this.addForm.position,
      department: this.addForm.department,
      startDate: new Date(this.addForm.startDate)
    };
    this.employees = [...this.employees, newEmployee];
    this.sortEmployees();
  this.closeAddModal();
  this.page = this.totalPages; // Go to last page after add
  }

  openDeleteModal(employee: Employee): void {
    this.employeeToDelete = employee;
    this.showDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
    this.employeeToDelete = null;
  }

  confirmDeleteEmployee(): void {
    if (this.employeeToDelete) {
      const filtered = this.employees.filter(e => e.id !== this.employeeToDelete!.id);
      this.employees = filtered.map((e, idx) => ({ ...e, id: idx + 1 }));
      this.sortEmployees();
      // If current page is now empty, go to previous page if possible
      if ((this.page - 1) * this.pageSize >= this.employees.length && this.page > 1) {
        this.page--;
      }
    }
    this.closeDeleteModal();
  }

  sortEmployees(): void {
    this.employees = [...this.employees].sort((a, b) => {
      let aValue = (a as any)[this.sortField];
      let bValue = (b as any)[this.sortField];
      if (this.sortField === 'startDate') {
        aValue = new Date(aValue).getTime();
        bValue = new Date(bValue).getTime();
      }
      if (aValue < bValue) return this.sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
    this.page = 1; // Reset to first page on sort
  }
}
