import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionTransitoComponent } from './direccion-transito.component';

describe('DireccionTransitoComponent', () => {
  let component: DireccionTransitoComponent;
  let fixture: ComponentFixture<DireccionTransitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DireccionTransitoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DireccionTransitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
