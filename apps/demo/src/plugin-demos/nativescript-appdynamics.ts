import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptAppdynamics } from '@demo/shared';
import {} from '@essent/nativescript-appdynamics';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptAppdynamics {}
