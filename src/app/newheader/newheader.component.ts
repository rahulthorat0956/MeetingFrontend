import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-newheader',
  standalone: true,
  imports: [],
  templateUrl: './newheader.component.html',
  styleUrl: './newheader.component.css'
})
export class NewheaderComponent {

  constructor( private _router : Router,private service:RegistrationService){}

  meetingDetails(){
    
      
  }


  gotoLoginSuccess(){
    this._router.navigate(['/loginsuccess'])
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
 
}
