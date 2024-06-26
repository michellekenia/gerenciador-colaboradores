import { DataService } from './../data.service';
import { Component } from '@angular/core';
import { Colaborador } from '../colaborador/colaborador';
import { Data, Router } from '@angular/router';

@Component({
  selector: 'app-criar-colaborador',
  templateUrl: './criar-colaborador.component.html',
  styleUrl: './criar-colaborador.component.css'
})
export class CriarColaboradorComponent {

  colaborador: Colaborador = { nome: '', cargo: ''}
  
  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit(){
   
  }
 
  criarColaborador(){
    const url = 'http://localhost:3000/colaboradores'
    this.dataService.post<Colaborador>(url, this.colaborador)
    .subscribe((novoColaborador) => {
      console.log('Colaborador criado com sucesso!', novoColaborador)
      this.router.navigate(['listar-colaborador'])
    })

  }

}
