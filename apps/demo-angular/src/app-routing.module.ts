import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'nativescript-adobe-experience-cloud', loadChildren: () => import('./plugin-demos/nativescript-adobe-experience-cloud.module').then((m) => m.NativescriptAdobeExperienceCloudModule) },
  { path: 'nativescript-appdynamics', loadChildren: () => import('./plugin-demos/nativescript-appdynamics.module').then((m) => m.NativescriptAppdynamicsModule) },
  { path: 'nativescript-iadvize', loadChildren: () => import('./plugin-demos/nativescript-iadvize.module').then((m) => m.NativescriptIadvizeModule) },
  { path: 'nativescript-medallia', loadChildren: () => import('./plugin-demos/nativescript-medallia.module').then((m) => m.NativescriptMedalliaModule) },
  { path: 'nativescript-ng-sentry', loadChildren: () => import('./plugin-demos/nativescript-ng-sentry.module').then((m) => m.NativescriptNgSentryModule) },
  { path: 'nativescript-urban-airship', loadChildren: () => import('./plugin-demos/nativescript-urban-airship.module').then((m) => m.NativescriptUrbanAirshipModule) },
  { path: 'nativescript-webview-ext', loadChildren: () => import('./plugin-demos/nativescript-webview-ext.module').then((m) => m.NativescriptWebviewExtModule) },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
