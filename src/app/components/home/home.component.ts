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
    { src: 'vinculos/solicitarinformacion.jpg', alt: 'Solicitar Información Ley de Transparencia', url:'https://www.portaltransparencia.cl/PortalPdT/web/guest/directorio-de-organismos-regulados?p_p_id=pdtorganismos_WAR_pdtorganismosportlet&orgcode=0390da9557920e0639c8b5926b94ff9d' },
    { src: 'vinculos/transparenciaactiva.jpg', alt: 'Permiso de Circulación 2024', url:'https://hualane.cl/transparencia/' },
    { src: 'vinculos/pagaaqui2dacuotapermisocirco.png', alt: 'Pago permiso de circulación', url:'https://ww13.e-com.cl/Pagos/PermisoCirculacion/renovacion/ecomv3/vista/?id=84&plebcas=12&portal=%2718/09/2024%27&html=70&opc=1' },
    { src: 'vinculos/inicioprocesoformulario.png', alt: 'Denuncia Ambiental Ciudadana', url:'https://hualane.cl/SitioMunicipal/wp-content/uploads/2024/05/solicitud-renovacion-y-declaracion-jurada.pdf'},
    { src: 'vinculos/denunciaambientalciudadana.png', alt: 'Denuncia Ambiental Ciudadana', url:'https://forms.office.com/pages/responsepage.aspx?id=KPnjJPdrNUaS3u8os9OSFuTdOkmVaAZHjblRze5lhNJUMjJQNjIxVTlNOExGSkJXT09GOUs3TlAxSi4u&route=shorturl'},
    { src: 'vinculos/validatupermiso.png', alt: 'Valida tu permiso', url:'https://hualane.cl/SitioMunicipal/validapc' },
    { src: 'vinculos/validamultas.png', alt: 'Valida multa', url:'https://hualane.cl/SitioMunicipal/validamulta' },
    { src: 'vinculos/didecoatiendeproceso.png', alt: 'Dideco atiende', url:'https://hualane.cl/SitioMunicipal/wp-content/uploads/2023/11/solicitud-renovacion-y-declaracion-jurada.pdf' },
    { src: 'vinculos/formulariodesolicitudyrequisitos.jpg', alt: 'Formulario de solicitud y requisitos', url:'https://hualane.cl/SitioMunicipal/?page_id=5320' },
    { src: 'vinculos/plataformalobby.jpg', alt: 'Plataforma ley lobby', url:'https://www.leylobby.gob.cl/instituciones/MU104' },
    { src: 'vinculos/contactopolicialocal.jpg', alt: 'Contacto policia local', url:'https://hualane.cl/SitioMunicipal/?page_id=1849' },
    { src: 'vinculos/ordenanzaspublicas.jpg', alt: 'Ordenanzas publicas', url:'https://hualane.cl/SitioMunicipal/?cat=12' },
    { src: 'vinculos/concursospublicos.jpg', alt: 'Concursos publicos', url:'https://hualane.cl/SitioMunicipal/?cat=3' },
    { src: 'vinculos/hualanemultimedia.jpg', alt: 'Hualane multimedia', url:'https://www.youtube.com/channel/UCIhmyw4I3O_dQemUXaAUKKQ' },
    { src: 'vinculos/tasacionsii.jpg', alt: 'Tasacion sii', url:'https://hualane.cl/SitioMunicipal/Documentos/tasacionesbienesraiceshualane.pdf' },
    { src: 'vinculos/reavaluodesitiossii.jpg', alt: 'Reavaluo de sitios sii', url:'https://hualane.cl/SitioMunicipal/wp-content/uploads/2024/04/ROLREAVALUO_SNE-07107_2024.pdf' },
    { src: 'vinculos/bienesraicesagricolasii.jpg', alt: 'Bienes raices sii', url:'https://hualane.cl/SitioMunicipal/wp-content/uploads/2024/04/ROLREAVALUO_AGRICOLA-07107_2024.pdf' },
    { src: 'vinculos/sendaminisinterior.jpg', alt: 'Senda ministerio del interior', url:'https://www.senda.gob.cl/' },
    { src: 'vinculos/admisionlabocar.png', alt: 'Admiision labocar', url:'https://www.admisioncarabineros.cl/' },
    { src: 'vinculos/carabineroschile.png', alt: 'Carabineros', url:'https://www.carabineros.cl/' },
    { src: 'vinculos/tgr.gif', alt: 'Carabineros', url:'https://www.tgr.cl/' },
  ];

  imagesTramites = [
    { src: 'tramites/tramites.png', alt: 'Formularios de trámites', url:'http://www.minvu.cl/opensite_20070307184543.aspx' },
    { src: 'tramites/DIDECO_ATIENDE.png', alt: 'didecoatiende', url:'https://hualane.cl/SitioMunicipal/?page_id=5313' },
  ];


  imagesGobierno = [
    { src: 'gobierno/min_interior.png', alt: 'Ministerio del interior', url:'https://www.interior.gob.cl/' },
    { src: 'gobierno/mini_hacienda.png', alt: 'Ministerio de Hacienda', url:'http://www.minhda.cl/' },
    { src: 'gobierno/min_obras.png', alt: 'Ministerio de Obras', url:'http://www.mop.cl/' },
    { src: 'gobierno/min_educacion.png', alt: 'Ministerio de educacion', url:'https://www.mineduc.cl/' },
    { src: 'gobierno/min_vivienda.png', alt: 'Ministerio de Vivienda', url:'https://www.minvu.gob.cl/' },
    { src: 'gobierno/registro_central.png', alt: 'Registro Central', url:'https://www.registros19862.cl/reportes/transferencias/reporte/ingresadas?transferencia%5Btipo_fecha%5D=0&transferencia%5Bfecha_desde%5D=&transferencia%5Bfecha_hasta%5D=&transferencia%5Brut_donante%5D=69.100.600-K&transferencia%5Bnombre_donante%5D=Municipalidad+de+Huala%C3%B1%C3%A9&transferencia%5Brut_receptor%5D=&transferencia%5Bnombre_receptor%5D=&transferencia%5Bagrupar%5D=0&commit=Ejecutar+Reporte' },
    { src: 'gobierno/oirs.png', alt: 'OIRS', url:'https://hualane.cl/SitioMunicipal/' },
    { src: 'gobierno/gob_transparente.png', alt: 'Gobierno Transparente', url:'https://transparenciaactiva.presidencia.cl/' },
    { src: 'gobierno/chilecompra.png', alt: 'Chile Compra', url:'https://www.mercadopublico.cl/Portal/Modules/Site/Busquedas/BuscadorAvanzado.aspx?qs=1' }
  ];

}
