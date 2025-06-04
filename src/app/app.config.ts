import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getDatabase, provideDatabase} from '@angular/fire/database';
import {FIREBASE_OPTIONS} from '@angular/fire/compat';

const firebaseConfig = {
  apiKey: "AIzaSyC9uqfKbaTpsG_GCYbsoVJdHN6_t7gnXqA",
  authDomain: "wedding-guests-21498.firebaseapp.com",
  databaseURL: "https://wedding-guests-21498-default-rtdb.firebaseio.com",
  projectId: "wedding-guests-21498",
  storageBucket: "wedding-guests-21498.firebasestorage.app",
  messagingSenderId: "372173094285",
  appId: "1:372173094285:web:1cfdb0712b505b079451c4"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    { provide: FIREBASE_OPTIONS, useValue: firebaseConfig },

    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideDatabase(() => getDatabase()),
  ]
};
