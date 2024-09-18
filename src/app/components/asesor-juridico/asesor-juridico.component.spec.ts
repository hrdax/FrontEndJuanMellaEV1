import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesorJuridicoComponent } from './asesor-juridico.component';

describe('AsesorJuridicoComponent', () => {
  let component: AsesorJuridicoComponent;
  let fixture: ComponentFixture<AsesorJuridicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsesorJuridicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsesorJuridicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
