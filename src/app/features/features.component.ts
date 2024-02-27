import { Component, inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-features',
  standalone: true,
  imports: [NgFor],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {

  service = inject(DataService)

  services = this.service.getServices();

}
