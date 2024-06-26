import { Component, Input } from '@angular/core';
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

criarColaborador() {
  this.router.navigate(['criar-colaborador'])
}

atualizarColaborador(){
  this.router.navigate(['atualizar-colaborador'])
}

deletarColaborador(){
  this.router.navigate(['deletar-colaborador'])
}


voltar(): void {
  this.router.navigate(['']);
}

}


