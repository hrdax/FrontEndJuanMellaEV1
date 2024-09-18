import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsejoMunicipalComponent } from './consejo-municipal.component';

describe('ConsejoMunicipalComponent', () => {
  let component: ConsejoMunicipalComponent;
  let fixture: ComponentFixture<ConsejoMunicipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsejoMunicipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsejoMunicipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
