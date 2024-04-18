import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './app/header/header.component';
import { AcceuilComponent } from './app/acceuil/acceuil.component';
import { RegisterComponent } from './app/register/register.component';
import { routes } from './app/app.routes';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

const appRoutes = [
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'register', component: RegisterComponent },
  
  // Add more routes as needed
];

RouterModule.forRoot(appRoutes);