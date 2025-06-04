import {Component, inject, Input, runInInjectionContext} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GuestService} from '../../services/guest';

@Component({
  selector: 'app-drink-preferences',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './drink-preferences.html',
  styleUrl: './drink-preferences.scss'
})
export class DrinkPreferences {
  @Input() guestId!: string;
  drinkForm: FormGroup;
  submitted = false;
  success = false;
  drinks = [
    {label: 'Коньяк', key: 'cognac'},
    {label: 'Горілка', key: 'vodka'},
    {label: 'Вино', key: 'wine'},
    {label: 'Шампанське', key: 'champagne'},
  ];

  guests: any[] = [
  ];

  constructor(
    private fb: FormBuilder,
    private guestService: GuestService,
  ) {

    this.drinkForm = this.fb.group({
      cognac: [false],
      vodka: [false],
      wine: [false],
      champagne: [false]
    });
  }

  ngOnInit() {
    const url = window.location.href;
    console.log(url);
    const id: any = url.split('/').pop();
    const numericId = +id;

    this.guestService.getGuestById(numericId).subscribe(guestFromApi => {
      this.guests = guestFromApi.name.split(',').map((name: any) => ({
        id: id, // Або використовуйте існуючий ID, якщо він є
        name: name.trim(),
        attending: null, // Спочатку не підтверджено
        drinks: {        // Дефолтні значення для напоїв
          cognac: false,
          vodka: false,
          wine: false,
          champagne: false
        }
      }));

      console.log(this.guests);
    });  }

  allGuestsResponded(): boolean {
    return this.guests.every(guest => guest.attending !== null);
  }

  allGuestsAttending(): boolean {
    return this.guests.every(guest => guest.attending === true);
  }

  onSubmit() {
    const url = window.location.href;
    const id: any = url.split('/').pop();
    const numericId = +id;

    this.submitted = true;
    if (this.drinkForm.valid && this.allGuestsResponded()) {
      const dataToSave = {
        drinks: this.drinkForm.value,
        guests: this.guests,
      };

      console.log(dataToSave);
      this.guestService.saveGuestData(numericId, dataToSave)
        .then(() => {
          this.success = true;
          setTimeout(() => this.success = false, 3000);
        })
        .catch((error: any) => console.error('Помилка збереження:', error));
    }
  }
}
