import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegistrationService } from '../services/registration.service';
import { User } from '../models/user';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    NgIf
  ],
  providers: [RegistrationService], // Ensure the service is provided in the component

  templateUrl: 'login.component.html',
  styleUrl: 'login.component.css'
})
export class LoginComponent {

   user=new User();
   msg='';

  constructor(private _service:RegistrationService, private _router : Router){}

  loginUser(){
    this._service.LoginUserFromRemote(this.user).subscribe((data)=>{
      console.log("Response received");
      this._router.navigate(['/loginsuccess'])
      
    },error=>{
      console.log("Exception occured");
      this.msg="Bad Credentials, please enter valid data";
    });
  };

  gotoregistration(){
    this._router.navigate(['/registration'])

  }

  gotologinsuccess(){
    this._router.navigate(['/loginsuccess'])

  }
    
  }


