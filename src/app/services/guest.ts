import {EnvironmentInjector, inject, Injectable, runInInjectionContext} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Guest} from '../app';
import {AngularFireDatabase} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  private readonly _injector: EnvironmentInjector = inject(EnvironmentInjector);


   guests: any = [
    { id: 1, name: "Ілля, Олександра" },
    { id: 2, name: "Поліна, Діма, Ілюша" },
    { id: 3, name: "Ліза, Олег" },
    { id: 4, name: "Ліка" },
    { id: 5, name: "Крістіна, Андрій" },
    { id: 6, name: "Ліза" },
    { id: 7, name: "Ілля, твоя чарівна супутниця" },
    { id: 8, name: "Аня" },
    { id: 9, name: "Тоня" },
    { id: 10, name: "Наталія, Даніл, Афіна" },
    { id: 11, name: "Таня, Андрій" },
    { id: 12, name: "Аеліта, Тимур, Адель" },
    { id: 13, name: "Богдан, Маріна" },
    { id: 14, name: "Аня" },
    { id: 15, name: "Юля, Олександр" },
    { id: 16, name: "Олена, Віталій, ваші чарівні дітки" },
    { id: 17, name: "Наталія" },
    { id: 18, name: "Сергій, Марина" },
    { id: 19, name: "Мама Тамара, Папа Вася, Вова" },
    { id: 20, name: "Бабушка Галя" },
    { id: 21, name: "Бабушка Валя, Сергій, Микола, Саша" },
    { id: 22, name: "Тітка Аня, Марічка, чудова дівчинка Лілія" },
    { id: 23, name: "Марина, Вітя" },
    { id: 24, name: "Дядько Ігор, Ліана" },
    { id: 25, name: "Дядько Сергій, Тітка Іра, Микола" },
    { id: 26, name: "Дядько Саша, Тітка Люда" },
    { id: 27, name: "Дядько Вова, Тітка Таня" },
    { id: 28, name: "Ріта, Олександр, Міша" },
    { id: 29, name: "Тетяна, Ігор, Кіра" },
    { id: 30, name: "Жанна Павлівна, Руслан Вікторович" },
    { id: 31, name: "Дмитро, Юлія" },
    { id: 32, name: "Бабушка Таня, Дідусь Саша" },
    { id: 33, name: "Бабушка Алла, Дідусь Марік" },
    { id: 34, name: "Дядько Влад, ваша чарівна супутниця" },
    { id: 35, name: "Оксана, Мартін, Моніка" },
    { id: 36, name: "Тітка Олена" },
    { id: 37, name: "Інга" },
    { id: 38, name: "Тітка Люда" },
    { id: 39, name: "Мама Іра, Роман, Матвій" },
    { id: 40, name: "Бабушка Марія, Бабушка Зося" },
    { id: 41, name: "Бабушка Світлана, Дідусь Анатолій" },
    { id: 42, name: "Мирослава, Ігор, ваші чудові дітки" },
    { id: 43, name: "Дядя Вася, Марія" },
    { id: 44, name: "Люба, Міша" },
    { id: 45, name: "Маша, Саша" },
    { id: 46, name: "Анжела" },
    { id: 47, name: "Олена, Валерій" }
  ];

  constructor(private db: AngularFireDatabase) {}

  getGuestByIId(id: number): Observable<any> {
    return this.db.object(`guests/${id}`).valueChanges();
  }

  saveGuestData(id: number, data: any): Promise<void> {
    return runInInjectionContext(
      this._injector,
      (): any => this.db.object(`guests/${id}`).update(data),
    )
  }

  getGuests() {
    return runInInjectionContext(
      this._injector,
      (): any => this.db.object(`guests`).valueChanges(),
    )
  }

  getGuestById(guestId: number): Observable<any> {
    const guest = this.guests.find((g: any) => g.id === guestId);
    return of(guest || { id: guestId, name: 'Ілля та Олександра' });
  }

  updateDrinkPreference(guestId: string, preferences: any): Observable<any> {
    return of({ success: true });
  }
}
