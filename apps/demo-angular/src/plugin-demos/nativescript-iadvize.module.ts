import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptIadvizeComponent } from './nativescript-iadvize.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptIadvizeComponent }])],
  declarations: [NativescriptIadvizeComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptIadvizeModule {}
