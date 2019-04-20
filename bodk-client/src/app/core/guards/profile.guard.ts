import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivate {

  hasProfile: string;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        this.hasProfile=localStorage.getItem('hasProfile');
    if (this.hasProfile =="true") {
      return true;
    }

    this.router.navigate(['/user/profile']);
    return false;
  }
}