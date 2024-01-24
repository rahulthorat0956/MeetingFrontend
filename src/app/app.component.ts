import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from "./header/header.component";
import { NewheaderComponent } from "./newheader/newheader.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HomeComponent, HeaderComponent, NewheaderComponent]
})
export class AppComponent {
  
  constructor(private router: Router) {}

  // ngOnInit() {
  //   setTimeout(() => {
  //     this.router.navigate(['/login']);
  //   }, 5000);
  // }
  title = 'registration';
 
  allowedRoutes: string[] = ['/',  '/home','/login','/registration'];


  isHomePage(): boolean {
    return this.allowedRoutes.includes(this.router.url);
  }
 
  allowedRoutes1: string[] = ['/about','/loginsuccess','/service','/teammember','/contact'];

  isLoginSuccess():boolean{
    return this.allowedRoutes1.includes(this.router.url);
  }
}
