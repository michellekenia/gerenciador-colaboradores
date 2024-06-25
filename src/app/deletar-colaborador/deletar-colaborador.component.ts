import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Colaborador } from '../colaborador/colaborador';
import { DataService } from '../data.service';

@Component({
  selector: 'app-deletar-colaborador',
  templateUrl: './deletar-colaborador.component.html',
  styleUrl: './deletar-colaborador.component.css'
})
export class DeletarColaboradorComponent {

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  
  colaborador: Colaborador = { id: 0, nome: '', cargo: '' }
  colaboradores: Colaborador [] = [

  ]

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if (id) {
        this.getColaborador(id);
      }
    });
  }

  getColaborador(id: number): void {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    this.dataService.get<Colaborador>(url)
      .subscribe((data: any) => {
        this.colaborador = {
          nome: data.title,
          cargo: 'vazio',
          id: data.id
        };
        console.log("Resultado da consulta:", data);
      });
  }

  deletarColaborador(){
    const url = `https://jsonplaceholder.typicode.com/posts/${this.colaborador.id}`
    this.dataService.delete<any>(url)
    .subscribe(() => {
      console.log('colaborador deletado com sucesso!')
      this.router.navigate(['listar-colaborador'])
    })
  }

  cancelarDelecao(): void {
    this.router.navigate(['listar-colaborador']);
  }
  
}
