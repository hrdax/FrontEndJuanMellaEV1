import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenpracticoComponent } from './examenpractico.component';

describe('ExamenpracticoComponent', () => {
  let component: ExamenpracticoComponent;
  let fixture: ComponentFixture<ExamenpracticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamenpracticoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamenpracticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
