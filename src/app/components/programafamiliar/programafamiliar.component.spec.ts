import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramafamiliarComponent } from './programafamiliar.component';

describe('ProgramafamiliarComponent', () => {
  let component: ProgramafamiliarComponent;
  let fixture: ComponentFixture<ProgramafamiliarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramafamiliarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramafamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
