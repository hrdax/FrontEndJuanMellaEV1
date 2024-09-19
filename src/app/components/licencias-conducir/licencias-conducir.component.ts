import { Component } from '@angular/core';
import { NgOptimizedImage, CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';
import { MiniModalComponent } from '../mini-modal/mini-modal.component';

@Component({
  selector: 'app-licencias-conducir',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule, MiniModalComponent],
  templateUrl: './licencias-conducir.component.html',
  styleUrl: './licencias-conducir.component.css'
})
export class LicenciasConducirComponent {
  constructor(private modalService: ModalService) {}

  openModal() {
    this.modalService.openModal();
  }
}
