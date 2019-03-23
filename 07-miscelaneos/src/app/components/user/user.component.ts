import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: []
})
export class UserComponent implements OnInit {

  parametroUser: any;

  //recoger el parametro enviado desde user:id
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(param=>{
      console.log(param)
      this.parametroUser = param;
    })
  }

  ngOnInit() {
  }


}
