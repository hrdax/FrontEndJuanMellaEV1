import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccioninternoComponent } from './direccioninterno.component';

describe('DireccioninternoComponent', () => {
  let component: DireccioninternoComponent;
  let fixture: ComponentFixture<DireccioninternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DireccioninternoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DireccioninternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
