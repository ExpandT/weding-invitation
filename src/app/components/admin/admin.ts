import {Component, inject, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {GuestService} from '../../services/guest';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-admin',
  imports: [
    FormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './admin.html',
  styleUrl: './admin.scss'
})
export class Admin implements OnInit {

  private guestService: GuestService = inject(GuestService);
  password: string = '';
  isAuthenticated: boolean = false;
  mockPassword: string = 'NazarAndAnnaWedding2025';

  guestData: any[] = [
  ];

   ngOnInit() {
     this.guestService.getGuests().subscribe( (res:any) => {
       this.guestData = res;
       console.log(res);
     });
   }
  get guestGroups(): any[] {
    return Object.values(this.guestData).filter(group => group !== null) as any[];
  }

  get allGuests(): any[] {
    return this.guestGroups.flatMap(group => group.guests || []);  }

  login() {
    if (this.password === this.mockPassword) {
      this.isAuthenticated = true;
    } else {
      alert('Невірний пароль!');
    }
  }

  getConfirmedGuests(): number {
    return this.allGuests.filter(g => g.attending).length;
  }

  getDeclinedGuests(): number {
    return this.allGuests.filter(g => !g.attending).length;
  }

  getStatusText(attending: boolean): string {
    return attending ? 'Так' : 'Ні';
  }

  getStatusClass(attending: boolean): string {
    return attending ? 'status-confirmed' : 'status-declined';
  }
}
