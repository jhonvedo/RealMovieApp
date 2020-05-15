import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ShowService } from '../services/show.service';
import { Show } from '../models/show';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  shows: Show[] = [];
  allShows: Show[] = [];
  panelOpenState = false;
  genres: string[] = [];
  languages: string[] = [];
  channels: any[] = [];
  names: string[] = [];
  days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday"];
  filteredOptions: Observable<string[]>;
  filterControl = new FormControl();
  filterOption: {
    keywords: string,
    language: string,
    genre: string,
    channel: string,
    day: string,
    hour:string
  } = { channel: '*', genre: '*', language: '*', keywords: '', day: '*' ,hour:''};


  constructor(private service: ShowService,private notificationService: ToastrService) { }

  ngOnInit(): void {
    this.filteredOptions = this.filterControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.service.get().subscribe(data=>{
      this.shows = [...data];
      this.allShows = [...data];
      this.fillClassificationLists();
    },error=>{
      this.notificationService.error("Error to load shows");
    });

  }
  fillClassificationLists() {
    this.shows.forEach(element => {
      if (element.genres) {
        this.genres = this.genres.concat(element.genres);
      }
      if (element.language) {
        this.languages.push(element.language);
      }     
      if(element.webChannel && element.webChannel.name){
        this.channels.push(element.webChannel.name);
      }
      this.names.push(element.name);
    });

    this.genres = [...new Set(this.genres)];
    this.languages = [...new Set(this.languages)];
    this.channels = [...new Set(this.channels)];
    this.names = [...new Set(this.names)];

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.names.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  onSearch() {

    this.filterOption.keywords = this.filterOption.keywords.trim().toLowerCase();
    var filterShows: Show[] = [];

    this.allShows.forEach(element => {
      if (
        this.filterOption.keywords != '' && element.name.toLowerCase().indexOf(this.filterOption.keywords) == -1 ||
        this.filterOption.language != '*' && element.language.indexOf(this.filterOption.language) == -1 ||
        this.filterOption.channel != '*' && element.webChannel?.name != this.filterOption.channel ||
        this.filterOption.day != '*' && element.schedule.days.indexOf(this.filterOption.day) == -1 ||
        this.filterOption.genre != '*' && element.genres.indexOf(this.filterOption.genre) == -1 ||
        this.filterOption.hour != '' && element.schedule.time != this.filterOption.hour
      ) {
        return;
      } else {
        filterShows.push(element);
      }
     
    });
    this.shows = filterShows;

  }
}
