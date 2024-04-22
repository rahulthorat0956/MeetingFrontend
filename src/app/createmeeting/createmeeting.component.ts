import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
import { Meeting } from '../models/meeting';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { FeedbackService } from '../services/feedback.service';


@Component({
  selector: 'app-createmeeting',
  standalone: true,
  imports: [FormsModule,NgIf,HttpClientModule ],
  providers: [RegistrationService,FeedbackService], 

  templateUrl: './createmeeting.component.html',
  styleUrl: './createmeeting.component.css'
})
export class CreatemeetingComponent {


meet=new Meeting();
msg=' ';
  randomRoomId!: string;

constructor(private _router:Router,private _service:RegistrationService , private feedService:FeedbackService){}

gotojoinstream(){

  this._service.saveMeeting(this.meet).subscribe((data)=>{
    console.log("Meeting created successful");
    this.generateRoomId();
    
  },error=>{
    console.log("Exception occured");
    this.msg="Bad Credentials, please enter valid data";
  });


  this._router.navigate(['/video'])


  };

 
  generateRoomId(): void {
    this.feedService.generateRandomRoomId().subscribe(
      (roomId) => {
        this.randomRoomId = roomId;
        // Redirect to the video page with the generated room ID
        this._router.navigate(['/video'], { queryParams: { roomId: this.randomRoomId } });
      },
      (error) => {
        console.log("Error generating room ID");
        this.msg = "Error generating room ID";
      }
    );

  
    }
}
