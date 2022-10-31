import { AppdynamicsCommon } from './common';

declare interface SessionFrame {
  updateName(name: string): void;
}

export declare class Appdynamics extends AppdynamicsCommon {
  // key should be of format "AD-AAA-BBB"
  init(key: string, url: string): void;
  startSessionFrame(name: string): SessionFrame;
  reportMetric(name: string, value: number): void;
  startTimer(name: string): void;
  stopTimer(name: string): void;
  setUserData(key: string, value: string): void;
  requestTracker(value: string): void;
}
