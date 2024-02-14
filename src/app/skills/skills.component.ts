import { Component, inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {


  service = inject(DataService)

  mainSkills = this.service.getMainSkills();
  otherSkills = this.service.getOtherSkills();;

}
