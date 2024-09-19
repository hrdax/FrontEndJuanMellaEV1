import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenciasConducirComponent } from './licencias-conducir.component';

describe('LicenciasConducirComponent', () => {
  let component: LicenciasConducirComponent;
  let fixture: ComponentFixture<LicenciasConducirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenciasConducirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenciasConducirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
