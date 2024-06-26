import { Component } from '@angular/core';
import { Colaborador } from './colaborador/colaborador';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {


  constructor(
    private router: Router,  
  ) { }

  seguirMenu(): void {
    this.router.navigate(['colaborador']);
  }
    
}
