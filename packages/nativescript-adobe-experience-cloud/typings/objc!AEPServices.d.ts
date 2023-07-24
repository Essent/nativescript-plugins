declare class AEPCache extends NSObject {
  static alloc(): AEPCache; // inherited from NSObject

  static new(): AEPCache; // inherited from NSObject
}

declare class AEPDataEntity extends NSObject {
  static alloc(): AEPDataEntity; // inherited from NSObject

  static new(): AEPDataEntity; // inherited from NSObject
}

interface AEPDataQueue {
  addWithDataEntity(dataEntity: AEPDataEntity): boolean;

  clear(): boolean;

  close(): void;

  count(): number;

  peek(): AEPDataEntity;

  peekWithN(n: number): NSArray<AEPDataEntity>;

  remove(): boolean;

  removeWithN(n: number): boolean;
}
declare var AEPDataQueue: {
  prototype: AEPDataQueue;
};

interface AEPDataQueuing {
  getDataQueueWithLabel(label: string): AEPDataQueue;
}
declare var AEPDataQueuing: {
  prototype: AEPDataQueuing;
};

interface AEPDismissible {
  dismiss(): void;
}
declare var AEPDismissible: {
  prototype: AEPDismissible;
};

declare class AEPFloatingButton extends NSObject implements AEPFloatingButtonPresentable {
  static alloc(): AEPFloatingButton; // inherited from NSObject

  static new(): AEPFloatingButton; // inherited from NSObject

  dismiss(): void;

  setButtonImageWithImageData(imageData: NSData): void;

  setInitialWithPosition(position: AEPFloatingButtonPosition): void;

  show(): void;
}

interface AEPFloatingButtonDelegate {
  onDismissWithFloatingButton(): void;

  onPanDetected(): void;

  onShowWithFloatingButton(): void;

  onTapDetected(): void;
}
declare var AEPFloatingButtonDelegate: {
  prototype: AEPFloatingButtonDelegate;
};

declare const enum AEPFloatingButtonPosition {
  Center = 0,

  TopRight = 1,

  TopLeft = 2,
}

interface AEPFloatingButtonPresentable extends AEPDismissible, AEPShowable {
  setButtonImageWithImageData(imageData: NSData): void;

  setInitialWithPosition(position: AEPFloatingButtonPosition): void;
}
declare var AEPFloatingButtonPresentable: {
  prototype: AEPFloatingButtonPresentable;
};

declare class AEPFullscreenMessage extends NSObject implements AEPFullscreenPresentable, WKNavigationDelegate, WKScriptMessageHandler {
  static alloc(): AEPFullscreenMessage; // inherited from NSObject

  static new(): AEPFullscreenMessage; // inherited from NSObject

  settings: AEPMessageSettings;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  dismiss(): void;

  handleJavascriptMessageWithHandler(name: string, handler: (p1: any) => void): void;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  setAssetMap(map: NSDictionary<string, string>): void;

  show(): void;

  userContentControllerDidReceiveScriptMessage(userContentController: WKUserContentController, message: WKScriptMessage): void;

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

interface AEPFullscreenMessageDelegate {
  onDismissFullscreenMessage(message: AEPFullscreenMessage): void;

  onShowFailure(): void;

  onShowFullscreenMessage(message: AEPFullscreenMessage): void;

  overrideUrlLoadFullscreenMessageUrl(message: AEPFullscreenMessage, url: string): boolean;

  webViewDidFinishInitialLoading?(webView: WKWebView): void;
}
declare var AEPFullscreenMessageDelegate: {
  prototype: AEPFullscreenMessageDelegate;
};

interface AEPFullscreenPresentable extends AEPDismissible, AEPShowable {}
declare var AEPFullscreenPresentable: {
  prototype: AEPFullscreenPresentable;
};

declare const enum AEPHttpMethod {
  Get = 0,

  Post = 1,
}

declare class AEPLog extends NSObject {
  static alloc(): AEPLog; // inherited from NSObject

  static debugWithLabelMessage(label: string, message: string): void;

  static errorWithLabelMessage(label: string, message: string): void;

  static new(): AEPLog; // inherited from NSObject

  static setLogFilter(value: AEPLogLevel): void;

  static traceWithLabelMessage(label: string, message: string): void;

  static warningWithLabelMessage(label: string, message: string): void;

  static logFilter: AEPLogLevel;
}

declare const enum AEPLogLevel {
  Error = 0,

  Warning = 1,

  Debug = 2,

  Trace = 3,
}

interface AEPLogging {
  logWithLevelLabelMessage(level: AEPLogLevel, label: string, message: string): void;
}
declare var AEPLogging: {
  prototype: AEPLogging;
};

declare const enum AEPMessageAlignment {
  Center = 0,

  Left = 1,

  Right = 2,

  Top = 3,

  Bottom = 4,
}

declare const enum AEPMessageAnimation {
  None = 0,

  Left = 1,

  Right = 2,

  Top = 3,

  Bottom = 4,

  Center = 5,

  Fade = 6,
}

declare const enum AEPMessageGesture {
  SwipeUp = 0,

  SwipeDown = 1,

  SwipeLeft = 2,

  SwipeRight = 3,

  BackgroundTap = 4,
}

declare class AEPMessageSettings extends NSObject {
  static alloc(): AEPMessageSettings; // inherited from NSObject

  static new(): AEPMessageSettings; // inherited from NSObject

  readonly parent: any;

  constructor(o: { parent: any });

  initWithParent(parent: any): this;

  setBackdropColor(color: string): AEPMessageSettings;
}

interface AEPMessagingDelegate {
  onDismiss(message: AEPShowable): void;

  onShow(message: AEPShowable): void;

  shouldShowMessage(message: AEPShowable): boolean;

  urlLoadedByMessage?(url: NSURL, message: AEPShowable): void;
}
declare var AEPMessagingDelegate: {
  prototype: AEPMessagingDelegate;
};

declare class AEPNetworkRequest extends NSObject {
  static alloc(): AEPNetworkRequest; // inherited from NSObject

  static new(): AEPNetworkRequest; // inherited from NSObject
}

declare var AEPServicesVersionNumber: number;

declare var AEPServicesVersionString: interop.Reference<number>;

interface AEPShowable {
  show(): void;
}
declare var AEPShowable: {
  prototype: AEPShowable;
};

interface AEPUIServiceProtocol {
  createFloatingButtonWithListener(listener: AEPFloatingButtonDelegate): AEPFloatingButtonPresentable;

  createFullscreenMessageWithPayloadListenerIsLocalImageUsed(payload: string, listener: AEPFullscreenMessageDelegate, isLocalImageUsed: boolean): AEPFullscreenPresentable;

  createFullscreenMessageWithPayloadListenerIsLocalImageUsedSettings?(payload: string, listener: AEPFullscreenMessageDelegate, isLocalImageUsed: boolean, settings: AEPMessageSettings): AEPFullscreenPresentable;
}
declare var AEPUIServiceProtocol: {
  prototype: AEPUIServiceProtocol;
};
