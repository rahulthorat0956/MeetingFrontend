import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeedBack } from '../models/feed-back';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private _http:HttpClient) {}
   
  public saveFeed(feed:FeedBack):Observable<any>{
    return this._http.post<any>("http://localhost:8000/saveFeed",feed)
  }


  // private apiUrl = 'http://localhost:8080/generate'; // Adjust the URL based on your Spring Boot app's port

  // generateRandomRoomId(): Observable<string> {
  //   return this._http.get<string>(this.apiUrl);
  // }
}