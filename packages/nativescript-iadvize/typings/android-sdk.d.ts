declare module com {
  export module github {
    export module triniwiz {
      export module essent {
        export class AdvizeSDK {
          public static class: java.lang.Class<com.github.triniwiz.essent.AdvizeSDK>;
          public static dismissChat(): void;
          public static activateTargetingRule(param0: string): void;
          public static customize(param0: globalAndroid.content.Context, param1: string): void;
          public static presentChat(param0: globalAndroid.content.Context): void;
          public static isActiveTargetingRuleAvailable(): boolean;
          public static hideDefaultChatButton(): void;
          public static setLogLevel(param0: number): void;
          public static registerConversationListener(param0: com.iadvize.conversation.sdk.feature.conversation.ConversationListener): void;
          public static logout(): void;
          public static registerPushToken(param0: string): void;
          public static isChatPresented(): boolean;
          public static hasOngoingConversation(): boolean;
          public static setTargetingListener(param0: com.iadvize.conversation.sdk.feature.targeting.TargetingListener): void;
          public constructor();
          public static getTargetingListener(): com.iadvize.conversation.sdk.feature.targeting.TargetingListener;
          public static activate(param0: number, param1: string, param2: string, param3: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): void;
          public static activate(param0: number, param1: string, param2: string, param3: com.iadvize.conversation.sdk.IAdvizeSDK.Callback, param4: string): void;
          public static registerUserNavigation(param0: string): void;
          public static setLanguage(): void;
        }
        export module AdvizeSDK {
          export class Companion {
            public static class: java.lang.Class<com.github.triniwiz.essent.AdvizeSDK.Companion>;
            public registerConversationListener(param0: com.iadvize.conversation.sdk.feature.conversation.ConversationListener): void;
            public registerUserNavigation(param0: string): void;
            public setTargetingListener(param0: com.iadvize.conversation.sdk.feature.targeting.TargetingListener): void;
            public registerPushToken(param0: string): void;
            public hasOngoingConversation(): boolean;
            public isChatPresented(): boolean;
            public logout(): void;
            public presentChat(param0: globalAndroid.content.Context): void;
            public activate(param0: number, param1: string, param2: string, param3: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): void;
            public setDEBUG(param0: boolean): void;
            public getTargetingListener(): com.iadvize.conversation.sdk.feature.targeting.TargetingListener;
            public getDEBUG(): boolean;
            public isActiveTargetingRuleAvailable(): boolean;
            public activate(param0: number, param1: string, param2: string, param3: com.iadvize.conversation.sdk.IAdvizeSDK.Callback, param4: string): void;
            public customize(param0: globalAndroid.content.Context, param1: string): void;
            public activateTargetingRule(param0: string): void;
            public dismissChat(): void;
            public hideDefaultChatButton(): void;
            public setLogLevel(param0: number): void;
          }
        }
      }
    }
  }
}

//Generics information:
