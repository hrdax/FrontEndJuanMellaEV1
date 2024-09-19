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
import { SecplacComponent } from './components/secplac/secplac.component';
import { DireccioninternoComponent } from './components/direccioninterno/direccioninterno.component';
import { DireccionobraComponent } from './components/direccionobra/direccionobra.component';
import { DepartamentosaludComponent } from './components/departamentosalud/departamentosalud.component';
import { DepartamentoeducacionComponent } from './components/departamentoeducacion/departamentoeducacion.component';
import { JuzgadopolicialocalComponent } from './components/juzgadopolicialocal/juzgadopolicialocal.component';
import { OficinaDeporteComponent } from './components/oficina-deporte/oficina-deporte.component';
import { RegistroSocialComponent } from './components/registro-social/registro-social.component';
import { ProgramafamiliarComponent } from './components/programafamiliar/programafamiliar.component';
import { OmdelComponent } from './components/omdel/omdel.component';
import { OmilComponent } from './components/omil/omil.component';
import { OrganizacionescomunitariasComponent } from './components/organizacionescomunitarias/organizacionescomunitarias.component';
import { EGISComponent } from './components/egis/egis.component';
import { SubsidioAguaComponent } from './components/subsidio-agua/subsidio-agua.component';
import { SubsidioFamiliarComponent } from './components/subsidio-familiar/subsidio-familiar.component';
import { ProdesalComponent } from './components/prodesal/prodesal.component';
import { LicenciasConducirComponent } from './components/licencias-conducir/licencias-conducir.component';
import { ExamenpracticoComponent } from './components/examenpractico/examenpractico.component';


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
    {
        path: 'secplac',
        component: SecplacComponent,
    },
    {
        path: 'direccionInterno',
        component: DireccioninternoComponent,
    },
    {
        path: 'direccionObras',
        component: DireccionobraComponent,
    },
    {
        path: 'departamentoSalud',
        component: DepartamentosaludComponent,
    },
    {
        path: 'departamentoEducacion',
        component: DepartamentoeducacionComponent,
    },
    {
        path: 'juzgadoPoliciaLocal',
        component: JuzgadopolicialocalComponent,
    },
    {
        path: 'oficinaDeporte',
        component: OficinaDeporteComponent,
    },
    {
        path: 'registroSocial',
        component: RegistroSocialComponent,
    },
    {
        path: 'programaFamilia',
        component: ProgramafamiliarComponent,
    },
    {
        path: 'omdel',
        component: OmdelComponent,
    },
    {
        path: 'omil',
        component: OmilComponent,
    },
    {
        path: 'organizacionesComunitarias',
        component: OrganizacionescomunitariasComponent,
    },
    {
        path: 'EGIS',
        component: EGISComponent,
    },
    {
        path: 'subsidioAgua',
        component: SubsidioAguaComponent,
    },
    {
        path: 'subsidioFamiliar',
        component: SubsidioFamiliarComponent,
    },
    {
        path: 'prodesal',
        component: ProdesalComponent,
    },
    {
        path: 'licenciasConducir',
        component: LicenciasConducirComponent,
    },
    {
        path: 'examenPractico',
        component: ExamenpracticoComponent,
    },
];
