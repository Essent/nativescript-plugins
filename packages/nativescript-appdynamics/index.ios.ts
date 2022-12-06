import { AppdynamicsConfiguration, IAppdynamics, LoggingLevel, IRequestTracker } from './common';

// https://docs.appdynamics.com/appd/21.x/21.9/en/end-user-monitoring/mobile-real-user-monitoring/instrument-ios-applications/customize-the-ios-instrumentation

export class Appdynamics implements IAppdynamics {
  public init(config: AppdynamicsConfiguration) {
    const adeumConfig = ADEumAgentConfiguration.alloc().initWithAppKey(config.appKey);
    adeumConfig.collectorURL = config.collectorURL;
    adeumConfig.screenshotURL = config.screenshotURL;
    adeumConfig.loggingLevel = (config.loggingLevel || LoggingLevel.Error) as unknown as ADEumLoggingLevel;
    adeumConfig.applicationName = config.applicationName;
    adeumConfig.jsAgentAjaxEnabled = config.jsAgentAjaxEnabled;
    adeumConfig.jsAgentEnabled = config.jsAgentInjectionEnabled;
    adeumConfig.enableAutoInstrument = config.autoInstrument;

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
    return new RequestTracker(value);
  }
}

export class RequestTracker implements IRequestTracker {
  private _tracker;

  constructor(url) {
    this._tracker = ADEumHTTPRequestTracker.requestTrackerWithURL(NSURL.URLWithString(url));
  }

  setError(error) {
    this._tracker.error = error;
  }

  reportDone(): void {
    this._tracker.reportDone();
  }

  setHeaders(headers) {
    const values: string[] = [];
    const headerKeys = headers.keys();
    headerKeys.forEach((value, index) => (values[index] = value));

    this._tracker.allHeaderFields = NSDictionary.dictionaryWithObjectsForKeys(values, headerKeys);
  }

  setStatusCode(statusCode) {
    this._tracker.statusCode = statusCode;
  }
}
