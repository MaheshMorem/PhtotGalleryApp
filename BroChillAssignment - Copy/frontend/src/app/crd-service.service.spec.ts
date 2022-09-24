import { TestBed } from '@angular/core/testing';

import { CrdServiceService } from './crd-service.service';

describe('CrdServiceService', () => {
  let service: CrdServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrdServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
