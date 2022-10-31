import { DemoSharedBase } from '../utils';
import { Appdynamics } from '@essent/nativescript-appdynamics';

export class DemoSharedNativescriptAppdynamics extends DemoSharedBase {
  testIt() {
    console.log('test nativescript-appdynamics!');

    console.log('walla');
    const ad = new Appdynamics();
    ad.init('AD-AAA-BBB', 'https://example.com');

    ad.reportMetric('test metric', 1337);
    ad.startTimer('test timer');
    ad.stopTimer('test timer');

    ad.setUserData('User id', 'Test user');

    ad.requestTracker('https://example.com');

    console.log('Done');
  }
}
