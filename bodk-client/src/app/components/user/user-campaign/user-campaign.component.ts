import { Component, OnInit } from '@angular/core';
import { CampaignService } from 'src/app/core/services/campaign.service';
import { CampaignInfo } from '../../shared/models/CampaignInfo';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-campaign',
  templateUrl: './user-campaign.component.html',
  styleUrls: ['./user-campaign.component.css']
})
export class UserCampaignComponent implements OnInit {
  city: string;
  lastDonation: string = localStorage.getItem('lastDonation');
  hasProfile: boolean;
  campaigns$: Observable<Array<CampaignInfo>>
  data: object = {
    "campaignId": '',
    "campaingTitle": '',
    "profileId": '',
    "username": ''
  };

  constructor(private campaignService: CampaignService, private toastr:ToastrService, private router:Router) { }

  ngOnInit() {
 
    if (this.lastDonation !== "" && this.lastDonation !== null) {
      this.campaigns$ = this.campaignService.getCampainForUser(this.lastDonation)
    } else {
      this.campaigns$ = this.campaignService.getAllCampaigns();
    }

    this.getProfileStatus();
  }

  joinToCampaign(id: string, title: string): void {
    this.data['campaignId'] = id;
    this.data['campaingTitle'] = title;
    this.data['profileId'] = localStorage.getItem('profileId');
    this.data['username'] = localStorage.getItem('username');

    this.campaignService.addUserToCampaign(this.data).subscribe(() =>{
          this.toastr.success('Profile created in successfully', 'Success!');
          this.router.navigate(['/user']);
    }
    );
  }

  getProfileStatus():void {

    if (localStorage['hasProfile'] == "true") {
      this.hasProfile = true;
    } else {
      this.hasProfile = false;
    }
  }
}
