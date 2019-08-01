import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteParrafoComponent } from './componente-parrafo.component';

describe('ComponenteParrafoComponent', () => {
  let component: ComponenteParrafoComponent;
  let fixture: ComponentFixture<ComponenteParrafoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteParrafoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteParrafoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
