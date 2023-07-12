import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptWebviewExt } from '@demo/shared';
import {} from '@essent/nativescript-webview-ext';

@Component({
  selector: 'demo-nativescript-webview-ext',
  templateUrl: 'nativescript-webview-ext.component.html',
})
export class NativescriptWebviewExtComponent {
  demoShared: DemoSharedNativescriptWebviewExt;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptWebviewExt();
  }
}
