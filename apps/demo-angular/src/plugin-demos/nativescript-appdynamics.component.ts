import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptAppdynamics } from '@demo/shared';
import {} from '@essent/nativescript-appdynamics';

@Component({
  selector: 'demo-nativescript-appdynamics',
  templateUrl: 'nativescript-appdynamics.component.html',
})
export class NativescriptAppdynamicsComponent {
  demoShared: DemoSharedNativescriptAppdynamics;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptAppdynamics();
  }
}
