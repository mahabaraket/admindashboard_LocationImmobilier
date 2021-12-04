import { TestBed } from '@angular/core/testing';

import { ReclamationAdService } from './reclamation-ad.service';

describe('ReclamationAdService', () => {
  let service: ReclamationAdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReclamationAdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
