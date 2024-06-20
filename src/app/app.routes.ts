import { Routes } from '@angular/router';
import { ColaboradorComponent } from './colaborador/colaborador.component';
import { ListarColaboradorComponent } from './listar-colaborador/listar-colaborador.component';



export const routes: Routes = [
    { path: '', redirectTo: '/app-root', pathMatch: 'full' },
    { path: 'colaborador', component: ColaboradorComponent },
    { path: 'listar-colaborador', component: ListarColaboradorComponent }
    
];
