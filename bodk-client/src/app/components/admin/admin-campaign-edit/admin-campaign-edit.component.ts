import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CampaignInfo } from '../../shared/models/CampaignInfo';
import { ActivatedRoute, Router } from '@angular/router';
import { CampaignService } from 'src/app/core/services/campaign.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-campaign-edit',
  templateUrl: './admin-campaign-edit.component.html',
  styleUrls: ['./admin-campaign-edit.component.css']
})
export class AdminCampaignEditComponent implements OnInit {

  @ViewChild ('f') editCampaignForm:NgForm;
  campaign:CampaignInfo;

  constructor(private route:ActivatedRoute, private router:Router, private campaignService:CampaignService, private toastr:ToastrService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.campaignService.getCampaign(id).subscribe(data => {   
      this.campaign = data;
    })
  }

  editCampaign(){
    const body = this.editCampaignForm.value;
    this.campaignService.editCampaign(this.campaign['_id'],body).subscribe(() => {
      this.toastr.success('Campaign edited successfully', 'Success!');
      this.router.navigate(['/admin/campaign']);
    })
  }

}
