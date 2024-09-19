import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-clases-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-clases-a.component.html',
  styleUrl: './modal-clases-a.component.css'
})
export class ModalClasesAComponent {
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();
  

  closeModal() {
    this.close.emit();
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
