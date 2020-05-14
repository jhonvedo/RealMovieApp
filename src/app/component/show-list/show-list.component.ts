import { Component, OnInit, Input } from '@angular/core';
import { Show } from 'src/app/models/show';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {
  @Input() title: string | number;
  @Input() shows: Show[] = null;
 

  constructor(       
    private snackBar: MatSnackBar   
  ) { }
  ngOnInit(): void {
   
  }


}
