import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionfinanzasComponent } from './direccionfinanzas.component';

describe('DireccionfinanzasComponent', () => {
  let component: DireccionfinanzasComponent;
  let fixture: ComponentFixture<DireccionfinanzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DireccionfinanzasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DireccionfinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
