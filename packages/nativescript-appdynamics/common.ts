interface SessionFrame {
  updateName(name: string): void;
}

export enum LoggingLevel {
  Off = 0,
  Error = 1,
  Warn = 2,
  Info = 3,
  Debug = 4,
  Verbose = 5,
  All = 6,
}

// you can find the relevant URLs at https://docs.appdynamics.com/paa/saas-domains-and-ip-ranges
// the app key can be created from the AppDynamics control panel when adding a new app.
// The app key should be of format "AD-AAA-BBB", AppDynamics will error if it's malformed.
export interface AppdynamicsConfiguration {
  appKey: string;
  collectorURL: string; // should be the 'EUM Cloud' / 'EUM Collector' address
  screenshotURL: string; // should be the 'Screenshot Service' address
  loggingLevel?: LoggingLevel; // defaults to 'Error'
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
