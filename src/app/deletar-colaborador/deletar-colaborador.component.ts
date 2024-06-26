import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Colaborador } from '../colaborador/colaborador';

@Component({
  selector: 'app-deletar-colaborador',
  templateUrl: './deletar-colaborador.component.html',
  styleUrl: './deletar-colaborador.component.css'
})
export class DeletarColaboradorComponent {
  isUpdate: boolean = false
  
  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  colaborador: Colaborador = { id: 0, nome: '', cargo: '' }

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
    console.log("Resultado Get", data)
  })    
}

deletarColaborador(): void {
  const url = `http://localhost:3000/colaboradores/${this.colaborador.id}`
  this.dataService.delete<any>(url).subscribe(response => {
    console.log("foi deletado:", response)
    this.router.navigate(['listar-colaborador'])
  })   
  }

  voltar(): void {
    this.router.navigate(['listar-colaborador']);
  }
  
}
