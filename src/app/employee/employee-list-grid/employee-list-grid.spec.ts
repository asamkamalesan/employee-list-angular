import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListGrid } from './employee-list-grid';

describe('EmployeeListGrid', () => {
  let component: EmployeeListGrid;
  let fixture: ComponentFixture<EmployeeListGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeListGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeListGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
