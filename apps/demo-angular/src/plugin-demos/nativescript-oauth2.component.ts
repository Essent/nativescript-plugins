import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptOauth2 } from '@demo/shared';
import {} from '@essent/nativescript-oauth2';

@Component({
  selector: 'demo-nativescript-oauth2',
  templateUrl: 'nativescript-oauth2.component.html',
})
export class NativescriptOauth2Component {
  demoShared: DemoSharedNativescriptOauth2;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptOauth2();
  }
}
