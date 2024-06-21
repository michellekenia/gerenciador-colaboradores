import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Colaborador } from '../colaborador/colaborador';

@Component({
  selector: 'app-deletar-colaborador',
  templateUrl: './deletar-colaborador.component.html',
  styleUrl: './deletar-colaborador.component.css'
})
export class DeletarColaboradorComponent {
  constructor(private router: Router) { }

  colaborador: Colaborador = {nome: '', cargo: ''}

  colaboradores: Colaborador [] = []

  deColaborador(){
    this.router.navigate(['deletar-colaborador'])
  }

  listarColaborador() {
    this.router.navigate(['listar-colaborador'])
  }

  
}
