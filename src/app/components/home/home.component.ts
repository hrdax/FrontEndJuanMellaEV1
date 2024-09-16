import { Component } from '@angular/core';
import { NgOptimizedImage, CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']  // Cambiado a styleUrls
})
export class HomeComponent {
  images = [
    { src: 'vinculos/solicitarinformacion.jpg', alt: 'Solicitar Información Ley de Transparencia' },
    { src: 'vinculos/transparenciaactiva.jpg', alt: 'Permiso de Circulación 2024' },
    { src: 'vinculos/pagaaqui2dacuotapermisocirco.png', alt: 'Pago permiso de circulación' },
    { src: 'vinculos/inicioprocesoformulario.png', alt: 'Denuncia Ambiental Ciudadana' },
    { src: 'vinculos/denunciaambientalciudadana.png', alt: 'Denuncia Ambiental Ciudadana' },
    { src: 'vinculos/validatupermiso.png', alt: 'Valida tu permiso' },
    { src: 'vinculos/validamultas.png', alt: 'Valida multa' },
    { src: 'vinculos/didecoatiendeproceso.png', alt: 'Dideco atiende' },
    { src: 'vinculos/formulariodesolicitudyrequisitos.jpg', alt: 'Formulario de solicitud y requisitos' },
    { src: 'vinculos/plataformalobby.jpg', alt: 'Plataforma ley lobby' },
    { src: 'vinculos/contactopolicialocal.jpg', alt: 'Contacto policia local' },
    { src: 'vinculos/ordenanzaspublicas.jpg', alt: 'Ordenanzas publicas' },
    { src: 'vinculos/concursospublicos.jpg', alt: 'Concursos publicos' },
    { src: 'vinculos/hualanemultimedia.jpg', alt: 'Hualane multimedia' },
    { src: 'vinculos/tasacionsii.jpg', alt: 'Tasacion sii' },
    { src: 'vinculos/reavaluodesitiossii.jpg', alt: 'Reavaluo de sitios sii' },
    { src: 'vinculos/bienesraicesagricolasii.jpg', alt: 'Bienes raices sii' },
    { src: 'vinculos/sendaminisinterior.jpg', alt: 'Senda ministerio del interior' },
    { src: 'vinculos/admisionlabocar.png', alt: 'Admiision labocar' },
    { src: 'vinculos/carabineroschile.png', alt: 'Carabineros' },
    { src: 'vinculos/tgr.gif', alt: 'Carabineros' },
  ];

  imagesTramites = [
    { src: 'tramites/tramites.png', alt: 'Formularios de trámites' },
    { src: 'tramites/DIDECO_ATIENDE.png', alt: 'didecoatiende' },
  ];


  imagesGobierno = [
    { src: 'gobierno/min_interior.png', alt: 'Ministerio del interior' },
    { src: 'gobierno/mini_hacienda.png', alt: 'Ministerio de Hacienda' },
    { src: 'gobierno/min_obras.png', alt: 'Ministerio de Obras' },
    { src: 'gobierno/min_educacion.png', alt: 'Ministerio de educacion' },
    { src: 'gobierno/min_vivienda.png', alt: 'Ministerio de Vivienda' },
    { src: 'gobierno/registro_central.png', alt: 'Registro Central' },
    { src: 'gobierno/oirs.png', alt: 'OIRS' },
    { src: 'gobierno/gob_transparente.png', alt: 'Gobierno Transparente' },
    { src: 'gobierno/chilecompra.png', alt: 'Chile Compra' }
  ];

}
