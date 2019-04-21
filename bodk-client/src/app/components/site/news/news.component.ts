import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsInfo } from '../../shared/models/NewsInfo';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newses$:Observable<Array<NewsInfo>>
  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.newses$ = this.newsService.getAllNews();
  }

}
