import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboradorComponent } from './colaborador.component';

@NgModule({
  declarations: [
    ColaboradorComponent]
    ,
  imports: [
    CommonModule
  ], 

  exports: [ 
    ColaboradorComponent 
  ]
})
export class ColaboradorModule { }
