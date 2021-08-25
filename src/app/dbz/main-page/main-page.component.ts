import { Component} from '@angular/core';


import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  
})
export class MainPageComponent {

  personajes : Personaje[] = [
    {
      nombre: 'Goku',
      poder: 546
    },
    {
      nombre: 'Vegeta',
      poder: 844
    }
  ];

  nuevo: Personaje = {
    nombre: 'nose',
    poder: 7894
  }

  
  


 

}
