import { IAppdynamics } from './common';

// https://docs.appdynamics.com/appd/21.x/21.9/en/end-user-monitoring/mobile-real-user-monitoring/instrument-ios-applications/customize-the-ios-instrumentation

export class Appdynamics implements IAppdynamics {
  public init(key, url) {
    const config = ADEumAgentConfiguration.alloc().initWithAppKey(key);
    config.collectorURL = url;
    config.loggingLevel = ADEumLoggingLevel.All;
    console.log('Appdynamics instrumentation initiation started', config);

    ADEumInstrumentation.initWithConfiguration(config);
    this.startSessionFrame('Session frame');
  }

  public startSessionFrame(name: string): ADEumSessionFrame {
    return ADEumInstrumentation.startSessionFrame(name);
  }

  public reportMetric(name: string, value: number) {
    ADEumInstrumentation.reportMetricWithNameValue(name, value);
  }

  public startTimer(name: string) {
    ADEumInstrumentation.startTimerWithName(name);
  }

  public stopTimer(name: string) {
    ADEumInstrumentation.stopTimerWithName(name);
  }

  public setUserData(key: string, value: string) {
    ADEumInstrumentation.setUserDataValue(key, value);
  }

  public requestTracker(value: string) {
    return ADEumHTTPRequestTracker.requestTrackerWithURL(NSURL.URLWithString(value));
  }

  public instrumentationTest() {
    this.startSessionFrame('Session frame (ios)');
    //when calling function with second parameter add the name to javascript function call
    this.reportMetric('testiosmetric', 1);
    this.startTimer('testiostimer');
    this.stopTimer('testiostimer');
    const userId = 'IOS User id';
    const actualUser = 'Test user';
    this.setUserData(userId, actualUser);

    this.requestTracker('http://example.com');

    console.log('Done');
  }
}
