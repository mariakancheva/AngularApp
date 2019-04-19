import { Component, OnInit } from '@angular/core';
import { ProfileInfo } from '../../shared/models/ProfileInfo';
import { UserService } from 'src/app/core/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  users$:Observable<Array<ProfileInfo>>;

  constructor(private userService:UserService) { }

  ngOnInit() {
   this.users$ = this.userService.getAllProfiles();
  }

}
