import { Component, OnInit } from '@angular/core';
import { Data } from '../../../models/data.model';
import { DataService } from '../../../services/data.service';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IconsService } from '../../../services/icons.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { CarouselComponent } from '../carousel/carousel.component';
import { ListComponent } from '../list/list.component';
import { PillsListComponent } from '../pills-list/pills-list.component';
import {MatRippleModule} from '@angular/material/core';
import { FilterPipe } from '../../../pipes/filter.pipe';
import { IconGroupsEnum, IconsEnum } from '../../../enums/icons.enum';
import { routes } from '../../../app.routes';
import { SectionsEnum } from '../../../enums/page-sections.enum';
import { HeaderComponent } from '../../core/header/header.component';
import { Icon } from '../../../models/icon.model';
import { IconButtonsComponent } from '../icon-buttons/icon-buttons.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {ClipboardModule} from '@angular/cdk/clipboard';

interface Contact {
  title: string | null,
  data: string | null,
  icon: Icon | null,
}


@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,

    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatRippleModule,
    MatExpansionModule,

    CarouselComponent,
    PillsListComponent,
    HeaderComponent,
    IconButtonsComponent,
    ClipboardModule,

    FilterPipe,
  ],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.scss'
})
export class PortfolioPageComponent implements OnInit {
  my!: Data;

  sections = SectionsEnum;

  icons!: Icon[];

  iconsGroup = IconGroupsEnum;

  iconsName = IconsEnum;

  panelOpenState = false;

  contacts!: any;

  constructor(
    private dataService: DataService,
    private iconsService: IconsService,
  ) {
  }

  ngOnInit(): void {
    this.my = this.dataService.data;
    this.icons = this.iconsService.icons;

    this.contacts = this.mapContactsData({...this.my.contacts});

    this.icons.forEach((item) => {
      this.iconsService.getIcon(item.name, item.svgName);
    });
  }

  public getSlidesFolder(title: string): string {
    return title.toLocaleLowerCase().split(' ').join('-');
  }

  private mapContactsData(data: Data['contacts']): Contact[] {
    const arr = Object.entries(data);
    console.log(arr.map((item) => {
      const itemTitle = item[0].split('Link').join('');
      return {
        title: itemTitle || null,
        data: item[1] || null,
        icon: this.icons.find((icon) => icon.name === itemTitle) || null,
      }
    }))
    return arr.map((item) => {
      const itemTitle = item[0].split('Link').join('');
      return {
        title: itemTitle || null,
        data: item[1] || null,
        icon: this.icons.find((icon) => icon.name === itemTitle) || null,
      }
    });
  }
}
