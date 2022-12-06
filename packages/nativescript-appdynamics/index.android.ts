import { HttpHeaders } from '@angular/common/http';
import { Utils } from '@nativescript/core';
import { AppdynamicsConfiguration, IAppdynamics, LoggingLevel, IRequestTracker } from './common';
import lazy from '@nativescript/core/utils/lazy';

const Instrumentation = lazy(() => com.appdynamics.eumagent.runtime.Instrumentation);

// https://docs.appdynamics.com/appd/21.x/21.9/en/end-user-monitoring/mobile-real-user-monitoring/instrument-android-applications

export class Appdynamics implements IAppdynamics {
  public init(config: AppdynamicsConfiguration) {
    const instrumentationConfig = com.appdynamics.eumagent.runtime.AgentConfiguration.builder()
      .withAppKey(config.appKey)
      .withContext(Utils.android.getApplicationContext())
      .withCollectorURL(config.collectorURL)
      .withScreenshotURL(config.screenshotURL)
      .withLoggingLevel(config.loggingLevel || LoggingLevel.Error)
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

  setError(error) {
    this._tracker.withError(error);
  }

  reportDone(): void {
    this._tracker.reportDone();
  }

  setHeaders(httpHeaders: HttpHeaders) {
    const headerKeys = httpHeaders.keys();
    const headerFieldsMap: java.util.HashMap<string, java.util.List<string>> = new java.util.HashMap<string, java.util.List<string>>();

    headerKeys.forEach((key) => {
      const stringList: java.util.ArrayList<string> = new java.util.ArrayList<string>();
      httpHeaders.getAll(key).forEach((headerValue) => stringList.add(headerValue));
      headerFieldsMap.put(key, stringList);
    });

    this._tracker.withResponseHeaderFields(headerFieldsMap);
  }

  setStatusCode(statusCode) {
    this._tracker.withResponseCode(statusCode);
  }
}
