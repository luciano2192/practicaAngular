import { TestBed } from '@angular/core/testing';

import { ServiceEquiposService } from './service-equipos.service';

describe('ServiceEquiposService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceEquiposService = TestBed.get(ServiceEquiposService);
    expect(service).toBeTruthy();
  });
});
