import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit, DoCheck {
// array porfolio
portfolio_ES = [
{
  title: 'Aplicacion Web',
  name: 'Mundo de Biografias',
  description: 'Proyecto personal construido para facilitar la busqueda de biografias de personajes de todo el mundo mas intuitivamente con una interfaz compatible para los usuarios y con un panel de control para poder monitoriar la aplicacion y admnistrar el contenido',
  tecnologies: ['Laravel', 'javascript' ,'HTML CSS', 'BOOSTRAP', 'AJAX'],
  images: ['1-1.png', '1-2.png', '1-3.png'],
  video: '',
  class: 'popular',
  demo: 'https://github.com/joellion32/Mundo_Biografias'
},
{
  title: 'Aplicacion Web',
  name: 'Sistema de pagos en Linea (ASDO)',
  description: 'Proyecto el cual realize para un monografico de unos estudiantes de la universidad unicaribe en el cual se pueden implementar pagos en linea desde la plataforma',
  tecnologies: ['Laravel', 'javascript', 'HTML CSS', 'BOOSTRAP', 'AJAX'],
  images: ['2-1.jpg', '2-2.jpg'],
  video: '',
  class: 'popular',
  demo: 'https://github.com/joellion32/sistema_pagos'
},
{
  title: 'Aplicacion Web',
  name: 'SpotyApp',
  description: 'Aplicacion desarrollada para poder obtener el titulo de master en Angular',
  tecnologies: ['Angular', 'HTML CSS', 'BOOSTRAP', 'javascript', 'typescript'],
  images: ['6-1.PNG', '6-2.PNG', '6-2.PNG'],
  video: 'spotyApp.mp4',
  class: 'popular',
  demo: 'https://github.com/joellion32/SpotyApp'
}, 
{
  title: 'Aplicacion Web',
  name: 'Aplicacion de Tickets',
  description: 'Aplicacion desarrollada como proyecto final para obtener el titulo del curso node.js de cero a experto',
  tecnologies: ['Nodejs','SocketIo','HTML CSS', 'BOOSTRAP'],
  images: ['5-1.PNG', '5-2.PNG', '5-3.PNG', '5-4.PNG'],
  video: 'tickets.mp4',
  class: 'popular',
  demo: 'No tiene'
}, 
{
  title: 'Aplicacion Movil',
  name: 'Tu Mundo Noticias',
  description: 'Aplicacion desarrollada para poder obtener el titulo del curso Desarrollo de Aplicaciones con Ionic5',
  tecnologies: ['Ionic5', 'HTML CSS', 'Typescript', 'Apache Cordova'],
  images: ['3-1.jpg', '3-2.jpg', '3-3.jpg'],
  video: '',
  class: 'latest',
  demo: 'https://appnoticias-b040e.web.app/tabs/tab1'
}, 

{
  title: 'Aplicacion Movil',
  name: 'DeseosApp',
  description: 'Aplicacion desarrollada para poder obtener el titulo del curso Desarrollo de Aplicaciones con Ionic5',
  tecnologies: ['Ionic5', 'HTML CSS', 'Typescript', 'Apache Cordova'],
  images: ['4-1.png', '4-2.png', '4-3.png', '4-4.png', '4-5.png', '4-6.png'],
  video: '',
  class: 'latest',
  demo: 'https://deseosapp-2c8f3.web.app/tabs/tab1'
}
]


// portafolio en ingles
portfolio_EN = [
  {
    title: 'Web Application',
    name: 'World of biographies',
    description: 'Personal project created to facilitate the search for biographies of characters from all over the world in a more intuitive way with a compatible interface for users and a control panel to monitor the application and manage content.',
    tecnologies: ['Laravel', 'javascript' ,'HTML CSS', 'BOOSTRAP', 'AJAX'],
    images: ['1-1.png', '1-2.png', '1-3.png'],
    video: '',
    class: 'popular',
    demo: 'https://github.com/joellion32/Mundo_Biografias'
  },
  {
    title: 'Web Application',
    name: 'Online payment system (ASDO)',
    description: 'Project I carried out for a group of students from the Unicaribe University in which online payments can be implemented from the platform',
    tecnologies: ['Laravel', 'javascript', 'HTML CSS', 'BOOSTRAP', 'AJAX'],
    images: ['2-1.jpg', '2-2.jpg'],
    video: '',
    class: 'popular',
    demo: 'https://github.com/joellion32/sistema_pagos'
  },
  {
    title: 'Web Application',
    name: 'SpotyApp',
    description: 'Application developed to obtain the masters degree in Angular',
    tecnologies: ['Angular', 'HTML CSS', 'BOOSTRAP', 'javascript', 'typescript'],
    images: ['6-1.PNG', '6-2.PNG', '6-2.PNG'],
    video: 'spotyApp.mp4',
    class: 'popular',
    demo: 'https://github.com/joellion32/SpotyApp'
  }, 
  {
    title: 'Web Application',
    name: 'Ticket Application',
    description: 'Application developed as a final project to obtain the node.js course title from zero to expert',
    tecnologies: ['Nodejs','SocketIo','HTML CSS', 'BOOSTRAP'],
    images: ['5-1.PNG', '5-2.PNG', '5-3.PNG', '5-4.PNG'],
    video: 'tickets.mp4',
    class: 'popular',
    demo: 'Does not have'
  }, 
  {
    title: 'Mobile Application',
    name: 'Your World News',
    description: 'Application developed to obtain the title of the Application Development course with Ionic5',
    tecnologies: ['Ionic5', 'HTML CSS', 'Typescript', 'Apache Cordova'],
    images: ['3-1.jpg', '3-2.jpg', '3-3.jpg'],
    video: '',
    class: 'latest',
    demo: 'https://appnoticias-b040e.web.app/tabs/tab1'
  }, 
  
  {
    title: 'Mobile Application',
    name: 'DeseosApp',
    description: 'Aplicación desarrollada para obtener el título del curso de Desarrollo de aplicaciones con Ionic5',
    tecnologies: ['Ionic5', 'HTML CSS', 'Typescript', 'Apache Cordova'],
    images: ['4-1.png', '4-2.png', '4-3.png', '4-4.png', '4-5.png', '4-6.png'],
    video: '',
    class: 'latest',
    demo: 'https://deseosapp-2c8f3.web.app/tabs/tab1'
  }
  ]


  spanish: boolean =  true;
  english: boolean = false;
  
    constructor(private router: Router) {
     
    }
  
  ngDoCheck(): void {
    const data = JSON.parse(localStorage.getItem('language'));
    this.spanish = data.spanish;
    this.english = data.english;
  }
  
    ngOnInit() {
      
    }


    detailsES(param){
      const details = this.portfolio_ES[param];
      const data = JSON.stringify(details);
      localStorage.setItem('detalle', data);
      this.router.navigateByUrl('/detalle');
    }


    detailsEN(param){
      const details = this.portfolio_EN[param];
      const data = JSON.stringify(details);
      localStorage.setItem('detalle', data);
      this.router.navigateByUrl('/detalle');
    }



  

}
