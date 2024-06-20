import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  
constructor(
  private router: Router
){}


  title = 'Meu gerenciador de colaboradores!';

ngOnInit(){

}






// irParaColaborador(){
//   this.router.navigate(['/colaborador'])
// }
  
}
