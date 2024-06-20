import { Component, Input, input } from '@angular/core';
import { Colaborador } from './colaborador';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrl: './colaborador.component.css'
})

export class ColaboradorComponent {

  constructor(private router: Router) { }

  @Input() colaborador: Colaborador = {nome: '', cargo: ''}

  
listarColaborador() {
  this.router.navigate(['listar-colaborador'])
}
}


