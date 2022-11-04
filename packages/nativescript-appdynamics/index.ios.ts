import { AppdynamicsConfiguration, IAppdynamics } from './common';

// https://docs.appdynamics.com/appd/21.x/21.9/en/end-user-monitoring/mobile-real-user-monitoring/instrument-ios-applications/customize-the-ios-instrumentation

export class Appdynamics implements IAppdynamics {
  public init(config: AppdynamicsConfiguration) {
    const adeumConfig = ADEumAgentConfiguration.alloc().initWithAppKey(config.appKey);
    adeumConfig.collectorURL = config.collectorURL;
    adeumConfig.screenshotURL = config.screenshotURL;
    adeumConfig.loggingLevel = ADEumLoggingLevel.All;

    ADEumInstrumentation.initWithConfiguration(adeumConfig);
  }

  public startSessionFrame(name: string) {
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
