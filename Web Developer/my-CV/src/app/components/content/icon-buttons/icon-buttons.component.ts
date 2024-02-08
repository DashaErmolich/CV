import { Component, Input, OnInit } from '@angular/core';
import { Icon } from '../../../models/icon.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { IconsService } from '../../../services/icons.service';
import { IconGroupEnum, IconEnum } from '../../../enums/icons.enum';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { Data } from '../../../models/data.model';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-icon-buttons',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,

    MatButtonModule,
    MatTooltipModule,
    MatIconModule
  ],
  templateUrl: './icon-buttons.component.html',
  styleUrl: './icon-buttons.component.scss'
})
export class IconButtonsComponent implements OnInit {
  @Input() icons!: Icon[];

  private contacts!: Data['contacts'];

  constructor(
    private iconsService: IconsService,
    private dataService: DataService,
    private utilsService: UtilsService,
  ) {
  }

  ngOnInit() {
    this.contacts = this.dataService.data.contacts;

    this.icons.forEach((item) => {
      this.iconsService.getIcon(item.name, item.name);
    });
  }

  onClick(icon: Icon): void {
    if (icon.group === IconGroupEnum.Contacts) {
      const key = this.utilsService.getContactsKey(icon.name);
      const href = this.contacts[key as keyof typeof this.contacts];

      if (href) {
        window.open(href, '_blank');
      }
    }
  }
}
