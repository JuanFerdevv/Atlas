import { ApplicationConfig } from '@angular/core';
<<<<<<< HEAD
import { provideRouter, withHashLocation} from '@angular/router';
=======
import { provideRouter, withHashLocation } from '@angular/router';
>>>>>>> nueva-rama

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideServerRendering } from '@angular/platform-server';

export const appConfig: ApplicationConfig = {
<<<<<<< HEAD
  providers: [provideRouter(routes, withHashLocation()), provideServerRendering(), provideClientHydration(),provideHttpClient(withFetch())]
=======
  providers: [provideRouter(routes, withHashLocation()), provideClientHydration(),provideHttpClient(withFetch())]
>>>>>>> nueva-rama
};
