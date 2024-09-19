import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsidioFamiliarComponent } from './subsidio-familiar.component';

describe('SubsidioFamiliarComponent', () => {
  let component: SubsidioFamiliarComponent;
  let fixture: ComponentFixture<SubsidioFamiliarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubsidioFamiliarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubsidioFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
