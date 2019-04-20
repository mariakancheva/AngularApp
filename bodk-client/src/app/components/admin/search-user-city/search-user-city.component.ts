import { Component, OnInit } from '@angular/core';
import { ProfileInfo } from '../../shared/models/ProfileInfo';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-user-city',
  templateUrl: './search-user-city.component.html',
  styleUrls: ['./search-user-city.component.css']
})
export class SearchUserCityComponent implements OnInit {
  query:string;
  matchedUsers$:Observable<Array<ProfileInfo>>
  constructor(private userService:UserService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.query = this.route.snapshot.queryParams['query'];

    this.matchedUsers$ =this.userService.getProfilesByCity(this.query)
  }

}
