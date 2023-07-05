import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptWebviewExt } from '@demo/shared';
import {} from '@essent/nativescript-webview-ext';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptWebviewExt {}
