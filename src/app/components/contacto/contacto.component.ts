import { Component } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  contactoForm = new FormGroup({
    mensaje: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });



  handleSubmit() {
    console.log("Mensaje que se envia desde formulario", this.contactoForm.value.mensaje);
    console.log("Correo que se envia desde formulario", this.contactoForm.value.email);
  }

}
