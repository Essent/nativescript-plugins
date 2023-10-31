import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptMedalliaComponent } from './nativescript-medallia.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptMedalliaComponent }])],
  declarations: [NativescriptMedalliaComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptMedalliaModule {}
