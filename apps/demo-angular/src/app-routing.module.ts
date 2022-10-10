import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
	{ path: 'nativescript-iadvize', loadChildren: () => import('./plugin-demos/nativescript-iadvize.module').then(m => m.NativescriptIadvizeModule) },
	{ path: 'nativescript-medallia', loadChildren: () => import('./plugin-demos/nativescript-medallia.module').then(m => m.NativescriptMedalliaModule) }
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
