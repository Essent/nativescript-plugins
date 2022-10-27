import { AppdynamicsCommon } from './common';

declare interface SessionFrame {
  updateName(name: string): void;
}

export declare class Appdynamics extends AppdynamicsCommon {
  init(key: string, url: string): void;
  startSessionFrame(name: string): SessionFrame;
  reportMetric(name: string, value: string): void;
  startTimer(name: string): void;
  stopTimer(name: string): void;
  setUserData(key: string, value: string): void;
  requestTracker(value: string): void;
  instrumentationTest(): void;
}
