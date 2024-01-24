import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pills-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pills-list.component.html',
  styleUrl: './pills-list.component.scss'
})
export class PillsListComponent {
  @Input() items!: string[];
}
