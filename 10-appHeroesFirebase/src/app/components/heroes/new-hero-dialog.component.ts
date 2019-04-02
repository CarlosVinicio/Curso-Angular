import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {NgForm} from "@angular/forms";
import { HeroInterface } from "../../interfaces/hero";
import { HeroService} from "../../services/hero.service";

@Component({
  selector: 'app-new-hero-dialog',
  templateUrl: './new-hero-dialog.component.html',
})
export class NewHeroDialogComponent {
    selectedValue:any;

    progress: any = false;

    heroesHouses: Object[] = [
        {name: 'DC', value: 'DC'},
        {name: 'Marvel', value: 'Marvel'},
    ];

    hero: HeroInterface = {
        name: '',
        bio: '',
        house: 'DC'
    };

  constructor( public dialogRef: MatDialogRef<NewHeroDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any,
               private _heroService: HeroService
               ) {
      console.log('new hero dialog')
  }

  saveHero(formData: NgForm){
      this.progress = true;
      this._heroService.createHero(this.hero)
          .subscribe(
          response => {
              this.progress = false;
              this.dialogRef.close({status: true, msg: 'New hero included succesfully'});
          }, error => {
                  this.dialogRef.close({'status': false, 'msg' : error});
              }
          )
  }

  onNoClick(): void {
    this.dialogRef.backdropClick();
  }

}


