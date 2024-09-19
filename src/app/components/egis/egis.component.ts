import { Component } from '@angular/core';
import { NgOptimizedImage, CommonModule } from '@angular/common';

@Component({
  selector: 'app-egis',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './egis.component.html',
  styleUrl: './egis.component.css'
})
export class EGISComponent {

}
