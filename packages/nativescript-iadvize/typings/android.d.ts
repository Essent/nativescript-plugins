declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export class IAdvizeSDK {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK>;
          public static INSTANCE: com.iadvize.conversation.sdk.IAdvizeSDK;
          public static initiate(param0: globalAndroid.app.Application): kotlinx.coroutines.Job;
          public static setLogLevel(param0: com.iadvize.conversation.sdk.feature.logger.Logger.Level): void;
          public getNotificationController(): com.iadvize.conversation.sdk.feature.notification.NotificationController;
          public getEnvironment$sdk_clientRelease(): com.iadvize.conversation.sdk.h;
          public getDefaultFloatingButtonControllerImpl$sdk_clientRelease(): m.c;
          public getTransactionControllerImpl$sdk_clientRelease(): w.a;
          public static activate(param0: number, param1: com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption, param2: com.iadvize.conversation.sdk.feature.gdpr.GDPROption, param3: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): kotlinx.coroutines.Job;
          public setJweProvider$sdk_clientRelease(param0: com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.JWEProvider): void;
          public static activate(param0: number, param1: com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption): kotlinx.coroutines.Job;
          public setEnvironment$sdk_clientRelease(param0: com.iadvize.conversation.sdk.h): void;
          public getChatboxControllerImpl$sdk_clientRelease(): d.c;
          public getVisitorController(): com.iadvize.conversation.sdk.feature.visitor.VisitorController;
          public getJweProvider$sdk_clientRelease(): com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.JWEProvider;
          public getConversationControllerImpl$sdk_clientRelease(): f.g;
          public clear$sdk_clientRelease(): void;
          public uiSdkScope$sdk_clientRelease(param0: any): kotlinx.coroutines.Job;
          public withActivatedSdk$sdk_clientRelease(param0: string, param1: any, param2: any): void;
          public static logout(param0: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): kotlinx.coroutines.Job;
          public getSdkScope$sdk_clientRelease(): E.c;
          public getVisitorControllerImpl$sdk_clientRelease(): y.a;
          public getNotificationControllerImpl$sdk_clientRelease(): r.a;
          public getTargetingController(): com.iadvize.conversation.sdk.feature.targeting.TargetingController;
          public static getLogLevel(): com.iadvize.conversation.sdk.feature.logger.Logger.Level;
          public getGraphQLApi$sdk_clientRelease(): n.b;
          public static activate(param0: number, param1: com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption, param2: com.iadvize.conversation.sdk.feature.gdpr.GDPROption): kotlinx.coroutines.Job;
          public getDefaultFloatingButtonController(): com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonController;
          public eventBusScope$sdk_clientRelease(param0: any): kotlinx.coroutines.Job;
          public getSatisfactionApi$sdk_clientRelease(): t.b;
          public getTrackingApi$sdk_clientRelease(): v.c;
          public getTargetingControllerImpl$sdk_clientRelease(): u.a;
          public ioSdkScope$sdk_clientRelease(param0: any): kotlinx.coroutines.Job;
          public getConversationController(): com.iadvize.conversation.sdk.feature.conversation.ConversationController;
          public getConversationChannel$sdk_clientRelease(): com.iadvize.conversation.sdk.feature.conversation.ConversationChannel;
          public getTransactionController(): com.iadvize.conversation.sdk.feature.transaction.TransactionController;
          public getActivationStatus(): com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus;
          public getChatboxController(): com.iadvize.conversation.sdk.feature.chatbox.ChatboxController;
          public setActivationStatus$sdk_clientRelease(param0: com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus): void;
        }
        export module IAdvizeSDK {
          export class ActivationException {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.ActivationException>;
            public constructor();
            public getDescription(): string;
            public constructor(param0: string);
          }
          export class ActivationStatus {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus>;
            public static OFF: com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus;
            public static INITIALIZED: com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus;
            public static ACTIVATING: com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus;
            public static ACTIVATED: com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus;
            public static values(): androidNative.Array<com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus>;
            public static valueOf(param0: string): com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus;
          }
          export class Callback {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.Callback>;
            /**
             * Constructs a new instance of the com.iadvize.conversation.sdk.IAdvizeSDK$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onSuccess(): void; onFailure(param0: java.lang.Throwable): void });
            public constructor();
            public onFailure(param0: java.lang.Throwable): void;
            public onSuccess(): void;
          }
          export class GraphQLApiException {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.GraphQLApiException>;
            public constructor(param0: string);
          }
          export class InvalidConversationException {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.InvalidConversationException>;
            public constructor(param0: string);
          }
          export class InvalidJwtException {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.InvalidJwtException>;
            public constructor();
          }
          export class InvalidProjectIdException extends com.iadvize.conversation.sdk.IAdvizeSDK.ActivationException {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.InvalidProjectIdException>;
            public constructor();
            public constructor(param0: string);
          }
          export class InvalidUserIdException extends com.iadvize.conversation.sdk.IAdvizeSDK.ActivationException {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.InvalidUserIdException>;
            public constructor();
            public constructor(param0: string);
          }
          export class NotActivatedException {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.NotActivatedException>;
            public constructor();
          }
          export class NotInitiatedException extends com.iadvize.conversation.sdk.IAdvizeSDK.ActivationException {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.NotInitiatedException>;
            public constructor();
            public constructor(param0: string);
          }
          export class UserAuthenticationException extends com.iadvize.conversation.sdk.IAdvizeSDK.ActivationException {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.UserAuthenticationException>;
            public constructor();
            public constructor(param0: string);
          }
          export class a extends com.iadvize.conversation.sdk.feature.targeting.TargetingListener {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.a>;
            public onActiveTargetingRuleAvailabilityUpdated(param0: boolean): void;
          }
          export class b {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.b>;
            public constructor();
          }
          export class c {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.c>;
            public constructor(param0: string);
          }
          export class d {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.d>;
            public constructor();
          }
          export class e {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.e>;
          }
          export class f extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope, any, any> {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.f>;
            public create(param0: any, param1: any): any;
            public invoke(param0: any, param1: any): any;
            public invokeSuspend(param0: any): any;
          }
          export module f {
            export class a {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.f.a>;
            }
          }
          export class g extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope, any, any> {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.g>;
            public create(param0: any, param1: any): any;
            public invoke(param0: any, param1: any): any;
            public invokeSuspend(param0: any): any;
          }
          export class h extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope, any, any> {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.h>;
            public create(param0: any, param1: any): any;
            public invoke(param0: any, param1: any): any;
            public invokeSuspend(param0: any): any;
          }
          export module h {
            export class a extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope, any, any> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.h.a>;
              public invokeSuspend(param0: any): any;
              public invoke(param0: any, param1: any): any;
              public create(param0: any, param1: any): any;
            }
          }
          export class i extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope, any, any> {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.i>;
            public create(param0: any, param1: any): any;
            public invoke(param0: any, param1: any): any;
            public invokeSuspend(param0: any): any;
          }
          export class j extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope, any, any> {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.j>;
            public create(param0: any, param1: any): any;
            public invoke(param0: any, param1: any): any;
            public invokeSuspend(param0: any): any;
          }
          export module j {
            export class a extends com.iadvize.conversation.sdk.IAdvizeSDK.Callback {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.j.a>;
              public onFailure(param0: java.lang.Throwable): void;
              public onSuccess(): void;
            }
          }
          export class k {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.k>;
            public constructor(param0: kotlinx.coroutines.CoroutineExceptionHandler.Key);
            public handleException(param0: any, param1: java.lang.Throwable): void;
          }
          export class l extends java.lang.Object implements any {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.l>;
            public static a: com.iadvize.conversation.sdk.IAdvizeSDK.l;
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
        export class a extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.a.a> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.a>;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public name(): string;
          public toString(): string;
          public constructor(param0: number, param1: com.apollographql.apollo3.api.Optional<string>);
          public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.a.a>;
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public b(): com.apollographql.apollo3.api.Optional<string>;
          public hashCode(): number;
          public a(): number;
          public id(): string;
        }
        export module a {
          export class a {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.a.a>;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: com.iadvize.conversation.sdk.a.b);
            public a(): com.iadvize.conversation.sdk.a.b;
            public toString(): string;
          }
          export class b {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.a.b>;
            public constructor(param0: com.iadvize.conversation.sdk.a.c);
            public hashCode(): number;
            public equals(param0: any): boolean;
            public a(): com.iadvize.conversation.sdk.a.c;
            public toString(): string;
          }
          export class c {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.a.c>;
            public a(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
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
        export class b extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.b.a> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.b>;
          public name(): string;
          public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.b.a>;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public b(): number;
          public toString(): string;
          public constructor(param0: number, param1: string, param2: com.apollographql.apollo3.api.Optional<string>);
          public a(): string;
          public c(): com.apollographql.apollo3.api.Optional<string>;
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
        }
        export module b {
          export class a {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.b.a>;
            public constructor(param0: com.iadvize.conversation.sdk.b.b);
            public hashCode(): number;
            public equals(param0: any): boolean;
            public a(): com.iadvize.conversation.sdk.b.b;
            public toString(): string;
          }
          export class b {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.b.b>;
            public constructor(param0: com.iadvize.conversation.sdk.b.c);
            public hashCode(): number;
            public equals(param0: any): boolean;
            public a(): com.iadvize.conversation.sdk.b.c;
            public toString(): string;
          }
          export class c {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.b.c>;
            public a(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
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
        export class c extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.c.a> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.c>;
          public name(): string;
          public a(): number;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public toString(): string;
          public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.c.a>;
          public b(): string;
          public constructor(param0: number, param1: string, param2: com.apollographql.apollo3.api.Optional<string>);
          public c(): com.apollographql.apollo3.api.Optional<string>;
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
        }
        export module c {
          export class a {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.c.a>;
            public a(): com.iadvize.conversation.sdk.c.b;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: com.iadvize.conversation.sdk.c.b);
            public toString(): string;
          }
          export class b {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.c.b>;
            public a(): com.iadvize.conversation.sdk.c.c;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: com.iadvize.conversation.sdk.c.c);
            public toString(): string;
          }
          export class c {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.c.c>;
            public a(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
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
        export class d extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.d.c> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.d>;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public name(): string;
          public toString(): string;
          public b(): java.util.UUID;
          public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.d.c>;
          public a(): com.iadvize.conversation.sdk.type.Language;
          public constructor(param0: java.util.UUID, param1: com.iadvize.conversation.sdk.type.Language);
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
        }
        export module d {
          export class a {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.d.a>;
            public a(): java.util.UUID;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: java.util.UUID);
            public toString(): string;
          }
          export class b {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.d.b>;
            public a(): com.iadvize.conversation.sdk.d.a;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: com.iadvize.conversation.sdk.d.a);
            public toString(): string;
          }
          export class c {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.d.c>;
            public a(): com.iadvize.conversation.sdk.d.b;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
            public constructor(param0: com.iadvize.conversation.sdk.d.b);
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
        export class e extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.e.c> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.e>;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public name(): string;
          public toString(): string;
          public b(): java.util.UUID;
          public a(): com.iadvize.conversation.sdk.type.Language;
          public constructor(param0: java.util.UUID, param1: com.iadvize.conversation.sdk.type.Language);
          public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.e.c>;
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
        }
        export module e {
          export class a {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.e.a>;
            public a(): java.util.UUID;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: java.util.UUID);
            public toString(): string;
          }
          export class b {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.e.b>;
            public a(): com.iadvize.conversation.sdk.e.a;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: com.iadvize.conversation.sdk.e.a);
            public toString(): string;
          }
          export class c {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.e.c>;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: com.iadvize.conversation.sdk.e.b, param1: com.iadvize.conversation.sdk.e.d);
            public a(): com.iadvize.conversation.sdk.e.b;
            public toString(): string;
            public b(): com.iadvize.conversation.sdk.e.d;
          }
          export class d {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.e.d>;
            public a(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
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
        export class f extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.f.a> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.f>;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public name(): string;
          public toString(): string;
          public constructor(param0: string);
          public b(): string;
          public a(): C.V;
          public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.f.a>;
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
        }
        export module f {
          export class a {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.f.a>;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: com.iadvize.conversation.sdk.f.b<any>);
            public toString(): string;
            public a(): com.iadvize.conversation.sdk.f.b<any>;
          }
          export class b {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.f.b<any>>;
            public a(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
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
        export module feature {
          export module authentication {
            export abstract class AuthenticationOption {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption>;
              public static Companion: com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.a<any>;
              public saveToPref$sdk_clientRelease(): void;
              public trackingApiValue$sdk_clientRelease(): string;
              public getOptionType$sdk_clientRelease(): number;
            }
            export module AuthenticationOption {
              export class Anonymous extends com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.Anonymous>;
                public static INSTANCE: com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.Anonymous;
              }
              export class JWECallback {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.JWECallback>;
                /**
                 * Constructs a new instance of the com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption$JWECallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onJWERetrieved(param0: string): void; onJWEFailure(param0: java.lang.Exception): void });
                public constructor();
                public onJWEFailure(param0: java.lang.Exception): void;
                public onJWERetrieved(param0: string): void;
              }
              export class JWEProvider {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.JWEProvider>;
                /**
                 * Constructs a new instance of the com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption$JWEProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onJWERequested(param0: com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.JWECallback): void });
                public constructor();
                public onJWERequested(param0: com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.JWECallback): void;
              }
              export class Secured extends com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.Secured>;
                public constructor(param0: com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.JWEProvider);
                public getJweProvider(): com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.JWEProvider;
              }
              export class Simple extends com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.Simple>;
                public getUserId(): string;
                public constructor(param0: string);
              }
              export class a {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.a<any>>;
                public static a(): com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption;
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
        export module feature {
          export module chatbox {
            export class ChatboxActivity extends e.a implements d.b {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.ChatboxActivity>;
              public constructor();
              public a(param0: com.iadvize.conversation.sdk.feature.chatbox.ChatboxConfiguration): void;
              public static a(param0: com.iadvize.conversation.sdk.feature.chatbox.ChatboxActivity): void;
              public onCreate(param0: globalAndroid.os.Bundle): void;
              public a(param0: e.h): void;
              public a(param0: com.iadvize.conversation.ui.models.MessageAttachment): void;
              public onDestroy(): void;
              public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
            }
            export module ChatboxActivity {
              export class a {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.ChatboxActivity.a>;
                public static a(param0: globalAndroid.content.Context): void;
              }
              export class b {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.ChatboxActivity.b>;
                public constructor();
              }
              export class c extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope, any, any> {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.ChatboxActivity.c>;
                public create(param0: any, param1: any): any;
                public invoke(param0: any, param1: any): any;
                public constructor(param0: any, param1: com.iadvize.conversation.sdk.feature.chatbox.ChatboxActivity);
                public invokeSuspend(param0: any): any;
              }
              export module c {
                export class a extends kotlinx.coroutines.flow.Flow<any> {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.ChatboxActivity.c.a>;
                  public constructor(param0: kotlinx.coroutines.flow.MutableSharedFlow);
                  public collect(param0: kotlinx.coroutines.flow.FlowCollector, param1: any): any;
                }
                export module a {
                  export class a<T> extends kotlinx.coroutines.flow.FlowCollector {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.ChatboxActivity.c.a.a<any>>;
                    public emit(param0: any, param1: any): any;
                    public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
                  }
                  export module a {
                    export class a {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.ChatboxActivity.c.a.a.a>;
                      public invokeSuspend(param0: any): any;
                      public constructor(param0: com.iadvize.conversation.sdk.feature.chatbox.ChatboxActivity.c.a.a<any>, param1: any);
                    }
                  }
                }
                export class b<T> extends kotlinx.coroutines.flow.FlowCollector {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.ChatboxActivity.c.b<any>>;
                  public constructor(param0: com.iadvize.conversation.sdk.feature.chatbox.ChatboxActivity);
                  public emit(param0: any, param1: any): any;
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
        export module feature {
          export module chatbox {
            export class ChatboxConfiguration {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.ChatboxConfiguration>;
              public copy(param0: number, param1: string, param2: string, param3: string, param4: string, param5: java.lang.Integer, param6: java.lang.Integer, param7: com.iadvize.conversation.sdk.feature.conversation.IncomingMessageAvatar): com.iadvize.conversation.sdk.feature.chatbox.ChatboxConfiguration;
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
              public component8(): com.iadvize.conversation.sdk.feature.conversation.IncomingMessageAvatar;
              public getToolbarMainColor(): java.lang.Integer;
              public setIncomingMessageAvatar(param0: com.iadvize.conversation.sdk.feature.conversation.IncomingMessageAvatar): void;
              public setToolbarTitle(param0: string): void;
              public component7(): java.lang.Integer;
              public getFontPath(): string;
              public setGdprMessage(param0: string): void;
              public constructor(param0: number, param1: string, param2: string, param3: string, param4: string, param5: java.lang.Integer);
              public constructor();
              public component2(): string;
              public constructor(param0: number, param1: string, param2: string, param3: string, param4: string, param5: java.lang.Integer, param6: java.lang.Integer, param7: com.iadvize.conversation.sdk.feature.conversation.IncomingMessageAvatar);
              public getAutomaticMessage(): string;
              public component5(): string;
              public constructor(param0: number, param1: string, param2: string, param3: string, param4: string);
              public constructor(param0: number);
              public getMainColor(): number;
              public setAutomaticMessage(param0: string): void;
              public component1(): number;
              public getIncomingMessageAvatar(): com.iadvize.conversation.sdk.feature.conversation.IncomingMessageAvatar;
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
        export module feature {
          export module chatbox {
            export class ChatboxController {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.ChatboxController>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.sdk.feature.chatbox.ChatboxController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getListeners(): java.util.List<com.iadvize.conversation.sdk.feature.chatbox.ChatboxListener>; setListeners(param0: java.util.List<com.iadvize.conversation.sdk.feature.chatbox.ChatboxListener>): void; setupChatbox(param0: com.iadvize.conversation.sdk.feature.chatbox.ChatboxConfiguration): void; isChatboxPresented(): boolean; presentChatbox(param0: globalAndroid.content.Context): void; dismissChatbox(): void });
              public constructor();
              public isChatboxPresented(): boolean;
              public setListeners(param0: java.util.List<com.iadvize.conversation.sdk.feature.chatbox.ChatboxListener>): void;
              public setupChatbox(param0: com.iadvize.conversation.sdk.feature.chatbox.ChatboxConfiguration): void;
              public getListeners(): java.util.List<com.iadvize.conversation.sdk.feature.chatbox.ChatboxListener>;
              public presentChatbox(param0: globalAndroid.content.Context): void;
              public dismissChatbox(): void;
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
        export module feature {
          export module chatbox {
            export class ChatboxErrorView {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.ChatboxErrorView>;
              public a(param0: globalAndroid.view.View.OnClickListener): void;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
              public a(param0: string): void;
              public constructor(param0: globalAndroid.content.Context);
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
        export module feature {
          export module chatbox {
            export class ChatboxListener {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.ChatboxListener>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.sdk.feature.chatbox.ChatboxListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
        export module feature {
          export module chatbox {
            export module attachment {
              export class ConversationFileProvider {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.attachment.ConversationFileProvider>;
                public constructor();
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
        export module feature {
          export module chatbox {
            export module attachment {
              export class ImageAttachmentViewerActivity {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.attachment.ImageAttachmentViewerActivity>;
                public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
                public constructor();
                public onCreate(param0: globalAndroid.os.Bundle): void;
                public static a(param0: com.iadvize.conversation.sdk.feature.chatbox.attachment.ImageAttachmentViewerActivity): void;
                public onDestroy(): void;
              }
              export module ImageAttachmentViewerActivity {
                export class a {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.attachment.ImageAttachmentViewerActivity.a>;
                  public static a(param0: globalAndroid.app.Activity, param1: com.iadvize.conversation.ui.models.MessageAttachment.Image): void;
                }
                export class b extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope, any, any> {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.attachment.ImageAttachmentViewerActivity.b>;
                  public constructor(param0: any, param1: com.iadvize.conversation.sdk.feature.chatbox.attachment.ImageAttachmentViewerActivity);
                  public invokeSuspend(param0: any): any;
                  public invoke(param0: any, param1: any): any;
                  public create(param0: any, param1: any): any;
                }
                export module b {
                  export class a extends kotlinx.coroutines.flow.Flow<any> {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.attachment.ImageAttachmentViewerActivity.b.a>;
                    public constructor(param0: kotlinx.coroutines.flow.MutableSharedFlow);
                    public collect(param0: kotlinx.coroutines.flow.FlowCollector, param1: any): any;
                  }
                  export module a {
                    export class a<T> extends kotlinx.coroutines.flow.FlowCollector {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.attachment.ImageAttachmentViewerActivity.b.a.a<any>>;
                      public emit(param0: any, param1: any): any;
                      public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
                    }
                    export module a {
                      export class a {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.attachment.ImageAttachmentViewerActivity.b.a.a.a>;
                        public constructor(param0: com.iadvize.conversation.sdk.feature.chatbox.attachment.ImageAttachmentViewerActivity.b.a.a<any>, param1: any);
                        public invokeSuspend(param0: any): any;
                      }
                    }
                  }
                  export class b<T> extends kotlinx.coroutines.flow.FlowCollector {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.attachment.ImageAttachmentViewerActivity.b.b<any>>;
                    public constructor(param0: com.iadvize.conversation.sdk.feature.chatbox.attachment.ImageAttachmentViewerActivity);
                    public emit(param0: any, param1: any): any;
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
        export module feature {
          export module conversation {
            export class ConversationChannel {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.ConversationChannel>;
              public static Companion: com.iadvize.conversation.sdk.feature.conversation.ConversationChannel.a;
              public static CHAT: com.iadvize.conversation.sdk.feature.conversation.ConversationChannel;
              public static VIDEO: com.iadvize.conversation.sdk.feature.conversation.ConversationChannel;
              public static valueOf(param0: string): com.iadvize.conversation.sdk.feature.conversation.ConversationChannel;
              public static values(): androidNative.Array<com.iadvize.conversation.sdk.feature.conversation.ConversationChannel>;
              public toApiChannel$sdk_clientRelease(): C.j;
            }
            export module ConversationChannel {
              export class a {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.ConversationChannel.a>;
                public a(param0: string): com.iadvize.conversation.sdk.feature.conversation.ConversationChannel;
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
        export module feature {
          export module conversation {
            export class ConversationController {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.ConversationController>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.sdk.feature.conversation.ConversationController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getListeners(): java.util.List<com.iadvize.conversation.sdk.feature.conversation.ConversationListener>; ongoingConversation(): com.iadvize.conversation.sdk.feature.conversation.OngoingConversation });
              public constructor();
              public getListeners(): java.util.List<com.iadvize.conversation.sdk.feature.conversation.ConversationListener>;
              public ongoingConversation(): com.iadvize.conversation.sdk.feature.conversation.OngoingConversation;
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
        export module feature {
          export module conversation {
            export class ConversationListener {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.ConversationListener>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.sdk.feature.conversation.ConversationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onOngoingConversationUpdated(param0: com.iadvize.conversation.sdk.feature.conversation.OngoingConversation): void; onNewMessageReceived(param0: string): void; handleClickedUrl(param0: globalAndroid.net.Uri): boolean });
              public constructor();
              public onOngoingConversationUpdated(param0: com.iadvize.conversation.sdk.feature.conversation.OngoingConversation): void;
              public onNewMessageReceived(param0: string): void;
              public handleClickedUrl(param0: globalAndroid.net.Uri): boolean;
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
        export module feature {
          export module conversation {
            export abstract class IncomingMessageAvatar {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.IncomingMessageAvatar>;
              public toSenderAvatar$sdk_clientRelease(): com.iadvize.conversation.ui.models.SenderAvatar;
            }
            export module IncomingMessageAvatar {
              export class Image extends com.iadvize.conversation.sdk.feature.conversation.IncomingMessageAvatar {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.IncomingMessageAvatar.Image>;
                public constructor(param0: globalAndroid.graphics.drawable.Drawable);
                public getValue(): globalAndroid.graphics.drawable.Drawable;
              }
              export class Url extends com.iadvize.conversation.sdk.feature.conversation.IncomingMessageAvatar {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.IncomingMessageAvatar.Url>;
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
        export module feature {
          export module conversation {
            export class NoOpConversationListener extends com.iadvize.conversation.sdk.feature.conversation.ConversationListener {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.NoOpConversationListener>;
              public constructor();
              public onOngoingConversationUpdated(param0: com.iadvize.conversation.sdk.feature.conversation.OngoingConversation): void;
              public onNewMessageReceived(param0: string): void;
              public handleClickedUrl(param0: globalAndroid.net.Uri): boolean;
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
        export module feature {
          export module conversation {
            export class OngoingConversation {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.OngoingConversation>;
              public constructor();
              public getConversationId(): string;
              public component1(): com.iadvize.conversation.sdk.feature.conversation.ConversationChannel;
              public component2(): string;
              public constructor(param0: com.iadvize.conversation.sdk.feature.conversation.ConversationChannel, param1: string);
              public hashCode(): number;
              public getConversationChannel(): com.iadvize.conversation.sdk.feature.conversation.ConversationChannel;
              public copy(param0: com.iadvize.conversation.sdk.feature.conversation.ConversationChannel, param1: string): com.iadvize.conversation.sdk.feature.conversation.OngoingConversation;
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
        export module feature {
          export module conversation {
            export module xmpp {
              export module connection {
                export class NetworkUpdateReceiver {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.connection.NetworkUpdateReceiver>;
                  public constructor();
                  public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
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
        export module feature {
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class FileExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.FileExtension>;
                      public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.FileExtension>;
                      public b(): com.iadvize.conversation.ui.models.MessageKind;
                      public a(): string;
                      public getElementName(): string;
                      public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                      public describeContents(): number;
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public constructor(param0: string, param1: string, param2: string);
                      public getNamespace(): string;
                      public constructor();
                    }
                    export module FileExtension {
                      export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.FileExtension> {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.FileExtension.a<any>>;
                        public createFromParcel(param0: globalAndroid.os.Parcel): any;
                        public constructor();
                        public newArray(param0: number): androidNative.Array<any>;
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
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export module feature {
          export module defaultfloatingbutton {
            export class DefaultFloatingButtonConfiguration {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonConfiguration>;
              public constructor(param0: number, param1: com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonMargins, param2: number, param3: number, param4: java.util.Map<com.iadvize.conversation.sdk.feature.conversation.ConversationChannel, java.lang.Integer>);
              public constructor();
              public component2(): com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonMargins;
              public getIconTint(): number;
              public hashCode(): number;
              public toString(): string;
              public getIconResIds(): java.util.Map<com.iadvize.conversation.sdk.feature.conversation.ConversationChannel, java.lang.Integer>;
              public getMargins(): com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonMargins;
              public component1(): number;
              public copy(param0: number, param1: com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonMargins, param2: number, param3: number, param4: java.util.Map<com.iadvize.conversation.sdk.feature.conversation.ConversationChannel, java.lang.Integer>): com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonConfiguration;
              public component5(): java.util.Map<com.iadvize.conversation.sdk.feature.conversation.ConversationChannel, java.lang.Integer>;
              public component4(): number;
              public getBackgroundTint(): number;
              public component3(): number;
              public equals(param0: any): boolean;
              public getAnchor(): number;
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
        export module feature {
          export module defaultfloatingbutton {
            export class DefaultFloatingButtonController {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonController>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { setupDefaultFloatingButton(param0: com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonOption): void });
              public constructor();
              public setupDefaultFloatingButton(param0: com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonOption): void;
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
        export module feature {
          export module defaultfloatingbutton {
            export class DefaultFloatingButtonMargins {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonMargins>;
              public constructor();
              public hashCode(): number;
              public component2(): number;
              public getEnd(): number;
              public getTop(): number;
              public toString(): string;
              public component1(): number;
              public getStart(): number;
              public getBottom(): number;
              public component4(): number;
              public component3(): number;
              public copy(param0: number, param1: number, param2: number, param3: number): com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonMargins;
              public equals(param0: any): boolean;
              public constructor(param0: number, param1: number, param2: number, param3: number);
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
        export module feature {
          export module defaultfloatingbutton {
            export abstract class DefaultFloatingButtonOption {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonOption>;
              public getConfiguration(): com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonConfiguration;
            }
            export module DefaultFloatingButtonOption {
              export class Disabled extends com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonOption {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonOption.Disabled>;
                public static INSTANCE: com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonOption.Disabled;
              }
              export class Enabled extends com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonOption {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonOption.Enabled>;
                public constructor(param0: com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonConfiguration);
                public constructor();
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
        export module feature {
          export module gdpr {
            export abstract class GDPREnabledOption {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.gdpr.GDPREnabledOption>;
            }
            export module GDPREnabledOption {
              export class LegalUrl extends com.iadvize.conversation.sdk.feature.gdpr.GDPREnabledOption {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.gdpr.GDPREnabledOption.LegalUrl>;
                public getLegalInformationURI(): java.net.URI;
                public constructor(param0: java.net.URI);
              }
              export class Listener extends com.iadvize.conversation.sdk.feature.gdpr.GDPREnabledOption {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.gdpr.GDPREnabledOption.Listener>;
                public constructor(param0: com.iadvize.conversation.sdk.feature.gdpr.GDPRListener);
                public getListener(): com.iadvize.conversation.sdk.feature.gdpr.GDPRListener;
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
        export module feature {
          export module gdpr {
            export class GDPRListener {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.gdpr.GDPRListener>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.sdk.feature.gdpr.GDPRListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
        export module feature {
          export module gdpr {
            export abstract class GDPROption {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.gdpr.GDPROption>;
            }
            export module GDPROption {
              export class Disabled extends com.iadvize.conversation.sdk.feature.gdpr.GDPROption {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.gdpr.GDPROption.Disabled>;
                public static INSTANCE: com.iadvize.conversation.sdk.feature.gdpr.GDPROption.Disabled;
              }
              export class Enabled extends com.iadvize.conversation.sdk.feature.gdpr.GDPROption {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.gdpr.GDPROption.Enabled>;
                public getOption(): com.iadvize.conversation.sdk.feature.gdpr.GDPREnabledOption;
                public constructor(param0: com.iadvize.conversation.sdk.feature.gdpr.GDPREnabledOption);
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
        export module feature {
          export module logger {
            export class Logger {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.logger.Logger>;
              public static INSTANCE: com.iadvize.conversation.sdk.feature.logger.Logger;
              public log$sdk_clientRelease(param0: com.iadvize.conversation.sdk.feature.logger.Logger.Level, param1: string, param2: string, param3: java.lang.Throwable): void;
            }
            export module Logger {
              export class Level {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.logger.Logger.Level>;
                public static VERBOSE: com.iadvize.conversation.sdk.feature.logger.Logger.Level;
                public static INFO: com.iadvize.conversation.sdk.feature.logger.Logger.Level;
                public static WARNING: com.iadvize.conversation.sdk.feature.logger.Logger.Level;
                public static ERROR: com.iadvize.conversation.sdk.feature.logger.Logger.Level;
                public static valueOf(param0: string): com.iadvize.conversation.sdk.feature.logger.Logger.Level;
                public static values(): androidNative.Array<com.iadvize.conversation.sdk.feature.logger.Logger.Level>;
              }
              export class a {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.logger.Logger.a>;
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
        export module feature {
          export module notification {
            export class NotificationController {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.notification.NotificationController>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.sdk.feature.notification.NotificationController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { registerPushToken(param0: string): void; enablePushNotifications(param0: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): void; disablePushNotifications(param0: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): void; isIAdvizePushNotification(param0: java.util.Map<string, string>): boolean });
              public constructor();
              public enablePushNotifications(param0: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): void;
              public registerPushToken(param0: string): void;
              public isIAdvizePushNotification(param0: java.util.Map<string, string>): boolean;
              public disablePushNotifications(param0: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): void;
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
        export module feature {
          export module satisfaction {
            export class SatisfactionGrade {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionGrade>;
              public static CSAT: com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionGrade;
              public static NPS: com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionGrade;
              public static COMMENT: com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionGrade;
              public static values(): androidNative.Array<com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionGrade>;
              public static valueOf(param0: string): com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionGrade;
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
        export module feature {
          export module satisfaction {
            export class SatisfactionPayload {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionPayload>;
              public getConversationId(): string;
              public getValue(): any;
              public component4(): com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionGrade;
              public component2(): string;
              public component5(): any;
              public hashCode(): number;
              public getId(): string;
              public toString(): string;
              public copy(param0: string, param1: string, param2: string, param3: com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionGrade, param4: any): com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionPayload;
              public component3(): string;
              public component1(): string;
              public constructor(param0: string, param1: string, param2: string, param3: com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionGrade, param4: any);
              public getVuid(): string;
              public getGrade(): com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionGrade;
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
        export module feature {
          export module targeting {
            export abstract class LanguageOption {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.targeting.LanguageOption>;
            }
            export module LanguageOption {
              export class Custom extends com.iadvize.conversation.sdk.feature.targeting.LanguageOption {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.targeting.LanguageOption.Custom>;
                public constructor(param0: com.iadvize.conversation.sdk.type.Language);
                public getValue(): com.iadvize.conversation.sdk.type.Language;
              }
              export class Default extends com.iadvize.conversation.sdk.feature.targeting.LanguageOption {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.targeting.LanguageOption.Default>;
                public static INSTANCE: com.iadvize.conversation.sdk.feature.targeting.LanguageOption.Default;
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
        export module feature {
          export module targeting {
            export abstract class NavigationOption {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.targeting.NavigationOption>;
            }
            export module NavigationOption {
              export class ActivateNewRule extends com.iadvize.conversation.sdk.feature.targeting.NavigationOption {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.targeting.NavigationOption.ActivateNewRule>;
                public constructor(param0: com.iadvize.conversation.sdk.feature.targeting.TargetingRule);
                public getTargetingRule$sdk_clientRelease(): com.iadvize.conversation.sdk.feature.targeting.TargetingRule;
              }
              export class ClearActiveRule extends com.iadvize.conversation.sdk.feature.targeting.NavigationOption {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.targeting.NavigationOption.ClearActiveRule>;
                public static INSTANCE: com.iadvize.conversation.sdk.feature.targeting.NavigationOption.ClearActiveRule;
              }
              export class KeepActiveRule extends com.iadvize.conversation.sdk.feature.targeting.NavigationOption {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.targeting.NavigationOption.KeepActiveRule>;
                public static INSTANCE: com.iadvize.conversation.sdk.feature.targeting.NavigationOption.KeepActiveRule;
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
        export module feature {
          export module targeting {
            export class TargetingController {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.targeting.TargetingController>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.sdk.feature.targeting.TargetingController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getListeners(): java.util.List<com.iadvize.conversation.sdk.feature.targeting.TargetingListener>; setListeners(param0: java.util.List<com.iadvize.conversation.sdk.feature.targeting.TargetingListener>): void; getLanguage(): com.iadvize.conversation.sdk.feature.targeting.LanguageOption; setLanguage(param0: com.iadvize.conversation.sdk.feature.targeting.LanguageOption): void; activateTargetingRule(param0: com.iadvize.conversation.sdk.feature.targeting.TargetingRule): void; registerUserNavigation(param0: com.iadvize.conversation.sdk.feature.targeting.NavigationOption): void; isActiveTargetingRuleAvailable(): boolean; activeTargetingRule(): com.iadvize.conversation.sdk.feature.targeting.TargetingRule });
              public constructor();
              public isActiveTargetingRuleAvailable(): boolean;
              public getLanguage(): com.iadvize.conversation.sdk.feature.targeting.LanguageOption;
              public activateTargetingRule(param0: com.iadvize.conversation.sdk.feature.targeting.TargetingRule): void;
              public registerUserNavigation(param0: com.iadvize.conversation.sdk.feature.targeting.NavigationOption): void;
              public setLanguage(param0: com.iadvize.conversation.sdk.feature.targeting.LanguageOption): void;
              public activeTargetingRule(): com.iadvize.conversation.sdk.feature.targeting.TargetingRule;
              public setListeners(param0: java.util.List<com.iadvize.conversation.sdk.feature.targeting.TargetingListener>): void;
              public getListeners(): java.util.List<com.iadvize.conversation.sdk.feature.targeting.TargetingListener>;
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
        export module feature {
          export module targeting {
            export class TargetingListener {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.targeting.TargetingListener>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.sdk.feature.targeting.TargetingListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
        export module feature {
          export module targeting {
            export class TargetingRule {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.targeting.TargetingRule>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.sdk.feature.targeting.TargetingRule>;
              public component2(): com.iadvize.conversation.sdk.feature.conversation.ConversationChannel;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public hashCode(): number;
              public getId(): string;
              public component1(): java.util.UUID;
              public copy(param0: java.util.UUID, param1: com.iadvize.conversation.sdk.feature.conversation.ConversationChannel): com.iadvize.conversation.sdk.feature.targeting.TargetingRule;
              public describeContents(): number;
              public getUuid(): java.util.UUID;
              public getConversationChannel(): com.iadvize.conversation.sdk.feature.conversation.ConversationChannel;
              public toString(): string;
              public constructor(param0: java.util.UUID, param1: com.iadvize.conversation.sdk.feature.conversation.ConversationChannel);
              public equals(param0: any): boolean;
            }
            export module TargetingRule {
              export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.sdk.feature.targeting.TargetingRule> {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.targeting.TargetingRule.a>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
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
        export module feature {
          export module transaction {
            export class Transaction {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.transaction.Transaction>;
              public static Companion: com.iadvize.conversation.sdk.feature.transaction.Transaction.a<any>;
              public hashCode(): number;
              public getId(): string;
              public getAmount(): number;
              public toPrefString$sdk_clientRelease(): string;
              public setAmount(param0: number): void;
              public setId(param0: string): void;
              public toString(): string;
              public component4(): com.iadvize.conversation.sdk.type.Currency;
              public component1(): string;
              public copy(param0: string, param1: java.util.Date, param2: number, param3: com.iadvize.conversation.sdk.type.Currency): com.iadvize.conversation.sdk.feature.transaction.Transaction;
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
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.transaction.Transaction.a<any>>;
                public static a(param0: string): com.iadvize.conversation.sdk.feature.transaction.Transaction;
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
        export module feature {
          export module transaction {
            export class TransactionController {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.transaction.TransactionController>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.sdk.feature.transaction.TransactionController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { register(param0: com.iadvize.conversation.sdk.feature.transaction.Transaction): void });
              public constructor();
              public register(param0: com.iadvize.conversation.sdk.feature.transaction.Transaction): void;
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
        export module feature {
          export module video {
            export class AlphaBackgroundOnPressedImageButton {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.AlphaBackgroundOnPressedImageButton>;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
              public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
              public constructor(param0: globalAndroid.content.Context);
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
        export module feature {
          export module video {
            export class ThumbnailVideoService {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService>;
              public constructor();
              public onCreate(): void;
              public onDestroy(): void;
              public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
              public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
            }
            export module ThumbnailVideoService {
              export class a {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService.a>;
                public static a(param0: globalAndroid.content.Context, param1: com.iadvize.conversation.sdk.feature.video.VideoCredentials, param2: com.iadvize.conversation.sdk.feature.video.VideoSettings): void;
              }
              export class b extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope, any, any> {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService.b>;
                public create(param0: any, param1: any): any;
                public constructor(param0: any, param1: com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService);
                public invoke(param0: any, param1: any): any;
                public invokeSuspend(param0: any): any;
              }
              export module b {
                export class a extends kotlinx.coroutines.flow.Flow<any> {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService.b.a>;
                  public constructor(param0: kotlinx.coroutines.flow.MutableSharedFlow);
                  public collect(param0: kotlinx.coroutines.flow.FlowCollector, param1: any): any;
                }
                export module a {
                  export class a<T> extends kotlinx.coroutines.flow.FlowCollector {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService.b.a.a<any>>;
                    public emit(param0: any, param1: any): any;
                    public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
                  }
                  export module a {
                    export class a {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService.b.a.a.a>;
                      public constructor(param0: com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService.b.a.a<any>, param1: any);
                      public invokeSuspend(param0: any): any;
                    }
                  }
                }
                export class b<T> extends kotlinx.coroutines.flow.FlowCollector {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService.b.b<any>>;
                  public constructor(param0: com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService);
                  public emit(param0: any, param1: any): any;
                }
              }
              export class c extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope, any, any> {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService.c>;
                public create(param0: any, param1: any): any;
                public constructor(param0: any, param1: com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService);
                public invoke(param0: any, param1: any): any;
                public invokeSuspend(param0: any): any;
              }
              export module c {
                export class a extends kotlinx.coroutines.flow.Flow<any> {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService.c.a>;
                  public constructor(param0: kotlinx.coroutines.flow.MutableSharedFlow);
                  public collect(param0: kotlinx.coroutines.flow.FlowCollector, param1: any): any;
                }
                export module a {
                  export class a<T> extends kotlinx.coroutines.flow.FlowCollector {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService.c.a.a<any>>;
                    public emit(param0: any, param1: any): any;
                    public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
                  }
                  export module a {
                    export class a {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService.c.a.a.a>;
                      public invokeSuspend(param0: any): any;
                      public constructor(param0: com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService.c.a.a<any>, param1: any);
                    }
                  }
                }
                export class b<T> extends kotlinx.coroutines.flow.FlowCollector {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService.c.b<any>>;
                  public constructor(param0: com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService);
                  public emit(param0: any, param1: any): any;
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
        export module feature {
          export module video {
            export class VideoActivity {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoActivity>;
              /** @deprecated */
              public onBackPressed(): void;
              public constructor();
              public static c(param0: com.iadvize.conversation.sdk.feature.video.VideoActivity, param1: boolean): void;
              public static a(param0: com.iadvize.conversation.sdk.feature.video.VideoActivity, param1: androidx.constraintlayout.widget.ConstraintSet): void;
              public static a(param0: com.iadvize.conversation.sdk.feature.video.VideoActivity, param1: boolean): void;
              public onCreate(param0: globalAndroid.os.Bundle): void;
              public static d(param0: com.iadvize.conversation.sdk.feature.video.VideoActivity, param1: boolean): void;
              public onDestroy(): void;
              public static c(param0: com.iadvize.conversation.sdk.feature.video.VideoActivity): void;
              public static a(param0: com.iadvize.conversation.sdk.feature.video.VideoActivity, param1: boolean, param2: boolean, param3: number): void;
              public static b(param0: com.iadvize.conversation.sdk.feature.video.VideoActivity, param1: boolean): void;
              public onResume(): void;
            }
            export module VideoActivity {
              export class a {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoActivity.a>;
                public static a(param0: globalAndroid.content.Context, param1: com.iadvize.conversation.sdk.feature.video.VideoCredentials, param2: com.iadvize.conversation.sdk.feature.video.VideoSettings, param3: boolean): void;
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
        export module feature {
          export module video {
            export class VideoCredentials {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoCredentials>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.sdk.feature.video.VideoCredentials>;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public describeContents(): number;
              public constructor(param0: string, param1: string, param2: string);
              public c(): string;
              public b(): string;
              public a(): string;
            }
            export module VideoCredentials {
              export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.sdk.feature.video.VideoCredentials> {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoCredentials.a>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
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
        export module feature {
          export module video {
            export class VideoLobbyActivity {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoLobbyActivity>;
              public constructor();
              public onCreate(param0: globalAndroid.os.Bundle): void;
              public onDestroy(): void;
            }
            export module VideoLobbyActivity {
              export class a {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoLobbyActivity.a>;
                public static a(param0: globalAndroid.content.Context, param1: string): void;
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
        export module feature {
          export module video {
            export class VideoService {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoService>;
              public constructor();
              public onCreate(): void;
              public onDestroy(): void;
              public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
              public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
              public onTaskRemoved(param0: globalAndroid.content.Intent): void;
            }
            export module VideoService {
              export class a {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoService.a>;
                public static a(param0: com.iadvize.conversation.sdk.feature.video.VideoLobbyActivity, param1: com.iadvize.conversation.sdk.feature.video.VideoCredentials): void;
                public static a(): boolean;
              }
              export class b extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope, any, any> {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoService.b>;
                public create(param0: any, param1: any): any;
                public invoke(param0: any, param1: any): any;
                public constructor(param0: any, param1: com.iadvize.conversation.sdk.feature.video.VideoService);
                public invokeSuspend(param0: any): any;
              }
              export module b {
                export class a extends kotlinx.coroutines.flow.Flow<any> {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoService.b.a>;
                  public constructor(param0: kotlinx.coroutines.flow.MutableSharedFlow);
                  public collect(param0: kotlinx.coroutines.flow.FlowCollector, param1: any): any;
                }
                export module a {
                  export class a<T> extends kotlinx.coroutines.flow.FlowCollector {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoService.b.a.a<any>>;
                    public emit(param0: any, param1: any): any;
                    public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
                  }
                  export module a {
                    export class a {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoService.b.a.a.a>;
                      public constructor(param0: com.iadvize.conversation.sdk.feature.video.VideoService.b.a.a<any>, param1: any);
                      public invokeSuspend(param0: any): any;
                    }
                  }
                }
                export class b<T> extends kotlinx.coroutines.flow.FlowCollector {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoService.b.b<any>>;
                  public constructor(param0: com.iadvize.conversation.sdk.feature.video.VideoService);
                  public emit(param0: any, param1: any): any;
                }
              }
              export class c extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope, any, any> {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoService.c>;
                public create(param0: any, param1: any): any;
                public invoke(param0: any, param1: any): any;
                public constructor(param0: any, param1: com.iadvize.conversation.sdk.feature.video.VideoService);
                public invokeSuspend(param0: any): any;
              }
              export module c {
                export class a extends kotlinx.coroutines.flow.Flow<any> {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoService.c.a>;
                  public constructor(param0: kotlinx.coroutines.flow.MutableSharedFlow);
                  public collect(param0: kotlinx.coroutines.flow.FlowCollector, param1: any): any;
                }
                export module a {
                  export class a<T> extends kotlinx.coroutines.flow.FlowCollector {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoService.c.a.a<any>>;
                    public emit(param0: any, param1: any): any;
                    public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
                  }
                  export module a {
                    export class a {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoService.c.a.a.a>;
                      public invokeSuspend(param0: any): any;
                      public constructor(param0: com.iadvize.conversation.sdk.feature.video.VideoService.c.a.a<any>, param1: any);
                    }
                  }
                }
                export class b<T> extends kotlinx.coroutines.flow.FlowCollector {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoService.c.b<any>>;
                  public constructor(param0: com.iadvize.conversation.sdk.feature.video.VideoService);
                  public emit(param0: any, param1: any): any;
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
        export module feature {
          export module video {
            export class VideoSettings {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoSettings>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.sdk.feature.video.VideoSettings>;
              public b(): x.a.a;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public constructor(param0: boolean, param1: boolean, param2: x.a.a);
              public describeContents(): number;
              public c(): boolean;
              public a(param0: x.a.a): void;
              public b(param0: boolean): void;
              public a(param0: boolean): void;
              public a(): boolean;
            }
            export module VideoSettings {
              export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.sdk.feature.video.VideoSettings> {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoSettings.a>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
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
        export module feature {
          export module video {
            export class a extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope, any, any> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.a>;
              public invokeSuspend(param0: any): any;
              public invoke(param0: any, param1: any): any;
              public create(param0: any, param1: any): any;
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
        export module feature {
          export module video {
            export class b extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope, any, any> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.b>;
              public invokeSuspend(param0: any): any;
              public invoke(param0: any, param1: any): any;
              public create(param0: any, param1: any): any;
              public constructor(param0: com.iadvize.conversation.sdk.feature.video.VideoActivity, param1: any);
            }
            export module b {
              export class a extends kotlinx.coroutines.flow.Flow<any> {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.b.a>;
                public constructor(param0: kotlinx.coroutines.flow.MutableSharedFlow);
                public collect(param0: kotlinx.coroutines.flow.FlowCollector, param1: any): any;
              }
              export module a {
                export class a<T> extends kotlinx.coroutines.flow.FlowCollector {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.b.a.a<any>>;
                  public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
                  public emit(param0: any, param1: any): any;
                }
                export module a {
                  export class a {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.b.a.a.a>;
                    public constructor(param0: com.iadvize.conversation.sdk.feature.video.b.a.a<any>, param1: any);
                    public invokeSuspend(param0: any): any;
                  }
                }
              }
              export class b<T> extends kotlinx.coroutines.flow.FlowCollector {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.b.b<any>>;
                public emit(param0: any, param1: any): any;
                public constructor(param0: com.iadvize.conversation.sdk.feature.video.VideoActivity);
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
        export module feature {
          export module video {
            export class c extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope, any, any> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.c>;
              public invokeSuspend(param0: any): any;
              public invoke(param0: any, param1: any): any;
              public create(param0: any, param1: any): any;
              public constructor(param0: com.iadvize.conversation.sdk.feature.video.VideoActivity, param1: any);
            }
            export module c {
              export class a extends kotlinx.coroutines.flow.Flow<any> {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.c.a>;
                public constructor(param0: kotlinx.coroutines.flow.MutableSharedFlow);
                public collect(param0: kotlinx.coroutines.flow.FlowCollector, param1: any): any;
              }
              export module a {
                export class a<T> extends kotlinx.coroutines.flow.FlowCollector {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.c.a.a<any>>;
                  public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
                  public emit(param0: any, param1: any): any;
                }
                export module a {
                  export class a {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.c.a.a.a>;
                    public invokeSuspend(param0: any): any;
                    public constructor(param0: com.iadvize.conversation.sdk.feature.video.c.a.a<any>, param1: any);
                  }
                }
              }
              export class b<T> extends kotlinx.coroutines.flow.FlowCollector {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.c.b<any>>;
                public emit(param0: any, param1: any): any;
                public constructor(param0: com.iadvize.conversation.sdk.feature.video.VideoActivity);
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
        export module feature {
          export module video {
            export class d extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope, any, any> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.d>;
              public invokeSuspend(param0: any): any;
              public invoke(param0: any, param1: any): any;
              public create(param0: any, param1: any): any;
              public constructor(param0: com.iadvize.conversation.sdk.feature.video.VideoActivity, param1: any);
            }
            export module d {
              export class a extends kotlinx.coroutines.flow.Flow<any> {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.d.a>;
                public constructor(param0: kotlinx.coroutines.flow.MutableSharedFlow);
                public collect(param0: kotlinx.coroutines.flow.FlowCollector, param1: any): any;
              }
              export module a {
                export class a<T> extends kotlinx.coroutines.flow.FlowCollector {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.d.a.a<any>>;
                  public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
                  public emit(param0: any, param1: any): any;
                }
                export module a {
                  export class a {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.d.a.a.a>;
                    public invokeSuspend(param0: any): any;
                    public constructor(param0: com.iadvize.conversation.sdk.feature.video.d.a.a<any>, param1: any);
                  }
                }
              }
              export class b<T> extends kotlinx.coroutines.flow.FlowCollector {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.d.b<any>>;
                public emit(param0: any, param1: any): any;
                public constructor(param0: com.iadvize.conversation.sdk.feature.video.VideoActivity);
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
        export module feature {
          export module video {
            export class e extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope, any, any> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.e>;
              public invokeSuspend(param0: any): any;
              public invoke(param0: any, param1: any): any;
              public create(param0: any, param1: any): any;
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
        export module feature {
          export module video {
            export class f extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope, any, any> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.f>;
              public invokeSuspend(param0: any): any;
              public invoke(param0: any, param1: any): any;
              public create(param0: any, param1: any): any;
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
        export module feature {
          export module video {
            export class g extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope, any, any> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.g>;
              public invokeSuspend(param0: any): any;
              public invoke(param0: any, param1: any): any;
              public create(param0: any, param1: any): any;
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
        export module feature {
          export module video {
            export class h extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope, any, any> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.h>;
              public invokeSuspend(param0: any): any;
              public invoke(param0: any, param1: any): any;
              public create(param0: any, param1: any): any;
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
        export module feature {
          export module video {
            export class i extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope, any, any> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.i>;
              public invokeSuspend(param0: any): any;
              public invoke(param0: any, param1: any): any;
              public create(param0: any, param1: any): any;
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
        export module feature {
          export module video {
            export class j extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope, any, any> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.j>;
              public invokeSuspend(param0: any): any;
              public invoke(param0: any, param1: any): any;
              public create(param0: any, param1: any): any;
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
        export module feature {
          export module video {
            export class k extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope, any, any> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.k>;
              public invokeSuspend(param0: any): any;
              public invoke(param0: any, param1: any): any;
              public create(param0: any, param1: any): any;
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
        export module feature {
          export module video {
            export class l extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope, any, any> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.l>;
              public invokeSuspend(param0: any): any;
              public invoke(param0: any, param1: any): any;
              public create(param0: any, param1: any): any;
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
        export module feature {
          export module video {
            export class m extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope, any, any> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.m>;
              public invokeSuspend(param0: any): any;
              public invoke(param0: any, param1: any): any;
              public create(param0: any, param1: any): any;
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
        export module feature {
          export module video {
            export class n extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope, any, any> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.n>;
              public invokeSuspend(param0: any): any;
              public invoke(param0: any, param1: any): any;
              public create(param0: any, param1: any): any;
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
        export module feature {
          export module visitor {
            export class CustomData {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.visitor.CustomData>;
              public getValue$sdk_clientRelease(): any;
              public getKey$sdk_clientRelease(): string;
              public toInput$sdk_clientRelease(): C.L0;
            }
            export module CustomData {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.visitor.CustomData.Companion>;
                public fromBoolean(param0: string, param1: boolean): com.iadvize.conversation.sdk.feature.visitor.CustomData;
                public fromInt(param0: string, param1: number): com.iadvize.conversation.sdk.feature.visitor.CustomData;
                public fromString(param0: string, param1: string): com.iadvize.conversation.sdk.feature.visitor.CustomData;
                public fromDouble(param0: string, param1: number): com.iadvize.conversation.sdk.feature.visitor.CustomData;
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
        export module feature {
          export module visitor {
            export class VisitorController {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.visitor.VisitorController>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.sdk.feature.visitor.VisitorController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { registerCustomData(param0: java.util.List<com.iadvize.conversation.sdk.feature.visitor.CustomData>, param1: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): void });
              public constructor();
              public registerCustomData(param0: java.util.List<com.iadvize.conversation.sdk.feature.visitor.CustomData>, param1: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): void;
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
        export class g extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.g.a> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.g>;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public name(): string;
          public toString(): string;
          public constructor(param0: string);
          public b(): string;
          public a(): C.V;
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
          public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.g.a>;
        }
        export module g {
          export class a {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.g.a>;
            public constructor(param0: com.iadvize.conversation.sdk.g.b);
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
            public a(): com.iadvize.conversation.sdk.g.b;
          }
          export class b {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.g.b>;
            public a(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
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
        export abstract class h {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.h>;
          public c(): string;
          public d(): string;
          public e(): string;
          public b(): string;
          public a(): string;
          public f(): string;
          public g(): number;
        }
        export module h {
          export class a extends com.iadvize.conversation.sdk.h {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.h.a>;
            public static h: com.iadvize.conversation.sdk.h.a;
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
        export class i extends com.apollographql.apollo3.api.Query<com.iadvize.conversation.sdk.i.a> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.i>;
          public equals(param0: any): boolean;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.i.a>;
          public name(): string;
          public constructor();
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
        }
        export module i {
          export class a {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.i.a>;
            public constructor(param0: com.iadvize.conversation.sdk.i.b);
            public hashCode(): number;
            public equals(param0: any): boolean;
            public a(): com.iadvize.conversation.sdk.i.b;
            public toString(): string;
          }
          export class b {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.i.b>;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: boolean);
            public a(): boolean;
            public toString(): string;
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
        export class j extends com.apollographql.apollo3.api.Query<com.iadvize.conversation.sdk.j.a> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.j>;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public name(): string;
          public toString(): string;
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public a(): number;
          public id(): string;
          public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.j.a>;
          public constructor(param0: number);
        }
        export module j {
          export class a {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.j.a>;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: com.iadvize.conversation.sdk.j.b);
            public a(): com.iadvize.conversation.sdk.j.b;
            public toString(): string;
          }
          export class b {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.j.b>;
            public constructor(param0: com.iadvize.conversation.sdk.j.c);
            public hashCode(): number;
            public equals(param0: any): boolean;
            public a(): com.iadvize.conversation.sdk.j.c;
            public toString(): string;
          }
          export class c {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.j.c>;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: boolean);
            public a(): boolean;
            public toString(): string;
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
        export class k extends com.apollographql.apollo3.api.Query<com.iadvize.conversation.sdk.k.a> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.k>;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public name(): string;
          public toString(): string;
          public constructor(param0: string);
          public a(): string;
          public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.k.a>;
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
        }
        export module k {
          export class a {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.k.a>;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: com.iadvize.conversation.sdk.k.b);
            public a(): com.iadvize.conversation.sdk.k.b;
            public toString(): string;
          }
          export class b {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.k.b>;
            public b(): string;
            public a(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: string, param1: string);
            public toString(): string;
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
        export class l extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.l.a> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.l>;
          public equals(param0: any): boolean;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public name(): string;
          public constructor();
          public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.l.a>;
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
        }
        export module l {
          export class a {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.l.a>;
            public constructor(param0: com.iadvize.conversation.sdk.l.b);
            public hashCode(): number;
            public equals(param0: any): boolean;
            public a(): com.iadvize.conversation.sdk.l.b;
            public toString(): string;
          }
          export class b {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.l.b>;
            public a(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
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
        export class m extends com.apollographql.apollo3.api.Query<com.iadvize.conversation.sdk.m.b> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.m>;
          public equals(param0: any): boolean;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public name(): string;
          public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.m.b>;
          public constructor();
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
        }
        export module m {
          export class a {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.m.a>;
            public constructor(param0: com.iadvize.conversation.sdk.m.c);
            public a(): com.iadvize.conversation.sdk.m.c;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
          }
          export class b {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.m.b>;
            public constructor(param0: com.iadvize.conversation.sdk.m.a);
            public hashCode(): number;
            public equals(param0: any): boolean;
            public a(): com.iadvize.conversation.sdk.m.a;
            public toString(): string;
          }
          export class c {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.m.c>;
            public b(): java.util.UUID;
            public a(): string;
            public c(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: string, param1: java.util.UUID, param2: string);
            public toString(): string;
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
        export class n extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.n.a<any>> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.n>;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public name(): string;
          public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.n.a<any>>;
          public toString(): string;
          public a(): C.k0;
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
          public constructor(param0: C.k0);
        }
        export module n {
          export class a {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.n.a<any>>;
            public a(): com.iadvize.conversation.sdk.n.b;
            public constructor(param0: com.iadvize.conversation.sdk.n.b);
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
          }
          export class b {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.n.b>;
            public a(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
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
        export class o extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.o.a> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.o>;
          public name(): string;
          public c(): string;
          public a(): com.apollographql.apollo3.api.Optional<C.d>;
          public b(): C.V;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public toString(): string;
          public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.o.a>;
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
          public constructor(param0: string, param1: com.apollographql.apollo3.api.Optional);
        }
        export module o {
          export class a {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.o.a>;
            public a(): com.iadvize.conversation.sdk.o.b;
            public constructor(param0: com.iadvize.conversation.sdk.o.b);
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
          }
          export class b {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.o.b>;
            public constructor(param0: string, param1: string, param2: string);
            public a(): string;
            public b(): string;
            public c(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
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
        export class p extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.p.a> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.p>;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public name(): string;
          public toString(): string;
          public constructor(param0: boolean);
          public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.p.a>;
          public a(): boolean;
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
        }
        export module p {
          export class a {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.p.a>;
            public a(): com.iadvize.conversation.sdk.p.b;
            public constructor(param0: com.iadvize.conversation.sdk.p.b);
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
          }
          export class b {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.p.b>;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: boolean);
            public a(): boolean;
            public toString(): string;
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
        export class q extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.q.b> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.q>;
          public name(): string;
          public e(): string;
          public d(): C.n0;
          public c(): number;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public constructor(param0: string, param1: number, param2: java.util.UUID, param3: java.util.ArrayList<any>);
          public a(): java.util.UUID;
          public toString(): string;
          public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.q.b>;
          public b(): java.util.List<C.L0>;
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
        }
        export module q {
          export class a {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.q.a>;
            public d(): com.iadvize.conversation.sdk.q.f;
            public a(): com.iadvize.conversation.sdk.q.c;
            public c(): com.iadvize.conversation.sdk.q.e;
            public e(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: string, param1: com.iadvize.conversation.sdk.q.e, param2: com.iadvize.conversation.sdk.q.f, param3: com.iadvize.conversation.sdk.q.d, param4: com.iadvize.conversation.sdk.q.c);
            public b(): com.iadvize.conversation.sdk.q.d;
            public toString(): string;
          }
          export class b {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.q.b>;
            public constructor(param0: com.iadvize.conversation.sdk.q.g);
            public a(): com.iadvize.conversation.sdk.q.g;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
          }
          export class c {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.q.c>;
            public b(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public a(): boolean;
            public toString(): string;
            public constructor(param0: string, param1: boolean);
          }
          export class d {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.q.d>;
            public constructor(param0: string, param1: number);
            public b(): string;
            public a(): number;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
          }
          export class e {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.q.e>;
            public constructor(param0: string, param1: number);
            public b(): string;
            public a(): number;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
          }
          export class f {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.q.f>;
            public a(): string;
            public b(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: string, param1: string);
            public toString(): string;
          }
          export class g {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.q.g>;
            public c(): java.util.UUID;
            public a(): java.util.UUID;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: java.util.UUID, param1: java.util.UUID, param2: java.util.List<com.iadvize.conversation.sdk.q.a>);
            public b(): java.util.List<com.iadvize.conversation.sdk.q.a>;
            public toString(): string;
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
        export class r extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.r.a> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.r>;
          public name(): string;
          public b(): com.iadvize.conversation.sdk.type.Language;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public toString(): string;
          public c(): java.util.UUID;
          public a(): C.j;
          public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.r.a>;
          public constructor(param0: java.util.UUID, param1: java.util.UUID, param2: com.iadvize.conversation.sdk.type.Language, param3: C.j);
          public d(): java.util.UUID;
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
        }
        export module r {
          export class a {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.r.a>;
            public constructor(param0: com.iadvize.conversation.sdk.r.c);
            public a(): com.iadvize.conversation.sdk.r.c;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
          }
          export class b {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.r.b>;
            public a(): java.util.UUID;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: java.util.UUID);
            public toString(): string;
          }
          export class c {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.r.c>;
            public constructor(param0: com.iadvize.conversation.sdk.r.b);
            public a(): com.iadvize.conversation.sdk.r.b;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
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
        export class s extends com.apollographql.apollo3.api.Query<com.iadvize.conversation.sdk.s.b> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.s>;
          public name(): string;
          public b(): com.iadvize.conversation.sdk.type.Language;
          public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.s.b>;
          public c(): number;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public a(): com.apollographql.apollo3.api.Optional<string>;
          public toString(): string;
          public d(): java.util.UUID;
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
          public constructor(param0: java.util.UUID, param1: com.iadvize.conversation.sdk.type.Language, param2: number, param3: com.apollographql.apollo3.api.Optional<string>);
        }
        export module s {
          export class a {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.s.a>;
            public constructor(param0: com.iadvize.conversation.sdk.s.c, param1: com.iadvize.conversation.sdk.s.d);
            public b(): com.iadvize.conversation.sdk.s.d;
            public a(): com.iadvize.conversation.sdk.s.c;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
          }
          export class b {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.s.b>;
            public constructor(param0: com.iadvize.conversation.sdk.s.a);
            public a(): com.iadvize.conversation.sdk.s.a;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
          }
          export class c {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.s.c>;
            public a(): z.s0;
            public b(): string;
            public constructor(param0: string, param1: z.s0);
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
          }
          export class d {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.s.d>;
            public a(): z.s0;
            public b(): string;
            public constructor(param0: string, param1: z.s0);
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
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
        export class t extends com.apollographql.apollo3.api.Query<com.iadvize.conversation.sdk.t.b> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.t>;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public b(): number;
          public name(): string;
          public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.t.b>;
          public a(): com.apollographql.apollo3.api.Optional<string>;
          public toString(): string;
          public constructor(param0: number, param1: com.apollographql.apollo3.api.Optional<string>);
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
        }
        export module t {
          export class a {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.t.a>;
            public a(): com.iadvize.conversation.sdk.t.c;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: com.iadvize.conversation.sdk.t.c);
            public toString(): string;
          }
          export class b {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.t.b>;
            public a(): com.iadvize.conversation.sdk.t.a;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
            public constructor(param0: com.iadvize.conversation.sdk.t.a);
          }
          export class c {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.t.c>;
            public a(): z.s0;
            public b(): string;
            public constructor(param0: string, param1: z.s0);
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
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
      export module ui {
        export module adapters {
          export class MessageRecyclerViewAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<androidx.recyclerview.widget.RecyclerView.ViewHolder> {
            public static class: java.lang.Class<com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter>;
            public onViewRecycled(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
            public getItem(param0: number): com.iadvize.conversation.ui.models.Message;
            public getItemViewType(param0: number): number;
            public getMessages(): java.util.List<com.iadvize.conversation.ui.models.Message>;
            public getItemCount(): number;
            public onBindViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number): void;
            public constructor(param0: java.util.List<com.iadvize.conversation.ui.models.Message>, param1: number, param2: com.iadvize.conversation.ui.viewholders.MessageListeners, param3: com.iadvize.conversation.ui.models.MessagesConfiguration);
            public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
            public setMessages(param0: java.util.List<any>, param1: boolean): void;
            public setMessages(param0: java.util.List<com.iadvize.conversation.ui.models.Message>): void;
          }
          export module MessageRecyclerViewAdapter {
            export class MessageItemType {
              public static class: java.lang.Class<com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType>;
              public static TEXT: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
              public static MARKDOWN_TEXT: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
              public static PREVIEW_LINK_TEXT: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
              public static PREVIEW_LINK_MARKDOWN_TEXT: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
              public static LINK_SENT: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
              public static IMAGE: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
              public static FILE: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
              public static QUICK_REPLY: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
              public static TRANSLATED: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
              public static GENERIC_CARD: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
              public static GENERIC_CARD_BUNDLE: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
              public static PRODUCT_OFFER: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
              public static PRODUCT_OFFER_BUNDLE: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
              public static SNOOZE: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
              public static TRANSFER: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
              public static TYPING_INDICATOR: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
              public static SYSTEM: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
              public static LOAD_PAST_CONVERSATION: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
              public static VIDEO_ESCALATION: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
              public static values(): androidNative.Array<com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType>;
              public static valueOf(param0: string): com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
            }
            export class a {
              public static class: java.lang.Class<com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.a>;
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
      export module ui {
        export module adapters {
          export class a implements com.iadvize.conversation.ui.views.GenericCardView.a {
            public static class: java.lang.Class<com.iadvize.conversation.ui.adapters.a>;
            public isViewFromObject(param0: globalAndroid.view.View, param1: any): boolean;
            public a(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.MessageKind.Card, param2: com.iadvize.conversation.ui.models.MessageAttachment.Action): void;
            public destroyItem(param0: globalAndroid.view.ViewGroup, param1: number, param2: any): void;
            public constructor(param0: com.iadvize.conversation.ui.models.Message, param1: java.util.List<com.iadvize.conversation.ui.models.MessageKind.Card>, param2: com.iadvize.conversation.ui.viewholders.MessageListeners, param3: G.a, param4: G.e);
            public getCount(): number;
            public instantiateItem(param0: globalAndroid.view.ViewGroup, param1: number): any;
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module ui {
        export module adapters {
          export class b {
            public static class: java.lang.Class<com.iadvize.conversation.ui.adapters.b>;
            public getNewListSize(): number;
            public areItemsTheSame(param0: number, param1: number): boolean;
            public areContentsTheSame(param0: number, param1: number): boolean;
            public constructor(param0: java.util.List<any>, param1: java.util.List<any>);
            public getOldListSize(): number;
            public getChangePayload(param0: number, param1: number): any;
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module ui {
        export module adapters {
          export class c implements com.iadvize.conversation.ui.views.ProductOfferView.a {
            public static class: java.lang.Class<com.iadvize.conversation.ui.adapters.c>;
            public isViewFromObject(param0: globalAndroid.view.View, param1: any): boolean;
            public constructor(param0: com.iadvize.conversation.ui.models.Message, param1: java.util.List<com.iadvize.conversation.ui.models.MessageKind.ProductOffer>, param2: com.iadvize.conversation.ui.viewholders.MessageListeners, param3: G.a, param4: G.e);
            public destroyItem(param0: globalAndroid.view.ViewGroup, param1: number, param2: any): void;
            public getCount(): number;
            public a(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.MessageKind.ProductOffer, param2: com.iadvize.conversation.ui.models.MessageAttachment.Action): void;
            public instantiateItem(param0: globalAndroid.view.ViewGroup, param1: number): any;
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module ui {
        export module models {
          export class Language {
            public static class: java.lang.Class<com.iadvize.conversation.ui.models.Language>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.Language>;
            public component3(): boolean;
            public describeContents(): number;
            public isSelected(): boolean;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public component1(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: string, param1: string, param2: boolean);
            public toString(): string;
            public getDisplayValue(): string;
            public component2(): string;
            public setSelected(param0: boolean): void;
            public copy(param0: string, param1: string, param2: boolean): com.iadvize.conversation.ui.models.Language;
            public getCode(): string;
          }
          export module Language {
            export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.Language> {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.Language.a>;
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
    export module conversation {
      export module ui {
        export module models {
          export class LanguageSettings {
            public static class: java.lang.Class<com.iadvize.conversation.ui.models.LanguageSettings>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.LanguageSettings>;
            public setSourceLanguage(param0: com.iadvize.conversation.ui.models.Language): void;
            public getSourceLanguage(): com.iadvize.conversation.ui.models.Language;
            public describeContents(): number;
            public setTargetLanguage(param0: com.iadvize.conversation.ui.models.Language): void;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public getTargetLanguage(): com.iadvize.conversation.ui.models.Language;
            public getAutomaticTranslation(): boolean;
            public constructor(param0: com.iadvize.conversation.ui.models.Language, param1: com.iadvize.conversation.ui.models.Language, param2: boolean);
            public setAutomaticTranslation(param0: boolean): void;
          }
          export module LanguageSettings {
            export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.LanguageSettings> {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.LanguageSettings.a>;
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
    export module conversation {
      export module ui {
        export module models {
          export class LanguageType {
            public static class: java.lang.Class<com.iadvize.conversation.ui.models.LanguageType>;
            public static SOURCE: com.iadvize.conversation.ui.models.LanguageType;
            public static TARGET: com.iadvize.conversation.ui.models.LanguageType;
            public static values(): androidNative.Array<com.iadvize.conversation.ui.models.LanguageType>;
            public static valueOf(param0: string): com.iadvize.conversation.ui.models.LanguageType;
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module ui {
        export module models {
          export class LoadPastConversationMessage extends com.iadvize.conversation.ui.models.Message {
            public static class: java.lang.Class<com.iadvize.conversation.ui.models.LoadPastConversationMessage>;
            public constructor();
            public constructor(param0: string, param1: com.iadvize.conversation.ui.models.Sender, param2: java.util.Date, param3: com.iadvize.conversation.ui.models.MessageKind, param4: com.iadvize.conversation.ui.models.MessageState, param5: boolean);
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module ui {
        export module models {
          export class Message {
            public static class: java.lang.Class<com.iadvize.conversation.ui.models.Message>;
            public static Companion: com.iadvize.conversation.ui.models.Message.a;
            public isRightAlignment(): boolean;
            public constructor(param0: string, param1: com.iadvize.conversation.ui.models.Sender, param2: java.util.Date, param3: com.iadvize.conversation.ui.models.MessageKind, param4: com.iadvize.conversation.ui.models.MessageState, param5: boolean);
            public getMessageState(): com.iadvize.conversation.ui.models.MessageState;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public isLastMessageOfGroup(param0: com.iadvize.conversation.ui.models.Message): boolean;
            public isLeftAlignment(): boolean;
            public isAloneOnGroup(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message): boolean;
            public isSameDays(param0: com.iadvize.conversation.ui.models.Message): boolean;
            public getVerticalPosition(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message): G.e;
            public getSender(): com.iadvize.conversation.ui.models.Sender;
            public getMessageKind(): com.iadvize.conversation.ui.models.MessageKind;
            public getForceAloneInGroup(): boolean;
            public getId(): string;
            public getSentDate(): java.util.Date;
            public setForceAloneInGroup(param0: boolean): void;
            public isFirstMessageOfGroup(param0: com.iadvize.conversation.ui.models.Message): boolean;
          }
          export module Message {
            export class a {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.Message.a>;
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
      export module ui {
        export module models {
          export abstract class MessageAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment>;
          }
          export module MessageAttachment {
            export abstract class Action {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Action>;
              public constructor();
              public getType(): com.iadvize.conversation.ui.models.MessageAttachment.ActionType;
              public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.ActionType);
            }
            export class ActionType {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.ActionType>;
              public static LINK: com.iadvize.conversation.ui.models.MessageAttachment.ActionType;
              public static SELECT: com.iadvize.conversation.ui.models.MessageAttachment.ActionType;
              public static values(): androidNative.Array<com.iadvize.conversation.ui.models.MessageAttachment.ActionType>;
              public static valueOf(param0: string): com.iadvize.conversation.ui.models.MessageAttachment.ActionType;
            }
            export class Card extends com.iadvize.conversation.ui.models.MessageAttachment {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Card>;
              public static Companion: com.iadvize.conversation.ui.models.MessageAttachment.Card.a;
              public static TYPE_NAME: string;
              public getImage(): com.iadvize.conversation.ui.models.MessageAttachment.CardImage;
              public getText(): string;
              public getActions(): androidNative.Array<com.iadvize.conversation.ui.models.MessageAttachment.Action>;
              public getTitle(): string;
              public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.CardImage, param1: string, param2: string, param3: androidNative.Array<com.iadvize.conversation.ui.models.MessageAttachment.Action>);
            }
            export module Card {
              export class a {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Card.a>;
              }
            }
            export class CardBundle extends com.iadvize.conversation.ui.models.MessageAttachment {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.CardBundle>;
              public static Companion: com.iadvize.conversation.ui.models.MessageAttachment.CardBundle.a;
              public static TYPE_NAME: string;
              public getTitle(): string;
              public getCards(): java.util.List<com.iadvize.conversation.ui.models.MessageAttachment.Card>;
              public getActionType(): com.iadvize.conversation.ui.models.MessageAttachment.ActionType;
              public constructor(param0: string, param1: java.util.List<com.iadvize.conversation.ui.models.MessageAttachment.Card>, param2: com.iadvize.conversation.ui.models.MessageAttachment.ActionType);
            }
            export module CardBundle {
              export class a {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.CardBundle.a>;
              }
            }
            export class CardImage {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.CardImage>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageAttachment.CardImage>;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public getUrl(): string;
              public constructor(param0: string, param1: string);
              public describeContents(): number;
              public getDescription(): string;
            }
            export module CardImage {
              export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageAttachment.CardImage> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.CardImage.a>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Companion>;
              public parseFromXMPP(param0: string): com.iadvize.conversation.ui.models.MessageAttachment;
            }
            export abstract class Escalation extends com.iadvize.conversation.ui.models.MessageAttachment {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Escalation>;
              public getType(): com.iadvize.conversation.ui.models.MessageAttachment.Escalation.EscalationType;
              public getCorrelationId(): string;
            }
            export module Escalation {
              export class Accept extends com.iadvize.conversation.ui.models.MessageAttachment.Escalation {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Escalation.Accept>;
                public static Companion: com.iadvize.conversation.ui.models.MessageAttachment.Escalation.Accept.a;
                public static TYPE_NAME: string;
                public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.Escalation.EscalationType, param1: string);
              }
              export module Accept {
                export class a {
                  public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Escalation.Accept.a>;
                }
              }
              export class Ended extends com.iadvize.conversation.ui.models.MessageAttachment.Escalation {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Escalation.Ended>;
                public static Companion: com.iadvize.conversation.ui.models.MessageAttachment.Escalation.Ended.a;
                public static TYPE_NAME: string;
                public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.Escalation.EscalationType, param1: string, param2: string);
                public getReason(): string;
              }
              export module Ended {
                export class a {
                  public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Escalation.Ended.a>;
                }
              }
              export class EscalationType {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Escalation.EscalationType>;
                public static Companion: com.iadvize.conversation.ui.models.MessageAttachment.Escalation.EscalationType.a;
                public static VOICE: com.iadvize.conversation.ui.models.MessageAttachment.Escalation.EscalationType;
                public static VIDEO: com.iadvize.conversation.ui.models.MessageAttachment.Escalation.EscalationType;
                public static valueOf(param0: string): com.iadvize.conversation.ui.models.MessageAttachment.Escalation.EscalationType;
                public static values(): androidNative.Array<com.iadvize.conversation.ui.models.MessageAttachment.Escalation.EscalationType>;
              }
              export module EscalationType {
                export class a {
                  public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Escalation.EscalationType.a>;
                  public static a(param0: string): com.iadvize.conversation.ui.models.MessageAttachment.Escalation.EscalationType;
                }
              }
              export class Invitation extends com.iadvize.conversation.ui.models.MessageAttachment.Escalation {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Escalation.Invitation>;
                public static Companion: com.iadvize.conversation.ui.models.MessageAttachment.Escalation.Invitation.a<any>;
                public static TYPE_NAME: string;
                public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.Escalation.EscalationType, param1: string);
              }
              export module Invitation {
                export class a {
                  public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Escalation.Invitation.a<any>>;
                }
              }
            }
            export class File extends com.iadvize.conversation.ui.models.MessageAttachment {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.File>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageAttachment.File>;
              public static TYPE_NAME: string;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public getMimeType(): string;
              public getUrl(): string;
              public describeContents(): number;
              public constructor(param0: string, param1: string, param2: string);
              public getFileName(): string;
              public toImage(): com.iadvize.conversation.ui.models.MessageAttachment.Image;
              public isImage(): boolean;
            }
            export module File {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.File.Companion>;
                public parseFromXMPP(param0: org.json.JSONObject): com.iadvize.conversation.ui.models.MessageAttachment.File;
              }
              export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageAttachment.File> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.File.a>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class Image extends com.iadvize.conversation.ui.models.MessageAttachment {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Image>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageAttachment.Image>;
              public static TYPE_NAME: string;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public getMimeType(): string;
              public getUrl(): string;
              public describeContents(): number;
              public constructor(param0: string, param1: string, param2: string);
              public getFileName(): string;
            }
            export module Image {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Image.Companion>;
                public parseFromXMPP(param0: org.json.JSONObject): com.iadvize.conversation.ui.models.MessageAttachment.Image;
              }
              export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageAttachment.Image> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Image.a>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class Link extends com.iadvize.conversation.ui.models.MessageAttachment {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Link>;
              public static Companion: com.iadvize.conversation.ui.models.MessageAttachment.Link.a;
              public static TYPE_NAME: string;
              public getUrl(): string;
              public constructor(param0: string, param1: string);
              public getName(): string;
            }
            export module Link {
              export class a {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Link.a>;
              }
            }
            export class LinkAction extends com.iadvize.conversation.ui.models.MessageAttachment.Action {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.LinkAction>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageAttachment.LinkAction>;
              public constructor();
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.ActionType);
              public getUrl(): string;
              public constructor(param0: string, param1: string);
              public describeContents(): number;
              public getTitle(): string;
            }
            export module LinkAction {
              export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageAttachment.LinkAction> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.LinkAction.a<any>>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class Offer extends com.iadvize.conversation.ui.models.MessageAttachment {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Offer>;
              public static Companion: com.iadvize.conversation.ui.models.MessageAttachment.Offer.a;
              public static TYPE_NAME: string;
              public getUrl(): string;
              public constructor(param0: string, param1: string);
              public getDescription(): string;
            }
            export module Offer {
              export class a {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Offer.a>;
              }
            }
            export class Product extends com.iadvize.conversation.ui.models.MessageAttachment {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Product>;
              public static Companion: com.iadvize.conversation.ui.models.MessageAttachment.Product.a;
              public static TYPE_NAME: string;
              public getProductUrl(): string;
              public constructor(param0: string, param1: string);
              public getTitle(): string;
            }
            export module Product {
              export class a {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Product.a>;
              }
            }
            export class ProductOffer extends com.iadvize.conversation.ui.models.MessageAttachment {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer>;
              public static Companion: com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.a;
              public static TYPE_NAME: string;
              public getImage(): com.iadvize.conversation.ui.models.MessageAttachment.CardImage;
              public getAvailability(): com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.Availability;
              public getActions(): androidNative.Array<com.iadvize.conversation.ui.models.MessageAttachment.Action>;
              public getPrice(): string;
              public getName(): string;
              public getOfferPrice(): string;
              public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.CardImage, param1: string, param2: string, param3: string, param4: com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.Availability, param5: string, param6: androidNative.Array<com.iadvize.conversation.ui.models.MessageAttachment.Action>);
              public getDescription(): string;
            }
            export module ProductOffer {
              export class Availability {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.Availability>;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.Availability>;
                public describeContents(): number;
                public getStatus(): com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.AvailabilityStatus;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.AvailabilityStatus);
              }
              export module Availability {
                export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.Availability> {
                  public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.Availability.a>;
                  public newArray(param0: number): androidNative.Array<any>;
                  public constructor();
                  public createFromParcel(param0: globalAndroid.os.Parcel): any;
                }
              }
              export class AvailabilityStatus {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.AvailabilityStatus>;
                public static AVAILABLE: com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.AvailabilityStatus;
                public static UNAVAILABLE: com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.AvailabilityStatus;
                public static valueOf(param0: string): com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.AvailabilityStatus;
                public static values(): androidNative.Array<com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.AvailabilityStatus>;
              }
              export class a {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.a>;
              }
            }
            export class ProductOfferBundle extends com.iadvize.conversation.ui.models.MessageAttachment {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.ProductOfferBundle>;
              public static Companion: com.iadvize.conversation.ui.models.MessageAttachment.ProductOfferBundle.a;
              public static TYPE_NAME: string;
              public constructor(param0: java.util.List<com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer>);
              public getProductOffers(): java.util.List<com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer>;
            }
            export module ProductOfferBundle {
              export class a {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.ProductOfferBundle.a>;
              }
            }
            export class QuickReplyMenu extends com.iadvize.conversation.ui.models.MessageAttachment {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.QuickReplyMenu>;
              public static Companion: com.iadvize.conversation.ui.models.MessageAttachment.QuickReplyMenu.a;
              public static TYPE_NAME: string;
              public constructor(param0: string, param1: androidNative.Array<string>);
              public getMessage(): string;
              public getChoices(): androidNative.Array<string>;
            }
            export module QuickReplyMenu {
              export class a {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.QuickReplyMenu.a>;
              }
            }
            export class SelectAction extends com.iadvize.conversation.ui.models.MessageAttachment.Action {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.SelectAction>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageAttachment.SelectAction>;
              public constructor();
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.ActionType);
              public constructor(param0: string);
              public describeContents(): number;
              public getTitle(): string;
            }
            export module SelectAction {
              export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageAttachment.SelectAction> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.SelectAction.a<any>>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class Unsupported extends com.iadvize.conversation.ui.models.MessageAttachment {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Unsupported>;
              public constructor();
            }
            export abstract class Video extends com.iadvize.conversation.ui.models.MessageAttachment {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Video>;
              public getCorrelationId(): string;
            }
            export module Video {
              export class HungUp extends com.iadvize.conversation.ui.models.MessageAttachment.Video {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Video.HungUp>;
                public static Companion: com.iadvize.conversation.ui.models.MessageAttachment.Video.HungUp.a;
                public static TYPE_NAME: string;
                public constructor(param0: string);
              }
              export module HungUp {
                export class a {
                  public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Video.HungUp.a>;
                }
              }
              export class PickedUp extends com.iadvize.conversation.ui.models.MessageAttachment.Video {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Video.PickedUp>;
                public static Companion: com.iadvize.conversation.ui.models.MessageAttachment.Video.PickedUp.a;
                public static TYPE_NAME: string;
                public constructor(param0: string);
              }
              export module PickedUp {
                export class a {
                  public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Video.PickedUp.a>;
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
      export module ui {
        export module models {
          export abstract class MessageKind {
            public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind>;
          }
          export module MessageKind {
            export class Card extends com.iadvize.conversation.ui.models.MessageKind {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.Card>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.Card>;
              public getImage(): com.iadvize.conversation.ui.models.MessageAttachment.CardImage;
              public getText(): string;
              public getActions(): androidNative.Array<com.iadvize.conversation.ui.models.MessageAttachment.Action>;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public describeContents(): number;
              public getTitle(): string;
              public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.CardImage, param1: string, param2: string, param3: androidNative.Array<com.iadvize.conversation.ui.models.MessageAttachment.Action>);
            }
            export module Card {
              export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.Card> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.Card.a>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class CardBundle extends com.iadvize.conversation.ui.models.MessageKind {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.CardBundle>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.CardBundle>;
              public constructor(param0: string, param1: java.util.List<com.iadvize.conversation.ui.models.MessageKind.Card>, param2: com.iadvize.conversation.ui.models.MessageAttachment.ActionType);
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public describeContents(): number;
              public getTitle(): string;
              public getCards(): java.util.List<com.iadvize.conversation.ui.models.MessageKind.Card>;
              public getActionType(): com.iadvize.conversation.ui.models.MessageAttachment.ActionType;
            }
            export module CardBundle {
              export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.CardBundle> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.CardBundle.a>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class FileMessage extends com.iadvize.conversation.ui.models.MessageKind {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.FileMessage>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.FileMessage>;
              public getFile(): com.iadvize.conversation.ui.models.MessageAttachment.File;
              public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.File);
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public describeContents(): number;
            }
            export module FileMessage {
              export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.FileMessage> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.FileMessage.a>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class ImageMessage extends com.iadvize.conversation.ui.models.MessageKind {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.ImageMessage>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.ImageMessage>;
              public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.File);
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public describeContents(): number;
              public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.Image);
              public getImage(): com.iadvize.conversation.ui.models.MessageAttachment.Image;
            }
            export module ImageMessage {
              export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.ImageMessage> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.ImageMessage.a>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class LinkSent extends com.iadvize.conversation.ui.models.MessageKind {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.LinkSent>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.LinkSent>;
              public getText(): string;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public constructor(param0: string, param1: string);
              public describeContents(): number;
              public getLink(): string;
            }
            export module LinkSent {
              export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.LinkSent> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.LinkSent.a>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class LoadPastConversation extends com.iadvize.conversation.ui.models.MessageKind {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.LoadPastConversation>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.LoadPastConversation>;
              public constructor();
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public describeContents(): number;
            }
            export module LoadPastConversation {
              export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.LoadPastConversation> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.LoadPastConversation.a<any>>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class MarkdownText extends com.iadvize.conversation.ui.models.MessageKind {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.MarkdownText>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.MarkdownText>;
              public getContent(): string;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public constructor(param0: string);
              public describeContents(): number;
            }
            export module MarkdownText {
              export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.MarkdownText> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.MarkdownText.a>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class ProductOffer extends com.iadvize.conversation.ui.models.MessageKind {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.ProductOffer>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.ProductOffer>;
              public getImage(): com.iadvize.conversation.ui.models.MessageAttachment.CardImage;
              public getAvailability(): com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.Availability;
              public getActions(): androidNative.Array<com.iadvize.conversation.ui.models.MessageAttachment.Action>;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public getPrice(): string;
              public getName(): string;
              public describeContents(): number;
              public getOfferPrice(): string;
              public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.CardImage, param1: string, param2: string, param3: string, param4: com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.Availability, param5: string, param6: androidNative.Array<com.iadvize.conversation.ui.models.MessageAttachment.Action>);
              public getDescription(): string;
            }
            export module ProductOffer {
              export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.ProductOffer> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.ProductOffer.a>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class ProductOfferBundle extends com.iadvize.conversation.ui.models.MessageKind {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.ProductOfferBundle>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.ProductOfferBundle>;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public describeContents(): number;
              public getProductOffers(): java.util.List<com.iadvize.conversation.ui.models.MessageKind.ProductOffer>;
              public constructor(param0: java.util.List<com.iadvize.conversation.ui.models.MessageKind.ProductOffer>);
            }
            export module ProductOfferBundle {
              export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.ProductOfferBundle> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.ProductOfferBundle.a>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class QuickReplyMessage extends com.iadvize.conversation.ui.models.MessageKind {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.QuickReplyMessage>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.QuickReplyMessage>;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public constructor(param0: string, param1: androidNative.Array<string>);
              public describeContents(): number;
              public getMessage(): string;
              public getChoices(): androidNative.Array<string>;
            }
            export module QuickReplyMessage {
              export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.QuickReplyMessage> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.QuickReplyMessage.a>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class SnoozeMessage extends com.iadvize.conversation.ui.models.MessageKind {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.SnoozeMessage>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.SnoozeMessage>;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public constructor(param0: string);
              public describeContents(): number;
              public getFromName(): string;
            }
            export module SnoozeMessage {
              export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.SnoozeMessage> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.SnoozeMessage.a>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class SystemMessage extends com.iadvize.conversation.ui.models.MessageKind {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.SystemMessage>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.SystemMessage>;
              public getContent(): string;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public constructor(param0: string);
              public describeContents(): number;
            }
            export module SystemMessage {
              export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.SystemMessage> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.SystemMessage.a>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class Text extends com.iadvize.conversation.ui.models.MessageKind {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.Text>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.Text>;
              public getContent(): string;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public constructor(param0: string);
              public describeContents(): number;
            }
            export module Text {
              export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.Text> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.Text.a>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class TransferMessage extends com.iadvize.conversation.ui.models.MessageKind {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.TransferMessage>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.TransferMessage>;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public constructor(param0: string, param1: string);
              public describeContents(): number;
              public getFromName(): string;
              public getReason(): string;
            }
            export module TransferMessage {
              export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.TransferMessage> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.TransferMessage.a>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class TranslatedMessage extends com.iadvize.conversation.ui.models.MessageKind {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.TranslatedMessage>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.TranslatedMessage>;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public getTranslation(): com.iadvize.conversation.ui.models.Translation;
              public describeContents(): number;
              public constructor(param0: com.iadvize.conversation.ui.models.Translation);
            }
            export module TranslatedMessage {
              export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.TranslatedMessage> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.TranslatedMessage.a>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class TypingIndicatorMessage extends com.iadvize.conversation.ui.models.MessageKind {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.TypingIndicatorMessage>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.TypingIndicatorMessage>;
              public constructor(param0: string, param1: boolean);
              public isComposing(): boolean;
              public getContent(): string;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public describeContents(): number;
            }
            export module TypingIndicatorMessage {
              export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.TypingIndicatorMessage> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.TypingIndicatorMessage.a>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class VideoEscalation extends com.iadvize.conversation.ui.models.MessageKind {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.VideoEscalation>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.VideoEscalation>;
              public getText(): string;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public constructor(param0: string, param1: string, param2: boolean);
              public describeContents(): number;
              public getWithOptions(): boolean;
              public getCorrelationId(): string;
            }
            export module VideoEscalation {
              export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.VideoEscalation> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.VideoEscalation.a<any>>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
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
      export module ui {
        export module models {
          export class MessageState {
            public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageState>;
            public static SENDING: com.iadvize.conversation.ui.models.MessageState;
            public static RECEIVED: com.iadvize.conversation.ui.models.MessageState;
            public static FAILURE: com.iadvize.conversation.ui.models.MessageState;
            public static values(): androidNative.Array<com.iadvize.conversation.ui.models.MessageState>;
            public static valueOf(param0: string): com.iadvize.conversation.ui.models.MessageState;
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module ui {
        export module models {
          export class MessagesConfiguration {
            public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessagesConfiguration>;
            public getMySenderId(): string;
            public constructor(param0: string, param1: globalAndroid.graphics.Typeface, param2: java.lang.Integer);
            public getTypeface(): globalAndroid.graphics.Typeface;
            public getRightMessageBackgroundColor(): java.lang.Integer;
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module ui {
        export module models {
          export class PreviewLink extends com.iadvize.conversation.ui.models.PreviewLinkResult {
            public static class: java.lang.Class<com.iadvize.conversation.ui.models.PreviewLink>;
            public component3(): string;
            public copy(param0: string, param1: string, param2: string, param3: string): com.iadvize.conversation.ui.models.PreviewLink;
            public component1(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public getUrl(): string;
            public toString(): string;
            public getTitle(): string;
            public constructor(param0: string, param1: string, param2: string, param3: string);
            public component4(): string;
            public component2(): string;
            public getDescription(): string;
            public getImageUrl(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module ui {
        export module models {
          export class PreviewLinkError extends com.iadvize.conversation.ui.models.PreviewLinkResult {
            public static class: java.lang.Class<com.iadvize.conversation.ui.models.PreviewLinkError>;
            public getError(): java.io.IOException;
            public component2(): string;
            public constructor(param0: string, param1: string, param2: java.io.IOException);
            public component3(): java.io.IOException;
            public copy(param0: string, param1: string, param2: java.io.IOException): com.iadvize.conversation.ui.models.PreviewLinkError;
            public component1(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public getUrl(): string;
            public toString(): string;
            public getTitle(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module ui {
        export module models {
          export abstract class PreviewLinkResult {
            public static class: java.lang.Class<com.iadvize.conversation.ui.models.PreviewLinkResult>;
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module ui {
        export module models {
          export class Sender {
            public static class: java.lang.Class<com.iadvize.conversation.ui.models.Sender>;
            public getDisplayName(): string;
            public getAlignment(): com.iadvize.conversation.ui.models.SenderAlignment;
            public constructor(param0: string, param1: string, param2: com.iadvize.conversation.ui.models.SenderAvatar, param3: com.iadvize.conversation.ui.models.SenderAlignment);
            public getId(): string;
            public getAvatar(): com.iadvize.conversation.ui.models.SenderAvatar;
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module ui {
        export module models {
          export class SenderAlignment {
            public static class: java.lang.Class<com.iadvize.conversation.ui.models.SenderAlignment>;
            public static LEFT: com.iadvize.conversation.ui.models.SenderAlignment;
            public static RIGHT: com.iadvize.conversation.ui.models.SenderAlignment;
            public static values(): androidNative.Array<com.iadvize.conversation.ui.models.SenderAlignment>;
            public static valueOf(param0: string): com.iadvize.conversation.ui.models.SenderAlignment;
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module ui {
        export module models {
          export abstract class SenderAvatar {
            public static class: java.lang.Class<com.iadvize.conversation.ui.models.SenderAvatar>;
            public isPresent(): java.lang.Boolean;
            public getChannelIcon(): globalAndroid.graphics.drawable.Drawable;
          }
          export module SenderAvatar {
            export class Image extends com.iadvize.conversation.ui.models.SenderAvatar {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.SenderAvatar.Image>;
              public getValue(): globalAndroid.graphics.drawable.Drawable;
              public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Boolean, param2: globalAndroid.graphics.drawable.Drawable);
            }
            export class Url extends com.iadvize.conversation.ui.models.SenderAvatar {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.SenderAvatar.Url>;
              public constructor(param0: java.net.URL, param1: java.lang.Boolean, param2: globalAndroid.graphics.drawable.Drawable);
              public getValue(): java.net.URL;
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
      export module ui {
        export module models {
          export class Translation {
            public static class: java.lang.Class<com.iadvize.conversation.ui.models.Translation>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.Translation>;
            public describeContents(): number;
            public component3(): com.iadvize.conversation.ui.models.Language;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public getTargetLanguage(): com.iadvize.conversation.ui.models.Language;
            public component1(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: string, param1: string, param2: com.iadvize.conversation.ui.models.Language, param3: com.iadvize.conversation.ui.models.Language);
            public component4(): com.iadvize.conversation.ui.models.Language;
            public getTranslatedText(): string;
            public toString(): string;
            public copy(param0: string, param1: string, param2: com.iadvize.conversation.ui.models.Language, param3: com.iadvize.conversation.ui.models.Language): com.iadvize.conversation.ui.models.Translation;
            public getOriginalText(): string;
            public getSourceLanguage(): com.iadvize.conversation.ui.models.Language;
            public component2(): string;
          }
          export module Translation {
            export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.Translation> {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.Translation.a<any>>;
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
    export module conversation {
      export module ui {
        export module viewholders {
          export class MessageListeners {
            public static class: java.lang.Class<com.iadvize.conversation.ui.viewholders.MessageListeners>;
            /**
             * Constructs a new instance of the com.iadvize.conversation.ui.viewholders.MessageListeners interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onMessageLongClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message): void;
              onMessageClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message): void;
              onMessageAvatarClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message): void;
              onMessageQuickReplyChoiceClicked(param0: com.iadvize.conversation.ui.models.Message, param1: string): void;
              onCardActionClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.MessageKind.Card, param3: com.iadvize.conversation.ui.models.MessageAttachment.Action): void;
              onProductOfferActionClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.MessageKind.ProductOffer, param3: com.iadvize.conversation.ui.models.MessageAttachment.Action): void;
              onMessagePreviewLinkClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message, param2: string): void;
              onMessageLinkClicked(param0: com.iadvize.conversation.ui.models.Message, param1: globalAndroid.net.Uri): void;
              onLoadPastConversationClicked(param0: com.iadvize.conversation.ui.models.Message): void;
              onVideoEscalationClicked(param0: com.iadvize.conversation.ui.models.Message, param1: string, param2: boolean): void;
            });
            public constructor();
            public onMessagePreviewLinkClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message, param2: string): void;
            public onMessageClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message): void;
            public onMessageQuickReplyChoiceClicked(param0: com.iadvize.conversation.ui.models.Message, param1: string): void;
            public onMessageAvatarClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message): void;
            public onProductOfferActionClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.MessageKind.ProductOffer, param3: com.iadvize.conversation.ui.models.MessageAttachment.Action): void;
            public onMessageLinkClicked(param0: com.iadvize.conversation.ui.models.Message, param1: globalAndroid.net.Uri): void;
            public onMessageLongClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message): void;
            public onCardActionClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.MessageKind.Card, param3: com.iadvize.conversation.ui.models.MessageAttachment.Action): void;
            public onLoadPastConversationClicked(param0: com.iadvize.conversation.ui.models.Message): void;
            public onVideoEscalationClicked(param0: com.iadvize.conversation.ui.models.Message, param1: string, param2: boolean): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module ui {
        export module views {
          export class ComposeView {
            public static class: java.lang.Class<com.iadvize.conversation.ui.views.ComposeView>;
            public static Companion: com.iadvize.conversation.ui.views.ComposeView.a;
            public setSendButtonEnabled(param0: boolean): void;
            public constructor(param0: globalAndroid.content.Context);
            public setTranslationActivated(param0: boolean): void;
            public setImageButtonClickListener(param0: com.iadvize.conversation.ui.views.ComposeView.ImageButtonClickListener): void;
            public onAttachedToWindow(): void;
            public setTypeFace(param0: globalAndroid.graphics.Typeface): void;
            public setSendButtonColor(param0: number): void;
            public setTextFocusChangedListener(param0: com.iadvize.conversation.ui.views.ComposeView.TextFocusChangedListener): void;
            public setFileButtonClickListener(param0: com.iadvize.conversation.ui.views.ComposeView.FileButtonClickListener): void;
            public getText(): string;
            public isTranslationActivated(): boolean;
            public hasTextFocus(): boolean;
            public setTextChangedListener(param0: com.iadvize.conversation.ui.views.ComposeView.TextChangedListener): void;
            public setSendButtonClickListener(param0: com.iadvize.conversation.ui.views.ComposeView.SendButtonClickListener): void;
            public dispatchSaveInstanceState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
            public getTextChangedListener(): com.iadvize.conversation.ui.views.ComposeView.TextChangedListener;
            public setFileButtonVisible(param0: boolean): void;
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
            public getSendButtonClickListener(): com.iadvize.conversation.ui.views.ComposeView.SendButtonClickListener;
            public isImageButtonVisible(): boolean;
            public getTranslateButtonClickListener(): com.iadvize.conversation.ui.views.ComposeView.TranslateButtonClickListener;
            public dispatchRestoreInstanceState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
            public onDetachedFromWindow(): void;
            public clearText(): void;
            public getFileButtonClickListener(): com.iadvize.conversation.ui.views.ComposeView.FileButtonClickListener;
            public getTextFocusChangedListener(): com.iadvize.conversation.ui.views.ComposeView.TextFocusChangedListener;
            public getImageButtonClickListener(): com.iadvize.conversation.ui.views.ComposeView.ImageButtonClickListener;
            public isSendButtonEnabled(): boolean;
            public setSelection(param0: number): void;
            public setTranslateButtonClickListener(param0: com.iadvize.conversation.ui.views.ComposeView.TranslateButtonClickListener): void;
            public setText(param0: string): void;
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
            public onSaveInstanceState(): globalAndroid.os.Parcelable;
            public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
            public setImageButtonVisible(param0: boolean): void;
            public isFileButtonVisible(): boolean;
          }
          export module ComposeView {
            export class FileButtonClickListener {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.ComposeView.FileButtonClickListener>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.ui.views.ComposeView$FileButtonClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onFileButtonClicked(): void });
              public constructor();
              public onFileButtonClicked(): void;
            }
            export class ImageButtonClickListener {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.ComposeView.ImageButtonClickListener>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.ui.views.ComposeView$ImageButtonClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onImageButtonClicked(): void });
              public constructor();
              public onImageButtonClicked(): void;
            }
            export class SendButtonClickListener {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.ComposeView.SendButtonClickListener>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.ui.views.ComposeView$SendButtonClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onSendButtonClicked(param0: string): void });
              public constructor();
              public onSendButtonClicked(param0: string): void;
            }
            export class TextChangedListener {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.ComposeView.TextChangedListener>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.ui.views.ComposeView$TextChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onTextChanged(param0: string): void });
              public constructor();
              public onTextChanged(param0: string): void;
            }
            export class TextFocusChangedListener {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.ComposeView.TextFocusChangedListener>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.ui.views.ComposeView$TextFocusChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onTextFocusChanged(param0: boolean): void });
              public constructor();
              public onTextFocusChanged(param0: boolean): void;
            }
            export class TranslateButtonClickListener {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.ComposeView.TranslateButtonClickListener>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.ui.views.ComposeView$TranslateButtonClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onTranslateButtonClicked(param0: string): void });
              public constructor();
              public onTranslateButtonClicked(param0: string): void;
            }
            export class a {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.ComposeView.a>;
            }
            export class b {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.ComposeView.b>;
              public afterTextChanged(param0: globalAndroid.text.Editable): void;
              public constructor(param0: com.iadvize.conversation.ui.views.ComposeView);
              public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
              public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
            }
            export class c {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.ComposeView.c>;
              public onTransitionEnd(param0: androidx.transition.Transition): void;
              public onTransitionCancel(param0: androidx.transition.Transition): void;
              public onTransitionStart(param0: androidx.transition.Transition): void;
              public onTransitionPause(param0: androidx.transition.Transition): void;
              public onTransitionResume(param0: androidx.transition.Transition): void;
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
      export module ui {
        export module views {
          export class GenericCardView {
            public static class: java.lang.Class<com.iadvize.conversation.ui.views.GenericCardView>;
            public constructor(param0: globalAndroid.content.Context);
            public a(param0: G.a, param1: G.e, param2: G.e): void;
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
            public a(param0: com.iadvize.conversation.ui.models.MessageKind.Card): void;
            public a(param0: com.iadvize.conversation.ui.views.GenericCardView.a): void;
          }
          export module GenericCardView {
            export class a {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.GenericCardView.a>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.ui.views.GenericCardView$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { a(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.MessageKind.Card, param2: com.iadvize.conversation.ui.models.MessageAttachment.Action): void });
              public constructor();
              public a(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.MessageKind.Card, param2: com.iadvize.conversation.ui.models.MessageAttachment.Action): void;
            }
            export class b {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.GenericCardView.b>;
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
      export module ui {
        export module views {
          export class ProductOfferView {
            public static class: java.lang.Class<com.iadvize.conversation.ui.views.ProductOfferView>;
            public constructor(param0: globalAndroid.content.Context);
            public a(param0: G.a, param1: G.e, param2: G.e): void;
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
            public a(param0: com.iadvize.conversation.ui.views.ProductOfferView.a): void;
            public a(param0: com.iadvize.conversation.ui.models.MessageKind.ProductOffer): void;
          }
          export module ProductOfferView {
            export class a {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.ProductOfferView.a>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.ui.views.ProductOfferView$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { a(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.MessageKind.ProductOffer, param2: com.iadvize.conversation.ui.models.MessageAttachment.Action): void });
              public constructor();
              public a(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.MessageKind.ProductOffer, param2: com.iadvize.conversation.ui.models.MessageAttachment.Action): void;
            }
            export class b {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.ProductOfferView.b>;
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
      export module ui {
        export module views {
          export class TypewriterView {
            public static class: java.lang.Class<com.iadvize.conversation.ui.views.TypewriterView>;
            public a(param0: string): void;
            public a(): void;
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          }
          export module TypewriterView {
            export abstract class a {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.TypewriterView.a>;
              public a(): void;
              public constructor(param0: java.lang.Runnable);
              public c(): void;
              public d(): boolean;
              public b(): void;
            }
            export class b extends com.iadvize.conversation.ui.views.TypewriterView.a {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.TypewriterView.b>;
              public constructor(param0: com.iadvize.conversation.ui.views.TypewriterView, param1: string, param2: java.lang.Runnable);
              public constructor(param0: java.lang.Runnable);
              public run(): void;
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
      export module ui {
        export module views {
          export class WaitingDotsView {
            public static class: java.lang.Class<com.iadvize.conversation.ui.views.WaitingDotsView>;
            public constructor(param0: globalAndroid.content.Context);
            public c(): void;
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
            public a(): boolean;
            public b(): void;
          }
          export module WaitingDotsView {
            export class a {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.WaitingDotsView.a>;
              public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
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
      export module ui {
        export module views {
          export class WrapContentViewPager {
            public static class: java.lang.Class<com.iadvize.conversation.ui.views.WrapContentViewPager>;
            public constructor(param0: globalAndroid.content.Context);
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
            public onMeasure(param0: number, param1: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module ui {
        export module views {
          export module previewlink {
            export class PreviewLinkView implements I.a.a {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.previewlink.PreviewLinkView>;
              public a(param0: com.iadvize.conversation.ui.models.PreviewLinkResult): void;
              public a(param0: number): void;
              public onDetachedFromWindow(): void;
              public a(param0: string, param1: string): void;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
              public static a(param0: com.iadvize.conversation.ui.views.previewlink.PreviewLinkView, param1: G.a, param2: G.e): void;
              public constructor(param0: globalAndroid.content.Context);
            }
          }
        }
      }
    }
  }
}

//Generics information:
//com.iadvize.conversation.sdk.feature.chatbox.ChatboxActivity.c.a.a:1
//com.iadvize.conversation.sdk.feature.chatbox.ChatboxActivity.c.b:1
//com.iadvize.conversation.sdk.feature.chatbox.attachment.ImageAttachmentViewerActivity.b.a.a:1
//com.iadvize.conversation.sdk.feature.chatbox.attachment.ImageAttachmentViewerActivity.b.b:1
//com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService.b.a.a:1
//com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService.b.b:1
//com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService.c.a.a:1
//com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService.c.b:1
//com.iadvize.conversation.sdk.feature.video.VideoService.b.a.a:1
//com.iadvize.conversation.sdk.feature.video.VideoService.b.b:1
//com.iadvize.conversation.sdk.feature.video.VideoService.c.a.a:1
//com.iadvize.conversation.sdk.feature.video.VideoService.c.b:1
//com.iadvize.conversation.sdk.feature.video.b.a.a:1
//com.iadvize.conversation.sdk.feature.video.b.b:1
//com.iadvize.conversation.sdk.feature.video.c.a.a:1
//com.iadvize.conversation.sdk.feature.video.c.b:1
//com.iadvize.conversation.sdk.feature.video.d.a.a:1
//com.iadvize.conversation.sdk.feature.video.d.b:1
