import { Component, OnInit, DoCheck,  } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, DoCheck {
technologies = [
{
  name: "javascript",
  image: "javascript.png", 
  description_es: "Utilizo javascript para el desarrollo de aplicaciones webs como aplicaciones moviles incluyendo librerias como jquery entre otros.",
  description_en: "I use JavaScript for the development of web applications such as mobile applications that include libraries such as jquery, among others."
},
{
  name: "HMTL5",
  image: "html.png",  
  description_es: "Utilizo HMTL5 para la maquetacion de las paginas y plataformas en cuales trabajo.",
  description_en: "I use HMTL5 for page and platform design in any job."
},
{
  name: "CSS3",
  image: "css.png",
  description_es: "Utilizo CSS3 para el diseño de las aplicaciones webs y aplicaciones hibridas en las cuales trabajo.",
  description_en: "I use CSS3 for the design of web applications and hybrid applications where I work."
},

{
  name: "ionic5",
  image: "ionic.png", 
  description_es: "Utilizo Ionic para el desarrollo de aplicaciones moviles hibridas multiplataforma para dispositivos android, ios y tambien para el desarrollo de aplicaciones PWA",
  description_en: "I use Ionic for the development of cross-platform hybrid mobile applications for Android, iOS devices and also for the development of PWA applications."
},

{
  name: "Angular",
  image: "angular.png",  
  description_es: "Utilizo Angular para el desarrollo de aplicaciones webs modernas (SPA)",
  description_en: "I use Angular for developing modern web applications (SPA)"
},

{
  name: "NODEJS",
  image: "nodejs.png", 
  description_es: "Utilizo Nodejs como lenguaje backend para el desarrollo de Api Rest utilizando librerias como Express y Socket.io",
  description_en: "I use Nodejs as a back-end language for Api Rest development using libraries like Express and Socket.io"
},
{
  name: "PHP",
  image: "php.png",
  description_es: "Utilizo PHP como lenguaje backend primario para el desarrollo de sistemas webs y paginas webs",
  description_en: "I use PHP as the main back-end language for developing web systems and web pages."
},
{
  name: "Laravel",
  image: "laravel.png", 
  description_es: "Utilizo Laravel como framework primario de PHP ya que me permite trabajar de forma rapida y fluida con su patron de diseño MVC",
  description_en: "I use Laravel as the main PHP framework as it allows me to work quickly and smoothly with its MVC design pattern"
},

{
  name: "MYSQL",
  image: "mysql.png", 
  description_es: "Utilizo MYSQL como gestor de Base de datos SQL",
  description_en: "I use MYSQL as a SQL Database manager"
},

{
  name: "MONGO DB",
  image: "mongo.png", 
  description_es: "Utilizo MONGO DB como gestor de Base de datos NOSQL",
  description_en: "I use MONGO DB as NOSQL Database manager"
},
{
  name: "GIT",
  image: "git.png", 
  description_es: "Utilizo GIT como sistema de control de versiones ya que me permite el trabajo en equipo y llevar un flujo mas rapido a desarrollar un proyecto",
  description_en: "I use GIT as a version control system since it allows me to work as a team and take a faster flow to develop a project."
},
{
  name: "LiNUX",
  image: "linux.png", 
  description_es: "Utilizo Linux porque es mi sistema operativo preferido",
  description_en: "I use Linux because it is my preferred operating system"
}
]

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
