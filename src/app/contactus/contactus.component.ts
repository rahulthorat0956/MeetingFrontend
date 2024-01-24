import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FeedBack } from '../models/feed-back';
import { Router } from '@angular/router';
import { FeedbackService } from '../services/feedback.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  providers: [FeedbackService],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  feed = new FeedBack();

  constructor( private _router : Router,private _service:FeedbackService){}
  
  saveData(){
    this._service.saveFeed(this.feed).subscribe((data)=>{
      console.log("Response received");
      console.log(data);
      
    },error=>{
      console.log("Exception occured");
    });
  };


  

  gotoAbout(){
    this._router.navigate(['/about'])
  }
  gotoService(){
    this._router.navigate(['/service'])
  }
  gotoMember(){
    this._router.navigate(['/teammember'])
  }
  gotoContact(){
    this._router.navigate(['/contact'])
  }
  gotoHome(){
    this._router.navigate(['/home'])
}
}
