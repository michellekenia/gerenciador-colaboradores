import { Component, Input } from '@angular/core';
import { Colaborador } from '../colaborador/colaborador';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-listar-colaborador',
  templateUrl: './listar-colaborador.component.html',
  styleUrl: './listar-colaborador.component.css'
})
export class ListarColaboradorComponent {

  constructor(
    private router: Router,  
    private dataService: DataService) { }

    ngOnInit(){
      this.getColaboradores()
    }

colaborador: Colaborador = {nome: '', cargo: ''}

colaboradores: Colaborador [] = []

getColaboradores(){
  const url = 'http://localhost:3000/colaboradores'
  this.dataService.get<Colaborador[]>(url)
  .subscribe((resposta: any[])=> {
    this.colaboradores = resposta.map(data => ({
      nome: data.nome, 
      cargo: data.cargo,
      id: data.id
    })) 
    console.log("resultado do GET", resposta)
  })
    
}

atualizarColaborador(id: number){
  console.log(id)
  this.router.navigate(['atualizar-colaborador', id])
}

deletarColaborador(id:number){
  console.log(id)
  this.router.navigate(['deletar-colaborador',id])
}


}
