import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptMedallia } from '@demo/shared';
import { } from '@essent/nativescript-medallia';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptMedallia {
	
}
