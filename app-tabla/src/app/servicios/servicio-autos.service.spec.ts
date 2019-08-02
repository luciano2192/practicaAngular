import { TestBed } from '@angular/core/testing';

import { ServicioAutosService } from './servicio-autos.service';

describe('ServicioAutosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioAutosService = TestBed.get(ServicioAutosService);
    expect(service).toBeTruthy();
  });
});
