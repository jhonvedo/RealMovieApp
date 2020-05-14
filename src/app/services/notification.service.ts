import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private _snackBar: MatSnackBar) { }


  error(message){
    let config = new MatSnackBarConfig();
    config.duration = 50000;
    config.panelClass = ['red-snackbar']
    this._snackBar.open(message,null,config)
  }
}
