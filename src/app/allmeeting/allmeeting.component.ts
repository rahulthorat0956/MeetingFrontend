import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
import { Meeting } from '../models/meeting';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-allmeeting',
  standalone: true,
  imports: [HttpClientModule,NgFor],
  providers:[RegistrationService],
  templateUrl: './allmeeting.component.html',
  styleUrl: './allmeeting.component.css'
})
export class AllmeetingComponent implements OnInit {


  savedMeetings: Meeting[] = [];
msg=''

  constructor(private _router:Router,private _service:RegistrationService){}


ngOnInit(){
  this._service.getMeeting().subscribe(
    (data: Meeting[]) => {
      console.log('Meetings received:', data);
      this.savedMeetings = data;
    },
    error => {
      console.log('Exception occurred', error);
      this.msg = 'Error fetching meetings';
    }
  );


}
gotoVideo(){
this._router.navigate(['/video'])
}
}
