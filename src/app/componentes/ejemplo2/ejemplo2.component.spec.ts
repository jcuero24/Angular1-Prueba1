import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo2Component } from './ejemplo2.component';

describe('Ejemplo2Component', () => {
  let component: Ejemplo2Component;
  let fixture: ComponentFixture<Ejemplo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
