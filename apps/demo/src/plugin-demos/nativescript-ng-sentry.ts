import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptNgSentry } from '@demo/shared';
import { NgSentry } from '@essent/nativescript-ng-sentry';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptNgSentry {}
