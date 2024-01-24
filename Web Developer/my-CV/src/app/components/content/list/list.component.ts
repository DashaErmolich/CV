import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Education, Language, Project, Skills } from '../../../models/data.model';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, MatCardModule],
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
