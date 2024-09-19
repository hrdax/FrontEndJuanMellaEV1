import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mini-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mini-modal.component.html',
  styleUrls: ['./mini-modal.component.css']
})
export class MiniModalComponent implements OnInit {
  isVisible = false;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.modalVisibility$.subscribe((visible) => {
      this.isVisible = visible;
    });
  }

  closeModal() {
    this.modalService.closeModal();
  }
  
  openLink(url: string) {
    window.open(url, '_blank');
  }
}
