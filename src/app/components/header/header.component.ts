import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 spanish: boolean =  true;
 english: boolean = false;
  constructor() { 
    const data = JSON.parse(localStorage.getItem('language'));
    this.spanish = data.spanish;
    this.english = data.english;
  }

  ngOnInit() {}


  English() {
    this.english = true;
    this.spanish = false;

    const data = {
     english: this.english,
     spanish: this.spanish 
    }

    const language = JSON.stringify(data);

    localStorage.setItem('language', language);
  }

  Spanish() {
    this.english = false;
    this.spanish = true;

    const data = {
      english: this.english,
      spanish: this.spanish 
     }

    const language = JSON.stringify(data);

    localStorage.setItem('language', language);
  }

}
