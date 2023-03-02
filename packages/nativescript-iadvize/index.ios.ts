import { Application, Color, ImageSource } from '@nativescript/core';
import { ChatConfiguration, IAdvizeCommon } from './common';
import { Observable } from 'rxjs';

export class IAdvize extends IAdvizeCommon {
  private static instance: IAdvize = new IAdvize();
  private delegate: ConversationControllerDelegateImpl;
  private targetingRuleDelegate: TargetingControllerDelegateImpl;

  constructor() {
    super();
    if (IAdvize.instance) {
      throw new Error('iAdvize[iOS] Error: Instance failed: Use IAdvize.getInstance() instead of new.');
    }
    IAdvize.instance = this;
  }

  static getInstance() {
    return IAdvize.instance;
  }

  public activate(projectId: number, userId: string, legalUrl: string | undefined = undefined, onSuccess: () => void, onFailure: () => void) {
    let gdprOption;

    if (legalUrl) {
      const url = NSURL.URLWithString(legalUrl);
      const gdprEnabledOption = new GDPREnabledOption({ legalInformationURL: url });
      gdprOption = new GDPROption({ gdprEnabledOption: gdprEnabledOption });
    } else {
      gdprOption = GDPROption.disabled();
    }

    IAdvizeSDK.shared.activateWithProjectIdAuthenticationOptionGdprOptionCompletion(projectId, new AuthenticationOption({ simple: userId }), gdprOption, (success: boolean) => {
      if (success) {
        console.log('iAdvize[iOS] activated');
        onSuccess();
      } else {
        console.error('iAdvize[iOS] activation failed');
        onFailure();
      }
    });
  }

  public activateTargetingRule(targetingRuleUUID: string) {
    this.targetingRuleDelegate = TargetingControllerDelegateImpl.initWithCallbacks((isActiveTargetingRuleAvailable: boolean) => {
      console.log('iAdvize[iOS] Targeting rule available - ' + isActiveTargetingRuleAvailable);
      IAdvize.activateChatbot();
    });
    IAdvizeSDK.shared.targetingController.delegate = this.targetingRuleDelegate;
    IAdvizeSDK.shared.targetingController.activateTargetingRuleWithTargetingRule(TargetingRule.alloc().initWithIdObjcConversationChannel(new NSUUID({ UUIDString: targetingRuleUUID }), ConversationChannel.alloc().init()));
    IAdvizeSDK.shared.targetingController.setLanguage(SDKLanguageOption.customWithValue(GraphQLLanguage.Nl));
  }

  public logout() {
    IAdvizeSDK.shared.logoutWithCompletion(() => {
      // logged out
    });
    IAdvize.deactivateChatbot();
  }

  public customize(configuration: ChatConfiguration) {
    const mainColor = new Color(configuration.mainColor).ios;
    const navigationBarBackgroundColor = new Color(configuration.navigationBarBackgroundColor).ios;
    const navigationBarMainColor = new Color(configuration.navigationBarMainColor).ios;
    const resImage = ImageSource.fromFileOrResourceSync('res://' + configuration.incomingMessageAvatar);
    let avatar;
    if (resImage) {
      avatar = resImage.ios;
    }

    const chatboxConfiguration = new ChatboxConfiguration();

    chatboxConfiguration.mainColor = mainColor;
    chatboxConfiguration.navigationBarBackgroundColor = navigationBarBackgroundColor;
    chatboxConfiguration.navigationBarMainColor = navigationBarMainColor;
    chatboxConfiguration.automaticMessage = configuration.automaticMessage;
    if (avatar) {
      chatboxConfiguration.incomingMessageAvatar = new IncomingMessageAvatar({ image: avatar });
    }
    chatboxConfiguration.navigationBarTitle = configuration.navigationBarTitle;
    chatboxConfiguration.font = UIFont.fontWithNameSize(configuration.font, 12);

    chatboxConfiguration.presentationStyle = UIModalPresentationStyle.FullScreen;

    IAdvizeSDK.shared.chatboxController.setupChatboxWithConfiguration(chatboxConfiguration);
  }

  public registerConversationListener(openURLCallback: (url: string) => boolean, ongoingConversationStatusDidChange: (hasOngoingConversation: boolean) => void, newMessageReceived: (content: string) => void) {
    this.delegate = ConversationControllerDelegateImpl.initWithCallbacks(openURLCallback, ongoingConversationStatusDidChange, newMessageReceived);
    IAdvizeSDK.shared.conversationController.delegate = this.delegate;
  }

