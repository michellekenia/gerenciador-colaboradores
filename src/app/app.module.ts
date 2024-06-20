import { ListarColaboradorComponent } from './listar-colaborador/listar-colaborador.component';
import { ColaboradorComponent } from './colaborador/colaborador.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule, 
    ],
    exports: [
        AppComponent,
        ColaboradorComponent,
        ListarColaboradorComponent
    ],
    declarations: [
        AppComponent, 
        ColaboradorComponent,
        ListarColaboradorComponent
    ],
    providers: [],
    
    bootstrap: [ AppComponent ]
})
export class AppModule { }
