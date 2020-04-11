import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit, DoCheck {
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
