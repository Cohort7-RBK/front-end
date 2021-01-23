import { TestBed } from '@angular/core/testing';

import { AvertismentService } from './avertisment.service';

describe('AvertismentService', () => {
  let service: AvertismentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvertismentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
