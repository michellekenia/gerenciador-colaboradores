import { Router } from '@angular/router';
import { DataService } from './data.service';
import { Component } from '@angular/core';
import { Colaborador } from './colaborador/colaborador';

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
}

}
