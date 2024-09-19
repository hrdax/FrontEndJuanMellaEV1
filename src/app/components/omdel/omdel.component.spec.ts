import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmdelComponent } from './omdel.component';

describe('OmdelComponent', () => {
  let component: OmdelComponent;
  let fixture: ComponentFixture<OmdelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OmdelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmdelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
