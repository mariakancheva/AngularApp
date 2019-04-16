import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_KEY, ADMIN_ROLE_ID } from 'src/app/kinvey.tokens';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly BASE_URL = `https://baas.kinvey.com/user/${APP_KEY}`;
  private readonly ADMIN_URL = `/${APP_KEY}/${ADMIN_ROLE_ID}/membership`
  constructor(
    private http: HttpClient
  ) { }


  get token() {
    return localStorage.getItem('token');
  }

  signUp(body: Object) {
    return this.http.post(this.BASE_URL, body);
  }

  signIn(body: Object) {
    return this.http.post(`${this.BASE_URL}/login`, body);
  }

  logout() {
    return this.http.post(`${this.BASE_URL}/_logout`, {});
  }

  isAuthenticated() {
    return this.token !== null;
  }

  getAdminStatus() {
    let isAdmin = false;
    if (localStorage['isAdmin'] == ADMIN_ROLE_ID) {
      isAdmin = true;
    }
    return isAdmin;
  }

  saveUserInfo(res: Object) {
    localStorage.setItem('username', res['username']);
    localStorage.setItem('token', res['_kmd']['authtoken']);
    localStorage.setItem('userId', res['_id']);
    if (res['_kmd']['roles']) {
      localStorage.setItem('isAdmin', res['_kmd']['roles']['0']['roleId'])
    }


  }
}
