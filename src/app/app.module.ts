import { ListarColaboradorComponent } from './listar-colaborador/listar-colaborador.component';
import { ColaboradorComponent } from './colaborador/colaborador.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CriarColaboradorComponent } from './criar-colaborador/criar-colaborador.component';
import { AtualizarColaboradorComponent } from './atualizar-colaborador/atualizar-colaborador.component';
import { DeletarColaboradorComponent } from './deletar-colaborador/deletar-colaborador.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule, 
    ],
    exports: [
        AppComponent,
        ColaboradorComponent,
        ListarColaboradorComponent,
        CriarColaboradorComponent, 
        AtualizarColaboradorComponent,
        DeletarColaboradorComponent
        
    ],
    declarations: [
        AppComponent, 
        ColaboradorComponent,
        ListarColaboradorComponent,
        CriarColaboradorComponent, 
        AtualizarColaboradorComponent,
        DeletarColaboradorComponent
    ],
    providers: [],
    
    bootstrap: [ AppComponent ]
})
export class AppModule { }
