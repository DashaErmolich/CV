import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  private CONTACT_ICON_NAME = 'Link';

  private SLIDER_FOLDER_NAME_SEPARATOR = '-';

  private QRCODE_ICONS_FOLDER = 'qrcode';

  constructor() { }

  getContactsKey(iconName: string): string {
    return `${iconName}${this.CONTACT_ICON_NAME}`;
  }

  getIconName(name: string): string {
    return name.split(this.CONTACT_ICON_NAME).join('');
  }

  getIconPath(iconName: string, isQr: boolean = false): string {
    if (!iconName) {
      return ''
    }
    const path = isQr ? `/${this.QRCODE_ICONS_FOLDER}` : '';
    return `assets/icons${path}/${iconName}.svg`;
  }

  getSlidesFolder(title: string): string {
    return title.toLocaleLowerCase().split(' ').join(this.SLIDER_FOLDER_NAME_SEPARATOR);
  }
}
