declare var ADEUMInstrumentationVersionNumber: number;

declare var ADEUMInstrumentationVersionString: interop.Reference<number>;

declare class ADEumAgentConfiguration extends NSObject {
  static alloc(): ADEumAgentConfiguration; // inherited from NSObject

  static new(): ADEumAgentConfiguration; // inherited from NSObject

  anrDetectionEnabled: boolean;

  anrStackTraceEnabled: boolean;

  appKey: string;

  applicationName: string;

  collectorChannel: ADEumCollectorChannel;

  collectorURL: string;

  crashReportCallback: ADEumCrashReportCallback;

  crashReportingEnabled: boolean;

  enableAutoInstrument: boolean;

  enableLogging: boolean;

  excludedUrlPatterns: NSSet<any>;

  flushInterval: number;

  interactionCaptureMode: ADEumInteractionCaptureMode;

  jsAgentAjaxEnabled: boolean;

  jsAgentEnabled: boolean;

  jsAgentFetchEnabled: boolean;

  jsAgentZonePromiseEnabled: boolean;

  loggingLevel: ADEumLoggingLevel;

  networkRequestCallback: ADEumNetworkRequestCallback;

  reachabilityHostName: string;

  screenshotURL: string;

  screenshotsEnabled: boolean;

  constructor(o: { appKey: string });

  constructor(o: { appKey: string; collectorURL: string });

  initWithAppKey(appKey: string): this;

  initWithAppKeyCollectorURL(appKey: string, collectorURL: string): this;
}

declare const enum ADEumBreadcrumbVisibility {
  CrashesOnly = 0,

  CrashesAndSessions = 1,
}

interface ADEumCollectorChannel extends NSObjectProtocol {
  sendSynchronousRequestReturningResponseError(request: NSURLRequest, response: interop.Pointer | interop.Reference<NSURLResponse>): NSData;
}
declare var ADEumCollectorChannel: {
  prototype: ADEumCollectorChannel;
};

interface ADEumCrashReportCallback extends NSObjectProtocol {
  onCrashesReported(summaries: NSArray<ADEumCrashReportSummary> | ADEumCrashReportSummary[]): void;
}
declare var ADEumCrashReportCallback: {
  prototype: ADEumCrashReportCallback;
};

declare class ADEumCrashReportSummary extends NSObject {
  static alloc(): ADEumCrashReportSummary; // inherited from NSObject

  static new(): ADEumCrashReportSummary; // inherited from NSObject

  readonly crashId: string;

  readonly exceptionName: string;

  readonly exceptionReason: string;

  readonly signalCode: string;

  readonly signalName: string;
}

declare const enum ADEumErrorSeverityLevel {
  Info = 0,

  Warning = 1,

  Critical = 2,
}

declare class ADEumHTTPRequestTracker extends NSObject {
  static alloc(): ADEumHTTPRequestTracker; // inherited from NSObject

  static new(): ADEumHTTPRequestTracker; // inherited from NSObject

  static requestTrackerWithURL(url: NSURL): ADEumHTTPRequestTracker;

  allHeaderFields: NSDictionary<any, any>;

  allRequestHeaderFields: NSDictionary<any, any>;

  error: NSError;

  instrumentationSource: string;

  statusCode: number;

  url: NSURL;

  reportDone(): void;

  setUserDataBooleanValue(key: string, value: boolean): void;

  setUserDataDateValue(key: string, value: Date): void;

  setUserDataDoubleValue(key: string, value: number): void;

  setUserDataLongValue(key: string, value: number): void;

  setUserDataValue(key: string, value: string): void;
}

declare class ADEumInstrumentation extends NSObject {
  static TrackPageEndUuidStartEnd(pageName: string, uuid: NSUUID, startTime: Date, endTime: Date): boolean;

  static TrackPageStartUuidStart(pageName: string, uuid: NSUUID, startTime: Date): boolean;

  static TrackUIEventNameClassStartTimeLabelAccessibilityTagIndexUiResponder(rootViewController: string, eventName: string, uiClass: string, startTime: Date, uiLabel: string, uiAccessibilityLabel: string, uiTag: number, index: string, uiResponder: string): boolean;

