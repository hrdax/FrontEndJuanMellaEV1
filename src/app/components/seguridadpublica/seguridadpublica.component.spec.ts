import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadpublicaComponent } from './seguridadpublica.component';

describe('SeguridadpublicaComponent', () => {
  let component: SeguridadpublicaComponent;
  let fixture: ComponentFixture<SeguridadpublicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeguridadpublicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeguridadpublicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
