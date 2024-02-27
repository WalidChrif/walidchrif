import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  sendMail(emailForm: FormGroup) {
    if (emailForm.valid) {
      const email = emailForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/xrgnkpwq',
        { name: email.name, email: email.email,  subject : email.subject, message: email.message },
        { 'headers': headers }).subscribe(
          // (response: any) => {console.log(response);}
        );
    }
  }
}
