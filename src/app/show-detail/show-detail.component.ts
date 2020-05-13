import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Show, Cast, Episode } from '../models/show';
import { ShowService } from '../services/show.service';
import { _getShadowRoot } from '@angular/cdk/platform';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss']
})
export class ShowDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: ShowService) { }
  movie: Show;
  casts: Cast[] = [];
  seasons: any[] = [];
  episodes:any[]=[];
  id: number;
  isLoadingResults: boolean = true;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.getShow();
    });
  }
  getShow() {
    this.service.getOne(this.id).then(
      (data) => {
        this.movie = data;
        this.isLoadingResults = false;
        this.casts = data.embedded?.cast;
        this.seasons = this.transform(data.embedded?.episodes,"season");
        console.log(this.seasons);
      }
    );
  }

  back() {
    console.log(this.episodes);

  }

  transform(value: Array<any>, field: string): Array<any> {
    const groupedObj = value.reduce((prev, cur)=> {
      if(!prev[cur[field]]) {
        prev[cur[field]] = [cur];
      } else {
        prev[cur[field]].push(cur);
      }
      return prev;
    }, {});
    return Object.keys(groupedObj).map(key => ({ key, value: groupedObj[key] }));
  }

}
