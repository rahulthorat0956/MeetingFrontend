import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor( private _router : Router){}


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
    this._router.navigate(['/contact'])
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
