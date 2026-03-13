import { Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Главная'
  },
  {
    path: 'menu',
    component: MenuPageComponent,
    title: 'Меню'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
