import { HttpErrorResponse } from '@angular/common/http';

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
  /**
   * Sets the application key used by the SDK.  This is a required property.
   */
  /**
   * Sets the application key used by the SDK.  This is a required property.
   */
  appKey: string;

  /**
   * Sets the name of this mobile application.  If not set, the application name is the
   * package name from the Android Manifest.  Most users will not need this.
   *
   * The `applicationName` may contain uppercase or lowercase letters ('A' through 'Z'), numbers,
   * and underscores ('_').
   *
   * **NOTE:** If this property is set, all data reported from this application is associated with `applicationName`,
   * and appears together in dashboards.
   */
  applicationName?: string;

  /**
   * Boolean value that indicates if automatic instrumentation is enabled.
   *
   * Setting this to `false` will disable all automatic instrumentation regardless of any code injection.
   * The following features will also be effected:
   *
   * 1. {@link interactionCaptureMode} will be set to {@link InteractionCaptureMode.None}
   * 2. Automatic Network requests from supported libraries will not be tracked.
   * 3. Any UI transition events will not be tracked.
   * 4. Screenshots (both automatic and manual) will be disabled.
   *
   * Set to `false` to disable automatic instrumentation, `true` to enable (default is enabled)
   */
  autoInstrument?: boolean;

  /**
   * Sets the URL of the collector to which the agent will report.
   *
   * This is NOT your controller URL. You likely do not need to call this method
   * unless you have an on-premise EUM Processor.
   */
  collectorURL?: string; // should be the 'EUM Cloud' / 'EUM Collector' address
  /**
   * Sets the URL of the screenshot service to which the agent will upload screenshots.
   *
   * This is NOT your controller URL. You likely do not need to call this method
   * unless you have an AppDynamics managed private cloud (very rare).
   *
   * **NOTE:** If you have an on-premise EUM Processor
   *           and set the collector URL in {@link collectorURL},
   *           then you do not need to call this method
   *           because the two URLs are the same,
   *           and the agent assumes that is the case.
   */
  screenshotURL?: string; // should be the 'Screenshot Service' address
  /**
   * Sets the logging level of the agent. Default is {@link LoggingLevel.LOGGING_LEVEL_NONE}.
   *
   * **WARNING:** Not recommended for production use.
   */
  loggingLevel?: LoggingLevel; // defaults to 'Error'

  /**
   * Enables or disables JavaScript agent AJAX call reporting.
   * If enabled, JavaScript agent will capture AJAX calls in WebViews.
   *
   * Default is disabled.
   * JS Agent injection needs to be enabled for this to have an effect
   * See {@link jsAgentInjectionEnabled}
   * @param enable true to enable JS AJAX reporting, false to disable
   */
  jsAgentAjaxEnabled?: boolean;

  /**
   * Enables or disables JavaScript agent injection into WebViews.
   * If enabled, JavaScript agent will capture page loads in WebViews.
   *
   * Default is enabled.
   */
  jsAgentInjectionEnabled?: boolean;
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

export interface IRequestTracker {
  setError(error: HttpErrorResponse): void;
  setStatusCode(statusCode: number);
  reportDone(): void;
}
