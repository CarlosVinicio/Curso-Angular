import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  mostrar = true;

  frase: any = {
    message: 'Un gran poder requiere una gran responsabilidad',
    author: 'Alguien'
  };

  personajes: string[] = ['Spiderman', 'Hulk', 'Superman'];

}
