import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }



  enviarCorreo(params){
   const data = {
      name: params.name,
      email: params.email,
      subject: params.subject,
      message: params.message
    }

    this.http.post('https://portafoliojoel.herokuapp.com/mail', data).subscribe(resp => {
      console.log(resp);
    }, (err: any) => {
      console.log(err);
    })
  }
}
