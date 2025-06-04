import { Routes } from '@angular/router';
import {App} from './app';
import {Admin} from './components/admin/admin';
import {WeddingInv} from './components/wedding-inv/wedding-inv';

export const routes: Routes = [
  { path: 'invitation/:guestId', component: WeddingInv },
  { path: '', redirectTo: '/invitation/1', pathMatch: 'full' },
  { path: 'admin', component: Admin },
];
