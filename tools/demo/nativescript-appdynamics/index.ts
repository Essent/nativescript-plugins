import { DemoSharedBase } from '../utils';
import { Appdynamics } from '@essent/nativescript-appdynamics';

export class DemoSharedNativescriptAppdynamics extends DemoSharedBase {
  testIt() {
    console.log('test nativescript-appdynamics!');

    const ad = new Appdynamics();
    ad.init({
      appKey: 'AD-AAA-BBB',
      collectorURL: 'https://example.com',
      screenshotURL: 'https://example.com',
    });

    // https://docs.appdynamics.com/appd/22.x/latest/en/end-user-monitoring/mobile-real-user-monitoring/overview-of-the-controller-ui-for-mobile-rum/mobile-sessions
    // this should be run when the application is started up, or maybe when the app is resumed.
    ad.startSessionFrame('Session frame');

    ad.reportMetric('test metric', 1337);
    ad.startTimer('test timer');
    ad.stopTimer('test timer');

    ad.setUserData('User id', 'Test user');

    ad.requestTracker('https://example.com');

    console.log('Done');
  }
}
