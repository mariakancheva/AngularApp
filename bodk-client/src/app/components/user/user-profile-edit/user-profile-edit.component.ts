import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfileInfo } from '../../shared/models/ProfileInfo';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.css']
})
export class UserProfileEditComponent implements OnInit {

  @ViewChild ('form') form:FormGroup;
  profile: ProfileInfo;
  botypeSelect: string[] = [
    'O +',
    'O -',
    'A +',
    'A -',
    'B +',
    'B -',
    'AB +',
    'AB -',
    'I have no idea!'
  ]

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private toastr:ToastrService) { }

  ngOnInit() {

    this.userService.getProfile().subscribe(data => {
      this.profile = data[0];
      console.log(this.profile);
 
      this.form = this.fb.group({
        firstName: [this.profile.firstName, [Validators.required, Validators.pattern(/[A-Z][a-z]/)]],
        lastName: [this.profile.lastName, [Validators.required, Validators.pattern(/[A-Z][a-z]/)]],
        email: [this.profile.email, [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
        phone: [this.profile.phone, [Validators.required, Validators.pattern(/\d{9}/)]],
        city: [this.profile.city, [Validators.required, Validators.pattern(/[A-Z][a-z]{3,}/)]],
        botype: [this.profile.botype, Validators.required],
        lastDonation: [this.profile.lastDonation]
      })

    })
  }


  get f() {
    return this.form.controls;
  }
  get invalid() {
    return this.form.invalid;
  }

  editProfile() {
    debugger;
    let id = this.profile['_id']
    const body = this.form.value;
    body['author'] = localStorage.getItem('username');
    this.userService.editProfile(id ,body).subscribe(res => {
      this.toastr.success('Profile edited successfully', 'Success!');
      this.router.navigate(['/user']);
    })
  }

}
