import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Hospital } from './app/hospital/hospital';

bootstrapApplication(Hospital, appConfig)
  .catch((err) => console.error(err));
