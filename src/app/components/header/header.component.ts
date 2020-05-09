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
    this.SaveLocalStorage(this.english,  this.spanish);
    const data = JSON.parse(localStorage.getItem('language'));
    this.spanish = data.spanish;
    this.english = data.english;
  }

  ngOnInit() {}


  English() {
    this.english = true;
    this.spanish = false;

    this.SaveLocalStorage(this.english,  this.spanish);
  }

  Spanish() {
    this.english = false;
    this.spanish = true;

    this.SaveLocalStorage(this.english,  this.spanish);

  }


  SaveLocalStorage(english: boolean, spanish:boolean){
   
    const data = {
      english: this.english,
      spanish: this.spanish 
     }
 
     const language = JSON.stringify(data);
 
     localStorage.setItem('language', language);
  }

}
