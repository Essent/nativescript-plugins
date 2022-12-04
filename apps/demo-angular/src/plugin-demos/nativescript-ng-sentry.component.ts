import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptNgSentry } from '@demo/shared';
import {} from '@essent/nativescript-ng-sentry';

@Component({
  selector: 'demo-nativescript-ng-sentry',
  templateUrl: 'nativescript-ng-sentry.component.html',
})
export class NativescriptNgSentryComponent {
  demoShared: DemoSharedNativescriptNgSentry;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptNgSentry();
  }
}
