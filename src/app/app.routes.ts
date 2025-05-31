import { Routes } from '@angular/router';
import {App} from './app';

export const routes: Routes = [
  { path: 'invitation/:guestId', component: App },
  { path: '', redirectTo: '/invitation/1', pathMatch: 'full' }
];
