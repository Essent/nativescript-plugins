import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptMedallia } from '@demo/shared';
import { } from '@essent/nativescript-medallia';

@Component({
	selector: 'demo-nativescript-medallia',
	templateUrl: 'nativescript-medallia.component.html',
})
export class NativescriptMedalliaComponent {
  
  demoShared: DemoSharedNativescriptMedallia;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptMedallia();
  }

}