import { Marker } from './../../classes/Marker.class';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar} from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EditMarkerDialogComponent } from './edit-marker-dialog.component';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  lat = 51.678418;
  lng = 7.809007;
  markers: Marker[] = [];

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) {

    if ( localStorage.getItem('markers') ) {
      this.markers = JSON.parse(localStorage.getItem('markers'));
    }
  }

  ngOnInit() {
  }

  mapCLicked(e) {
    console.log(e);
    const { lat, lng } = e.coords; // destructuracion
    const newMarker = new Marker(lat, lng);
    this.markers.push(newMarker);
    this.saveInLocalStorage();
    this.snackBar.open('Mark added succesfully', 'Close', {
      duration: 2000,
    });
  }

  saveInLocalStorage() {
    localStorage.setItem('markers', JSON.stringify(this.markers));
  }

  deleteMarker (i: number) {
    this.markers.splice(i, 1);
    this.saveInLocalStorage();
    this.snackBar.open('Mark deleted succesfully', 'Close')
  }

  editMarkerDialog(marker) {
    const dialogRef = this.dialog.open(EditMarkerDialogComponent, {
      width: '250px',
      data: {description: marker.desc, title: marker.title}
    });

    dialogRef.afterClosed().subscribe(result => {
      if ( !result ){
        return;
      }
      marker.title = result.title;
      marker.desc = result.desc;
      this.saveInLocalStorage();
      this.snackBar.open('Upload succesfully', 'Close', {
        duration: 2000,
      });
    });
  }

}

