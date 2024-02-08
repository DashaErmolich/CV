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
import { CarouselComponent } from '../../content/carousel/carousel.component';
import { PillsListComponent } from '../../content/pills-list/pills-list.component';
import { MatRippleModule } from '@angular/material/core';
import { FilterPipe } from '../../../pipes/filter.pipe';
import { IconGroupEnum, IconEnum } from '../../../enums/icons.enum';
import { SectionEnum } from '../../../enums/page-sections.enum';
import { HeaderComponent } from '../../core/header/header.component';
import { Icon } from '../../../models/icon.model';
import { IconButtonsComponent } from '../../content/icon-buttons/icon-buttons.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { QrCodeModule } from 'ng-qrcode';
import { UtilsService } from '../../../services/utils.service';
import { MaterialModule } from '../../../modules/material/material.module';

interface Contact {
  title: string,
  data: string,
  icon: Icon,
}


@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,

    MaterialModule,

    QrCodeModule,

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

  sections = SectionEnum;

  icons!: Icon[];

  iconsGroup = IconGroupEnum;

  iconsName = IconEnum;

  contacts!: Contact[];

  constructor(
    private dataService: DataService,
    private iconsService: IconsService,
    private utilsService: UtilsService,
  ) {
  }

  ngOnInit(): void {
    this.my = this.dataService.data;
    this.icons = this.iconsService.icons;
    this.contacts = this.mapContactsData({...this.my.contacts});

    this.icons.forEach((item) => {
      this.iconsService.getIcon(item.name, item.name);
    });
  }

  public getSlidesFolder(title: string): string {
    return this.utilsService.getSlidesFolder(title);
  }

  private mapContactsData(data: Data['contacts']): Contact[] {
    const arr = Object.entries(data);
    return arr.map((item) => {
      const itemTitle = item[0].split('Link').join('');
      return {
        title: itemTitle || '',
        data: item[1] || '',
        icon: this.icons.find((icon) => icon.name === itemTitle) || this.iconsService.defaultIcon,
      }
    });
  }

  getIconPath(iconName: IconEnum, isQr: boolean = false): string {
    debugger
    return this.utilsService.getIconPath(iconName, isQr);
  }
}
