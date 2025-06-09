import { Component } from '@angular/core';

@Component({
  selector: 'app-color-palette',
  imports: [],
  templateUrl: './color-palette.html',
  styleUrl: './color-palette.scss'
})
export class ColorPalette {
  weddingColors = [
    { name: 'Білий', code: '#FFFFFF' },
    { name: 'Світло-пшеничний', code: '#D7CBA1' }, // або "Світло-пшеничний"
    { name: 'Темний біж', code: '#BDA46E' }, // або "Темний біж"
    { name: 'Лісовий', code: '#4F6E4A' }, // або "Лісовий"
    { name: 'Темно-зелений', code: '#3E634A' }, // або "Темно-зелений"
    { name: 'Сірувато-чорний', code: '#2C2E2A' } // або "Сірувато-чорний"
  ];
}
