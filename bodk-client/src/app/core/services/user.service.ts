import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_KEY, APP_SECRET } from 'src/app/kinvey.tokens';

const createProfileUrl='';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private readonly BASE_URL = `https://baas.kinvey.com/profile/${APP_KEY}`;

    constructor(
        private http: HttpClient
    ) { }


    createProfile(data) {
        return this.http.post(createProfileUrl,data);

    }

    getAllProfiles(){

    }

    getProfile(id){

    }
    deleteProfile(id){

    }
    editProfile(id){

    }

}
