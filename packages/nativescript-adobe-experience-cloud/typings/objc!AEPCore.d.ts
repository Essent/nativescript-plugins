declare var AEPCoreVersionNumber: number;

declare var AEPCoreVersionString: interop.Reference<number>;

declare const enum AEPError {
  Unexpected = 0,

  CallbackTimeout = 1,

  CallbackNil = 2,

  None = 3,

  ServerError = 4,

  NetworkError = 5,

  InvalidRequest = 6,

  InvalidResponse = 7,

  ErrorExtensionNotInitialized = 11,
}

declare class AEPEvent extends NSObject {
  static alloc(): AEPEvent; // inherited from NSObject

  static new(): AEPEvent; // inherited from NSObject

  readonly data: NSDictionary<string, any>;

  eventHash: number;

  readonly id: NSUUID;

  readonly mask: NSArray<string>;

  readonly name: string;

  readonly parentID: NSUUID;

  readonly responseID: NSUUID;

  readonly source: string;

  readonly timestamp: Date;

  readonly type: string;

  constructor(o: { name: string; type: string; source: string; data: NSDictionary<string, any> });

  constructor(o: { name: string; type: string; source: string; data: NSDictionary<string, any>; mask: NSArray<string> | string[] });

  chainedEventWithNameTypeSourceDataMask(name: string, type: string, source: string, data: NSDictionary<string, any>, mask: NSArray<string> | string[]): AEPEvent;

  initWithNameTypeSourceData(name: string, type: string, source: string, data: NSDictionary<string, any>): this;

  initWithNameTypeSourceDataMask(name: string, type: string, source: string, data: NSDictionary<string, any>, mask: NSArray<string> | string[]): this;

  responseEventWithNameTypeSourceData(name: string, type: string, source: string, data: NSDictionary<string, any>): AEPEvent;
}

declare class AEPEventHistoryRequest extends NSObject {
  static alloc(): AEPEventHistoryRequest; // inherited from NSObject

  static new(): AEPEventHistoryRequest; // inherited from NSObject

  readonly fromDate: Date;

  readonly mask: NSDictionary<string, any>;

  readonly toDate: Date;

  constructor(o: { mask: NSDictionary<string, any>; from: Date; to: Date });

  initWithMaskFromTo(mask: NSDictionary<string, any>, from: Date, to: Date): this;
}

declare class AEPEventHistoryResult extends NSObject {
  static alloc(): AEPEventHistoryResult; // inherited from NSObject

  static new(): AEPEventHistoryResult; // inherited from NSObject

  readonly count: number;

  readonly newestOccurrence: Date;

  readonly oldestOccurrence: Date;
}

declare class AEPEventSource extends NSObject {
  static alloc(): AEPEventSource; // inherited from NSObject

  static new(): AEPEventSource; // inherited from NSObject

  static readonly applicationClose: string;

  static readonly applicationLaunch: string;

  static readonly createTracker: string;

  static readonly errorResponseContent: string;

  static readonly locationHintResult: string;

  static readonly none: string;

  static readonly notification: string;

  static readonly os: string;

  static readonly personalizationDecisions: string;

  static readonly removeIdentity: string;

  static readonly requestContent: string;

  static readonly requestIdentity: string;

  static readonly requestProfile: string;

  static readonly requestReset: string;

  static readonly resetComplete: string;

  static readonly responseContent: string;

  static readonly responseIdentity: string;

  static readonly responseProfile: string;

  static readonly sharedState: string;

  static readonly trackMedia: string;

  static readonly updateConsent: string;

  static readonly updateIdentity: string;

  static readonly wildcard: string;
}

declare class AEPEventType extends NSObject {
  static alloc(): AEPEventType; // inherited from NSObject

  static new(): AEPEventType; // inherited from NSObject

  static readonly acquisition: string;

  static readonly analytics: string;

  static readonly audienceManager: string;

  static readonly campaign: string;

  static readonly configuration: string;

  static readonly custom: string;

  static readonly edge: string;

  static readonly edgeConsent: string;

  static readonly edgeIdentity: string;

  static readonly edgeMedia: string;

  static readonly genericData: string;

  static readonly genericIdentity: string;

  static readonly genericLifecycle: string;

  static readonly genericPii: string;

  static readonly genericTrack: string;

  static readonly hub: string;

  static readonly identity: string;

  static readonly lifecycle: string;

  static readonly location: string;

  static readonly media: string;

  static readonly messaging: string;

  static readonly offerDecisioning: string;

  static readonly optimize: string;

  static readonly pii: string;

  static readonly places: string;

  static readonly rulesEngine: string;

  static readonly signal: string;

  static readonly system: string;

  static readonly target: string;

  static readonly userProfile: string;

  static readonly wildcard: string;
}

interface AEPExtension {
  friendlyName: string;

  metadata: NSDictionary<string, string>;

  name: string;

  runtime: AEPExtensionRuntime;

  initWithRuntime?(runtime: AEPExtensionRuntime): AEPExtension;

  onRegistered(): void;

