import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteDetallesComponent } from './componente-detalles.component';

describe('ComponenteDetallesComponent', () => {
  let component: ComponenteDetallesComponent;
  let fixture: ComponentFixture<ComponenteDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
