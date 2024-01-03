import { Component } from '@angular/core';
import { Data } from '../../../../models/data.model';
import { DataService } from '../../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  my!: Data;

  constructor(
    private dataService: DataService,
  ) {
    this.my = this.dataService.data;
  }
}
