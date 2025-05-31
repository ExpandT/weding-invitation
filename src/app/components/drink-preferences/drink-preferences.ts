import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {GuestService} from '../../services/guest';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-drink-preferences',
  imports: [
    ReactiveFormsModule,
    NgIf
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
    {label: 'Водка', key: 'vodka'},
    {label: 'Вино', key: 'wine'},
    {label: 'Шампанське', key: 'champagne'},
  ]

  constructor(
    private fb: FormBuilder,
    private guestService: GuestService
  ) {
    this.drinkForm = this.fb.group({
      cognac: [false],
      vodka: [false],
      wine: [false],
      champagne: [false]
    });
  }

  ngOnInit() {
    // Завантажити попередні вподобання, якщо вони є
  }

  onSubmit() {
    this.submitted = true;
    if (this.drinkForm.valid) {
      this.guestService.updateDrinkPreference(
        this.guestId,
        this.drinkForm.value
      ).subscribe({
        next: () => {
          this.success = true;
          setTimeout(() => this.success = false, 3000);
        },
        error: () => {
          // Обробити помилку
        }
      });
    }
  }
}
