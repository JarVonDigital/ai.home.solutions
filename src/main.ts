import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import emailjs from '@emailjs/browser'

emailjs.init({
  publicKey: "YOUR_PUBLIC_KEY",
});

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
