import { Component } from '@angular/core';
import { Colaborador } from '../colaborador/colaborador';

@Component({
  selector: 'app-criar-colaborador',
  templateUrl: './criar-colaborador.component.html',
  styleUrl: './criar-colaborador.component.css'
})
export class CriarColaboradorComponent {

  colaborador: Colaborador = {nome: '', cargo: ''}

}
