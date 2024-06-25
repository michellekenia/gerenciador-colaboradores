import { DataService } from './../data.service';
import { Component } from '@angular/core';
import { Colaborador } from '../colaborador/colaborador';
import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
  selector: 'app-atualizar-colaborador',
  templateUrl: './atualizar-colaborador.component.html',
  styleUrl: './atualizar-colaborador.component.css'
})
export class AtualizarColaboradorComponent {

  constructor(
    private router: Router, 
    private dataService: DataService,
    private route: ActivatedRoute) { }

    userId: number = 0
    colaborador: Colaborador = {id: 0, nome: '', cargo: ''}
    isUpdate: boolean = false

    ngOnInit(){

      this.route.params.subscribe(params => {
        const id = +params['id']
        if(id){
          this.isUpdate = true
          this.getColaborador(id)
        }


        // this.userId = params['id']
        // this.getColaboradores(this.userId)

        // console.log('Test ID:', this.userId);
      })   
    }


  getColaborador(id: number): void{
    const url = 'https://jsonplaceholder.typicode.com/posts/'+id
    this.dataService.get<Colaborador>(url)
    .subscribe((data: any)=> {
      this.colaborador = {
        nome: data.title, 
        cargo: 'vazio',
        id: data.id
      } 
      console.log("resultado", data)
    })
      
    
  }
  
  salvarColaborador(): void {
    if(this.isUpdate) {
      const url = 'https://jsonplaceholder.typicode.com/posts/' + this.colaborador.id;
      const body = {
        id: this.colaborador.id, 
        title: this.colaborador.nome, 
        body: 'vazio',
        userId: 1
      }

      this.dataService.put<any>(url, body).subscribe(response => {
        console.log("Resposta da atualização:", response);
        this.router.navigate(['listar-colaborador'])
      });
    
    }
  }





}
