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
    private route: ActivatedRoute
  ) { }

    colaborador: Colaborador = {id: 0, nome: '', cargo: ''}
    isUpdate: boolean = false

    ngOnInit(){

      this.route.params.subscribe(params => {     
        const id = params['id']
        if(id){
          this.isUpdate = true
          this.getColaborador(id)
        }
      })   
    }

  getColaborador(id: number): void{
    const url = 'http://localhost:3000/colaboradores/'+ id
    this.dataService.get<Colaborador>(url)
    .subscribe((data: any)=> {
      this.colaborador = {
        id: data.id,
        nome: data.nome, 
        cargo: data.cargo,
        
      } 
      console.log("resultado get", data)
    })
      
    
  }
  
  salvarColaborador(): void {
    if(this.isUpdate) {
      const url = 'http://localhost:3000/colaboradores/' + this.colaborador.id;
      const body = {
        id: this.colaborador.id, 
        nome: this.colaborador.nome,
        cargo: this.colaborador.cargo,
      } 

      this.dataService.put<any>(url, body).subscribe(response => {
        console.log("Resposta da atualização:", response);
        this.router.navigate(['listar-colaborador'])
      });
    
    } 
  }





}
