import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacionescomunitariasComponent } from './organizacionescomunitarias.component';

describe('OrganizacionescomunitariasComponent', () => {
  let component: OrganizacionescomunitariasComponent;
  let fixture: ComponentFixture<OrganizacionescomunitariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizacionescomunitariasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizacionescomunitariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
