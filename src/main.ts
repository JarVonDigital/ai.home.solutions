import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {setBasePath} from '@shoelace-style/shoelace';

setBasePath("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.1/cdn/")

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
