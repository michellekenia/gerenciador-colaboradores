import { Component } from '@angular/core';
import { Colaborador } from '../colaborador/colaborador';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-colaborador',
  templateUrl: './listar-colaborador.component.html',
  styleUrl: './listar-colaborador.component.css'
})
export class ListarColaboradorComponent {

  constructor(private router: Router) { }

colaborador: Colaborador = {nome: '', cargo: ''}

colaboradores: Colaborador [] = [
  {  nome:'Mariana', cargo: 'Programadora back-end' }, 
  {  nome:'Odara', cargo: 'Programadora front-end' },
  {  nome:'Kênia', cargo: 'Tech Lead' }
]

atualizarColaborador(){
  this.router.navigate(['atualizar-colaborador'])
}

deletarColaborador(){
  this.router.navigate(['deletar-colaborador'])
}


}
