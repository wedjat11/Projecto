import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes: string[] = ['spiderman', 'ironman', 'hulk', 'Dr. strange']
  heroeBorrado: String = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    
  }

 


}
