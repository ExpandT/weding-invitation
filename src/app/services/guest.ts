import {inject, Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Guest} from '../app';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  private readonly http = inject(HttpClient)
  private mockGuests: Guest[] = [
    { id: '1', name: 'Єгор', partnerName: 'Наталі' },
    { id: '2', name: 'Іван', partnerName: 'Ольга' }
  ];


  getGuestById(guestId: string): Observable<Guest> {
    const guest = this.mockGuests.find(g => g.id === guestId);
    return of(guest || { id: guestId, name: 'Ілля та Олександра' });
  }

  updateDrinkPreference(guestId: string, preferences: any): Observable<any> {
    return of({ success: true });
  }
}
