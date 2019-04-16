import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAdmin:boolean;

  constructor(public authService:AuthService, private router:Router) { }

  ngOnInit() {
    this.isAdmin = this.authService.getAdminStatus();
  }

  logout(){
    this.authService.logout();
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
