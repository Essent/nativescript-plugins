import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptIadvize } from '@demo/shared';
import {} from '@essent/nativescript-iadvize';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptIadvize {}
