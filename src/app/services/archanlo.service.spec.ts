import { TestBed } from '@angular/core/testing';

import { ArchanloService } from './archanlo.service';

describe('ArchanloService', () => {
  let service: ArchanloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchanloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
