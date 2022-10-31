import { Utils } from '@nativescript/core';
import { IAppdynamics } from './common';

const ad = com.appdynamics.eumagent.runtime;

const { AgentConfiguration, Instrumentation, HttpRequestTracker } = ad;

// https://docs.appdynamics.com/appd/21.x/21.9/en/end-user-monitoring/mobile-real-user-monitoring/instrument-android-applications

export class Appdynamics implements IAppdynamics {
  public init(key: string, url: string) {
    const config = AgentConfiguration.builder().withAppKey(key).withContext(Utils.android.getApplicationContext()).withCollectorURL(url).build();

    Instrumentation.start(config);
    console.log('Android Appdynamics instrumentation initiation started', config);
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
