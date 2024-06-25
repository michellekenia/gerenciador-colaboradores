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

colaboradores: Colaborador [] = [

]

getColaboradores(){
  const url = 'https://jsonplaceholder.typicode.com/posts'
  this.dataService.get<Colaborador[]>(url)
  .subscribe((resposta: any[])=> {
    this.colaboradores = resposta.map(data => ({
      nome: data.title, 
      cargo: 'vazio',
      id: data.id
    })) 
    console.log("resultado", resposta)
  })
    
}

atualizarColaborador(id: number){
  console.log(id)
  this.router.navigate(['atualizar-colaborador', id])
}

deletarColaborador(id:number){
  console.log(id)
  this.router.navigate(['deletar-colaborador', id])
}


}
