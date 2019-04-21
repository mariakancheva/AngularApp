import { Component, OnInit } from '@angular/core';
import { CampaignService } from 'src/app/core/services/campaign.service';
import { CampaignUserInfo } from '../../shared/models/CampaignUsersInfo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-campaign-mine',
  templateUrl: './user-campaign-mine.component.html',
  styleUrls: ['./user-campaign-mine.component.css']
})
export class UserCampaignMineComponent implements OnInit {
  campaigns$: Observable<Array<CampaignUserInfo>>

  constructor(private campaignService:CampaignService) { }

  ngOnInit() {
    let username = localStorage.getItem('username');
    this.campaigns$ = this.campaignService.getJoinedCampaigns(username);
  }

}
