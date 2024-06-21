import { Component } from '@angular/core';
import { Colaborador } from '../colaborador/colaborador';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atualizar-colaborador',
  templateUrl: './atualizar-colaborador.component.html',
  styleUrl: './atualizar-colaborador.component.css'
})
export class AtualizarColaboradorComponent {

  constructor(private router: Router) { }

  colaborador: Colaborador = {nome: '', cargo: ''}

  colaboradores: Colaborador [] = []

  atualizarColaborador(){
    this.router.navigate(['listar-colaborador'])
  }


  // trackByItem(index: string, item: Colaborador): string {
  //   return item.nome;
  // }


}
