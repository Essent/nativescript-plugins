import { AppdynamicsConfiguration } from './common';

declare interface SessionFrame {
  updateName(name: string): void;
  end(): void;
}

export declare class Appdynamics {
  init(config: AppdynamicsConfiguration): void;
  startSessionFrame(name: string): SessionFrame;
  reportMetric(name: string, value: number): void;
  startTimer(name: string): void;
  stopTimer(name: string): void;
  setUserData(key: string, value: string): void;
  requestTracker(value: string): RequestTracker;
}
