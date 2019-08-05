import { TestBed } from '@angular/core/testing';

import { TablaEquiposService } from './tabla-equipos.service';

describe('TablaEquiposService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TablaEquiposService = TestBed.get(TablaEquiposService);
    expect(service).toBeTruthy();
  });
});
