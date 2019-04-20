import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileInfo } from '../../shared/models/ProfileInfo';
import { UserService } from 'src/app/core/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-user-botype',
  templateUrl: './search-user-botype.component.html',
  styleUrls: ['./search-user-botype.component.css']
})
export class SearchUserBotypeComponent implements OnInit {

  query:string;
  matchedUsers$:Observable<Array<ProfileInfo>>
  constructor(private userService:UserService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.query = this.route.snapshot.queryParams['query'];

    this.matchedUsers$ = this.userService.getProfilesByABOType(this.query)
  }
}
