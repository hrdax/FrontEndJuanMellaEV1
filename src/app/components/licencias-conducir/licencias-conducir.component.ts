import { Component } from '@angular/core';
import { NgOptimizedImage, CommonModule } from '@angular/common';
import { MiniModalComponent } from '../mini-modal/mini-modal.component';
import { ModalClasesAComponent } from '../modal-clases-a/modal-clases-a.component';

@Component({
  selector: 'app-licencias-conducir',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule, MiniModalComponent, ModalClasesAComponent],
  templateUrl: './licencias-conducir.component.html',
  styleUrl: './licencias-conducir.component.css'
})
export class LicenciasConducirComponent {

  isVisibleBCDE = false;
  isVisibleA = false;

  openModalBCDE() {
    this.isVisibleBCDE = true;
  }

  closeModalBCDE() {
    this.isVisibleBCDE = false;
  }

  openModalA() {
    this.isVisibleA = true;
  }

  closeModalA() {
    this.isVisibleA = false;
  }
  
}
