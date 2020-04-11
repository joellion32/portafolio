import { Component, OnInit, DoCheck } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit, DoCheck {
  // para el idioma
  
  spanish: boolean =  true;
  english: boolean = false;
  

  // data del formulario
  data = {
  name: '',
  email: '',
  subject: '',
  message: '',  
  }
    constructor(private dataService: DataService) {}
  
  ngDoCheck(): void {
    const data = JSON.parse(localStorage.getItem('language'));
    this.spanish = data.spanish;
    this.english = data.english;
  }
  
    ngOnInit() {
    }

    contact(contacto: NgForm){
       if(contacto.invalid){
        return
       }
       this.dataService.enviarCorreo(this.data); 
       Swal.fire('Mensaje enviado correctamente');

       this.data = {
        name: '',
        email: '',
        subject: '',
        message: '',  
        }
    }


}
