import { Utils } from '@nativescript/core';
import { AppdynamicsConfiguration, IAppdynamics, LoggingLevel } from './common';

const { AgentConfiguration, Instrumentation } = com.appdynamics.eumagent.runtime;

// https://docs.appdynamics.com/appd/21.x/21.9/en/end-user-monitoring/mobile-real-user-monitoring/instrument-android-applications

export class Appdynamics implements IAppdynamics {
  public init(config: AppdynamicsConfiguration) {
    const instrumentationConfig = AgentConfiguration.builder()
      .withAppKey(config.appKey)
      .withContext(Utils.android.getApplicationContext())
      .withCollectorURL(config.collectorURL)
      .withScreenshotURL(config.screenshotURL)
      .withLoggingLevel(config.loggingLevel || LoggingLevel.Error)
      .build();

    Instrumentation.start(instrumentationConfig);
  }

  public startSessionFrame(name: string) {
    return Instrumentation.startSessionFrame(name);
  }

  public reportMetric(name: string, value: number) {
    Instrumentation.reportMetric(name, value);
  }

  public startTimer(name: string) {
    Instrumentation.startTimer(name);
  }

  public stopTimer(name: string) {
    Instrumentation.stopTimer(name);
  }

  public setUserData(key: string, value: string) {
    Instrumentation.setUserData(key, value);
  }

  public requestTracker(url: string) {
    return Instrumentation.beginHttpRequest(new java.net.URL(url));
  }
}
