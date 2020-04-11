import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-portafolio-detalle',
  templateUrl: './portafolio-detalle.component.html',
  styleUrls: ['./portafolio-detalle.component.css']
})
export class PortafolioDetalleComponent implements OnInit, DoCheck {
  portfolio: any;
  spanish: boolean =  true;
  english: boolean = false;

  constructor() { 
   this.portfolio = JSON.parse(localStorage.getItem('detalle'));    
  }

  ngDoCheck(): void {
    const data = JSON.parse(localStorage.getItem('language'));
    this.spanish = data.spanish;
    this.english = data.english;
  }

  ngOnInit() {
  }

  async modal(item: any){
    await console.log(item);
  const img =  document.querySelector('img');
  img.src = `../../../../assets/img/portfolio/${item}`;
  }

}
