import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css'
})
export class IntroductionComponent {

  service : DataService = inject(DataService);

  walid = this.service.getPerson();
  

}
