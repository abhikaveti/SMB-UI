import { TestBed } from '@angular/core/testing';

import { ValidateCredsService } from './validate-creds.service';

describe('ValidateCredsService', () => {
  let service: ValidateCredsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidateCredsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
