import { ChatConfiguration, IAdvizeCommon } from './common';
import { Application, Color, ImageSource, Utils } from '@nativescript/core';
import { Observable } from 'rxjs';
import lazy from '@nativescript/core/utils/lazy';

const IAdvizeSDK = lazy<com.iadvize.conversation.sdk.IAdvizeSDK>(() => {
  const clazz = com.iadvize.conversation.sdk.IAdvizeSDK.class;
  const field = clazz.getDeclaredField('INSTANCE');
  field.setAccessible(true);
  return field.get(null);
});

let instance: IAdvize;
let didInit = false;
export class IAdvize extends IAdvizeCommon {
  constructor() {
    super();
    if (instance) {
      return instance;
    }
    if (!instance) {
      instance = this;
    }
  }

  static getInstance() {
    if (!instance) {
      instance = new IAdvize();
    }
    return instance;
  }

  public activate(projectId: number, userId: string, legalUrl: string | undefined = undefined, onSuccess: () => void, onFailure: () => void) {
    IAdvize.initate();

    let gdprOption;
    if (legalUrl) {
      const uri = new java.net.URI(legalUrl);
      const gdprEnabledOption = new com.iadvize.conversation.sdk.model.gdpr.GDPREnabledOption.LegalUrl(uri);
      gdprOption = new com.iadvize.conversation.sdk.model.gdpr.GDPROption.Enabled(gdprEnabledOption);
    } else {
      gdprOption = com.iadvize.conversation.sdk.model.gdpr.GDPROption.Disabled.class.getDeclaredField('INSTANCE').get(null);
    }

    com.iadvize.conversation.sdk.IAdvizeSDK.activate(
      projectId,
      new com.iadvize.conversation.sdk.model.auth.AuthenticationOption.Simple(userId),
      gdprOption,
      new com.iadvize.conversation.sdk.model.SDKCallback({
        onSuccess(): void {
          console.log('iAdvize[Android] activated');
          onSuccess();
        },
        onFailure(error): void {
          console.error('iAdvize[Android] activation failed' + error.getLocalizedMessage());
          onFailure();
        },
      })
    );
  }

  public activateTargetingRule(targetingRuleUUID: string) {
    if (!IAdvizeSDK()) {
      return;
    }

    const listeners = IAdvizeSDK().getTargetingController().getListeners();
    listeners.add(
      new com.iadvize.conversation.sdk.controller.targeting.TargetingListener({
        onActiveTargetingRuleAvailabilityUpdated(param0: boolean): void {
          console.log('iAdvize[Android] Targeting rule available - ' + param0);
          IAdvize.activateChatbot();
        },
      })
    );

    IAdvizeSDK().getTargetingController().activateTargetingRule(java.util.UUID.fromString(targetingRuleUUID));

    IAdvize.activateChatbot();
  }

  public logout() {
    com.iadvize.conversation.sdk.IAdvizeSDK.logout();
    IAdvize.deactivateChatbot();
  }

  public customize(configuration: ChatConfiguration) {
    if (!IAdvizeSDK()) {
      return;
    }
    const mainColor = new Color(configuration.mainColor).android;
    const navigationBarBackgroundColor = new Color(configuration.navigationBarBackgroundColor).android;
    const navigationBarMainColor = new Color(configuration.navigationBarMainColor).android;
    const avatar = ImageSource.fromFileOrResourceSync('res://' + configuration.incomingMessageAvatar).android;

    const chatboxConfiguration = new com.iadvize.conversation.sdk.model.configuration.ChatboxConfiguration(mainColor);
    chatboxConfiguration.setToolbarBackgroundColor(java.lang.Integer.valueOf(navigationBarBackgroundColor));
    chatboxConfiguration.setToolbarMainColor(java.lang.Integer.valueOf(navigationBarMainColor));
    chatboxConfiguration.setIncomingMessageAvatar(new com.iadvize.conversation.sdk.model.conversation.IncomingMessageAvatar.Image(new android.graphics.drawable.BitmapDrawable(Application.android.context.getResources(), avatar)));
    chatboxConfiguration.setAutomaticMessage(configuration.automaticMessage);
    chatboxConfiguration.setToolbarTitle(configuration.navigationBarTitle);
    chatboxConfiguration.setFontPath(configuration.font);

    IAdvizeSDK().getChatboxController().setupChatbox(chatboxConfiguration);
  }

  public registerConversationListener(openURLCallback: (url: string) => boolean, ongoingConversationStatusDidChange: (hasOngoingConversation: boolean) => void, newMessageReceived: (content: string) => void) {
    if (!IAdvizeSDK()) {
      return;
    }
    const listeners = IAdvizeSDK().getConversationController().getListeners();
    listeners.add(
      new com.iadvize.conversation.sdk.controller.conversation.ConversationListener({
        onOngoingConversationStatusChanged(param0: boolean): void {
          ongoingConversationStatusDidChange(param0);
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
    if (!IAdvizeSDK()) {
      return;
    }
    IAdvizeSDK().getChatboxController().setUseDefaultChatButton(false);
  }

  public presentChat() {
    if (!IAdvizeSDK()) {
      return;
    }
    IAdvizeSDK().getChatboxController().presentChatboxActivity(Application.android.foregroundActivity);
  }

  public dismissChat() {
    const isChatActivity = Application.android.foregroundActivity instanceof com.iadvize.conversation.sdk.view.ChatboxActivity;
    if (isChatActivity) {
      Application.android.foregroundActivity.finish();
    }
  }

  public registerPushToken(token: string, _isProd: boolean) {
    if (!IAdvizeSDK()) {
      return;
    }
    IAdvizeSDK().getNotificationController().registerPushToken(token);
  }

  public isChatPresented() {
    if (!IAdvizeSDK()) {
      return false;
    }
    return IAdvizeSDK().getChatboxController().isChatboxPresented();
  }

  public chatbotActivatedState(): Observable<boolean> {
    return IAdvize.getChatbotActivated().asObservable();
  }

  private static initate() {
    if (didInit) {
      return;
    }
    com.iadvize.conversation.sdk.IAdvizeSDK.initiate(Utils.android.getApplicationContext());
    didInit = true;
  }
}
