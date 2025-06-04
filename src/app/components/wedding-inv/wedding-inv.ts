import { Component } from '@angular/core';
import {ColorPalette} from "../color-palette/color-palette";
import {CouplePhoto} from "../couple-photo/couple-photo";
import {DrinkPreferences} from "../drink-preferences/drink-preferences";
import {EventDetails} from "../event-details/event-details";
import {Footer} from "../footer/footer";
import {Header} from "../header/header";
import {MainInvitation} from "../main-invitation/main-invitation";
import {Timeline} from "../timeline/timeline";

@Component({
  selector: 'app-wedding-inv',
    imports: [
        ColorPalette,
        CouplePhoto,
        DrinkPreferences,
        EventDetails,
        Footer,
        Header,
        MainInvitation,
        Timeline
    ],
  templateUrl: './wedding-inv.html',
  styleUrl: './wedding-inv.scss'
})
export class WeddingInv {

}
