import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CampaignService } from 'src/app/core/services/campaign.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-campaign-create',
  templateUrl: './admin-campaign-create.component.html',
  styleUrls: ['./admin-campaign-create.component.css']
})
export class AdminCampaignCreateComponent implements OnInit {

  @ViewChild('f') campaignForm:NgForm
  

  constructor(private campaignService:CampaignService,private router:Router,private toastr:ToastrService ) { }

  ngOnInit() {
 

  }

  createCampaign(){
    console.log(this.campaignForm.value);
    this.campaignService.addCampaign(this.campaignForm.value).subscribe(data => {
      this.toastr.success('Campaign added successfully', 'Success!');
      this.router.navigate(['/admin'])
    });
  }


}
