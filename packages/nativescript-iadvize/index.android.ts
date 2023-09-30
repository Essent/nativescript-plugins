import { ChatConfiguration, IAdvizeAuthOption, IAdvizeCommon } from './common';
import { Application, Color, ImageSource, Utils } from '@nativescript/core';
import { Observable } from 'rxjs';

let instance: IAdvize;
let didInit = false;
export class IAdvize extends IAdvizeCommon {
  private static targetingListener: com.iadvize.conversation.sdk.feature.targeting.TargetingListener;
  constructor() {
    super();
    if (instance) {
      return instance;
    }
    if (!instance) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      instance = this;
    }
  }

  static getInstance() {
    if (!instance) {
      instance = new IAdvize();
      IAdvize.initiate();
    }
    return instance;
  }

  public activate(projectId: number, authOption: IAdvizeAuthOption, userId: string, legalUrl: string | undefined = undefined, onSuccess: () => void, onFailure: () => void) {
    com.github.triniwiz.essent.AdvizeSDK.activate(
      projectId,
      authOption,
      userId,
      new com.iadvize.conversation.sdk.IAdvizeSDK.Callback({
        onSuccess(): void {
          console.log('iAdvize[Android] activated');
          onSuccess();
        },
        onFailure(error): void {
          console.error('iAdvize[Android] activation failed' + error.getLocalizedMessage());
          onFailure();
        },
      }),
      legalUrl ?? null
    );
  }

  public activateTargetingRule(targetingRuleUUID: string) {
    if (!IAdvize.targetingListener) {
      IAdvize.targetingListener = new com.iadvize.conversation.sdk.feature.targeting.TargetingListener({
        onActiveTargetingRuleAvailabilityUpdated(param0: boolean): void {
          console.log('iAdvize[Android] Targeting rule available - ' + param0);

          if (param0) {
            IAdvize.activateChatbot();
            return;
          }

          IAdvize.deactivateChatbot();
        },
      });
      com.github.triniwiz.essent.AdvizeSDK.setTargetingListener(IAdvize.targetingListener);
    }
    com.github.triniwiz.essent.AdvizeSDK.activateTargetingRule(targetingRuleUUID);
  }

  public registerUserNavigation(targetingRuleUUID: string) {
    com.github.triniwiz.essent.AdvizeSDK.registerUserNavigation(targetingRuleUUID);
  }

  public logout() {
    com.github.triniwiz.essent.AdvizeSDK.logout();
    IAdvize.deactivateChatbot();
  }

  public customize(configuration: ChatConfiguration) {
    com.github.triniwiz.essent.AdvizeSDK.customize(
      Utils.android.getApplicationContext(),
      JSON.stringify(configuration, (key, value) => {
        switch (key) {
          case 'mainColor':
          case 'navigationBarBackgroundColor':
          case 'navigationBarMainColor':
            return new Color(value).android;
          default:
            return value;
        }
      })
    );
  }

  public registerConversationListener(openURLCallback: (url: string) => boolean, ongoingConversationStatusDidChange: (hasOngoingConversation: boolean) => void, newMessageReceived: (content: string) => void) {
    com.github.triniwiz.essent.AdvizeSDK.registerConversationListener(
      new com.iadvize.conversation.sdk.feature.conversation.ConversationListener({
        onOngoingConversationUpdated(param0: com.iadvize.conversation.sdk.feature.conversation.OngoingConversation): void {
          ongoingConversationStatusDidChange(!!param0);
        },
        onNewMessageReceived(_param0: string): void {
          newMessageReceived(_param0);
        },
        handleClickedUrl(param0: globalAndroid.net.Uri): boolean {
          return !openURLCallback(param0.toString());
        },
      })
    );
  }

  public hideDefaultChatButton() {
    com.github.triniwiz.essent.AdvizeSDK.hideDefaultChatButton();
  }

  public presentChat() {
    com.github.triniwiz.essent.AdvizeSDK.presentChat(Application.android.foregroundActivity || Application.android.startActivity);
  }

  public dismissChat() {
    com.github.triniwiz.essent.AdvizeSDK.dismissChat();
  }

  public registerPushToken(token: string, _isProd: boolean) {
    com.github.triniwiz.essent.AdvizeSDK.registerPushToken(token);
  }

  public isChatPresented() {
    return com.github.triniwiz.essent.AdvizeSDK.isChatPresented();
  }

  public chatbotActivatedState(): Observable<boolean> {
    return IAdvize.getChatbotActivated().asObservable();
  }

  public setLogLevel(logLevel: number) {
    com.github.triniwiz.essent.AdvizeSDK.setLogLevel(logLevel);
  }

  public isActiveTargetingRuleAvailable(): boolean {
    return com.github.triniwiz.essent.AdvizeSDK.isActiveTargetingRuleAvailable();
  }

  public hasOngoingConversation(): boolean {
    return com.github.triniwiz.essent.AdvizeSDK.hasOngoingConversation();
  }

  private static initiate() {
    if (didInit) {
      return;
    }
    com.iadvize.conversation.sdk.IAdvizeSDK.initiate(Utils.android.getApplicationContext() as any);
    didInit = true;
  }
}
