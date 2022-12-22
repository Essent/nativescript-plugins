import { HttpErrorResponse } from '@angular/common/http';
import { Utils } from '@nativescript/core';
import lazy from '@nativescript/core/utils/lazy';
import { AppdynamicsConfiguration, IAppdynamics, IRequestTracker, LoggingLevel } from './common';

const Instrumentation = lazy(() => com.appdynamics.eumagent.runtime.Instrumentation);

// https://docs.appdynamics.com/appd/21.x/21.9/en/end-user-monitoring/mobile-real-user-monitoring/instrument-android-applications

export class Appdynamics implements IAppdynamics {
  private logLevelMapper = {
    [LoggingLevel.None]: com.appdynamics.eumagent.runtime.Instrumentation.LOGGING_LEVEL_NONE,
    [LoggingLevel.Info]: com.appdynamics.eumagent.runtime.Instrumentation.LOGGING_LEVEL_INFO,
    [LoggingLevel.Verbose]: com.appdynamics.eumagent.runtime.Instrumentation.LOGGING_LEVEL_VERBOSE,
  };

  public init(config: AppdynamicsConfiguration) {
    const instrumentationConfig = com.appdynamics.eumagent.runtime.AgentConfiguration.builder()
      .withAppKey(config.appKey)
      .withContext(Utils.android.getApplicationContext())
      .withCollectorURL(config.collectorURL)
      .withScreenshotURL(config.screenshotURL)
      .withLoggingLevel(this.logLevelMapper[config.loggingLevel || LoggingLevel.None])
      .withApplicationName(config.applicationName)
      .withJSAgentAjaxEnabled(config.jsAgentAjaxEnabled)
      .withJSAgentInjectionEnabled(config.jsAgentInjectionEnabled)
      .withAutoInstrument(config.autoInstrument)
      .build();

    Instrumentation().start(instrumentationConfig);
  }

  public startSessionFrame(name: string) {
    return Instrumentation().startSessionFrame(name);
  }

  public reportMetric(name: string, value: number) {
    Instrumentation().reportMetric(name, value);
  }

  public startTimer(name: string) {
    Instrumentation().startTimer(name);
  }

  public stopTimer(name: string) {
    Instrumentation().stopTimer(name);
  }

  public setUserData(key: string, value: string) {
    Instrumentation().setUserData(key, value);
  }

  public requestTracker(url: string) {
    return new RequestTracker(url);
  }
}

export class RequestTracker implements IRequestTracker {
  private _tracker;

  constructor(url) {
    this._tracker = Instrumentation().beginHttpRequest(new java.net.URL(url));
  }

  setError(error: HttpErrorResponse, domain: string) {
    this._tracker = this._tracker.withError(error.message);
  }

  setHeaders(httpHeaders: { [key: string]: string[] | null }) {
    const headerKeys = Object.keys(httpHeaders);
    const values = new java.util.HashMap<string, java.util.List<string>>();

    headerKeys.forEach((key) => {
      const stringList = new java.util.ArrayList<string>();
      httpHeaders[key].forEach((headerValue) => stringList.add(headerValue));
      values.put(key, stringList);
    });

    this._tracker = this._tracker.withResponseHeaderFields(values);
  }

  setStatusCode(statusCode) {
    this._tracker = this._tracker.withResponseCode(statusCode);
  }

  reportDone(): void {
    this._tracker.reportDone();
  }
}
