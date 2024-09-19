import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentosaludComponent } from './departamentosalud.component';

describe('DepartamentosaludComponent', () => {
  let component: DepartamentosaludComponent;
  let fixture: ComponentFixture<DepartamentosaludComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartamentosaludComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartamentosaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
