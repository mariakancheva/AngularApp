import { Component, OnInit } from '@angular/core';
import { ProfileInfo } from '../../shared/models/ProfileInfo';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  profile: ProfileInfo;
  hasProfile: boolean;
  username: string = localStorage.getItem('username');

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getProfile().subscribe(data => {
      this.profile = data[0];
   
      if (this.profile !== undefined) {
        localStorage.setItem('city', this.profile['city'])
        localStorage.setItem('lastDonation', this.profile['lastDonation'])
        localStorage.setItem('hasProfile', 'true');
        localStorage.setItem('profileId', this.profile['_id']);
      }

    })

    this.getProfileStatus();
  }

  getProfileStatus(): void {

    if (localStorage['hasProfile'] == "true") {
      this.hasProfile = true;
    } else {
      this.hasProfile = false;
    }
  }





}
