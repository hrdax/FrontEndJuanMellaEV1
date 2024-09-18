import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ConsejoMunicipalComponent } from './components/consejo-municipal/consejo-municipal.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'concejoMunicipal',
        component: ConsejoMunicipalComponent,
    },
];
