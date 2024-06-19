import { Routes } from '@angular/router';
import { ColaboradorComponent } from './colaborador/colaborador.component';
import { HomePainelComponent } from './home-painel/home-painel.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home-painel', pathMatch: 'full' },
    { path: 'home-painel', component: HomePainelComponent },
    { path: 'colaborador', component: ColaboradorComponent }
];
