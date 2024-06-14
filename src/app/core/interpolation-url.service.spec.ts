import { TestBed } from '@angular/core/testing';

import { InterpolationUrlService } from './interpolation-url.service';

describe('InterpolationUrlService', () => {
  let service: InterpolationUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterpolationUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