  static alloc(): ADEumInstrumentation; // inherited from NSObject

  static beginCallMethodNameWithArguments(className: string, methodName: string, _arguments: NSArray<any> | any[]): any;

  static beginCallSelector(receiver: any, selector: string): any;

  static beginCallSelectorWithArguments(receiver: any, selector: string, _arguments: NSArray<any> | any[]): any;

  static blockScreenshots(): void;

  static changeAppKey(appKey: string): void;

  static createCrashReportType(crashDump: string, type: string): number;

  static endCall(call: any): void;

  static endCallWithValue(call: any, returnValue: any): void;

  static fetchOriginalSessionObjectFrom(wrappedObject: any): any;

  static initWithConfiguration(agentConfiguration: ADEumAgentConfiguration): void;

  static initWithConfigurationAB(agentConfiguration: ADEumAgentConfiguration, a: string, b: string): void;

  static initWithKey(appKey: string): void;

  static initWithKeyCollectorUrl(appKey: string, collectorUrl: string): void;

  static initWithKeyCollectorUrlEnableLogging(appKey: string, collectorUrl: string, enableLogging: boolean): void;

  static initWithKeyEnableLogging(appKey: string, enableLogging: boolean): void;

  static leaveBreadcrumb(breadcrumb: string): void;

  static leaveBreadcrumbMode(breadcrumb: string, mode: ADEumBreadcrumbVisibility): void;

  static new(): ADEumInstrumentation; // inherited from NSObject

  static removeUserData(key: string): void;

  static removeUserDataBoolean(key: string): void;

  static removeUserDataDate(key: string): void;

  static removeUserDataDouble(key: string): void;

  static removeUserDataLong(key: string): void;

  static reportError(error: NSError): void;

  static reportErrorWithSeverity(error: NSError, severity: ADEumErrorSeverityLevel): void;

  static reportErrorWithSeverityAndStackTrace(error: NSError, severity: ADEumErrorSeverityLevel, stacktrace: boolean): void;

  static reportMetricWithNameValue(name: string, value: number): void;

  static restartAgent(): void;

  static screenshotsBlocked(): boolean;

  static sessionCounter(): number;

  static setUserDataBooleanValue(key: string, value: boolean): void;

  static setUserDataDateValue(key: string, value: Date): void;

  static setUserDataDoubleValue(key: string, value: number): void;

  static setUserDataLongValue(key: string, value: number): void;

  static setUserDataValue(key: string, value: string): void;

  static shutdownAgent(): void;

  static startNextSession(): void;

  static startSessionFrame(name: string): ADEumSessionFrame;

  static startTimerWithName(name: string): void;

  static stopTimerWithName(name: string): void;

  static takeScreenshot(): void;

  static unblockScreenshots(): void;
}

declare const enum ADEumInteractionCaptureMode {
  umInteractionCaptureModeNone = 0,

  umInteractionCaptureModeButtonPressed = 1,

  umInteractionCaptureModeTableCellSelected = 2,

  umInteractionCaptureModeTextFieldSelected = 4,

  UmInteractionCaptureModeTextViewSelected = 8,

  umInteractionCaptureModeAll = -1,
}

declare const enum ADEumLoggingLevel {
  Off = 0,

  Error = 1,

  Warn = 2,

  Info = 3,

  Debug = 4,

  Verbose = 5,

  All = 6,
}

interface ADEumNetworkRequestCallback extends NSObjectProtocol {
  networkRequestCallback(networkRequest: ADEumHTTPRequestTracker): boolean;
}
declare var ADEumNetworkRequestCallback: {
  prototype: ADEumNetworkRequestCallback;
};

declare class ADEumServerCorrelationHeaders extends NSObject {
  static alloc(): ADEumServerCorrelationHeaders; // inherited from NSObject

  static generate(): NSDictionary<any, any>;

  static new(): ADEumServerCorrelationHeaders; // inherited from NSObject
}

declare class ADEumSessionFrame extends NSObject {
  static alloc(): ADEumSessionFrame; // inherited from NSObject

  static new(): ADEumSessionFrame; // inherited from NSObject

  end(): void;

  updateName(name: string): void;
}
