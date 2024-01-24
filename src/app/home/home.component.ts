import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
import { FeedBack } from '../models/feed-back';
import { HttpClientModule } from '@angular/common/http';
import { FeedbackService } from '../services/feedback.service';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [    HttpClientModule,
    FormsModule
  ],
  providers: [FeedbackService], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

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

  gotologinsuccess(){
    this._router.navigate(['/loginsuccess'])

  }
  gotoregistration(){
    this._router.navigate(['/registration'])
  }
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
    this._router.navigate(['/contactus'])
  }
  gotoHome(){
    this._router.navigate(['/home'])
  }
  gotologin(){
    this._router.navigate(['/login'])
  }
  gotoRegister(){
    this._router.navigate(['/registration'])
  }

 

  


}

