import { TestBed } from '@angular/core/testing';

import { RatplignesService } from './ratplignes.service';

describe('RatplignesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RatplignesService = TestBed.get(RatplignesService);
    expect(service).toBeTruthy();
  });
});
