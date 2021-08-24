import { Component} from '@angular/core'

@Component({
    selector: 'app-contador',
    template:`

        <h1>{{title}}</h1>

        <h3>La base es: {{base}}</h3>

        <button (click)="acumular(base)">+5</button>

        <span>{{num}}</span>

        <button (click)= "acumular(- base)">-5</button>


    ` 
})


export class ContadorComponent{

    title:string = 'Contador';
    num:number = 10;
    base:number = 5;
  
      acumular(valor: number){
      this.num += valor;
    }

}