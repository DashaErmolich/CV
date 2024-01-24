import { IconGroupsEnum, IconsEnum } from "../enums/icons.enum";

export interface Icon {
  name: IconsEnum,
  svgName: string,
  tooltip: string,
  group: IconGroupsEnum,
}
