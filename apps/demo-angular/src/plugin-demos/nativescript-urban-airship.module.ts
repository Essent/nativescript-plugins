import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptUrbanAirshipComponent } from './nativescript-urban-airship.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptUrbanAirshipComponent }])],
  declarations: [NativescriptUrbanAirshipComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptUrbanAirshipModule {}
