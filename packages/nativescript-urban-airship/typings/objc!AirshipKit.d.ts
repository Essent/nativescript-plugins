declare var AirshipKitVersionNumber: number;

declare var AirshipKitVersionString: interop.Reference<number>;

declare const enum AirshipWorkRequestConflictPolicy {
  UAirshipWorkRequestConflictPolicyAppend = 0,

  UAirshipWorkRequestConflictPolicyReplace = 1,

  UAirshipWorkRequestConflictPolicyKeepIfNotStarted = 2,
}

declare class ExperimentResult extends NSObject {
  static alloc(): ExperimentResult; // inherited from NSObject

  static new(): ExperimentResult; // inherited from NSObject
}

declare class MessageInfo extends NSObject {
  static alloc(): MessageInfo; // inherited from NSObject

  static new(): MessageInfo; // inherited from NSObject
}

declare class SearchEventTemplate extends NSObject {
  static alloc(): SearchEventTemplate; // inherited from NSObject

  static new(): SearchEventTemplate; // inherited from NSObject

  static template(): SearchEventTemplate;

  static templateWithValue(value: number): SearchEventTemplate;

  category: string;

  eventValue: number;

  identifier: string;

  query: string;

  totalResults: number;

  type: string;

  createEvent(): UACustomEvent;
}

interface TaskManagerProtocol {
  enqueueRequestWithIDOptions(taskID: string, options: UATaskRequestOptions): void;

  enqueueRequestWithIDOptionsInitialDelay(taskID: string, options: UATaskRequestOptions, initialDelay: number): void;

  enqueueRequestWithIDRateLimitIDsOptions(taskID: string, rateLimitIDs: NSArray<string> | string[], options: UATaskRequestOptions): void;

  enqueueRequestWithIDRateLimitIDsOptionsMinDelay(taskID: string, rateLimitIDs: NSArray<string> | string[], options: UATaskRequestOptions, minDelay: number): void;

  registerForTaskWithIDTypeDispatcherLaunchHandler(taskID: string, type: UAirshipWorkerType, dispatcher: UADispatcher, launchHandler: (p1: UATask) => void): void;

  registerForTaskWithIDTypeLaunchHandler(taskID: string, type: UAirshipWorkerType, launchHandler: (p1: UATask) => void): void;

  setRateLimitForIDRateTimeIntervalError(rateLimitID: string, rate: number, timeInterval: number): boolean;
}
declare var TaskManagerProtocol: {
  prototype: TaskManagerProtocol;
};

declare class UAAccountEventTemplate extends NSObject {
  static alloc(): UAAccountEventTemplate; // inherited from NSObject

  static loggedInTemplate(): UAAccountEventTemplate;

  static loggedInTemplateWithValue(value: number): UAAccountEventTemplate;

  static loggedInTemplateWithValueFromString(valueString: string): UAAccountEventTemplate;

  static loggedOutTemplate(): UAAccountEventTemplate;

  static loggedOutTemplateWithValue(value: number): UAAccountEventTemplate;

  static loggedOutTemplateWithValueFromString(valueString: string): UAAccountEventTemplate;

  static new(): UAAccountEventTemplate; // inherited from NSObject

  static registeredTemplate(): UAAccountEventTemplate;

  static registeredTemplateWithValue(value: number): UAAccountEventTemplate;

  static registeredTemplateWithValueFromString(valueString: string): UAAccountEventTemplate;

  category: string;

  eventValue: number;

  transactionID: string;

  type: string;

  userID: string;

  createEvent(): UACustomEvent;
}

declare class UAActionRunner extends NSObject {
  static alloc(): UAActionRunner; // inherited from NSObject

  static new(): UAActionRunner; // inherited from NSObject

  static runActionsSituationCompletionHandler(actionsPayload: NSDictionary<string, any>, situation: UAActionSituation, completionHandler: () => void): void;
}

declare class UAActionSchedule extends UASchedule {
  static alloc(): UAActionSchedule; // inherited from NSObject

  static new(): UAActionSchedule; // inherited from NSObject

  static scheduleWithActionsBuilderBlock(actions: NSDictionary<any, any>, builderBlock: (p1: UAScheduleBuilder) => void): UAActionSchedule;

  readonly actions: NSDictionary<any, any>;

  readonly dataJSONString: string;
}

declare const enum UAActionSituation {
  ManualInvocation = 0,

  LaunchedFromPush = 1,

  ForegroundPush = 2,

  BackgroundPush = 3,

  WebViewInvocation = 4,

  ForegroundInteractiveButton = 5,

  BackgroundInteractiveButton = 6,

  Automation = 7,
}

declare class UAActivityViewController extends UIActivityViewController implements UIPopoverControllerDelegate, UIPopoverPresentationControllerDelegate {
  static alloc(): UAActivityViewController; // inherited from NSObject

  static new(): UAActivityViewController; // inherited from NSObject

  dismissalBlock: () => void;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  adaptivePresentationStyleForPresentationController(controller: UIPresentationController): UIModalPresentationStyle;

  adaptivePresentationStyleForPresentationControllerTraitCollection(controller: UIPresentationController, traitCollection: UITraitCollection): UIModalPresentationStyle;

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  popoverControllerDidDismissPopover(popoverController: UIPopoverController): void;

  popoverControllerShouldDismissPopover(popoverController: UIPopoverController): boolean;

  popoverControllerWillRepositionPopoverToRectInView(popoverController: UIPopoverController, rect: interop.Pointer | interop.Reference<CGRect>, view: interop.Pointer | interop.Reference<UIView>): void;

  popoverPresentationControllerDidDismissPopover(popoverPresentationController: UIPopoverPresentationController): void;

  popoverPresentationControllerShouldDismissPopover(popoverPresentationController: UIPopoverPresentationController): boolean;

  popoverPresentationControllerWillRepositionPopoverToRectInView(popoverPresentationController: UIPopoverPresentationController, rect: interop.Pointer | interop.Reference<CGRect>, view: interop.Pointer | interop.Reference<UIView>): void;

  prepareForPopoverPresentation(popoverPresentationController: UIPopoverPresentationController): void;

  presentationControllerDidAttemptToDismiss(presentationController: UIPresentationController): void;

  presentationControllerDidDismiss(presentationController: UIPresentationController): void;

  presentationControllerPrepareAdaptivePresentationController(presentationController: UIPresentationController, adaptivePresentationController: UIPresentationController): void;

  presentationControllerShouldDismiss(presentationController: UIPresentationController): boolean;

  presentationControllerViewControllerForAdaptivePresentationStyle(controller: UIPresentationController, style: UIModalPresentationStyle): UIViewController;

  presentationControllerWillDismiss(presentationController: UIPresentationController): void;

  presentationControllerWillPresentWithAdaptiveStyleTransitionCoordinator(presentationController: UIPresentationController, style: UIModalPresentationStyle, transitionCoordinator: UIViewControllerTransitionCoordinator): void;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  sourceRect(): CGRect;
}

interface UAAirshipPermissionDelegate {
  checkPermissionStatusWithCompletionHandler(completionHandler: (p1: UAPermissionStatus) => void): void;

  requestPermissionWithCompletionHandler(completionHandler: (p1: UAPermissionStatus) => void): void;
}
declare var UAAirshipPermissionDelegate: {
  prototype: UAAirshipPermissionDelegate;
};

declare class UAAnalytics extends NSObject implements UAAnalyticsProtocol, UAComponent {
  static alloc(): UAAnalytics; // inherited from NSObject

  static new(): UAAnalytics; // inherited from NSObject

  conversionPushMetadata: string;

  conversionSendID: string;

  static readonly customEventAdded: string;

  static readonly eventKey: string;

  static readonly regionEventAdded: string;

  static readonly screenKey: string;

  static readonly screenTracked: string;

  static readonly shared: UAAnalytics;

  componentEnabled: boolean; // inherited from UAComponent

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly sessionID: string; // inherited from UAAnalyticsProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  addEvent(event: UAEvent): void;

  airshipReady(): void;

  applyRemoteConfig(config: any): void;

  associateDeviceIdentifiers(associatedIdentifiers: UAAssociatedIdentifiers): void;

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  currentAssociatedDeviceIdentifiers(): UAAssociatedIdentifiers;

  deepLink(deepLink: NSURL): boolean;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  registerSDKExtensionVersion(ext: UASDKExtension, version: string): void;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  trackScreen(screen: string): void;
}

interface UAAnalyticsProtocol {
  conversionPushMetadata: string;

  conversionSendID: string;

  sessionID: string;

  addEvent(event: UAEvent): void;

  associateDeviceIdentifiers(associatedIdentifiers: UAAssociatedIdentifiers): void;

  currentAssociatedDeviceIdentifiers(): UAAssociatedIdentifiers;

  registerSDKExtensionVersion(ext: UASDKExtension, version: string): void;

  trackScreen(screen: string): void;
}
declare var UAAnalyticsProtocol: {
  prototype: UAAnalyticsProtocol;
};

declare class UAAppIntegration extends NSObject {
  static alloc(): UAAppIntegration; // inherited from NSObject

