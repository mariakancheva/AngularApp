import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_KEY, APP_SECRET } from 'src/app/kinvey.tokens';
import { Observable } from 'rxjs';
import { CampaignInfo } from 'src/app/components/shared/models/CampaignInfo';

@Injectable({
    providedIn: 'root'
})
export class CampaignService {

    private readonly BASE_URL = `https://baas.kinvey.com/appdata/${APP_KEY}`;
    private readonly CAMPAIGN_URL = `${this.BASE_URL}/campaign`;
    private readonly CAMPAIGN_USER_URL = `${this.BASE_URL}/campaignWithUsers`;

    constructor(
        private http: HttpClient
    ) { }


    addCampaign(data:Object) {  
        return this.http.post(this.CAMPAIGN_URL,data);
    }

    getAllCampaigns():Observable<Array<CampaignInfo>>{
        return this.http.get<Array<CampaignInfo>>(this.CAMPAIGN_URL);
    }

    getCampaignByTown(town:string):Observable<Array<CampaignInfo>>{
    
        return this.http.get<Array<CampaignInfo>>(this.CAMPAIGN_URL +`?query={"city":"${town}"}`)

    }

    getCampaign(id:string){
        return this.http.get<CampaignInfo>(this.CAMPAIGN_URL +`/${id}`)
    }

    getCampainForUser(date:string){

        return this.http.get<Array<CampaignInfo>>(this.CAMPAIGN_URL +`?query={"startDate":{"$gte":"${date}"}}`)

    }

    deleteCampaign(id:string){
        return this.http.delete(this.CAMPAIGN_URL + `/${id}`)
    }

    editCampaign(id:string, body:Object){
        return this.http.put(this.CAMPAIGN_URL + `/${id}`, body);
    }

    addUserToCampaign(data:object){
        debugger;
        return this.http.post(this.CAMPAIGN_USER_URL,data);
    }

}
