import { Component, Input, OnInit } from '@angular/core';
import { Icon } from '../../../models/icon.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { IconsService } from '../../../services/icons.service';
import { IconGroupsEnum, IconsEnum } from '../../../enums/icons.enum';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { Data } from '../../../models/data.model';

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
  ) {
  }

  ngOnInit() {
    this.contacts = this.dataService.data.contacts;

    this.icons.forEach((item) => {
      this.iconsService.getIcon(item.name, item.svgName);
    });
  }

  onClick(icon: Icon): void {
    if (icon.group === IconGroupsEnum.Contacts) {
      const key = `${icon.name}Link`;
      const href = this.contacts[key as keyof typeof this.contacts];

      if (href) {
        window.open(href, '_blank');
      }
    }
  }
}
