import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GuestService} from '../../services/guest';

@Component({
  selector: 'app-main-invitation',
  imports: [],
  templateUrl: './main-invitation.html',
  styleUrl: './main-invitation.scss'
})
export class MainInvitation implements OnInit {
  @Input() guestName = '';

  constructor(
    private route: ActivatedRoute,
    private guestService: GuestService
  ) {}

  ngOnInit() {

    const url = window.location.href;
    console.log(url);
    const id: any = url.split('/').pop();
    const numericId = +id;

    this.guestService.getGuestById(numericId).subscribe(guest => {
      this.guestName = guest.name;
    });
  }

}
