import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ColaboradorModule } from './colaborador/colaborador.module';
import { FormsModule } from '@angular/forms';
import { HomePainelModule } from './home-painel/home-painel.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ColaboradorModule,
        HomePainelModule, 
        AppRoutingModule, 
    ],
    exports: [
        AppComponent
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    
    bootstrap: [ AppComponent ]
})
export class AppModule { }
