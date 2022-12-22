import { HttpErrorResponse } from '@angular/common/http';
import { AppdynamicsConfiguration, IAppdynamics, IRequestTracker, LoggingLevel } from './common';

// https://docs.appdynamics.com/appd/21.x/21.9/en/end-user-monitoring/mobile-real-user-monitoring/instrument-ios-applications/customize-the-ios-instrumentation

export class Appdynamics implements IAppdynamics {
  private logLevelMapper = {
    [LoggingLevel.None]: ADEumLoggingLevel.Off,
    [LoggingLevel.Info]: ADEumLoggingLevel.Info,
    [LoggingLevel.Verbose]: ADEumLoggingLevel.Verbose,
  };

  public init(config: AppdynamicsConfiguration) {
    const adeumConfig = ADEumAgentConfiguration.alloc().initWithAppKey(config.appKey);
    adeumConfig.collectorURL = config.collectorURL;
    adeumConfig.screenshotURL = config.screenshotURL;
    adeumConfig.loggingLevel = this.logLevelMapper[config.loggingLevel || LoggingLevel.None];
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

  setError(error: HttpErrorResponse, domain: string) {
    this._tracker.error = NSError.new().initWithDomainCodeUserInfo(domain, error.status, NSDictionary.dictionaryWithObjectForKey('Error reason', error.message));
  }

  setHeaders(headers: { [key: string]: string[] | null }) {
    const values: string[][] = [];
    const headerKeys = Object.keys(headers);
    headerKeys.forEach((value, index) => (values[index] = headers[value]));

    this._tracker.allHeaderFields = NSDictionary.dictionaryWithObjectsForKeys(values, headerKeys);
  }

  setStatusCode(statusCode) {
    this._tracker.statusCode = statusCode;
  }

  reportDone(): void {
    this._tracker.reportDone();
  }
}
