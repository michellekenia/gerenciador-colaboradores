import { Component } from '@angular/core';
import { Colaborador } from '../colaborador/colaborador';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-colaborador',
  templateUrl: './criar-colaborador.component.html',
  styleUrl: './criar-colaborador.component.css'
})
export class CriarColaboradorComponent {

  constructor(private router: Router) { }

  colaborador: Colaborador = {nome: '', cargo: ''}

  salvarNaLista(){
    this.router.navigate(['listar-colaborador'])
  }

}
