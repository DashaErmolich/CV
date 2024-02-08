import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconGroupEnum, IconEnum } from '../enums/icons.enum';
import { Icon } from '../models/icon.model';
import { UtilsService } from './utils.service';


const ICONS: Icon[] = [
  {
    name: IconEnum.GitHub,
    tooltip: 'GitHub',
    group: IconGroupEnum.Contacts,
  },
  {
    name: IconEnum.LinkedIn,
    tooltip: 'LinkedIn',
    group: IconGroupEnum.Contacts,
  },
  {
    name: IconEnum.HTML,
    tooltip: 'HTML',
    group: IconGroupEnum.TechStack,
  },
  {
    name: IconEnum.CSS,
    tooltip: 'CSS',
    group: IconGroupEnum.TechStack,
  },
  {
    name: IconEnum.JS,
    tooltip: 'JavaScript',
    group: IconGroupEnum.TechStack,
  },
  {
    name: IconEnum.CAP,
    tooltip: 'SAP CAP',
    group: IconGroupEnum.TechStack,
  },
  {
    name: IconEnum.Angular,
    tooltip: 'Angular',
    group: IconGroupEnum.TechStack,
  },
  {
    name: IconEnum.Sass,
    tooltip: 'Sass',
    group: IconGroupEnum.TechStack,
  },
  {
    name: IconEnum.Typescript,
    tooltip: 'Typescript',
    group: IconGroupEnum.TechStack,
  },
  {
    name: IconEnum.SAPUI5,
    tooltip: 'SAPUI5',
    group: IconGroupEnum.TechStack,
  },
  {
    name: IconEnum.Discord,
    tooltip: 'Discord',
    group: IconGroupEnum.Contacts,
  },
  {
    name: IconEnum.Telegram,
    tooltip: 'Telegram',
    group: IconGroupEnum.Contacts,
  },
  {
    name: IconEnum.NodeJs,
    tooltip: 'Node.js',
    group: IconGroupEnum.TechStack,
  },
  {
    name: IconEnum.Tel,
    tooltip: 'Telephone',
    group: IconGroupEnum.Contacts,
  },
  {
    name: IconEnum.Email,
    tooltip: 'Email',
    group: IconGroupEnum.Contacts,
  },
  {
    name: IconEnum.Portfolio,
    tooltip: 'Portfolio',
    group: IconGroupEnum.Contacts,
  }
]

@Injectable({
  providedIn: 'root'
})
export class IconsService {
  public icons: Icon[] = ICONS;

  public defaultIcon: Icon = {
    name: IconEnum.Default,
    tooltip: 'Default',
    group: IconGroupEnum.Contacts,
  }

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private utilsService: UtilsService,
  ) { }

  getIcon(iconName: string, svgName: string) {
    return this.matIconRegistry.addSvgIcon(
      iconName,
      this.domSanitizer.bypassSecurityTrustResourceUrl(this.utilsService.getIconPath(svgName)),
    );
  }
}
