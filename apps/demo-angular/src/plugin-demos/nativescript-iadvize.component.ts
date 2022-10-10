import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptIadvize } from '@demo/shared';
import { } from '@essent/nativescript-iadvize';

@Component({
	selector: 'demo-nativescript-iadvize',
	templateUrl: 'nativescript-iadvize.component.html',
})
export class NativescriptIadvizeComponent {
  
  demoShared: DemoSharedNativescriptIadvize;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptIadvize();
  }

}