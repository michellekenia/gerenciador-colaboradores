import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ColaboradorModule } from './colaborador/colaborador.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ColaboradorModule],
    exports: [],
    declarations: [
        AppComponent
    ],
    providers: [],
    
    bootstrap: [ AppComponent ]
})
export class AppModule { }
