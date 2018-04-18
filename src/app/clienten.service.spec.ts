import { TestBed, inject } from '@angular/core/testing';

import { ClientenService } from './clienten.service';

describe('ClientenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientenService]
    });
  });

  it('should be created', inject([ClientenService], (service: ClientenService) => {
    expect(service).toBeTruthy();
  }));
});
