import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePainelComponent } from './home-painel.component';

@NgModule({
  declarations: [
    HomePainelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ 
    HomePainelComponent
  ]
})
export class HomePainelModule { }
