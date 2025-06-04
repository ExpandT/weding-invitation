import { Component } from '@angular/core';

@Component({
  selector: 'app-color-palette',
  imports: [],
  templateUrl: './color-palette.html',
  styleUrl: './color-palette.scss'
})
export class ColorPalette {
  weddingColors = [
    { name: 'Ніжний беж', code: '#F5E8DF' },
    { name: 'Пудровий рожевий', code: '#E8C4C4' },
    { name: 'Сливовий', code: '#6B4E71' },
    { name: 'Лавандовий', code: '#B2A8D1' },
    { name: 'Мятний', code: '#D1E3DD' },
    { name: 'Золотий акцент', code: '#D4AF37' }
  ];
}
