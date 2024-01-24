import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
import { Meeting } from '../models/meeting';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { FeedbackService } from '../services/feedback.service';


@Component({
  selector: 'app-createmeeting',
  standalone: true,
  imports: [HttpClientModule,FormsModule,NgIf ],
  providers: [RegistrationService], 

  templateUrl: './createmeeting.component.html',
  styleUrl: './createmeeting.component.css'
})
export class CreatemeetingComponent {


meet=new Meeting();
msg=' ';

constructor(private _router:Router,private _service:RegistrationService,private feedService:FeedbackService){}

gotojoinstream(){

  this._service.saveMeeting(this.meet).subscribe((data)=>{
    console.log("Response received");
    
  },error=>{
    console.log("Exception occured");
    this.msg="Bad Credentials, please enter valid data";
  });


  this._router.navigate(['/video'])


  };

  
  randomRoomId!: string;


  // generateRoomId(): void {
  //   this.feedService.generateRandomRoomId().subscribe((roomId) => {
  //     this.randomRoomId = roomId;
  //   });
  // }

}
