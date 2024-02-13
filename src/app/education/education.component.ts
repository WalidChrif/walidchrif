import { Component, Input, inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-education',
  standalone: true,
  imports: [NgClass],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

  service = inject(DataService)

  walid = this.service.getPerson();

  education = this.service.getEducation();

  getClass() {
    return this.service.getClass();
  }


}
