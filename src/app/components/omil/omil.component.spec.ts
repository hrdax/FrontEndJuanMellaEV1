import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmilComponent } from './omil.component';

describe('OmilComponent', () => {
  let component: OmilComponent;
  let fixture: ComponentFixture<OmilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OmilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
