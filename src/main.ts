import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {setBasePath} from '@shoelace-style/shoelace';
import emailjs from '@emailjs/browser'

setBasePath("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.1/cdn/");

emailjs.init({
  publicKey: "YOUR_PUBLIC_KEY",
});

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
