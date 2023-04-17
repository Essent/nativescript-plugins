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

export declare class RequestTracker {
  setError(error: HttpErrorResponse, domain: string): void;
  setStatusCode(statusCode: number);
  setHeaders(headers: { [key: string]: string[] | null });
  setContentLength(contentLength: number);
  reportDone(): void;
}
