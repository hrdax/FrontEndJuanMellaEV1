import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuzgadopolicialocalComponent } from './juzgadopolicialocal.component';

describe('JuzgadopolicialocalComponent', () => {
  let component: JuzgadopolicialocalComponent;
  let fixture: ComponentFixture<JuzgadopolicialocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuzgadopolicialocalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuzgadopolicialocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
