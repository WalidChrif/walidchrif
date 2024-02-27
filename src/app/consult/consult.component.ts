import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-consult',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './consult.component.html',
  styleUrl: './consult.component.css'
})
export class ConsultComponent {

  server = inject(ServerService);

  emailForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  })

  sendMail(emailForm: FormGroup) {
    this.server.sendMail(emailForm);
  }
}
