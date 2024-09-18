import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ConsejoMunicipalComponent } from './components/consejo-municipal/consejo-municipal.component';
import { SecretariaMunicipalComponent } from './components/secretaria-municipal/secretaria-municipal.component';
import { AsesorJuridicoComponent } from './components/asesor-juridico/asesor-juridico.component';
import { RelacionesPublicasComponent } from './components/relaciones-publicas/relaciones-publicas.component';
import { UnidadAmbienteComponent } from './components/unidad-ambiente/unidad-ambiente.component';
import { DireccionTransitoComponent } from './components/direccion-transito/direccion-transito.component';
import { DireccionfinanzasComponent } from './components/direccionfinanzas/direccionfinanzas.component';
import { SeguridadpublicaComponent } from './components/seguridadpublica/seguridadpublica.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'concejoMunicipal',
        component: ConsejoMunicipalComponent,
    },
    {
        path: 'relacionesPublicas',
        component: RelacionesPublicasComponent,
    },
    {
        path: 'unidadAmbiente',
        component: UnidadAmbienteComponent,
    },
    {
        path: 'secretariaMunicipal',
        component: SecretariaMunicipalComponent,
    },
    {
        path: 'asesorJuridico',
        component: AsesorJuridicoComponent,
    },
    {
        path: 'direccionTransito',
        component: DireccionTransitoComponent,
    },
    {
        path: 'direccionFinanzas',
        component: DireccionfinanzasComponent,
    },
    {
        path: 'seguridadPublica',
        component: SeguridadpublicaComponent,
    },
];
