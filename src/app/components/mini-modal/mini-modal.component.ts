import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mini-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mini-modal.component.html',
  styleUrls: ['./mini-modal.component.css']
})
export class MiniModalComponent  {
  @Input() isVisible: boolean = false;  // El valor se pasa desde el componente padre
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();  // Emitir evento al padre para cerrar el modal
  }

  openLink(url: string) {
    window.open(url, '_blank');  // Abrir enlaces en una nueva pestaña
  }
}
