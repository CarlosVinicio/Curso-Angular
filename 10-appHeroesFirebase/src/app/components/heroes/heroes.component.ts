import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { NewHeroDialogComponent } from './new-hero-dialog.component';
import { MatSnackBar} from '@angular/material'
import { HeroService} from "../../services/hero.service";


export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements  OnInit{

    displayedColumns: string[] = ['name', 'group', 'options'];
    dataSource = ELEMENT_DATA;
    heroes:any;

    constructor(public dialog: MatDialog, private snackBar: MatSnackBar, private _heroService: HeroService) {

    }
    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(){
        this._heroService.getHeroes().subscribe(
            data=>{
                this.heroes  = data;
            }
        )
    }

    openDialog(): void {
    const dialogRef = this.dialog.open(NewHeroDialogComponent, {
        width:'400px',
        data: {name: 'dato tets'}
    });

    dialogRef.afterClosed().subscribe(result => {

        if (result.status) {
            this.snackBar.open(result.msg)
        }
    });
  }

}
