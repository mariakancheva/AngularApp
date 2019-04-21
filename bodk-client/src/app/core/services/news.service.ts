import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_KEY, APP_SECRET } from 'src/app/kinvey.tokens';
import { Observable } from 'rxjs';
import { NewsInfo } from 'src/app/components/shared/models/NewsInfo';


@Injectable({
    providedIn: 'root'
})
export class NewsService {

    private readonly BASE_URL = `https://baas.kinvey.com/appdata/${APP_KEY}`;
    private readonly NEWS_URL = `${this.BASE_URL}/news`;


    constructor(
        private http: HttpClient
    ) { }


    addNews(data:Object) {  
        return this.http.post(this.NEWS_URL,data);
    }

    getAllNews():Observable<Array<NewsInfo>>{
        return this.http.get<Array<NewsInfo>>(this.NEWS_URL);
    }

   

}