  onUnregistered(): void;

  readyForEvent(event: AEPEvent): boolean;
}
declare var AEPExtension: {
  prototype: AEPExtension;

  extensionVersion(): string;
};

interface AEPExtensionRuntime {
  createPendingSharedStateWithEvent(event: AEPEvent): (p1: NSDictionary<string, any>) => void;

  createPendingXDMSharedStateWithEvent(event: AEPEvent): (p1: NSDictionary<string, any>) => void;

  createSharedStateWithDataEvent(data: NSDictionary<string, any>, event: AEPEvent): void;

  createXDMSharedStateWithDataEvent(data: NSDictionary<string, any>, event: AEPEvent): void;

  dispatchWithEvent(event: AEPEvent): void;

  getHistoricalEventsEnforceOrderHandler(requests: NSArray<AEPEventHistoryRequest> | AEPEventHistoryRequest[], enforceOrder: boolean, handler: (p1: NSArray<AEPEventHistoryResult>) => void): void;

  getSharedStateWithExtensionNameEventBarrier(extensionName: string, event: AEPEvent, barrier: boolean): AEPSharedStateResult;

  getSharedStateWithExtensionNameEventBarrierResolution(extensionName: string, event: AEPEvent, barrier: boolean, resolution: AEPSharedStateResolution): AEPSharedStateResult;

  getXDMSharedStateWithExtensionNameEventBarrier(extensionName: string, event: AEPEvent, barrier: boolean): AEPSharedStateResult;

  getXDMSharedStateWithExtensionNameEventBarrierResolution(extensionName: string, event: AEPEvent, barrier: boolean, resolution: AEPSharedStateResolution): AEPSharedStateResult;

  registerListenerWithTypeSourceListener(type: string, source: string, listener: (p1: AEPEvent) => void): void;

  startEvents(): void;

  stopEvents(): void;

  unregisterExtension(): void;
}
declare var AEPExtensionRuntime: {
  prototype: AEPExtensionRuntime;
};

declare class AEPMobileCore extends NSObject {
  static alloc(): AEPMobileCore; // inherited from NSObject

  static clearUpdatedConfiguration(): void;

  static collectLaunchInfo(userInfo: NSDictionary<string, any>): void;

  static collectMessageInfo(messageInfo: NSDictionary<string, any>): void;

  static collectPii(data: NSDictionary<string, any>): void;

  static configureWithAppId(appId: string): void;

  static configureWithFilePath(filePath: string): void;

  static dispatch(event: AEPEvent): void;

  static dispatchTimeoutResponseCallback(event: AEPEvent, timeout: number, responseCallback: (p1: AEPEvent) => void): void;

  static getPrivacyStatus(completion: (p1: AEPPrivacyStatus) => void): void;

  static getRegisteredExtensions(): string;

  static getSdkIdentities(completion: (p1: string, p2: NSError) => void): void;

  static lifecyclePause(): void;

  static lifecycleStart(additionalContextData: NSDictionary<string, any>): void;

  static new(): AEPMobileCore; // inherited from NSObject

  static registerEventListenerWithTypeSourceListener(type: string, source: string, listener: (p1: AEPEvent) => void): void;

  static registerExtensionCompletion(exten: typeof NSObject, completion: () => void): void;

  static registerExtensionsCompletion(extensions: NSArray<typeof NSObject> | (typeof NSObject)[], completion: () => void): void;

  static resetIdentities(): void;

  static setAdvertisingIdentifier(identifier: string): void;

  static setAppGroup(group: string): void;

  static setLogLevel(level: AEPLogLevel): void;

  static setMessagingDelegate(newValue: AEPMessagingDelegate): void;

  static setPrivacyStatus(status: AEPPrivacyStatus): void;

  static setPushIdentifier(deviceToken: NSData): void;

  static setWrapperType(type: AEPWrapperType): void;

  static trackActionData(action: string, data: NSDictionary<string, any>): void;

  static trackStateData(state: string, data: NSDictionary<string, any>): void;

  static unregisterExtensionCompletion(exten: typeof NSObject, completion: () => void): void;

  static updateConfiguration(configDict: NSDictionary<string, any>): void;

  static readonly extensionVersion: string;
}

declare const enum AEPPrivacyStatus {
  OptedIn = 0,

  OptedOut = 1,

  Unknown = 2,
}

declare const enum AEPSharedStateResolution {
  LastSet = 0,

  Any = 1,
}

declare class AEPSharedStateResult extends NSObject {
  static alloc(): AEPSharedStateResult; // inherited from NSObject

  static new(): AEPSharedStateResult; // inherited from NSObject

  readonly status: AEPSharedStateStatus;

  readonly value: NSDictionary<string, any>;
}

declare const enum AEPSharedStateStatus {
  Set = 0,

  Pending = 1,

  None = 2,
}

declare const enum AEPWrapperType {
  None = 0,

  ReactNative = 1,

  Flutter = 2,

  Cordova = 3,

  Unity = 4,

  Xamarin = 5,
}
