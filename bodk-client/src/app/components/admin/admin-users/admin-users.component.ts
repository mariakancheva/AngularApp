import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfileInfo } from '../../shared/models/ProfileInfo';
import { UserService } from 'src/app/core/services/user.service';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  @ViewChild('#form') searchByCityForm: NgForm;
  @ViewChild('#f') searchByABOTypeForm: NgForm;
  users$:Observable<Array<ProfileInfo>>;
  botypeSelect:string[] = [
    'O',
    'A',
    'B',
    'AB'
  ]

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
   this.users$ = this.userService.getAllProfiles();
  }

  searchCity(value){
    this.router.navigate(['/admin/users/searchByCity'], { queryParams: value })
  }

  searchType(type){
    this.router.navigate(['/admin/users/searchByABO'], { queryParams: type })
  }

}
