import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboradorComponent } from './colaborador.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ColaboradorComponent],
  imports: [
    CommonModule,
    FormsModule 
  ], 

  exports: [ 
    ColaboradorComponent 
  ]
})
export class ColaboradorModule { }
