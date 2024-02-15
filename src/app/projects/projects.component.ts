import { Component, inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  service = inject(DataService);

  projects = this.service.getProjects()

}
