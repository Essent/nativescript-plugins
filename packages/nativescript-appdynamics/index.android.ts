import { IAppdynamics } from './common';

const ad = com.appdynamics.eumagent.runtime;

const { AgentConfiguration, Instrumentation, HttpRequestTracker } = ad;

// https://docs.appdynamics.com/appd/21.x/21.9/en/end-user-monitoring/mobile-real-user-monitoring/instrument-android-applications

export class Appdynamics implements IAppdynamics {
  public init(key: string, url: string) {
    const config = AgentConfiguration.builder()
      .withAppKey(key)
      // .withContext(getApplicationContext())
      .withCollectorURL(url)
      .build();

    Instrumentation.start(config);
    console.log('Android Appdynamics instrumentation initiation started', config);
    this.startSessionFrame('Session frame');
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

  public instrumentationTest() {
    this.startSessionFrame('Session frame (android)');

    //when calling function with second parameter add the name to javascript function call
    this.reportMetric('testandroidmetric', 1);
    this.startTimer('testandroidtimer');
    this.stopTimer('testandroidtimer');
    var userId = 'Android User id';
    var actualUser = 'Test user';
    this.setUserData(userId, actualUser);

    this.requestTracker('http://example.com');

    console.log('Done');
  }
}
