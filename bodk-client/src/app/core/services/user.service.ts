import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_KEY, APP_SECRET } from 'src/app/kinvey.tokens';
import { ProfileInfo } from 'src/app/components/shared/models/ProfileInfo';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private readonly BASE_URL = `https://baas.kinvey.com/appdata/${APP_KEY}`;
    private readonly ALL_PROFILES = `${this.BASE_URL}/profile`
    constructor(
        private http: HttpClient
    ) { }


    createProfile(data:Object) {
        return this.http.post(this.ALL_PROFILES,data);

    }

    getAllProfiles():Observable<Array<ProfileInfo>>{
        return this.http.get<Array<ProfileInfo>>(this.ALL_PROFILES);
    }


    getProfilesByCity(city:string):Observable<Array<ProfileInfo>>{
        return this.http.get<Array<ProfileInfo>>(this.ALL_PROFILES + `?query={"city":{"$regex":"^${city}"}}`)
    }

    getProfilesByABOType(botype:string):Observable<Array<ProfileInfo>>{
        return this.http.get<Array<ProfileInfo>>(this.ALL_PROFILES + `?query={"botype":{"$regex":"^${botype}"}}`)
    }

    getProfile(){
        let name = localStorage.getItem('username')
        return this.http.get<ProfileInfo>(this.ALL_PROFILES +`?query={"author":"${name}"}`)
    }

    editProfile(id:string, body:Object){
        return this.http.put(this.ALL_PROFILES + `/${id}`, body);
    }
    
    deleteProfile(id:string){
        return this.http.delete(this.ALL_PROFILES + `/${id}`)
    }
}
