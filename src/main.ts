import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [],
  template: `
  <p>
  app works!
  </p>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
