import { Routes } from '@angular/router';
import { NotFoundPageComponent } from './components/core/not-found-page/not-found-page.component';
import { MainPageComponent } from './components/content/main-page/main-page.component';
import { PortfolioPageComponent } from './components/content/portfolio-page/portfolio-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent, title: 'Dasha`s CV' },
  { path: 'portfolio', component: PortfolioPageComponent, title: 'Dasha`s Portfolio' },
  { path: '**', component: NotFoundPageComponent },
];
