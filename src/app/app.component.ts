import { Router } from '@angular/router';
import { DataService } from './data.service';
import { Component } from '@angular/core';
import { Colaborador } from './colaborador/colaborador';
import { HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

colaboradores: Colaborador[] = []

constructor(
  private dataService: DataService,
  private router: Router

){}


ngOnInit(){
  this.getColaborador()
  this.postColaborador()
  this.putColaborador()
  this.deleteColaborador(0)
}

getColaborador(){
  const url = 'sua-api-url/aqui'
  this.dataService.get<Colaborador[]>(url)
  .subscribe((resposta: Colaborador[])=> {
    this.colaboradores = resposta })
}

postColaborador(){

  const headers = new HttpHeaders({
    'Content-type': 'application/json; charset-UTF-8',
  })
  const options = {
    headers
  }

  const url = 'sua-api-url/aqui'
  const novoColaborador: Colaborador = {nome: '', cargo: ''}
  
  this.dataService.post<Colaborador>(url, novoColaborador)
  .subscribe((resposta)=> {
    this.colaboradores.push(resposta)
  })
} 


putColaborador(){
  const url = 'sua-api-url/aqui'
  const colaboradorAtualizado: Colaborador = {nome: '', cargo: ''}
  this.dataService.put<Colaborador>(url, colaboradorAtualizado)
  .subscribe((resposta => {
    const index = this.colaboradores.findIndex(colab => colab.id === resposta.id)
    this.colaboradores[index] = resposta
  }))

}

deleteColaborador(colaboradorId: number){
  const url = 'sua-api-url/aqui'
  this.dataService.delete(url)
  .subscribe(() => {
    this.colaboradores = this.colaboradores.filter(colab => colab.id !== colaboradorId)
  })
}

}
