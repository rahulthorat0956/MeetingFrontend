import { CommonModule, Location } from '@angular/common';
import {  Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videocall',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './videocall.component.html',
  styleUrl: './videocall.component.css'
})
export class VideocallComponent  {

  
  constructor(private router: Router, private location: Location) {}


  
  shareLink() {
    // Get the current page URL
    const currentPageUrl = this.location.path();

    // Implement the logic to share the URL, for example, copying to clipboard or opening a sharing dialog
    // For simplicity, let's log the URL to the console
    console.log('Share this link: ' + currentPageUrl);
  }

}






