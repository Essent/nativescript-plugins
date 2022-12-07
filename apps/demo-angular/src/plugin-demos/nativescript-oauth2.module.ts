import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptOauth2Component } from './nativescript-oauth2.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptOauth2Component }])],
  declarations: [NativescriptOauth2Component],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptOauth2Module {}
