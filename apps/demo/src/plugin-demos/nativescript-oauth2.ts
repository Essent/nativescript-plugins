import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptOauth2 } from '@demo/shared';
import {} from '@essent/nativescript-oauth2';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptOauth2 {}
