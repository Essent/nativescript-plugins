declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export class IAdvizeSDK {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK>;
          public static INSTANCE: com.iadvize.conversation.sdk.IAdvizeSDK;
          public getChatboxController(): com.iadvize.conversation.sdk.controller.chatbox.ChatboxController;
          public static activate(param0: number, param1: com.iadvize.conversation.sdk.model.auth.AuthenticationOption, param2: com.iadvize.conversation.sdk.model.gdpr.GDPROption, param3: com.iadvize.conversation.sdk.model.SDKCallback): void;
          public getConversationControllerImpl$sdk_clientRelease(): d.b;
          public static setLogLevel(param0: com.iadvize.conversation.sdk.utils.logger.Logger.Level): void;
          public getTransactionController(): com.iadvize.conversation.sdk.controller.transaction.TransactionController;
          public getChatboxControllerImpl$sdk_clientRelease(): c.d;
          public getVisitorControllerImpl$sdk_clientRelease(): j.a;
          public clear$sdk_clientRelease(): void;
          public withActivatedSdk$sdk_clientRelease(param0: string, param1: any, param2: any): void;
          public static activate(param0: number, param1: com.iadvize.conversation.sdk.model.auth.AuthenticationOption, param2: com.iadvize.conversation.sdk.model.gdpr.GDPROption): void;
          public getSdkScope$sdk_clientRelease(): I.a;
          public getTransactionControllerImpl$sdk_clientRelease(): i.a;
          public getConversationController(): com.iadvize.conversation.sdk.controller.conversation.ConversationController;
          public getGraphQLApi$sdk_clientRelease(): o.a;
          public static activate(param0: number, param1: com.iadvize.conversation.sdk.model.auth.AuthenticationOption): void;
          public static logout(): void;
          public getVisitorController(): com.iadvize.conversation.sdk.controller.visitor.VisitorController;
          public static initiate(param0: globalAndroid.app.Application): void;
          public getTargetingController(): com.iadvize.conversation.sdk.controller.targeting.TargetingController;
          public getNotificationController(): com.iadvize.conversation.sdk.controller.notification.NotificationController;
          public getActivationStatus(): com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus;
          public getEnvironment$sdk_clientRelease(): v.a;
          public setEnvironment$sdk_clientRelease(param0: v.a): void;
          public static getLogLevel(): com.iadvize.conversation.sdk.utils.logger.Logger.Level;
          public getNotificationControllerImpl$sdk_clientRelease(): g.a;
          public getTargetingControllerImpl$sdk_clientRelease(): h.b;
          public setActivationStatus$sdk_clientRelease(param0: com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus): void;
        }
        export module IAdvizeSDK {
          export class ActivationStatus {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus>;
            public static OFF: com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus;
            public static INITIALIZED: com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus;
            public static ACTIVATING: com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus;
            public static ACTIVATED: com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus;
            public static values(): androidNative.Array<com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus>;
            public static valueOf(param0: string): com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus;
          }
          export class a extends com.iadvize.conversation.sdk.controller.targeting.TargetingListener {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.a>;
            public onActiveTargetingRuleAvailabilityUpdated(param0: boolean): void;
          }
          export class b {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.b>;
          }
          export class c extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope, any, any> {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.c>;
            public create(param0: any, param1: any): any;
            public invoke(param0: any, param1: any): any;
            public invokeSuspend(param0: any): any;
          }
          export module c {
            export class a extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope, any, any> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.c.a>;
              public invokeSuspend(param0: any): any;
              public invoke(param0: any, param1: any): any;
              public create(param0: any, param1: any): any;
            }
            export class b extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope, any, any> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.c.b>;
              public invokeSuspend(param0: any): any;
              public invoke(param0: any, param1: any): any;
              public create(param0: any, param1: any): any;
            }
          }
          export class d extends com.iadvize.conversation.sdk.model.SDKCallback {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.d>;
            public onFailure(param0: java.lang.Throwable): void;
            public onSuccess(): void;
          }
          export class e {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.e>;
            public constructor(param0: kotlinx.coroutines.CoroutineExceptionHandler.Key);
            public handleException(param0: any, param1: java.lang.Throwable): void;
          }
          export class f extends java.lang.Object implements any {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.f>;
            public static a: com.iadvize.conversation.sdk.IAdvizeSDK.f;
            public constructor();
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module controller {
          export module chatbox {
            export class ChatboxController {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.chatbox.ChatboxController>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.sdk.controller.chatbox.ChatboxController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getListeners(): java.util.List<com.iadvize.conversation.sdk.controller.chatbox.ChatboxListener>; setListeners(param0: java.util.List<com.iadvize.conversation.sdk.controller.chatbox.ChatboxListener>): void; getUseDefaultChatButton(): boolean; setUseDefaultChatButton(param0: boolean): void; isChatboxPresented(): boolean; setupChatbox(param0: com.iadvize.conversation.sdk.model.configuration.ChatboxConfiguration): void; presentChatboxActivity(param0: globalAndroid.content.Context): void; setChatButtonPosition(param0: number, param1: number): void });
              public constructor();
              public isChatboxPresented(): boolean;
              public presentChatboxActivity(param0: globalAndroid.content.Context): void;
              public setListeners(param0: java.util.List<com.iadvize.conversation.sdk.controller.chatbox.ChatboxListener>): void;
              public setupChatbox(param0: com.iadvize.conversation.sdk.model.configuration.ChatboxConfiguration): void;
              public getListeners(): java.util.List<com.iadvize.conversation.sdk.controller.chatbox.ChatboxListener>;
              public setUseDefaultChatButton(param0: boolean): void;
              public getUseDefaultChatButton(): boolean;
              public setChatButtonPosition(param0: number, param1: number): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module controller {
          export module chatbox {
            export class ChatboxListener {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.chatbox.ChatboxListener>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.sdk.controller.chatbox.ChatboxListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onChatboxOpened(): void; onChatboxClosed(): void });
              public constructor();
              public onChatboxClosed(): void;
              public onChatboxOpened(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module controller {
          export module conversation {
            export class ConversationController {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.conversation.ConversationController>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.sdk.controller.conversation.ConversationController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getListeners(): java.util.List<com.iadvize.conversation.sdk.controller.conversation.ConversationListener>; hasOngoingConversation(): boolean });
              public constructor();
              public getListeners(): java.util.List<com.iadvize.conversation.sdk.controller.conversation.ConversationListener>;
              public hasOngoingConversation(): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module controller {
          export module conversation {
            export class ConversationListener {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.conversation.ConversationListener>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.sdk.controller.conversation.ConversationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onOngoingConversationStatusChanged(param0: boolean): void; onNewMessageReceived(param0: string): void; handleClickedUrl(param0: globalAndroid.net.Uri): boolean });
              public constructor();
              public onNewMessageReceived(param0: string): void;
              public handleClickedUrl(param0: globalAndroid.net.Uri): boolean;
              public onOngoingConversationStatusChanged(param0: boolean): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module controller {
          export module conversation {
            export class NoOpConversationListener extends com.iadvize.conversation.sdk.controller.conversation.ConversationListener {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.conversation.NoOpConversationListener>;
              public constructor();
              public onNewMessageReceived(param0: string): void;
              public handleClickedUrl(param0: globalAndroid.net.Uri): boolean;
              public onOngoingConversationStatusChanged(param0: boolean): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module controller {
          export module notification {
            export class NotificationController {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.notification.NotificationController>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.sdk.controller.notification.NotificationController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { registerPushToken(param0: string): void; enablePushNotifications(param0: com.iadvize.conversation.sdk.model.SDKCallback): void; disablePushNotifications(param0: com.iadvize.conversation.sdk.model.SDKCallback): void; isIAdvizePushNotification(param0: java.util.Map<string, string>): boolean });
              public constructor();
              public registerPushToken(param0: string): void;
              public enablePushNotifications(param0: com.iadvize.conversation.sdk.model.SDKCallback): void;
              public isIAdvizePushNotification(param0: java.util.Map<string, string>): boolean;
              public disablePushNotifications(param0: com.iadvize.conversation.sdk.model.SDKCallback): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module controller {
          export module targeting {
            export class TargetingController {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.targeting.TargetingController>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.sdk.controller.targeting.TargetingController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { hasAvailableActiveTargetingRule(): boolean; getListeners(): java.util.List<com.iadvize.conversation.sdk.controller.targeting.TargetingListener>; setListeners(param0: java.util.List<com.iadvize.conversation.sdk.controller.targeting.TargetingListener>): void; registerUserNavigation(param0: com.iadvize.conversation.sdk.model.targeting.NavigationOption): void; activateTargetingRule(param0: java.util.UUID): void; getLanguage(): com.iadvize.conversation.sdk.model.language.LanguageOption; setLanguage(param0: com.iadvize.conversation.sdk.model.language.LanguageOption): void });
              public constructor();
              public activateTargetingRule(param0: java.util.UUID): void;
              public setListeners(param0: java.util.List<com.iadvize.conversation.sdk.controller.targeting.TargetingListener>): void;
              public setLanguage(param0: com.iadvize.conversation.sdk.model.language.LanguageOption): void;
              public getListeners(): java.util.List<com.iadvize.conversation.sdk.controller.targeting.TargetingListener>;
              public registerUserNavigation(param0: com.iadvize.conversation.sdk.model.targeting.NavigationOption): void;
              public hasAvailableActiveTargetingRule(): boolean;
              public getLanguage(): com.iadvize.conversation.sdk.model.language.LanguageOption;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module controller {
          export module targeting {
            export class TargetingListener {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.targeting.TargetingListener>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.sdk.controller.targeting.TargetingListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onActiveTargetingRuleAvailabilityUpdated(param0: boolean): void });
              public constructor();
              public onActiveTargetingRuleAvailabilityUpdated(param0: boolean): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module controller {
          export module transaction {
            export class TransactionController {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.transaction.TransactionController>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.sdk.controller.transaction.TransactionController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { register(param0: com.iadvize.conversation.sdk.model.transaction.Transaction): void });
              public constructor();
              public register(param0: com.iadvize.conversation.sdk.model.transaction.Transaction): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module controller {
          export module visitor {
            export class VisitorController {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.controller.visitor.VisitorController>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.sdk.controller.visitor.VisitorController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { registerCustomData(param0: java.util.List<com.iadvize.conversation.sdk.model.visitor.CustomData>, param1: com.iadvize.conversation.sdk.model.SDKCallback): void });
              public constructor();
              public registerCustomData(param0: java.util.List<com.iadvize.conversation.sdk.model.visitor.CustomData>, param1: com.iadvize.conversation.sdk.model.SDKCallback): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module model {
          export class InvalidConversationException {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.model.InvalidConversationException>;
            public constructor(param0: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module model {
          export class InvalidJwtException {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.model.InvalidJwtException>;
            public constructor();
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module model {
          export class SDKCallback {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.model.SDKCallback>;
            /**
             * Constructs a new instance of the com.iadvize.conversation.sdk.model.SDKCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onSuccess(): void; onFailure(param0: java.lang.Throwable): void });
            public constructor();
            public onFailure(param0: java.lang.Throwable): void;
            public onSuccess(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module model {
          export class SdkActivationError {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.model.SdkActivationError>;
            public getMessage(): string;
            public constructor(param0: com.iadvize.conversation.sdk.model.SdkActivationErrorReason);
            public getReason(): com.iadvize.conversation.sdk.model.SdkActivationErrorReason;
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module model {
          export class SdkActivationErrorReason {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.model.SdkActivationErrorReason>;
            public static SDK_NOT_INITIATED: com.iadvize.conversation.sdk.model.SdkActivationErrorReason;
            public static INVALID_PROJECT_ID: com.iadvize.conversation.sdk.model.SdkActivationErrorReason;
            public static INVALID_AUTH_USER_ID: com.iadvize.conversation.sdk.model.SdkActivationErrorReason;
            public static REQUEST_TOKEN_ERROR: com.iadvize.conversation.sdk.model.SdkActivationErrorReason;
            public static values(): androidNative.Array<com.iadvize.conversation.sdk.model.SdkActivationErrorReason>;
            public getDescription(): string;
            public static valueOf(param0: string): com.iadvize.conversation.sdk.model.SdkActivationErrorReason;
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module model {
          export class SdkNotActivatedException {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.model.SdkNotActivatedException>;
            public constructor();
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module model {
          export module api {
            export module satisfaction {
              export class SatisfactionPayload {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.model.api.satisfaction.SatisfactionPayload>;
                public toString(): string;
                public getGrade(): com.iadvize.conversation.sdk.model.satisfaction.SatisfactionGrade;
                public getValue(): any;
                public getVuid(): string;
                public equals(param0: any): boolean;
                public getConversationId(): string;
                public component2(): string;
                public component1(): string;
                public component5(): any;
                public component4(): com.iadvize.conversation.sdk.model.satisfaction.SatisfactionGrade;
                public constructor(param0: string, param1: string, param2: string, param3: com.iadvize.conversation.sdk.model.satisfaction.SatisfactionGrade, param4: any);
                public copy(param0: string, param1: string, param2: string, param3: com.iadvize.conversation.sdk.model.satisfaction.SatisfactionGrade, param4: any): com.iadvize.conversation.sdk.model.api.satisfaction.SatisfactionPayload;
                public getId(): string;
                public component3(): string;
                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module model {
          export module auth {
            export abstract class AuthenticationOption {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.model.auth.AuthenticationOption>;
              public static Companion: com.iadvize.conversation.sdk.model.auth.AuthenticationOption.a;
            }
            export module AuthenticationOption {
              export class Anonymous extends com.iadvize.conversation.sdk.model.auth.AuthenticationOption {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.model.auth.AuthenticationOption.Anonymous>;
                public static INSTANCE: com.iadvize.conversation.sdk.model.auth.AuthenticationOption.Anonymous;
              }
              export class Simple extends com.iadvize.conversation.sdk.model.auth.AuthenticationOption {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.model.auth.AuthenticationOption.Simple>;
                public getUserId(): string;
                public constructor(param0: string);
              }
              export class a {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.model.auth.AuthenticationOption.a>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module model {
          export module configuration {
            export class ChatButtonPosition {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.model.configuration.ChatButtonPosition>;
              public setBottomMargin(param0: number): void;
              public copy(param0: number, param1: number): com.iadvize.conversation.sdk.model.configuration.ChatButtonPosition;
              public setLeftMargin(param0: number): void;
              public component1(): number;
              public constructor(param0: number, param1: number);
              public getLeftMargin(): number;
              public hashCode(): number;
              public getBottomMargin(): number;
              public component2(): number;
              public toString(): string;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module model {
          export module configuration {
            export class ChatboxConfiguration {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.model.configuration.ChatboxConfiguration>;
              public hashCode(): number;
              public getToolbarBackgroundColor(): java.lang.Integer;
              public setMainColor(param0: number): void;
              public getGdprMessage(): string;
              public toString(): string;
              public setFontPath(param0: string): void;
              public component3(): string;
              public setToolbarBackgroundColor(param0: java.lang.Integer): void;
              public constructor(param0: number, param1: string, param2: string);
              public constructor(param0: number, param1: string, param2: string, param3: string);
              public component6(): java.lang.Integer;
              public getToolbarMainColor(): java.lang.Integer;
              public setToolbarTitle(param0: string): void;
              public component7(): java.lang.Integer;
              public getFontPath(): string;
              public setGdprMessage(param0: string): void;
              public constructor(param0: number, param1: string, param2: string, param3: string, param4: string, param5: java.lang.Integer);
              public constructor();
              public component2(): string;
              public setIncomingMessageAvatar(param0: com.iadvize.conversation.sdk.model.conversation.IncomingMessageAvatar): void;
              public getAutomaticMessage(): string;
              public component5(): string;
              public component8(): com.iadvize.conversation.sdk.model.conversation.IncomingMessageAvatar;
              public constructor(param0: number, param1: string, param2: string, param3: string, param4: string);
              public constructor(param0: number);
              public getMainColor(): number;
              public copy(param0: number, param1: string, param2: string, param3: string, param4: string, param5: java.lang.Integer, param6: java.lang.Integer, param7: com.iadvize.conversation.sdk.model.conversation.IncomingMessageAvatar): com.iadvize.conversation.sdk.model.configuration.ChatboxConfiguration;
              public constructor(param0: number, param1: string, param2: string, param3: string, param4: string, param5: java.lang.Integer, param6: java.lang.Integer, param7: com.iadvize.conversation.sdk.model.conversation.IncomingMessageAvatar);
              public setAutomaticMessage(param0: string): void;
              public component1(): number;
              public getIncomingMessageAvatar(): com.iadvize.conversation.sdk.model.conversation.IncomingMessageAvatar;
              public setToolbarMainColor(param0: java.lang.Integer): void;
              public component4(): string;
              public constructor(param0: number, param1: string, param2: string, param3: string, param4: string, param5: java.lang.Integer, param6: java.lang.Integer);
              public getToolbarTitle(): string;
              public equals(param0: any): boolean;
              public constructor(param0: number, param1: string);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module model {
          export module conversation {
            export abstract class IncomingMessageAvatar {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.model.conversation.IncomingMessageAvatar>;
              public toSenderAvatar$sdk_clientRelease(): com.iadvize.conversation_ui.models.SenderAvatar;
            }
            export module IncomingMessageAvatar {
              export class Image extends com.iadvize.conversation.sdk.model.conversation.IncomingMessageAvatar {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.model.conversation.IncomingMessageAvatar.Image>;
                public constructor(param0: globalAndroid.graphics.drawable.Drawable);
                public getValue(): globalAndroid.graphics.drawable.Drawable;
              }
              export class Url extends com.iadvize.conversation.sdk.model.conversation.IncomingMessageAvatar {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.model.conversation.IncomingMessageAvatar.Url>;
                public getValue(): java.net.URL;
                public constructor(param0: java.net.URL);
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module model {
          export module gdpr {
            export abstract class GDPREnabledOption {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.model.gdpr.GDPREnabledOption>;
            }
            export module GDPREnabledOption {
              export class LegalUrl extends com.iadvize.conversation.sdk.model.gdpr.GDPREnabledOption {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.model.gdpr.GDPREnabledOption.LegalUrl>;
                public getLegalInformationURI(): java.net.URI;
                public constructor(param0: java.net.URI);
              }
              export class Listener extends com.iadvize.conversation.sdk.model.gdpr.GDPREnabledOption {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.model.gdpr.GDPREnabledOption.Listener>;
                public getListener(): com.iadvize.conversation.sdk.model.gdpr.GDPRListener;
                public constructor(param0: com.iadvize.conversation.sdk.model.gdpr.GDPRListener);
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module model {
          export module gdpr {
            export class GDPRListener {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.model.gdpr.GDPRListener>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.sdk.model.gdpr.GDPRListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { didTapMoreInformation(): void });
              public constructor();
              public didTapMoreInformation(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module model {
          export module gdpr {
            export abstract class GDPROption {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.model.gdpr.GDPROption>;
            }
            export module GDPROption {
              export class Disabled extends com.iadvize.conversation.sdk.model.gdpr.GDPROption {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.model.gdpr.GDPROption.Disabled>;
                public static INSTANCE: com.iadvize.conversation.sdk.model.gdpr.GDPROption.Disabled;
              }
              export class Enabled extends com.iadvize.conversation.sdk.model.gdpr.GDPROption {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.model.gdpr.GDPROption.Enabled>;
                public getOption(): com.iadvize.conversation.sdk.model.gdpr.GDPREnabledOption;
                public constructor(param0: com.iadvize.conversation.sdk.model.gdpr.GDPREnabledOption);
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module model {
          export module language {
            export abstract class LanguageOption {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.model.language.LanguageOption>;
            }
            export module LanguageOption {
              export class Custom extends com.iadvize.conversation.sdk.model.language.LanguageOption {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.model.language.LanguageOption.Custom>;
                public constructor(param0: com.iadvize.conversation.sdk.type.Language);
                public getValue(): com.iadvize.conversation.sdk.type.Language;
              }
              export class Default extends com.iadvize.conversation.sdk.model.language.LanguageOption {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.model.language.LanguageOption.Default>;
                public static INSTANCE: com.iadvize.conversation.sdk.model.language.LanguageOption.Default;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module model {
          export module provider {
            export class ConversationFileProvider {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.model.provider.ConversationFileProvider>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module model {
          export module satisfaction {
            export class SatisfactionGrade {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.model.satisfaction.SatisfactionGrade>;
              public static CSAT: com.iadvize.conversation.sdk.model.satisfaction.SatisfactionGrade;
              public static NPS: com.iadvize.conversation.sdk.model.satisfaction.SatisfactionGrade;
              public static COMMENT: com.iadvize.conversation.sdk.model.satisfaction.SatisfactionGrade;
              public static values(): androidNative.Array<com.iadvize.conversation.sdk.model.satisfaction.SatisfactionGrade>;
              public static valueOf(param0: string): com.iadvize.conversation.sdk.model.satisfaction.SatisfactionGrade;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module model {
          export module targeting {
            export abstract class NavigationOption {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.model.targeting.NavigationOption>;
            }
            export module NavigationOption {
              export class ActivateNewRule extends com.iadvize.conversation.sdk.model.targeting.NavigationOption {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.model.targeting.NavigationOption.ActivateNewRule>;
                public constructor(param0: java.util.UUID);
                public getTargetingRuleId$sdk_clientRelease(): java.util.UUID;
              }
              export class ClearActiveRule extends com.iadvize.conversation.sdk.model.targeting.NavigationOption {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.model.targeting.NavigationOption.ClearActiveRule>;
                public static INSTANCE: com.iadvize.conversation.sdk.model.targeting.NavigationOption.ClearActiveRule;
              }
              export class KeepActiveRule extends com.iadvize.conversation.sdk.model.targeting.NavigationOption {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.model.targeting.NavigationOption.KeepActiveRule>;
                public static INSTANCE: com.iadvize.conversation.sdk.model.targeting.NavigationOption.KeepActiveRule;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module model {
          export module transaction {
            export class Transaction {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.model.transaction.Transaction>;
              public static Companion: com.iadvize.conversation.sdk.model.transaction.Transaction.a;
              public copy(param0: string, param1: java.util.Date, param2: number, param3: com.iadvize.conversation.sdk.type.Currency): com.iadvize.conversation.sdk.model.transaction.Transaction;
              public hashCode(): number;
              public getId(): string;
              public getAmount(): number;
              public toPrefString$sdk_clientRelease(): string;
              public setAmount(param0: number): void;
              public setId(param0: string): void;
              public toString(): string;
              public component4(): com.iadvize.conversation.sdk.type.Currency;
              public component1(): string;
              public setDate(param0: java.util.Date): void;
              public setCurrency(param0: com.iadvize.conversation.sdk.type.Currency): void;
              public component3(): number;
              public constructor(param0: string, param1: java.util.Date, param2: number, param3: com.iadvize.conversation.sdk.type.Currency);
              public component2(): java.util.Date;
              public equals(param0: any): boolean;
              public getCurrency(): com.iadvize.conversation.sdk.type.Currency;
              public getDate(): java.util.Date;
            }
            export module Transaction {
              export class a {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.model.transaction.Transaction.a>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module model {
          export module visitor {
            export class CustomData {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.model.visitor.CustomData>;
              public toInput$sdk_clientRelease(): F.I0;
              public getValue$sdk_clientRelease(): any;
              public getKey$sdk_clientRelease(): string;
            }
            export module CustomData {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.model.visitor.CustomData.Companion>;
                public fromInt(param0: string, param1: number): com.iadvize.conversation.sdk.model.visitor.CustomData;
                public fromString(param0: string, param1: string): com.iadvize.conversation.sdk.model.visitor.CustomData;
                public fromBoolean(param0: string, param1: boolean): com.iadvize.conversation.sdk.model.visitor.CustomData;
                public fromDouble(param0: string, param1: number): com.iadvize.conversation.sdk.model.visitor.CustomData;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module model {
          export module xmpp {
            export module conversation {
              export module messages {
                export module extensions {
                  export class FileExtension extends C.Q {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileExtension>;
                    public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileExtension>;
                    public getElementName(): string;
                    public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                    public describeContents(): number;
                    public b(): com.iadvize.conversation_ui.models.MessageKind;
                    public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                    public a(): string;
                    public constructor();
                    public getNamespace(): string;
                    public constructor(param0: string, param1: string, param2: string);
                  }
                  export module FileExtension {
                    export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.model.xmpp.conversation.messages.extensions.FileExtension.a>;
                      public newArray(param0: number): androidNative.Array<any>;
                      public createFromParcel(param0: globalAndroid.os.Parcel): any;
                      public constructor();
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module type {
          export class Currency {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.Currency>;
            public static ADP: com.iadvize.conversation.sdk.type.Currency;
            public static AED: com.iadvize.conversation.sdk.type.Currency;
            public static AFA: com.iadvize.conversation.sdk.type.Currency;
            public static AFN: com.iadvize.conversation.sdk.type.Currency;
            public static ALL: com.iadvize.conversation.sdk.type.Currency;
            public static AMD: com.iadvize.conversation.sdk.type.Currency;
            public static ANG: com.iadvize.conversation.sdk.type.Currency;
            public static AOA: com.iadvize.conversation.sdk.type.Currency;
            public static ARS: com.iadvize.conversation.sdk.type.Currency;
            public static ATS: com.iadvize.conversation.sdk.type.Currency;
            public static AUD: com.iadvize.conversation.sdk.type.Currency;
            public static AWG: com.iadvize.conversation.sdk.type.Currency;
            public static AYM: com.iadvize.conversation.sdk.type.Currency;
            public static AZM: com.iadvize.conversation.sdk.type.Currency;
            public static AZN: com.iadvize.conversation.sdk.type.Currency;
            public static BAM: com.iadvize.conversation.sdk.type.Currency;
            public static BBD: com.iadvize.conversation.sdk.type.Currency;
            public static BDT: com.iadvize.conversation.sdk.type.Currency;
            public static BEF: com.iadvize.conversation.sdk.type.Currency;
            public static BGL: com.iadvize.conversation.sdk.type.Currency;
            public static BGN: com.iadvize.conversation.sdk.type.Currency;
            public static BHD: com.iadvize.conversation.sdk.type.Currency;
            public static BIF: com.iadvize.conversation.sdk.type.Currency;
            public static BMD: com.iadvize.conversation.sdk.type.Currency;
            public static BND: com.iadvize.conversation.sdk.type.Currency;
            public static BOB: com.iadvize.conversation.sdk.type.Currency;
            public static BOV: com.iadvize.conversation.sdk.type.Currency;
            public static BRL: com.iadvize.conversation.sdk.type.Currency;
            public static BSD: com.iadvize.conversation.sdk.type.Currency;
            public static BTN: com.iadvize.conversation.sdk.type.Currency;
            public static BWP: com.iadvize.conversation.sdk.type.Currency;
            public static BYB: com.iadvize.conversation.sdk.type.Currency;
            public static BYN: com.iadvize.conversation.sdk.type.Currency;
            public static BYR: com.iadvize.conversation.sdk.type.Currency;
            public static BZD: com.iadvize.conversation.sdk.type.Currency;
            public static CAD: com.iadvize.conversation.sdk.type.Currency;
            public static CDF: com.iadvize.conversation.sdk.type.Currency;
            public static CHE: com.iadvize.conversation.sdk.type.Currency;
            public static CHF: com.iadvize.conversation.sdk.type.Currency;
            public static CHW: com.iadvize.conversation.sdk.type.Currency;
            public static CLF: com.iadvize.conversation.sdk.type.Currency;
            public static CLP: com.iadvize.conversation.sdk.type.Currency;
            public static CNY: com.iadvize.conversation.sdk.type.Currency;
            public static COP: com.iadvize.conversation.sdk.type.Currency;
            public static COU: com.iadvize.conversation.sdk.type.Currency;
            public static CRC: com.iadvize.conversation.sdk.type.Currency;
            public static CSD: com.iadvize.conversation.sdk.type.Currency;
            public static CUC: com.iadvize.conversation.sdk.type.Currency;
            public static CUP: com.iadvize.conversation.sdk.type.Currency;
            public static CVE: com.iadvize.conversation.sdk.type.Currency;
            public static CYP: com.iadvize.conversation.sdk.type.Currency;
            public static CZK: com.iadvize.conversation.sdk.type.Currency;
            public static DEM: com.iadvize.conversation.sdk.type.Currency;
            public static DJF: com.iadvize.conversation.sdk.type.Currency;
            public static DKK: com.iadvize.conversation.sdk.type.Currency;
            public static DOP: com.iadvize.conversation.sdk.type.Currency;
            public static DZD: com.iadvize.conversation.sdk.type.Currency;
            public static EEK: com.iadvize.conversation.sdk.type.Currency;
            public static EGP: com.iadvize.conversation.sdk.type.Currency;
            public static ERN: com.iadvize.conversation.sdk.type.Currency;
            public static ESP: com.iadvize.conversation.sdk.type.Currency;
            public static ETB: com.iadvize.conversation.sdk.type.Currency;
            public static EUR: com.iadvize.conversation.sdk.type.Currency;
            public static FIM: com.iadvize.conversation.sdk.type.Currency;
            public static FJD: com.iadvize.conversation.sdk.type.Currency;
            public static FKP: com.iadvize.conversation.sdk.type.Currency;
            public static FRF: com.iadvize.conversation.sdk.type.Currency;
            public static GBP: com.iadvize.conversation.sdk.type.Currency;
            public static GEL: com.iadvize.conversation.sdk.type.Currency;
            public static GHC: com.iadvize.conversation.sdk.type.Currency;
            public static GHS: com.iadvize.conversation.sdk.type.Currency;
            public static GIP: com.iadvize.conversation.sdk.type.Currency;
            public static GMD: com.iadvize.conversation.sdk.type.Currency;
            public static GNF: com.iadvize.conversation.sdk.type.Currency;
            public static GRD: com.iadvize.conversation.sdk.type.Currency;
            public static GTQ: com.iadvize.conversation.sdk.type.Currency;
            public static GWP: com.iadvize.conversation.sdk.type.Currency;
            public static GYD: com.iadvize.conversation.sdk.type.Currency;
            public static HKD: com.iadvize.conversation.sdk.type.Currency;
            public static HNL: com.iadvize.conversation.sdk.type.Currency;
            public static HRK: com.iadvize.conversation.sdk.type.Currency;
            public static HTG: com.iadvize.conversation.sdk.type.Currency;
            public static HUF: com.iadvize.conversation.sdk.type.Currency;
            public static IDR: com.iadvize.conversation.sdk.type.Currency;
            public static IEP: com.iadvize.conversation.sdk.type.Currency;
            public static ILS: com.iadvize.conversation.sdk.type.Currency;
            public static INR: com.iadvize.conversation.sdk.type.Currency;
            public static IQD: com.iadvize.conversation.sdk.type.Currency;
            public static IRR: com.iadvize.conversation.sdk.type.Currency;
            public static ISK: com.iadvize.conversation.sdk.type.Currency;
            public static ITL: com.iadvize.conversation.sdk.type.Currency;
            public static JMD: com.iadvize.conversation.sdk.type.Currency;
            public static JOD: com.iadvize.conversation.sdk.type.Currency;
            public static JPY: com.iadvize.conversation.sdk.type.Currency;
            public static KES: com.iadvize.conversation.sdk.type.Currency;
            public static KGS: com.iadvize.conversation.sdk.type.Currency;
            public static KHR: com.iadvize.conversation.sdk.type.Currency;
            public static KMF: com.iadvize.conversation.sdk.type.Currency;
            public static KPW: com.iadvize.conversation.sdk.type.Currency;
            public static KRW: com.iadvize.conversation.sdk.type.Currency;
            public static KWD: com.iadvize.conversation.sdk.type.Currency;
            public static KYD: com.iadvize.conversation.sdk.type.Currency;
            public static KZT: com.iadvize.conversation.sdk.type.Currency;
            public static LAK: com.iadvize.conversation.sdk.type.Currency;
            public static LBP: com.iadvize.conversation.sdk.type.Currency;
            public static LKR: com.iadvize.conversation.sdk.type.Currency;
            public static LRD: com.iadvize.conversation.sdk.type.Currency;
            public static LSL: com.iadvize.conversation.sdk.type.Currency;
            public static LTL: com.iadvize.conversation.sdk.type.Currency;
            public static LUF: com.iadvize.conversation.sdk.type.Currency;
            public static LVL: com.iadvize.conversation.sdk.type.Currency;
            public static LYD: com.iadvize.conversation.sdk.type.Currency;
            public static MAD: com.iadvize.conversation.sdk.type.Currency;
            public static MDL: com.iadvize.conversation.sdk.type.Currency;
            public static MGA: com.iadvize.conversation.sdk.type.Currency;
            public static MGF: com.iadvize.conversation.sdk.type.Currency;
            public static MKD: com.iadvize.conversation.sdk.type.Currency;
            public static MMK: com.iadvize.conversation.sdk.type.Currency;
            public static MNT: com.iadvize.conversation.sdk.type.Currency;
            public static MOP: com.iadvize.conversation.sdk.type.Currency;
            public static MRO: com.iadvize.conversation.sdk.type.Currency;
            public static MRU: com.iadvize.conversation.sdk.type.Currency;
            public static MTL: com.iadvize.conversation.sdk.type.Currency;
            public static MUR: com.iadvize.conversation.sdk.type.Currency;
            public static MVR: com.iadvize.conversation.sdk.type.Currency;
            public static MWK: com.iadvize.conversation.sdk.type.Currency;
            public static MXN: com.iadvize.conversation.sdk.type.Currency;
            public static MXV: com.iadvize.conversation.sdk.type.Currency;
            public static MYR: com.iadvize.conversation.sdk.type.Currency;
            public static MZM: com.iadvize.conversation.sdk.type.Currency;
            public static MZN: com.iadvize.conversation.sdk.type.Currency;
            public static NAD: com.iadvize.conversation.sdk.type.Currency;
            public static NGN: com.iadvize.conversation.sdk.type.Currency;
            public static NIO: com.iadvize.conversation.sdk.type.Currency;
            public static NLG: com.iadvize.conversation.sdk.type.Currency;
            public static NOK: com.iadvize.conversation.sdk.type.Currency;
            public static NPR: com.iadvize.conversation.sdk.type.Currency;
            public static NZD: com.iadvize.conversation.sdk.type.Currency;
            public static OMR: com.iadvize.conversation.sdk.type.Currency;
            public static PAB: com.iadvize.conversation.sdk.type.Currency;
            public static PEN: com.iadvize.conversation.sdk.type.Currency;
            public static PGK: com.iadvize.conversation.sdk.type.Currency;
            public static PHP: com.iadvize.conversation.sdk.type.Currency;
            public static PKR: com.iadvize.conversation.sdk.type.Currency;
            public static PLN: com.iadvize.conversation.sdk.type.Currency;
            public static PTE: com.iadvize.conversation.sdk.type.Currency;
            public static PYG: com.iadvize.conversation.sdk.type.Currency;
            public static QAR: com.iadvize.conversation.sdk.type.Currency;
            public static ROL: com.iadvize.conversation.sdk.type.Currency;
            public static RON: com.iadvize.conversation.sdk.type.Currency;
            public static RSD: com.iadvize.conversation.sdk.type.Currency;
            public static RUB: com.iadvize.conversation.sdk.type.Currency;
            public static RUR: com.iadvize.conversation.sdk.type.Currency;
            public static RWF: com.iadvize.conversation.sdk.type.Currency;
            public static SAR: com.iadvize.conversation.sdk.type.Currency;
            public static SBD: com.iadvize.conversation.sdk.type.Currency;
            public static SCR: com.iadvize.conversation.sdk.type.Currency;
            public static SDD: com.iadvize.conversation.sdk.type.Currency;
            public static SDG: com.iadvize.conversation.sdk.type.Currency;
            public static SEK: com.iadvize.conversation.sdk.type.Currency;
            public static SGD: com.iadvize.conversation.sdk.type.Currency;
            public static SHP: com.iadvize.conversation.sdk.type.Currency;
            public static SIT: com.iadvize.conversation.sdk.type.Currency;
            public static SKK: com.iadvize.conversation.sdk.type.Currency;
            public static SLL: com.iadvize.conversation.sdk.type.Currency;
            public static SOS: com.iadvize.conversation.sdk.type.Currency;
            public static SRD: com.iadvize.conversation.sdk.type.Currency;
            public static SRG: com.iadvize.conversation.sdk.type.Currency;
            public static SSP: com.iadvize.conversation.sdk.type.Currency;
            public static STD: com.iadvize.conversation.sdk.type.Currency;
            public static STN: com.iadvize.conversation.sdk.type.Currency;
            public static SVC: com.iadvize.conversation.sdk.type.Currency;
            public static SYP: com.iadvize.conversation.sdk.type.Currency;
            public static SZL: com.iadvize.conversation.sdk.type.Currency;
            public static THB: com.iadvize.conversation.sdk.type.Currency;
            public static TJS: com.iadvize.conversation.sdk.type.Currency;
            public static TMM: com.iadvize.conversation.sdk.type.Currency;
            public static TMT: com.iadvize.conversation.sdk.type.Currency;
            public static TND: com.iadvize.conversation.sdk.type.Currency;
            public static TOP: com.iadvize.conversation.sdk.type.Currency;
            public static TPE: com.iadvize.conversation.sdk.type.Currency;
            public static TRL: com.iadvize.conversation.sdk.type.Currency;
            public static TRY: com.iadvize.conversation.sdk.type.Currency;
            public static TTD: com.iadvize.conversation.sdk.type.Currency;
            public static TWD: com.iadvize.conversation.sdk.type.Currency;
            public static TZS: com.iadvize.conversation.sdk.type.Currency;
            public static UAH: com.iadvize.conversation.sdk.type.Currency;
            public static UGX: com.iadvize.conversation.sdk.type.Currency;
            public static USD: com.iadvize.conversation.sdk.type.Currency;
            public static USN: com.iadvize.conversation.sdk.type.Currency;
            public static USS: com.iadvize.conversation.sdk.type.Currency;
            public static UYI: com.iadvize.conversation.sdk.type.Currency;
            public static UYU: com.iadvize.conversation.sdk.type.Currency;
            public static UZS: com.iadvize.conversation.sdk.type.Currency;
            public static VEB: com.iadvize.conversation.sdk.type.Currency;
            public static VEF: com.iadvize.conversation.sdk.type.Currency;
            public static VES: com.iadvize.conversation.sdk.type.Currency;
            public static VND: com.iadvize.conversation.sdk.type.Currency;
            public static VUV: com.iadvize.conversation.sdk.type.Currency;
            public static WST: com.iadvize.conversation.sdk.type.Currency;
            public static XAF: com.iadvize.conversation.sdk.type.Currency;
            public static XAG: com.iadvize.conversation.sdk.type.Currency;
            public static XAU: com.iadvize.conversation.sdk.type.Currency;
            public static XBA: com.iadvize.conversation.sdk.type.Currency;
            public static XBB: com.iadvize.conversation.sdk.type.Currency;
            public static XBC: com.iadvize.conversation.sdk.type.Currency;
            public static XBD: com.iadvize.conversation.sdk.type.Currency;
            public static XCD: com.iadvize.conversation.sdk.type.Currency;
            public static XDR: com.iadvize.conversation.sdk.type.Currency;
            public static XFO: com.iadvize.conversation.sdk.type.Currency;
            public static XFU: com.iadvize.conversation.sdk.type.Currency;
            public static XOF: com.iadvize.conversation.sdk.type.Currency;
            public static XPD: com.iadvize.conversation.sdk.type.Currency;
            public static XPF: com.iadvize.conversation.sdk.type.Currency;
            public static XPT: com.iadvize.conversation.sdk.type.Currency;
            public static XSU: com.iadvize.conversation.sdk.type.Currency;
            public static XTS: com.iadvize.conversation.sdk.type.Currency;
            public static XUA: com.iadvize.conversation.sdk.type.Currency;
            public static XXX: com.iadvize.conversation.sdk.type.Currency;
            public static YER: com.iadvize.conversation.sdk.type.Currency;
            public static YUM: com.iadvize.conversation.sdk.type.Currency;
            public static ZAR: com.iadvize.conversation.sdk.type.Currency;
            public static ZMK: com.iadvize.conversation.sdk.type.Currency;
            public static ZMW: com.iadvize.conversation.sdk.type.Currency;
            public static ZWD: com.iadvize.conversation.sdk.type.Currency;
            public static ZWL: com.iadvize.conversation.sdk.type.Currency;
            public static ZWN: com.iadvize.conversation.sdk.type.Currency;
            public static ZWR: com.iadvize.conversation.sdk.type.Currency;
            public static UNKNOWN__: com.iadvize.conversation.sdk.type.Currency;
            public static values(): androidNative.Array<com.iadvize.conversation.sdk.type.Currency>;
            public getRawValue(): string;
            public static valueOf(param0: string): com.iadvize.conversation.sdk.type.Currency;
          }
          export module Currency {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.Currency.Companion>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module type {
          export class Language {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.Language>;
            public static aa: com.iadvize.conversation.sdk.type.Language;
            public static ab: com.iadvize.conversation.sdk.type.Language;
            public static ae: com.iadvize.conversation.sdk.type.Language;
            public static af: com.iadvize.conversation.sdk.type.Language;
            public static ak: com.iadvize.conversation.sdk.type.Language;
            public static am: com.iadvize.conversation.sdk.type.Language;
            public static an: com.iadvize.conversation.sdk.type.Language;
            public static ar: com.iadvize.conversation.sdk.type.Language;
            public static as: com.iadvize.conversation.sdk.type.Language;
            public static av: com.iadvize.conversation.sdk.type.Language;
            public static ay: com.iadvize.conversation.sdk.type.Language;
            public static az: com.iadvize.conversation.sdk.type.Language;
            public static ba: com.iadvize.conversation.sdk.type.Language;
            public static be: com.iadvize.conversation.sdk.type.Language;
            public static bg: com.iadvize.conversation.sdk.type.Language;
            public static bh: com.iadvize.conversation.sdk.type.Language;
            public static bi: com.iadvize.conversation.sdk.type.Language;
            public static bm: com.iadvize.conversation.sdk.type.Language;
            public static bn: com.iadvize.conversation.sdk.type.Language;
            public static bo: com.iadvize.conversation.sdk.type.Language;
            public static br: com.iadvize.conversation.sdk.type.Language;
            public static bs: com.iadvize.conversation.sdk.type.Language;
            public static ca: com.iadvize.conversation.sdk.type.Language;
            public static ce: com.iadvize.conversation.sdk.type.Language;
            public static ch: com.iadvize.conversation.sdk.type.Language;
            public static co: com.iadvize.conversation.sdk.type.Language;
            public static cr: com.iadvize.conversation.sdk.type.Language;
            public static cs: com.iadvize.conversation.sdk.type.Language;
            public static cu: com.iadvize.conversation.sdk.type.Language;
            public static cv: com.iadvize.conversation.sdk.type.Language;
            public static cy: com.iadvize.conversation.sdk.type.Language;
            public static da: com.iadvize.conversation.sdk.type.Language;
            public static de: com.iadvize.conversation.sdk.type.Language;
            public static dv: com.iadvize.conversation.sdk.type.Language;
            public static dz: com.iadvize.conversation.sdk.type.Language;
            public static ee: com.iadvize.conversation.sdk.type.Language;
            public static el: com.iadvize.conversation.sdk.type.Language;
            public static en: com.iadvize.conversation.sdk.type.Language;
            public static eo: com.iadvize.conversation.sdk.type.Language;
            public static es: com.iadvize.conversation.sdk.type.Language;
            public static et: com.iadvize.conversation.sdk.type.Language;
            public static eu: com.iadvize.conversation.sdk.type.Language;
            public static fa: com.iadvize.conversation.sdk.type.Language;
            public static ff: com.iadvize.conversation.sdk.type.Language;
            public static fi: com.iadvize.conversation.sdk.type.Language;
            public static fj: com.iadvize.conversation.sdk.type.Language;
            public static fo: com.iadvize.conversation.sdk.type.Language;
            public static fr: com.iadvize.conversation.sdk.type.Language;
            public static fy: com.iadvize.conversation.sdk.type.Language;
            public static ga: com.iadvize.conversation.sdk.type.Language;
            public static gd: com.iadvize.conversation.sdk.type.Language;
            public static gl: com.iadvize.conversation.sdk.type.Language;
            public static gn: com.iadvize.conversation.sdk.type.Language;
            public static gu: com.iadvize.conversation.sdk.type.Language;
            public static gv: com.iadvize.conversation.sdk.type.Language;
            public static ha: com.iadvize.conversation.sdk.type.Language;
            public static he: com.iadvize.conversation.sdk.type.Language;
            public static hi: com.iadvize.conversation.sdk.type.Language;
            public static ho: com.iadvize.conversation.sdk.type.Language;
            public static hr: com.iadvize.conversation.sdk.type.Language;
            public static ht: com.iadvize.conversation.sdk.type.Language;
            public static hu: com.iadvize.conversation.sdk.type.Language;
            public static hy: com.iadvize.conversation.sdk.type.Language;
            public static hz: com.iadvize.conversation.sdk.type.Language;
            public static ia: com.iadvize.conversation.sdk.type.Language;
            public static id: com.iadvize.conversation.sdk.type.Language;
            public static ie: com.iadvize.conversation.sdk.type.Language;
            public static ig: com.iadvize.conversation.sdk.type.Language;
            public static ii: com.iadvize.conversation.sdk.type.Language;
            public static ik: com.iadvize.conversation.sdk.type.Language;
            public static in: com.iadvize.conversation.sdk.type.Language;
            public static io: com.iadvize.conversation.sdk.type.Language;
            public static is: com.iadvize.conversation.sdk.type.Language;
            public static it: com.iadvize.conversation.sdk.type.Language;
            public static iu: com.iadvize.conversation.sdk.type.Language;
            public static iw: com.iadvize.conversation.sdk.type.Language;
            public static ja: com.iadvize.conversation.sdk.type.Language;
            public static ji: com.iadvize.conversation.sdk.type.Language;
            public static jv: com.iadvize.conversation.sdk.type.Language;
            public static ka: com.iadvize.conversation.sdk.type.Language;
            public static kg: com.iadvize.conversation.sdk.type.Language;
            public static ki: com.iadvize.conversation.sdk.type.Language;
            public static kj: com.iadvize.conversation.sdk.type.Language;
            public static kk: com.iadvize.conversation.sdk.type.Language;
            public static kl: com.iadvize.conversation.sdk.type.Language;
            public static km: com.iadvize.conversation.sdk.type.Language;
            public static kn: com.iadvize.conversation.sdk.type.Language;
            public static ko: com.iadvize.conversation.sdk.type.Language;
            public static kr: com.iadvize.conversation.sdk.type.Language;
            public static ks: com.iadvize.conversation.sdk.type.Language;
            public static ku: com.iadvize.conversation.sdk.type.Language;
            public static kv: com.iadvize.conversation.sdk.type.Language;
            public static kw: com.iadvize.conversation.sdk.type.Language;
            public static ky: com.iadvize.conversation.sdk.type.Language;
            public static la: com.iadvize.conversation.sdk.type.Language;
            public static lb: com.iadvize.conversation.sdk.type.Language;
            public static lg: com.iadvize.conversation.sdk.type.Language;
            public static li: com.iadvize.conversation.sdk.type.Language;
            public static ln: com.iadvize.conversation.sdk.type.Language;
            public static lo: com.iadvize.conversation.sdk.type.Language;
            public static lt: com.iadvize.conversation.sdk.type.Language;
            public static lu: com.iadvize.conversation.sdk.type.Language;
            public static lv: com.iadvize.conversation.sdk.type.Language;
            public static mg: com.iadvize.conversation.sdk.type.Language;
            public static mh: com.iadvize.conversation.sdk.type.Language;
            public static mi: com.iadvize.conversation.sdk.type.Language;
            public static mk: com.iadvize.conversation.sdk.type.Language;
            public static ml: com.iadvize.conversation.sdk.type.Language;
            public static mn: com.iadvize.conversation.sdk.type.Language;
            public static mo: com.iadvize.conversation.sdk.type.Language;
            public static mr: com.iadvize.conversation.sdk.type.Language;
            public static ms: com.iadvize.conversation.sdk.type.Language;
            public static mt: com.iadvize.conversation.sdk.type.Language;
            public static my: com.iadvize.conversation.sdk.type.Language;
            public static na: com.iadvize.conversation.sdk.type.Language;
            public static nb: com.iadvize.conversation.sdk.type.Language;
            public static nd: com.iadvize.conversation.sdk.type.Language;
            public static ne: com.iadvize.conversation.sdk.type.Language;
            public static ng: com.iadvize.conversation.sdk.type.Language;
            public static nl: com.iadvize.conversation.sdk.type.Language;
            public static nn: com.iadvize.conversation.sdk.type.Language;
            public static no: com.iadvize.conversation.sdk.type.Language;
            public static nr: com.iadvize.conversation.sdk.type.Language;
            public static nv: com.iadvize.conversation.sdk.type.Language;
            public static ny: com.iadvize.conversation.sdk.type.Language;
            public static oc: com.iadvize.conversation.sdk.type.Language;
            public static oj: com.iadvize.conversation.sdk.type.Language;
            public static om: com.iadvize.conversation.sdk.type.Language;
            public static or: com.iadvize.conversation.sdk.type.Language;
            public static os: com.iadvize.conversation.sdk.type.Language;
            public static pa: com.iadvize.conversation.sdk.type.Language;
            public static pi: com.iadvize.conversation.sdk.type.Language;
            public static pl: com.iadvize.conversation.sdk.type.Language;
            public static ps: com.iadvize.conversation.sdk.type.Language;
            public static pt: com.iadvize.conversation.sdk.type.Language;
            public static qu: com.iadvize.conversation.sdk.type.Language;
            public static rm: com.iadvize.conversation.sdk.type.Language;
            public static rn: com.iadvize.conversation.sdk.type.Language;
            public static ro: com.iadvize.conversation.sdk.type.Language;
            public static ru: com.iadvize.conversation.sdk.type.Language;
            public static rw: com.iadvize.conversation.sdk.type.Language;
            public static sa: com.iadvize.conversation.sdk.type.Language;
            public static sc: com.iadvize.conversation.sdk.type.Language;
            public static sd: com.iadvize.conversation.sdk.type.Language;
            public static se: com.iadvize.conversation.sdk.type.Language;
            public static sg: com.iadvize.conversation.sdk.type.Language;
            public static si: com.iadvize.conversation.sdk.type.Language;
            public static sk: com.iadvize.conversation.sdk.type.Language;
            public static sl: com.iadvize.conversation.sdk.type.Language;
            public static sm: com.iadvize.conversation.sdk.type.Language;
            public static sn: com.iadvize.conversation.sdk.type.Language;
            public static so: com.iadvize.conversation.sdk.type.Language;
            public static sq: com.iadvize.conversation.sdk.type.Language;
            public static sr: com.iadvize.conversation.sdk.type.Language;
            public static ss: com.iadvize.conversation.sdk.type.Language;
            public static st: com.iadvize.conversation.sdk.type.Language;
            public static su: com.iadvize.conversation.sdk.type.Language;
            public static sv: com.iadvize.conversation.sdk.type.Language;
            public static sw: com.iadvize.conversation.sdk.type.Language;
            public static ta: com.iadvize.conversation.sdk.type.Language;
            public static te: com.iadvize.conversation.sdk.type.Language;
            public static tg: com.iadvize.conversation.sdk.type.Language;
            public static th: com.iadvize.conversation.sdk.type.Language;
            public static ti: com.iadvize.conversation.sdk.type.Language;
            public static tk: com.iadvize.conversation.sdk.type.Language;
            public static tl: com.iadvize.conversation.sdk.type.Language;
            public static tn: com.iadvize.conversation.sdk.type.Language;
            public static to: com.iadvize.conversation.sdk.type.Language;
            public static tr: com.iadvize.conversation.sdk.type.Language;
            public static ts: com.iadvize.conversation.sdk.type.Language;
            public static tt: com.iadvize.conversation.sdk.type.Language;
            public static tw: com.iadvize.conversation.sdk.type.Language;
            public static ty: com.iadvize.conversation.sdk.type.Language;
            public static ug: com.iadvize.conversation.sdk.type.Language;
            public static uk: com.iadvize.conversation.sdk.type.Language;
            public static ur: com.iadvize.conversation.sdk.type.Language;
            public static uz: com.iadvize.conversation.sdk.type.Language;
            public static ve: com.iadvize.conversation.sdk.type.Language;
            public static vi: com.iadvize.conversation.sdk.type.Language;
            public static vo: com.iadvize.conversation.sdk.type.Language;
            public static wa: com.iadvize.conversation.sdk.type.Language;
            public static wo: com.iadvize.conversation.sdk.type.Language;
            public static xh: com.iadvize.conversation.sdk.type.Language;
            public static yi: com.iadvize.conversation.sdk.type.Language;
            public static yo: com.iadvize.conversation.sdk.type.Language;
            public static za: com.iadvize.conversation.sdk.type.Language;
            public static zh: com.iadvize.conversation.sdk.type.Language;
            public static zu: com.iadvize.conversation.sdk.type.Language;
            public static UNKNOWN__: com.iadvize.conversation.sdk.type.Language;
            public static valueOf(param0: string): com.iadvize.conversation.sdk.type.Language;
            public getRawValue(): string;
            public static values(): androidNative.Array<com.iadvize.conversation.sdk.type.Language>;
          }
          export module Language {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.Language.Companion>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module utils {
          export module logger {
            export class Logger {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.utils.logger.Logger>;
              public static INSTANCE: com.iadvize.conversation.sdk.utils.logger.Logger;
              public invalidParameterLog$sdk_clientRelease(param0: string): string;
              public log$sdk_clientRelease(param0: com.iadvize.conversation.sdk.utils.logger.Logger.Level, param1: string, param2: string, param3: java.lang.Throwable): void;
            }
            export module Logger {
              export class Level {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.utils.logger.Logger.Level>;
                public static VERBOSE: com.iadvize.conversation.sdk.utils.logger.Logger.Level;
                public static INFO: com.iadvize.conversation.sdk.utils.logger.Logger.Level;
                public static WARNING: com.iadvize.conversation.sdk.utils.logger.Logger.Level;
                public static ERROR: com.iadvize.conversation.sdk.utils.logger.Logger.Level;
                public static valueOf(param0: string): com.iadvize.conversation.sdk.utils.logger.Logger.Level;
                public static values(): androidNative.Array<com.iadvize.conversation.sdk.utils.logger.Logger.Level>;
              }
              export class a {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.utils.logger.Logger.a>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module utils {
          export module network {
            export class NetworkUpdateReceiver {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.utils.network.NetworkUpdateReceiver>;
              public constructor();
              public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module view {
          export class ChatboxActivity extends O.a implements c.a {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.view.ChatboxActivity>;
            public a(param0: com.iadvize.conversation_ui.models.MessageAttachment): void;
            public constructor();
            public onDestroy(): void;
            public onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): void;
            public onCreate(param0: globalAndroid.os.Bundle): void;
            public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
            public a(param0: number, param1: androidNative.Array<number>): void;
            public a(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
            public a(param0: s.e): void;
            public a(param0: com.iadvize.conversation.sdk.model.configuration.ChatboxConfiguration): void;
            public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module view {
          export class ConversationErrorView {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.view.ConversationErrorView>;
            public constructor(param0: globalAndroid.content.Context);
            public a(param0: globalAndroid.view.View.OnClickListener): void;
            public a(param0: string): void;
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
            public a(param0: number): any;
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module view {
          export module attachments {
            export class AttachmentActivity {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.view.attachments.AttachmentActivity>;
              public static b: com.iadvize.conversation.sdk.view.attachments.AttachmentActivity.a;
              public constructor();
              public onCreate(param0: globalAndroid.os.Bundle): void;
              public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
            }
            export module AttachmentActivity {
              export class a {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.view.attachments.AttachmentActivity.a>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation_ui {
      export module adapters {
        export class MessageRecyclerViewAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<androidx.recyclerview.widget.RecyclerView.ViewHolder> {
          public static class: java.lang.Class<com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter>;
          public constructor(param0: java.util.List<com.iadvize.conversation_ui.models.Message>, param1: number, param2: com.iadvize.conversation_ui.viewholders.MessageListeners, param3: com.iadvize.conversation_ui.models.MessagesConfiguration);
          public getItem(param0: number): com.iadvize.conversation_ui.models.Message;
          public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
          public getItemCount(): number;
          public getItemViewType(param0: number): number;
          public onBindViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number): void;
          public setMessages(param0: java.util.List<any>, param1: boolean): void;
          public onViewRecycled(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
        }
        export module MessageRecyclerViewAdapter {
          export class MessageItemType {
            public static class: java.lang.Class<com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType>;
            public static TEXT: com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
            public static PREVIEW_LINK: com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
            public static LINK_SENT: com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
            public static IMAGE: com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
            public static FILE: com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
            public static QUICK_REPLY: com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
            public static TRANSLATED: com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
            public static GENERIC_CARD: com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
            public static GENERIC_CARD_BUNDLE: com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
            public static PRODUCT_OFFER: com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
            public static PRODUCT_OFFER_BUNDLE: com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
            public static SNOOZE: com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
            public static TRANSFER: com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
            public static TYPING_INDICATOR: com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
            public static SYSTEM: com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
            public static LOAD_PAST_CONVERSATION: com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
            public static values(): androidNative.Array<com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType>;
            public static valueOf(param0: string): com.iadvize.conversation_ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation_ui {
      export module adapters {
        export class a implements com.iadvize.conversation_ui.views.GenericCardView.a {
          public static class: java.lang.Class<com.iadvize.conversation_ui.adapters.a>;
          public instantiateItem(param0: globalAndroid.view.ViewGroup, param1: number): any;
          public getCount(): number;
          public destroyItem(param0: globalAndroid.view.ViewGroup, param1: number, param2: any): void;
          public constructor(param0: java.util.List<com.iadvize.conversation_ui.models.MessageKind.Card>, param1: com.iadvize.conversation_ui.viewholders.MessageListeners, param2: Q.a, param3: Q.c);
          public isViewFromObject(param0: globalAndroid.view.View, param1: any): boolean;
          public b(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.MessageAttachment.Action): void;
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation_ui {
      export module adapters {
        export class b {
          public static class: java.lang.Class<com.iadvize.conversation_ui.adapters.b>;
          public getNewListSize(): number;
          public getChangePayload(param0: number, param1: number): any;
          public constructor(param0: java.util.List<any>, param1: java.util.List<any>);
          public areContentsTheSame(param0: number, param1: number): boolean;
          public getOldListSize(): number;
          public areItemsTheSame(param0: number, param1: number): boolean;
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation_ui {
      export module adapters {
        export class c implements com.iadvize.conversation_ui.views.ProductOfferView.a {
          public static class: java.lang.Class<com.iadvize.conversation_ui.adapters.c>;
          public a(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.MessageAttachment.Action): void;
          public instantiateItem(param0: globalAndroid.view.ViewGroup, param1: number): any;
          public getCount(): number;
          public constructor(param0: java.util.List<com.iadvize.conversation_ui.models.MessageKind.ProductOffer>, param1: com.iadvize.conversation_ui.viewholders.MessageListeners, param2: Q.a, param3: Q.c);
          public destroyItem(param0: globalAndroid.view.ViewGroup, param1: number, param2: any): void;
          public isViewFromObject(param0: globalAndroid.view.View, param1: any): boolean;
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation_ui {
      export module models {
        export class Language {
          public static class: java.lang.Class<com.iadvize.conversation_ui.models.Language>;
          public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.Language>;
          public component2(): string;
          public describeContents(): number;
          public equals(param0: any): boolean;
          public getDisplayValue(): string;
          public toString(): string;
          public getCode(): string;
          public setSelected(param0: boolean): void;
          public component1(): string;
          public component3(): boolean;
          public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
          public constructor(param0: string, param1: string, param2: boolean);
          public hashCode(): number;
          public copy(param0: string, param1: string, param2: boolean): com.iadvize.conversation_ui.models.Language;
          public isSelected(): boolean;
        }
        export module Language {
          export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.Language> {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.Language.a>;
            public createFromParcel(param0: globalAndroid.os.Parcel): any;
            public constructor();
            public newArray(param0: number): androidNative.Array<any>;
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation_ui {
      export module models {
        export class LanguageSettings {
          public static class: java.lang.Class<com.iadvize.conversation_ui.models.LanguageSettings>;
          public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.LanguageSettings>;
          public constructor(param0: com.iadvize.conversation_ui.models.Language, param1: com.iadvize.conversation_ui.models.Language, param2: boolean);
          public getTargetLanguage(): com.iadvize.conversation_ui.models.Language;
          public setAutomaticTranslation(param0: boolean): void;
          public setSourceLanguage(param0: com.iadvize.conversation_ui.models.Language): void;
          public describeContents(): number;
          public getSourceLanguage(): com.iadvize.conversation_ui.models.Language;
          public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
          public getAutomaticTranslation(): boolean;
          public setTargetLanguage(param0: com.iadvize.conversation_ui.models.Language): void;
        }
        export module LanguageSettings {
          export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.LanguageSettings> {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.LanguageSettings.a>;
            public createFromParcel(param0: globalAndroid.os.Parcel): any;
            public constructor();
            public newArray(param0: number): androidNative.Array<any>;
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation_ui {
      export module models {
        export class LanguageType {
          public static class: java.lang.Class<com.iadvize.conversation_ui.models.LanguageType>;
          public static SOURCE: com.iadvize.conversation_ui.models.LanguageType;
          public static TARGET: com.iadvize.conversation_ui.models.LanguageType;
          public static values(): androidNative.Array<com.iadvize.conversation_ui.models.LanguageType>;
          public static valueOf(param0: string): com.iadvize.conversation_ui.models.LanguageType;
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation_ui {
      export module models {
        export class LoadPastConversationMessage extends com.iadvize.conversation_ui.models.Message {
          public static class: java.lang.Class<com.iadvize.conversation_ui.models.LoadPastConversationMessage>;
          public constructor(param0: string, param1: com.iadvize.conversation_ui.models.Sender, param2: java.util.Date, param3: com.iadvize.conversation_ui.models.MessageKind, param4: com.iadvize.conversation_ui.models.MessageState, param5: boolean);
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation_ui {
      export module models {
        export class Message {
          public static class: java.lang.Class<com.iadvize.conversation_ui.models.Message>;
          public static Companion: com.iadvize.conversation_ui.models.Message.a;
          public getSender(): com.iadvize.conversation_ui.models.Sender;
          public getId(): string;
          public constructor(param0: string, param1: com.iadvize.conversation_ui.models.Sender, param2: java.util.Date, param3: com.iadvize.conversation_ui.models.MessageKind, param4: com.iadvize.conversation_ui.models.MessageState, param5: boolean);
          public isFirstMessageOfGroup(param0: com.iadvize.conversation_ui.models.Message): boolean;
          public setForceToBeAloneOnItsGroup(param0: boolean): void;
          public isSameDays(param0: com.iadvize.conversation_ui.models.Message): boolean;
          public getMessageState(): com.iadvize.conversation_ui.models.MessageState;
          public getForceToBeAloneOnItsGroup(): boolean;
          public isLastMessageOfGroup(param0: com.iadvize.conversation_ui.models.Message): boolean;
          public equals(param0: any): boolean;
          public getMessageKind(): com.iadvize.conversation_ui.models.MessageKind;
          public isLeftAlignment(): boolean;
          public isAloneOnGroup(param0: com.iadvize.conversation_ui.models.Message, param1: com.iadvize.conversation_ui.models.Message): boolean;
          public getSentDate(): java.util.Date;
          public isRightAlignment(): boolean;
          public hashCode(): number;
          public getVerticalPosition(param0: com.iadvize.conversation_ui.models.Message, param1: com.iadvize.conversation_ui.models.Message): Q.c;
        }
        export module Message {
          export class a {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.Message.a>;
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation_ui {
      export module models {
        export abstract class MessageAttachment {
          public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment>;
        }
        export module MessageAttachment {
          export class Action {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.Action>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageAttachment.Action>;
            public describeContents(): number;
            public getType(): com.iadvize.conversation_ui.models.MessageAttachment.ActionType;
            public constructor(param0: com.iadvize.conversation_ui.models.MessageAttachment.ActionType, param1: string, param2: string);
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public getUrl(): string;
            public getTitle(): string;
          }
          export module Action {
            export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageAttachment.Action> {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.Action.a>;
              public constructor();
              public createFromParcel(param0: globalAndroid.os.Parcel): any;
              public newArray(param0: number): androidNative.Array<any>;
            }
          }
          export class ActionType {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.ActionType>;
            public static LINK: com.iadvize.conversation_ui.models.MessageAttachment.ActionType;
            public static UNSUPPORTED: com.iadvize.conversation_ui.models.MessageAttachment.ActionType;
            public static values(): androidNative.Array<com.iadvize.conversation_ui.models.MessageAttachment.ActionType>;
            public static valueOf(param0: string): com.iadvize.conversation_ui.models.MessageAttachment.ActionType;
          }
          export class Card extends com.iadvize.conversation_ui.models.MessageAttachment {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.Card>;
            public static Companion: com.iadvize.conversation_ui.models.MessageAttachment.Card.a;
            public static TYPE_NAME: string;
            public getActions(): androidNative.Array<com.iadvize.conversation_ui.models.MessageAttachment.Action>;
            public constructor(param0: com.iadvize.conversation_ui.models.MessageAttachment.CardImage, param1: string, param2: string, param3: androidNative.Array<com.iadvize.conversation_ui.models.MessageAttachment.Action>);
            public getText(): string;
            public getImage(): com.iadvize.conversation_ui.models.MessageAttachment.CardImage;
            public getTitle(): string;
          }
          export module Card {
            export class a {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.Card.a>;
            }
          }
          export class CardBundle extends com.iadvize.conversation_ui.models.MessageAttachment {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.CardBundle>;
            public static Companion: com.iadvize.conversation_ui.models.MessageAttachment.CardBundle.a;
            public static TYPE_NAME: string;
            public getCards(): java.util.List<com.iadvize.conversation_ui.models.MessageAttachment.Card>;
            public constructor(param0: java.util.List<com.iadvize.conversation_ui.models.MessageAttachment.Card>);
          }
          export module CardBundle {
            export class a {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.CardBundle.a>;
            }
          }
          export class CardImage {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.CardImage>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageAttachment.CardImage>;
            public describeContents(): number;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public getUrl(): string;
            public constructor(param0: string, param1: string);
            public getDescription(): string;
          }
          export module CardImage {
            export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageAttachment.CardImage> {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.CardImage.a>;
              public constructor();
              public createFromParcel(param0: globalAndroid.os.Parcel): any;
              public newArray(param0: number): androidNative.Array<any>;
            }
          }
          export class Companion {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.Companion>;
            public parseFromXMPP(param0: string): com.iadvize.conversation_ui.models.MessageAttachment;
          }
          export class EscalationAccept extends com.iadvize.conversation_ui.models.MessageAttachment.EscalationAttachment {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.EscalationAccept>;
            public static Companion: com.iadvize.conversation_ui.models.MessageAttachment.EscalationAccept.a;
            public static TYPE_NAME: string;
            public constructor(param0: string, param1: string);
          }
          export module EscalationAccept {
            export class a {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.EscalationAccept.a>;
            }
          }
          export abstract class EscalationAttachment extends com.iadvize.conversation_ui.models.MessageAttachment {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.EscalationAttachment>;
            public getType(): string;
            public constructor(param0: string, param1: string);
            public getCorrelationId(): string;
          }
          export class EscalationEnded extends com.iadvize.conversation_ui.models.MessageAttachment.EscalationAttachment {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.EscalationEnded>;
            public static Companion: com.iadvize.conversation_ui.models.MessageAttachment.EscalationEnded.a;
            public static TYPE_NAME: string;
            public constructor(param0: string, param1: string, param2: string);
            public constructor(param0: string, param1: string);
            public getReason(): string;
          }
          export module EscalationEnded {
            export class a {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.EscalationEnded.a>;
            }
          }
          export class EscalationInvitation extends com.iadvize.conversation_ui.models.MessageAttachment.EscalationAttachment {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.EscalationInvitation>;
            public static Companion: com.iadvize.conversation_ui.models.MessageAttachment.EscalationInvitation.a;
            public static TYPE_NAME: string;
            public constructor(param0: string, param1: string);
          }
          export module EscalationInvitation {
            export class a {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.EscalationInvitation.a>;
            }
          }
          export class File extends com.iadvize.conversation_ui.models.MessageAttachment {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.File>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageAttachment.File>;
            public static TYPE_NAME: string;
            public describeContents(): number;
            public constructor(param0: string, param1: string, param2: string);
            public getMimeType(): string;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public getFileName(): string;
            public getUrl(): string;
            public isImage(): boolean;
            public toImage(): com.iadvize.conversation_ui.models.MessageAttachment.Image;
          }
          export module File {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.File.Companion>;
              public parseFromXMPP(param0: org.json.JSONObject): com.iadvize.conversation_ui.models.MessageAttachment.File;
            }
            export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageAttachment.File> {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.File.a>;
              public constructor();
              public createFromParcel(param0: globalAndroid.os.Parcel): any;
              public newArray(param0: number): androidNative.Array<any>;
            }
          }
          export class Image extends com.iadvize.conversation_ui.models.MessageAttachment {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.Image>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageAttachment.Image>;
            public static TYPE_NAME: string;
            public describeContents(): number;
            public constructor(param0: string, param1: string, param2: string);
            public getMimeType(): string;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public getFileName(): string;
            public getUrl(): string;
          }
          export module Image {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.Image.Companion>;
              public parseFromXMPP(param0: org.json.JSONObject): com.iadvize.conversation_ui.models.MessageAttachment.Image;
            }
            export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageAttachment.Image> {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.Image.a>;
              public constructor();
              public createFromParcel(param0: globalAndroid.os.Parcel): any;
              public newArray(param0: number): androidNative.Array<any>;
            }
          }
          export class Link extends com.iadvize.conversation_ui.models.MessageAttachment {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.Link>;
            public static Companion: com.iadvize.conversation_ui.models.MessageAttachment.Link.a;
            public static TYPE_NAME: string;
            public getUrl(): string;
            public constructor(param0: string, param1: string);
            public getName(): string;
          }
          export module Link {
            export class a {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.Link.a>;
            }
          }
          export class Offer extends com.iadvize.conversation_ui.models.MessageAttachment {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.Offer>;
            public static Companion: com.iadvize.conversation_ui.models.MessageAttachment.Offer.a;
            public static TYPE_NAME: string;
            public getUrl(): string;
            public constructor(param0: string, param1: string);
            public getDescription(): string;
          }
          export module Offer {
            export class a {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.Offer.a>;
            }
          }
          export class Product extends com.iadvize.conversation_ui.models.MessageAttachment {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.Product>;
            public static Companion: com.iadvize.conversation_ui.models.MessageAttachment.Product.a;
            public static TYPE_NAME: string;
            public getProductUrl(): string;
            public constructor(param0: string, param1: string);
            public getTitle(): string;
          }
          export module Product {
            export class a {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.Product.a>;
            }
          }
          export class ProductOffer extends com.iadvize.conversation_ui.models.MessageAttachment {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer>;
            public static Companion: com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.a;
            public static TYPE_NAME: string;
            public getAvailability(): com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.Availability;
            public getActions(): androidNative.Array<com.iadvize.conversation_ui.models.MessageAttachment.Action>;
            public getOfferPrice(): string;
            public constructor(param0: com.iadvize.conversation_ui.models.MessageAttachment.CardImage, param1: string, param2: string, param3: string, param4: com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.Availability, param5: string, param6: androidNative.Array<com.iadvize.conversation_ui.models.MessageAttachment.Action>);
            public getPrice(): string;
            public getDescription(): string;
            public getName(): string;
            public getImage(): com.iadvize.conversation_ui.models.MessageAttachment.CardImage;
          }
          export module ProductOffer {
            export class Availability {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.Availability>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.Availability>;
              public getStatus(): com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.AvailabilityStatus;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public constructor(param0: com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.AvailabilityStatus);
              public describeContents(): number;
            }
            export module Availability {
              export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.Availability> {
                public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.Availability.a>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class AvailabilityStatus {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.AvailabilityStatus>;
              public static AVAILABLE: com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.AvailabilityStatus;
              public static UNAVAILABLE: com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.AvailabilityStatus;
              public static values(): androidNative.Array<com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.AvailabilityStatus>;
              public static valueOf(param0: string): com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.AvailabilityStatus;
            }
            export class a {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.a>;
            }
          }
          export class ProductOfferBundle extends com.iadvize.conversation_ui.models.MessageAttachment {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.ProductOfferBundle>;
            public static Companion: com.iadvize.conversation_ui.models.MessageAttachment.ProductOfferBundle.a;
            public static TYPE_NAME: string;
            public getProductOffers(): java.util.List<com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer>;
            public constructor(param0: java.util.List<com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer>);
          }
          export module ProductOfferBundle {
            export class a {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.ProductOfferBundle.a>;
            }
          }
          export class QuickReplyMenu extends com.iadvize.conversation_ui.models.MessageAttachment {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.QuickReplyMenu>;
            public static Companion: com.iadvize.conversation_ui.models.MessageAttachment.QuickReplyMenu.a;
            public static TYPE_NAME: string;
            public constructor(param0: string, param1: androidNative.Array<string>);
            public getMessage(): string;
            public getChoices(): androidNative.Array<string>;
          }
          export module QuickReplyMenu {
            export class a {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.QuickReplyMenu.a>;
            }
          }
          export class Unsupported extends com.iadvize.conversation_ui.models.MessageAttachment {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageAttachment.Unsupported>;
            public constructor();
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation_ui {
      export module models {
        export abstract class MessageKind {
          public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind>;
        }
        export module MessageKind {
          export class Card extends com.iadvize.conversation_ui.models.MessageKind {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.Card>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.Card>;
            public describeContents(): number;
            public getActions(): androidNative.Array<com.iadvize.conversation_ui.models.MessageAttachment.Action>;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public constructor(param0: com.iadvize.conversation_ui.models.MessageAttachment.CardImage, param1: string, param2: string, param3: androidNative.Array<com.iadvize.conversation_ui.models.MessageAttachment.Action>);
            public getText(): string;
            public getImage(): com.iadvize.conversation_ui.models.MessageAttachment.CardImage;
            public getTitle(): string;
          }
          export module Card {
            export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.Card> {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.Card.a>;
              public constructor();
              public createFromParcel(param0: globalAndroid.os.Parcel): any;
              public newArray(param0: number): androidNative.Array<any>;
            }
          }
          export class CardBundle extends com.iadvize.conversation_ui.models.MessageKind {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.CardBundle>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.CardBundle>;
            public describeContents(): number;
            public constructor(param0: java.util.List<com.iadvize.conversation_ui.models.MessageKind.Card>);
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public getCards(): java.util.List<com.iadvize.conversation_ui.models.MessageKind.Card>;
          }
          export module CardBundle {
            export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.CardBundle> {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.CardBundle.a>;
              public constructor();
              public createFromParcel(param0: globalAndroid.os.Parcel): any;
              public newArray(param0: number): androidNative.Array<any>;
            }
          }
          export class FileMessage extends com.iadvize.conversation_ui.models.MessageKind {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.FileMessage>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.FileMessage>;
            public constructor(param0: com.iadvize.conversation_ui.models.MessageAttachment.File);
            public describeContents(): number;
            public getFile(): com.iadvize.conversation_ui.models.MessageAttachment.File;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
          }
          export module FileMessage {
            export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.FileMessage> {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.FileMessage.a>;
              public constructor();
              public createFromParcel(param0: globalAndroid.os.Parcel): any;
              public newArray(param0: number): androidNative.Array<any>;
            }
          }
          export class ImageMessage extends com.iadvize.conversation_ui.models.MessageKind {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.ImageMessage>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.ImageMessage>;
            public constructor(param0: com.iadvize.conversation_ui.models.MessageAttachment.File);
            public describeContents(): number;
            public constructor(param0: com.iadvize.conversation_ui.models.MessageAttachment.Image);
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public getImage(): com.iadvize.conversation_ui.models.MessageAttachment.Image;
          }
          export module ImageMessage {
            export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.ImageMessage> {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.ImageMessage.a>;
              public constructor();
              public createFromParcel(param0: globalAndroid.os.Parcel): any;
              public newArray(param0: number): androidNative.Array<any>;
            }
          }
          export class LinkSent extends com.iadvize.conversation_ui.models.MessageKind {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.LinkSent>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.LinkSent>;
            public getLink(): string;
            public describeContents(): number;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public constructor(param0: string, param1: string);
            public getText(): string;
          }
          export module LinkSent {
            export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.LinkSent> {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.LinkSent.a>;
              public constructor();
              public createFromParcel(param0: globalAndroid.os.Parcel): any;
              public newArray(param0: number): androidNative.Array<any>;
            }
          }
          export class LoadPastConversation extends com.iadvize.conversation_ui.models.MessageKind {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.LoadPastConversation>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.LoadPastConversation>;
            public constructor();
            public describeContents(): number;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
          }
          export module LoadPastConversation {
            export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.LoadPastConversation> {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.LoadPastConversation.a>;
              public constructor();
              public createFromParcel(param0: globalAndroid.os.Parcel): any;
              public newArray(param0: number): androidNative.Array<any>;
            }
          }
          export class ProductOffer extends com.iadvize.conversation_ui.models.MessageKind {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.ProductOffer>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.ProductOffer>;
            public describeContents(): number;
            public getAvailability(): com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.Availability;
            public getActions(): androidNative.Array<com.iadvize.conversation_ui.models.MessageAttachment.Action>;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public getOfferPrice(): string;
            public constructor(param0: com.iadvize.conversation_ui.models.MessageAttachment.CardImage, param1: string, param2: string, param3: string, param4: com.iadvize.conversation_ui.models.MessageAttachment.ProductOffer.Availability, param5: string, param6: androidNative.Array<com.iadvize.conversation_ui.models.MessageAttachment.Action>);
            public getPrice(): string;
            public getDescription(): string;
            public getName(): string;
            public getImage(): com.iadvize.conversation_ui.models.MessageAttachment.CardImage;
          }
          export module ProductOffer {
            export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.ProductOffer> {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.ProductOffer.a>;
              public constructor();
              public createFromParcel(param0: globalAndroid.os.Parcel): any;
              public newArray(param0: number): androidNative.Array<any>;
            }
          }
          export class ProductOfferBundle extends com.iadvize.conversation_ui.models.MessageKind {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.ProductOfferBundle>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.ProductOfferBundle>;
            public describeContents(): number;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public getProductOffers(): java.util.List<com.iadvize.conversation_ui.models.MessageKind.ProductOffer>;
            public constructor(param0: java.util.List<com.iadvize.conversation_ui.models.MessageKind.ProductOffer>);
          }
          export module ProductOfferBundle {
            export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.ProductOfferBundle> {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.ProductOfferBundle.a>;
              public constructor();
              public createFromParcel(param0: globalAndroid.os.Parcel): any;
              public newArray(param0: number): androidNative.Array<any>;
            }
          }
          export class QuickReplyMessage extends com.iadvize.conversation_ui.models.MessageKind {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.QuickReplyMessage>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.QuickReplyMessage>;
            public constructor(param0: string, param1: androidNative.Array<string>);
            public getMessage(): string;
            public describeContents(): number;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public getChoices(): androidNative.Array<string>;
          }
          export module QuickReplyMessage {
            export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.QuickReplyMessage> {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.QuickReplyMessage.a>;
              public constructor();
              public createFromParcel(param0: globalAndroid.os.Parcel): any;
              public newArray(param0: number): androidNative.Array<any>;
            }
          }
          export class SnoozeMessage extends com.iadvize.conversation_ui.models.MessageKind {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.SnoozeMessage>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.SnoozeMessage>;
            public describeContents(): number;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public getFromName(): string;
            public constructor(param0: string);
          }
          export module SnoozeMessage {
            export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.SnoozeMessage> {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.SnoozeMessage.a>;
              public constructor();
              public createFromParcel(param0: globalAndroid.os.Parcel): any;
              public newArray(param0: number): androidNative.Array<any>;
            }
          }
          export class SystemMessage extends com.iadvize.conversation_ui.models.MessageKind {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.SystemMessage>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.SystemMessage>;
            public describeContents(): number;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public getContent(): string;
            public constructor(param0: string);
          }
          export module SystemMessage {
            export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.SystemMessage> {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.SystemMessage.a>;
              public constructor();
              public createFromParcel(param0: globalAndroid.os.Parcel): any;
              public newArray(param0: number): androidNative.Array<any>;
            }
          }
          export class Text extends com.iadvize.conversation_ui.models.MessageKind {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.Text>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.Text>;
            public describeContents(): number;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public getContent(): string;
            public constructor(param0: string);
          }
          export module Text {
            export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.Text> {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.Text.a>;
              public constructor();
              public createFromParcel(param0: globalAndroid.os.Parcel): any;
              public newArray(param0: number): androidNative.Array<any>;
            }
          }
          export class TransferMessage extends com.iadvize.conversation_ui.models.MessageKind {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.TransferMessage>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.TransferMessage>;
            public describeContents(): number;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public constructor(param0: string, param1: string);
            public getReason(): string;
            public getFromName(): string;
          }
          export module TransferMessage {
            export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.TransferMessage> {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.TransferMessage.a>;
              public constructor();
              public createFromParcel(param0: globalAndroid.os.Parcel): any;
              public newArray(param0: number): androidNative.Array<any>;
            }
          }
          export class TranslatedMessage extends com.iadvize.conversation_ui.models.MessageKind {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.TranslatedMessage>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.TranslatedMessage>;
            public getTranslation(): com.iadvize.conversation_ui.models.Translation;
            public describeContents(): number;
            public constructor(param0: com.iadvize.conversation_ui.models.Translation);
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
          }
          export module TranslatedMessage {
            export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.TranslatedMessage> {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.TranslatedMessage.a>;
              public constructor();
              public createFromParcel(param0: globalAndroid.os.Parcel): any;
              public newArray(param0: number): androidNative.Array<any>;
            }
          }
          export class TypingIndicatorMessage extends com.iadvize.conversation_ui.models.MessageKind {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.TypingIndicatorMessage>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.TypingIndicatorMessage>;
            public isComposing(): boolean;
            public describeContents(): number;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public getContent(): string;
            public constructor(param0: string, param1: boolean);
          }
          export module TypingIndicatorMessage {
            export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.MessageKind.TypingIndicatorMessage> {
              public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageKind.TypingIndicatorMessage.a>;
              public constructor();
              public createFromParcel(param0: globalAndroid.os.Parcel): any;
              public newArray(param0: number): androidNative.Array<any>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation_ui {
      export module models {
        export class MessageState {
          public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessageState>;
          public static SENDING: com.iadvize.conversation_ui.models.MessageState;
          public static RECEIVED: com.iadvize.conversation_ui.models.MessageState;
          public static FAILURE: com.iadvize.conversation_ui.models.MessageState;
          public static values(): androidNative.Array<com.iadvize.conversation_ui.models.MessageState>;
          public static valueOf(param0: string): com.iadvize.conversation_ui.models.MessageState;
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation_ui {
      export module models {
        export class MessagesConfiguration {
          public static class: java.lang.Class<com.iadvize.conversation_ui.models.MessagesConfiguration>;
          public constructor(param0: string, param1: globalAndroid.graphics.Typeface, param2: java.lang.Integer);
          public getRightMessageBackgroundColor(): java.lang.Integer;
          public getMySenderId(): string;
          public getTypeface(): globalAndroid.graphics.Typeface;
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation_ui {
      export module models {
        export class PreviewLink extends com.iadvize.conversation_ui.models.PreviewLinkResult {
          public static class: java.lang.Class<com.iadvize.conversation_ui.models.PreviewLink>;
          public getTitle(): string;
          public component2(): string;
          public component3(): string;
          public equals(param0: any): boolean;
          public toString(): string;
          public constructor(param0: string, param1: string, param2: string, param3: string);
          public component1(): string;
          public getUrl(): string;
          public getImageUrl(): string;
          public component4(): string;
          public copy(param0: string, param1: string, param2: string, param3: string): com.iadvize.conversation_ui.models.PreviewLink;
          public getDescription(): string;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation_ui {
      export module models {
        export class PreviewLinkError extends com.iadvize.conversation_ui.models.PreviewLinkResult {
          public static class: java.lang.Class<com.iadvize.conversation_ui.models.PreviewLinkError>;
          public constructor(param0: string, param1: string);
          public getTitle(): string;
          public equals(param0: any): boolean;
          public copy(param0: string, param1: string): com.iadvize.conversation_ui.models.PreviewLinkError;
          public toString(): string;
          public component1(): string;
          public getUrl(): string;
          public component2(): string;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation_ui {
      export module models {
        export abstract class PreviewLinkResult {
          public static class: java.lang.Class<com.iadvize.conversation_ui.models.PreviewLinkResult>;
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation_ui {
      export module models {
        export class Sender {
          public static class: java.lang.Class<com.iadvize.conversation_ui.models.Sender>;
          public getDisplayName(): string;
          public constructor(param0: string, param1: string, param2: com.iadvize.conversation_ui.models.SenderAvatar, param3: com.iadvize.conversation_ui.models.SenderAlignment);
          public getId(): string;
          public getAlignment(): com.iadvize.conversation_ui.models.SenderAlignment;
          public getAvatar(): com.iadvize.conversation_ui.models.SenderAvatar;
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation_ui {
      export module models {
        export class SenderAlignment {
          public static class: java.lang.Class<com.iadvize.conversation_ui.models.SenderAlignment>;
          public static LEFT: com.iadvize.conversation_ui.models.SenderAlignment;
          public static RIGHT: com.iadvize.conversation_ui.models.SenderAlignment;
          public static values(): androidNative.Array<com.iadvize.conversation_ui.models.SenderAlignment>;
          public static valueOf(param0: string): com.iadvize.conversation_ui.models.SenderAlignment;
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation_ui {
      export module models {
        export abstract class SenderAvatar {
          public static class: java.lang.Class<com.iadvize.conversation_ui.models.SenderAvatar>;
          public isPresent(): java.lang.Boolean;
        }
        export module SenderAvatar {
          export class Image extends com.iadvize.conversation_ui.models.SenderAvatar {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.SenderAvatar.Image>;
            public getValue(): globalAndroid.graphics.drawable.Drawable;
            public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Boolean);
          }
          export class Url extends com.iadvize.conversation_ui.models.SenderAvatar {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.SenderAvatar.Url>;
            public constructor(param0: java.net.URL, param1: java.lang.Boolean);
            public getValue(): java.net.URL;
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation_ui {
      export module models {
        export class Translation {
          public static class: java.lang.Class<com.iadvize.conversation_ui.models.Translation>;
          public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.Translation>;
          public copy(param0: string, param1: string, param2: com.iadvize.conversation_ui.models.Language, param3: com.iadvize.conversation_ui.models.Language): com.iadvize.conversation_ui.models.Translation;
          public component2(): string;
          public describeContents(): number;
          public getSourceLanguage(): com.iadvize.conversation_ui.models.Language;
          public equals(param0: any): boolean;
          public constructor(param0: string, param1: string, param2: com.iadvize.conversation_ui.models.Language, param3: com.iadvize.conversation_ui.models.Language);
          public getTranslatedText(): string;
          public getTargetLanguage(): com.iadvize.conversation_ui.models.Language;
          public toString(): string;
          public component1(): string;
          public component4(): com.iadvize.conversation_ui.models.Language;
          public getOriginalText(): string;
          public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
          public component3(): com.iadvize.conversation_ui.models.Language;
          public hashCode(): number;
        }
        export module Translation {
          export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation_ui.models.Translation> {
            public static class: java.lang.Class<com.iadvize.conversation_ui.models.Translation.a>;
            public createFromParcel(param0: globalAndroid.os.Parcel): any;
            public constructor();
            public newArray(param0: number): androidNative.Array<any>;
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation_ui {
      export module viewholders {
        export class MessageListeners {
          public static class: java.lang.Class<com.iadvize.conversation_ui.viewholders.MessageListeners>;
          /**
           * Constructs a new instance of the com.iadvize.conversation_ui.viewholders.MessageListeners interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            onMessageLongClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.Message): void;
            onMessageClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.Message): void;
            onMessageAvatarClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.Message): void;
            onMessageQuickReplyChoiceClicked(param0: com.iadvize.conversation_ui.models.Message, param1: string): void;
            onMessageActionClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.MessageAttachment.Action): void;
            onMessagePreviewLinkClicked(param0: globalAndroid.view.View, param1: string): void;
            onMessageLinkClicked(param0: globalAndroid.net.Uri): void;
            onLoadPastConversationClicked(): void;
          });
          public constructor();
          public onMessageQuickReplyChoiceClicked(param0: com.iadvize.conversation_ui.models.Message, param1: string): void;
          public onMessagePreviewLinkClicked(param0: globalAndroid.view.View, param1: string): void;
          public onLoadPastConversationClicked(): void;
          public onMessageLinkClicked(param0: globalAndroid.net.Uri): void;
          public onMessageActionClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.MessageAttachment.Action): void;
          public onMessageLongClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.Message): void;
          public onMessageClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.Message): void;
          public onMessageAvatarClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.Message): void;
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation_ui {
      export module views {
        export class ComposeView {
          public static class: java.lang.Class<com.iadvize.conversation_ui.views.ComposeView>;
          public static Companion: com.iadvize.conversation_ui.views.ComposeView.a;
          public setImageButtonVisible(param0: boolean): void;
          public setTypeFace(param0: globalAndroid.graphics.Typeface): void;
          public getTextFocusChangedListener(): com.iadvize.conversation_ui.views.ComposeView.TextFocusChangedListener;
          public getImageButtonClickListener(): com.iadvize.conversation_ui.views.ComposeView.ImageButtonClickListener;
          public setTextChangedListener(param0: com.iadvize.conversation_ui.views.ComposeView.TextChangedListener): void;
          public isImageButtonVisible(): boolean;
          public onAttachedToWindow(): void;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          public getFileButtonClickListener(): com.iadvize.conversation_ui.views.ComposeView.FileButtonClickListener;
          public clearText(): void;
          public setText(param0: string): void;
          public setSendButtonEnabled(param0: boolean): void;
          public isFileButtonVisible(): boolean;
          public setTextFocusChangedListener(param0: com.iadvize.conversation_ui.views.ComposeView.TextFocusChangedListener): void;
          public isTranslationActivated(): boolean;
          public setSendButtonColor(param0: number): void;
          public setImageButtonClickListener(param0: com.iadvize.conversation_ui.views.ComposeView.ImageButtonClickListener): void;
          public getTextChangedListener(): com.iadvize.conversation_ui.views.ComposeView.TextChangedListener;
          public hasTextFocus(): boolean;
          public onDetachedFromWindow(): void;
          public setFileButtonVisible(param0: boolean): void;
          public getText(): string;
          public getSendButtonClickListener(): com.iadvize.conversation_ui.views.ComposeView.SendButtonClickListener;
          public setFileButtonClickListener(param0: com.iadvize.conversation_ui.views.ComposeView.FileButtonClickListener): void;
          public setSelection(param0: number): void;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
          public setSendButtonClickListener(param0: com.iadvize.conversation_ui.views.ComposeView.SendButtonClickListener): void;
          public dispatchSaveInstanceState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
          public constructor(param0: globalAndroid.content.Context);
          public getTranslateButtonClickListener(): com.iadvize.conversation_ui.views.ComposeView.TranslateButtonClickListener;
          public isSendButtonEnabled(): boolean;
          public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
          public setTranslationActivated(param0: boolean): void;
          public onSaveInstanceState(): globalAndroid.os.Parcelable;
          public setTranslateButtonClickListener(param0: com.iadvize.conversation_ui.views.ComposeView.TranslateButtonClickListener): void;
          public dispatchRestoreInstanceState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
        }
        export module ComposeView {
          export class FileButtonClickListener {
            public static class: java.lang.Class<com.iadvize.conversation_ui.views.ComposeView.FileButtonClickListener>;
            /**
             * Constructs a new instance of the com.iadvize.conversation_ui.views.ComposeView$FileButtonClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onFileButtonClicked(): void });
            public constructor();
            public onFileButtonClicked(): void;
          }
          export class ImageButtonClickListener {
            public static class: java.lang.Class<com.iadvize.conversation_ui.views.ComposeView.ImageButtonClickListener>;
            /**
             * Constructs a new instance of the com.iadvize.conversation_ui.views.ComposeView$ImageButtonClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onImageButtonClicked(): void });
            public constructor();
            public onImageButtonClicked(): void;
          }
          export class SendButtonClickListener {
            public static class: java.lang.Class<com.iadvize.conversation_ui.views.ComposeView.SendButtonClickListener>;
            /**
             * Constructs a new instance of the com.iadvize.conversation_ui.views.ComposeView$SendButtonClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onSendButtonClicked(param0: string): void });
            public constructor();
            public onSendButtonClicked(param0: string): void;
          }
          export class TextChangedListener {
            public static class: java.lang.Class<com.iadvize.conversation_ui.views.ComposeView.TextChangedListener>;
            /**
             * Constructs a new instance of the com.iadvize.conversation_ui.views.ComposeView$TextChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onTextChanged(param0: string): void });
            public constructor();
            public onTextChanged(param0: string): void;
          }
          export class TextFocusChangedListener {
            public static class: java.lang.Class<com.iadvize.conversation_ui.views.ComposeView.TextFocusChangedListener>;
            /**
             * Constructs a new instance of the com.iadvize.conversation_ui.views.ComposeView$TextFocusChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onTextFocusChanged(param0: boolean): void });
            public constructor();
            public onTextFocusChanged(param0: boolean): void;
          }
          export class TranslateButtonClickListener {
            public static class: java.lang.Class<com.iadvize.conversation_ui.views.ComposeView.TranslateButtonClickListener>;
            /**
             * Constructs a new instance of the com.iadvize.conversation_ui.views.ComposeView$TranslateButtonClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onTranslateButtonClicked(param0: string): void });
            public constructor();
            public onTranslateButtonClicked(param0: string): void;
          }
          export class a {
            public static class: java.lang.Class<com.iadvize.conversation_ui.views.ComposeView.a>;
          }
          export class b {
            public static class: java.lang.Class<com.iadvize.conversation_ui.views.ComposeView.b>;
            public afterTextChanged(param0: globalAndroid.text.Editable): void;
            public constructor(param0: com.iadvize.conversation_ui.views.ComposeView);
            public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
            public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
          }
          export class c {
            public static class: java.lang.Class<com.iadvize.conversation_ui.views.ComposeView.c>;
            public onTransitionPause(param0: androidx.transition.Transition): void;
            public onTransitionStart(param0: androidx.transition.Transition): void;
            public onTransitionResume(param0: androidx.transition.Transition): void;
            public onTransitionEnd(param0: androidx.transition.Transition): void;
            public onTransitionCancel(param0: androidx.transition.Transition): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation_ui {
      export module views {
        export class GenericCardView {
          public static class: java.lang.Class<com.iadvize.conversation_ui.views.GenericCardView>;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          public constructor(param0: globalAndroid.content.Context);
          public a(param0: com.iadvize.conversation_ui.views.GenericCardView.a): void;
          public a(param0: com.iadvize.conversation_ui.models.MessageKind.Card): void;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
          public a(param0: Q.a, param1: Q.c, param2: Q.c): void;
        }
        export module GenericCardView {
          export class a {
            public static class: java.lang.Class<com.iadvize.conversation_ui.views.GenericCardView.a>;
            /**
             * Constructs a new instance of the com.iadvize.conversation_ui.views.GenericCardView$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { b(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.MessageAttachment.Action): void });
            public constructor();
            public b(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.MessageAttachment.Action): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation_ui {
      export module views {
        export class ProductOfferView {
          public static class: java.lang.Class<com.iadvize.conversation_ui.views.ProductOfferView>;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          public constructor(param0: globalAndroid.content.Context);
          public a(param0: com.iadvize.conversation_ui.views.ProductOfferView.a): void;
          public a(param0: com.iadvize.conversation_ui.models.MessageKind.ProductOffer): void;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
          public a(param0: Q.a, param1: Q.c, param2: Q.c): void;
        }
        export module ProductOfferView {
          export class a {
            public static class: java.lang.Class<com.iadvize.conversation_ui.views.ProductOfferView.a>;
            /**
             * Constructs a new instance of the com.iadvize.conversation_ui.views.ProductOfferView$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { a(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.MessageAttachment.Action): void });
            public constructor();
            public a(param0: globalAndroid.view.View, param1: com.iadvize.conversation_ui.models.MessageAttachment.Action): void;
          }
          export class b {
            public static class: java.lang.Class<com.iadvize.conversation_ui.views.ProductOfferView.b>;
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation_ui {
      export module views {
        export class TypewriterView {
          public static class: java.lang.Class<com.iadvize.conversation_ui.views.TypewriterView>;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          public a(param0: string): com.iadvize.conversation_ui.views.TypewriterView;
          public a(): void;
        }
        export module TypewriterView {
          export abstract class a {
            public static class: java.lang.Class<com.iadvize.conversation_ui.views.TypewriterView.a>;
            public constructor(param0: java.lang.Runnable, param1: number);
            public d(): boolean;
            public a(): void;
            public c(): void;
            public b(): void;
          }
          export class b extends com.iadvize.conversation_ui.views.TypewriterView.a {
            public static class: java.lang.Class<com.iadvize.conversation_ui.views.TypewriterView.b>;
            public run(): void;
            public constructor(param0: java.lang.Runnable, param1: number);
            public constructor(param0: string, param1: number, param2: java.lang.Runnable);
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation_ui {
      export module views {
        export class WaitingDotsView {
          public static class: java.lang.Class<com.iadvize.conversation_ui.views.WaitingDotsView>;
          public constructor(param0: globalAndroid.content.Context);
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          public b(): void;
          public a(): boolean;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
          public c(): void;
        }
        export module WaitingDotsView {
          export class a {
            public static class: java.lang.Class<com.iadvize.conversation_ui.views.WaitingDotsView.a>;
            public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation_ui {
      export module views {
        export class WrapContentViewPager {
          public static class: java.lang.Class<com.iadvize.conversation_ui.views.WrapContentViewPager>;
          public constructor(param0: globalAndroid.content.Context);
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          public onMeasure(param0: number, param1: number): void;
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation_ui {
      export module views {
        export module preview_link {
          export class PreviewLinkView implements S.a.a {
            public static class: java.lang.Class<com.iadvize.conversation_ui.views.preview_link.PreviewLinkView>;
            public constructor(param0: globalAndroid.content.Context);
            public static a(param0: com.iadvize.conversation_ui.views.preview_link.PreviewLinkView, param1: Q.a, param2: Q.c, param3: Q.c, param4: number, param5: any): void;
            public a(param0: string, param1: string): void;
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
            public a(param0: com.iadvize.conversation_ui.models.PreviewLinkResult): void;
            public onDetachedFromWindow(): void;
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
            public a(param0: number): void;
          }
        }
      }
    }
  }
}
