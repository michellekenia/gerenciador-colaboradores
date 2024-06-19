import { Component } from '@angular/core';

interface Colaboradores {
  id: number, 
  nome: string,
  cargo: string
 } 

@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrl: './colaborador.component.css'
})


export class ColaboradorComponent {

colaboradores: Colaboradores [] = [
{ id: 1, nome:'Mariana', cargo: 'Programadora back-end' }, 
{ id: 2, nome:'Odara', cargo: 'Programadora front-end' },
{ id: 3, nome:'Kênia', cargo: 'Tech Lead' }

]

trackByItem(index: number, item: Colaboradores): number {
  return item.id;
}


}
