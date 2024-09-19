import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinaDeporteComponent } from './oficina-deporte.component';

describe('OficinaDeporteComponent', () => {
  let component: OficinaDeporteComponent;
  let fixture: ComponentFixture<OficinaDeporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OficinaDeporteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OficinaDeporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
