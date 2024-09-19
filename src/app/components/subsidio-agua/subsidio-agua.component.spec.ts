import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsidioAguaComponent } from './subsidio-agua.component';

describe('SubsidioAguaComponent', () => {
  let component: SubsidioAguaComponent;
  let fixture: ComponentFixture<SubsidioAguaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubsidioAguaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubsidioAguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
