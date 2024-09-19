import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionobraComponent } from './direccionobra.component';

describe('DireccionobraComponent', () => {
  let component: DireccionobraComponent;
  let fixture: ComponentFixture<DireccionobraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DireccionobraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DireccionobraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
