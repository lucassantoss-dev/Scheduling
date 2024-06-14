import { TestBed } from '@angular/core/testing';

import { PhysioterapistService } from './physioterapist.service';

describe('PhysioterapistService', () => {
  let service: PhysioterapistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhysioterapistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
