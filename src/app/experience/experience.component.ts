import { Component, inject } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  service = inject(DataService)

  walid = this.service.getPerson();

  experiences = this.service.getExperiences();

}
