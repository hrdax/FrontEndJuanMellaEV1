import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalVisibility = new Subject<boolean>();

  get modalVisibility$() {
    return this.modalVisibility.asObservable();
  }

  openModal() {
    this.modalVisibility.next(true);
  }

  closeModal() {
    this.modalVisibility.next(false);
  }
}