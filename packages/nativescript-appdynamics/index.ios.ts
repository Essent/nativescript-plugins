import { IAppdynamics } from './common';

// https://docs.appdynamics.com/appd/21.x/21.9/en/end-user-monitoring/mobile-real-user-monitoring/instrument-ios-applications/customize-the-ios-instrumentation

export class Appdynamics implements IAppdynamics {
  public init(key, url) {
    const config = ADEumAgentConfiguration.alloc().initWithAppKey(key);
    config.collectorURL = url;
    config.loggingLevel = ADEumLoggingLevel.All;

    ADEumInstrumentation.initWithConfiguration(config);
    console.log('iOS Appdynamics instrumentation initiation started', config);
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
}
