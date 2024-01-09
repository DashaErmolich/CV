import { Component } from '@angular/core';
import { Data } from '../../../models/data.model';
import { DataService } from '../../../services/data.service';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list/list.component';
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon';
import { MatDivider, MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ CommonModule, ListComponent, MatListModule, MatIconModule, MatDividerModule ],
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
