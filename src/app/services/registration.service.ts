import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Route } from '@angular/router';
import { FeedBack } from '../models/feed-back';
import { Meeting } from '../models/meeting';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http:HttpClient) { }

  public LoginUserFromRemote(user:User):Observable<any>{

    return this._http.post<any>("http://localhost:8000/login",user)

  }

  public RegisterUserFromRemote(user:User):Observable<any>{

    return this._http.post<any>("http://localhost:8000/register",user)

  }
   
  public saveFeed(feed:FeedBack):Observable<any>{
    return this._http.post<any>(`http://localhost:8000/saveFeed`,feed)
  }
  
 
  public saveMeeting(meeting:Meeting):Observable<any>{

    return this._http.post<any>("http://localhost:8000/addMeeting",meeting)

  }

  
  public getMeeting():Observable<Meeting[]>{

    return this._http.get<any>("http://localhost:8000/getAllMeeting")

  }


  
}
