import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teammember',
  standalone: true,
  imports: [],
  templateUrl: './teammember.component.html',
  styleUrl: './teammember.component.css'
})
export class TeammemberComponent {
  
  constructor( private _router : Router){}

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
