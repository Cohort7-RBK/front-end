import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingStudentComponent } from './tracking-student.component';

describe('TrackingStudentComponent', () => {
  let component: TrackingStudentComponent;
  let fixture: ComponentFixture<TrackingStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
