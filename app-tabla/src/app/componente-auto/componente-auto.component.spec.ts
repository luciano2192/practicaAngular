import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteAutoComponent } from './componente-auto.component';

describe('ComponenteAutoComponent', () => {
  let component: ComponenteAutoComponent;
  let fixture: ComponentFixture<ComponenteAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
