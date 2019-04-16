import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_KEY, APP_SECRET } from 'src/app/kinvey.tokens';
import { ProfileInfo } from 'src/app/components/shared/models/ProfileInfo';

const createProfileUrl='';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private readonly BASE_URL = `https://baas.kinvey.com/appdata/${APP_KEY}`;
    private readonly CREATE_PROFILE = `${this.BASE_URL}/profile`;
    private readonly ALL_PROFILES = `${this.BASE_URL}/profiles?query={}`
    constructor(
        private http: HttpClient
    ) { }


    createProfile(data:Object) {
        return this.http.post(this.CREATE_PROFILE,data);

    }

    getAllProfiles(){
        return this.http.get<ProfileInfo[]>(this.ALL_PROFILES);
    }

    getProfile(id){
        return this.http.get<ProfileInfo>(this.CREATE_PROFILE + `/${id}`)

    }

    deleteProfile(id){
        return this.http.delete(this.CREATE_PROFILE + `/${id}`)
    }
    editProfile(body:Object,id:string){
        return this.http.put(this.CREATE_PROFILE + `/${id}`, body);
    }

}
