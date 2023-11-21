import { ChatConfiguration, IAdvizeActivationParameters, IAdvizeAuthOption, IAdvizeCommon } from './common';
import { Application, Color, Utils } from '@nativescript/core';
import { Observable } from 'rxjs';

export { ChatConfiguration, IAdvizeAuthOption } from './common';

let instance: IAdvize;
export class IAdvize extends IAdvizeCommon {
  private static targetingListener: com.iadvize.conversation.sdk.feature.targeting.TargetingListener;
  private constructor() {
    super();
  }

  static getInstance() {
    if (!instance) {
      instance = new IAdvize();
    }
    return instance;
  }

  public setLanguage() {
    com.github.triniwiz.essent.AdvizeSDK.setLanguage();
  }

  public activate(parameters: IAdvizeActivationParameters) {
    com.github.triniwiz.essent.AdvizeSDK.activate(
      parameters.projectId,
      parameters.authOption,
      parameters.userId,
      new com.iadvize.conversation.sdk.IAdvizeSDK.Callback({
        onSuccess(): void {
          console.log('iAdvize[Android] activated');
          parameters.onSuccess();
        },
        onFailure(error): void {
          console.error('iAdvize[Android] activation failed' + error.getLocalizedMessage());
          parameters.onFailure();
        },
      }),
      parameters.legalUrl ?? null,
      parameters.jweToken ?? null
    );
  }

  public activateTargetingRule(targetingRuleUUID: string) {
    com.github.triniwiz.essent.AdvizeSDK.activateTargetingRule(targetingRuleUUID);
  }

  public setOnActiveTargetingRuleAvailabilityListener() {
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

  public static initiate() {
    com.iadvize.conversation.sdk.IAdvizeSDK.initiate(Utils.android.getApplicationContext() as any);
  }
}
