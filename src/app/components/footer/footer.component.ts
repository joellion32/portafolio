import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, DoCheck {

  spanish: boolean =  true;
  english: boolean = false;
  
    constructor() {}
  
  ngDoCheck(): void {
    const data = JSON.parse(localStorage.getItem('language'));
    this.spanish = data.spanish;
    this.english = data.english;
  }
  
    ngOnInit() {
    }

}
