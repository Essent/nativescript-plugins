import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptUrbanAirship } from '@demo/shared';
import {} from '@essent/nativescript-urban-airship';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptUrbanAirship {}
