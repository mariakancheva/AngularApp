import { Component, OnInit } from '@angular/core';
import { ProfileInfo } from '../../shared/models/ProfileInfo';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-profile-details',
  templateUrl: './user-profile-details.component.html',
  styleUrls: ['./user-profile-details.component.css']
})
export class UserProfileDetailsComponent implements OnInit {
  profile: ProfileInfo;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getProfile().subscribe(data => {
      this.profile = data[0];
      console.log(this.profile)
    })
  }

}
