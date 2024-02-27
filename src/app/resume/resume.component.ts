import { Component, inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { ExperienceComponent } from '../experience/experience.component';
import { EducationComponent } from '../education/education.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [ExperienceComponent, EducationComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  service = inject(DataService)

  walid = this.service.getPerson();

  experiences = this.service.getExperiences();

  education = this.service.getEducation();

}
