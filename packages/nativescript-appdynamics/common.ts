interface SessionFrame {
  updateName(name: string): void;
}

// you can find the relevant URLs at https://docs.appdynamics.com/paa/saas-domains-and-ip-ranges
// the app key can be created from the AppDynamics control panel when adding a new app.
// The app key should be of format "AD-AAA-BBB", AppDynamics will error if it's malformed.
export interface AppdynamicsConfiguration {
  appKey: string;
  collectorURL: string;
  screenshotURL: string;
}

export interface IAppdynamics {
  init(config: AppdynamicsConfiguration): void;
  startSessionFrame(name: string): SessionFrame;
  reportMetric(name: string, value: number): void;
  startTimer(name: string): void;
  stopTimer(name: string): void;
  setUserData(key: string, value: string): void;
  requestTracker(value: string): void;
}
