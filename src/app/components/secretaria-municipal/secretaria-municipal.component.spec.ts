import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretariaMunicipalComponent } from './secretaria-municipal.component';

describe('SecretariaMunicipalComponent', () => {
  let component: SecretariaMunicipalComponent;
  let fixture: ComponentFixture<SecretariaMunicipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretariaMunicipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretariaMunicipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
