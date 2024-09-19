import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-clases-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-clases-a.component.html',
  styleUrl: './modal-clases-a.component.css'
})
export class ModalClasesAComponent implements OnInit{
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();
  
  ngOnInit(): void {
    console.log("aca", this.isVisible);
    
  }
  closeModal() {
    this.close.emit();
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
