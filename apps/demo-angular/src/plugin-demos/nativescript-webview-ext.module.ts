import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptWebviewExtComponent } from './nativescript-webview-ext.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptWebviewExtComponent }])],
  declarations: [NativescriptWebviewExtComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptWebviewExtModule {}
