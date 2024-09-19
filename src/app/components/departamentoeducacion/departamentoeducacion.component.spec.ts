import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoeducacionComponent } from './departamentoeducacion.component';

describe('DepartamentoeducacionComponent', () => {
  let component: DepartamentoeducacionComponent;
  let fixture: ComponentFixture<DepartamentoeducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartamentoeducacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartamentoeducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
