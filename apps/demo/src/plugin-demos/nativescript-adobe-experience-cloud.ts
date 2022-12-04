import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptAdobeExperienceCloud } from '@demo/shared';
import {} from '@essent/nativescript-adobe-experience-cloud';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptAdobeExperienceCloud {}
