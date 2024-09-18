import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecplacComponent } from './secplac.component';

describe('SecplacComponent', () => {
  let component: SecplacComponent;
  let fixture: ComponentFixture<SecplacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecplacComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecplacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
