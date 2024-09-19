import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalClasesAComponent } from './modal-clases-a.component';

describe('ModalClasesAComponent', () => {
  let component: ModalClasesAComponent;
  let fixture: ComponentFixture<ModalClasesAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalClasesAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalClasesAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
