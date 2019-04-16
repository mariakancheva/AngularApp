import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  form:FormGroup;

  botypeSelect:string[] = [
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

  constructor(private fb:FormBuilder, private userService:UserService,private router:Router ) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstName:['',[Validators.required,Validators.pattern(/[A-Z][a-z]/)]],
      lastName:['',[Validators.required,Validators.pattern(/[A-Z][a-z]/)]],
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      phone: ['', [Validators.required, Validators.pattern(/\d{9}/)]],
      city:['',[Validators.required,Validators.pattern(/[A-Z][a-z]{3,}/)]],
      botype:[this.botypeSelect,Validators.required],
      lastDonation:['']
    })
  }

  get f() {
    return this.form.controls;
  }
  get invalid(){
    return this.form.invalid;
  }

  createProfile(){
    const body = this.form.value;
    body['author'] = localStorage.getItem('username');
    this.userService.createProfile(body).subscribe(data => {
      this.router.navigate(['/user']);
    })
  }

}
