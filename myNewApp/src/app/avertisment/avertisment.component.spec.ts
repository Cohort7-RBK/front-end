import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvertismentComponent } from './avertisment.component';

describe('AvertismentComponent', () => {
  let component: AvertismentComponent;
  let fixture: ComponentFixture<AvertismentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvertismentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvertismentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