  public hideDefaultChatButton() {
    IAdvizeSDK.shared.chatboxController.useDefaultFloatingButton = false;
  }

  public presentChat() {
    IAdvizeSDK.shared.chatboxController.presentChatboxWithAnimatedPresentingViewControllerCompletion(true, getRootViewController(), () => {});
  }

  public dismissChat() {
    IAdvizeSDK.shared.chatboxController.dismissChatboxWithAnimatedCompletion(false, () => {});
  }

  public registerPushToken(token: string, isProd: boolean) {
    IAdvizeSDK.shared.notificationController.registerPushTokenApplicationMode(token, isProd ? GraphQLApplicationMode.Prod : GraphQLApplicationMode.Dev);
  }

  public isChatPresented() {
    return IAdvizeSDK.shared.chatboxController.isChatboxPresented();
  }

  public chatbotActivatedState(): Observable<boolean> {
    return IAdvize.getChatbotActivated().asObservable();
  }

  public setLogLevel(logLevel: number) {
    IAdvizeSDK.shared.setLogLevel(this.logLevelFrom(logLevel));
  }

  private logLevelFrom(logLevel: number): LoggerLogLevel {
    switch (logLevel) {
      case 0:
        return LoggerLogLevel.Verbose;
      case 1:
        return LoggerLogLevel.Info;
      case 3:
        return LoggerLogLevel.Error;
      case 2:
      default:
        return LoggerLogLevel.Warning;
    }
  }
}

@NativeClass()
class ConversationControllerDelegateImpl extends NSObject implements ConversationControllerDelegate {
  static ObjCProtocols = [ConversationControllerDelegate];
  private openURLCallback: (url: string) => boolean;
  private ongoingConversationStatusDidChange: (hasOngoingConversation: boolean) => void;
  private newMessageReceived: (content: string) => void;

  static initWithCallbacks(openURLCallback: (url: string) => boolean, ongoingConversationStatusDidChange: (hasOngoingConversation: boolean) => void, newMessageReceived: (content: string) => void): ConversationControllerDelegateImpl {
    const delegate = <ConversationControllerDelegateImpl>super.new();
    delegate.openURLCallback = openURLCallback;
    delegate.ongoingConversationStatusDidChange = ongoingConversationStatusDidChange;
    delegate.newMessageReceived = newMessageReceived;
    return delegate;
  }

  conversationControllerShouldOpen?(_controller: ConversationController, url: NSURL): boolean {
    return this.openURLCallback(url.absoluteString);
  }

  didReceiveNewMessageWithContent?(_content: string): void {
    this.newMessageReceived(_content);
  }

  ongoingConversationStatusDidChangeWithHasOngoingConversation(hasOngoingConversation: boolean): void {
    this.ongoingConversationStatusDidChange(hasOngoingConversation);
  }

  ongoingConversationUpdatedWithOngoingConversation(ongoingConversation: OngoingConversation): void {}
}

@NativeClass()
class TargetingControllerDelegateImpl extends NSObject implements TargetingControllerDelegate {
  static ObjCProtocols = [TargetingControllerDelegate];
  private isActiveTargetingRuleAvailableCallback: (isActiveTargetingRuleAvailable: boolean) => void;

  static initWithCallbacks(isActiveTargetingRuleAvailableCallback: (isActiveTargetingRuleAvailable: boolean) => void): TargetingControllerDelegateImpl {
    const delegate = <TargetingControllerDelegateImpl>super.new();
    delegate.isActiveTargetingRuleAvailableCallback = isActiveTargetingRuleAvailableCallback;
    return delegate;
  }

  activeTargetingRuleAvailabilityDidUpdateWithIsActiveTargetingRuleAvailable(isActiveTargetingRuleAvailable: boolean): void {
    this.isActiveTargetingRuleAvailableCallback(isActiveTargetingRuleAvailable);
  }
}

function getRootViewController(): UIViewController {
  const app = UIApplication.sharedApplication;
  const win = app.keyWindow || (app.windows && app.windows.count > 0 && app.windows.objectAtIndex(0));
  let vc = win.rootViewController;
  while (vc && vc.presentedViewController) {
    vc = vc.presentedViewController;
  }
  return vc;
}
