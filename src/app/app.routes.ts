import { Routes } from '@angular/router';
import { ColaboradorComponent } from './colaborador/colaborador.component';
import { ListarColaboradorComponent } from './listar-colaborador/listar-colaborador.component';
import { CriarColaboradorComponent } from './criar-colaborador/criar-colaborador.component';
import { AtualizarColaboradorComponent } from './atualizar-colaborador/atualizar-colaborador.component';
import { DeletarColaboradorComponent } from './deletar-colaborador/deletar-colaborador.component';



export const routes: Routes = [
    { path: '', redirectTo: '/app-root', pathMatch: 'full' },
    { path: 'colaborador', component: ColaboradorComponent },
    { path: 'listar-colaborador', component: ListarColaboradorComponent },
    { path: 'criar-colaborador', component: CriarColaboradorComponent },
    { path: 'atualizar-colaborador/:id', component: AtualizarColaboradorComponent },
    { path: 'deletar-colaborador/:id', component: DeletarColaboradorComponent }
    
];
