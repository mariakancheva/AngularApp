import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CampaignInfo } from '../../shared/models/CampaignInfo';
import { CampaignService } from 'src/app/core/services/campaign.service';

@Component({
  selector: 'app-admin-campaign',
  templateUrl: './admin-campaign.component.html',
  styleUrls: ['./admin-campaign.component.css']
})
export class AdminCampaignComponent implements OnInit {
  campaigns$:Observable<Array<CampaignInfo>>
  constructor(private campaignService:CampaignService) { }

  ngOnInit() {
    this.campaigns$ = this.campaignService.getAllCampaigns()
  }

}
