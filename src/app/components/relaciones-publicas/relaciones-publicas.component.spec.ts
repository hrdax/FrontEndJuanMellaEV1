import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionesPublicasComponent } from './relaciones-publicas.component';

describe('RelacionesPublicasComponent', () => {
  let component: RelacionesPublicasComponent;
  let fixture: ComponentFixture<RelacionesPublicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelacionesPublicasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelacionesPublicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
