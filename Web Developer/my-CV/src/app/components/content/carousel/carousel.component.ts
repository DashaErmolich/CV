import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {
  @Input() index!: number;

  @Input() slidesFolder!: string;

  carouselId!: string;

  carouselIndicatorsId!: string;

  SLIDES_COUNT = 5;

  buttonIds!: number[];

  ngOnInit(): void {
    this.carouselId = `carouselIndicatorsId_${this.index}`;
    this.carouselIndicatorsId = `#${this.carouselId}`;
    this.buttonIds = Array.from(Array(this.SLIDES_COUNT).keys());
  }
}
