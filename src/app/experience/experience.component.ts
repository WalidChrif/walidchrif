import { AfterContentChecked, Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { NgFor, NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent  {

  service = inject(DataService);

  walid = this.service.getPerson();

  experiences = this.service.getExperiences();

  getClass() {
    return this.service.getClass();
  }
}
