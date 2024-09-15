import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
    const dropdownSubmenus = document.querySelectorAll('.dropdown-submenu > a');
    
    dropdownSubmenus.forEach((submenu) => {
      submenu.addEventListener('click', function (e) {
        e.preventDefault();
        const nextEl = submenu.nextElementSibling;
        if (nextEl) {
          nextEl.classList.toggle('show');
        }
      });
    });
  }
}