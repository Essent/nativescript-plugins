import { DemoSharedBase } from '../utils';
import { AdobeAnalytics } from '@essent/nativescript-adobe-experience-cloud';

export class DemoSharedNativescriptAdobeExperienceCloud extends DemoSharedBase {
  constructor() {
    super();
    AdobeAnalytics.getInstance()
      .getExperienceCloudId()
      .then((param) => console.log('ECID: ' + param));
  }
  action(): void {
    let data: { [id: string]: any } = {
      ActionData: 'ThisIsActionData',
    };
    AdobeAnalytics.getInstance().trackAction('SomeAction', data);
  }

  nextState(): void {
    let data: { [id: string]: any } = {
      StateData: 'ThisIsDataFromTheFirstState',
    };
    AdobeAnalytics.getInstance().trackState('SecondState', data);
  }

  optIn(): void {
    AdobeAnalytics.getInstance().optIn();
  }

  optOut(): void {
    AdobeAnalytics.getInstance().optOut();
  }
}
