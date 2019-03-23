import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-new-user',
  template: `
    <p>
      new-user works!
    </p>
  `,
  styles: []
})
export class NewUserComponent implements OnInit {

  @Input() param:string;

  //Para recoger un parametro que viene desde una ruta padre tenemos que
  // llamar al parametro de la ruta padre mediante la propiedad parent de activatedRoute
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.parent.params.subscribe(param=>{
      console.log('Componente nuevo usuario')
      console.log(param)
    })
  }

  ngOnInit() {
  }

}
