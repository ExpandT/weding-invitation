import { Component } from '@angular/core';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
import {Header} from './components/header/header';
import {MainInvitation} from './components/main-invitation/main-invitation';
import {CouplePhoto} from './components/couple-photo/couple-photo';
import {EventDetails} from './components/event-details/event-details';
import {DrinkPreferences} from './components/drink-preferences/drink-preferences';
import {Timeline} from './components/timeline/timeline';
import {Footer} from './components/footer/footer';
import {GuestService} from './services/guest';

export interface Guest {
  id: string;
  name: string;
  partnerName?: string;
  drinkPreferences?: {
    cognac: boolean;
    vodka: boolean;
    wine: boolean;
    champagne: boolean;
  };
  attending?: boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, MainInvitation, CouplePhoto, EventDetails, DrinkPreferences, Timeline, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  guest: Guest | null = null;

  constructor(
    private route: ActivatedRoute,
    private guestService: GuestService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const guestId = params['guestId'];
      this.guestService.getGuestById(guestId).subscribe(guest => {
        this.guest = guest;
      });
    });
  }}
