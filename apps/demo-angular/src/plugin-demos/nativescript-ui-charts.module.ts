import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptUiChartsComponent } from './nativescript-ui-charts.component';
import { UIChartsViewModule } from '@essent/nativescript-ui-charts/angular';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptUiChartsComponent }]), UIChartsViewModule],
  declarations: [NativescriptUiChartsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptUiChartsModule {}
