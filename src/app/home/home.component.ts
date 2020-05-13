import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ShowService } from '../services/show.service';
import { Show } from '../models/show';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  shows:Show[]=[];

  constructor(private service:ShowService) { }

  ngOnInit(): void {

    this.service.get().then(data=>{
      this.shows = data;
      console.log(data[0]);
    });

  }

}
