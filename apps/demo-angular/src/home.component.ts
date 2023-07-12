import { Component } from '@angular/core';

@Component({
  selector: 'demo-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {
  demos = [
    {
      name: 'nativescript-adobe-experience-cloud',
    },
    {
      name: 'nativescript-appdynamics',
    },
    {
      name: 'nativescript-iadvize',
    },
    {
      name: 'nativescript-medallia',
    },
    {
      name: 'nativescript-ng-sentry',
    },
    {
      name: 'nativescript-urban-airship',
    },
    {
      name: 'nativescript-webview-ext',
    },
  ];
}
