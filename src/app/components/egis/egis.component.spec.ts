import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EGISComponent } from './egis.component';

describe('EGISComponent', () => {
  let component: EGISComponent;
  let fixture: ComponentFixture<EGISComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EGISComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EGISComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
