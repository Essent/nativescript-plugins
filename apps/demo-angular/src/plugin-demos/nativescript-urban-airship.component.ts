import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptUrbanAirship } from '@demo/shared';
import {} from '@essent/nativescript-urban-airship';

@Component({
  selector: 'demo-nativescript-urban-airship',
  templateUrl: 'nativescript-urban-airship.component.html',
})
export class NativescriptUrbanAirshipComponent {
  demoShared: DemoSharedNativescriptUrbanAirship;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptUrbanAirship();
  }
}
