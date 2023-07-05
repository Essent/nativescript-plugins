import { NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { WebViewExt } from '@essent/nativescript-webview-ext';

@NgModule()
export class WebViewExtModule {}

registerElement('WebViewExt', () => WebViewExt);
