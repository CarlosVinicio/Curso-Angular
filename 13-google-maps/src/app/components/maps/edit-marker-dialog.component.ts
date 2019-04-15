import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA , MatDialog, MatDialogRef} from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-marker-dialog',
  templateUrl: './edit-marker-dialog.component.html',
  styleUrls: ['./edit-marker-dialog.component.css']
})
export class EditMarkerDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<EditMarkerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log( data );

      this.form = fb.group({
        'title' : data.title,
        'desc'  : data.description
      });
  }

  ngOnInit() {
  }

  saveInfo() {
    this.dialogRef.close(this.form.value);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
