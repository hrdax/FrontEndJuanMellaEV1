import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisocirculacionComponent } from './permisocirculacion.component';

describe('PermisocirculacionComponent', () => {
  let component: PermisocirculacionComponent;
  let fixture: ComponentFixture<PermisocirculacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermisocirculacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermisocirculacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
