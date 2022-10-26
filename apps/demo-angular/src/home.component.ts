import { Component } from '@angular/core';

@Component({
	selector: 'demo-home',
	templateUrl: 'home.component.html',
})
export class HomeComponent {
	demos = [
	{
		name: 'nativescript-iadvize'
	},
	{
		name: 'nativescript-medallia'
	},
	{
		name: 'nativescript-urban-airship'
	}
];
}