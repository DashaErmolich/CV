import { Component, OnInit } from '@angular/core';
import { SectionEnum } from '../../../enums/page-sections.enum';
import { CommonModule, ViewportScroller } from '@angular/common';
import { DataService } from '../../../services/data.service';
import { Data } from '../../../models/data.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  implements OnInit{
  my!: Data;

  sections = SectionEnum;

  constructor(
    private dataService: DataService,
    private viewportScroller: ViewportScroller,
  ) {}

  ngOnInit(): void {
    this.my = this.dataService.data;
  }

  public scrollTo(targetId: SectionEnum): void {
    const HEADER_HEIGHT = 55;
    this.viewportScroller.setOffset([0, HEADER_HEIGHT]);
    this.viewportScroller.scrollToAnchor(targetId);
  }
}
