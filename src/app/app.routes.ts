import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ConsejoMunicipalComponent } from './components/consejo-municipal/consejo-municipal.component';
import { SecretariaMunicipalComponent } from './components/secretaria-municipal/secretaria-municipal.component';
import { AsesorJuridicoComponent } from './components/asesor-juridico/asesor-juridico.component';
import { RelacionesPublicasComponent } from './components/relaciones-publicas/relaciones-publicas.component';
import { UnidadAmbienteComponent } from './components/unidad-ambiente/unidad-ambiente.component';


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
];
