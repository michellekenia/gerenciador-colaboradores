import { Component } from '@angular/core';
import { Colaborador } from '../colaborador/colaborador';

@Component({
  selector: 'app-listar-colaborador',
  templateUrl: './listar-colaborador.component.html',
  styleUrl: './listar-colaborador.component.css'
})
export class ListarColaboradorComponent {

colaborador: Colaborador = {nome: '', cargo: ''}

colaboradores: Colaborador [] = [
  {  nome:'Mariana', cargo: 'Programadora back-end' }, 
  {  nome:'Odara', cargo: 'Programadora front-end' },
  {  nome:'Kênia', cargo: 'Tech Lead' }
]

}
