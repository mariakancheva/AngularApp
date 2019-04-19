import { Component, OnInit } from '@angular/core';
import { ProfileInfo } from '../../shared/models/ProfileInfo';
import { UserService } from 'src/app/core/services/user.service';
import { Observable } from 'rxjs';
import { CampaignInfo } from '../../shared/models/CampaignInfo';
import { CampaignService } from 'src/app/core/services/campaign.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  profile: ProfileInfo;
  city:string;
  lastDonation:string;
  campaigns$:Observable<Array<CampaignInfo>>

  constructor(private userService: UserService,private campaignService:CampaignService) { }

  ngOnInit() {
    this.userService.getProfile().subscribe(data => {
      this.profile = data[0];
      localStorage.setItem('city',this.profile['city'])
      localStorage.setItem('lastDonation', this.profile['lastDonation'])  
    }) 
    
    this.campaigns$ = this.campaignService.getAllCampaigns();
  }

}
