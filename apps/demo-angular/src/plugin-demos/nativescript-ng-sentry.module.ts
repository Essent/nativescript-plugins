import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptNgSentryComponent } from './nativescript-ng-sentry.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptNgSentryComponent }])],
  declarations: [NativescriptNgSentryComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptNgSentryModule {}
