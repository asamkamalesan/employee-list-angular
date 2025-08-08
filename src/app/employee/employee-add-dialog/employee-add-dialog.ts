import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-add-dialog',
  standalone: false,
  templateUrl: './employee-add-dialog.html',
  styleUrl: './employee-add-dialog.scss'
})
export class EmployeeAddDialog {
  employeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EmployeeAddDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      position: ['', Validators.required],
      department: ['', Validators.required],
      startDate: ['', Validators.required]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      this.dialogRef.close(this.employeeForm.value);
    }
  }
}
