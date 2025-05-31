import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-main-invitation',
  imports: [],
  templateUrl: './main-invitation.html',
  styleUrl: './main-invitation.scss'
})
export class MainInvitation {
  @Input() guestName = '';

}
