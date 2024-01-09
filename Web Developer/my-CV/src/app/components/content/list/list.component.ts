import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Education, Language, Project, Skills } from '../../../models/data.model';
import { MatDividerModule } from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, MatDividerModule, MatCardModule, MatListModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() title!: string;

  @Input() skills: Skills[] | null = null;

  @Input() languages: Language[] | null = null;

  @Input() educationItems: Education[] | null = null;

  @Input() courses: Education[] | null = null;

  @Input() projects: Project[] | null = null;
}
