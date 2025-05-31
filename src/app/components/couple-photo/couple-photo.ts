import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-couple-photo',
  imports: [],
  templateUrl: './couple-photo.html',
  styleUrl: './couple-photo.scss'
})
export class CouplePhoto {
  @Input() variant = 'first';

}