  static applicatinPerformFetchWithCompletionHandler(application: UIApplication, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

  static applicationDidFailToRegisterForRemoteNotificationsWithError(application: UIApplication, error: NSError): void;

  static applicationDidReceiveRemoteNotificationFetchCompletionHandler(application: UIApplication, userInfo: NSDictionary<any, any>, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

  static applicationDidRegisterForRemoteNotificationsWithDeviceToken(application: UIApplication, deviceToken: NSData): void;

  static applicationPerformFetchWithCompletionHandler(application: UIApplication, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

  static new(): UAAppIntegration; // inherited from NSObject

  static setIntegrationDelegate(value: UAAppIntegrationDelegate): void;

  static userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler(center: UNUserNotificationCenter, response: UNNotificationResponse, completionHandler: () => void): void;

  static userNotificationCenterWillPresentNotificationWithCompletionHandler(center: UNUserNotificationCenter, notification: UNNotification, completionHandler: (p1: UNNotificationPresentationOptions) => void): void;

  static userNotificationCenterWithCenterDidReceiveNotificationResponseWithCompletionHandler(center: UNUserNotificationCenter, response: UNNotificationResponse, completionHandler: () => void): void;

  static userNotificationCenterWithCenterWillPresentNotificationWithCompletionHandler(center: UNUserNotificationCenter, notification: UNNotification, completionHandler: (p1: UNNotificationPresentationOptions) => void): void;

  static integrationDelegate: UAAppIntegrationDelegate;
}

interface UAAppIntegrationDelegate extends NSObjectProtocol {
  didFailToRegisterForRemoteNotificationsWithError(error: NSError): void;

  didReceiveNotificationResponseCompletionHandler(response: UNNotificationResponse, completionHandler: () => void): void;

  didReceiveRemoteNotificationIsForegroundCompletionHandler(userInfo: NSDictionary<any, any>, isForeground: boolean, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

  didRegisterForRemoteNotificationsWithDeviceToken(deviceToken: NSData): void;

  onBackgroundAppRefresh(): void;

  presentationOptionsForNotificationCompletionHandler(notification: UNNotification, completionHandler: (p1: UNNotificationPresentationOptions) => void): void;

  willPresentNotificationPresentationOptionsCompletionHandler(notification: UNNotification, options: UNNotificationPresentationOptions, completionHandler: () => void): void;
}
declare var UAAppIntegrationDelegate: {
  prototype: UAAppIntegrationDelegate;
};

declare class UAAppStateTracker extends NSObject {
  static alloc(): UAAppStateTracker; // inherited from NSObject

  static new(): UAAppStateTracker; // inherited from NSObject

  readonly state: UAApplicationState;

  static readonly didBecomeActiveNotification: string;

  static readonly didEnterBackgroundNotification: string;

  static readonly didTransitionToBackground: string;

  static readonly didTransitionToForeground: string;

  static readonly shared: UAAppStateTracker;

  static readonly willEnterForegroundNotification: string;

  static readonly willResignActiveNotification: string;

  static readonly willTerminateNotification: string;
}

declare class UAApplicationMetrics extends NSObject {
  static alloc(): UAApplicationMetrics; // inherited from NSObject

  static new(): UAApplicationMetrics; // inherited from NSObject

  readonly currentAppVersion: string;

  readonly isAppVersionUpdated: boolean;

  readonly lastApplicationOpenDate: Date;
}

declare const enum UAApplicationState {
  Active = 0,

  Inactive = 1,

  Background = 2,
}

declare class UAAssociatedChannel extends NSObject {
  static alloc(): UAAssociatedChannel; // inherited from NSObject

  static new(): UAAssociatedChannel; // inherited from NSObject

  readonly channelID: string;

  readonly channelType: UAChannelType;

  constructor(o: { channelType: UAChannelType; channelID: string });

  initWithChannelTypeChannelID(channelType: UAChannelType, channelID: string): this;
}

declare class UAAssociatedIdentifiers extends NSObject {
  static alloc(): UAAssociatedIdentifiers; // inherited from NSObject

  static identifiers(): UAAssociatedIdentifiers;

  static identifiersWithDictionary(identifiers: NSDictionary<string, string>): UAAssociatedIdentifiers;

  static new(): UAAssociatedIdentifiers; // inherited from NSObject

  advertisingID: string;

  advertisingTrackingEnabled: boolean;

  readonly allIDs: NSDictionary<string, string>;

  vendorID: string;

  static readonly maxCharacterCount: number;

  static readonly maxCount: number;

  constructor(o: { dictionary: NSDictionary<string, string> });

  constructor(o: { identifiers: NSDictionary<string, string> });

  initWithDictionary(dictionary: NSDictionary<string, string>): this;

  initWithIdentifiers(identifiers: NSDictionary<string, string>): this;

  setIdentifierForKey(identifier: string, key: string): void;
}

declare class UAAttributeMutations extends NSObject {
  static alloc(): UAAttributeMutations; // inherited from NSObject

  static mutations(): UAAttributeMutations;

  static new(): UAAttributeMutations; // inherited from NSObject

  applyMutationsWithEditor(editor: UAAttributesEditor): void;

  removeAttribute(attribute: string): void;

  setDateForAttribute(date: Date, forAttribute: string): void;

  setNumberForAttribute(number: number, forAttribute: string): void;

  setStringForAttribute(string: string, forAttribute: string): void;
}

declare class UAAttributes extends NSObject {
  static alloc(): UAAttributes; // inherited from NSObject

  static new(): UAAttributes; // inherited from NSObject

  static readonly accountCreation: string;

  static readonly advertisingId: string;

  static readonly age: string;

  static readonly birthdate: string;

  static readonly city: string;

  static readonly company: string;

  static readonly country: string;

  static readonly email: string;

  static readonly firstName: string;

  static readonly fullName: string;

  static readonly gender: string;

  static readonly homePhone: string;

  static readonly lastName: string;

  static readonly loyaltyTier: string;

  static readonly mobilePhone: string;

  static readonly region: string;

  static readonly title: string;

  static readonly username: string;

  static readonly workPhone: string;

  static readonly zipCode: string;
}

declare class UAAttributesEditor extends NSObject {
  static alloc(): UAAttributesEditor; // inherited from NSObject

  static new(): UAAttributesEditor; // inherited from NSObject

  apply(): void;

  removeAttribute(attribute: string): void;

  setDateAttribute(date: Date, attribute: string): void;

  setNumberAttribute(number: number, attribute: string): void;

  setStringAttribute(string: string, attribute: string): void;
}

declare const enum UAAuthorizationStatus {
  NotDetermined = 0,

  Denied = 1,

  Authorized = 2,

  Provisional = 3,

  Ephemeral = 4,
}

declare const enum UAAuthorizedNotificationSettings {
  None = 0,

  Badge = 1,

  Sound = 2,

  Alert = 4,

  CarPlay = 8,

  LockScreen = 16,

  NotificationCenter = 32,

  CriticalAlert = 64,

  Announcement = 128,

  ScheduledDelivery = 256,

  TimeSensitive = 512,
}

declare class UAAutoIntegration extends NSObject {
  static alloc(): UAAutoIntegration; // inherited from NSObject

  static integrateWithDelegate(delegate: UAAppIntegrationDelegate): void;

  static new(): UAAutoIntegration; // inherited from NSObject

  static reset(): void;
}

declare class UAAutomationAudienceOverrides extends NSObject {
  static alloc(): UAAutomationAudienceOverrides; // inherited from NSObject

  static new(): UAAutomationAudienceOverrides; // inherited from NSObject

  readonly attributesPayload: NSArray<NSDictionary<string, any>>;

  readonly tagsPayload: NSDictionary<string, NSDictionary<string, NSArray<string>>>;

  constructor(o: { tagsPayload: NSDictionary<string, NSDictionary<string, NSArray<string>>>; attributesPayload: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[] });

  initWithTagsPayloadAttributesPayload(tagsPayload: NSDictionary<string, NSDictionary<string, NSArray<string>>>, attributesPayload: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[]): this;
}

declare class UAAutomationAudienceOverridesProvider extends NSObject {
  static alloc(): UAAutomationAudienceOverridesProvider; // inherited from NSObject

  static new(): UAAutomationAudienceOverridesProvider; // inherited from NSObject

  audienceOverridesWithChannelIDCompletionHandler(channelID: string, completionHandler: (p1: UAAutomationAudienceOverrides) => void): void;
}

declare class UAAutomationResources extends NSObject {
  static alloc(): UAAutomationResources; // inherited from NSObject

  static bundle(): NSBundle;

  static new(): UAAutomationResources; // inherited from NSObject
}

declare class UAAutomationSDKModule extends NSObject implements UALegacySDKModule {
  static alloc(): UAAutomationSDKModule; // inherited from NSObject

  static loadWithDependencies(dependencies: NSDictionary<any, any>): UALegacySDKModule;

  static new(): UAAutomationSDKModule; // inherited from NSObject

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  actions(): NSArray<UALegacyAction>;

  class(): typeof NSObject;

  components(): NSArray<UAComponent>;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

declare var UABannerAdditionalPaddingKey: string;

declare var UABannerBodyStyleKey: string;

declare var UABannerButtonStyleKey: string;

declare var UABannerHeaderStyleKey: string;

declare var UABannerMaxWidthKey: string;

declare var UABannerMediaStyleKey: string;

declare var UABannerStyleFileName: string;

declare var UABannerTextStyleKey: string;

declare class UABase64 extends NSObject {
  static alloc(): UABase64; // inherited from NSObject

  static dataFromString(base64String: string): NSData;

  static new(): UABase64; // inherited from NSObject

  static stringFromData(data: NSData): string;
}

declare class UABeveledLoadingIndicator extends UIView {
  static alloc(): UABeveledLoadingIndicator; // inherited from NSObject

  static appearance(): UABeveledLoadingIndicator; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): UABeveledLoadingIndicator; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UABeveledLoadingIndicator; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): UABeveledLoadingIndicator; // inherited from UIAppearance

  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UABeveledLoadingIndicator; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): UABeveledLoadingIndicator; // inherited from UIAppearance

  static new(): UABeveledLoadingIndicator; // inherited from NSObject

  hide(): void;

  show(): void;
}

declare const enum UABoundaryEvent {
  Enter = 1,

  Exit = 2,
}

declare var UAButtonAdditionalPaddingKey: string;

declare var UAButtonHeightKey: string;

declare class UACancelSchedulesAction extends NSObject implements UALegacyAction {
  static alloc(): UACancelSchedulesAction; // inherited from NSObject

  static new(): UACancelSchedulesAction; // inherited from NSObject

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly defaultNames: NSArray<string>; // inherited from UALegacyAction

  readonly defaultPredicate: (p1: any, p2: number) => boolean; // inherited from UALegacyAction

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  acceptsArgumentValueSituation(_arguments: any, situation: number): boolean;

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  performWithArgumentValueSituationPushUserInfoCompletionHandler(argument: any, situation: number, pushUserInfo: NSDictionary<any, any>, completionHandler: () => void): void;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

declare var UACancelSchedulesActionAll: string;

declare var UACancelSchedulesActionDefaultRegistryAlias: string;

declare var UACancelSchedulesActionDefaultRegistryName: string;

declare var UACancelSchedulesActionGroups: string;

declare var UACancelSchedulesActionIDs: string;

declare class UAChannel extends NSObject implements UAComponent, UAPushableComponent {
  static alloc(): UAChannel; // inherited from NSObject

  static new(): UAChannel; // inherited from NSObject

  readonly identifier: string;

  isChannelTagRegistrationEnabled: boolean;

  tags: NSArray<string>;

  static readonly channelCreatedEvent: string;

  static readonly channelExistingKey: string;

  static readonly channelIdentifierKey: string;

  static readonly channelUpdatedEvent: string;

  static readonly legacyTagsSettingsKey: string;

  static readonly shared: UAChannel;

  componentEnabled: boolean; // inherited from UAComponent

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  addTag(tag: string): void;

  addTags(tags: NSArray<string> | string[]): void;

  addTagsGroup(tags: NSArray<string> | string[], group: string): void;

  airshipReady(): void;

  applyAttributeMutations(mutations: UAAttributeMutations): void;

  applyRemoteConfig(config: any): void;

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  deepLink(deepLink: NSURL): boolean;

  editAttributes(): UAAttributesEditor;

  editSubscriptionLists(): UASubscriptionListEditor;

  editTagGroups(): UATagGroupsEditor;

  editTags(): UATagEditor;

  enableChannelCreation(): void;

  fetchSubscriptionListsWithCompletionHandler(completionHandler: (p1: NSArray<string>, p2: NSError) => void): void;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  presentationOptionsForNotificationDefaultPresentationOptions(notification: UNNotification, options: UNNotificationPresentationOptions): UNNotificationPresentationOptions;

  receivedNotificationResponseCompletionHandler(response: UNNotificationResponse, completionHandler: () => void): void;

  receivedRemoteNotificationCompletionHandler(notification: NSDictionary<any, any>, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

  removeTag(tag: string): void;

  removeTags(tags: NSArray<string> | string[]): void;

  removeTagsGroup(tags: NSArray<string> | string[], group: string): void;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  setTagsGroup(tags: NSArray<string> | string[], group: string): void;
}

declare class UAChannelCapture extends NSObject {
  static alloc(): UAChannelCapture; // inherited from NSObject

  static new(): UAChannelCapture; // inherited from NSObject

  enabled: boolean;
}

interface UAChannelProtocol {
  identifier: string;

  isChannelTagRegistrationEnabled: boolean;

  tags: NSArray<string>;

  editAttributes(): UAAttributesEditor;

  editAttributes(editorBlock: (p1: UAAttributesEditor) => void): void;

  editSubscriptionLists(): UASubscriptionListEditor;

  editSubscriptionLists(editorBlock: (p1: UASubscriptionListEditor) => void): void;

  editTagGroups(): UATagGroupsEditor;

  editTagGroups(editorBlock: (p1: UATagGroupsEditor) => void): void;

  editTags(): UATagEditor;

  editTags(editorBlock: (p1: UATagEditor) => void): void;

  enableChannelCreation(): void;

  fetchSubscriptionListsWithCompletionHandler(completionHandler: (p1: NSArray<string>, p2: NSError) => void): void;
}
declare var UAChannelProtocol: {
  prototype: UAChannelProtocol;
};

declare const enum UAChannelScope {
  App = 0,

  Web = 1,

  Email = 2,

  Sms = 3,
}

declare class UAChannelScopes extends NSObject {
  static alloc(): UAChannelScopes; // inherited from NSObject

  static new(): UAChannelScopes; // inherited from NSObject

  readonly values: NSArray<number>;
}

declare const enum UAChannelType {
  Email = 0,

  Sms = 1,

  Open = 2,
}

declare class UACircularRegion extends NSObject {
  static alloc(): UACircularRegion; // inherited from NSObject

  static circularRegionWithRadiusLatitudeLongitude(radius: number, latitude: number, longitude: number): UACircularRegion;

  static new(): UACircularRegion; // inherited from NSObject

  constructor(o: { radius: number; latitude: number; longitude: number });

  initWithRadiusLatitudeLongitude(radius: number, latitude: number, longitude: number): this;
}

declare const enum UACloudSite {
  US = 0,

  EU = 1,
}

declare class UAColorUtils extends NSObject {
  static alloc(): UAColorUtils; // inherited from NSObject

  static colorWithHexString(hexString: string): UIColor;

  static hexStringWithColor(color: UIColor): string;

  static new(): UAColorUtils; // inherited from NSObject
}

interface UAComponent extends NSObjectProtocol {
  componentEnabled: boolean;

  airshipReady?(): void;

  applyRemoteConfig?(config: any): void;

  deepLink?(deepLink: NSURL): boolean;
}
declare var UAComponent: {
  prototype: UAComponent;
};

declare class UAComponentDisableHelper extends NSObject {
  static alloc(): UAComponentDisableHelper; // inherited from NSObject

  static new(): UAComponentDisableHelper; // inherited from NSObject

  enabled: boolean;

  onChange: () => void;

  constructor(o: { dataStore: UAPreferenceDataStore; className: string });

  initWithDataStoreClassName(dataStore: UAPreferenceDataStore, className: string): this;
}

declare class UACompression extends NSObject {
  static alloc(): UACompression; // inherited from NSObject

  static gzipData(data: NSData): NSData;

  static new(): UACompression; // inherited from NSObject
}

declare class UAConfig extends NSObject implements NSCopying {
  static alloc(): UAConfig; // inherited from NSObject

  static config(): UAConfig;

  static configWithContentsOfFile(path: string): UAConfig;

  static defaultConfig(): UAConfig;

  static isProductionProvisioningProfile(profilePath: string): boolean;

  static new(): UAConfig; // inherited from NSObject

  URLAllowList: NSArray<string>;

  URLAllowListScopeJavaScriptInterface: NSArray<string>;

  URLAllowListScopeOpenURL: NSArray<string>;

  analyticsURL: string;

  readonly appKey: string;

  readonly appSecret: string;

  autoPauseInAppAutomationOnLaunch: boolean;

  chatURL: string;

  chatWebSocketURL: string;

  clearNamedUserOnAppRestore: boolean;

  clearUserOnAppRestore: boolean;

  defaultAppKey: string;

  defaultAppSecret: string;

  detectProvisioningMode: boolean;

  developmentAppKey: string;

  developmentAppSecret: string;

  developmentLogLevel: UALogLevel;

  deviceAPIURL: string;

  enabledFeatures: UAFeatures;

  inProduction: boolean;

  initialConfigURL: string;

  isAnalyticsEnabled: boolean;

  isAutomaticSetupEnabled: boolean;

  isChannelCaptureEnabled: boolean;

  isChannelCreationDelayEnabled: boolean;

  isExtendedBroadcastsEnabled: boolean;

  itunesID: string;

  readonly logLevel: UALogLevel;

  messageCenterStyleConfig: string;

  productionAppKey: string;

  productionAppSecret: string;

  productionLogLevel: UALogLevel;

  profilePath: string;

  remoteDataAPIURL: string;

  requestAuthorizationToUseNotifications: boolean;

  requireInitialRemoteConfigEnabled: boolean;

  site: UACloudSite;

  constructor(o: { contentsOfFile: string });

  copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

  initWithContentsOfFile(path: string): this;

  validate(): boolean;
}

declare class UAConnectionType extends NSObject {
  static alloc(): UAConnectionType; // inherited from NSObject

  static new(): UAConnectionType; // inherited from NSObject

  static readonly cell: string;

  static readonly none: string;

  static readonly wifi: string;
}

declare class UAContact extends NSObject implements UAComponent {
  static alloc(): UAContact; // inherited from NSObject

  static new(): UAContact; // inherited from NSObject

  static readonly contactConflictEvent: string;

  static readonly contactConflictEventKey: string;

  static readonly maxNamedUserIDLength: number;

  static readonly shared: UAContact;

  componentEnabled: boolean; // inherited from UAComponent

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  airshipReady(): void;

  applyRemoteConfig(config: any): void;

  associateChannelType(channelID: string, type: UAChannelType): void;

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  deepLink(deepLink: NSURL): boolean;

  editAttributes(): UAAttributesEditor;

  editSubscriptionLists(): UAScopedSubscriptionListEditor;

  editTagGroups(): UATagGroupsEditor;

  fetchSubscriptionListsWithCompletionHandler(completionHandler: (p1: NSDictionary<string, UAChannelScopes>, p2: NSError) => void): void;

  getNamedUserIDWithCompletionHandler(completionHandler: (p1: string) => void): void;

  identify(namedUserID: string): void;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  registerEmailOptions(address: string, options: UAEmailRegistrationOptions): void;

  registerOpenOptions(address: string, options: UAOpenRegistrationOptions): void;

  registerSMSOptions(msisdn: string, options: UASMSRegistrationOptions): void;

  reset(): void;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

declare class UAContactConflictEvent extends NSObject {
  static alloc(): UAContactConflictEvent; // inherited from NSObject

  static new(): UAContactConflictEvent; // inherited from NSObject

  readonly attributes: NSDictionary<string, NSObject>;

  readonly channels: NSArray<UAAssociatedChannel>;

  readonly conflictingNamedUserID: string;

  readonly subscriptionLists: NSDictionary<string, UAChannelScopes>;

  readonly tags: NSDictionary<string, NSArray<string>>;
}

interface UAContactProtocol {
  associateChannelType(channelID: string, type: UAChannelType): void;

  editAttributes(): UAAttributesEditor;

  editAttributes(editorBlock: (p1: UAAttributesEditor) => void): void;

  editSubscriptionLists(): UAScopedSubscriptionListEditor;

  editSubscriptionLists(editorBlock: (p1: UAScopedSubscriptionListEditor) => void): void;

  editTagGroups(): UATagGroupsEditor;

  editTagGroups(editorBlock: (p1: UATagGroupsEditor) => void): void;

  fetchSubscriptionListsWithCompletionHandler(completionHandler: (p1: NSDictionary<string, UAChannelScopes>, p2: NSError) => void): void;

  getNamedUserIDWithCompletionHandler(completionHandler: (p1: string) => void): void;

  identify(namedUserID: string): void;

  registerEmailOptions(address: string, options: UAEmailRegistrationOptions): void;

  registerOpenOptions(address: string, options: UAOpenRegistrationOptions): void;

  registerSMSOptions(msisdn: string, options: UASMSRegistrationOptions): void;

  reset(): void;
}
declare var UAContactProtocol: {
  prototype: UAContactProtocol;

  contactConflictEvent(): string;

  contactConflictEventKey(): string;

  maxNamedUserIDLength(): number;
};

declare class UACoreData extends NSObject {
  static alloc(): UACoreData; // inherited from NSObject

  static new(): UACoreData; // inherited from NSObject

  static safeSave(context: NSManagedObjectContext): boolean;

  delegate: UACoreDataDelegate;

  readonly inMemory: boolean;

  constructor(o: { modelURL: NSURL; inMemory: boolean; stores: NSArray<string> | string[] });

  constructor(o: { modelURL: NSURL; inMemory: boolean; stores: NSArray<string> | string[]; mergePolicy: any });

  initWithModelURLInMemoryStores(modelURL: NSURL, inMemory: boolean, stores: NSArray<string> | string[]): this;

  initWithModelURLInMemoryStoresMergePolicy(modelURL: NSURL, inMemory: boolean, stores: NSArray<string> | string[], mergePolicy: any): this;

  performBlockIfStoresExist(block: (p1: boolean, p2: NSManagedObjectContext) => void): void;

  safePerformBlock(block: (p1: boolean, p2: NSManagedObjectContext) => void): void;

  safePerformBlockAndWait(block: (p1: boolean, p2: NSManagedObjectContext) => void): void;

  shutDown(): void;

  waitForIdle(): void;
}

interface UACoreDataDelegate {
  persistentStoreCreatedNameContext(store: NSPersistentStore, name: string, context: NSManagedObjectContext): void;
}
declare var UACoreDataDelegate: {
  prototype: UACoreDataDelegate;
};

declare class UACustomEvent extends NSObject implements UAEvent {
  static alloc(): UACustomEvent; // inherited from NSObject

  static eventWithName(name: string): UACustomEvent;

  static eventWithNameValue(name: string, value: number): UACustomEvent;

  static eventWithNameValueFromString(name: string, string: string): UACustomEvent;

  static new(): UACustomEvent; // inherited from NSObject

  conversionPushMetadata: string;

  conversionSendID: string;

  eventName: string;

  eventValue: number;

  interactionID: string;

  interactionType: string;

  readonly payload: NSDictionary<any, any>;

  properties: NSDictionary<string, any>;

  templateType: string;

  transactionID: string;

  static readonly eventInteractionIDKey: string;

  static readonly eventInteractionTypeKey: string;

  static readonly eventNameKey: string;

  static readonly eventPropertiesKey: string;

  static readonly eventTransactionIDKey: string;

  static readonly eventValueKey: string;

  static readonly maxPropertiesSize: number;

  readonly data: NSDictionary<any, any>; // inherited from UAEvent

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly eventType: string; // inherited from UAEvent

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly priority: UAEventPriority; // inherited from UAEvent

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  constructor(o: { name: string; stringValue: string });

  constructor(o: { name: string; value: number });

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  initWithNameStringValue(name: string, stringValue: string): this;

  initWithNameValue(name: string, value: number): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  isValid(): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  setInteractionFromMessageCenterMessage(messageID: string): void;

  track(): void;
}

declare class UADateFormatter extends NSObject {
  static alloc(): UADateFormatter; // inherited from NSObject

  static dateFromISOString(from: string): Date;

  static new(): UADateFormatter; // inherited from NSObject

  static stringFromDateFormat(date: Date, format: UADateFormatterFormat): string;
}

declare const enum UADateFormatterFormat {
  Iso = 0,

  IsoDelimitter = 1,

  RelativeShort = 2,

  RelativeShortDate = 3,

  RelativeFull = 4,

  RelativeFullDate = 5,
}

interface UADeepLinkDelegate {
  receivedDeepLinkCompletionHandler(deepLink: NSURL, completionHandler: () => void): void;
}
declare var UADeepLinkDelegate: {
  prototype: UADeepLinkDelegate;
};

declare class UADeferredSchedule extends UASchedule {
  static alloc(): UADeferredSchedule; // inherited from NSObject

  static new(): UADeferredSchedule; // inherited from NSObject

  readonly deferredData: UAScheduleDeferredData;
}

declare class UADispatcher extends NSObject {
  static alloc(): UADispatcher; // inherited from NSObject

  static new(): UADispatcher; // inherited from NSObject

  static serial(): UADispatcher;

  static serialUtility(): UADispatcher;

  static readonly global: UADispatcher;

  static readonly main: UADispatcher;

  static readonly sharedSerialUtility: UADispatcher;

  dispatchAfterBlock(delay: number, block: () => void): UADisposable;

  dispatchAfterTimebaseBlock(delay: number, timebase: UADispatcherTimeBase, block: () => void): UADisposable;

  dispatchAsync(block: () => void): void;

  dispatchAsyncIfNecessary(block: () => void): void;

  dispatchSync(block: () => void): void;

  doSync(block: () => void): void;
}

declare const enum UADispatcherTimeBase {
  Wall = 0,

  System = 1,
}

declare class UADisposable extends NSObject {
  static alloc(): UADisposable; // inherited from NSObject

  static new(): UADisposable; // inherited from NSObject

  constructor();

  dispose(): void;

  init(disposalBlock: () => void): this;
}

declare class UAEmailRegistrationOptions extends NSObject {
  static alloc(): UAEmailRegistrationOptions; // inherited from NSObject

  static commercialOptionsWithTransactionalOptedInCommercialOptedInProperties(transactionalOptedIn: Date, commercialOptedIn: Date, properties: NSDictionary<string, any>): UAEmailRegistrationOptions;

  static new(): UAEmailRegistrationOptions; // inherited from NSObject

  static optionsWithPropertiesDoubleOptIn(properties: NSDictionary<string, any>, doubleOptIn: boolean): UAEmailRegistrationOptions;

  static optionsWithTransactionalOptedInPropertiesDoubleOptIn(transactionalOptedIn: Date, properties: NSDictionary<string, any>, doubleOptIn: boolean): UAEmailRegistrationOptions;
}

interface UAEvent extends NSObjectProtocol {
  data: NSDictionary<any, any>;

  eventType: string;

  priority: UAEventPriority;

  isValid?(): boolean;
}
declare var UAEvent: {
  prototype: UAEvent;
};

declare const enum UAEventPriority {
  Normal = 0,

  High = 1,
}

interface UAExperimentDataProvider {
  evaluateGlobalHoldoutsWithInfoContactIdCompletionHandler(info: MessageInfo, contactId: string, completionHandler: (p1: ExperimentResult) => void): void;
}
declare var UAExperimentDataProvider: {
  prototype: UAExperimentDataProvider;
};

declare const enum UAFeatures {
  InAppAutomation = 1,

  MessageCenter = 2,

  Push = 4,

  Analytics = 16,

  TagsAndAttributes = 32,

  Contacts = 64,

  All = 119,
}

declare var UAFeaturesNone: UAFeatures;

declare var UAFullScreenBodyStyleKey: string;

declare var UAFullScreenButtonStyleKey: string;

declare var UAFullScreenDismissIconResourceKey: string;

declare var UAFullScreenHeaderStyleKey: string;

declare var UAFullScreenMediaStyleKey: string;

declare var UAFullScreenStyleFileName: string;

declare var UAFullScreenTextStyleKey: string;

declare var UAHTMLAdditionalPaddingKey: string;

declare var UAHTMLDismissIconResourceKey: string;

declare var UAHTMLHideDismissIconKey: string;

declare var UAHTMLMaxHeightKey: string;

declare var UAHTMLMaxWidthKey: string;

declare var UAHTMLStyleFileName: string;

declare class UAHTTPResponse extends NSObject {
  static alloc(): UAHTTPResponse; // inherited from NSObject

  static new(): UAHTTPResponse; // inherited from NSObject

  readonly isClientError: boolean;

  readonly isServerError: boolean;

  readonly isSuccess: boolean;

  readonly status: number;

  constructor(o: { status: number });

  initWithStatus(status: number): this;
}

interface UAImageProvider {
  getWithUrl(url: NSURL): UAirshipImageData;
}
declare var UAImageProvider: {
  prototype: UAImageProvider;
};

declare class UAInAppAutomation extends NSObject implements UAComponent {
  static alloc(): UAInAppAutomation; // inherited from NSObject

  static new(): UAInAppAutomation; // inherited from NSObject

  readonly inAppMessageManager: UAInAppMessageManager;

  paused: boolean;

  static readonly shared: UAInAppAutomation;

  componentEnabled: boolean; // inherited from UAComponent

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  airshipReady(): void;

  applyRemoteConfig(config: any): void;

  cancelActionSchedulesWithGroupCompletionHandler(group: string, completionHandler: (p1: boolean) => void): void;

  cancelMessageSchedulesWithGroupCompletionHandler(group: string, completionHandler: (p1: boolean) => void): void;

  cancelScheduleWithIDCompletionHandler(scheduleID: string, completionHandler: (p1: boolean) => void): void;

  cancelSchedulesWithGroupCompletionHandler(group: string, completionHandler: (p1: boolean) => void): void;

  checkAudienceCompletionHandler(audience: UAScheduleAudience, completionHandler: (p1: boolean, p2: NSError) => void): void;

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  deepLink(deepLink: NSURL): boolean;

  editScheduleWithIDEditsCompletionHandler(identifier: string, edits: UAScheduleEdits, completionHandler: (p1: boolean) => void): void;

  getActionScheduleWithIDCompletionHandler(identifier: string, completionHandler: (p1: UAActionSchedule) => void): void;

  getActionSchedules(completionHandler: (p1: NSArray<UAActionSchedule>) => void): void;

  getActionSchedulesWithGroupCompletionHandler(group: string, completionHandler: (p1: NSArray<UAActionSchedule>) => void): void;

  getMessageScheduleWithIDCompletionHandler(identifier: string, completionHandler: (p1: UAInAppMessageSchedule) => void): void;

  getMessageSchedules(completionHandler: (p1: NSArray<UAInAppMessageSchedule>) => void): void;

  getMessageSchedulesWithGroupCompletionHandler(group: string, completionHandler: (p1: NSArray<UAInAppMessageSchedule>) => void): void;

  getSchedules(completionHandler: (p1: NSArray<UASchedule>) => void): void;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  scheduleCompletionHandler(schedule: UASchedule, completionHandler: (p1: boolean) => void): void;

  scheduleMultipleCompletionHandler(schedules: NSArray<UASchedule> | UASchedule[], completionHandler: (p1: boolean) => void): void;

  self(): this;
}

declare class UAInAppMessage extends NSObject {
  static alloc(): UAInAppMessage; // inherited from NSObject

  static messageWithBuilderBlock(builderBlock: (p1: UAInAppMessageBuilder) => void): UAInAppMessage;

  static new(): UAInAppMessage; // inherited from NSObject

  readonly actions: NSDictionary<any, any>;

  readonly displayBehavior: string;

  readonly displayContent: UAInAppMessageDisplayContent;

  readonly displayType: UAInAppMessageDisplayType;

  readonly extras: NSDictionary<any, any>;

  readonly isReportingEnabled: boolean;

  readonly name: string;

  extend(builderBlock: (p1: UAInAppMessageBuilder) => void): UAInAppMessage;
}

interface UAInAppMessageAdapterProtocol extends NSObjectProtocol {
  display?(completionHandler: (p1: UAInAppMessageResolution) => void): void;

  isReadyToDisplay(): boolean;

  prepareWithAssetsCompletionHandler(assets: UAInAppMessageAssets, completionHandler: (p1: UAInAppMessagePrepareResult) => void): void;
}
declare var UAInAppMessageAdapterProtocol: {
  prototype: UAInAppMessageAdapterProtocol;

  adapterForMessage(message: UAInAppMessage): UAInAppMessageAdapterProtocol;
};

declare class UAInAppMessageAssetManager extends NSObject {
  static alloc(): UAInAppMessageAssetManager; // inherited from NSObject

  static new(): UAInAppMessageAssetManager; // inherited from NSObject

  cachePolicyDelegate: UAInAppMessageCachePolicyDelegate;

  prepareAssetsDelegate: UAInAppMessagePrepareAssetsDelegate;
}

declare class UAInAppMessageAssets extends NSObject {
  static alloc(): UAInAppMessageAssets; // inherited from NSObject

  static new(): UAInAppMessageAssets; // inherited from NSObject

  getCacheURL(assetURL: NSURL): NSURL;

  isCached(assetURL: NSURL): boolean;
}

declare var UAInAppMessageBackgroundColorKey: string;

declare class UAInAppMessageBannerAdapter extends NSObject implements UAInAppMessageAdapterProtocol {
  static adapterForMessage(message: UAInAppMessage): UAInAppMessageBannerAdapter;

  static alloc(): UAInAppMessageBannerAdapter; // inherited from NSObject

  static new(): UAInAppMessageBannerAdapter; // inherited from NSObject

  style: UAInAppMessageBannerStyle;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  display(completionHandler: (p1: UAInAppMessageResolution) => void): void;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  isReadyToDisplay(): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  prepareWithAssetsCompletionHandler(assets: UAInAppMessageAssets, completionHandler: (p1: UAInAppMessagePrepareResult) => void): void;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

declare const enum UAInAppMessageBannerContentLayoutType {
  MediaLeft = 0,

  MediaRight = 1,
}

declare class UAInAppMessageBannerDisplayContent extends UAInAppMessageDisplayContent {
  static alloc(): UAInAppMessageBannerDisplayContent; // inherited from NSObject

  static displayContentWithBuilderBlock(builderBlock: (p1: UAInAppMessageBannerDisplayContentBuilder) => void): UAInAppMessageBannerDisplayContent;

  static new(): UAInAppMessageBannerDisplayContent; // inherited from NSObject

  readonly actions: NSDictionary<any, any>;

  readonly backgroundColor: UIColor;

  readonly body: UAInAppMessageTextInfo;

  readonly borderRadiusPoints: number;

  readonly buttonLayout: UAInAppMessageButtonLayoutType;

  readonly buttons: NSArray<UAInAppMessageButtonInfo>;

  readonly contentLayout: UAInAppMessageBannerContentLayoutType;

  readonly dismissButtonColor: UIColor;

  readonly durationSeconds: number;

  readonly heading: UAInAppMessageTextInfo;

  readonly media: UAInAppMessageMediaInfo;

  readonly placement: UAInAppMessageBannerPlacementType;

  extend(builderBlock: (p1: UAInAppMessageBannerDisplayContentBuilder) => void): UAInAppMessageBannerDisplayContent;
}

declare class UAInAppMessageBannerDisplayContentBuilder extends NSObject {
  static alloc(): UAInAppMessageBannerDisplayContentBuilder; // inherited from NSObject

  static new(): UAInAppMessageBannerDisplayContentBuilder; // inherited from NSObject

  actions: NSDictionary<any, any>;

  backgroundColor: UIColor;

  body: UAInAppMessageTextInfo;

  borderRadiusPoints: number;

  buttonLayout: UAInAppMessageButtonLayoutType;

  buttons: NSArray<UAInAppMessageButtonInfo>;

  contentLayout: UAInAppMessageBannerContentLayoutType;

  dismissButtonColor: UIColor;

  durationSeconds: number;

  heading: UAInAppMessageTextInfo;

  media: UAInAppMessageMediaInfo;

  placement: UAInAppMessageBannerPlacementType;

  isValid(): boolean;
}

declare var UAInAppMessageBannerMaxButtons: number;

declare const enum UAInAppMessageBannerPlacementType {
  Top = 0,

  Bottom = 1,
}

declare class UAInAppMessageBannerStyle extends NSObject implements UAInAppMessageStyleProtocol {
  static alloc(): UAInAppMessageBannerStyle; // inherited from NSObject

  static new(): UAInAppMessageBannerStyle; // inherited from NSObject

  static style(): UAInAppMessageBannerStyle;

  static styleWithContentsOfFile(path: string): UAInAppMessageBannerStyle;

  additionalPadding: UAPadding;

  bodyStyle: UAInAppMessageTextStyle;

  buttonStyle: UAInAppMessageButtonStyle;

  headerStyle: UAInAppMessageTextStyle;

  maxWidth: number;

  mediaStyle: UAInAppMessageMediaStyle;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

declare var UAInAppMessageBodyKey: string;

declare var UAInAppMessageBorderRadiusKey: string;

declare class UAInAppMessageBuilder extends NSObject {
  static alloc(): UAInAppMessageBuilder; // inherited from NSObject

  static new(): UAInAppMessageBuilder; // inherited from NSObject

  actions: NSDictionary<any, any>;

  displayBehavior: string;

  displayContent: UAInAppMessageDisplayContent;

  extras: NSDictionary<any, any>;

  isReportingEnabled: boolean;

  name: string;

  isValid(): boolean;
}

declare class UAInAppMessageButtonInfo extends NSObject {
  static alloc(): UAInAppMessageButtonInfo; // inherited from NSObject

  static buttonInfoWithBuilderBlock(builderBlock: (p1: UAInAppMessageButtonInfoBuilder) => void): UAInAppMessageButtonInfo;

  static new(): UAInAppMessageButtonInfo; // inherited from NSObject

  readonly actions: NSDictionary<any, any>;

  readonly backgroundColor: UIColor;

  readonly behavior: UAInAppMessageButtonInfoBehaviorType;

  readonly borderColor: UIColor;

  readonly borderRadiusPoints: number;

  readonly identifier: string;

  readonly label: UAInAppMessageTextInfo;

  extend(builderBlock: (p1: UAInAppMessageButtonInfoBuilder) => void): UAInAppMessageButtonInfo;
}

declare const enum UAInAppMessageButtonInfoBehaviorType {
  Dismiss = 0,

  Cancel = 1,
}

declare class UAInAppMessageButtonInfoBuilder extends NSObject {
  static alloc(): UAInAppMessageButtonInfoBuilder; // inherited from NSObject

  static new(): UAInAppMessageButtonInfoBuilder; // inherited from NSObject

  actions: NSDictionary<any, any>;

  backgroundColor: UIColor;

  behavior: UAInAppMessageButtonInfoBehaviorType;

  borderColor: UIColor;

  borderRadiusPoints: number;

  identifier: string;

  label: UAInAppMessageTextInfo;

  isValid(): boolean;
}

declare var UAInAppMessageButtonInfoIDLimit: number;

declare var UAInAppMessageButtonLayoutJoinedValue: string;

declare var UAInAppMessageButtonLayoutKey: string;

declare var UAInAppMessageButtonLayoutSeparateValue: string;

declare var UAInAppMessageButtonLayoutStackedValue: string;

declare const enum UAInAppMessageButtonLayoutType {
  Stacked = 0,

  Separate = 1,

  Joined = 2,
}

declare class UAInAppMessageButtonStyle extends NSObject {
  static alloc(): UAInAppMessageButtonStyle; // inherited from NSObject

  static new(): UAInAppMessageButtonStyle; // inherited from NSObject

  static styleWithAdditionalPaddingButtonTextStyleButtonHeightStackedButtonSpacingSeparatedButtonSpacingBorderWidth(additionalPadding: UAPadding, textStyle: UAInAppMessageTextStyle, buttonHeight: number, stackedButtonSpacing: number, separatedButtonSpacing: number, borderWidth: number): UAInAppMessageButtonStyle;

  static styleWithDictionary(buttonStyle: NSDictionary<any, any>): UAInAppMessageButtonStyle;

  additionalPadding: UAPadding;

  borderWidth: number;

  buttonHeight: number;

  buttonTextStyle: UAInAppMessageTextStyle;

  separatedButtonSpacing: number;

  stackedButtonSpacing: number;
}

declare var UAInAppMessageButtonsKey: string;

interface UAInAppMessageCachePolicyDelegate extends NSObjectProtocol {
  shouldCacheOnSchedule(message: UAInAppMessage): boolean;

  shouldPersistCacheAfterDisplay(message: UAInAppMessage): boolean;
}
declare var UAInAppMessageCachePolicyDelegate: {
  prototype: UAInAppMessageCachePolicyDelegate;
};

declare var UAInAppMessageContentLayoutKey: string;

declare class UAInAppMessageCustomDisplayContent extends UAInAppMessageDisplayContent {
  static alloc(): UAInAppMessageCustomDisplayContent; // inherited from NSObject

  static displayContentWithValue(value: NSDictionary<any, any>): UAInAppMessageCustomDisplayContent;

  static new(): UAInAppMessageCustomDisplayContent; // inherited from NSObject

  readonly value: NSDictionary<any, any>;
}

declare class UAInAppMessageDefaultDisplayCoordinator extends NSObject implements UAInAppMessageDisplayCoordinator {
  static alloc(): UAInAppMessageDefaultDisplayCoordinator; // inherited from NSObject

  static coordinator(): UAInAppMessageDefaultDisplayCoordinator;

  static new(): UAInAppMessageDefaultDisplayCoordinator; // inherited from NSObject

  displayInterval: number;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly isReady: boolean; // inherited from UAInAppMessageDisplayCoordinator

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  didBeginDisplayingMessage(message: UAInAppMessage): void;

  didFinishDisplayingMessage(message: UAInAppMessage): void;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

declare class UAInAppMessageDefaultPrepareAssetsDelegate extends NSObject implements UAInAppMessagePrepareAssetsDelegate {
  static alloc(): UAInAppMessageDefaultPrepareAssetsDelegate; // inherited from NSObject

  static new(): UAInAppMessageDefaultPrepareAssetsDelegate; // inherited from NSObject

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  onPrepareAssetsCompletionHandler(message: UAInAppMessage, assets: UAInAppMessageAssets, completionHandler: (p1: UAInAppMessagePrepareResult) => void): void;

  onScheduleAssetsCompletionHandler(message: UAInAppMessage, assets: UAInAppMessageAssets, completionHandler: (p1: UAInAppMessagePrepareResult) => void): void;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

declare var UAInAppMessageDismissButtonColorKey: string;

declare var UAInAppMessageDisplayBehaviorDefault: string;

declare var UAInAppMessageDisplayBehaviorImmediate: string;

declare class UAInAppMessageDisplayContent extends NSObject {
  static alloc(): UAInAppMessageDisplayContent; // inherited from NSObject

  static new(): UAInAppMessageDisplayContent; // inherited from NSObject

  readonly displayType: UAInAppMessageDisplayType;

  toJSON(): NSDictionary<any, any>;
}

interface UAInAppMessageDisplayCoordinator extends NSObjectProtocol {
  isReady: boolean;

  didBeginDisplayingMessage?(message: UAInAppMessage): void;

  didFinishDisplayingMessage?(message: UAInAppMessage): void;
}
declare var UAInAppMessageDisplayCoordinator: {
  prototype: UAInAppMessageDisplayCoordinator;
};

declare var UAInAppMessageDisplayCoordinatorIsReadyKey: string;

declare const enum UAInAppMessageDisplayType {
  Banner = 0,

  FullScreen = 1,

  Modal = 2,

  HTML = 3,

  Custom = 4,

  AirshipLayout = 5,
}

declare var UAInAppMessageDurationKey: string;

declare var UAInAppMessageFooterKey: string;

declare class UAInAppMessageFullScreenAdapter extends NSObject implements UAInAppMessageAdapterProtocol {
  static adapterForMessage(message: UAInAppMessage): UAInAppMessageFullScreenAdapter;

  static alloc(): UAInAppMessageFullScreenAdapter; // inherited from NSObject

  static new(): UAInAppMessageFullScreenAdapter; // inherited from NSObject

  style: UAInAppMessageFullScreenStyle;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  display(completionHandler: (p1: UAInAppMessageResolution) => void): void;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  isReadyToDisplay(): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  prepareWithAssetsCompletionHandler(assets: UAInAppMessageAssets, completionHandler: (p1: UAInAppMessagePrepareResult) => void): void;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

declare const enum UAInAppMessageFullScreenContentLayoutType {
  HeaderMediaBody = 0,

  MediaHeaderBody = 1,

  HeaderBodyMedia = 2,
}

declare class UAInAppMessageFullScreenDisplayContent extends UAInAppMessageDisplayContent {
  static alloc(): UAInAppMessageFullScreenDisplayContent; // inherited from NSObject

  static displayContentWithBuilderBlock(builderBlock: (p1: UAInAppMessageFullScreenDisplayContentBuilder) => void): UAInAppMessageFullScreenDisplayContent;

  static new(): UAInAppMessageFullScreenDisplayContent; // inherited from NSObject

  readonly backgroundColor: UIColor;

  readonly body: UAInAppMessageTextInfo;

  readonly buttonLayout: UAInAppMessageButtonLayoutType;

  readonly buttons: NSArray<UAInAppMessageButtonInfo>;

  readonly contentLayout: UAInAppMessageFullScreenContentLayoutType;

  readonly dismissButtonColor: UIColor;

  readonly footer: UAInAppMessageButtonInfo;

  readonly heading: UAInAppMessageTextInfo;

  readonly media: UAInAppMessageMediaInfo;

  extend(builderBlock: (p1: UAInAppMessageFullScreenDisplayContentBuilder) => void): UAInAppMessageFullScreenDisplayContent;
}

declare class UAInAppMessageFullScreenDisplayContentBuilder extends NSObject {
  static alloc(): UAInAppMessageFullScreenDisplayContentBuilder; // inherited from NSObject

  static new(): UAInAppMessageFullScreenDisplayContentBuilder; // inherited from NSObject

  backgroundColor: UIColor;

  body: UAInAppMessageTextInfo;

  buttonLayout: UAInAppMessageButtonLayoutType;

  buttons: NSArray<UAInAppMessageButtonInfo>;

  contentLayout: UAInAppMessageFullScreenContentLayoutType;

  dismissButtonColor: UIColor;

  footer: UAInAppMessageButtonInfo;

  heading: UAInAppMessageTextInfo;

  media: UAInAppMessageMediaInfo;

  isValid(): boolean;
}

declare var UAInAppMessageFullScreenMaxButtons: number;

declare class UAInAppMessageFullScreenStyle extends NSObject implements UAInAppMessageStyleProtocol {
  static alloc(): UAInAppMessageFullScreenStyle; // inherited from NSObject

  static new(): UAInAppMessageFullScreenStyle; // inherited from NSObject

  static style(): UAInAppMessageFullScreenStyle;

  static styleWithContentsOfFile(path: string): UAInAppMessageFullScreenStyle;

  bodyStyle: UAInAppMessageTextStyle;

  buttonStyle: UAInAppMessageButtonStyle;

  dismissIconResource: string;

  headerStyle: UAInAppMessageTextStyle;

  mediaStyle: UAInAppMessageMediaStyle;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

declare class UAInAppMessageHTMLAdapter extends NSObject implements UAInAppMessageAdapterProtocol {
  static adapterForMessage(message: UAInAppMessage): UAInAppMessageHTMLAdapter;

  static alloc(): UAInAppMessageHTMLAdapter; // inherited from NSObject

  static new(): UAInAppMessageHTMLAdapter; // inherited from NSObject

  style: UAInAppMessageHTMLStyle;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  display(completionHandler: (p1: UAInAppMessageResolution) => void): void;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  isReadyToDisplay(): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  prepareWithAssetsCompletionHandler(assets: UAInAppMessageAssets, completionHandler: (p1: UAInAppMessagePrepareResult) => void): void;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

declare var UAInAppMessageHTMLAllowsFullScreenKey: string;

declare var UAInAppMessageHTMLAspectLockKey: string;

declare class UAInAppMessageHTMLDisplayContent extends UAInAppMessageDisplayContent {
  static alloc(): UAInAppMessageHTMLDisplayContent; // inherited from NSObject

  static displayContentWithBuilderBlock(builderBlock: (p1: UAInAppMessageHTMLDisplayContentBuilder) => void): UAInAppMessageHTMLDisplayContent;

  static new(): UAInAppMessageHTMLDisplayContent; // inherited from NSObject

  readonly allowFullScreenDisplay: boolean;

  readonly aspectLock: boolean;

  readonly backgroundColor: UIColor;

  readonly borderRadiusPoints: number;

  readonly dismissButtonColor: UIColor;

  readonly height: number;

  readonly requireConnectivity: boolean;

  readonly url: string;

  readonly width: number;

  extend(builderBlock: (p1: UAInAppMessageHTMLDisplayContentBuilder) => void): UAInAppMessageHTMLDisplayContent;
}

declare class UAInAppMessageHTMLDisplayContentBuilder extends NSObject {
  static alloc(): UAInAppMessageHTMLDisplayContentBuilder; // inherited from NSObject

  static new(): UAInAppMessageHTMLDisplayContentBuilder; // inherited from NSObject

  allowFullScreenDisplay: boolean;

  aspectLock: boolean;

  backgroundColor: UIColor;

  borderRadiusPoints: number;

  dismissButtonColor: UIColor;

  height: number;

  requiresConnectivity: boolean;

  url: string;

  width: number;

  isValid(): boolean;
}

declare var UAInAppMessageHTMLHeightKey: string;

declare var UAInAppMessageHTMLRequireConnectivityKey: string;

declare class UAInAppMessageHTMLStyle extends NSObject implements UAInAppMessageStyleProtocol {
  static alloc(): UAInAppMessageHTMLStyle; // inherited from NSObject

  static new(): UAInAppMessageHTMLStyle; // inherited from NSObject

  static style(): UAInAppMessageHTMLStyle;

  static styleWithContentsOfFile(path: string): UAInAppMessageHTMLStyle;

  additionalPadding: UAPadding;

  aspectRatio: number;

  dismissIconResource: string;

  extendFullScreenLargeDevice: boolean;

  hideDismissIcon: boolean;

  maxHeight: number;

  maxWidth: number;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

declare var UAInAppMessageHTMLWidthKey: string;

declare var UAInAppMessageHeadingKey: string;

declare class UAInAppMessageImmediateDisplayCoordinator extends NSObject implements UAInAppMessageDisplayCoordinator {
  static alloc(): UAInAppMessageImmediateDisplayCoordinator; // inherited from NSObject

  static coordinator(): UAInAppMessageImmediateDisplayCoordinator;

  static new(): UAInAppMessageImmediateDisplayCoordinator; // inherited from NSObject

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly isReady: boolean; // inherited from UAInAppMessageDisplayCoordinator

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  didBeginDisplayingMessage(message: UAInAppMessage): void;

  didFinishDisplayingMessage(message: UAInAppMessage): void;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

declare class UAInAppMessageManager extends NSObject {
  static alloc(): UAInAppMessageManager; // inherited from NSObject

  static new(): UAInAppMessageManager; // inherited from NSObject

  readonly assetManager: UAInAppMessageAssetManager;

  delegate: UAInAppMessagingDelegate;

  displayInterval: number;

  notifyDisplayConditionsChanged(): void;

  setFactoryBlockForDisplayType(factory: (p1: UAInAppMessage) => UAInAppMessageAdapterProtocol, displayType: UAInAppMessageDisplayType): void;
}

declare class UAInAppMessageMediaInfo extends NSObject {
  static alloc(): UAInAppMessageMediaInfo; // inherited from NSObject

  static mediaInfoWithURLContentDescriptionType(url: string, contentDescription: string, type: UAInAppMessageMediaInfoType): UAInAppMessageMediaInfo;

  static new(): UAInAppMessageMediaInfo; // inherited from NSObject

  readonly contentDescription: string;

  readonly type: UAInAppMessageMediaInfoType;

  readonly url: string;
}

declare const enum UAInAppMessageMediaInfoType {
  Image = 0,

  Video = 1,

  YouTube = 2,
}

declare var UAInAppMessageMediaKey: string;

declare class UAInAppMessageMediaStyle extends NSObject {
  static alloc(): UAInAppMessageMediaStyle; // inherited from NSObject

  static new(): UAInAppMessageMediaStyle; // inherited from NSObject

  static styleWithAdditionalPadding(additionalPadding: UAPadding): UAInAppMessageMediaStyle;

  static styleWithDictionary(mediaStyleDict: NSDictionary<any, any>): UAInAppMessageMediaStyle;

  additionalPadding: UAPadding;
}

declare class UAInAppMessageModalAdapter extends NSObject implements UAInAppMessageAdapterProtocol {
  static adapterForMessage(message: UAInAppMessage): UAInAppMessageModalAdapter;

  static alloc(): UAInAppMessageModalAdapter; // inherited from NSObject

  static new(): UAInAppMessageModalAdapter; // inherited from NSObject

  style: UAInAppMessageModalStyle;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  display(completionHandler: (p1: UAInAppMessageResolution) => void): void;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  isReadyToDisplay(): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  prepareWithAssetsCompletionHandler(assets: UAInAppMessageAssets, completionHandler: (p1: UAInAppMessagePrepareResult) => void): void;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

declare var UAInAppMessageModalAllowsFullScreenKey: string;

declare const enum UAInAppMessageModalContentLayoutType {
  HeaderMediaBody = 0,

  MediaHeaderBody = 1,

  HeaderBodyMedia = 2,
}

declare class UAInAppMessageModalDisplayContent extends UAInAppMessageDisplayContent {
  static alloc(): UAInAppMessageModalDisplayContent; // inherited from NSObject

  static displayContentWithBuilderBlock(builderBlock: (p1: UAInAppMessageModalDisplayContentBuilder) => void): UAInAppMessageModalDisplayContent;

  static new(): UAInAppMessageModalDisplayContent; // inherited from NSObject

  readonly allowFullScreenDisplay: boolean;

  readonly backgroundColor: UIColor;

  readonly body: UAInAppMessageTextInfo;

  readonly borderRadiusPoints: number;

  readonly buttonLayout: UAInAppMessageButtonLayoutType;

  readonly buttons: NSArray<UAInAppMessageButtonInfo>;

  readonly contentLayout: UAInAppMessageModalContentLayoutType;

  readonly dismissButtonColor: UIColor;

  readonly footer: UAInAppMessageButtonInfo;

  readonly heading: UAInAppMessageTextInfo;

  readonly media: UAInAppMessageMediaInfo;

  extend(builderBlock: (p1: UAInAppMessageModalDisplayContentBuilder) => void): UAInAppMessageModalDisplayContent;
}

declare class UAInAppMessageModalDisplayContentBuilder extends NSObject {
  static alloc(): UAInAppMessageModalDisplayContentBuilder; // inherited from NSObject

  static new(): UAInAppMessageModalDisplayContentBuilder; // inherited from NSObject

  allowFullScreenDisplay: boolean;

  backgroundColor: UIColor;

  body: UAInAppMessageTextInfo;

  borderRadiusPoints: number;

  buttonLayout: UAInAppMessageButtonLayoutType;

  buttons: NSArray<UAInAppMessageButtonInfo>;

  contentLayout: UAInAppMessageModalContentLayoutType;

  dismissButtonColor: UIColor;

  footer: UAInAppMessageButtonInfo;

  heading: UAInAppMessageTextInfo;

  media: UAInAppMessageMediaInfo;

  isValid(): boolean;
}

declare var UAInAppMessageModalMaxButtons: number;

declare class UAInAppMessageModalStyle extends NSObject implements UAInAppMessageStyleProtocol {
  static alloc(): UAInAppMessageModalStyle; // inherited from NSObject

  static new(): UAInAppMessageModalStyle; // inherited from NSObject

  static style(): UAInAppMessageModalStyle;

  static styleWithContentsOfFile(path: string): UAInAppMessageModalStyle;

  additionalPadding: UAPadding;

  aspectRatio: number;

  bodyStyle: UAInAppMessageTextStyle;

  buttonStyle: UAInAppMessageButtonStyle;

  dismissIconResource: string;

  extendFullScreenLargeDevice: boolean;

  headerStyle: UAInAppMessageTextStyle;

  maxHeight: number;

  maxWidth: number;

  mediaStyle: UAInAppMessageMediaStyle;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

declare var UAInAppMessageNameLimit: number;

declare var UAInAppMessagePlacementKey: string;

interface UAInAppMessagePrepareAssetsDelegate extends NSObjectProtocol {
  onPrepareAssetsCompletionHandler(message: UAInAppMessage, assets: UAInAppMessageAssets, completionHandler: (p1: UAInAppMessagePrepareResult) => void): void;

  onScheduleAssetsCompletionHandler(message: UAInAppMessage, assets: UAInAppMessageAssets, completionHandler: (p1: UAInAppMessagePrepareResult) => void): void;
}
declare var UAInAppMessagePrepareAssetsDelegate: {
  prototype: UAInAppMessagePrepareAssetsDelegate;
};

declare const enum UAInAppMessagePrepareResult {
  Success = 0,

  Retry = 1,

  Cancel = 2,

  Invalidate = 3,
}

declare class UAInAppMessageResolution extends NSObject {
  static alloc(): UAInAppMessageResolution; // inherited from NSObject

  static buttonClickResolutionWithButtonInfo(buttonInfo: UAInAppMessageButtonInfo): UAInAppMessageResolution;

  static messageClickResolution(): UAInAppMessageResolution;

  static new(): UAInAppMessageResolution; // inherited from NSObject

  static timedOutResolution(): UAInAppMessageResolution;

  static userDismissedResolution(): UAInAppMessageResolution;

  readonly buttonInfo: UAInAppMessageButtonInfo;

  readonly type: UAInAppMessageResolutionType;
}

declare const enum UAInAppMessageResolutionType {
  ButtonClick = 0,

  MessageClick = 1,

  UserDismissed = 2,

  TimedOut = 3,
}

interface UAInAppMessageSceneDelegate extends NSObjectProtocol {
  sceneForMessageDefaultScene?(message: UAInAppMessage, defaultScene: UIWindowScene): UIWindowScene;
}
declare var UAInAppMessageSceneDelegate: {
  prototype: UAInAppMessageSceneDelegate;
};

declare class UAInAppMessageSceneManager extends NSObject {
  static alloc(): UAInAppMessageSceneManager; // inherited from NSObject

  static new(): UAInAppMessageSceneManager; // inherited from NSObject

  delegate: UAInAppMessageSceneDelegate;

  static readonly shared: UAInAppMessageSceneManager;

  sceneForMessage(message: UAInAppMessage): UIWindowScene;
}

declare class UAInAppMessageSchedule extends UASchedule {
  static alloc(): UAInAppMessageSchedule; // inherited from NSObject

  static new(): UAInAppMessageSchedule; // inherited from NSObject

  static scheduleWithMessageBuilderBlock(message: UAInAppMessage, builderBlock: (p1: UAScheduleBuilder) => void): UAInAppMessageSchedule;

  readonly message: UAInAppMessage;
}

interface UAInAppMessageStyleProtocol extends NSObjectProtocol {}
declare var UAInAppMessageStyleProtocol: {
  prototype: UAInAppMessageStyleProtocol;

  style(): UAInAppMessageStyleProtocol;

  styleWithContentsOfFile(path: string): UAInAppMessageStyleProtocol;
};

declare class UAInAppMessageTextInfo extends NSObject {
  static alloc(): UAInAppMessageTextInfo; // inherited from NSObject

  static new(): UAInAppMessageTextInfo; // inherited from NSObject

  static textInfoWithBuilderBlock(builderBlock: (p1: UAInAppMessageTextInfoBuilder) => void): UAInAppMessageTextInfo;

  readonly alignment: UAInAppMessageTextInfoAlignmentType;

  readonly color: UIColor;

  readonly fontFamilies: NSArray<string>;

  readonly sizePoints: number;

  readonly style: UAInAppMessageTextInfoStyleType;

  readonly text: string;

  extend(builderBlock: (p1: UAInAppMessageTextInfoBuilder) => void): UAInAppMessageTextInfo;
}

declare const enum UAInAppMessageTextInfoAlignmentType {
  None = 0,

  Left = 1,

  Center = 2,

  Right = 3,
}

declare class UAInAppMessageTextInfoBuilder extends NSObject {
  static alloc(): UAInAppMessageTextInfoBuilder; // inherited from NSObject

  static new(): UAInAppMessageTextInfoBuilder; // inherited from NSObject

  alignment: UAInAppMessageTextInfoAlignmentType;

  color: UIColor;

  fontFamilies: NSArray<string>;

  sizePoints: number;

  style: UAInAppMessageTextInfoStyleType;

  text: string;

  isValid(): boolean;
}

declare const enum UAInAppMessageTextInfoStyleType {
  Normal = 0,

  Bold = 1,

  Italic = 2,

  Underline = 4,
}

declare class UAInAppMessageTextStyle extends NSObject {
  static alloc(): UAInAppMessageTextStyle; // inherited from NSObject

  static new(): UAInAppMessageTextStyle; // inherited from NSObject

  static styleWithAdditionalPaddingLetterSpacingLineSpacing(additionalPadding: UAPadding, letterSpacing: number, lineSpacing: number): UAInAppMessageTextStyle;

  static styleWithDictionary(textStyle: NSDictionary<any, any>): UAInAppMessageTextStyle;

  additionalPadding: UAPadding;

  letterSpacing: number;

  lineSpacing: number;
}

declare var UAInAppMessageURLKey: string;

interface UAInAppMessagingDelegate extends NSObjectProtocol {
  displayCoordinatorForMessage?(message: UAInAppMessage): UAInAppMessageDisplayCoordinator;

  extendMessage?(message: UAInAppMessage): UAInAppMessage;

  isMessageReadyForDisplay?(message: UAInAppMessage): boolean;

  messageFinishedDisplayingScheduleIDResolution?(message: UAInAppMessage, scheduleID: string, resolution: UAInAppMessageResolution): void;

  messageWillBeDisplayedScheduleID?(message: UAInAppMessage, scheduleID: string): void;

  sceneForMessageDefaultScene?(message: UAInAppMessage, defaultScene: UIWindowScene): UIWindowScene;
}
declare var UAInAppMessagingDelegate: {
  prototype: UAInAppMessagingDelegate;
};

declare class UAInstallAttributionEvent extends NSObject implements UAEvent {
  static alloc(): UAInstallAttributionEvent; // inherited from NSObject

  static event(): UAInstallAttributionEvent;

  static eventWithAppPurchaseDateIAdImpressionDate(appPurchaseDate: Date, iAdImpressionDate: Date): UAInstallAttributionEvent;

  static new(): UAInstallAttributionEvent; // inherited from NSObject

  readonly data: NSDictionary<any, any>; // inherited from UAEvent

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly eventType: string; // inherited from UAEvent

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly priority: UAEventPriority; // inherited from UAEvent

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  constructor(o: { appPurchaseDate: Date; iAdImpressionDate: Date });

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  initWithAppPurchaseDateIAdImpressionDate(appPurchaseDate: Date, iAdImpressionDate: Date): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  isValid(): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

declare class UAInteractiveNotificationEvent extends NSObject implements UAEvent {
  static alloc(): UAInteractiveNotificationEvent; // inherited from NSObject

  static new(): UAInteractiveNotificationEvent; // inherited from NSObject

  readonly data: NSDictionary<any, any>; // inherited from UAEvent

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly eventType: string; // inherited from UAEvent

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly priority: UAEventPriority; // inherited from UAEvent

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  constructor(o: { action: UNNotificationAction; category: string; notification: NSDictionary<any, any>; responseText: string });

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  initWithActionCategoryNotificationResponseText(action: UNNotificationAction, category: string, notification: NSDictionary<any, any>, responseText: string): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  isValid(): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

declare class UAJSONMatcher extends NSObject {
  static alloc(): UAJSONMatcher; // inherited from NSObject

  static new(): UAJSONMatcher; // inherited from NSObject

  constructor(o: { JSON: any });

  constructor(o: { valueMatcher: UAJSONValueMatcher });

  constructor(o: { valueMatcher: UAJSONValueMatcher; ignoreCase: boolean });

  constructor(o: { valueMatcher: UAJSONValueMatcher; key: string });

  constructor(o: { valueMatcher: UAJSONValueMatcher; key: string; scope: NSArray<string> | string[] });

  constructor(o: { valueMatcher: UAJSONValueMatcher; scope: NSArray<string> | string[] });

  constructor(o: { valueMatcher: UAJSONValueMatcher; scope: NSArray<string> | string[]; ignoreCase: boolean });

  evaluateObject(value: any): boolean;

  evaluateObjectIgnoreCase(value: any, ignoreCase: boolean): boolean;

  initWithJSONError(json: any): this;

  initWithValueMatcher(valueMatcher: UAJSONValueMatcher): this;

  initWithValueMatcherIgnoreCase(valueMatcher: UAJSONValueMatcher, ignoreCase: boolean): this;

  initWithValueMatcherKey(valueMatcher: UAJSONValueMatcher, key: string): this;

  initWithValueMatcherKeyScope(valueMatcher: UAJSONValueMatcher, key: string, scope: NSArray<string> | string[]): this;

  initWithValueMatcherScope(valueMatcher: UAJSONValueMatcher, scope: NSArray<string> | string[]): this;

  initWithValueMatcherScopeIgnoreCase(valueMatcher: UAJSONValueMatcher, scope: NSArray<string> | string[], ignoreCase: boolean): this;

  isEqualToJSONMatcher(matcher: UAJSONMatcher): boolean;

  payload(): NSDictionary<string, any>;
}

declare class UAJSONPredicate extends NSObject {
  static alloc(): UAJSONPredicate; // inherited from NSObject

  static andPredicateWithSubpredicates(subpredicates: NSArray<UAJSONPredicate> | UAJSONPredicate[]): UAJSONPredicate;

  static new(): UAJSONPredicate; // inherited from NSObject

  static notPredicateWithSubpredicate(subpredicate: UAJSONPredicate): UAJSONPredicate;

  static orPredicateWithSubpredicates(subpredicates: NSArray<UAJSONPredicate> | UAJSONPredicate[]): UAJSONPredicate;

  constructor(o: { JSON: any });

  constructor(o: { JSONMatcher: UAJSONMatcher });

  evaluateObject(object: any): boolean;

  initWithJSONError(json: any): this;

  initWithJSONMatcher(matcher: UAJSONMatcher): this;

  payload(): NSDictionary<string, any>;
}

declare class UAJSONUtils extends NSObject {
  static alloc(): UAJSONUtils; // inherited from NSObject

  static dataWithObjectOptionsError(obj: any, options: NSJSONWritingOptions): NSData;

  static new(): UAJSONUtils; // inherited from NSObject

  static objectWithString(string: string): any;

  static objectWithStringOptionsError(string: string, options: NSJSONReadingOptions): any;

  static stringWithObject(obj: any): string;

  static stringWithObjectOptionsError(obj: any, options: NSJSONWritingOptions): string;
}

declare class UAJSONValueMatcher extends NSObject {
  static alloc(): UAJSONValueMatcher; // inherited from NSObject

  static matcherWhereBooleanEquals(boolean: boolean): UAJSONValueMatcher;

  static matcherWhereNumberAtLeast(number: number): UAJSONValueMatcher;

  static matcherWhereNumberAtLeastAtMost(lowerNumber: number, higherNumber: number): UAJSONValueMatcher;

  static matcherWhereNumberAtMost(number: number): UAJSONValueMatcher;

  static matcherWhereNumberEquals(number: number): UAJSONValueMatcher;

  static matcherWhereStringEquals(string: string): UAJSONValueMatcher;

  static matcherWhereValueIsPresent(present: boolean): UAJSONValueMatcher;

  static matcherWithArrayContainsPredicate(predicate: UAJSONPredicate): UAJSONValueMatcher;

  static matcherWithArrayContainsPredicateAtIndex(predicate: UAJSONPredicate, index: number): UAJSONValueMatcher;

  static matcherWithJSONError(json: any): UAJSONValueMatcher;

  static matcherWithVersionConstraint(versionConstraint: string): UAJSONValueMatcher;

  static new(): UAJSONValueMatcher; // inherited from NSObject

  evaluateObject(value: any): boolean;

  evaluateObjectIgnoreCase(value: any, ignoreCase: boolean): boolean;

  payload(): NSDictionary<string, any>;

  valueIsEqualToValueIgnoreCase(valueOne: any, valueTwo: any, ignoreCase: boolean): boolean;
}

declare class UAJSONValueTransformer extends NSValueTransformer {
  static alloc(): UAJSONValueTransformer; // inherited from NSObject

  static new(): UAJSONValueTransformer; // inherited from NSObject
}

declare class UAJavaScriptCommand extends NSObject {
  static alloc(): UAJavaScriptCommand; // inherited from NSObject

  static new(): UAJavaScriptCommand; // inherited from NSObject

  readonly URL: NSURL;

  readonly arguments: NSArray<string>;

  readonly name: string;

  readonly options: NSDictionary<string, NSArray<string>>;

  constructor(o: { URL: NSURL });

  initWithURL(url: NSURL): this;
}

interface UAJavaScriptCommandDelegate {
  performCommandWebView(command: UAJavaScriptCommand, webView: WKWebView): boolean;
}
declare var UAJavaScriptCommandDelegate: {
  prototype: UAJavaScriptCommandDelegate;
};

declare class UAJavaScriptEnvironment extends NSObject implements UAJavaScriptEnvironmentProtocol {
  static alloc(): UAJavaScriptEnvironment; // inherited from NSObject

  static new(): UAJavaScriptEnvironment; // inherited from NSObject

  addDictionaryGetterValue(getter: string, dictionary: NSDictionary<any, any>): void;

  addNumberGetterValue(getter: string, number: number): void;

  addStringGetterValue(getter: string, string: string): void;

  buildWithCompletionHandler(completionHandler: (p1: string) => void): void;
}

interface UAJavaScriptEnvironmentProtocol {
  addDictionaryGetterValue(getter: string, dictionary: NSDictionary<any, any>): void;

  addNumberGetterValue(getter: string, number: number): void;

  addStringGetterValue(getter: string, string: string): void;

  buildWithCompletionHandler(completionHandler: (p1: string) => void): void;
}
declare var UAJavaScriptEnvironmentProtocol: {
  prototype: UAJavaScriptEnvironmentProtocol;
};

declare class UALandingPageAction extends NSObject implements UALegacyAction {
  static alloc(): UALandingPageAction; // inherited from NSObject

  static new(): UALandingPageAction; // inherited from NSObject

  borderRadiusPoints: number;

  builderExtender: UALandingPageBuilderExtender;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly defaultNames: NSArray<string>; // inherited from UALegacyAction

  readonly defaultPredicate: (p1: any, p2: number) => boolean; // inherited from UALegacyAction

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  acceptsArgumentValueSituation(_arguments: any, situation: number): boolean;

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  performWithArgumentValueSituationPushUserInfoCompletionHandler(argument: any, situation: number, pushUserInfo: NSDictionary<any, any>, completionHandler: () => void): void;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

declare var UALandingPageActionDefaultRegistryAlias: string;

declare var UALandingPageActionDefaultRegistryName: string;

declare var UALandingPageAspectLockKey: string;

interface UALandingPageBuilderExtender extends NSObjectProtocol {
  extendMessageBuilder?(builder: UAInAppMessageBuilder): void;

  extendScheduleBuilder?(builder: UAScheduleBuilder): void;
}
declare var UALandingPageBuilderExtender: {
  prototype: UALandingPageBuilderExtender;
};

declare var UALandingPageDefaultBorderRadiusPoints: number;

declare var UALandingPageHeightKey: string;

declare var UALandingPageURLKey: string;

declare var UALandingPageWidthKey: string;

interface UALegacyAction extends NSObjectProtocol {
  defaultNames: NSArray<string>;

  defaultPredicate: (p1: any, p2: number) => boolean;

  acceptsArgumentValueSituation(_arguments: any, situation: number): boolean;

  performWithArgumentValueSituationPushUserInfoCompletionHandler(argument: any, situation: number, pushUserInfo: NSDictionary<any, any>, completionHandler: () => void): void;
}
declare var UALegacyAction: {
  prototype: UALegacyAction;
};

declare class UALegacyInAppMessage extends NSObject {
  static alloc(): UALegacyInAppMessage; // inherited from NSObject

  static message(): UALegacyInAppMessage;

  static messageWithPayload(payload: NSDictionary<any, any>): UALegacyInAppMessage;

  static new(): UALegacyInAppMessage; // inherited from NSObject

  alert: string;

  buttonActions: NSDictionary<any, any>;

  readonly buttonCategory: UNNotificationCategory;

  buttonGroup: string;

  displayType: UALegacyInAppMessageDisplayType;

  duration: number;

  expiry: Date;

  extra: NSDictionary<any, any>;

  identifier: string;

  readonly notificationActions: NSArray<any>;

  onClick: NSDictionary<any, any>;

  readonly payload: NSDictionary<any, any>;

  position: UALegacyInAppMessagePosition;

  primaryColor: UIColor;

  secondaryColor: UIColor;

  isEqualToMessage(message: UALegacyInAppMessage): boolean;
}

interface UALegacyInAppMessageBuilderExtender extends NSObjectProtocol {
  extendMessageBuilderMessage?(builder: UAInAppMessageBuilder, message: UALegacyInAppMessage): void;

  extendScheduleBuilderMessage?(builder: UAScheduleBuilder, message: UALegacyInAppMessage): void;
}
declare var UALegacyInAppMessageBuilderExtender: {
  prototype: UALegacyInAppMessageBuilderExtender;
};

declare const enum UALegacyInAppMessageDisplayType {
  Banner = 0,
}

interface UALegacyInAppMessageFactoryDelegate extends NSObjectProtocol {
  scheduleForMessage(message: UALegacyInAppMessage): UASchedule;
}
declare var UALegacyInAppMessageFactoryDelegate: {
  prototype: UALegacyInAppMessageFactoryDelegate;
};

declare const enum UALegacyInAppMessagePosition {
  Top = 0,

  Bottom = 1,
}

declare class UALegacyInAppMessaging extends NSObject implements UAComponent, UALegacyInAppMessageFactoryDelegate {
  static alloc(): UALegacyInAppMessaging; // inherited from NSObject

  static new(): UALegacyInAppMessaging; // inherited from NSObject

  builderExtender: UALegacyInAppMessageBuilderExtender;

  displayASAPEnabled: boolean;

  factoryDelegate: UALegacyInAppMessageFactoryDelegate;

  static readonly shared: UALegacyInAppMessaging;

  componentEnabled: boolean; // inherited from UAComponent

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  airshipReady(): void;

  applyRemoteConfig(config: any): void;

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  deepLink(deepLink: NSURL): boolean;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  scheduleForMessage(message: UALegacyInAppMessage): UASchedule;

  self(): this;
}

declare class UALegacyLoggingBridge extends NSObject {
  static alloc(): UALegacyLoggingBridge; // inherited from NSObject

  static logWithLevelFunctionLineMessage(level: number, _function: string, line: number, messageBlock: () => string): void;

  static new(): UALegacyLoggingBridge; // inherited from NSObject

  static logger: (p1: number, p2: string, p3: number, p4: () => string) => void;
}

interface UALegacySDKModule extends NSObjectProtocol {
  actions?(): NSArray<UALegacyAction>;

  components?(): NSArray<UAComponent>;
}
declare var UALegacySDKModule: {
  prototype: UALegacySDKModule;

  loadWithDependencies(dependencies: NSDictionary<any, any>): UALegacySDKModule;
};

declare var UALineSpacingKey: string;

declare class UALocaleManager extends NSObject implements UALocaleManagerProtocol {
  static alloc(): UALocaleManager; // inherited from NSObject

  static new(): UALocaleManager; // inherited from NSObject

  currentLocale: NSLocale;

  static readonly localeEventKey: string;

  static readonly localeUpdatedEvent: string;

  clearLocale(): void;
}

interface UALocaleManagerProtocol {
  currentLocale: NSLocale;

  clearLocale(): void;
}
declare var UALocaleManagerProtocol: {
  prototype: UALocaleManagerProtocol;
};

declare class UALocalizationUtils extends NSObject {
  static alloc(): UALocalizationUtils; // inherited from NSObject

  static localizedStringExistsInTableModuleBundle(string: string, table: string, moduleBundle: NSBundle): boolean;

  static localizedStringExistsInTableModuleBundleFallbackLocale(string: string, table: string, moduleBundle: NSBundle, fallbackLocale: string): boolean;

  static localizedStringWithTableModuleBundle(string: string, table: string, moduleBundle: NSBundle): string;

  static localizedStringWithTableModuleBundleDefaultValue(string: string, table: string, moduleBundle: NSBundle, defaultValue: string): string;

  static localizedStringWithTableModuleBundleFallbackLocale(string: string, table: string, moduleBundle: NSBundle, fallbackLocale: string): string;

  static new(): UALocalizationUtils; // inherited from NSObject
}

declare const enum UALogLevel {
  Undefined = -1,

  None = 0,

  Error = 1,

  Warn = 2,

  Info = 3,

  Debug = 4,

  Verbose = 5,
}

declare class UAMediaEventTemplate extends NSObject {
  static alloc(): UAMediaEventTemplate; // inherited from NSObject

  static browsedTemplate(): UAMediaEventTemplate;

  static consumedTemplate(): UAMediaEventTemplate;

  static consumedTemplateWithValue(value: number): UAMediaEventTemplate;

  static consumedTemplateWithValueFromString(valueString: string): UAMediaEventTemplate;

  static new(): UAMediaEventTemplate; // inherited from NSObject

  static sharedTemplate(): UAMediaEventTemplate;

  static sharedTemplateWithSourceWithMedium(source: string, medium: string): UAMediaEventTemplate;

  static starredTemplate(): UAMediaEventTemplate;

  author: string;

  category: string;

  eventDescription: string;

  identifier: string;

  isFeature: boolean;

  publishedDate: string;

  type: string;

  createEvent(): UACustomEvent;
}

declare class UAMessageCenter extends NSObject implements UAComponent, UAPushableComponent {
  static alloc(): UAMessageCenter; // inherited from NSObject

  static new(): UAMessageCenter; // inherited from NSObject

  displayDelegate: UAMessageCenterDisplayDelegate;

  inbox: UAMessageCenterInbox;

  static readonly shared: UAMessageCenter;

  componentEnabled: boolean; // inherited from UAComponent

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  airshipReady(): void;

  applyRemoteConfig(config: any): void;

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  deepLink(deepLink: NSURL): boolean;

  dismiss(): void;

  display(): void;

  displayWithMessageID(messageID: string): void;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  presentationOptionsForNotificationDefaultPresentationOptions(notification: UNNotification, options: UNNotificationPresentationOptions): UNNotificationPresentationOptions;

  receivedNotificationResponseCompletionHandler(response: UNNotificationResponse, completionHandler: () => void): void;

  receivedRemoteNotificationCompletionHandler(notification: NSDictionary<any, any>, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  setThemeFromPlistError(plist: string): boolean;
}

declare class UAMessageCenterController extends NSObject {
  static alloc(): UAMessageCenterController; // inherited from NSObject

  static new(): UAMessageCenterController; // inherited from NSObject

  navigateWithMessageID(messageID: string): void;
}

interface UAMessageCenterDisplayDelegate {
  dismissMessageCenter(): void;

  displayMessageCenter(): void;

  displayMessageCenterForMessageID(messageID: string): void;
}
declare var UAMessageCenterDisplayDelegate: {
  prototype: UAMessageCenterDisplayDelegate;
};

declare class UAMessageCenterInbox extends NSObject {
  static alloc(): UAMessageCenterInbox; // inherited from NSObject

  static new(): UAMessageCenterInbox; // inherited from NSObject

  deleteWithMessageIDsCompletionHandler(messageIDs: NSArray<string> | string[], completionHandler: () => void): void;

  deleteWithMessagesCompletionHandler(messages: NSArray<UAMessageCenterMessage> | UAMessageCenterMessage[], completionHandler: () => void): void;

  getMessagesWithCompletionHandler(completionHandler: (p1: NSArray<UAMessageCenterMessage>) => void): void;

  getUnreadCountWithCompletionHandler(completionHandler: (p1: number) => void): void;

  getUserWithCompletionHandler(completionHandler: (p1: UAMessageCenterUser) => void): void;

  markReadWithMessageIDsCompletionHandler(messageIDs: NSArray<string> | string[], completionHandler: () => void): void;

  markReadWithMessagesCompletionHandler(messages: NSArray<UAMessageCenterMessage> | UAMessageCenterMessage[], completionHandler: () => void): void;

  messageForBodyURLCompletionHandler(bodyURL: NSURL, completionHandler: (p1: UAMessageCenterMessage) => void): void;

  messageForIDCompletionHandler(messageID: string, completionHandler: (p1: UAMessageCenterMessage) => void): void;

  refreshMessagesWithCompletionHandler(completionHandler: (p1: boolean) => void): void;
}

interface UAMessageCenterInboxBaseProtocol {
  deleteWithMessageIDsCompletionHandler(messageIDs: NSArray<string> | string[], completionHandler: () => void): void;

  deleteWithMessagesCompletionHandler(messages: NSArray<UAMessageCenterMessage> | UAMessageCenterMessage[], completionHandler: () => void): void;

  getMessagesWithCompletionHandler(completionHandler: (p1: NSArray<UAMessageCenterMessage>) => void): void;

  getUnreadCountWithCompletionHandler(completionHandler: (p1: number) => void): void;

  getUserWithCompletionHandler(completionHandler: (p1: UAMessageCenterUser) => void): void;

  markReadWithMessageIDsCompletionHandler(messageIDs: NSArray<string> | string[], completionHandler: () => void): void;

  markReadWithMessagesCompletionHandler(messages: NSArray<UAMessageCenterMessage> | UAMessageCenterMessage[], completionHandler: () => void): void;

  messageForBodyURLCompletionHandler(bodyURL: NSURL, completionHandler: (p1: UAMessageCenterMessage) => void): void;

  messageForIDCompletionHandler(messageID: string, completionHandler: (p1: UAMessageCenterMessage) => void): void;

  refreshMessagesWithCompletionHandler(completionHandler: (p1: boolean) => void): void;
}
declare var UAMessageCenterInboxBaseProtocol: {
  prototype: UAMessageCenterInboxBaseProtocol;
};

declare class UAMessageCenterMessage extends NSObject {
  static alloc(): UAMessageCenterMessage; // inherited from NSObject

  static new(): UAMessageCenterMessage; // inherited from NSObject

  static parseMessageIDWithUserInfo(userInfo: NSDictionary<any, any>): string;

  readonly bodyURL: NSURL;

  readonly expirationDate: Date;

  readonly extra: NSDictionary<string, string>;

  readonly id: string;

  readonly isExpired: boolean;

  readonly listIcon: string;

  readonly sentDate: Date;

  readonly subtitle: string;

  readonly title: string;

  readonly unread: boolean;
}

declare class UAMessageCenterNativeBridgeExtension extends NSObject implements UANativeBridgeExtensionDelegate {
  static alloc(): UAMessageCenterNativeBridgeExtension; // inherited from NSObject

  static new(): UAMessageCenterNativeBridgeExtension; // inherited from NSObject

  constructor(o: { message: UAMessageCenterMessage; user: UAMessageCenterUser });

  actionsMetadataForCommandWebView(command: UAJavaScriptCommand, webView: WKWebView): NSDictionary<string, string>;

  extendJavaScriptEnvironmentWebViewCompletionHandler(js: UAJavaScriptEnvironmentProtocol, webView: WKWebView, completionHandler: () => void): void;

  initWithMessageUser(message: UAMessageCenterMessage, user: UAMessageCenterUser): this;
}

declare class UAMessageCenterSDKModule extends NSObject {
  static alloc(): UAMessageCenterSDKModule; // inherited from NSObject

  static new(): UAMessageCenterSDKModule; // inherited from NSObject
}

declare class UAMessageCenterUser extends NSObject {
  static alloc(): UAMessageCenterUser; // inherited from NSObject

  static new(): UAMessageCenterUser; // inherited from NSObject

  readonly basicAuthString: string;

  readonly password: string;

  readonly username: string;
}

declare class UAMessageCenterViewController extends NSObject {
  static alloc(): UAMessageCenterViewController; // inherited from NSObject

  static makeWithThemePlistControllerErrorDismissAction(themePlist: string, controller: UAMessageCenterController, error: interop.Pointer | interop.Reference<NSError>, dismissAction: () => void): UIViewController;

  static new(): UAMessageCenterViewController; // inherited from NSObject
}

declare var UAModalAdditionalPaddingKey: string;

declare var UAModalAspectRatioKey: string;

declare var UAModalBodyStyleKey: string;

declare var UAModalButtonStyleKey: string;

declare var UAModalDismissIconResourceKey: string;

declare var UAModalHeaderStyleKey: string;

declare var UAModalMaxHeightKey: string;

declare var UAModalMaxWidthKey: string;

declare var UAModalMediaStyleKey: string;

declare var UAModalStyleFileName: string;

declare var UAModalTextStyleKey: string;

declare class UANSArrayValueTransformer extends NSValueTransformer {
  static alloc(): UANSArrayValueTransformer; // inherited from NSObject

  static new(): UANSArrayValueTransformer; // inherited from NSObject
}

declare class UANSDictionaryValueTransformer extends NSValueTransformer {
  static alloc(): UANSDictionaryValueTransformer; // inherited from NSObject

  static new(): UANSDictionaryValueTransformer; // inherited from NSObject
}

declare class UANSURLValueTransformer extends NSValueTransformer {
  static alloc(): UANSURLValueTransformer; // inherited from NSObject

  static new(): UANSURLValueTransformer; // inherited from NSObject
}

declare class UANativeBridge extends NSObject implements WKNavigationDelegate {
  static alloc(): UANativeBridge; // inherited from NSObject

  static new(): UANativeBridge; // inherited from NSObject

  forwardNavigationDelegate: UANavigationDelegate;

  javaScriptCommandDelegate: UAJavaScriptCommandDelegate;

  nativeBridgeDelegate: UANativeBridgeDelegate;

  nativeBridgeExtensionDelegate: UANativeBridgeExtensionDelegate;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  webViewAuthenticationChallengeShouldAllowDeprecatedTLS(webView: WKWebView, challenge: NSURLAuthenticationChallenge, decisionHandler: (p1: boolean) => void): void;

  webViewDecidePolicyForNavigationActionDecisionHandler(webView: WKWebView, navigationAction: WKNavigationAction, decisionHandler: (p1: WKNavigationActionPolicy) => void): void;

  webViewDecidePolicyForNavigationActionPreferencesDecisionHandler(webView: WKWebView, navigationAction: WKNavigationAction, preferences: WKWebpagePreferences, decisionHandler: (p1: WKNavigationActionPolicy, p2: WKWebpagePreferences) => void): void;

  webViewDecidePolicyForNavigationResponseDecisionHandler(webView: WKWebView, navigationResponse: WKNavigationResponse, decisionHandler: (p1: WKNavigationResponsePolicy) => void): void;

  webViewDidCommitNavigation(webView: WKWebView, navigation: WKNavigation): void;

  webViewDidFailNavigationWithError(webView: WKWebView, navigation: WKNavigation, error: NSError): void;

  webViewDidFailProvisionalNavigationWithError(webView: WKWebView, navigation: WKNavigation, error: NSError): void;

  webViewDidFinishNavigation(webView: WKWebView, navigation: WKNavigation): void;

  webViewDidReceiveAuthenticationChallengeCompletionHandler(webView: WKWebView, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

  webViewDidReceiveServerRedirectForProvisionalNavigation(webView: WKWebView, navigation: WKNavigation): void;

  webViewDidStartProvisionalNavigation(webView: WKWebView, navigation: WKNavigation): void;

  webViewNavigationActionDidBecomeDownload(webView: WKWebView, navigationAction: WKNavigationAction, download: WKDownload): void;

  webViewNavigationResponseDidBecomeDownload(webView: WKWebView, navigationResponse: WKNavigationResponse, download: WKDownload): void;

  webViewWebContentProcessDidTerminate(webView: WKWebView): void;
}

interface UANativeBridgeDelegate {
  close(): void;
}
declare var UANativeBridgeDelegate: {
  prototype: UANativeBridgeDelegate;
};

interface UANativeBridgeExtensionDelegate {
  actionsMetadataForCommandWebView(command: UAJavaScriptCommand, webView: WKWebView): NSDictionary<string, string>;

  extendJavaScriptEnvironmentWebViewCompletionHandler(js: UAJavaScriptEnvironmentProtocol, webView: WKWebView, completionHandler: () => void): void;
}
declare var UANativeBridgeExtensionDelegate: {
  prototype: UANativeBridgeExtensionDelegate;
};

interface UANavigationDelegate extends WKNavigationDelegate {
  closeWindow?(animated: boolean): void;
}
declare var UANavigationDelegate: {
  prototype: UANavigationDelegate;
};

declare class UANetworkMonitor extends NSObject {
  static alloc(): UANetworkMonitor; // inherited from NSObject

  static new(): UANetworkMonitor; // inherited from NSObject

  connectionUpdates: (p1: boolean) => void;

  readonly isConnected: boolean;
}

declare class UANotificationCategories extends NSObject {
  static alloc(): UANotificationCategories; // inherited from NSObject

  static createCategoriesFromFile(path: string): NSSet<UNNotificationCategory>;

  static createCategoryActions(categoryId: string, actionDefinitions: NSArray<NSDictionary<any, any>> | NSDictionary<any, any>[]): UNNotificationCategory;

  static createCategoryActionsHiddenPreviewsBodyPlaceholder(categoryId: string, actionDefinitions: NSArray<NSDictionary<any, any>> | NSDictionary<any, any>[], hiddenPreviewsBodyPlaceholder: string): UNNotificationCategory;

  static defaultCategories(): NSSet<UNNotificationCategory>;

  static defaultCategoriesWithRequireAuth(requireAuth: boolean): NSSet<UNNotificationCategory>;

  static new(): UANotificationCategories; // inherited from NSObject
}

declare const enum UANotificationOptInConditionStatus {
  OptedIn = 0,

  OptedOut = 1,
}

declare const enum UANotificationOptions {
  None = 0,

  Badge = 1,

  Sound = 2,

  Alert = 4,

  CarPlay = 8,

  CriticalAlert = 16,

  ProvidesAppNotificationSettings = 32,

  Provisional = 64,

  Announcement = 128,
}

declare class UAOpenRegistrationOptions extends NSObject {
  static alloc(): UAOpenRegistrationOptions; // inherited from NSObject

  static new(): UAOpenRegistrationOptions; // inherited from NSObject

  static optInPlatformNameIdentifiers(platformName: string, identifiers: NSDictionary<string, string>): UAOpenRegistrationOptions;
}

declare class UAPadding extends NSObject {
  static alloc(): UAPadding; // inherited from NSObject

  static new(): UAPadding; // inherited from NSObject

  static paddingWithDictionary(paddingDict: NSDictionary<any, any>): UAPadding;

  static paddingWithTopBottomLeadingTrailing(top: number, bottom: number, leading: number, trailing: number): UAPadding;

  bottom: number;

  leading: number;

  top: number;

  trailing: number;

  constructor(o: { top: number; bottom: number; leading: number; trailing: number });

  initWithTopBottomLeadingTrailing(top: number, bottom: number, leading: number, trailing: number): this;
}

declare const enum UAPermission {
  DisplayNotifications = 0,

  Location = 1,
}

declare const enum UAPermissionStatus {
  NotDetermined = 0,

  Granted = 1,

  Denied = 2,
}

declare class UAPermissionsManager extends NSObject {
  static alloc(): UAPermissionsManager; // inherited from NSObject

  static new(): UAPermissionsManager; // inherited from NSObject

  permissionStatusMapWithCompletionHandler(completionHandler: (p1: NSDictionary<string, string>) => void): void;

  requestPermissionCompletionHandler(permission: UAPermission, completionHandler: (p1: UAPermissionStatus) => void): void;

  requestPermissionEnableAirshipUsageOnGrantCompletionHandler(permission: UAPermission, enableAirshipUsageOnGrant: boolean, completionHandler: (p1: UAPermissionStatus) => void): void;

  setDelegatePermission(delegate: UAAirshipPermissionDelegate, permission: UAPermission): void;
}

declare class UAPreferenceCenter extends NSObject implements UAComponent {
  static alloc(): UAPreferenceCenter; // inherited from NSObject

  static new(): UAPreferenceCenter; // inherited from NSObject

  openDelegate: UAPreferenceCenterOpenDelegate;

  static readonly shared: UAPreferenceCenter;

  componentEnabled: boolean; // inherited from UAComponent

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  airshipReady(): void;

  applyRemoteConfig(config: any): void;

  class(): typeof NSObject;

  configWithPreferenceCenterIDCompletionHandler(preferenceCenterID: string, completionHandler: (p1: UAPreferenceCenterConfig, p2: NSError) => void): void;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  deepLink(deepLink: NSURL): boolean;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  jsonConfigWithPreferenceCenterIDCompletionHandler(preferenceCenterID: string, completionHandler: (p1: NSData, p2: NSError) => void): void;

  openPreferenceCenter(preferenceCenterID: string): void;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  setThemeFromPlistError(plist: string): boolean;
}

declare class UAPreferenceCenterConfig extends NSObject {
  static alloc(): UAPreferenceCenterConfig; // inherited from NSObject

  static new(): UAPreferenceCenterConfig; // inherited from NSObject

  readonly display: UAPreferenceConfigCommonDisplay;

  readonly identifier: string;

  readonly options: UAPreferenceCenterConfigOptions;

  readonly sections: NSArray<UAPreferenceCenterConfigSection>;
}

declare class UAPreferenceCenterConfigAlert extends NSObject implements UAPreferenceCenterConfigItem {
  static alloc(): UAPreferenceCenterConfigAlert; // inherited from NSObject

  static new(): UAPreferenceCenterConfigAlert; // inherited from NSObject

  readonly button: UAPreferenceCenterConfigAlertButton;

  readonly conditions: NSArray<UAPreferenceConfigCondition>;

  readonly display: UAPreferenceConfigAlertDisplay;

  readonly identifier: string; // inherited from UAPreferenceCenterConfigItem

  readonly type: UAPreferenceCenterConfigItemType; // inherited from UAPreferenceCenterConfigItem
}

declare class UAPreferenceCenterConfigAlertButton extends NSObject {
  static alloc(): UAPreferenceCenterConfigAlertButton; // inherited from NSObject

  static new(): UAPreferenceCenterConfigAlertButton; // inherited from NSObject

  readonly actions: any;

  readonly contentDescription: string;

  readonly text: string;
}

declare class UAPreferenceCenterConfigChannelSubscription extends NSObject implements UAPreferenceCenterConfigItem {
  static alloc(): UAPreferenceCenterConfigChannelSubscription; // inherited from NSObject

  static new(): UAPreferenceCenterConfigChannelSubscription; // inherited from NSObject

  readonly conditions: NSArray<UAPreferenceConfigCondition>;

  readonly display: UAPreferenceConfigCommonDisplay;

  readonly subscriptionID: string;

  readonly identifier: string; // inherited from UAPreferenceCenterConfigItem

  readonly type: UAPreferenceCenterConfigItemType; // inherited from UAPreferenceCenterConfigItem
}

declare class UAPreferenceCenterConfigCommonSection extends NSObject implements UAPreferenceCenterConfigSection {
  static alloc(): UAPreferenceCenterConfigCommonSection; // inherited from NSObject

  static new(): UAPreferenceCenterConfigCommonSection; // inherited from NSObject

  readonly conditions: NSArray<UAPreferenceConfigCondition>;

  readonly display: UAPreferenceConfigCommonDisplay;

  readonly items: NSArray<UAPreferenceCenterConfigItem>;

  readonly identifier: string; // inherited from UAPreferenceCenterConfigSection

  readonly type: UAPreferenceCenterConfigSectionType; // inherited from UAPreferenceCenterConfigSection
}

declare const enum UAPreferenceCenterConfigConditionType {
  NotificationOptIn = 0,
}

declare class UAPreferenceCenterConfigContactSubscription extends NSObject implements UAPreferenceCenterConfigItem {
  static alloc(): UAPreferenceCenterConfigContactSubscription; // inherited from NSObject

  static new(): UAPreferenceCenterConfigContactSubscription; // inherited from NSObject

  readonly conditions: NSArray<UAPreferenceConfigCondition>;

  readonly display: UAPreferenceConfigCommonDisplay;

  readonly scopes: UAChannelScopes;

  readonly subscriptionID: string;

  readonly identifier: string; // inherited from UAPreferenceCenterConfigItem

  readonly type: UAPreferenceCenterConfigItemType; // inherited from UAPreferenceCenterConfigItem
}

declare class UAPreferenceCenterConfigContactSubscriptionGroup extends NSObject implements UAPreferenceCenterConfigItem {
  static alloc(): UAPreferenceCenterConfigContactSubscriptionGroup; // inherited from NSObject

  static new(): UAPreferenceCenterConfigContactSubscriptionGroup; // inherited from NSObject

  readonly components: NSArray<UAPreferenceContactSubscriptionGroupComponent>;

  readonly conditions: NSArray<UAPreferenceConfigCondition>;

  readonly display: UAPreferenceConfigCommonDisplay;

  readonly subscriptionID: string;

  readonly identifier: string; // inherited from UAPreferenceCenterConfigItem

  readonly type: UAPreferenceCenterConfigItemType; // inherited from UAPreferenceCenterConfigItem
}

interface UAPreferenceCenterConfigItem {
  identifier: string;

  type: UAPreferenceCenterConfigItemType;
}
declare var UAPreferenceCenterConfigItem: {
  prototype: UAPreferenceCenterConfigItem;
};

declare const enum UAPreferenceCenterConfigItemType {
  ChannelSubscription = 0,

  ContactSubscription = 1,

  ContactSubscriptionGroup = 2,

  Alert = 3,
}

declare class UAPreferenceCenterConfigNotificationOptInCondition extends NSObject implements UAPreferenceConfigCondition {
  static alloc(): UAPreferenceCenterConfigNotificationOptInCondition; // inherited from NSObject

  static new(): UAPreferenceCenterConfigNotificationOptInCondition; // inherited from NSObject

  readonly optInStatus: UANotificationOptInConditionStatus;

  readonly type: UAPreferenceCenterConfigConditionType; // inherited from UAPreferenceConfigCondition
}

declare class UAPreferenceCenterConfigOptions extends NSObject {
  static alloc(): UAPreferenceCenterConfigOptions; // inherited from NSObject

  static new(): UAPreferenceCenterConfigOptions; // inherited from NSObject

  readonly mergeChannelDataToContact: boolean;

  constructor(o: { mergeChannelDataToContact: boolean });

  initWithMergeChannelDataToContact(mergeChannelDataToContact: boolean): this;
}

interface UAPreferenceCenterConfigSection {
  identifier: string;

  type: UAPreferenceCenterConfigSectionType;
}
declare var UAPreferenceCenterConfigSection: {
  prototype: UAPreferenceCenterConfigSection;
};

declare const enum UAPreferenceCenterConfigSectionType {
  Common = 0,

  LabeledSectionBreak = 1,
}

interface UAPreferenceCenterOpenDelegate {
  openPreferenceCenter(preferenceCenterID: string): boolean;
}
declare var UAPreferenceCenterOpenDelegate: {
  prototype: UAPreferenceCenterOpenDelegate;
};

declare class UAPreferenceCenterSDKModule extends NSObject {
  static alloc(): UAPreferenceCenterSDKModule; // inherited from NSObject

  static new(): UAPreferenceCenterSDKModule; // inherited from NSObject
}

declare class UAPreferenceCenterViewControllerFactory extends NSObject {
  static alloc(): UAPreferenceCenterViewControllerFactory; // inherited from NSObject

  static makeViewControllerWithPreferenceCenterIDDismissAction(preferenceCenterID: string, dismissAction: () => void): UIViewController;

  static makeViewControllerWithPreferenceCenterIDPreferenceCenterThemePlistError(preferenceCenterID: string, preferenceCenterThemePlist: string): UIViewController;

  static new(): UAPreferenceCenterViewControllerFactory; // inherited from NSObject
}

declare class UAPreferenceConfigAlertDisplay extends NSObject {
  static alloc(): UAPreferenceConfigAlertDisplay; // inherited from NSObject

  static new(): UAPreferenceConfigAlertDisplay; // inherited from NSObject

  readonly iconURL: string;

  readonly subtitle: string;

  readonly title: string;
}

declare class UAPreferenceConfigCommonDisplay extends NSObject {
  static alloc(): UAPreferenceConfigCommonDisplay; // inherited from NSObject

  static new(): UAPreferenceConfigCommonDisplay; // inherited from NSObject

  readonly subtitle: string;

  readonly title: string;
}

interface UAPreferenceConfigCondition {
  type: UAPreferenceCenterConfigConditionType;
}
declare var UAPreferenceConfigCondition: {
  prototype: UAPreferenceConfigCondition;
};

declare class UAPreferenceContactSubscriptionGroupComponent extends NSObject {
  static alloc(): UAPreferenceContactSubscriptionGroupComponent; // inherited from NSObject

  static new(): UAPreferenceContactSubscriptionGroupComponent; // inherited from NSObject

  readonly display: UAPreferenceConfigCommonDisplay;

  readonly scopes: UAChannelScopes;
}

declare class UAPreferenceDataStore extends NSObject {
  static alloc(): UAPreferenceDataStore; // inherited from NSObject

  static new(): UAPreferenceDataStore; // inherited from NSObject

  constructor(o: { appKey: string });

  arrayForKey(key: string): NSArray<NSObject>;

  boolForKey(key: string): boolean;

  boolForKeyDefaultValue(key: string, defaultValue: boolean): boolean;

  dataForKey(key: string): NSData;

  dictionaryForKey(key: string): NSDictionary<any, any>;

  doubleForKey(key: string): number;

  doubleForKeyDefaultValue(key: string, defaultValue: number): number;

  floatForKey(key: string): number;

  initWithAppKey(appKey: string): this;

  integerForKey(key: string): number;

  keyExists(key: string): boolean;

  objectForKey(key: string): any;

  removeObjectForKey(key: string): void;

  setBoolForKey(bool_: boolean, key: string): void;

  setDoubleForKey(double_: number, key: string): void;

  setFloatForKey(float_: number, key: string): void;

  setIntegerForKey(int_: number, key: string): void;

  setObjectForKey(object: any, key: string): void;

  stringArrayForKey(key: string): NSArray<NSObject>;

  stringForKey(key: string): string;
}

declare class UAPreferenceLabeledSectionBreak extends NSObject implements UAPreferenceCenterConfigSection {
  static alloc(): UAPreferenceLabeledSectionBreak; // inherited from NSObject

  static new(): UAPreferenceLabeledSectionBreak; // inherited from NSObject

  readonly conditions: NSArray<UAPreferenceConfigCondition>;

  readonly display: UAPreferenceConfigCommonDisplay;

  readonly identifier: string; // inherited from UAPreferenceCenterConfigSection

  readonly type: UAPreferenceCenterConfigSectionType; // inherited from UAPreferenceCenterConfigSection
}

declare class UAPrivacyManager extends NSObject {
  static alloc(): UAPrivacyManager; // inherited from NSObject

  static new(): UAPrivacyManager; // inherited from NSObject

  static privacyManagerWithDataStoreDefaultEnabledFeatures(dataStore: UAPreferenceDataStore, defaultEnabledFeatures: UAFeatures): UAPrivacyManager;

  enabledFeatures: UAFeatures;

  static readonly changeEvent: string;

  disableFeatures(features: UAFeatures): void;

  enableFeatures(features: UAFeatures): void;

  isAnyFeatureEnabled(): boolean;

  isEnabled(features: UAFeatures): boolean;
}

declare class UAProximityRegion extends NSObject {
  static alloc(): UAProximityRegion; // inherited from NSObject

  static new(): UAProximityRegion; // inherited from NSObject

  static proximityRegionWithIDMajorMinor(proximityID: string, major: number, minor: number): UAProximityRegion;

  static proximityRegionWithIDMajorMinorLatitudeLongitude(proximityID: string, major: number, minor: number, latitude: number, longitude: number): UAProximityRegion;

  static proximityRegionWithIDMajorMinorRssi(proximityID: string, major: number, minor: number, rssi: number): UAProximityRegion;

  static proximityRegionWithIDMajorMinorRssiLatitudeLongitude(proximityID: string, major: number, minor: number, rssi: number, latitude: number, longitude: number): UAProximityRegion;
}

declare class UAPush extends NSObject implements UAComponent {
  static alloc(): UAPush; // inherited from NSObject

  static new(): UAPush; // inherited from NSObject

  readonly authorizationStatus: UAAuthorizationStatus;

  readonly authorizedNotificationSettings: UAAuthorizedNotificationSettings;

  autobadgeEnabled: boolean;

  backgroundPushNotificationsEnabled: boolean;

  badgeNumber: number;

  readonly combinedCategories: NSSet<UNNotificationCategory>;

  customCategories: NSSet<UNNotificationCategory>;

  defaultPresentationOptions: UNNotificationPresentationOptions;

  readonly deviceToken: string;

  readonly isPushNotificationsOptedIn: boolean;

  readonly launchNotificationResponse: UNNotificationResponse;

  notificationOptions: UANotificationOptions;

  pushNotificationDelegate: UAPushNotificationDelegate;

  readonly quietTime: NSDictionary<any, any>;

  quietTimeEnabled: boolean;

  registrationDelegate: UARegistrationDelegate;

  requestExplicitPermissionWhenEphemeral: boolean;

  requireAuthorizationForDefaultCategories: boolean;

  timeZone: NSTimeZone;

  readonly userPromptedForNotifications: boolean;

  userPushNotificationsEnabled: boolean;

  static readonly quietTimeEndKey: string;

  static readonly quietTimeStartKey: string;

  static readonly receivedBackgroundNotificationEvent: string;

  static readonly receivedForegroundNotificationEvent: string;

  static readonly receivedNotificationResponseEvent: string;

  static readonly receivedNotificationResponseEventResponseKey: string;

  static readonly shared: UAPush;

  componentEnabled: boolean; // inherited from UAComponent

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  airshipReady(): void;

  applyRemoteConfig(config: any): void;

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  deepLink(deepLink: NSURL): boolean;

  enableUserPushNotificationsWithCompletionHandler(completionHandler: (p1: boolean) => void): void;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  resetBadge(): void;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  setQuietTimeStartHourStartMinuteEndHourEndMinute(startHour: number, startMinute: number, endHour: number, endMinute: number): void;

  updateRegistration(): void;
}

interface UAPushNotificationDelegate extends NSObjectProtocol {
  extendPresentationOptionsNotification?(options: UNNotificationPresentationOptions, notification: UNNotification): UNNotificationPresentationOptions;

  extendPresentationOptionsNotificationCompletionHandler?(options: UNNotificationPresentationOptions, notification: UNNotification, completionHandler: (p1: UNNotificationPresentationOptions) => void): void;

  receivedBackgroundNotificationCompletionHandler?(userInfo: NSDictionary<any, any>, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

  receivedForegroundNotificationCompletionHandler?(userInfo: NSDictionary<any, any>, completionHandler: () => void): void;

  receivedNotificationResponseCompletionHandler?(notificationResponse: UNNotificationResponse, completionHandler: () => void): void;
}
declare var UAPushNotificationDelegate: {
  prototype: UAPushNotificationDelegate;
};

interface UAPushProtocol {
  authorizationStatus: UAAuthorizationStatus;

  authorizedNotificationSettings: UAAuthorizedNotificationSettings;

  backgroundPushNotificationsEnabled: boolean;

  badgeNumber: number;

  combinedCategories: NSSet<UNNotificationCategory>;

  customCategories: NSSet<UNNotificationCategory>;

  defaultPresentationOptions: UNNotificationPresentationOptions;

  deviceToken: string;

  isPushNotificationsOptedIn: boolean;

  launchNotificationResponse: UNNotificationResponse;

  notificationOptions: UANotificationOptions;

  pushNotificationDelegate: UAPushNotificationDelegate;

  registrationDelegate: UARegistrationDelegate;

  requestExplicitPermissionWhenEphemeral: boolean;

  requireAuthorizationForDefaultCategories: boolean;

  userPromptedForNotifications: boolean;

  userPushNotificationsEnabled: boolean;
}
declare var UAPushProtocol: {
  prototype: UAPushProtocol;
};

interface UAPushableComponent {
  presentationOptionsForNotificationDefaultPresentationOptions?(notification: UNNotification, options: UNNotificationPresentationOptions): UNNotificationPresentationOptions;

  receivedNotificationResponseCompletionHandler?(response: UNNotificationResponse, completionHandler: () => void): void;

  receivedRemoteNotificationCompletionHandler?(notification: NSDictionary<any, any>, completionHandler: (p1: UIBackgroundFetchResult) => void): void;
}
declare var UAPushableComponent: {
  prototype: UAPushableComponent;
};

declare class UARegionEvent extends NSObject implements UAEvent {
  static alloc(): UARegionEvent; // inherited from NSObject

  static new(): UARegionEvent; // inherited from NSObject

  static regionEventWithRegionIDSourceBoundaryEvent(regionID: string, source: string, boundaryEvent: UABoundaryEvent): UARegionEvent;

  static regionEventWithRegionIDSourceBoundaryEventCircularRegionProximityRegion(regionID: string, source: string, boundaryEvent: UABoundaryEvent, circularRegion: UACircularRegion, proximityRegion: UAProximityRegion): UARegionEvent;

  readonly boundaryEvent: UABoundaryEvent;

  readonly circularRegion: UACircularRegion;

  readonly payload: NSDictionary<any, any>;

  readonly proximityRegion: UAProximityRegion;

  readonly regionID: string;

  readonly source: string;

  static readonly regionIDKey: string;

  readonly data: NSDictionary<any, any>; // inherited from UAEvent

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly eventType: string; // inherited from UAEvent

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly priority: UAEventPriority; // inherited from UAEvent

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  isValid(): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

interface UARegistrationDelegate extends NSObjectProtocol {
  apnsRegistrationFailedWithError?(error: NSError): void;

  apnsRegistrationSucceededWithDeviceToken?(deviceToken: NSData): void;

  notificationAuthorizedSettingsDidChange?(authorizedSettings: UAAuthorizedNotificationSettings): void;

  notificationRegistrationFinishedWithAuthorizedSettingsCategoriesStatus?(authorizedSettings: UAAuthorizedNotificationSettings, categories: NSSet<UNNotificationCategory>, status: UAAuthorizationStatus): void;

  notificationRegistrationFinishedWithAuthorizedSettingsStatus?(authorizedSettings: UAAuthorizedNotificationSettings, status: UAAuthorizationStatus): void;
}
declare var UARegistrationDelegate: {
  prototype: UARegistrationDelegate;
};

declare class UARemoteDataAutomationAccess extends NSObject {
  static alloc(): UARemoteDataAutomationAccess; // inherited from NSObject

  static new(): UARemoteDataAutomationAccess; // inherited from NSObject

  isCurrentWithRemoteDataInfoCompletionHandler(remoteDataInfo: UARemoteDataInfo, completionHandler: (p1: boolean) => void): void;

  refreshAndCheckCurrentWithRemoteDataInfoCompletionHandler(remoteDataInfo: UARemoteDataInfo, completionHandler: (p1: boolean) => void): void;

  refreshOutdatedWithRemoteDataInfoCompletionHandler(remoteDataInfo: UARemoteDataInfo, completionHandler: () => void): void;

  subscribeWithTypesBlock(types: NSArray<string> | string[], block: (p1: NSArray<UARemoteDataPayload>) => void): UADisposable;
}

declare class UARemoteDataInfo extends NSObject implements NSCopying {
  static alloc(): UARemoteDataInfo; // inherited from NSObject

  static fromJSONWithStringError(string: string): UARemoteDataInfo;

  static new(): UARemoteDataInfo; // inherited from NSObject

  readonly contactID: string;

  readonly source: UARemoteDataSource;

  copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

  toEncodedJSONStringAndReturnError(): string;
}

declare class UARemoteDataPayload extends NSObject {
  static alloc(): UARemoteDataPayload; // inherited from NSObject

  static new(): UARemoteDataPayload; // inherited from NSObject

  readonly data: NSDictionary<any, any>;

  readonly remoteDataInfo: UARemoteDataInfo;

  readonly timestamp: Date;

  readonly type: string;
}

declare const enum UARemoteDataSource {
  App = 0,

  Contact = 1,
}

declare class UARequest extends NSObject {
  static alloc(): UARequest; // inherited from NSObject

  static makeChannelAuthRequestWithChannelIDMethodUrlHeadersBody(channelID: string, method: string, url: NSURL, headers: NSDictionary<string, string>, body: NSData): UARequest;

  static new(): UARequest; // inherited from NSObject

  readonly body: NSData;

  readonly headers: NSDictionary<string, string>;

  readonly method: string;

  readonly url: NSURL;
}

declare class UARequestSession extends NSObject {
  static alloc(): UARequestSession; // inherited from NSObject

  static new(): UARequestSession; // inherited from NSObject

  constructor(o: { config: UARuntimeConfig });

  initWithConfig(config: UARuntimeConfig): this;

  performHTTPRequestCompletionHandler(request: UARequest, completionHandler: (p1: NSData, p2: NSHTTPURLResponse, p3: NSError) => void): void;
}

declare class UARetailEventTemplate extends NSObject {
  static addedToCartTemplate(): UARetailEventTemplate;

  static addedToCartTemplateWithValue(value: number): UARetailEventTemplate;

  static addedToCartTemplateWithValueFromString(valueString: string): UARetailEventTemplate;

  static alloc(): UARetailEventTemplate; // inherited from NSObject

  static browsedTemplate(): UARetailEventTemplate;

  static browsedTemplateWithValue(value: number): UARetailEventTemplate;

  static browsedTemplateWithValueFromString(valueString: string): UARetailEventTemplate;

  static new(): UARetailEventTemplate; // inherited from NSObject

  static purchasedTemplate(): UARetailEventTemplate;

  static purchasedTemplateWithValue(value: number): UARetailEventTemplate;

  static purchasedTemplateWithValueFromString(valueString: string): UARetailEventTemplate;

  static sharedProductTemplate(): UARetailEventTemplate;

  static sharedProductTemplateWithSourceWithMedium(source: string, medium: string): UARetailEventTemplate;

  static sharedProductTemplateWithValue(value: number): UARetailEventTemplate;

  static sharedProductTemplateWithValueFromString(valueString: string): UARetailEventTemplate;

  static sharedProductTemplateWithValueFromStringWithSourceWithMedium(valueString: string, source: string, medium: string): UARetailEventTemplate;

  static sharedProductTemplateWithValueWithSourceWithMedium(value: number, source: string, medium: string): UARetailEventTemplate;

  static starredProductTemplate(): UARetailEventTemplate;

  static starredProductTemplateWithValue(value: number): UARetailEventTemplate;

  static starredProductTemplateWithValueFromString(valueString: string): UARetailEventTemplate;

  static wishlistTemplate(): UARetailEventTemplate;

  static wishlistTemplateWithNameWishlistID(name: string, wishlistID: string): UARetailEventTemplate;

  brand: string;

  category: string;

  eventDescription: string;

  eventValue: number;

  identifier: string;

  isNewItem: boolean;

  transactionID: string;

  createEvent(): UACustomEvent;
}

declare class UARuntimeConfig extends NSObject {
  static alloc(): UARuntimeConfig; // inherited from NSObject

  static new(): UARuntimeConfig; // inherited from NSObject

  readonly URLAllowList: NSArray<string>;

  readonly URLAllowListScopeJavaScriptInterface: NSArray<string>;

  readonly URLAllowListScopeOpenURL: NSArray<string>;

  readonly analyticsURL: string;

  readonly appKey: string;

  readonly appSecret: string;

  readonly autoPauseInAppAutomationOnLaunch: boolean;

  readonly chatURL: string;

  readonly chatWebSocketURL: string;

  readonly clearNamedUserOnAppRestore: boolean;

  readonly clearUserOnAppRestore: boolean;

  readonly deviceAPIURL: string;

  readonly inProduction: boolean;

  readonly isAnalyticsEnabled: boolean;

  readonly isAutomaticSetupEnabled: boolean;

  readonly isChannelCaptureEnabled: boolean;

  readonly isChannelCreationDelayEnabled: boolean;

  readonly isExtendedBroadcastsEnabled: boolean;

  readonly itunesID: string;

  readonly logLevel: UALogLevel;

  readonly messageCenterStyleConfig: string;

  readonly remoteDataAPIURL: string;

  readonly requestAuthorizationToUseNotifications: boolean;

  readonly requireInitialRemoteConfigEnabled: boolean;

  static readonly configUpdatedEvent: string;

  constructor(o: { config: UAConfig; dataStore: UAPreferenceDataStore });

  initWithConfigDataStore(config: UAConfig, dataStore: UAPreferenceDataStore): this;
}

declare class UASDKDependencyKeys extends NSObject {
  static alloc(): UASDKDependencyKeys; // inherited from NSObject

  static new(): UASDKDependencyKeys; // inherited from NSObject

  static readonly analytics: string;

  static readonly automationAudienceOverridesProvider: string;

  static readonly channel: string;

  static readonly config: string;

  static readonly contact: string;

  static readonly dataStore: string;

  static readonly permissionsManager: string;

  static readonly privacyManager: string;

  static readonly push: string;

  static readonly remoteData: string;

  static readonly remoteDataAutomation: string;

  static readonly workManager: string;
}

declare const enum UASDKExtension {
  Cordova = 0,

  Xamarin = 1,

  Unity = 2,

  Flutter = 3,

  ReactNative = 4,

  Titanium = 5,
}

declare class UASMSRegistrationOptions extends NSObject {
  static alloc(): UASMSRegistrationOptions; // inherited from NSObject

  static new(): UASMSRegistrationOptions; // inherited from NSObject

  static optInSenderID(senderID: string): UASMSRegistrationOptions;
}

declare class UASchedule extends NSObject {
  static alloc(): UASchedule; // inherited from NSObject

  static new(): UASchedule; // inherited from NSObject

  readonly audience: UAScheduleAudience;

  readonly delay: UAScheduleDelay;

  readonly editGracePeriod: number;

  readonly end: Date;

  readonly group: string;

  readonly identifier: string;

  readonly interval: number;

  readonly isValid: boolean;

  readonly limit: number;

  readonly metadata: NSDictionary<any, any>;

  readonly priority: number;

  readonly start: Date;

  readonly triggeredTime: Date;

  readonly triggers: NSArray<UAScheduleTrigger>;

  isEqualToSchedule(schedule: UASchedule): boolean;
}

declare class UAScheduleAction extends NSObject implements UALegacyAction {
  static alloc(): UAScheduleAction; // inherited from NSObject

  static new(): UAScheduleAction; // inherited from NSObject

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly defaultNames: NSArray<string>; // inherited from UALegacyAction

  readonly defaultPredicate: (p1: any, p2: number) => boolean; // inherited from UALegacyAction

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  acceptsArgumentValueSituation(_arguments: any, situation: number): boolean;

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  performWithArgumentValueSituationPushUserInfoCompletionHandler(argument: any, situation: number, pushUserInfo: NSDictionary<any, any>, completionHandler: () => void): void;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

declare var UAScheduleActionDefaultRegistryAlias: string;

declare var UAScheduleActionDefaultRegistryName: string;

declare const enum UAScheduleActionErrorCode {
  InvalidJSON = 0,
}

declare class UAScheduleAudience extends NSObject {
  static alloc(): UAScheduleAudience; // inherited from NSObject

  static audienceWithBuilderBlock(builderBlock: (p1: UAScheduleAudienceBuilder) => void): UAScheduleAudience;

  static new(): UAScheduleAudience; // inherited from NSObject

  readonly languageIDs: NSArray<string>;

  readonly locationOptIn: number;

  readonly missBehavior: UAScheduleAudienceMissBehaviorType;

  readonly notificationsOptIn: number;

  readonly permissionPredicate: UAJSONPredicate;

  readonly requiresAnalytics: number;

  readonly tagSelector: UATagSelector;

  readonly versionPredicate: UAJSONPredicate;
}

declare class UAScheduleAudienceBuilder extends NSObject {
  static alloc(): UAScheduleAudienceBuilder; // inherited from NSObject

  static new(): UAScheduleAudienceBuilder; // inherited from NSObject

  languageTags: NSArray<string>;

  locationOptIn: number;

  missBehavior: UAScheduleAudienceMissBehaviorType;

  notificationsOptIn: number;

  permissionPredicate: UAJSONPredicate;

  requiresAnalytics: number;

  tagSelector: UATagSelector;

  versionPredicate: UAJSONPredicate;

  isValid(): boolean;
}

declare const enum UAScheduleAudienceMissBehaviorType {
  Cancel = 0,

  Skip = 1,

  Penalize = 2,
}

declare class UAScheduleBuilder extends NSObject {
  static alloc(): UAScheduleBuilder; // inherited from NSObject

  static new(): UAScheduleBuilder; // inherited from NSObject

  audience: UAScheduleAudience;

  delay: UAScheduleDelay;

  editGracePeriod: number;

  end: Date;

  group: string;

  identifier: string;

  interval: number;

  limit: number;

  metadata: NSDictionary<any, any>;

  priority: number;

  start: Date;

  triggeredTime: Date;

  triggers: NSArray<UAScheduleTrigger>;
}

declare const enum UAScheduleDataDeferredType {
  Unknown = 0,

  InAppMessage = 1,
}

declare class UAScheduleDeferredData extends NSObject {
  static alloc(): UAScheduleDeferredData; // inherited from NSObject

  static deferredDataWithJSONError(json: any): UAScheduleDeferredData;

  static deferredDataWithURLRetriableOnTimeout(URL: NSURL, retriableOnTimeout: boolean): UAScheduleDeferredData;

  static deferredDataWithURLRetriableOnTimeoutType(URL: NSURL, retriableOnTimeout: boolean, type: UAScheduleDataDeferredType): UAScheduleDeferredData;

  static new(): UAScheduleDeferredData; // inherited from NSObject

  readonly URL: NSURL;

  readonly retriableOnTimeout: boolean;

  readonly type: UAScheduleDataDeferredType;

  toJSON(): NSDictionary<any, any>;
}

declare const enum UAScheduleDeferredDataErrorCode {
  InvalidJSON = 0,
}

declare class UAScheduleDelay extends NSObject {
  static alloc(): UAScheduleDelay; // inherited from NSObject

  static delayWithBuilderBlock(builderBlock: (p1: UAScheduleDelayBuilder) => void): UAScheduleDelay;

  static delayWithJSONError(json: any): UAScheduleDelay;

  static new(): UAScheduleDelay; // inherited from NSObject

  readonly appState: UAScheduleDelayAppState;

  readonly cancellationTriggers: NSArray<UAScheduleTrigger>;

  readonly isValid: boolean;

  readonly regionID: string;

  readonly screens: NSArray<any>;

  readonly seconds: number;

  isEqualToDelay(delay: UAScheduleDelay): boolean;
}

declare const enum UAScheduleDelayAppState {
  Any = 0,

  Foreground = 1,

  Background = 2,
}

declare var UAScheduleDelayAppStateBackgroundName: string;

declare var UAScheduleDelayAppStateForegroundName: string;

declare var UAScheduleDelayAppStateKey: string;

declare class UAScheduleDelayBuilder extends NSObject {
  static alloc(): UAScheduleDelayBuilder; // inherited from NSObject

  static new(): UAScheduleDelayBuilder; // inherited from NSObject

  appState: UAScheduleDelayAppState;

  cancellationTriggers: NSArray<UAScheduleTrigger>;

  regionID: string;

  screens: NSArray<any>;

  seconds: number;
}

declare var UAScheduleDelayCancellationTriggersKey: string;

declare const enum UAScheduleDelayErrorCode {
  InvalidJSON = 0,
}

declare var UAScheduleDelayErrorDomain: string;

declare var UAScheduleDelayMaxCancellationTriggers: number;

declare var UAScheduleDelayRegionKey: string;

declare var UAScheduleDelayScreensKey: string;

declare var UAScheduleDelaySecondsKey: string;

declare class UAScheduleEdits extends NSObject {
  static alloc(): UAScheduleEdits; // inherited from NSObject

  static editsWithActionsBuilderBlock(actions: NSDictionary<any, any>, builderBlock: (p1: UAScheduleEditsBuilder) => void): UAScheduleEdits;

  static editsWithBuilderBlock(builderBlock: (p1: UAScheduleEditsBuilder) => void): UAScheduleEdits;

  static editsWithMessageBuilderBlock(message: UAInAppMessage, builderBlock: (p1: UAScheduleEditsBuilder) => void): UAScheduleEdits;

  static new(): UAScheduleEdits; // inherited from NSObject

  readonly audience: UAScheduleAudience;

  readonly editGracePeriod: number;

  readonly end: Date;

  readonly interval: number;

  readonly limit: number;

  readonly metadata: NSDictionary<any, any>;

  readonly priority: number;

  readonly start: Date;

  triggeredTime: Date;
}

declare class UAScheduleEditsBuilder extends NSObject {
  static alloc(): UAScheduleEditsBuilder; // inherited from NSObject

  static new(): UAScheduleEditsBuilder; // inherited from NSObject

  audience: UAScheduleAudience;

  editGracePeriod: number;

  end: Date;

  interval: number;

  limit: number;

  metadata: NSDictionary<any, any>;

  priority: number;

  start: Date;

  triggeredTime: Date;
}

declare var UAScheduleMaxTriggers: number;

declare class UAScheduleTrigger extends NSObject implements NSSecureCoding {
  static activeSessionTriggerWithCount(count: number): UAScheduleTrigger;

  static alloc(): UAScheduleTrigger; // inherited from NSObject

  static appInitTriggerWithCount(count: number): UAScheduleTrigger;

  static backgroundTriggerWithCount(count: number): UAScheduleTrigger;

  static customEventTriggerWithPredicateCount(predicate: UAJSONPredicate, count: number): UAScheduleTrigger;

  static customEventTriggerWithPredicateValue(predicate: UAJSONPredicate, value: number): UAScheduleTrigger;

  static foregroundTriggerWithCount(count: number): UAScheduleTrigger;

  static new(): UAScheduleTrigger; // inherited from NSObject

  static regionEnterTriggerForRegionIDCount(regionID: string, count: number): UAScheduleTrigger;

  static regionExitTriggerForRegionIDCount(regionID: string, count: number): UAScheduleTrigger;

  static screenTriggerForScreenNameCount(screenName: string, count: number): UAScheduleTrigger;

  static triggerWithJSONError(json: any): UAScheduleTrigger;

  static versionTriggerWithConstraintCount(versionConstraint: string, count: number): UAScheduleTrigger;

  readonly goal: number;

  readonly type: UAScheduleTriggerType;

  static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

  constructor(o: { coder: NSCoder }); // inherited from NSCoding

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  isEqualToTrigger(trigger: UAScheduleTrigger): boolean;
}

declare var UAScheduleTriggerActiveSessionName: string;

declare var UAScheduleTriggerAppBackgroundName: string;

declare var UAScheduleTriggerAppForegroundName: string;

declare var UAScheduleTriggerAppInitName: string;

declare var UAScheduleTriggerCustomEventCountName: string;

declare var UAScheduleTriggerCustomEventValueName: string;

declare const enum UAScheduleTriggerErrorCode {
  InvalidJSON = 0,
}

declare var UAScheduleTriggerErrorDomain: string;

declare var UAScheduleTriggerGoalKey: string;

declare var UAScheduleTriggerPredicateKey: string;

declare var UAScheduleTriggerRegionEnterName: string;

declare var UAScheduleTriggerRegionExitName: string;

declare var UAScheduleTriggerScreenName: string;

declare const enum UAScheduleTriggerType {
  AppForeground = 0,

  AppBackground = 1,

  RegionEnter = 2,

  RegionExit = 3,

  CustomEventCount = 4,

  CustomEventValue = 5,

  Screen = 6,

  AppInit = 7,

  ActiveSession = 8,

  Version = 9,
}

declare var UAScheduleTriggerTypeKey: string;

declare var UAScheduleTriggerVersionName: string;

declare class UAScopedSubscriptionListEditor extends NSObject {
  static alloc(): UAScopedSubscriptionListEditor; // inherited from NSObject

  static new(): UAScopedSubscriptionListEditor; // inherited from NSObject

  apply(): void;

  subscribeScope(subscriptionListID: string, scope: UAChannelScope): void;

  unsubscribeScope(subscriptionListID: string, scope: UAChannelScope): void;
}

declare class UASemaphore extends NSObject {
  static alloc(): UASemaphore; // inherited from NSObject

  static new(): UASemaphore; // inherited from NSObject

  constructor(o: { value: number });

  initWithValue(value: number): this;

  signal(): boolean;

  wait(): void;
}

declare var UASeparatedButtonSpacingKey: string;

declare var UAStackedButtonSpacingKey: string;

declare class UASubscriptionListEditor extends NSObject {
  static alloc(): UASubscriptionListEditor; // inherited from NSObject

  static new(): UASubscriptionListEditor; // inherited from NSObject

  apply(): void;

  subscribe(subscriptionListID: string): void;

  unsubscribe(subscriptionListID: string): void;
}

declare class UATagEditor extends NSObject {
  static alloc(): UATagEditor; // inherited from NSObject

  static new(): UATagEditor; // inherited from NSObject

  addTag(tag: string): void;

  addTags(tags: NSArray<string> | string[]): void;

  apply(): void;

  clearTags(): void;

  removeTag(tag: string): void;

  removeTags(tags: NSArray<string> | string[]): void;

  setTags(tags: NSArray<string> | string[]): void;
}

declare class UATagGroupsEditor extends NSObject {
  static alloc(): UATagGroupsEditor; // inherited from NSObject

  static new(): UATagGroupsEditor; // inherited from NSObject

  addTagsGroup(tags: NSArray<string> | string[], group: string): void;

  apply(): void;

  removeTagsGroup(tags: NSArray<string> | string[], group: string): void;

  setTagsGroup(tags: NSArray<string> | string[], group: string): void;
}

declare class UATagSelector extends NSObject {
  static alloc(): UATagSelector; // inherited from NSObject

  static new(): UATagSelector; // inherited from NSObject

  static tag(tag: string): UATagSelector;

  apply(tags: NSArray<string> | string[]): boolean;
}

interface UATask {
  completionHandler: () => void;

  requestOptions: UATaskRequestOptions;

  taskID: string;

  taskCompleted(): void;

  taskFailed(): void;
}
declare var UATask: {
  prototype: UATask;
};

declare class UATaskManager extends NSObject implements TaskManagerProtocol {
  static alloc(): UATaskManager; // inherited from NSObject

  static new(): UATaskManager; // inherited from NSObject

  static readonly shared: UATaskManager;

  enqueueRequestWithIDOptions(taskID: string, options: UATaskRequestOptions): void;

  enqueueRequestWithIDOptionsInitialDelay(taskID: string, options: UATaskRequestOptions, initialDelay: number): void;

  enqueueRequestWithIDRateLimitIDsOptions(taskID: string, rateLimitIDs: NSArray<string> | string[], options: UATaskRequestOptions): void;

  enqueueRequestWithIDRateLimitIDsOptionsMinDelay(taskID: string, rateLimitIDs: NSArray<string> | string[], options: UATaskRequestOptions, minDelay: number): void;

  registerForTaskWithIDTypeDispatcherLaunchHandler(taskID: string, type: UAirshipWorkerType, dispatcher: UADispatcher, launchHandler: (p1: UATask) => void): void;

  registerForTaskWithIDTypeLaunchHandler(taskID: string, type: UAirshipWorkerType, launchHandler: (p1: UATask) => void): void;

  setRateLimitForIDRateTimeIntervalError(rateLimitID: string, rate: number, timeInterval: number): boolean;
}

declare class UATaskRequestOptions extends NSObject {
  static alloc(): UATaskRequestOptions; // inherited from NSObject

  static new(): UATaskRequestOptions; // inherited from NSObject

  readonly conflictPolicy: AirshipWorkRequestConflictPolicy;

  readonly extras: NSDictionary<string, string>;

  readonly isNetworkRequired: boolean;

  static readonly defaultOptions: UATaskRequestOptions;

  constructor(o: { conflictPolicy: AirshipWorkRequestConflictPolicy; requiresNetwork: boolean; extras: NSDictionary<string, string> });

  initWithConflictPolicyRequiresNetworkExtras(conflictPolicy: AirshipWorkRequestConflictPolicy, requiresNetwork: boolean, extras: NSDictionary<string, string>): this;
}

declare var UATextAdditonalPaddingKey: string;

declare class UAThomas extends NSObject {
  static alloc(): UAThomas; // inherited from NSObject

  static deferredDisplayWithDataSceneExtensionsDelegateError(data: NSData, scene: UIWindowScene, extensions: UAThomasExtensions, delegate: UAThomasDelegate): () => UADisposable;

  static deferredDisplayWithJsonSceneExtensionsDelegateError(json: any, scene: UIWindowScene, extensions: UAThomasExtensions, delegate: UAThomasDelegate): () => UADisposable;

  static new(): UAThomas; // inherited from NSObject

  static urlsWithJsonError(json: any): NSArray<UAURLInfo>;

  static validateWithDataError(data: NSData): boolean;

  static validateWithJsonError(json: any): boolean;
}

declare class UAThomasButtonInfo extends NSObject {
  static alloc(): UAThomasButtonInfo; // inherited from NSObject

  static new(): UAThomasButtonInfo; // inherited from NSObject

  readonly identifier: string;

  constructor(o: { identifier: string });

  initWithIdentifier(identifier: string): this;
}

interface UAThomasDelegate {
  onButtonTappedWithButtonIdentifierMetadataLayoutContext(buttonIdentifier: string, metadata: any, layoutContext: UAThomasLayoutContext): void;

  onDismissedWithButtonIdentifierButtonDescriptionCancelLayoutContext(buttonIdentifier: string, buttonDescription: string, cancel: boolean, layoutContext: UAThomasLayoutContext): void;

  onDismissedWithLayoutContext(layoutContext: UAThomasLayoutContext): void;

  onFormDisplayedWithFormInfoLayoutContext(formInfo: UAThomasFormInfo, layoutContext: UAThomasLayoutContext): void;

  onFormSubmittedWithFormResultLayoutContext(formResult: UAThomasFormResult, layoutContext: UAThomasLayoutContext): void;

  onPageAutomatedActionWithIdentifierMetadataLayoutContext(identifier: string, metadata: any, layoutContext: UAThomasLayoutContext): void;

  onPageGestureWithIdentifierMetadataLayoutContext(identifier: string, metadata: any, layoutContext: UAThomasLayoutContext): void;

  onPageSwipedFromToLayoutContext(from: UAThomasPagerInfo, to: UAThomasPagerInfo, layoutContext: UAThomasLayoutContext): void;

  onPageViewedWithPagerInfoLayoutContext(pagerInfo: UAThomasPagerInfo, layoutContext: UAThomasLayoutContext): void;

  onPromptPermissionResultWithPermissionStartingStatusEndingStatusLayoutContext(permission: UAPermission, startingStatus: UAPermissionStatus, endingStatus: UAPermissionStatus, layoutContext: UAThomasLayoutContext): void;

  onTimedOutWithLayoutContext(layoutContext: UAThomasLayoutContext): void;
}
declare var UAThomasDelegate: {
  prototype: UAThomasDelegate;
};

declare class UAThomasExtensions extends NSObject {
  static alloc(): UAThomasExtensions; // inherited from NSObject

  static new(): UAThomasExtensions; // inherited from NSObject

  constructor(o: { nativeBridgeExtension: UANativeBridgeExtensionDelegate; imageProvider: UAImageProvider });

  initWithNativeBridgeExtensionImageProvider(nativeBridgeExtension: UANativeBridgeExtensionDelegate, imageProvider: UAImageProvider): this;
}

declare class UAThomasFormInfo extends NSObject {
  static alloc(): UAThomasFormInfo; // inherited from NSObject

  static new(): UAThomasFormInfo; // inherited from NSObject

  readonly formResponseType: string;

  readonly formType: string;

  readonly identifier: string;

  readonly submitted: boolean;

  constructor(o: { identifier: string; submitted: boolean; formType: string; formResponseType: string });

  initWithIdentifierSubmittedFormTypeFormResponseType(identifier: string, submitted: boolean, formType: string, formResponseType: string): this;
}

declare class UAThomasFormResult extends NSObject {
  static alloc(): UAThomasFormResult; // inherited from NSObject

  static new(): UAThomasFormResult; // inherited from NSObject

  readonly formData: NSDictionary<string, any>;

  readonly identifier: string;

  constructor(o: { identifier: string; formData: NSDictionary<string, any> });

  initWithIdentifierFormData(identifier: string, formData: NSDictionary<string, any>): this;
}

declare class UAThomasLayoutContext extends NSObject {
  static alloc(): UAThomasLayoutContext; // inherited from NSObject

  static new(): UAThomasLayoutContext; // inherited from NSObject

  readonly buttonInfo: UAThomasButtonInfo;

  readonly formInfo: UAThomasFormInfo;

  readonly pagerInfo: UAThomasPagerInfo;

  constructor(o: { formInfo: UAThomasFormInfo; pagerInfo: UAThomasPagerInfo; buttonInfo: UAThomasButtonInfo });

  initWithFormInfoPagerInfoButtonInfo(formInfo: UAThomasFormInfo, pagerInfo: UAThomasPagerInfo, buttonInfo: UAThomasButtonInfo): this;
}

declare class UAThomasPagerInfo extends NSObject {
  static alloc(): UAThomasPagerInfo; // inherited from NSObject

  static new(): UAThomasPagerInfo; // inherited from NSObject

  readonly completed: boolean;

  readonly identifier: string;

  readonly pageCount: number;

  readonly pageIdentifier: string;

  readonly pageIndex: number;

  constructor(o: { identifier: string; pageIndex: number; pageIdentifier: string; pageCount: number; completed: boolean });

  initWithIdentifierPageIndexPageIdentifierPageCountCompleted(identifier: string, pageIndex: number, pageIdentifier: string, pageCount: number, completed: boolean): this;
}

declare class UAURLAllowList extends NSObject implements UAURLAllowListProtocol {
  static alloc(): UAURLAllowList; // inherited from NSObject

  static allowListWithConfig(config: UARuntimeConfig): UAURLAllowList;

  static new(): UAURLAllowList; // inherited from NSObject

  delegate: UAURLAllowListDelegate;

  addEntry(patternString: string): boolean;

  addEntryScope(patternString: string, scope: UAURLAllowListScope): boolean;

  isAllowed(url: NSURL): boolean;

  isAllowedScope(url: NSURL, scope: UAURLAllowListScope): boolean;
}

interface UAURLAllowListDelegate {
  allowURLScope(url: NSURL, scope: UAURLAllowListScope): boolean;
}
declare var UAURLAllowListDelegate: {
  prototype: UAURLAllowListDelegate;
};

interface UAURLAllowListProtocol {
  addEntry(patternString: string): boolean;

  addEntryScope(patternString: string, scope: UAURLAllowListScope): boolean;

  isAllowed(url: NSURL): boolean;

  isAllowedScope(url: NSURL, scope: UAURLAllowListScope): boolean;
}
declare var UAURLAllowListProtocol: {
  prototype: UAURLAllowListProtocol;
};

declare const enum UAURLAllowListScope {
  JavaScriptInterface = 1,

  OpenURL = 2,

  All = 3,
}

declare class UAURLInfo extends NSObject {
  static alloc(): UAURLInfo; // inherited from NSObject

  static new(): UAURLInfo; // inherited from NSObject

  readonly url: string;

  readonly urlType: UAURLInfoURLType;

  constructor(o: { urlType: UAURLInfoURLType; url: string });

  initWithUrlTypeUrl(urlType: UAURLInfoURLType, url: string): this;
}

declare const enum UAURLInfoURLType {
  Web = 0,

  Video = 1,

  Image = 2,
}

declare class UAUtils extends NSObject {
  static ISODateFormatterUTC(): NSDateFormatter;

  static ISODateFormatterUTCWithDelimiter(): NSDateFormatter;

  static alloc(): UAUtils; // inherited from NSObject

  static authHeaderStringWithNamePassword(username: string, password: string): string;

  static bundleShortVersionString(): string;

  static carrierName(): string;

  static compareVersionToVersion(fromVersion: string, toVersion: string): NSComparisonResult;

  static connectionType(): string;

  static deviceModelName(): string;

  static deviceTokenStringFromDeviceToken(token: NSData): string;

  static findWindowSceneAndReturnError(): UIWindowScene;

  static floatIsEqualToFloatWithAccuracy(float1: number, float2: number, accuracy: number): boolean;

  static isAlertingPush(notification: NSDictionary<any, any>): boolean;

  static isSilentPush(notification: NSDictionary<any, any>): boolean;

  static mainWindow(): UIWindow;

  static mergeFetchResults(results: NSArray<number> | number[]): UIBackgroundFetchResult;

  static new(): UAUtils; // inherited from NSObject

  static parseISO8601DateFromString(from: string): Date;

  static parseURL(value: string): NSURL;

  static permissionStatusString(status: UAPermissionStatus): string;

  static permissionString(permission: UAPermission): string;

  static sha256DigestWithString(input: string): NSData;

  static sha256HashWithString(input: string): string;

  static windowForView(view: UIView): UIWindow;
}

declare class UAVersionMatcher extends NSObject {
  static alloc(): UAVersionMatcher; // inherited from NSObject

  static isExactVersion(versionConstraint: string): boolean;

  static isSubVersion(versionConstraint: string): boolean;

  static isVersionRange(versionConstraint: string): boolean;

  static matcherWithVersionConstraint(versionConstraint: string): UAVersionMatcher;

  static new(): UAVersionMatcher; // inherited from NSObject

  constructor(o: { versionConstraint: string });

  evaluateObject(value: any): boolean;

  initWithVersionConstraint(versionConstraint: string): this;
}

declare class UAViewUtils extends NSObject {
  static alloc(): UAViewUtils; // inherited from NSObject

  static applyContainerConstraintsToContainerContainedView(container: UIView, contained: UIView): void;

  static new(): UAViewUtils; // inherited from NSObject
}

declare class UAWebView extends WKWebView {
  static alloc(): UAWebView; // inherited from NSObject

  static appearance(): UAWebView; // inherited from UIAppearance

  static appearanceForTraitCollection(trait: UITraitCollection): UAWebView; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UAWebView; // inherited from UIAppearance

  static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): UAWebView; // inherited from UIAppearance

  static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UAWebView; // inherited from UIAppearance

  static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): UAWebView; // inherited from UIAppearance

  static new(): UAWebView; // inherited from NSObject
}

declare class UAirship extends NSObject {
  static alloc(): UAirship; // inherited from NSObject

  static componentForClassName(className: string): UAComponent;

  static new(): UAirship; // inherited from NSObject

  static setLogHandler(newValue: UAirshipLogHandler): void;

  static setLogLevel(newValue: UALogLevel): void;

  static takeOffLaunchOptions(config: UAConfig, launchOptions: NSDictionary<string, any>): void;

  static takeOffWithLaunchOptions(launchOptions: NSDictionary<string, any>): void;

  readonly URLAllowList: UAURLAllowList;

  readonly applicationMetrics: UAApplicationMetrics;

  readonly channelCapture: UAChannelCapture;

  readonly components: NSArray<UAComponent>;

  readonly config: UARuntimeConfig;

  deepLinkDelegate: UADeepLinkDelegate;

  javaScriptCommandDelegate: UAJavaScriptCommandDelegate;

  readonly localeManager: UALocaleManager;

  readonly permissionsManager: UAPermissionsManager;

  readonly privacyManager: UAPrivacyManager;

  static readonly airshipReadyAppKey: string;

  static readonly airshipReadyChannelIdentifier: string;

  static readonly airshipReadyNotification: string;

  static readonly airshipReadyPayloadVersion: string;

  static readonly analytics: UAAnalytics;

  static readonly channel: UAChannel;

  static readonly contact: UAContact;

  static readonly deepLinkScheme: string;

  static readonly isFlying: boolean;

  static logHandler: UAirshipLogHandler;

  static logLevel: UALogLevel;

  static readonly push: UAPush;

  static readonly shared: UAirship;

  deepLinkCompletionHandler(deepLink: NSURL, completionHandler: (p1: boolean) => void): void;
}

declare class UAirshipCoreResources extends NSObject {
  static alloc(): UAirshipCoreResources; // inherited from NSObject

  static new(): UAirshipCoreResources; // inherited from NSObject

  static readonly bundle: NSBundle;
}

declare class UAirshipDate extends NSObject {
  static alloc(): UAirshipDate; // inherited from NSObject

  static new(): UAirshipDate; // inherited from NSObject

  readonly now: Date;

  static readonly shared: UAirshipDate;
}

declare class UAirshipErrors extends NSObject {
  static alloc(): UAirshipErrors; // inherited from NSObject

  static error(message: string): NSError;

  static new(): UAirshipErrors; // inherited from NSObject

  static parseError(message: string): NSError;
}

declare class UAirshipImageData extends NSObject {
  static alloc(): UAirshipImageData; // inherited from NSObject

  static new(): UAirshipImageData; // inherited from NSObject

  constructor(o: { data: NSData });

  initWithDataError(data: NSData): this;
}

interface UAirshipLogHandler {
  logWithLogLevelMessageFileIDLineFunction(logLevel: UALogLevel, message: string, fileID: string, line: number, _function: string): void;
}
declare var UAirshipLogHandler: {
  prototype: UAirshipLogHandler;
};

declare class UAirshipVersion extends NSObject {
  static alloc(): UAirshipVersion; // inherited from NSObject

  static get(): string;

  static new(): UAirshipVersion; // inherited from NSObject
}

declare const enum UAirshipWorkerType {
  Serial = 0,

  Concurrent = 1,
}

declare const enum UrlTypes {
  Image = 0,

  Video = 1,

  Web = 2,
}
