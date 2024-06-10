import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBarComponent } from './student-bar.component';

describe('StudentBarComponent', () => {
  let component: StudentBarComponent;
  let fixture: ComponentFixture<StudentBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentBarComponent]
    });
    fixture = TestBed.createComponent(StudentBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
