import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { QrCodeModule } from 'ng-qrcode';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatRippleModule,
    MatExpansionModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatRippleModule,
    MatExpansionModule,
  ]
})
export class MaterialModule { }
