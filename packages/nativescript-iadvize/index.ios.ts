import { Color, ImageSource } from '@nativescript/core';
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

  private buildGdprOption(legalUrl: string | undefined) {
    if (!legalUrl) {
      return GDPROption.disabled();
    }

    const url = NSURL.URLWithString(legalUrl);
    const gdprEnabledOption = new GDPREnabledOption({ legalInformationURL: url });
    return new GDPROption({ gdprEnabledOption: gdprEnabledOption });
  }

  public activate(projectId: number, userId: string, legalUrl: string | undefined = undefined, onSuccess: () => void, onFailure: () => void) {
    const gdprOption = this.buildGdprOption(legalUrl);

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

  private buildTargetingRule(targetingRuleUUID: string) {
    const uuid = new NSUUID({ UUIDString: targetingRuleUUID });
    const conversationChannel = ConversationChannel.alloc().init();
    return TargetingRule.alloc().initWithIdObjcConversationChannel(uuid, conversationChannel);
  }

  public activateTargetingRule(targetingRuleUUID: string) {
    if (!this.targetingRuleDelegate) {
      this.targetingRuleDelegate = TargetingControllerDelegateImpl.initWithCallbacks((isActiveTargetingRuleAvailable: boolean) => {
        console.log('iAdvize[iOS] Targeting rule available - ' + isActiveTargetingRuleAvailable);
        if (isActiveTargetingRuleAvailable) {
          IAdvize.activateChatbot();
          return;
        }

        IAdvize.deactivateChatbot();
      });
    }

    IAdvizeSDK.shared.targetingController.delegate = this.targetingRuleDelegate;
    IAdvizeSDK.shared.targetingController.setLanguage(SDKLanguageOption.customWithValue(GraphQLLanguage.Nl));

    const navigationOption = NavigationOption.new();
    navigationOption.initWithKeepActiveRule();
    IAdvizeSDK.shared.targetingController.registerUserNavigationWithNavigationOption(navigationOption);
    IAdvizeSDK.shared.targetingController.activateTargetingRuleWithTargetingRule(this.buildTargetingRule(targetingRuleUUID));
  }

  public registerUserNavigation(targetingRuleUUID: string) {
    const navOption = NavigationOption.new();
    navOption.initWithNewTargetingRuleId(this.buildTargetingRule(targetingRuleUUID));
    IAdvizeSDK.shared.targetingController.registerUserNavigationWithNavigationOption(navOption);
  }

  public logout() {
    IAdvizeSDK.shared.logoutWithCompletion(() => {
      // logged out
    });
    IAdvize.deactivateChatbot();
  }

  public customize(configuration: ChatConfiguration) {
    const chatboxConfiguration = new ChatboxConfiguration();

    const mainColor = new Color(configuration.mainColor).ios;
    const resImage = ImageSource.fromFileOrResourceSync('res://' + configuration.incomingMessageAvatar);
    let avatar;
    if (resImage) {
      avatar = resImage.ios;
    }

    chatboxConfiguration.mainColor = mainColor;
    if (configuration.navigationBarBackgroundColor) {
      chatboxConfiguration.navigationBarBackgroundColor = new Color(configuration.navigationBarBackgroundColor).ios;
    }
    if (configuration.navigationBarMainColor) {
      chatboxConfiguration.navigationBarMainColor = new Color(configuration.navigationBarMainColor).ios;
    }

    chatboxConfiguration.automaticMessage = configuration.automaticMessage;
    if (avatar) {
      chatboxConfiguration.incomingMessageAvatar = new IncomingMessageAvatar({ image: avatar });
    }
    chatboxConfiguration.navigationBarTitle = configuration.navigationBarTitle;
    if (configuration.font && configuration.fontSize) {
      chatboxConfiguration.font = UIFont.fontWithNameSize(configuration.font, configuration.fontSize);
    }

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

  public isActiveTargetingRuleAvailable(): boolean {
    return IAdvizeSDK.shared.targetingController.isActiveTargetingRuleAvailable;
  }

  public hasOngoingConversation(): boolean {
    const ongoingConversation = IAdvizeSDK.shared.conversationController.ongoingConversation();
    if (!ongoingConversation) {
      return false;
    }

    return ongoingConversation.conversationId?.UUIDString?.trim().length !== 0;
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
