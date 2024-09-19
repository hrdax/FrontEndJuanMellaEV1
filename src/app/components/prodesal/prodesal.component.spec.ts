import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdesalComponent } from './prodesal.component';

describe('ProdesalComponent', () => {
  let component: ProdesalComponent;
  let fixture: ComponentFixture<ProdesalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdesalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdesalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
