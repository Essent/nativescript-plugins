import { DemoSharedBase } from '../utils';
import { NgSentry } from '@essent/nativescript-ng-sentry';

export class DemoSharedNativescriptNgSentry extends DemoSharedBase {
  constructor() {
    super();
    NgSentry.getInstance().saveBreadcrumb('test', 'state');
  }
  testIt() {
    console.log('test nativescript-ng-sentry!');
  }
}
