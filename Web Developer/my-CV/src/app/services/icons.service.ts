import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconGroupsEnum, IconsEnum } from '../enums/icons.enum';
import { Icon } from '../models/icon.model';


const ICONS: Icon[] = [
  {
    name: IconsEnum.GitHub,
    svgName: 'github-icon-1-logo-svgrepo-com',
    tooltip: 'GitHub',
    group: IconGroupsEnum.Contacts,
  },
  {
    name: IconsEnum.LinkedIn,
    svgName: 'linkedin-icon-2-logo-svgrepo-com',
    tooltip: 'LinkedIn',
    group: IconGroupsEnum.Contacts,
  },
  {
    name: IconsEnum.HTML,
    svgName: 'HTML5_Badge',
    tooltip: 'HTML',
    group: IconGroupsEnum.TechStack,
  },
  {
    name: IconsEnum.CSS,
    svgName: 'CSS3_logo',
    tooltip: 'CSS',
    group: IconGroupsEnum.TechStack,
  },
  {
    name: IconsEnum.JS,
    svgName: 'javascript-logo-svgrepo-com',
    tooltip: 'JavaScript',
    group: IconGroupsEnum.TechStack,
  },
  {
    name: IconsEnum.CAP,
    svgName: 'cap',
    tooltip: 'SAP CAP',
    group: IconGroupsEnum.TechStack,
  },
  {
    name: IconsEnum.Angular,
    svgName: 'angular-icon-logo-svgrepo-com',
    tooltip: 'Angular',
    group: IconGroupsEnum.TechStack,
  },
  {
    name: IconsEnum.Sass,
    svgName: 'Sass_Logo_Color',
    tooltip: 'Sass',
    group: IconGroupsEnum.TechStack,
  },
  {
    name: IconsEnum.Typescript,
    svgName: 'typescript',
    tooltip: 'Typescript',
    group: IconGroupsEnum.TechStack,
  },
  {
    name: IconsEnum.SAPUI5,
    svgName: 'B',
    tooltip: 'SAPUI5',
    group: IconGroupsEnum.TechStack,
  },
  {
    name: IconsEnum.Discord,
    svgName: 'discord-v2-svgrepo-com',
    tooltip: 'Discord',
    group: IconGroupsEnum.Contacts,
  },
  {
    name: IconsEnum.Telegram,
    svgName: 'telegram-svgrepo-com',
    tooltip: 'Telegram',
    group: IconGroupsEnum.Contacts,
  },
  {
    name: IconsEnum.NodeJs,
    svgName: 'nodejs-icon-logo-svgrepo-com',
    tooltip: 'Node.js',
    group: IconGroupsEnum.TechStack,
  },
  {
    name: IconsEnum.Tel,
    svgName: 'phone',
    tooltip: 'Telephone',
    group: IconGroupsEnum.Contacts,
  },
  {
    name: IconsEnum.Email,
    svgName: 'mail',
    tooltip: 'Email',
    group: IconGroupsEnum.Contacts,
  },
  {
    name: IconsEnum.Portfolio,
    svgName: 'link',
    tooltip: 'Portfolio',
    group: IconGroupsEnum.Contacts,
  },
]

@Injectable({
  providedIn: 'root'
})
export class IconsService {
  public icons = ICONS;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) { }

  getIcon(iconName: string, svgName: string) {
    return this.matIconRegistry.addSvgIcon(
      iconName,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../../assets/icons/${svgName}.svg`)
    );
  }
}
