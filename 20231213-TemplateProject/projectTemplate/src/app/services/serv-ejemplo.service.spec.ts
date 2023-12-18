import { TestBed } from '@angular/core/testing';

import { ServEjemploService } from './serv-ejemplo.service';

describe('ServEjemploService', () => {
  let service: ServEjemploService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServEjemploService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
