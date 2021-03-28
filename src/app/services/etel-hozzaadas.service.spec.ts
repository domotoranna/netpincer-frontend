import { TestBed } from '@angular/core/testing';

import { EtelHozzaadasService } from './etel-hozzaadas.service';

describe('EtelHozzaadasService', () => {
  let service: EtelHozzaadasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtelHozzaadasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
