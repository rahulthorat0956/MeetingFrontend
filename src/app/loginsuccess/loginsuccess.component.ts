import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginsuccess',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './loginsuccess.component.html',
  styleUrl: './loginsuccess.component.css'
})
export class LoginsuccessComponent {
  constructor(private _router : Router){}

gotoregistration(){
  this._router.navigate(['/registration'])

}
gotologinsuccess(){
  this._router.navigate(['/loginsuccess'])

}

gotocreatemeeting(){
  this._router.navigate(['/create'])
}

gotoAllMeeting(){
  this._router.navigate(['/allmeeting'])
}

}

