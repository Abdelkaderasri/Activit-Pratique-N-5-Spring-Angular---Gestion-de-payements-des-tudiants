import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCreatComponent } from './student-creat.component';

describe('StudentCreatComponent', () => {
  let component: StudentCreatComponent;
  let fixture: ComponentFixture<StudentCreatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentCreatComponent]
    });
    fixture = TestBed.createComponent(StudentCreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
