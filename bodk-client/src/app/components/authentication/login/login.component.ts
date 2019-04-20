import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isAdmin:boolean;
  
  @ViewChild('f') loginForm: NgForm;
  constructor(private authService: AuthService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  login() {
    this.authService
      .signIn(this.loginForm.value)
      .subscribe((data) => {
        this.toastr.success('Logged in successfully', 'Success!');
        this.authService.saveUserInfo(data);
        this.isAdmin = this.authService.getAdminStatus();
       
        if(this.isAdmin){
          this.router.navigate(['/admin'])
        }else{
          this.router.navigate(['/user']);
        }
        
      })
  }

}
