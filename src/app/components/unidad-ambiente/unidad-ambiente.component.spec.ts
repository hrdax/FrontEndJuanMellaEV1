import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadAmbienteComponent } from './unidad-ambiente.component';

describe('UnidadAmbienteComponent', () => {
  let component: UnidadAmbienteComponent;
  let fixture: ComponentFixture<UnidadAmbienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnidadAmbienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadAmbienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
