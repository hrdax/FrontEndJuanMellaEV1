import { Component } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  contactoForm = new FormGroup({
    mensaje: new FormControl(''),
    email: new FormControl(''),
  });

  handleSubmit() {
    console.log("Mensaje que se envia desde formulario", this.contactoForm.value.mensaje);
    console.log("Correo que se envia desde formulario", this.contactoForm.value.email);
  }

}
