declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class AnalyticsBridge implements com.medallia.digital.mobilesdk.z7 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.AnalyticsBridge>;
          public reportMedalliaCrashEventImmediate(param0: string, param1: number, param2: string, param3: java.lang.Long): boolean;
          public reportShowFormEvent(param0: string, param1: com.medallia.digital.mobilesdk.FormViewType, param2: boolean): void;
          public reportEnableInterceptEvent(): void;
          public reportResourcesSizeEvent(): void;
          public reportTargetEvaluatorEvent(param0: number, param1: number, param2: string, param3: com.medallia.digital.mobilesdk.n2.a, param4: string, param5: string): void;
          public reportCustomInterceptDeferredEvent(param0: string): void;
          public addObserverToAnalyticsItems(param0: java.util.Observer): void;
          public setTreResourceReady(param0: boolean): void;
          public reportInternalErrorEvent(param0: number, param1: string): void;
          public reportInvitationDeclinedEvent(param0: string, param1: string, param2: com.medallia.digital.mobilesdk.i3): void;
          public reportInvitationDeferredEvent(param0: string, param1: string, param2: com.medallia.digital.mobilesdk.i3): void;
          public reportHandleNotificationEvent(param0: string, param1: com.medallia.digital.mobilesdk.FormViewType, param2: boolean, param3: com.medallia.digital.mobilesdk.AnalyticsBridge.c, param4: com.medallia.digital.mobilesdk.MDExternalError): void;
          public initAnalytics(param0: boolean, param1: boolean, param2: com.medallia.digital.mobilesdk.h, param3: java.util.HashMap<string, any>): void;
          public reportPromptDeferredEvent(param0: string, param1: string, param2: com.medallia.digital.mobilesdk.i3): void;
          public reportMediaCaptureCollectedEvent(param0: com.medallia.digital.mobilesdk.v4): void;
          public reportRestoreFromKillSDKEvent(param0: number): void;
          public reportFeedbackRetryMechanismEvent(param0: number): void;
          public static getInstance(): com.medallia.digital.mobilesdk.AnalyticsBridge;
          public reportFormSubmittedEvent(param0: string, param1: com.medallia.digital.mobilesdk.FormTriggerType, param2: number, param3: com.medallia.digital.mobilesdk.FormViewType): void;
          public reportInvitationAcceptedEvent(param0: string, param1: string, param2: com.medallia.digital.mobilesdk.i3): void;
          public reportMediaFeedbackRetryMechanismEvent(param0: number): void;
          public reportSetInvitationListenerEvent(): void;
          public reportSetCustomParametersEvent(param0: java.util.HashMap<string, any>): void;
          public reportInitCallbackEvent(param0: com.medallia.digital.mobilesdk.AnalyticsBridge.c, param1: java.lang.Integer, param2: string, param3: number): void;
          public reportSubmitFeedbackEvent(param0: com.medallia.digital.mobilesdk.g2, param1: number, param2: com.medallia.digital.mobilesdk.AnalyticsBridge.c, param3: string): void;
          public reportCustomInterceptDeclinedEvent(param0: string): void;
          public reportInvitationDisplayedEvent(param0: string, param1: string, param2: com.medallia.digital.mobilesdk.i3, param3: com.medallia.digital.mobilesdk.MDAppearanceMode): void;
          public reportSetInterceptListenerEvent(): void;
          public reportShowFormCallbackEvent(param0: com.medallia.digital.mobilesdk.AnalyticsBridge.c, param1: java.lang.Integer, param2: string): void;
          public exportPendingV2EventsToJson(): string;
          public reportStopSDKEventImmediated(param0: boolean): void;
          public reportSetFeedbackListenerEvent(): void;
          public reportNativeTargetEvaluatorEvent(param0: number, param1: number, param2: string, param3: com.medallia.digital.mobilesdk.n2.a, param4: string, param5: string): void;
          public reportDeleteStorageEvent(param0: string, param1: boolean): void;
          public reportSetFormCallbackEvent(param0: string, param1: string, param2: com.medallia.digital.mobilesdk.FormTriggerType): void;
          public reportFormThankYouPromptEvent(param0: string, param1: com.medallia.digital.mobilesdk.FormTriggerType, param2: com.medallia.digital.mobilesdk.FormViewType, param3: boolean, param4: boolean, param5: com.medallia.digital.mobilesdk.MDAppearanceMode): void;
          public reportRestClientEvent(param0: number, param1: number, param2: string, param3: number, param4: number, param5: java.lang.Double): void;
          public reportSetCustomInterceptCallbackEvent(param0: string, param1: string): void;
          public reportPromptDeclinedEvent(param0: string, param1: string, param2: com.medallia.digital.mobilesdk.i3): void;
          public reportSetActivityEvent(param0: globalAndroid.app.Activity): void;
          public reportCustomInterceptAcceptedEvent(param0: string): void;
          public reportSetCustomAppearanceEvent(param0: com.medallia.digital.mobilesdk.MDAppearanceMode): void;
          public reportCustomInterceptTriggerCallbackEvent(param0: com.medallia.digital.mobilesdk.AnalyticsBridge.c, param1: string, param2: string, param3: java.lang.Integer, param4: string): void;
          public reportFormClosedEvent(param0: string, param1: com.medallia.digital.mobilesdk.FormTriggerType, param2: com.medallia.digital.mobilesdk.FormViewType): void;
          public reportPreloadMechanismEvent(param0: number, param1: number, param2: string, param3: com.medallia.digital.mobilesdk.n2.a): void;
          public clearAndDisconnect(): void;
          public exportPendingEventsToJson(): string;
          public reportSetInterceptCallbackEvent(param0: string, param1: string, param2: string, param3: string, param4: com.medallia.digital.mobilesdk.i3): void;
          public reportSetCustomParameterEvent(param0: string): void;
          public reportFormLoadedEvent(param0: string, param1: com.medallia.digital.mobilesdk.FormTriggerType, param2: number, param3: com.medallia.digital.mobilesdk.FormViewType, param4: boolean, param5: number): void;
          public reportPromptDisplayedEvent(param0: string, param1: string, param2: com.medallia.digital.mobilesdk.i3, param3: com.medallia.digital.mobilesdk.MDAppearanceMode): void;
          public updateCustomLocaleEvent(param0: string, param1: boolean): void;
          public reportSetCustomInterceptListenerEvent(): void;
          public reportCustomInterceptSkippedEvent(param0: string): void;
          public reportMediaCaptureSubmitEvent(param0: com.medallia.digital.mobilesdk.v4, param1: com.medallia.digital.mobilesdk.AnalyticsBridge.c, param2: com.medallia.digital.mobilesdk.MDExternalError, param3: string): void;
          public reportInitOfflineMechanismEvent(param0: number): void;
          public reportLoggerEvent(param0: com.medallia.digital.mobilesdk.MDLogLevel): void;
          public reportRevertStopSdkEvent(): void;
          public reportSetFeedbackCallbackEvent(param0: string, param1: string, param2: com.medallia.digital.mobilesdk.FormTriggerType, param3: string): void;
          public reportFormDismissedEvent(param0: string, param1: com.medallia.digital.mobilesdk.FormTriggerType, param2: com.medallia.digital.mobilesdk.FormViewType): void;
          public setFormResourcesReady(param0: boolean): void;
          public reportInitEvent(): void;
          public reportPromptTriggeredEvent(param0: string): void;
          public reportPromptAcceptedEvent(param0: string, param1: string, param2: com.medallia.digital.mobilesdk.i3): void;
          public reportRefreshSessionEvent(param0: number, param1: number, param2: number, param3: number, param4: string, param5: com.medallia.digital.mobilesdk.AnalyticsBridge.c): void;
          public reportCloseEngagementEvent(param0: string, param1: string, param2: string): void;
          public reportDisableInterceptEvent(): void;
          public reportFormLoadSpinnerEvent(param0: string, param1: java.lang.Long, param2: com.medallia.digital.mobilesdk.FormViewType, param3: com.medallia.digital.mobilesdk.FormTriggerType): void;
          public reportFormDisplayedEvent(param0: string, param1: com.medallia.digital.mobilesdk.FormTriggerType, param2: com.medallia.digital.mobilesdk.FormViewType, param3: number, param4: string, param5: string, param6: com.medallia.digital.mobilesdk.MDAppearanceMode): void;
          public reportSetFormListenerEvent(): void;
          public reportSetUserIdEvent(param0: java.lang.Boolean): void;
          public reportPreInitEvents(): void;
          public reportInterceptMechanismEvent(param0: number, param1: number, param2: string, param3: com.medallia.digital.mobilesdk.Reason, param4: com.medallia.digital.mobilesdk.AnalyticsBridge.c): void;
        }
        export module AnalyticsBridge {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.AnalyticsBridge.a>;
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.AnalyticsBridge.b>;
            public static a: com.medallia.digital.mobilesdk.AnalyticsBridge.b;
            public static b: com.medallia.digital.mobilesdk.AnalyticsBridge.b;
            public static c: com.medallia.digital.mobilesdk.AnalyticsBridge.b;
            public static d: com.medallia.digital.mobilesdk.AnalyticsBridge.b;
            public static e: com.medallia.digital.mobilesdk.AnalyticsBridge.b;
            public static f: com.medallia.digital.mobilesdk.AnalyticsBridge.b;
            public static g: com.medallia.digital.mobilesdk.AnalyticsBridge.b;
            public static h: com.medallia.digital.mobilesdk.AnalyticsBridge.b;
            public static i: com.medallia.digital.mobilesdk.AnalyticsBridge.b;
            public static j: com.medallia.digital.mobilesdk.AnalyticsBridge.b;
            public static k: com.medallia.digital.mobilesdk.AnalyticsBridge.b;
            public static l: com.medallia.digital.mobilesdk.AnalyticsBridge.b;
            public static m: com.medallia.digital.mobilesdk.AnalyticsBridge.b;
            public static n: com.medallia.digital.mobilesdk.AnalyticsBridge.b;
            public static o: com.medallia.digital.mobilesdk.AnalyticsBridge.b;
            public static p: com.medallia.digital.mobilesdk.AnalyticsBridge.b;
            public static q: com.medallia.digital.mobilesdk.AnalyticsBridge.b;
            public static r: com.medallia.digital.mobilesdk.AnalyticsBridge.b;
            public static s: com.medallia.digital.mobilesdk.AnalyticsBridge.b;
            public static t: com.medallia.digital.mobilesdk.AnalyticsBridge.b;
            public static u: com.medallia.digital.mobilesdk.AnalyticsBridge.b;
            public static v: com.medallia.digital.mobilesdk.AnalyticsBridge.b;
            public static w: com.medallia.digital.mobilesdk.AnalyticsBridge.b;
            public static x: com.medallia.digital.mobilesdk.AnalyticsBridge.b;
            public static y: com.medallia.digital.mobilesdk.AnalyticsBridge.b;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.AnalyticsBridge.b>;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.AnalyticsBridge.b;
          }
          export class c {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.AnalyticsBridge.c>;
            public static a: com.medallia.digital.mobilesdk.AnalyticsBridge.c;
            public static b: com.medallia.digital.mobilesdk.AnalyticsBridge.c;
            public static c: com.medallia.digital.mobilesdk.AnalyticsBridge.c;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.AnalyticsBridge.c>;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.AnalyticsBridge.c;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class AppRatingContract extends com.medallia.digital.mobilesdk.EngagementContract {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.AppRatingContract>;
          public getAppRatingLanguage(): string;
          public isDarkModeEnabled(): boolean;
          public isAppRatingDirectApi(): boolean;
          public getAppRatingUrl(): string;
          public toJsonString(): string;
          public getAppRatingId(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class BannerData {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.BannerData>;
          public getCloseButtonColor(): string;
          public getInvitationTitle(): string;
          public getHandleTextColor(): string;
          public isSticky(): boolean;
          public toJsonString(): string;
          public getPosition(): string;
          public getAcceptButtonBackgroundColor(): string;
          public getTextColor(): string;
          public getBackgroundColor(): string;
          public getAcceptButtonText(): string;
          public getAcceptButtonTextColor(): string;
          public equals(param0: any): boolean;
          public isButtonsDisplay(): boolean;
          public getThemeName(): string;
          public getInvitationTimeout(): java.lang.Long;
          public getInvitationBody(): string;
          public isPartial(): boolean;
          public getFont(): string;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export abstract class BaseFormCommunicator extends com.medallia.digital.mobilesdk.v3.h {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.BaseFormCommunicator>;
          public ready(): void;
          public onBackground(): void;
          public isPreviewApp(): boolean;
          public submitPending(): void;
          public submitFailed(): void;
          public addMobileDeviceData(param0: org.json.JSONObject): void;
          public mediaCaptureSelected(param0: string, param1: string): void;
          public sendErrorToMobileSdk(param0: string): void;
          public jsResolve(param0: string, param1: boolean, param2: org.json.JSONObject): void;
          public getMediaData(): com.medallia.digital.mobilesdk.v4;
          public close(): void;
          public asyncMediaResultResponse(param0: string): string;
          public mediaCaptureDeleted(param0: string, param1: string): void;
          public getMediaCapture(): com.medallia.digital.mobilesdk.s4;
          public onForeground(): void;
          public getCustomParams(): string;
          public addFormMissingData(param0: org.json.JSONObject): void;
          public invokeJSResponse(param0: string, param1: org.json.JSONObject): void;
          public checkWhichPermissionsGranted(param0: java.util.ArrayList<string>): void;
          public getSDKData(): string;
          public asyncMediaCaptureResult(param0: string): string;
          public getSecretToken(): string;
          public getDeviceData(): string;
          public asyncMediaAlertResponse(param0: string): string;
          public getProvisions(): string;
          public submitSuccess(): void;
          public handleVideoMediaCapture(param0: globalAndroid.content.Intent): void;
          public setListener(param0: com.medallia.digital.mobilesdk.m2): void;
          public handleStopAudioMediaCapture(): void;
          public handlePermissionsDenied(): void;
          public showAccessibilityToastIfNeeded(): void;
          public submitPending(param0: boolean): void;
          public sendFeedbackToMobileSdk(param0: string): void;
          public createMediaData(): void;
          public getHasMediaData(): boolean;
        }
        export module BaseFormCommunicator {
          export class a extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.BaseFormCommunicator.a>;
            public a(): void;
          }
          export class b extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.BaseFormCommunicator.b>;
            public a(): void;
          }
          export class c {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.BaseFormCommunicator.c>;
          }
          export class d extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.BaseFormCommunicator.d>;
            public a(): void;
          }
          export class e extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.BaseFormCommunicator.e>;
            public a(): void;
          }
          export class f extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.BaseFormCommunicator.f>;
            public a(): void;
          }
          export class g extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.BaseFormCommunicator.g>;
            public a(): void;
          }
          export class h extends com.medallia.digital.mobilesdk.r4<com.medallia.digital.mobilesdk.q4> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.BaseFormCommunicator.h>;
            public a(param0: com.medallia.digital.mobilesdk.q4): void;
            public a(param0: any): void;
          }
          export class i extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.BaseFormCommunicator.i>;
            public a(): void;
          }
          export class j extends com.medallia.digital.mobilesdk.r4<com.medallia.digital.mobilesdk.q4> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.BaseFormCommunicator.j>;
            public a(param0: com.medallia.digital.mobilesdk.q4): void;
            public a(param0: any): void;
          }
          export class k extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.BaseFormCommunicator.k>;
            public a(): void;
          }
          export class l extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.BaseFormCommunicator.l>;
            public a(): void;
          }
          export module l {
            export class a extends com.medallia.digital.mobilesdk.n4 {
              public static class: java.lang.Class<com.medallia.digital.mobilesdk.BaseFormCommunicator.l.a>;
              public a(): void;
            }
            export class b extends com.medallia.digital.mobilesdk.n4 {
              public static class: java.lang.Class<com.medallia.digital.mobilesdk.BaseFormCommunicator.l.b>;
              public a(): void;
            }
            export module b {
              export class a extends com.medallia.digital.mobilesdk.r4<com.medallia.digital.mobilesdk.q4> {
                public static class: java.lang.Class<com.medallia.digital.mobilesdk.BaseFormCommunicator.l.b.a>;
                public a(param0: any): void;
                public a(param0: com.medallia.digital.mobilesdk.q4): void;
              }
            }
          }
          export class m {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.BaseFormCommunicator.m>;
            public static b: com.medallia.digital.mobilesdk.BaseFormCommunicator.m;
            public static c: com.medallia.digital.mobilesdk.BaseFormCommunicator.m;
            public static d: com.medallia.digital.mobilesdk.BaseFormCommunicator.m;
            public static e: com.medallia.digital.mobilesdk.BaseFormCommunicator.m;
            public a(): string;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.BaseFormCommunicator.m>;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.BaseFormCommunicator.m;
          }
          export class n {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.BaseFormCommunicator.n>;
            public static b: com.medallia.digital.mobilesdk.BaseFormCommunicator.n;
            public a(): string;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.BaseFormCommunicator.n>;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.BaseFormCommunicator.n;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class Broadcasts {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.Broadcasts>;
          public static PROPERTY_ID_CHANGE: string;
          public static PROPERTY_ID_VALUE: string;
          public static SYNC_USERJOURNEY_ACTION: string;
        }
        export module Broadcasts {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.Broadcasts.a>;
            public static a: string;
            public static b: string;
            public static c: string;
            public static d: string;
            public static e: string;
            public static f: string;
            public static g: string;
            public static h: string;
            public static i: string;
            public static j: string;
            public static k: string;
            public static l: string;
            public static m: string;
            public constructor();
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.Broadcasts.b>;
            public static b: string;
            public static c: string;
            public static d: string;
            public static e: string;
            public static f: string;
            public static g: string;
            public constructor();
            public static a(param0: com.medallia.digital.mobilesdk.Broadcasts.b.a, param1: string, param2: number, param3: number, param4: com.medallia.digital.mobilesdk.MDEngagementType, param5: com.medallia.digital.mobilesdk.MDCustomInterceptPayload): void;
          }
          export module b {
            export class a {
              public static class: java.lang.Class<com.medallia.digital.mobilesdk.Broadcasts.b.a>;
              public static a: com.medallia.digital.mobilesdk.Broadcasts.b.a;
              public static valueOf(param0: string): com.medallia.digital.mobilesdk.Broadcasts.b.a;
              public static values(): androidNative.Array<com.medallia.digital.mobilesdk.Broadcasts.b.a>;
            }
          }
          export class c {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.Broadcasts.c>;
            public static b: string;
            public static c: string;
            public static d: string;
            public constructor();
            public static a(param0: com.medallia.digital.mobilesdk.Broadcasts.c.a, param1: string, param2: boolean): void;
          }
          export module c {
            export class a {
              public static class: java.lang.Class<com.medallia.digital.mobilesdk.Broadcasts.c.a>;
              public static a: com.medallia.digital.mobilesdk.Broadcasts.c.a;
              public static values(): androidNative.Array<com.medallia.digital.mobilesdk.Broadcasts.c.a>;
              public static valueOf(param0: string): com.medallia.digital.mobilesdk.Broadcasts.c.a;
            }
          }
          export class d {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.Broadcasts.d>;
            public static b: string;
            public static c: string;
            public static d: string;
            public static e: string;
            public static f: string;
            public static g: string;
            public static h: string;
            public static i: string;
            public static j: string;
            public static k: string;
            public static l: string;
            public static m: string;
            public static n: string;
            public static o: string;
            public static p: string;
            public static q: string;
            public static r: string;
            public static s: string;
            public static t: string;
            public constructor();
            public static a(param0: com.medallia.digital.mobilesdk.Broadcasts.d.a, param1: string, param2: com.medallia.digital.mobilesdk.FormTriggerType, param3: com.medallia.digital.mobilesdk.FormViewType, param4: number, param5: string, param6: string, param7: com.medallia.digital.mobilesdk.MDAppearanceMode, param8: com.medallia.digital.mobilesdk.MDAppearanceMode): void;
            public static a(param0: com.medallia.digital.mobilesdk.Broadcasts.d.a, param1: string, param2: com.medallia.digital.mobilesdk.FormTriggerType, param3: string): void;
            public static a(param0: com.medallia.digital.mobilesdk.Broadcasts.d.a, param1: string, param2: com.medallia.digital.mobilesdk.FormTriggerType, param3: com.medallia.digital.mobilesdk.FormViewType, param4: boolean, param5: boolean, param6: com.medallia.digital.mobilesdk.MDAppearanceMode, param7: com.medallia.digital.mobilesdk.MDAppearanceMode): void;
            public static a(param0: com.medallia.digital.mobilesdk.Broadcasts.d.a, param1: string): void;
            public static a(param0: com.medallia.digital.mobilesdk.Broadcasts.d.a, param1: string, param2: com.medallia.digital.mobilesdk.FormTriggerType): void;
            public static a(param0: com.medallia.digital.mobilesdk.Broadcasts.d.a, param1: string, param2: com.medallia.digital.mobilesdk.FormTriggerType, param3: com.medallia.digital.mobilesdk.FormViewType): void;
            public static a(param0: com.medallia.digital.mobilesdk.Broadcasts.d.a, param1: string, param2: com.medallia.digital.mobilesdk.FormTriggerType, param3: com.medallia.digital.mobilesdk.FormViewType, param4: string, param5: number, param6: string, param7: string, param8: java.lang.Boolean, param9: java.lang.Boolean, param10: com.medallia.digital.mobilesdk.MDAppearanceMode, param11: com.medallia.digital.mobilesdk.MDAppearanceMode): void;
            public static a(param0: com.medallia.digital.mobilesdk.Broadcasts.d.a, param1: string, param2: com.medallia.digital.mobilesdk.FormTriggerType, param3: string, param4: string): void;
            public static a(param0: com.medallia.digital.mobilesdk.Broadcasts.d.a, param1: string, param2: com.medallia.digital.mobilesdk.FormTriggerType, param3: number): void;
          }
          export module d {
            export class a {
              public static class: java.lang.Class<com.medallia.digital.mobilesdk.Broadcasts.d.a>;
              public static a: com.medallia.digital.mobilesdk.Broadcasts.d.a;
              public static b: com.medallia.digital.mobilesdk.Broadcasts.d.a;
              public static c: com.medallia.digital.mobilesdk.Broadcasts.d.a;
              public static d: com.medallia.digital.mobilesdk.Broadcasts.d.a;
              public static e: com.medallia.digital.mobilesdk.Broadcasts.d.a;
              public static f: com.medallia.digital.mobilesdk.Broadcasts.d.a;
              public static g: com.medallia.digital.mobilesdk.Broadcasts.d.a;
              public static h: com.medallia.digital.mobilesdk.Broadcasts.d.a;
              public static valueOf(param0: string): com.medallia.digital.mobilesdk.Broadcasts.d.a;
              public static values(): androidNative.Array<com.medallia.digital.mobilesdk.Broadcasts.d.a>;
            }
            export class b {
              public static class: java.lang.Class<com.medallia.digital.mobilesdk.Broadcasts.d.b>;
              public static a: com.medallia.digital.mobilesdk.Broadcasts.d.b;
              public static b: com.medallia.digital.mobilesdk.Broadcasts.d.b;
              public static c: com.medallia.digital.mobilesdk.Broadcasts.d.b;
              public static d: com.medallia.digital.mobilesdk.Broadcasts.d.b;
              public static valueOf(param0: string): com.medallia.digital.mobilesdk.Broadcasts.d.b;
              public static values(): androidNative.Array<com.medallia.digital.mobilesdk.Broadcasts.d.b>;
            }
          }
          export class e {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.Broadcasts.e>;
            public static b: string;
            public static c: string;
            public static d: string;
            public static e: string;
            public static f: string;
            public static g: string;
            public static h: string;
            public static i: string;
            public constructor();
            public static a(param0: com.medallia.digital.mobilesdk.Broadcasts.e.a, param1: string): void;
            public static a(param0: com.medallia.digital.mobilesdk.Broadcasts.e.a, param1: string, param2: string, param3: com.medallia.digital.mobilesdk.MDEngagementType, param4: com.medallia.digital.mobilesdk.i3, param5: com.medallia.digital.mobilesdk.MDAppearanceMode, param6: com.medallia.digital.mobilesdk.MDAppearanceMode): void;
            public static a(param0: com.medallia.digital.mobilesdk.Broadcasts.e.a, param1: string, param2: string, param3: com.medallia.digital.mobilesdk.MDEngagementType, param4: com.medallia.digital.mobilesdk.i3): void;
          }
          export module e {
            export class a {
              public static class: java.lang.Class<com.medallia.digital.mobilesdk.Broadcasts.e.a>;
              public static a: com.medallia.digital.mobilesdk.Broadcasts.e.a;
              public static b: com.medallia.digital.mobilesdk.Broadcasts.e.a;
              public static c: com.medallia.digital.mobilesdk.Broadcasts.e.a;
              public static d: com.medallia.digital.mobilesdk.Broadcasts.e.a;
              public static e: com.medallia.digital.mobilesdk.Broadcasts.e.a;
              public static f: com.medallia.digital.mobilesdk.Broadcasts.e.a;
              public static valueOf(param0: string): com.medallia.digital.mobilesdk.Broadcasts.e.a;
              public static values(): androidNative.Array<com.medallia.digital.mobilesdk.Broadcasts.e.a>;
            }
          }
          export class f {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.Broadcasts.f>;
            public static b: string;
            public static c: string;
            public static a(): void;
            public static a(param0: string): void;
            public constructor();
            public static a(param0: com.medallia.digital.mobilesdk.MDExternalError): void;
          }
          export class g {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.Broadcasts.g>;
            public static a: string;
            public static b: string;
            public static c: string;
            public constructor();
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class BuildConfig {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.BuildConfig>;
          public static DEBUG: boolean;
          public static LIBRARY_PACKAGE_NAME: string;
          public static BUILD_TYPE: string;
          public static SDK_VERSION_CODE: number;
          public static SDK_VERSION_NAME: string;
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class CollectorContract {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.CollectorContract>;
          public setEnabled(param0: boolean): com.medallia.digital.mobilesdk.CollectorContract;
          public isEnabled(): java.lang.Boolean;
          public toJsonString(): string;
          public constructor(param0: java.lang.Boolean, param1: java.lang.Integer, param2: com.medallia.digital.mobilesdk.Lifetime);
          public getLifetime(): com.medallia.digital.mobilesdk.Lifetime;
          public getFrequency(): java.lang.Integer;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class CollectorsConfigurationContract extends com.medallia.digital.mobilesdk.i0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.CollectorsConfigurationContract>;
          public getDeviceFreeDiskSpaceCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getLanguageCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getSessionIdCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getInvitationDisplayedCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getDeviceFreeMemoryCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getPromptDisplayedCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getExternalDriveUsedSpaceCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getAppVersionCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public constructor();
          public getAppNameCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getBatteryPercentageCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getExternalDriveFreeSpaceCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getNetworkProviderCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getDeviceModelCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getNpsCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getCsatCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getNetworkTypeCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getTimezoneCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getIpCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getLastSubmitTimestampCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public toJsonString(): string;
          public getSdkVersionCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getOsVersionCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getPowerTypeCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getAppRatingLastDeclineTimestampCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getIsOCQRulesValidCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getOsNameCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getDeviceResolutionCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getDeviceUsedMemoryCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getNetworkSpeedCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getDeviceUsedDiskSpaceCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getOrientationCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getLastDeclineTimestampCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getIsOCQUserSetCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getDeviceIdCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getSessionCalculatedPercentageCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getPropertyIdCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getNetworkCarrierCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getAppIdCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getDeviceVendorCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getSessionNumberCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getAppRatingLastTriggerTimestampCollector(): com.medallia.digital.mobilesdk.CollectorContract;
          public getAppRatingLastAcceptedTimestampCollector(): com.medallia.digital.mobilesdk.CollectorContract;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class CollectorsInfrastructure implements com.medallia.digital.mobilesdk.u0, com.medallia.digital.mobilesdk.z7, com.medallia.digital.mobilesdk.v3.h {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.CollectorsInfrastructure>;
          public deviceModelCollector: com.medallia.digital.mobilesdk.r1;
          public deviceResolutionCollector: com.medallia.digital.mobilesdk.s1;
          public deviceUsedMemoryCollector: com.medallia.digital.mobilesdk.u1;
          public deviceFreeMemoryCollector: com.medallia.digital.mobilesdk.o1;
          public deviceUsedDiskSpaceCollector: com.medallia.digital.mobilesdk.t1;
          public deviceFreeDiskSpaceCollector: com.medallia.digital.mobilesdk.n1;
          public osNameCollector: com.medallia.digital.mobilesdk.g5;
          public osVersionCollector: com.medallia.digital.mobilesdk.h5;
          public networkProviderCollector: com.medallia.digital.mobilesdk.c5;
          public networkCarrierCollector: com.medallia.digital.mobilesdk.a5;
          public languageCollector: com.medallia.digital.mobilesdk.s3;
          public timezoneCollector: com.medallia.digital.mobilesdk.o7;
          public ipCollector: com.medallia.digital.mobilesdk.z2;
          public powerTypeCollector: com.medallia.digital.mobilesdk.o5;
          public batteryPercentageCollector: com.medallia.digital.mobilesdk.k0;
          public orientationCollector: com.medallia.digital.mobilesdk.f5;
          public deviceIdCollector: com.medallia.digital.mobilesdk.p1;
          public userIdCollector: com.medallia.digital.mobilesdk.c8;
          public userNameCollector: com.medallia.digital.mobilesdk.h8;
          public userEmailCollector: com.medallia.digital.mobilesdk.b8;
          public customParametersCollector: com.medallia.digital.mobilesdk.g1;
          public appNameCollector: com.medallia.digital.mobilesdk.p;
          public appIdCollector: com.medallia.digital.mobilesdk.o;
          public appVersionCollector: com.medallia.digital.mobilesdk.v;
          public sdkVersionCollector: com.medallia.digital.mobilesdk.l6;
          public sessionCalculatedPercentageCollector: com.medallia.digital.mobilesdk.n6;
          public sessionNumberCollector: com.medallia.digital.mobilesdk.p6;
          public sessionIdCollector: com.medallia.digital.mobilesdk.o6;
          public lastDeclineTimestampCollector: com.medallia.digital.mobilesdk.t3;
          public lastSubmitTimestampCollector: com.medallia.digital.mobilesdk.u3;
          public deviceVendorCollector: com.medallia.digital.mobilesdk.v1;
          public invitationDisplayedCollector: com.medallia.digital.mobilesdk.f3;
          public interceptEnabledCollector: com.medallia.digital.mobilesdk.c3;
          public interceptDisabledCollector: com.medallia.digital.mobilesdk.b3;
          public propertyIdCollector: com.medallia.digital.mobilesdk.s5;
          public npsCollector: com.medallia.digital.mobilesdk.d5;
          public csatCollector: com.medallia.digital.mobilesdk.e1;
          public appRatingLastDeclineTimestampCollector: com.medallia.digital.mobilesdk.t;
          public promptDisplayedCollector: com.medallia.digital.mobilesdk.r5;
          public appRatingLastAcceptedTimestampCollector: com.medallia.digital.mobilesdk.s;
          public sdkAnalyticsVersionCollector: com.medallia.digital.mobilesdk.g6;
          public sdkFrameworkCollector: com.medallia.digital.mobilesdk.j6;
          public appRatingLastTriggerTimestampCollector: com.medallia.digital.mobilesdk.u;
          public isOCQUserSetCollector: com.medallia.digital.mobilesdk.l3;
          public isOCQRulesValidCollector: com.medallia.digital.mobilesdk.k3;
          public timeInBackgroundCollector: com.medallia.digital.mobilesdk.m7;
          public timeInForegroundCollector: com.medallia.digital.mobilesdk.n7;
          public getOSVersion(): string;
          public getCustomParameters(): java.util.ArrayList<com.medallia.digital.mobilesdk.CustomParameter>;
          public setSDKAnalyticsVersion(param0: com.medallia.digital.mobilesdk.g6.a): void;
          public setUserEmail(param0: string): void;
          public addObserverToCollector(param0: java.util.Observer, param1: com.medallia.digital.mobilesdk.s0): void;
          public isInvitationDisplayed(): string;
          public getAppRatingLastDeclineTimestamp(): java.lang.Long;
          public getAppName(): string;
          public getDeviceUsedMemory(): java.lang.Long;
          public setSDKFramework(param0: com.medallia.digital.mobilesdk.MDSdkFrameworkType): void;
          public getLastSubmitTimestamp(): java.lang.Long;
          public getTimezone(): string;
          public static getInstance(): com.medallia.digital.mobilesdk.CollectorsInfrastructure;
          public setPropertyId(param0: java.lang.Long): void;
          public stopCollectors(): void;
          public unregister(): void;
          public updateConfiguration(param0: com.medallia.digital.mobilesdk.CollectorsConfigurationContract): void;
          public getSDKAnalyticsVersion(): com.medallia.digital.mobilesdk.g6.a;
          public getAppRatingLastAcceptedTimestamp(): java.lang.Long;
          public getUserID(): string;
          public isPromptDisplayed(): string;
          public onForeground(): void;
          public getAppId(): string;
          public getIp(): string;
          public isOCQUserSet(): string;
          public getLastDeclineTimestamp(): java.lang.Long;
          public getOrientation(): com.medallia.digital.mobilesdk.f5.b;
          public setSessionId(param0: string): void;
          public getDeviceUsedDiskSpace(): java.lang.Long;
          public isInitialized(): boolean;
          public addObserverToCollectors(param0: java.util.Observer): void;
          public getNetworkCarrier(): string;
          public pollAll(): void;
          public setUserName(param0: string): void;
          public isOCQRulesValid(): string;
          public getDeviceResolution(): string;
          public getTimeInForeground(): java.lang.Long;
          public getSDKVersion(): string;
          public getPropertyId(): java.lang.Long;
          public getSessionCalculatedPercentage(): java.lang.Integer;
          public onBackground(): void;
          public clearAndDisconnect(): void;
          public setSessionNumber(param0: java.lang.Integer): void;
          public getNetworkSpeed(): java.lang.Double;
          public getSDKFramework(): com.medallia.digital.mobilesdk.MDSdkFrameworkType;
          public getOSName(): string;
          public getUserName(): string;
          public getAppVersion(): string;
          public getTimeInBackground(): java.lang.Long;
          public getAppRatingLastTriggerTimestamp(): java.lang.Long;
          public getSessionId(): string;
          public getSessionNumber(): java.lang.Integer;
          public getNetworkProvider(): string;
          public getDeviceFreeDiskSpace(): string;
          public getDeviceModel(): string;
          public setUserID(param0: string): void;
          public setInitialized(param0: boolean): void;
          public register(): void;
          public getPowerType(): string;
          public getBatteryPercentage(): java.lang.Integer;
          public getUserEmail(): string;
          public getDeviceVendor(): string;
          public getDeviceId(): string;
          public getDeviceFreeMemory(): string;
          public getLanguage(): string;
          public getCSAT(): java.lang.Integer;
          public getNPS(): java.lang.Integer;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class Component {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.Component>;
          public getId(): string;
          public constructor(param0: org.json.JSONObject);
          public setCsat(param0: boolean): void;
          public setType(param0: string): void;
          public setValue(param0: string): void;
          public getUniqueName(): string;
          public getValue(): string;
          public isCsat(): boolean;
          public constructor(param0: string, param1: string, param2: string, param3: string, param4: boolean, param5: string);
          public getRole(): string;
          public setUniqueName(param0: string): void;
          public constructor();
          public setId(param0: string): void;
          public setRole(param0: string): void;
          public getType(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class ConfigurationContract extends com.medallia.digital.mobilesdk.i0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.ConfigurationContract>;
          public getPropertyConfiguration(): com.medallia.digital.mobilesdk.PropertyConfigurationContract;
          public getConfigurationUUID(): com.medallia.digital.mobilesdk.ConfigurationUUID;
          public getSdkConfiguration(): com.medallia.digital.mobilesdk.SDKConfigurationContract;
          public getKillStatus(): com.medallia.digital.mobilesdk.KillStatus;
          public toJsonString(): string;
          public getTargetEvaluatorContract(): com.medallia.digital.mobilesdk.y6;
          public getTargetRuleEngine(): com.medallia.digital.mobilesdk.TargetRuleEngineContract;
          public constructor(param0: com.medallia.digital.mobilesdk.PropertyConfigurationContract, param1: com.medallia.digital.mobilesdk.ConfigurationUUID, param2: com.medallia.digital.mobilesdk.SDKConfigurationContract, param3: com.medallia.digital.mobilesdk.TargetRuleEngineContract, param4: com.medallia.digital.mobilesdk.KillStatus);
          public constructor();
          public constructor(param0: com.medallia.digital.mobilesdk.PropertyConfigurationContract, param1: com.medallia.digital.mobilesdk.ConfigurationUUID, param2: com.medallia.digital.mobilesdk.SDKConfigurationContract, param3: com.medallia.digital.mobilesdk.TargetRuleEngineContract);
          public getLocalization(): com.medallia.digital.mobilesdk.y3;
          public constructor(param0: com.medallia.digital.mobilesdk.PropertyConfigurationContract, param1: com.medallia.digital.mobilesdk.SDKConfigurationContract, param2: com.medallia.digital.mobilesdk.TargetRuleEngineContract);
          public constructor(param0: com.medallia.digital.mobilesdk.PropertyConfigurationContract, param1: com.medallia.digital.mobilesdk.ConfigurationUUID, param2: com.medallia.digital.mobilesdk.SDKConfigurationContract, param3: com.medallia.digital.mobilesdk.TargetRuleEngineContract, param4: com.medallia.digital.mobilesdk.KillStatus, param5: com.medallia.digital.mobilesdk.y3, param6: com.medallia.digital.mobilesdk.y6);
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class ConfigurationUUID {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.ConfigurationUUID>;
          public getUrl(): string;
          public toJsonString(): string;
          public getOcqUuid(): string;
          public getUuid(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class CustomParameter {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.CustomParameter>;
          public e(): string;
          public f(): com.medallia.digital.mobilesdk.CustomParameter;
          public constructor(param0: org.json.JSONObject);
          public compareTo(param0: any): number;
          public equals(param0: any): boolean;
          public c(): any;
          public toString(): string;
          public d(): org.json.JSONObject;
          public a(param0: string): boolean;
          public constructor();
          public b(): string;
          public a(): com.medallia.digital.mobilesdk.CustomParameter.CustomParameterType;
          public hashCode(): number;
          public a(param0: any): boolean;
        }
        export module CustomParameter {
          export class CustomParameterType {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.CustomParameter.CustomParameterType>;
            public static TypeString: com.medallia.digital.mobilesdk.CustomParameter.CustomParameterType;
            public static TypeInteger: com.medallia.digital.mobilesdk.CustomParameter.CustomParameterType;
            public static TypeLong: com.medallia.digital.mobilesdk.CustomParameter.CustomParameterType;
            public static TypeDouble: com.medallia.digital.mobilesdk.CustomParameter.CustomParameterType;
            public static TypeFloat: com.medallia.digital.mobilesdk.CustomParameter.CustomParameterType;
            public static TypeBoolean: com.medallia.digital.mobilesdk.CustomParameter.CustomParameterType;
            public static TypeNull: com.medallia.digital.mobilesdk.CustomParameter.CustomParameterType;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.CustomParameter.CustomParameterType>;
            public static parseType(param0: any): com.medallia.digital.mobilesdk.CustomParameter.CustomParameterType;
            public static fromString(param0: string): com.medallia.digital.mobilesdk.CustomParameter.CustomParameterType;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.CustomParameter.CustomParameterType;
            public validateValueFromType(param0: any): any;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class DynamicData {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.DynamicData>;
          public constructor(param0: org.json.JSONObject);
          public getPages(): java.util.ArrayList<com.medallia.digital.mobilesdk.i5>;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class DynamicDataContract {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.DynamicDataContract>;
          public getComponent(): string;
          public getId(): string;
          public getRole(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export abstract class EngagementContract extends com.medallia.digital.mobilesdk.i0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.EngagementContract>;
          public getName(): string;
          public getInviteData(): com.medallia.digital.mobilesdk.InviteData;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class EvaluationResult extends com.medallia.digital.mobilesdk.c1 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.EvaluationResult>;
          public constructor(param0: string, param1: java.lang.Long, param2: com.medallia.digital.mobilesdk.MDEngagementType);
          public constructor(param0: org.json.JSONObject);
          public toJsonString(): string;
          public getEngagementType(): com.medallia.digital.mobilesdk.MDEngagementType;
          public getEngagementId(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class FormCommunicator extends com.medallia.digital.mobilesdk.BaseFormCommunicator {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.FormCommunicator>;
          public static NPS: string;
          public onForeground(): void;
          public onBackground(): void;
          public isPreviewApp(): boolean;
          public sendFeedbackPayloadAndUpdateRatingCollectors(param0: org.json.JSONObject): void;
          public getMediaCapture(): com.medallia.digital.mobilesdk.s4;
        }
        export module FormCommunicator {
          export class a extends com.medallia.digital.mobilesdk.d6<java.lang.Void> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.FormCommunicator.a>;
            public a(param0: java.lang.Void): void;
            public a(param0: com.medallia.digital.mobilesdk.g4): void;
            public a(param0: any): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class FormCommunicatorPreviews extends com.medallia.digital.mobilesdk.BaseFormCommunicator {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.FormCommunicatorPreviews>;
          public onForeground(): void;
          public onBackground(): void;
          public isPreviewApp(): boolean;
          public sendFeedbackPayloadAndUpdateRatingCollectors(param0: org.json.JSONObject): void;
          public getMediaCapture(): com.medallia.digital.mobilesdk.s4;
        }
        export module FormCommunicatorPreviews {
          export class a extends com.medallia.digital.mobilesdk.d6<java.lang.Void> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.FormCommunicatorPreviews.a>;
            public a(param0: java.lang.Void): void;
            public a(param0: com.medallia.digital.mobilesdk.g4): void;
            public a(param0: any): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class FormConfigurations {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.FormConfigurations>;
          public isVulnEnabled(): boolean;
          public toJsonString(): string;
          public isPinchGestureEnabled(): boolean;
          public getMaxFontSize(): number;
          public getRedirectLinks(): java.util.ArrayList<string>;
          public getFeedbackPayloadExcludedTypes(): java.util.ArrayList<string>;
          public getFeedbackPayloadTypes(): java.util.ArrayList<string>;
          public isInheritOrientation(): boolean;
          public constructor(param0: java.lang.Long, param1: java.util.ArrayList<string>);
          public getMinFontSize(): number;
          public constructor(param0: java.lang.Long, param1: java.util.ArrayList<string>, param2: java.util.ArrayList<string>);
          public getLoadFormIndicatorDelay(): java.lang.Long;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class FormDisplayType {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.FormDisplayType>;
          public static CODE: com.medallia.digital.mobilesdk.FormDisplayType;
          public static NOTIFICATION: com.medallia.digital.mobilesdk.FormDisplayType;
          public static values(): androidNative.Array<com.medallia.digital.mobilesdk.FormDisplayType>;
          public static valueOf(param0: string): com.medallia.digital.mobilesdk.FormDisplayType;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class FormTriggerType {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.FormTriggerType>;
          public static code: com.medallia.digital.mobilesdk.FormTriggerType;
          public static mobileInvitation: com.medallia.digital.mobilesdk.FormTriggerType;
          public static valueOf(param0: string): com.medallia.digital.mobilesdk.FormTriggerType;
          public static fromString(param0: string): com.medallia.digital.mobilesdk.FormTriggerType;
          public static values(): androidNative.Array<com.medallia.digital.mobilesdk.FormTriggerType>;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class FormViewType {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.FormViewType>;
          public static full: com.medallia.digital.mobilesdk.FormViewType;
          public static modal: com.medallia.digital.mobilesdk.FormViewType;
          public static none: com.medallia.digital.mobilesdk.FormViewType;
          public static values(): androidNative.Array<com.medallia.digital.mobilesdk.FormViewType>;
          public static valueOf(param0: string): com.medallia.digital.mobilesdk.FormViewType;
          public static fromString(param0: string): com.medallia.digital.mobilesdk.FormViewType;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class GroupType {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.GroupType>;
          public static collector: com.medallia.digital.mobilesdk.GroupType;
          public static api: com.medallia.digital.mobilesdk.GroupType;
          public static callback: com.medallia.digital.mobilesdk.GroupType;
          public static feedback: com.medallia.digital.mobilesdk.GroupType;
          public static internalSdk: com.medallia.digital.mobilesdk.GroupType;
          public static error: com.medallia.digital.mobilesdk.GroupType;
          public static appRating: com.medallia.digital.mobilesdk.GroupType;
          public static valueOf(param0: string): com.medallia.digital.mobilesdk.GroupType;
          public static values(): androidNative.Array<com.medallia.digital.mobilesdk.GroupType>;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class InviteData {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.InviteData>;
          public getProvideButtonText(): string;
          public constructor(param0: org.json.JSONObject);
          public toJsonString(): string;
          public getBannerData(): com.medallia.digital.mobilesdk.BannerData;
          public getDeclineButtonText(): string;
          public equals(param0: any): boolean;
          public getDoSkipInvitation(): string;
          public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: com.medallia.digital.mobilesdk.BannerData, param8: com.medallia.digital.mobilesdk.f1);
          public constructor();
          public getInvitationText(): string;
          public getCustomInterceptData(): com.medallia.digital.mobilesdk.f1;
          public getInvitationHeadline(): string;
          public getLaterButtonText(): string;
          public hashCode(): number;
          public getType(): com.medallia.digital.mobilesdk.InviteData.a;
        }
        export module InviteData {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.InviteData.a>;
            public static a: com.medallia.digital.mobilesdk.InviteData.a;
            public static b: com.medallia.digital.mobilesdk.InviteData.a;
            public static c: com.medallia.digital.mobilesdk.InviteData.a;
            public static d: com.medallia.digital.mobilesdk.InviteData.a;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.InviteData.a>;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.InviteData.a;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class KillStatus {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.KillStatus>;
          public getShouldCheckRestoreOnOsChange(): java.lang.Boolean;
          public isKilled(): java.lang.Boolean;
          public toJsonString(): string;
          public getRestorePollingInterval(): java.lang.Long;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class Lifetime {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.Lifetime>;
          public static Session: com.medallia.digital.mobilesdk.Lifetime;
          public static Application: com.medallia.digital.mobilesdk.Lifetime;
          public static Forever: com.medallia.digital.mobilesdk.Lifetime;
          public static valueOf(param0: string): com.medallia.digital.mobilesdk.Lifetime;
          public static values(): androidNative.Array<com.medallia.digital.mobilesdk.Lifetime>;
          public static fromString(param0: string): com.medallia.digital.mobilesdk.Lifetime;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class MDAppearanceMode {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.MDAppearanceMode>;
          public static light: com.medallia.digital.mobilesdk.MDAppearanceMode;
          public static dark: com.medallia.digital.mobilesdk.MDAppearanceMode;
          public static unknown: com.medallia.digital.mobilesdk.MDAppearanceMode;
          public static valueOf(param0: string): com.medallia.digital.mobilesdk.MDAppearanceMode;
          public static values(): androidNative.Array<com.medallia.digital.mobilesdk.MDAppearanceMode>;
          public static fromString(param0: string): com.medallia.digital.mobilesdk.MDAppearanceMode;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class MDCallback {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.MDCallback>;
          /**
           * Constructs a new instance of the com.medallia.digital.mobilesdk.MDCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onSuccess(param0: string): void; onError(param0: com.medallia.digital.mobilesdk.MDExternalError): void });
          public constructor();
          public onError(param0: com.medallia.digital.mobilesdk.MDExternalError): void;
          public onSuccess(param0: string): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export abstract class MDCustomInterceptListener {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.MDCustomInterceptListener>;
          public constructor();
          public onTargetEvaluationSuccess(param0: com.medallia.digital.mobilesdk.MDCustomInterceptListenerData): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class MDCustomInterceptListenerData {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.MDCustomInterceptListenerData>;
          public getFormPreloadTimestamp(): number;
          public getEngagementType(): com.medallia.digital.mobilesdk.MDEngagementType;
          public getCustomInterceptPayload(): com.medallia.digital.mobilesdk.MDCustomInterceptPayload;
          public constructor(param0: number, param1: number, param2: string, param3: com.medallia.digital.mobilesdk.MDEngagementType, param4: com.medallia.digital.mobilesdk.MDCustomInterceptPayload);
          public getEngagementId(): string;
          public getTargetingEvaluationTimestamp(): number;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class MDCustomInterceptPayload {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.MDCustomInterceptPayload>;
          public getTitleText(): string;
          public getSubtitleText(): string;
          public getDeferText(): string;
          public getProvideFeedbackText(): string;
          public toJsonString(): string;
          public getDeclineText(): string;
          public constructor(param0: com.medallia.digital.mobilesdk.MDCustomInterceptPayload);
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class MDEngagementType {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.MDEngagementType>;
          public static form: com.medallia.digital.mobilesdk.MDEngagementType;
          public static appRating: com.medallia.digital.mobilesdk.MDEngagementType;
          public static fromString(param0: string): com.medallia.digital.mobilesdk.MDEngagementType;
          public static valueOf(param0: string): com.medallia.digital.mobilesdk.MDEngagementType;
          public static values(): androidNative.Array<com.medallia.digital.mobilesdk.MDEngagementType>;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class MDExternalError extends com.medallia.digital.mobilesdk.MedalliaDigitalError {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.MDExternalError>;
          public constructor(param0: number, param1: string);
          public constructor(param0: com.medallia.digital.mobilesdk.MDExternalError.ExternalError);
        }
        export module MDExternalError {
          export class ExternalError {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.MDExternalError.ExternalError>;
            public static REQUEST_TIMEOUT: com.medallia.digital.mobilesdk.MDExternalError.ExternalError;
            public static NO_INTERNET_CONNECTION_AVAILABLE: com.medallia.digital.mobilesdk.MDExternalError.ExternalError;
            public static SERVER_COM_ERROR: com.medallia.digital.mobilesdk.MDExternalError.ExternalError;
            public static UNSPECIFIED_CONFIGURATION_ERROR_13: com.medallia.digital.mobilesdk.MDExternalError.ExternalError;
            public static UNSPECIFIED_CONFIGURATION_ERROR_14: com.medallia.digital.mobilesdk.MDExternalError.ExternalError;
            public static UNSPECIFIED_CONFIGURATION_ERROR_15: com.medallia.digital.mobilesdk.MDExternalError.ExternalError;
            public static UNSPECIFIED_CONFIGURATION_ERROR_16: com.medallia.digital.mobilesdk.MDExternalError.ExternalError;
            public static AUTHORIZATION_FAILED: com.medallia.digital.mobilesdk.MDExternalError.ExternalError;
            public static API_TOKEN_NOT_VALID: com.medallia.digital.mobilesdk.MDExternalError.ExternalError;
            public static APPLICATION_IS_NULL: com.medallia.digital.mobilesdk.MDExternalError.ExternalError;
            public static OS_VERSION_IS_NOT_SUPPORTED: com.medallia.digital.mobilesdk.MDExternalError.ExternalError;
            public static SDK_NOT_INITIALIZED: com.medallia.digital.mobilesdk.MDExternalError.ExternalError;
            public static SDK_INITIALIZATION_IN_PROGRESS: com.medallia.digital.mobilesdk.MDExternalError.ExternalError;
            public static SDK_IS_ALREADY_INITIALIZED: com.medallia.digital.mobilesdk.MDExternalError.ExternalError;
            public static APP_IS_IN_BG: com.medallia.digital.mobilesdk.MDExternalError.ExternalError;
            public static SDK_IS_KILLED: com.medallia.digital.mobilesdk.MDExternalError.ExternalError;
            public static SDK_WAS_STOPPED: com.medallia.digital.mobilesdk.MDExternalError.ExternalError;
            public static FORM_IS_NOT_AVAILABLE: com.medallia.digital.mobilesdk.MDExternalError.ExternalError;
            public static FORM_NOT_EXISTS_OR_NOT_PUBLISH: com.medallia.digital.mobilesdk.MDExternalError.ExternalError;
            public static FORM_IS_ALREADY_DISPLAYED: com.medallia.digital.mobilesdk.MDExternalError.ExternalError;
            public static FORM_DISPLAY_TIMEOUT: com.medallia.digital.mobilesdk.MDExternalError.ExternalError;
            public static FORM_INCORRECT_INVITATION_TYPE: com.medallia.digital.mobilesdk.MDExternalError.ExternalError;
            public static FORM_INVALID_ENGAGEMENT_ID: com.medallia.digital.mobilesdk.MDExternalError.ExternalError;
            public static TRANSLATION_INVALID_FORMAT: com.medallia.digital.mobilesdk.MDExternalError.ExternalError;
            public static TRANSLATION_FEATURE_IS_DISABLED: com.medallia.digital.mobilesdk.MDExternalError.ExternalError;
            public getMessage(): string;
            public getErrorCode(): number;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.MDExternalError.ExternalError;
            public toString(): string;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.MDExternalError.ExternalError>;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class MDFailureCallback {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.MDFailureCallback>;
          /**
           * Constructs a new instance of the com.medallia.digital.mobilesdk.MDFailureCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onError(param0: com.medallia.digital.mobilesdk.MDExternalError): void });
          public constructor();
          public onError(param0: com.medallia.digital.mobilesdk.MDExternalError): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export abstract class MDFeedbackListener {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.MDFeedbackListener>;
          public constructor();
          public onFeedbackSubmitted(param0: com.medallia.digital.mobilesdk.MDFeedbackListenerData): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class MDFeedbackListenerData {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.MDFeedbackListenerData>;
          public getTimestamp(): number;
          public getFeedbackPayload(): string;
          public constructor(param0: string, param1: number, param2: string, param3: string);
          public getEngagementId(): string;
          public getFeedbackClientCorrelationId(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export abstract class MDFormListener {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.MDFormListener>;
          public onFormSubmitted(param0: com.medallia.digital.mobilesdk.MDFormListenerData): void;
          public onFormClosed(param0: com.medallia.digital.mobilesdk.MDFormListenerData): void;
          public onFormThankYouPrompt(param0: com.medallia.digital.mobilesdk.MDFormListenerData): void;
          public constructor();
          public onFormDisplayed(param0: com.medallia.digital.mobilesdk.MDFormListenerData): void;
          public onFormDismissed(param0: com.medallia.digital.mobilesdk.MDFormListenerData): void;
          public onFormLinkSelected(param0: com.medallia.digital.mobilesdk.MDFormListenerData): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class MDFormListenerData {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.MDFormListenerData>;
          public constructor(param0: number, param1: string, param2: com.medallia.digital.mobilesdk.FormTriggerType, param3: com.medallia.digital.mobilesdk.MDAppearanceMode, param4: com.medallia.digital.mobilesdk.MDAppearanceMode);
          public constructor(param0: number, param1: string, param2: com.medallia.digital.mobilesdk.FormTriggerType);
          public getFormLocaleDisplay(): string;
          public getEngagementId(): string;
          public getUrl(): string;
          public constructor(param0: number, param1: string, param2: com.medallia.digital.mobilesdk.FormTriggerType, param3: string, param4: string, param5: com.medallia.digital.mobilesdk.MDAppearanceMode, param6: com.medallia.digital.mobilesdk.MDAppearanceMode);
          public getTimestamp(): number;
          public getFormLocaleSet(): string;
          public getFormHeaderAppearanceDisplay(): com.medallia.digital.mobilesdk.MDAppearanceMode;
          public isBlocked(): boolean;
          public constructor(param0: number, param1: string, param2: com.medallia.digital.mobilesdk.FormTriggerType, param3: string, param4: boolean);
          public getFormHeaderAppearanceSet(): com.medallia.digital.mobilesdk.MDAppearanceMode;
          public getFormTriggerType(): com.medallia.digital.mobilesdk.FormTriggerType;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class MDGifView {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.MDGifView>;
          public constructor(param0: globalAndroid.content.Context);
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          public onMeasure(param0: number, param1: number): void;
          public onDraw(param0: globalAndroid.graphics.Canvas): void;
          public onScreenStateChanged(param0: number): void;
          public onWindowVisibilityChanged(param0: number): void;
          public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
          public setGifImageUri(param0: globalAndroid.net.Uri): void;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
          public onVisibilityChanged(param0: globalAndroid.view.View, param1: number): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class MDInterceptActionType {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.MDInterceptActionType>;
          public static accepted: com.medallia.digital.mobilesdk.MDInterceptActionType;
          public static declined: com.medallia.digital.mobilesdk.MDInterceptActionType;
          public static skipped: com.medallia.digital.mobilesdk.MDInterceptActionType;
          public static deferred: com.medallia.digital.mobilesdk.MDInterceptActionType;
          public static valueOf(param0: string): com.medallia.digital.mobilesdk.MDInterceptActionType;
          public static values(): androidNative.Array<com.medallia.digital.mobilesdk.MDInterceptActionType>;
          public static fromString(param0: string): com.medallia.digital.mobilesdk.MDInterceptActionType;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export abstract class MDInterceptListener {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.MDInterceptListener>;
          public onInterceptDisplayed(param0: com.medallia.digital.mobilesdk.MDInterceptListenerData): void;
          public onInterceptAccepted(param0: com.medallia.digital.mobilesdk.MDInterceptListenerData): void;
          public constructor();
          public onInterceptTriggerInAppReview(param0: com.medallia.digital.mobilesdk.MDInterceptListenerData): void;
          public onInterceptDeclined(param0: com.medallia.digital.mobilesdk.MDInterceptListenerData): void;
          public onInterceptDeferred(param0: com.medallia.digital.mobilesdk.MDInterceptListenerData): void;
          public onInterceptClosed(param0: com.medallia.digital.mobilesdk.MDInterceptListenerData): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class MDInterceptListenerData {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.MDInterceptListenerData>;
          public getReason(): string;
          public getTimestamp(): number;
          public getInterceptAppearanceDisplay(): com.medallia.digital.mobilesdk.MDAppearanceMode;
          public constructor(param0: number, param1: string);
          public constructor(param0: number, param1: string, param2: com.medallia.digital.mobilesdk.MDEngagementType, param3: com.medallia.digital.mobilesdk.MDAppearanceMode, param4: com.medallia.digital.mobilesdk.MDAppearanceMode);
          public getEngagementType(): com.medallia.digital.mobilesdk.MDEngagementType;
          public getInterceptAppearanceSet(): com.medallia.digital.mobilesdk.MDAppearanceMode;
          public getEngagementId(): string;
          public constructor(param0: number, param1: string, param2: com.medallia.digital.mobilesdk.MDEngagementType);
          public constructor(param0: number, param1: string, param2: string, param3: com.medallia.digital.mobilesdk.MDEngagementType);
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class MDLogLevel {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.MDLogLevel>;
          public static OFF: com.medallia.digital.mobilesdk.MDLogLevel;
          public static FATAL: com.medallia.digital.mobilesdk.MDLogLevel;
          public static ERROR: com.medallia.digital.mobilesdk.MDLogLevel;
          public static WARN: com.medallia.digital.mobilesdk.MDLogLevel;
          public static INFO: com.medallia.digital.mobilesdk.MDLogLevel;
          public static DEBUG: com.medallia.digital.mobilesdk.MDLogLevel;
          public static valueOf(param0: string): com.medallia.digital.mobilesdk.MDLogLevel;
          public static values(): androidNative.Array<com.medallia.digital.mobilesdk.MDLogLevel>;
          public getLevel(): number;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class MDResultCallback {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.MDResultCallback>;
          /**
           * Constructs a new instance of the com.medallia.digital.mobilesdk.MDResultCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onSuccess(): void; onError(param0: com.medallia.digital.mobilesdk.MDExternalError): void });
          public constructor();
          public onError(param0: com.medallia.digital.mobilesdk.MDExternalError): void;
          public onSuccess(): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class MDSdkFrameworkType {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.MDSdkFrameworkType>;
          public static RN: com.medallia.digital.mobilesdk.MDSdkFrameworkType;
          public static CORDOVA: com.medallia.digital.mobilesdk.MDSdkFrameworkType;
          public static Native: com.medallia.digital.mobilesdk.MDSdkFrameworkType;
          public static valueOf(param0: string): com.medallia.digital.mobilesdk.MDSdkFrameworkType;
          public static values(): androidNative.Array<com.medallia.digital.mobilesdk.MDSdkFrameworkType>;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class MedalliaDigital {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.MedalliaDigital>;
          public static setUserId(param0: string): void;
          public static setCustomParameter(param0: string, param1: any): void;
          public static updateCustomLocale(param0: string, param1: com.medallia.digital.mobilesdk.MDCallback): void;
          public static handleNotification(param0: string, param1: com.medallia.digital.mobilesdk.MDResultCallback): void;
          public static setFeedbackListener(param0: com.medallia.digital.mobilesdk.MDFeedbackListener): void;
          public constructor();
          public static init(param0: globalAndroid.app.Application, param1: string, param2: com.medallia.digital.mobilesdk.MDResultCallback): void;
          public static setSdkFramework(param0: com.medallia.digital.mobilesdk.MDSdkFrameworkType): void;
          public static showForm(param0: string, param1: com.medallia.digital.mobilesdk.MDResultCallback): void;
          public static getMedalliaDigitalBrain(): com.medallia.digital.mobilesdk.k4;
          public static disableIntercept(): void;
          public static setLogLevel(param0: com.medallia.digital.mobilesdk.MDLogLevel): void;
          public static stopSDK(param0: boolean): void;
          public static setActivity(param0: globalAndroid.app.Activity): void;
          public static setCustomInterceptListener(param0: com.medallia.digital.mobilesdk.MDCustomInterceptListener): void;
          public static enableIntercept(): void;
          public static setCustomParameters(param0: java.util.HashMap<string, any>): void;
          public static customInterceptTrigger(param0: string, param1: com.medallia.digital.mobilesdk.MDInterceptActionType, param2: com.medallia.digital.mobilesdk.MDFailureCallback): void;
          public static setCustomAppearance(param0: com.medallia.digital.mobilesdk.MDAppearanceMode): void;
          public static initMedalliaDigitalBrainIfNecessary(): void;
          public static revertStopSDK(): void;
          public static setFormListener(param0: com.medallia.digital.mobilesdk.MDFormListener): void;
          public static closeEngagement(param0: com.medallia.digital.mobilesdk.MDResultCallback): void;
          public static updateBrainOnMigration(): void;
          public static setInterceptListener(param0: com.medallia.digital.mobilesdk.MDInterceptListener): void;
          public static setDebugForm(param0: boolean): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class MedalliaDigitalBrainConfigurationContract extends com.medallia.digital.mobilesdk.i0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.MedalliaDigitalBrainConfigurationContract>;
          public isDistinct(): boolean;
          public isRequestMediaCapturePermissions(): boolean;
          public toJsonString(): string;
          public getMaxUserJourneyEventsSize(): number;
          public isCanBlockAfterOneSuccess(): boolean;
          public isBlackBoxEnabled(): boolean;
          public isEvaluateWithConfigurationFile(): boolean;
          public getFormDisplayTimeout(): java.lang.Long;
          public getSessionInactivityTime(): java.lang.Long;
          public getOfflineConfigurationExpirationTime(): java.lang.Long;
          public isTREV2Enabled(): boolean;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class MedalliaDigitalClientConfigurationContract extends com.medallia.digital.mobilesdk.i0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.MedalliaDigitalClientConfigurationContract>;
          public getQuarantineValidationEndpoint(): string;
          public getBlockNetworkInForm(): java.lang.Boolean;
          public getAccessTokenValidationBufferTime(): number;
          public toJsonString(): string;
          public getHttpRequestTimeout(): java.lang.Integer;
          public getMaxHttpRequestRetryAttempts(): java.lang.Integer;
          public getSubmitUrlPrefix(): string;
          public getAnalyticsEndPoint(): string;
          public getMediaCaptureConfiguration(): com.medallia.digital.mobilesdk.s4;
          public getOcqCUuidUrlPrefix(): string;
          public getGetConfigEndPoint(): string;
          public getMaxAuthRetryAttempts(): java.lang.Integer;
          public getSubmitUrlSuffix(): string;
          public isAnalyticsEnabled(): java.lang.Boolean;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export abstract class MedalliaDigitalError {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.MedalliaDigitalError>;
          public getErrorCode(): number;
          public constructor(param0: number, param1: string);
          public getMessage(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class MedalliaExceptionHandler {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.MedalliaExceptionHandler>;
          public static CRASHES_FOLDER: string;
          public static FILE_PATH: string;
          public register(): void;
          public updateFilePath(param0: globalAndroid.content.Context): void;
          public unregister(): void;
          public uncaughtException(param0: java.lang.Thread, param1: java.lang.Throwable): void;
          public isRegistered(): boolean;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class MedalliaFullFormActivity extends com.medallia.digital.mobilesdk.g0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.MedalliaFullFormActivity>;
          public onClose(): void;
          public constructor();
          public onReady(): void;
          public b(): void;
          public f(): void;
          public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
          public mediaCaptureResult(param0: string): void;
          public a(): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class MedalliaModalFormActivity extends com.medallia.digital.mobilesdk.g0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.MedalliaModalFormActivity>;
          public onClose(): void;
          public constructor();
          public onReady(): void;
          public b(): void;
          public f(): void;
          public mediaCaptureResult(param0: string): void;
          public a(): void;
        }
        export module MedalliaModalFormActivity {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.MedalliaModalFormActivity.a>;
            public onClick(param0: globalAndroid.view.View): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class MedalliaWebView implements com.medallia.digital.mobilesdk.m2 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.MedalliaWebView>;
          public static JS_COMMUNICATOR_NAME: string;
          public static DEFAULT_FORM_FONT_ZOOM: number;
          public getFormData(): com.medallia.digital.mobilesdk.n2;
          public onClose(): void;
          public setConfiguration(param0: com.medallia.digital.mobilesdk.ConfigurationContract): void;
          public clearAndDestroy(): void;
          public getWebViewType(): com.medallia.digital.mobilesdk.MedalliaWebView.f;
          public setFormCommunicatorListener(param0: com.medallia.digital.mobilesdk.m2): void;
          public reloadWebView(): void;
          public getLoadingTime(): number;
          public isRenderFinished(): boolean;
          public load(param0: com.medallia.digital.mobilesdk.MedalliaWebView.e): void;
          public isPreload(): boolean;
          public constructor(param0: globalAndroid.content.Context, param1: boolean, param2: com.medallia.digital.mobilesdk.s2, param3: com.medallia.digital.mobilesdk.MedalliaWebView.f, param4: com.medallia.digital.mobilesdk.n2, param5: number, param6: com.medallia.digital.mobilesdk.s4, param7: boolean, param8: boolean, param9: number, param10: number);
          public getTextZoomFontSize(): number;
          public getFormCommunicator(): com.medallia.digital.mobilesdk.BaseFormCommunicator;
          public getWebViewId(): number;
          public getLoadedFormId(): string;
          public onReady(): void;
          public setLoadingListener(param0: com.medallia.digital.mobilesdk.MedalliaWebView.e): void;
          public constructor(param0: globalAndroid.content.Context, param1: com.medallia.digital.mobilesdk.MedalliaWebView.f, param2: com.medallia.digital.mobilesdk.n2, param3: number);
          public setType(param0: com.medallia.digital.mobilesdk.MedalliaWebView.f): void;
          public mediaCaptureResult(param0: string): void;
        }
        export module MedalliaWebView {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.MedalliaWebView.a>;
            public run(): void;
          }
          export class b extends com.medallia.digital.mobilesdk.p4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.MedalliaWebView.b>;
            public onPageFinished(param0: globalAndroid.webkit.WebView, param1: string): void;
          }
          export class c {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.MedalliaWebView.c>;
            public onConsoleMessage(param0: globalAndroid.webkit.ConsoleMessage): boolean;
          }
          export class d extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.MedalliaWebView.d>;
            public a(): void;
          }
          export class e {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.MedalliaWebView.e>;
            /**
             * Constructs a new instance of the com.medallia.digital.mobilesdk.MedalliaWebView$e interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { a(): void; b(): void });
            public constructor();
            public a(): void;
            public b(): void;
          }
          export class f {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.MedalliaWebView.f>;
            public static a: com.medallia.digital.mobilesdk.MedalliaWebView.f;
            public static b: com.medallia.digital.mobilesdk.MedalliaWebView.f;
            public static c: com.medallia.digital.mobilesdk.MedalliaWebView.f;
            public static d: com.medallia.digital.mobilesdk.MedalliaWebView.f;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.MedalliaWebView.f>;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.MedalliaWebView.f;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class ModelFactory {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.ModelFactory>;
          public getResourcesAsJsonString(param0: java.util.List<com.medallia.digital.mobilesdk.ResourceContract>): string;
          public getRuleConversionContract(param0: org.json.JSONArray): java.util.ArrayList<com.medallia.digital.mobilesdk.f6>;
          public getStringArray(param0: org.json.JSONArray): java.util.ArrayList<string>;
          public createApiToken(param0: string): com.medallia.digital.mobilesdk.n;
          public createQuarantineValidation(param0: string): com.medallia.digital.mobilesdk.v5;
          public createTargetRuleEngine(param0: string): com.medallia.digital.mobilesdk.TargetRuleEngineContract;
          public getStringThemeMap(param0: org.json.JSONObject): java.util.HashMap<string, com.medallia.digital.mobilesdk.h7>;
          public getComponentsArray(param0: org.json.JSONArray): java.util.ArrayList<com.medallia.digital.mobilesdk.Component>;
          public getContractArray(param0: string, param1: org.json.JSONArray): java.util.ArrayList<any>;
          public rulesAsJsoString(param0: java.util.List<com.medallia.digital.mobilesdk.w5>): string;
          public getStringArrayAsJsonString(param0: java.util.ArrayList<string>): string;
          public getThemesMapAsJsonString(param0: java.util.HashMap<string, com.medallia.digital.mobilesdk.h7>): string;
          public getCUuid(param0: string): string;
          public customParametersToJsonArray(param0: java.util.ArrayList<com.medallia.digital.mobilesdk.CustomParameter>): org.json.JSONArray;
          public getContractsAsJsonString(param0: java.util.List<any>): string;
          public getResourcesArray(param0: org.json.JSONArray): java.util.List<com.medallia.digital.mobilesdk.ResourceContract>;
          public static getInstance(): com.medallia.digital.mobilesdk.ModelFactory;
          public getStringBooleanMap(param0: org.json.JSONObject): java.util.HashMap<string, java.lang.Boolean>;
          public createPropertyConfiguration(param0: string): com.medallia.digital.mobilesdk.PropertyConfigurationContract;
          public getTriggerChildContract(param0: org.json.JSONObject): com.medallia.digital.mobilesdk.r7<any>;
          public getCustomParameterArray(param0: org.json.JSONArray): java.util.ArrayList<com.medallia.digital.mobilesdk.CustomParameter>;
          public getFormsAsJsonString(param0: java.util.List<com.medallia.digital.mobilesdk.SDKConfigurationFormContract>): string;
          public createFeedbackContract(param0: string): com.medallia.digital.mobilesdk.f2;
          public getStringMapAsJsonString(param0: java.util.HashMap<string, string>): string;
          public getTriggerChildesContract(param0: org.json.JSONArray): java.util.ArrayList<any>;
          public getRuleConversionsAsJsonString(param0: java.util.List<com.medallia.digital.mobilesdk.f6>): string;
          public getProvisionsAsJsonString(param0: java.util.HashMap<string, java.lang.Boolean>): string;
          public createTransitionType(param0: string): com.medallia.digital.mobilesdk.p7;
          public getAppRatingsAsJsonString(param0: java.util.List<com.medallia.digital.mobilesdk.AppRatingContract>): string;
          public createConfiguration(param0: string): com.medallia.digital.mobilesdk.ConfigurationContract;
          public createEvaluationResult(param0: string): com.medallia.digital.mobilesdk.EvaluationResult;
          public getStringMap(param0: org.json.JSONObject): java.util.HashMap<string, string>;
          public getPageArray(param0: org.json.JSONArray): java.util.ArrayList<com.medallia.digital.mobilesdk.i5>;
          public getAnalyticsAsJsonString(param0: java.util.List<com.medallia.digital.mobilesdk.i>): string;
          public createUUID(param0: string): com.medallia.digital.mobilesdk.ConfigurationUUID;
          public createAccessToken(param0: string): com.medallia.digital.mobilesdk.b;
          public getAppRatingContractsArray(param0: org.json.JSONArray): java.util.List<com.medallia.digital.mobilesdk.AppRatingContract>;
          public createFeedback(param0: string): com.medallia.digital.mobilesdk.e2;
          public createThankYouDataObject(param0: string): com.medallia.digital.mobilesdk.e7;
          public getRulesArray(param0: org.json.JSONArray): java.util.ArrayList<com.medallia.digital.mobilesdk.w5>;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class PropertyConfigurationContract extends com.medallia.digital.mobilesdk.a<com.medallia.digital.mobilesdk.SDKConfigurationFormContract> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.PropertyConfigurationContract>;
          public getOmniChannelRulesIds(): java.util.ArrayList<string>;
          public getThemes(): java.util.HashMap<string, com.medallia.digital.mobilesdk.h7>;
          public constructor();
          public toJsonString(): string;
          public constructor(param0: string, param1: string, param2: java.util.List<com.medallia.digital.mobilesdk.ResourceContract>, param3: java.util.List<any>, param4: java.util.HashMap<string, java.lang.Boolean>, param5: java.util.List<com.medallia.digital.mobilesdk.AppRatingContract>);
          public isOCQEnabled(): boolean;
          public constructor(param0: string, param1: string, param2: java.util.List<com.medallia.digital.mobilesdk.ResourceContract>, param3: java.util.List<com.medallia.digital.mobilesdk.SDKConfigurationFormContract>, param4: java.util.HashMap<string, java.lang.Boolean>, param5: java.util.List<com.medallia.digital.mobilesdk.AppRatingContract>, param6: java.util.HashMap<string, com.medallia.digital.mobilesdk.h7>);
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class Reason {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.Reason>;
          public static formOpened: com.medallia.digital.mobilesdk.Reason;
          public static invitationOpened: com.medallia.digital.mobilesdk.Reason;
          public static interceptDisabled: com.medallia.digital.mobilesdk.Reason;
          public static formStatusNotAvailable: com.medallia.digital.mobilesdk.Reason;
          public static inviteDataMissing: com.medallia.digital.mobilesdk.Reason;
          public static formInBackground: com.medallia.digital.mobilesdk.Reason;
          public static thankYouPromptOpened: com.medallia.digital.mobilesdk.Reason;
          public static values(): androidNative.Array<com.medallia.digital.mobilesdk.Reason>;
          public static valueOf(param0: string): com.medallia.digital.mobilesdk.Reason;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class ResourceContract extends com.medallia.digital.mobilesdk.e0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.ResourceContract>;
          public getFormId(): string;
          public getDataTableObjectType(): com.medallia.digital.mobilesdk.e0.a;
          public toJsonString(): string;
          public constructor(param0: string, param1: string, param2: string, param3: string, param4: boolean);
          public getRemoteUrl(): string;
          public getLocalUrl(): string;
          public getChecksum(): string;
          public setFormId(param0: string): void;
          public equals(param0: any): boolean;
          public constructor(param0: string, param1: string, param2: string, param3: string);
          public constructor();
          public setGlobal(param0: java.lang.Boolean): void;
          public isGlobal(): java.lang.Boolean;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class RetryMechanismWorker {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.RetryMechanismWorker>;
          public doWork(): androidx.work.ListenableWorker.Result;
          public a(): androidx.work.ListenableWorker.Result;
          public constructor(param0: globalAndroid.content.Context, param1: androidx.work.WorkerParameters);
        }
        export module RetryMechanismWorker {
          export class a extends com.medallia.digital.mobilesdk.d6<string> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.RetryMechanismWorker.a>;
            public a(param0: string): void;
            public a(param0: com.medallia.digital.mobilesdk.g4): void;
            public a(param0: any): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class SDKConfigurationContract extends com.medallia.digital.mobilesdk.i0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.SDKConfigurationContract>;
          public constructor();
          public getMedalliaDigitalBrain(): com.medallia.digital.mobilesdk.MedalliaDigitalBrainConfigurationContract;
          public toJsonString(): string;
          public getMedalliaDigitalClientConfig(): com.medallia.digital.mobilesdk.MedalliaDigitalClientConfigurationContract;
          public getFeatures(): org.json.JSONObject;
          public getFormConfigurations(): com.medallia.digital.mobilesdk.FormConfigurations;
          public getCollectorsConfigurations(): com.medallia.digital.mobilesdk.CollectorsConfigurationContract;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class SDKConfigurationFormContract extends com.medallia.digital.mobilesdk.EngagementContract {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.SDKConfigurationFormContract>;
          public getFormType(): com.medallia.digital.mobilesdk.FormTriggerType;
          public getTitle(): string;
          public getFormJson(): org.json.JSONObject;
          public setTemplateLocalUrl(param0: string): void;
          public constructor();
          public getTitleBackgroundColor(): string;
          public constructor(param0: string, param1: string, param2: string, param3: string, param4: org.json.JSONObject, param5: java.util.List<com.medallia.digital.mobilesdk.ResourceContract>, param6: com.medallia.digital.mobilesdk.InviteData, param7: org.json.JSONObject, param8: string, param9: com.medallia.digital.mobilesdk.FormTriggerType, param10: string, param11: string, param12: string, param13: com.medallia.digital.mobilesdk.FormViewType, param14: string, param15: boolean, param16: boolean, param17: string);
          public getTemplateDebugRemoteUrl(): string;
          public hashCode(): number;
          public getFormViewType(): com.medallia.digital.mobilesdk.FormViewType;
          public getTitleTextColor(): string;
          public getFormId(): string;
          public getCustomParams(): string;
          public isPoweredByVisible(): boolean;
          public toJsonString(): string;
          public setFormLanguage(param0: string): string;
          public getHeaderThemeName(): string;
          public isPreloaded(): boolean;
          public getTemplateRemoteUrl(): string;
          public getTemplateLocalUrl(): string;
          public isDarkModeEnabled(): boolean;
          public equals(param0: any): boolean;
          public getFormLanguage(): string;
          public getUrlVersion(): string;
          public getResources(): java.util.List<com.medallia.digital.mobilesdk.ResourceContract>;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class SubmitMediaFeedbackWorker {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.SubmitMediaFeedbackWorker>;
          public a(param0: com.medallia.digital.mobilesdk.k8): void;
          public b(param0: com.medallia.digital.mobilesdk.k8): boolean;
          public doWork(): androidx.work.ListenableWorker.Result;
          public c(): androidx.work.ListenableWorker.Result;
          public constructor(param0: globalAndroid.content.Context, param1: androidx.work.WorkerParameters);
        }
        export module SubmitMediaFeedbackWorker {
          export class a extends com.medallia.digital.mobilesdk.d6<string> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.SubmitMediaFeedbackWorker.a>;
            public a(param0: string): void;
            public a(param0: com.medallia.digital.mobilesdk.g4): void;
            public a(param0: any): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class TargetRuleEngineContract extends com.medallia.digital.mobilesdk.i0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.TargetRuleEngineContract>;
          public constructor(param0: string, param1: string);
          public getVersion(): string;
          public getUrl(): string;
          public constructor();
          public constructor(param0: org.json.JSONObject);
          public toJsonString(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class ThanksButton {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.ThanksButton>;
          public constructor(param0: globalAndroid.content.Context);
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class ValueType {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.ValueType>;
          public static TypeString: com.medallia.digital.mobilesdk.ValueType;
          public static TypeInteger: com.medallia.digital.mobilesdk.ValueType;
          public static TypeDouble: com.medallia.digital.mobilesdk.ValueType;
          public static TypeLong: com.medallia.digital.mobilesdk.ValueType;
          public static TypeBoolean: com.medallia.digital.mobilesdk.ValueType;
          public static valueOf(param0: string): com.medallia.digital.mobilesdk.ValueType;
          public static values(): androidNative.Array<com.medallia.digital.mobilesdk.ValueType>;
          public static fromString(param0: string): com.medallia.digital.mobilesdk.ValueType;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export abstract class a<T> extends com.medallia.digital.mobilesdk.i0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.a<any>>;
          public getGlobalResources(): java.util.List<com.medallia.digital.mobilesdk.ResourceContract>;
          public getForms(): java.util.List<any>;
          public isNewLiveFormEnable(): boolean;
          public getPreloadFormJsonFileLocalUrl(): string;
          public setForms(param0: java.util.List<any>): void;
          public isLocalizationEnable(): boolean;
          public constructor();
          public getFormJsonFileLocalUrl(): string;
          public getAppRatings(): java.util.List<com.medallia.digital.mobilesdk.AppRatingContract>;
          public constructor(param0: string, param1: string, param2: java.util.List<com.medallia.digital.mobilesdk.ResourceContract>, param3: java.util.List<any>, param4: java.util.HashMap<string, java.lang.Boolean>, param5: java.util.List<com.medallia.digital.mobilesdk.AppRatingContract>);
          public getProvisions(): java.util.HashMap<string, java.lang.Boolean>;
          public getGlobalConfigurationFileLocalUrl(): string;
          public getFormFileLocationQueryParam(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class a0 extends com.medallia.digital.mobilesdk.d0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.a0>;
        }
        export module a0 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.a0.a>;
            public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class a1 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.a1>;
          public static a(param0: com.medallia.digital.mobilesdk.ConfigurationContract): boolean;
          public static a(param0: string): java.util.List<globalAndroid.util.Pair<string, java.lang.Boolean>>;
          public static a(param0: string, param1: boolean): java.util.List<globalAndroid.util.Pair<string, java.lang.Boolean>>;
          public static c(): java.io.File;
          public static a(param0: boolean): java.util.List<globalAndroid.util.Pair<string, java.lang.Boolean>>;
          public static b(param0: string): globalAndroid.util.Pair<string, java.lang.Boolean>;
          public static a(): java.util.List<globalAndroid.util.Pair<string, java.lang.Boolean>>;
          public static b(): globalAndroid.util.Pair<string, java.lang.Boolean>;
          public static d(): java.io.File;
          public static a(param0: java.io.File): com.medallia.digital.mobilesdk.ConfigurationContract;
          public static a(param0: java.io.File, param1: com.medallia.digital.mobilesdk.ConfigurationContract): boolean;
        }
        export module a1 {
          export class a extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.a1.a>;
            public a(): void;
          }
          export class b extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.a1.b>;
            public a(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export abstract class a2<T> extends com.medallia.digital.mobilesdk.r0<any> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.a2<any>>;
          public f: com.medallia.digital.mobilesdk.t0;
          public a(param0: com.medallia.digital.mobilesdk.t0): void;
          public m(): void;
          public k(): void;
          public a(): com.medallia.digital.mobilesdk.s0;
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public a(param0: com.medallia.digital.mobilesdk.Lifetime): void;
          public j(): any;
          public l(): void;
          public a(param0: boolean): void;
          public a(param0: any): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class a3 extends com.medallia.digital.mobilesdk.z7 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.a3>;
          public b(): com.medallia.digital.mobilesdk.n;
          public a(param0: com.medallia.digital.mobilesdk.n): void;
          public clearAndDisconnect(): void;
          public static c(): com.medallia.digital.mobilesdk.a3;
          public a(param0: string): com.medallia.digital.mobilesdk.g4.a;
          public a(param0: com.medallia.digital.mobilesdk.b): void;
          public a(): com.medallia.digital.mobilesdk.b;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class a4 extends com.medallia.digital.mobilesdk.z7 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.a4>;
          public static d(param0: string): void;
          public static e(param0: string): void;
          public a(param0: com.medallia.digital.mobilesdk.a4.b): void;
          public static c(param0: string): void;
          public clearAndDisconnect(): void;
          public static f(param0: string): void;
          public a(param0: com.medallia.digital.mobilesdk.MDLogLevel): void;
          public static a(param0: string): void;
          public static a(): com.medallia.digital.mobilesdk.a4;
          public static b(param0: string): void;
        }
        export module a4 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.a4.a>;
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.a4.b>;
            /**
             * Constructs a new instance of the com.medallia.digital.mobilesdk.a4$b interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { a(param0: string): void });
            public constructor();
            public a(param0: string): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class a5 extends com.medallia.digital.mobilesdk.n5<string> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.a5>;
          public constructor(param0: com.medallia.digital.mobilesdk.m5, param1: com.medallia.digital.mobilesdk.s0);
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public r(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class a6 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.a6>;
          public a(): androidNative.Array<number>;
          public b(): string;
          public constructor(param0: number, param1: string);
          public c(): number;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class a7 extends java.lang.Object {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.a7>;
          public d: boolean;
          public e: com.medallia.digital.mobilesdk.y6;
          public f: boolean;
          public g: boolean;
          public b(param0: com.medallia.digital.mobilesdk.y1.b): void;
          public onForeground(): void;
          public onBackground(): void;
          public clearAndDisconnect(): void;
          public a(param0: com.medallia.digital.mobilesdk.ConfigurationContract): void;
          public a(param0: com.medallia.digital.mobilesdk.y1.b): void;
          public b(param0: boolean): void;
          public b(): java.util.ArrayList<com.medallia.digital.mobilesdk.x1>;
          public a(param0: any): void;
          public constructor();
          public a(param0: boolean, param1: boolean): void;
          public c(): boolean;
          public a(): com.medallia.digital.mobilesdk.v6;
          public c(param0: boolean): void;
          public a(param0: boolean): void;
        }
        export module a7 {
          export class a extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.a7.a>;
            public a(): void;
          }
          export module a {
            export class a extends com.medallia.digital.mobilesdk.n4 {
              public static class: java.lang.Class<com.medallia.digital.mobilesdk.a7.a.a>;
              public a(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class a8 extends com.medallia.digital.mobilesdk.p0<string> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.a8>;
          public a(param0: com.medallia.digital.mobilesdk.y5): com.medallia.digital.mobilesdk.g4;
          public b(param0: com.medallia.digital.mobilesdk.y5): void;
          public d(): com.medallia.digital.mobilesdk.g4;
          public b(): void;
          public a(param0: boolean): void;
          public a(): void;
        }
        export module a8 {
          export class a extends com.medallia.digital.mobilesdk.e6.a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.a8.a>;
            public a(param0: com.medallia.digital.mobilesdk.a6): void;
            public a(param0: com.medallia.digital.mobilesdk.y5): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class b extends com.medallia.digital.mobilesdk.m3 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.b>;
          public b(): number;
          public c(): string;
          public constructor(param0: string);
          public a(param0: string): void;
          public a(): string;
          public constructor(param0: string, param1: string, param2: number, param3: number, param4: number);
          public d(): number;
          public a(param0: number): void;
          public e(): number;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class b0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.b0>;
          public a(param0: globalAndroid.content.Context, param1: string): com.medallia.digital.mobilesdk.d0;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class b1 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.b1>;
          public static d: string;
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class b2 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.b2>;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class b3 extends com.medallia.digital.mobilesdk.d2<java.lang.Boolean> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.b3>;
          public a(): com.medallia.digital.mobilesdk.s0;
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public a(param0: java.lang.Boolean): void;
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public a(param0: com.medallia.digital.mobilesdk.Lifetime): void;
          public a(param0: boolean): void;
          public a(param0: any): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class b4 extends com.medallia.digital.mobilesdk.h0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.b4>;
          public c(): globalAndroid.content.BroadcastReceiver;
          public a(): string;
          public a(param0: any): void;
          public b(): any;
        }
        export module b4 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.b4.a>;
            public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
          }
          export class b extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.b4.b>;
            public a(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class b5 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.b5>;
          public static a: string;
          public static b: string;
          public static c: number;
          public static d: number;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class b6 extends com.medallia.digital.mobilesdk.k1<com.medallia.digital.mobilesdk.ResourceContract> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.b6>;
          public a(param0: com.medallia.digital.mobilesdk.ResourceContract): boolean;
          public b(param0: com.medallia.digital.mobilesdk.ResourceContract): globalAndroid.content.ContentValues;
          public c(param0: androidNative.Array<any>): java.util.ArrayList<any>;
          public e(): string;
          public c(param0: com.medallia.digital.mobilesdk.ResourceContract): boolean;
          public c(param0: androidNative.Array<any>): java.util.ArrayList<com.medallia.digital.mobilesdk.ResourceContract>;
          public a(param0: androidNative.Array<any>): boolean;
          public d(): java.util.HashMap<string, string>;
          public a(param0: string): java.util.ArrayList<com.medallia.digital.mobilesdk.ResourceContract>;
          public b(param0: androidNative.Array<any>): any;
          public c(): number;
          public a(param0: boolean, param1: string): void;
          public d(param0: androidNative.Array<any>): com.medallia.digital.mobilesdk.ResourceContract;
          public b(param0: any): globalAndroid.content.ContentValues;
          public constructor();
          public d(param0: com.medallia.digital.mobilesdk.ResourceContract): boolean;
          public b(): boolean;
          public d(param0: any): boolean;
          public a(param0: any): boolean;
          public c(param0: any): boolean;
        }
        export module b6 {
          export class a extends java.util.HashMap<string, string> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.b6.a>;
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.b6.b>;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class b7 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.b7>;
          public c(param0: com.medallia.digital.mobilesdk.y6): com.medallia.digital.mobilesdk.EvaluationResult;
          public b(param0: com.medallia.digital.mobilesdk.y6): com.medallia.digital.mobilesdk.EvaluationResult;
          public a(param0: com.medallia.digital.mobilesdk.y6): com.medallia.digital.mobilesdk.EvaluationResult;
          public d(param0: com.medallia.digital.mobilesdk.y6): boolean;
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class b8 extends com.medallia.digital.mobilesdk.d2<string> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.b8>;
          public a(): com.medallia.digital.mobilesdk.s0;
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public a(param0: string): void;
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public a(param0: com.medallia.digital.mobilesdk.Lifetime): void;
          public a(param0: boolean): void;
          public a(param0: any): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class c {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.c>;
          public static a(param0: string): boolean;
          public static a(param0: string, param1: com.medallia.digital.mobilesdk.MDResultCallback): void;
          public static c(param0: string, param1: com.medallia.digital.mobilesdk.n, param2: com.medallia.digital.mobilesdk.n, param3: com.medallia.digital.mobilesdk.MDResultCallback): void;
          public static a(param0: string, param1: com.medallia.digital.mobilesdk.n, param2: com.medallia.digital.mobilesdk.n, param3: com.medallia.digital.mobilesdk.MDResultCallback): void;
        }
        export module c {
          export class a extends com.medallia.digital.mobilesdk.d6<com.medallia.digital.mobilesdk.z0> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.c.a>;
            public a(param0: com.medallia.digital.mobilesdk.z0): void;
            public a(param0: com.medallia.digital.mobilesdk.g4): void;
            public a(param0: any): void;
          }
          export class b extends com.medallia.digital.mobilesdk.j2.b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.c.b>;
            public a(): void;
            public onSuccess(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class c0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.c0>;
          public constructor(param0: globalAndroid.content.Context, param1: number, param2: string, param3: string, param4: string, param5: string, param6: string, param7: globalAndroid.content.DialogInterface.OnClickListener, param8: globalAndroid.content.DialogInterface.OnClickListener, param9: globalAndroid.content.DialogInterface.OnClickListener, param10: globalAndroid.content.DialogInterface.OnCancelListener);
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class c1 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.c1>;
          /**
           * Constructs a new instance of the com.medallia.digital.mobilesdk.c1 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { toJsonString(): string });
          public constructor();
          public toJsonString(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class c2 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.c2>;
          public E(): com.medallia.digital.mobilesdk.b2;
          public D(): com.medallia.digital.mobilesdk.b2;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class c3 extends com.medallia.digital.mobilesdk.d2<java.lang.Boolean> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.c3>;
          public a(): com.medallia.digital.mobilesdk.s0;
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public a(param0: java.lang.Boolean): void;
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public a(param0: com.medallia.digital.mobilesdk.Lifetime): void;
          public a(param0: boolean): void;
          public a(param0: any): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class c4 extends com.medallia.digital.mobilesdk.h0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.c4>;
          public c(): globalAndroid.content.BroadcastReceiver;
          public a(): string;
          public a(param0: any): void;
          public b(): any;
        }
        export module c4 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.c4.a>;
            public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class c5 extends com.medallia.digital.mobilesdk.n5<string> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.c5>;
          public constructor(param0: com.medallia.digital.mobilesdk.m5, param1: com.medallia.digital.mobilesdk.s0);
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public r(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class c6 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.c6>;
          public a: com.medallia.digital.mobilesdk.c6.b;
          public constructor(param0: java.util.List<com.medallia.digital.mobilesdk.ResourceContract>, param1: com.medallia.digital.mobilesdk.c6.b);
          public constructor(param0: java.util.List<com.medallia.digital.mobilesdk.ResourceContract>, param1: boolean, param2: com.medallia.digital.mobilesdk.c6.b);
        }
        export module c6 {
          export class a extends com.medallia.digital.mobilesdk.d6<java.io.File> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.c6.a>;
            public a(param0: java.io.File): void;
            public a(param0: com.medallia.digital.mobilesdk.g4): void;
            public a(param0: any): void;
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.c6.b>;
            /**
             * Constructs a new instance of the com.medallia.digital.mobilesdk.c6$b interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { a(param0: com.medallia.digital.mobilesdk.ResourceContract): void; b(param0: com.medallia.digital.mobilesdk.ResourceContract): void });
            public constructor();
            public a(param0: com.medallia.digital.mobilesdk.ResourceContract): void;
            public b(param0: com.medallia.digital.mobilesdk.ResourceContract): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class c7 extends com.medallia.digital.mobilesdk.e0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.c7>;
          public constructor(param0: string, param1: string);
          public equals(param0: any): boolean;
          public constructor();
          public b(): string;
          public getDataTableObjectType(): com.medallia.digital.mobilesdk.e0.a;
          public b(param0: string): void;
          public a(param0: string): void;
          public a(): string;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class c8 extends com.medallia.digital.mobilesdk.d2<string> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.c8>;
          public a(): com.medallia.digital.mobilesdk.s0;
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public a(param0: string): void;
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public a(param0: com.medallia.digital.mobilesdk.Lifetime): void;
          public a(param0: boolean): void;
          public a(param0: any): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class d {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.d>;
          public constructor(param0: string, param1: string);
          public c(): string;
          public constructor(param0: org.json.JSONObject);
          public b(): string;
          public a(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export abstract class d0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.d0>;
          public e: boolean;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class d1 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.d1>;
          public constructor(param0: string, param1: string);
          public c(): string;
          public constructor(param0: org.json.JSONObject);
          public b(): string;
          public a(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export abstract class d2<T> extends com.medallia.digital.mobilesdk.r0<any> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.d2<any>>;
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class d3 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.d3>;
          public static b: com.medallia.digital.mobilesdk.d3;
          public static c: com.medallia.digital.mobilesdk.d3;
          public static d: com.medallia.digital.mobilesdk.d3;
          public static values(): androidNative.Array<com.medallia.digital.mobilesdk.d3>;
          public static a(param0: string): com.medallia.digital.mobilesdk.d3;
          public static valueOf(param0: string): com.medallia.digital.mobilesdk.d3;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class d4 extends com.medallia.digital.mobilesdk.h0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.d4>;
          public c(): globalAndroid.content.BroadcastReceiver;
          public a(): string;
          public a(param0: any): void;
          public b(): any;
        }
        export module d4 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.d4.a>;
            public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
          }
          export class b extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.d4.b>;
            public a(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class d5 extends com.medallia.digital.mobilesdk.a2<java.lang.Integer> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.d5>;
          public m(): void;
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public l(): void;
        }
        export module d5 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.d5.a>;
            public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class d6<T> extends java.lang.Object {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.d6<any>>;
          /**
           * Constructs a new instance of the com.medallia.digital.mobilesdk.d6<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { a(param0: com.medallia.digital.mobilesdk.g4): void; a(param0: T): void });
          public constructor();
          public a(param0: T): void;
          public a(param0: com.medallia.digital.mobilesdk.g4): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class d7 extends com.medallia.digital.mobilesdk.k1<com.medallia.digital.mobilesdk.c7> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.d7>;
          public c(param0: androidNative.Array<any>): java.util.ArrayList<any>;
          public e(): string;
          public d(param0: androidNative.Array<any>): com.medallia.digital.mobilesdk.c7;
          public a(param0: androidNative.Array<any>): boolean;
          public d(): java.util.HashMap<string, string>;
          public c(param0: androidNative.Array<any>): java.util.ArrayList<com.medallia.digital.mobilesdk.c7>;
          public b(param0: androidNative.Array<any>): any;
          public c(): number;
          public a(param0: boolean, param1: string): void;
          public a(param0: com.medallia.digital.mobilesdk.c7): boolean;
          public b(param0: any): globalAndroid.content.ContentValues;
          public b(param0: com.medallia.digital.mobilesdk.c7): globalAndroid.content.ContentValues;
          public b(): boolean;
          public d(param0: any): boolean;
          public a(param0: any): boolean;
          public c(param0: any): boolean;
        }
        export module d7 {
          export class a extends java.util.HashMap<string, string> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.d7.a>;
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.d7.b>;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class d8 extends com.medallia.digital.mobilesdk.z7 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.d8>;
          public a(param0: string, param1: boolean, param2: boolean): void;
          public clearAndDisconnect(): void;
          public static b(): com.medallia.digital.mobilesdk.d8;
          public constructor();
          public a(param0: boolean, param1: boolean): void;
        }
        export module d8 {
          export class a extends com.medallia.digital.mobilesdk.MDResultCallback {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.d8.a>;
            public onError(param0: com.medallia.digital.mobilesdk.MDExternalError): void;
            public onSuccess(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class e {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.e>;
          /**
           * Constructs a new instance of the com.medallia.digital.mobilesdk.e interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export abstract class e0 extends com.medallia.digital.mobilesdk.i0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.e0>;
          public getDataTableObjectType(): com.medallia.digital.mobilesdk.e0.a;
        }
        export module e0 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.e0.a>;
            public static a: com.medallia.digital.mobilesdk.e0.a;
            public static b: com.medallia.digital.mobilesdk.e0.a;
            public static c: com.medallia.digital.mobilesdk.e0.a;
            public static d: com.medallia.digital.mobilesdk.e0.a;
            public static e: com.medallia.digital.mobilesdk.e0.a;
            public static f: com.medallia.digital.mobilesdk.e0.a;
            public static g: com.medallia.digital.mobilesdk.e0.a;
            public static h: com.medallia.digital.mobilesdk.e0.a;
            public static i: com.medallia.digital.mobilesdk.e0.a;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.e0.a;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.e0.a>;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class e1 extends com.medallia.digital.mobilesdk.a2<java.lang.Integer> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.e1>;
          public m(): void;
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public l(): void;
        }
        export module e1 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.e1.a>;
            public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class e2 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.e2>;
          public constructor(param0: string);
          public constructor(param0: org.json.JSONObject);
          public a(param0: string): void;
          public a(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class e3 extends com.medallia.digital.mobilesdk.MedalliaDigitalError {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.e3>;
          public constructor(param0: number, param1: com.medallia.digital.mobilesdk.MDExternalError.ExternalError, param2: string);
          public a(): com.medallia.digital.mobilesdk.MDExternalError;
          public constructor(param0: number, param1: string);
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class e4 extends com.medallia.digital.mobilesdk.h0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.e4>;
          public c(): globalAndroid.content.BroadcastReceiver;
          public a(): string;
          public a(param0: any): void;
          public b(): any;
        }
        export module e4 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.e4.a>;
            public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
          }
          export class b extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.e4.b>;
            public a(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class e5 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.e5>;
          public c(): org.json.JSONObject;
          public constructor();
          public static a(): com.medallia.digital.mobilesdk.e5;
        }
        export module e5 {
          export class a extends com.medallia.digital.mobilesdk.d6<com.medallia.digital.mobilesdk.v5> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.e5.a>;
            public a(param0: com.medallia.digital.mobilesdk.v5): void;
            public a(param0: com.medallia.digital.mobilesdk.g4): void;
            public a(param0: any): void;
          }
          export class b extends com.medallia.digital.mobilesdk.e6.a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.e5.b>;
            public a(param0: com.medallia.digital.mobilesdk.a6): void;
            public a(param0: com.medallia.digital.mobilesdk.y5): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class e6 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.e6>;
          public a(param0: string, param1: java.util.HashMap<string, string>, param2: com.medallia.digital.mobilesdk.e6.a): void;
          public a(param0: string, param1: java.util.HashMap<string, string>, param2: java.util.HashMap<string, string>, param3: org.json.JSONObject, param4: com.medallia.digital.mobilesdk.e6.a): void;
          public a(param0: string, param1: java.util.HashMap<string, string>, param2: java.util.HashMap<string, string>, param3: org.json.JSONObject, param4: string, param5: com.medallia.digital.mobilesdk.e6.a): void;
          public c(param0: string, param1: java.util.HashMap<string, string>, param2: java.util.HashMap<string, string>, param3: org.json.JSONObject, param4: com.medallia.digital.mobilesdk.e6.a): void;
          public b(param0: string, param1: java.util.HashMap<string, string>, param2: java.util.HashMap<string, string>, param3: org.json.JSONObject, param4: com.medallia.digital.mobilesdk.e6.a): void;
          public a(param0: number, param1: number, param2: number): void;
          public a(param0: string, param1: java.util.HashMap<string, string>, param2: java.util.HashMap<string, string>, param3: com.medallia.digital.mobilesdk.e6.a): void;
          public constructor(param0: number, param1: number);
        }
        export module e6 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.e6.a>;
            /**
             * Constructs a new instance of the com.medallia.digital.mobilesdk.e6$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { a(param0: com.medallia.digital.mobilesdk.y5): void; a(param0: com.medallia.digital.mobilesdk.a6): void });
            public constructor();
            public a(param0: com.medallia.digital.mobilesdk.a6): void;
            public a(param0: com.medallia.digital.mobilesdk.y5): void;
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.e6.b>;
            public static a: com.medallia.digital.mobilesdk.e6.b;
            public static b: com.medallia.digital.mobilesdk.e6.b;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.e6.b>;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.e6.b;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class e7 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.e7>;
          public c(): string;
          public constructor(param0: org.json.JSONObject);
          public t(): string;
          public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: boolean, param8: string, param9: string, param10: string, param11: boolean, param12: boolean, param13: boolean, param14: number, param15: string, param16: string, param17: string);
          public f(): string;
          public k(): number;
          public n(): string;
          public j(): string;
          public d(): string;
          public s(): boolean;
          public constructor();
          public r(): boolean;
          public q(): boolean;
          public g(): string;
          public hashCode(): number;
          public p(): boolean;
          public o(): string;
          public e(): string;
          public h(): string;
          public l(): string;
          public equals(param0: any): boolean;
          public b(): string;
          public a(): string;
          public m(): string;
          public i(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class e8 extends com.medallia.digital.mobilesdk.z7 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.e8>;
          public b(param0: boolean): org.json.JSONArray;
          public h(): number;
          public clearAndDisconnect(): void;
          public a(param0: java.util.ArrayList<com.medallia.digital.mobilesdk.i>): org.json.JSONArray;
          public a(param0: com.medallia.digital.mobilesdk.Lifetime): boolean;
          public c(): androidNative.Array<string>;
          public constructor();
          public d(param0: boolean): void;
          public a(): boolean;
          public a(param0: com.medallia.digital.mobilesdk.f0): void;
          public f(): java.util.ArrayList<com.medallia.digital.mobilesdk.f0>;
          public b(param0: java.util.ArrayList<com.medallia.digital.mobilesdk.i>): org.json.JSONObject;
          public static g(): com.medallia.digital.mobilesdk.e8;
          public a(param0: com.medallia.digital.mobilesdk.ConfigurationContract): void;
          public update(param0: java.util.Observable, param1: any): void;
          public a(param0: number, param1: java.lang.Long, param2: number): java.util.ArrayList<com.medallia.digital.mobilesdk.i>;
          public b(): string;
          public b(param0: boolean, param1: java.lang.Long, param2: number): void;
          public a(param0: boolean, param1: java.lang.Long, param2: number): void;
          public e(): java.util.ArrayList<com.medallia.digital.mobilesdk.f0>;
          public d(): java.util.HashMap<string, any>;
          public a(param0: string): java.util.ArrayList<com.medallia.digital.mobilesdk.f0>;
          public a(param0: boolean): org.json.JSONObject;
          public a(param0: java.lang.Long, param1: number): boolean;
          public i(): org.json.JSONArray;
        }
        export module e8 {
          export class a extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.e8.a>;
            public a(): void;
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.e8.b>;
          }
          export class c {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.e8.c>;
            public static a: com.medallia.digital.mobilesdk.e8.c;
            public static b: com.medallia.digital.mobilesdk.e8.c;
            public static c: com.medallia.digital.mobilesdk.e8.c;
            public static d: com.medallia.digital.mobilesdk.e8.c;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.e8.c;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.e8.c>;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class f extends com.medallia.digital.mobilesdk.k1<com.medallia.digital.mobilesdk.i> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.f>;
          public b(param0: com.medallia.digital.mobilesdk.i): boolean;
          public c(param0: androidNative.Array<any>): java.util.ArrayList<any>;
          public e(): string;
          public c(param0: com.medallia.digital.mobilesdk.i): boolean;
          public a(param0: androidNative.Array<any>): boolean;
          public d(): java.util.HashMap<string, string>;
          public f(): string;
          public a(param0: boolean, param1: string): void;
          public b(param0: androidNative.Array<any>): any;
          public c(): number;
          public c(param0: androidNative.Array<any>): java.util.ArrayList<com.medallia.digital.mobilesdk.i>;
          public b(param0: any): globalAndroid.content.ContentValues;
          public a(param0: com.medallia.digital.mobilesdk.i): globalAndroid.content.ContentValues;
          public b(): boolean;
          public d(param0: any): boolean;
          public a(param0: any): boolean;
          public c(param0: any): boolean;
          public d(param0: androidNative.Array<any>): com.medallia.digital.mobilesdk.i;
        }
        export module f {
          export class a extends java.util.HashMap<string, string> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.f.a>;
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.f.b>;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class f0 extends com.medallia.digital.mobilesdk.e0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.f0>;
          public h(): number;
          public c(): string;
          public i(): any;
          public getDataTableObjectType(): com.medallia.digital.mobilesdk.e0.a;
          public e(): com.medallia.digital.mobilesdk.GroupType;
          public l(): void;
          public constructor(param0: org.json.JSONObject, param1: com.medallia.digital.mobilesdk.GroupType, param2: com.medallia.digital.mobilesdk.Lifetime, param3: string);
          public f(): com.medallia.digital.mobilesdk.Lifetime;
          public toString(): string;
          public d(): org.json.JSONObject;
          public constructor();
          public getName(): string;
          public b(): string;
          public constructor(param0: any, param1: com.medallia.digital.mobilesdk.GroupType, param2: com.medallia.digital.mobilesdk.Lifetime, param3: com.medallia.digital.mobilesdk.ValueType, param4: string);
          public g(): string;
          public a(): string;
          public constructor(param0: any, param1: com.medallia.digital.mobilesdk.GroupType, param2: com.medallia.digital.mobilesdk.Lifetime, param3: com.medallia.digital.mobilesdk.ValueType, param4: string, param5: number, param6: string);
          public j(): com.medallia.digital.mobilesdk.ValueType;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class f1 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.f1>;
          public equals(param0: any): boolean;
          public c(): string;
          public e(): string;
          public d(): string;
          public b(): string;
          public a(): string;
          public f(): string;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class f2 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.f2>;
          public constructor(param0: org.json.JSONObject);
          public b(): string;
          public a(param0: string): void;
          public a(): com.medallia.digital.mobilesdk.DynamicData;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class f3 extends com.medallia.digital.mobilesdk.a2<java.lang.Boolean> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.f3>;
          public a(param0: com.medallia.digital.mobilesdk.t0): void;
          public a(): com.medallia.digital.mobilesdk.s0;
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public a(param0: java.lang.Boolean): void;
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public a(param0: com.medallia.digital.mobilesdk.Lifetime): void;
          public a(param0: boolean): void;
          public a(param0: any): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class f4 extends com.medallia.digital.mobilesdk.h0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.f4>;
          public c(): globalAndroid.content.BroadcastReceiver;
          public a(): string;
          public a(param0: any): void;
          public b(): any;
        }
        export module f4 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.f4.a>;
            public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
          }
          export module a {
            export class a extends com.medallia.digital.mobilesdk.n4 {
              public static class: java.lang.Class<com.medallia.digital.mobilesdk.f4.a.a>;
              public a(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class f5 extends com.medallia.digital.mobilesdk.a2<com.medallia.digital.mobilesdk.f5.b> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.f5>;
          public m(): void;
          public k(): void;
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public n(): com.medallia.digital.mobilesdk.f5.b;
          public l(): void;
        }
        export module f5 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.f5.a>;
            public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
            public onTrimMemory(param0: number): void;
            public onLowMemory(): void;
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.f5.b>;
            public static b: com.medallia.digital.mobilesdk.f5.b;
            public static c: com.medallia.digital.mobilesdk.f5.b;
            public static d: com.medallia.digital.mobilesdk.f5.b;
            public static e: com.medallia.digital.mobilesdk.f5.b;
            public static f: com.medallia.digital.mobilesdk.f5.b;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.f5.b;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.f5.b>;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class f6 extends com.medallia.digital.mobilesdk.c1 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.f6>;
          public constructor(param0: org.json.JSONObject);
          public b(): string;
          public toJsonString(): string;
          public a(): com.medallia.digital.mobilesdk.y1.e;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class f7 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.f7>;
          public onDetachedFromWindow(): void;
          public a(param0: globalAndroid.text.SpannableStringBuilder, param1: globalAndroid.text.style.URLSpan): void;
          public a(param0: com.medallia.digital.mobilesdk.f7.d): void;
          public a(param0: com.medallia.digital.mobilesdk.f7.e): void;
          public b(param0: globalAndroid.widget.TextView, param1: string): void;
          public dismiss(): void;
        }
        export module f7 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.f7.a>;
            public onClick(param0: globalAndroid.view.View): void;
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.f7.b>;
            public onClick(param0: globalAndroid.view.View): void;
          }
          export class c {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.f7.c>;
            public updateDrawState(param0: globalAndroid.text.TextPaint): void;
            public onClick(param0: globalAndroid.view.View): void;
          }
          export class d {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.f7.d>;
            /**
             * Constructs a new instance of the com.medallia.digital.mobilesdk.f7$d interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { a(param0: string): boolean });
            public constructor();
            public a(param0: string): boolean;
          }
          export class e {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.f7.e>;
            /**
             * Constructs a new instance of the com.medallia.digital.mobilesdk.f7$e interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { close(): void });
            public constructor();
            public close(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class f8 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.f8>;
          /**
           * Constructs a new instance of the com.medallia.digital.mobilesdk.f8 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { a(): void });
          public constructor();
          public a(): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class g {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.g>;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export abstract class g0 implements com.medallia.digital.mobilesdk.m2, com.medallia.digital.mobilesdk.MedalliaWebView.e {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.g0>;
          public onClose(): void;
          public h(): void;
          public onCreate(param0: globalAndroid.os.Bundle): void;
          public onBackPressed(): void;
          public b(): void;
          public finish(): void;
          public onDestroy(): void;
          public onResume(): void;
          public e(): void;
          public a(): void;
          public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
          public onPause(): void;
          public onReady(): void;
          public f(): void;
          public onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): void;
          public mediaCaptureResult(param0: string): void;
        }
        export module g0 {
          export class a extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.g0.a>;
            public a(): void;
          }
          export class b extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.g0.b>;
            public a(): void;
          }
          export class c extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.g0.c>;
            public a(): void;
          }
          export class d extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.g0.d>;
            public a(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class g1 extends com.medallia.digital.mobilesdk.d2<com.medallia.digital.mobilesdk.CustomParameter> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.g1>;
          public a(): com.medallia.digital.mobilesdk.s0;
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public a(param0: com.medallia.digital.mobilesdk.CustomParameter): void;
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public a(param0: com.medallia.digital.mobilesdk.Lifetime): void;
          public g(): com.medallia.digital.mobilesdk.ValueType;
          public j(): java.util.ArrayList<com.medallia.digital.mobilesdk.CustomParameter>;
          public a(param0: boolean): void;
          public a(param0: any): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class g2 extends com.medallia.digital.mobilesdk.e0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.g2>;
          public equals(param0: any): boolean;
          public getFormId(): string;
          public b(): string;
          public getDataTableObjectType(): com.medallia.digital.mobilesdk.e0.a;
          public a(param0: string): void;
          public a(): string;
          public f(): void;
          public c(): com.medallia.digital.mobilesdk.FormTriggerType;
          public hashCode(): number;
          public e(): number;
          public d(): number;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class g3 extends com.medallia.digital.mobilesdk.v3.f {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.g3>;
          public a(param0: com.medallia.digital.mobilesdk.i3.b): void;
          public c(): boolean;
          public b(): void;
          public a(param0: string, param1: com.medallia.digital.mobilesdk.MDInterceptActionType, param2: com.medallia.digital.mobilesdk.MDFailureCallback): void;
          public static d(): com.medallia.digital.mobilesdk.g3;
          public b(param0: string, param1: com.medallia.digital.mobilesdk.MDEngagementType, param2: number): void;
          public a(): void;
        }
        export module g3 {
          export class a extends com.medallia.digital.mobilesdk.l2 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.g3.a>;
            public a(): void;
            public onSuccess(): void;
          }
          export class b extends com.medallia.digital.mobilesdk.MedalliaWebView.e {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.g3.b>;
            public a(): void;
            public b(): void;
          }
          export class c extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.g3.c>;
            public a(): void;
          }
          export module c {
            export class a {
              public static class: java.lang.Class<com.medallia.digital.mobilesdk.g3.c.a>;
              public onSystemUiVisibilityChange(param0: number): void;
            }
            export module a {
              export class a extends com.medallia.digital.mobilesdk.n4 {
                public static class: java.lang.Class<com.medallia.digital.mobilesdk.g3.c.a.a>;
                public a(): void;
              }
            }
          }
          export class d {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.g3.d>;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class g4 extends com.medallia.digital.mobilesdk.e3 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.g4>;
          public constructor(param0: number, param1: com.medallia.digital.mobilesdk.MDExternalError.ExternalError, param2: string);
          public constructor(param0: number, param1: string);
          public constructor(param0: com.medallia.digital.mobilesdk.g4.a);
        }
        export module g4 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.g4.a>;
            public static d: com.medallia.digital.mobilesdk.g4.a;
            public static e: com.medallia.digital.mobilesdk.g4.a;
            public static f: com.medallia.digital.mobilesdk.g4.a;
            public static g: com.medallia.digital.mobilesdk.g4.a;
            public static h: com.medallia.digital.mobilesdk.g4.a;
            public static i: com.medallia.digital.mobilesdk.g4.a;
            public static j: com.medallia.digital.mobilesdk.g4.a;
            public static k: com.medallia.digital.mobilesdk.g4.a;
            public static l: com.medallia.digital.mobilesdk.g4.a;
            public static m: com.medallia.digital.mobilesdk.g4.a;
            public static n: com.medallia.digital.mobilesdk.g4.a;
            public static o: com.medallia.digital.mobilesdk.g4.a;
            public static p: com.medallia.digital.mobilesdk.g4.a;
            public static q: com.medallia.digital.mobilesdk.g4.a;
            public static r: com.medallia.digital.mobilesdk.g4.a;
            public static s: com.medallia.digital.mobilesdk.g4.a;
            public static t: com.medallia.digital.mobilesdk.g4.a;
            public static u: com.medallia.digital.mobilesdk.g4.a;
            public static v: com.medallia.digital.mobilesdk.g4.a;
            public static w: com.medallia.digital.mobilesdk.g4.a;
            public static x: com.medallia.digital.mobilesdk.g4.a;
            public static y: com.medallia.digital.mobilesdk.g4.a;
            public static z: com.medallia.digital.mobilesdk.g4.a;
            public static A: com.medallia.digital.mobilesdk.g4.a;
            public static B: com.medallia.digital.mobilesdk.g4.a;
            public static C: com.medallia.digital.mobilesdk.g4.a;
            public static D: com.medallia.digital.mobilesdk.g4.a;
            public static E: com.medallia.digital.mobilesdk.g4.a;
            public static F: com.medallia.digital.mobilesdk.g4.a;
            public static G: com.medallia.digital.mobilesdk.g4.a;
            public static H: com.medallia.digital.mobilesdk.g4.a;
            public static I: com.medallia.digital.mobilesdk.g4.a;
            public static J: com.medallia.digital.mobilesdk.g4.a;
            public static K: com.medallia.digital.mobilesdk.g4.a;
            public static L: com.medallia.digital.mobilesdk.g4.a;
            public static M: com.medallia.digital.mobilesdk.g4.a;
            public static N: com.medallia.digital.mobilesdk.g4.a;
            public static O: com.medallia.digital.mobilesdk.g4.a;
            public static P: com.medallia.digital.mobilesdk.g4.a;
            public static Q: com.medallia.digital.mobilesdk.g4.a;
            public static R: com.medallia.digital.mobilesdk.g4.a;
            public static S: com.medallia.digital.mobilesdk.g4.a;
            public static T: com.medallia.digital.mobilesdk.g4.a;
            public static U: com.medallia.digital.mobilesdk.g4.a;
            public static V: com.medallia.digital.mobilesdk.g4.a;
            public static W: com.medallia.digital.mobilesdk.g4.a;
            public static X: com.medallia.digital.mobilesdk.g4.a;
            public static Y: com.medallia.digital.mobilesdk.g4.a;
            public static Z: com.medallia.digital.mobilesdk.g4.a;
            public static a0: com.medallia.digital.mobilesdk.g4.a;
            public b(): string;
            public a(): number;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.g4.a>;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.g4.a;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class g5 extends com.medallia.digital.mobilesdk.n5<string> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.g5>;
          public constructor(param0: com.medallia.digital.mobilesdk.m5, param1: com.medallia.digital.mobilesdk.s0);
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public r(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class g6 extends com.medallia.digital.mobilesdk.d2<com.medallia.digital.mobilesdk.g6.a> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.g6>;
          public a(): com.medallia.digital.mobilesdk.s0;
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public a(param0: com.medallia.digital.mobilesdk.Lifetime): void;
          public a(param0: boolean): void;
          public a(param0: com.medallia.digital.mobilesdk.g6.a): void;
          public a(param0: any): void;
        }
        export module g6 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.g6.a>;
            public static a: com.medallia.digital.mobilesdk.g6.a;
            public static b: com.medallia.digital.mobilesdk.g6.a;
            public static c: com.medallia.digital.mobilesdk.g6.a;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.g6.a>;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.g6.a;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class g7 implements com.medallia.digital.mobilesdk.v3.f, com.medallia.digital.mobilesdk.f7.e, com.medallia.digital.mobilesdk.f7.d {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.g7>;
          public onCancel(param0: globalAndroid.content.DialogInterface): void;
          public h(): void;
          public a(param0: string): boolean;
          public a(param0: com.medallia.digital.mobilesdk.g7.d): void;
          public b(): void;
          public close(): void;
          public static e(): com.medallia.digital.mobilesdk.g7;
          public f(): com.medallia.digital.mobilesdk.f7;
          public a(param0: com.medallia.digital.mobilesdk.g7.e): void;
          public g(): void;
          public d(): boolean;
          public a(): void;
        }
        export module g7 {
          export class a extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.g7.a>;
            public a(): void;
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.g7.b>;
            public handleMessage(param0: globalAndroid.os.Message): boolean;
          }
          export class c extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.g7.c>;
            public a(): void;
          }
          export class d {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.g7.d>;
            /**
             * Constructs a new instance of the com.medallia.digital.mobilesdk.g7$d interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { close(): void });
            public constructor();
            public close(): void;
          }
          export class e {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.g7.e>;
            /**
             * Constructs a new instance of the com.medallia.digital.mobilesdk.g7$e interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { a(): void });
            public constructor();
            public a(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class g8 extends com.medallia.digital.mobilesdk.k1<com.medallia.digital.mobilesdk.f0> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.g8>;
          public c(param0: androidNative.Array<any>): java.util.ArrayList<any>;
          public e(): string;
          public a(param0: androidNative.Array<any>): boolean;
          public d(): java.util.HashMap<string, string>;
          public f(): string;
          public a(param0: boolean, param1: string): void;
          public a(param0: com.medallia.digital.mobilesdk.f0): globalAndroid.content.ContentValues;
          public b(param0: androidNative.Array<any>): any;
          public c(): number;
          public d(param0: androidNative.Array<any>): com.medallia.digital.mobilesdk.f0;
          public b(param0: com.medallia.digital.mobilesdk.f0): boolean;
          public c(param0: androidNative.Array<any>): java.util.ArrayList<com.medallia.digital.mobilesdk.f0>;
          public b(param0: any): globalAndroid.content.ContentValues;
          public c(param0: com.medallia.digital.mobilesdk.f0): boolean;
          public b(): boolean;
          public d(param0: any): boolean;
          public a(param0: any): boolean;
          public c(param0: any): boolean;
        }
        export module g8 {
          export class a extends java.util.HashMap<string, string> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.g8.a>;
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.g8.b>;
          }
          export class c {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.g8.c>;
          }
          export class d {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.g8.d>;
            public static a: com.medallia.digital.mobilesdk.g8.d;
            public static b: com.medallia.digital.mobilesdk.g8.d;
            public static c: com.medallia.digital.mobilesdk.g8.d;
            public static d: com.medallia.digital.mobilesdk.g8.d;
            public static e: com.medallia.digital.mobilesdk.g8.d;
            public static f: com.medallia.digital.mobilesdk.g8.d;
            public static g: com.medallia.digital.mobilesdk.g8.d;
            public static h: com.medallia.digital.mobilesdk.g8.d;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.g8.d;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.g8.d>;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class h {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.h>;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export abstract class h0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.h0>;
          public d(): void;
          public c(): globalAndroid.content.BroadcastReceiver;
          public a(): string;
          public e(): void;
          public a(param0: any): void;
          public b(): any;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class h1 extends com.medallia.digital.mobilesdk.z7 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.h1>;
          public a(param0: java.util.HashMap<string, any>, param1: boolean): void;
          public clearAndDisconnect(): void;
          public a(param0: string, param1: any, param2: boolean): void;
          public a(param0: boolean): void;
          public static b(): com.medallia.digital.mobilesdk.h1;
          public a(): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class h2 extends com.medallia.digital.mobilesdk.k1<com.medallia.digital.mobilesdk.g2> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.h2>;
          public c(param0: androidNative.Array<any>): java.util.ArrayList<any>;
          public e(): string;
          public a(param0: androidNative.Array<any>): boolean;
          public a(param0: com.medallia.digital.mobilesdk.g2): boolean;
          public d(): java.util.HashMap<string, string>;
          public b(param0: androidNative.Array<any>): any;
          public c(): number;
          public a(param0: boolean, param1: string): void;
          public c(param0: androidNative.Array<any>): java.util.ArrayList<com.medallia.digital.mobilesdk.g2>;
          public b(param0: any): globalAndroid.content.ContentValues;
          public constructor();
          public d(param0: com.medallia.digital.mobilesdk.g2): boolean;
          public b(): boolean;
          public b(param0: com.medallia.digital.mobilesdk.g2): globalAndroid.content.ContentValues;
          public c(param0: com.medallia.digital.mobilesdk.g2): boolean;
          public d(param0: any): boolean;
          public a(param0: any): boolean;
          public c(param0: any): boolean;
          public d(param0: androidNative.Array<any>): com.medallia.digital.mobilesdk.g2;
        }
        export module h2 {
          export class a extends java.util.HashMap<string, string> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.h2.a>;
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.h2.b>;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class h3 extends com.medallia.digital.mobilesdk.v3.f {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.h3>;
          public b(): void;
          public i(): void;
          public a(param0: com.medallia.digital.mobilesdk.h3.h): void;
          public a(param0: com.medallia.digital.mobilesdk.InviteData, param1: globalAndroid.content.DialogInterface.OnClickListener, param2: com.medallia.digital.mobilesdk.MDAppearanceMode): void;
          public static d(): com.medallia.digital.mobilesdk.h3;
          public a(param0: com.medallia.digital.mobilesdk.n2, param1: globalAndroid.content.DialogInterface.OnClickListener, param2: com.medallia.digital.mobilesdk.k5): void;
          public c(): void;
          public a(): void;
        }
        export module h3 {
          export class a extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.h3.a>;
            public a(): void;
          }
          export class b extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.h3.b>;
            public a(): void;
          }
          export class c extends com.medallia.digital.mobilesdk.y {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.h3.c>;
          }
          export class d {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.h3.d>;
            public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
          }
          export class e {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.h3.e>;
            public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
          }
          export class f {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.h3.f>;
            public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
          }
          export class g {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.h3.g>;
            public onCancel(param0: globalAndroid.content.DialogInterface): void;
          }
          export class h {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.h3.h>;
            /**
             * Constructs a new instance of the com.medallia.digital.mobilesdk.h3$h interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { a(param0: boolean): void });
            public constructor();
            public a(param0: boolean): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class h4 extends com.medallia.digital.mobilesdk.z7 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.h4>;
          public static a(param0: globalAndroid.app.Application): void;
          public a(): globalAndroid.app.Application;
          public clearAndDisconnect(): void;
          public a(param0: globalAndroid.content.Context): void;
          public d(): globalAndroid.content.MutableContextWrapper;
          public static c(): com.medallia.digital.mobilesdk.h4;
          public b(): globalAndroid.content.Context;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class h5 extends com.medallia.digital.mobilesdk.n5<string> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.h5>;
          public constructor(param0: com.medallia.digital.mobilesdk.m5, param1: com.medallia.digital.mobilesdk.s0);
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public r(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class h6 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.h6>;
          public static a: number;
          public static b: number;
          public static c: number;
          public static d: java.lang.Long;
          public static e: java.lang.Long;
          public static f: number;
          public static g: number;
          public static h: number;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class h7 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.h7>;
          public constructor(param0: org.json.JSONObject);
          public b(): string;
          public a(): com.medallia.digital.mobilesdk.i7;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class h8 extends com.medallia.digital.mobilesdk.d2<string> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.h8>;
          public a(): com.medallia.digital.mobilesdk.s0;
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public a(param0: string): void;
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public a(param0: com.medallia.digital.mobilesdk.Lifetime): void;
          public a(param0: boolean): void;
          public a(param0: any): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class i extends com.medallia.digital.mobilesdk.e0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.i>;
          public toString(): string;
          public getDataTableObjectType(): com.medallia.digital.mobilesdk.e0.a;
          public toJsonString(): string;
          public a(param0: string): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class i0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.i0>;
          public constructor();
          public validateFields(): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class i1 implements com.medallia.digital.mobilesdk.z7 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.i1>;
          public c(param0: com.medallia.digital.mobilesdk.e0.a, param1: androidNative.Array<any>): java.util.ArrayList<any>;
          public a(param0: com.medallia.digital.mobilesdk.e0.a): boolean;
          public clearAndDisconnect(): void;
          public c(param0: com.medallia.digital.mobilesdk.e0.a): number;
          public d(): boolean;
          public c(): number;
          public static a(): com.medallia.digital.mobilesdk.i1;
          public b(param0: com.medallia.digital.mobilesdk.e0): boolean;
          public a(param0: com.medallia.digital.mobilesdk.e0.a, param1: androidNative.Array<any>): boolean;
          public b(): number;
          public c(param0: com.medallia.digital.mobilesdk.e0): boolean;
          public constructor();
          public b(param0: com.medallia.digital.mobilesdk.e0.a, param1: androidNative.Array<any>): com.medallia.digital.mobilesdk.e0;
          public onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
          public a(param0: com.medallia.digital.mobilesdk.e0): boolean;
          public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
        }
        export module i1 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.i1.a>;
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.i1.b>;
            public static a: com.medallia.digital.mobilesdk.i1.b;
            public static b: com.medallia.digital.mobilesdk.i1.b;
            public static c: com.medallia.digital.mobilesdk.i1.b;
            public static d: com.medallia.digital.mobilesdk.i1.b;
            public static e: com.medallia.digital.mobilesdk.i1.b;
            public static f: com.medallia.digital.mobilesdk.i1.b;
            public static g: com.medallia.digital.mobilesdk.i1.b;
            public static h: com.medallia.digital.mobilesdk.i1.b;
            public static i: com.medallia.digital.mobilesdk.i1.b;
            public static j: com.medallia.digital.mobilesdk.i1.b;
            public static k: com.medallia.digital.mobilesdk.i1.b;
            public static l: com.medallia.digital.mobilesdk.i1.b;
            public static m: com.medallia.digital.mobilesdk.i1.b;
            public static n: com.medallia.digital.mobilesdk.i1.b;
            public static o: com.medallia.digital.mobilesdk.i1.b;
            public static p: com.medallia.digital.mobilesdk.i1.b;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.i1.b;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.i1.b>;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class i2 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.i2>;
          public static a(param0: org.json.JSONObject, param1: com.medallia.digital.mobilesdk.FormConfigurations): org.json.JSONObject;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class i3 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.i3>;
          public toString(): string;
        }
        export module i3 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.i3.a>;
            public static a: com.medallia.digital.mobilesdk.i3.a;
            public static b: com.medallia.digital.mobilesdk.i3.a;
            public static c: com.medallia.digital.mobilesdk.i3.a;
            public static d: com.medallia.digital.mobilesdk.i3.a;
            public static e: com.medallia.digital.mobilesdk.i3.a;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.i3.a>;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.i3.a;
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.i3.b>;
            public static a: com.medallia.digital.mobilesdk.i3.b;
            public static b: com.medallia.digital.mobilesdk.i3.b;
            public static c: com.medallia.digital.mobilesdk.i3.b;
            public static d: com.medallia.digital.mobilesdk.i3.b;
            public static e: com.medallia.digital.mobilesdk.i3.b;
            public static f: com.medallia.digital.mobilesdk.i3.b;
            public static g: com.medallia.digital.mobilesdk.i3.b;
            public static h: com.medallia.digital.mobilesdk.i3.b;
            public static i: com.medallia.digital.mobilesdk.i3.b;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.i3.b;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.i3.b>;
          }
          export class c {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.i3.c>;
            public static a: com.medallia.digital.mobilesdk.i3.c;
            public static b: com.medallia.digital.mobilesdk.i3.c;
            public static c: com.medallia.digital.mobilesdk.i3.c;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.i3.c;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.i3.c>;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class i4 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.i4>;
          public static c: string;
          public a(param0: com.medallia.digital.mobilesdk.v4, param1: com.medallia.digital.mobilesdk.s4, param2: java.lang.Boolean): void;
          public static b(): com.medallia.digital.mobilesdk.i4;
          public a(): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class i5 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.i5>;
          public constructor(param0: org.json.JSONObject);
          public a(): java.util.ArrayList<com.medallia.digital.mobilesdk.Component>;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class i6 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.i6>;
          public static a(): boolean;
          public static c(): void;
          public static b(): boolean;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class i7 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.i7>;
          public b(): com.medallia.digital.mobilesdk.l5;
          public a(): com.medallia.digital.mobilesdk.l5;
          public c(): string;
          public constructor(param0: org.json.JSONObject);
          public constructor(param0: com.medallia.digital.mobilesdk.l5, param1: com.medallia.digital.mobilesdk.l5);
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class i8 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.i8>;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class j {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.j>;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export abstract class j0<T> extends java.lang.Runnable {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.j0<any>>;
          public g(): com.medallia.digital.mobilesdk.e6.a;
          public h(): number;
          public a(): java.net.HttpURLConnection;
          public e(): string;
          public j(): void;
          public run(): void;
          public b(param0: java.io.InputStream): any;
          public a(param0: string): void;
          public i(): string;
          public a(param0: number): void;
          public a(param0: any): void;
        }
        export module j0 {
          export class a extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.j0.a>;
            public a(): void;
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.j0.b>;
          }
          export class c {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.j0.c>;
            public static a: com.medallia.digital.mobilesdk.j0.c;
            public static b: com.medallia.digital.mobilesdk.j0.c;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.j0.c>;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.j0.c;
            public toString(): string;
          }
          export class d {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.j0.d>;
            public static a: com.medallia.digital.mobilesdk.j0.d;
            public static b: com.medallia.digital.mobilesdk.j0.d;
            public static c: com.medallia.digital.mobilesdk.j0.d;
            public static d: com.medallia.digital.mobilesdk.j0.d;
            public static e: com.medallia.digital.mobilesdk.j0.d;
            public static f: com.medallia.digital.mobilesdk.j0.d;
            public static g: com.medallia.digital.mobilesdk.j0.d;
            public static h: com.medallia.digital.mobilesdk.j0.d;
            public static i: com.medallia.digital.mobilesdk.j0.d;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.j0.d>;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.j0.d;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class j1 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.j1>;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class j2 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.j2>;
          public a(param0: com.medallia.digital.mobilesdk.g2, param1: com.medallia.digital.mobilesdk.j2.b): void;
          public a(param0: com.medallia.digital.mobilesdk.j2.b): void;
          public a(): void;
        }
        export module j2 {
          export class a extends com.medallia.digital.mobilesdk.d6<java.lang.Void> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.j2.a>;
            public a(param0: java.lang.Void): void;
            public a(param0: com.medallia.digital.mobilesdk.g4): void;
            public a(param0: any): void;
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.j2.b>;
            /**
             * Constructs a new instance of the com.medallia.digital.mobilesdk.j2$b interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onSuccess(): void; a(): void });
            public constructor();
            public a(): void;
            public onSuccess(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class j3 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.j3>;
          public a(param0: com.medallia.digital.mobilesdk.i3.b): void;
          public b(param0: string, param1: com.medallia.digital.mobilesdk.MDEngagementType, param2: number, param3: number, param4: number, param5: boolean): void;
          public a(param0: com.medallia.digital.mobilesdk.BannerData, param1: boolean, param2: com.medallia.digital.mobilesdk.k5, param3: com.medallia.digital.mobilesdk.y): com.medallia.digital.mobilesdk.x;
          public j(): boolean;
          public a(param0: com.medallia.digital.mobilesdk.InviteData, param1: com.medallia.digital.mobilesdk.MDAppearanceMode, param2: globalAndroid.content.DialogInterface.OnClickListener, param3: globalAndroid.content.DialogInterface.OnClickListener, param4: globalAndroid.content.DialogInterface.OnClickListener, param5: globalAndroid.content.DialogInterface.OnCancelListener): androidx.appcompat.app.AlertDialog;
          public f(): string;
          public b(param0: boolean): void;
          public e(): com.medallia.digital.mobilesdk.MDEngagementType;
          public a(param0: com.medallia.digital.mobilesdk.BannerData, param1: com.medallia.digital.mobilesdk.k5, param2: com.medallia.digital.mobilesdk.y): com.medallia.digital.mobilesdk.x;
          public a(param0: string): void;
          public a(): boolean;
          public a(param0: string, param1: com.medallia.digital.mobilesdk.MDInterceptActionType, param2: com.medallia.digital.mobilesdk.MDFailureCallback): void;
          public a(param0: boolean): void;
        }
        export module j3 {
          export class a extends com.google.android.play.core.tasks.OnCompleteListener<com.google.android.play.core.review.ReviewInfo> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.j3.a>;
            public onComplete(param0: com.google.android.play.core.tasks.Task<com.google.android.play.core.review.ReviewInfo>): void;
          }
          export module a {
            export class a extends com.google.android.play.core.tasks.OnCompleteListener<java.lang.Void> {
              public static class: java.lang.Class<com.medallia.digital.mobilesdk.j3.a.a>;
              public onComplete(param0: com.google.android.play.core.tasks.Task<java.lang.Void>): void;
            }
          }
          export class b extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.j3.b>;
            public a(): void;
          }
          export module b {
            export class a extends com.medallia.digital.mobilesdk.y {
              public static class: java.lang.Class<com.medallia.digital.mobilesdk.j3.b.a>;
              public c(param0: com.medallia.digital.mobilesdk.i3): void;
              public a(): void;
              public a(param0: com.medallia.digital.mobilesdk.i3): void;
              public b(param0: com.medallia.digital.mobilesdk.i3): void;
            }
          }
          export class c extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.j3.c>;
            public a(): void;
          }
          export module c {
            export class a {
              public static class: java.lang.Class<com.medallia.digital.mobilesdk.j3.c.a>;
              public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
            }
            export class b {
              public static class: java.lang.Class<com.medallia.digital.mobilesdk.j3.c.b>;
              public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
            }
            export class c {
              public static class: java.lang.Class<com.medallia.digital.mobilesdk.j3.c.c>;
              public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
            }
            export class d {
              public static class: java.lang.Class<com.medallia.digital.mobilesdk.j3.c.d>;
              public onCancel(param0: globalAndroid.content.DialogInterface): void;
            }
          }
          export class d extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.j3.d>;
            public a(): void;
          }
          export class e {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.j3.e>;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class j4 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.j4>;
          public b(param0: globalAndroid.content.Intent): void;
          public a(param0: globalAndroid.content.BroadcastReceiver, param1: globalAndroid.content.IntentFilter): void;
          public a(param0: globalAndroid.content.BroadcastReceiver): void;
          public a(param0: globalAndroid.content.Intent): boolean;
          public static a(param0: globalAndroid.content.Context): com.medallia.digital.mobilesdk.j4;
        }
        export module j4 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.j4.a>;
            public handleMessage(param0: globalAndroid.os.Message): void;
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.j4.b>;
          }
          export class c {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.j4.c>;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class j5 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.j5>;
          public b(): number;
          public c(): string;
          public a(): java.util.ArrayList<com.medallia.digital.mobilesdk.DynamicDataContract>;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class j6 extends com.medallia.digital.mobilesdk.a2<com.medallia.digital.mobilesdk.MDSdkFrameworkType> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.j6>;
          public a(param0: com.medallia.digital.mobilesdk.t0): void;
          public a(): com.medallia.digital.mobilesdk.s0;
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public a(param0: com.medallia.digital.mobilesdk.MDSdkFrameworkType): void;
          public a(param0: com.medallia.digital.mobilesdk.Lifetime): void;
          public a(param0: boolean): void;
          public a(param0: any): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class j7 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.j7>;
          public d(): com.medallia.digital.mobilesdk.MDAppearanceMode;
          public a(param0: com.medallia.digital.mobilesdk.MDAppearanceMode, param1: com.medallia.digital.mobilesdk.MDAppearanceMode): number;
          public a(param0: com.medallia.digital.mobilesdk.MDAppearanceMode): boolean;
          public a(param0: boolean, param1: string, param2: string, param3: string, param4: string, param5: string, param6: globalAndroid.content.DialogInterface.OnClickListener, param7: globalAndroid.content.DialogInterface.OnClickListener, param8: globalAndroid.content.DialogInterface.OnClickListener, param9: globalAndroid.content.DialogInterface.OnCancelListener, param10: boolean, param11: com.medallia.digital.mobilesdk.MDAppearanceMode): androidx.appcompat.app.AlertDialog.Builder;
          public constructor();
          public a(param0: string): com.medallia.digital.mobilesdk.k5;
          public a(): com.medallia.digital.mobilesdk.MDAppearanceMode;
          public b(param0: string): com.medallia.digital.mobilesdk.h7;
          public static c(): com.medallia.digital.mobilesdk.j7;
          public e(): void;
          public b(): com.medallia.digital.mobilesdk.MDAppearanceMode;
          public b(param0: com.medallia.digital.mobilesdk.MDAppearanceMode): void;
        }
        export module j7 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.j7.a>;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class j8 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.j8>;
          public a(param0: com.medallia.digital.mobilesdk.MedalliaWebView, param1: boolean): void;
          public a(param0: com.medallia.digital.mobilesdk.n2, param1: com.medallia.digital.mobilesdk.MedalliaWebView.e, param2: com.medallia.digital.mobilesdk.MedalliaWebView.f): void;
          public a(param0: com.medallia.digital.mobilesdk.ConfigurationContract): void;
          public a(param0: com.medallia.digital.mobilesdk.MedalliaWebView.f, param1: com.medallia.digital.mobilesdk.n2, param2: com.medallia.digital.mobilesdk.s2, param3: com.medallia.digital.mobilesdk.s4, param4: boolean, param5: boolean, param6: number, param7: number): void;
          public a(param0: com.medallia.digital.mobilesdk.MedalliaWebView): void;
          public a(): com.medallia.digital.mobilesdk.ConfigurationContract;
          public static b(): com.medallia.digital.mobilesdk.j8;
          public b(param0: com.medallia.digital.mobilesdk.MedalliaWebView.f): void;
          public c(param0: com.medallia.digital.mobilesdk.MedalliaWebView.f): com.medallia.digital.mobilesdk.MedalliaWebView;
          public c(): java.util.HashMap<com.medallia.digital.mobilesdk.MedalliaWebView.f, com.medallia.digital.mobilesdk.MedalliaWebView>;
          public a(param0: com.medallia.digital.mobilesdk.MedalliaWebView.f): void;
        }
        export module j8 {
          export class a extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.j8.a>;
            public a(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class k {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.k>;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class k0 extends com.medallia.digital.mobilesdk.a2<java.lang.Integer> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.k0>;
          public m(): void;
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public n(): java.lang.Integer;
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public l(): void;
        }
        export module k0 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.k0.a>;
            public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export abstract class k1<T> extends java.lang.Object {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.k1<any>>;
          public b(param0: androidNative.Array<any>): T;
          public e(): string;
          public a(param0: T): boolean;
          public b(param0: T): globalAndroid.content.ContentValues;
          public a(param0: androidNative.Array<any>): boolean;
          public d(): java.util.HashMap<string, string>;
          public f(): string;
          public c(): number;
          public a(param0: boolean, param1: string): void;
          public d(param0: T): boolean;
          public b(): boolean;
          public c(param0: androidNative.Array<any>): java.util.ArrayList<T>;
          public c(param0: T): boolean;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class k2 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.k2>;
          public static a(param0: string): globalAndroid.util.Pair<string, java.lang.Boolean>;
          public static e(): number;
          public static c(param0: string): void;
          public static a(param0: string, param1: string): java.io.File;
          public static a(param0: globalAndroid.net.Uri): string;
          public static d(param0: java.io.File): boolean;
          public static c(): number;
          public static d(): string;
          public static a(param0: string, param1: androidNative.Array<number>): java.io.File;
          public static a(): void;
          public static h(param0: string): boolean;
          public static f(): number;
          public static a(param0: java.io.File): java.lang.Boolean;
          public static f(param0: string): string;
          public static a(param0: string, param1: java.io.File): java.util.ArrayList<globalAndroid.util.Pair<string, java.lang.Boolean>>;
          public static e(param0: java.io.File): string;
          public static g(param0: string): string;
          public static b(param0: string): java.lang.Boolean;
          public static d(param0: string): java.io.File;
          public static b(): number;
          public static e(param0: string): java.io.FileInputStream;
        }
        export module k2 {
          export class a extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.k2.a>;
            public a(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class k3 extends com.medallia.digital.mobilesdk.a2<java.lang.Boolean> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.k3>;
          public a(param0: com.medallia.digital.mobilesdk.t0): void;
          public a(): com.medallia.digital.mobilesdk.s0;
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public a(param0: java.lang.Boolean): void;
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public a(param0: com.medallia.digital.mobilesdk.Lifetime): void;
          public a(param0: boolean): void;
          public a(param0: any): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class k4 implements com.medallia.digital.mobilesdk.v3.g, com.medallia.digital.mobilesdk.z7, com.medallia.digital.mobilesdk.f8 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.k4>;
          public a(param0: globalAndroid.app.Activity): void;
          public clearAndDisconnect(): void;
          public c(param0: string, param1: com.medallia.digital.mobilesdk.MDResultCallback): void;
          public a(param0: com.medallia.digital.mobilesdk.MDCustomInterceptListener): void;
          public a(param0: com.medallia.digital.mobilesdk.MDFeedbackListener): void;
          public d(): boolean;
          public a(param0: com.medallia.digital.mobilesdk.MDInterceptListener): void;
          public b(param0: string, param1: com.medallia.digital.mobilesdk.MDResultCallback): void;
          public a(): void;
          public a(param0: com.medallia.digital.mobilesdk.MDResultCallback): void;
          public a(param0: string, param1: com.medallia.digital.mobilesdk.MDResultCallback): void;
          public constructor();
          public a(param0: com.medallia.digital.mobilesdk.MDLogLevel): void;
          public d(param0: boolean): void;
          public c(param0: boolean): void;
          public a(param0: string, param1: com.medallia.digital.mobilesdk.MDInterceptActionType, param2: com.medallia.digital.mobilesdk.MDFailureCallback): void;
          public c(): com.medallia.digital.mobilesdk.j2;
          public h(): void;
          public a(param0: com.medallia.digital.mobilesdk.ConfigurationContract): boolean;
          public a(param0: com.medallia.digital.mobilesdk.z0): void;
          public c(param0: number): void;
          public a(param0: java.util.HashMap<string, any>): void;
          public a(param0: number): void;
          public a(param0: string, param1: any): void;
          public e(): boolean;
          public a(param0: string): void;
          public a(param0: string, param1: com.medallia.digital.mobilesdk.MDCallback): void;
          public a(param0: com.medallia.digital.mobilesdk.MDSdkFrameworkType): void;
          public a(param0: com.medallia.digital.mobilesdk.MDFormListener): void;
          public a(param0: boolean): void;
          public a(param0: com.medallia.digital.mobilesdk.MDAppearanceMode): void;
        }
        export module k4 {
          export class a extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.k4.a>;
            public a(): void;
          }
          export class b extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.k4.b>;
            public a(): void;
          }
          export class c extends com.medallia.digital.mobilesdk.d6<com.medallia.digital.mobilesdk.z0> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.k4.c>;
            public a(param0: com.medallia.digital.mobilesdk.z0): void;
            public a(param0: com.medallia.digital.mobilesdk.g4): void;
            public a(param0: any): void;
          }
          export class d extends com.medallia.digital.mobilesdk.MDResultCallback {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.k4.d>;
            public onError(param0: com.medallia.digital.mobilesdk.MDExternalError): void;
            public onSuccess(): void;
          }
          export module d {
            export class a extends com.medallia.digital.mobilesdk.n4 {
              public static class: java.lang.Class<com.medallia.digital.mobilesdk.k4.d.a>;
              public a(): void;
            }
            export module a {
              export class a extends com.medallia.digital.mobilesdk.n4 {
                public static class: java.lang.Class<com.medallia.digital.mobilesdk.k4.d.a.a>;
                public a(): void;
              }
            }
          }
          export class e extends com.medallia.digital.mobilesdk.d6<com.medallia.digital.mobilesdk.m> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.k4.e>;
            public a(param0: com.medallia.digital.mobilesdk.m): void;
            public a(param0: com.medallia.digital.mobilesdk.g4): void;
            public a(param0: any): void;
          }
          export class f extends com.medallia.digital.mobilesdk.j2.b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.k4.f>;
            public a(): void;
            public onSuccess(): void;
          }
          export class g extends com.medallia.digital.mobilesdk.v2.g {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.k4.g>;
            public a(): void;
          }
          export class h extends com.medallia.digital.mobilesdk.v2.f<java.lang.Void> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.k4.h>;
            public a(param0: java.lang.Void): void;
            public a(): void;
            public a(param0: any): void;
          }
          export class i extends com.medallia.digital.mobilesdk.d6<com.medallia.digital.mobilesdk.z0> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.k4.i>;
            public a(param0: com.medallia.digital.mobilesdk.z0): void;
            public a(param0: com.medallia.digital.mobilesdk.g4): void;
            public a(param0: any): void;
          }
          export class j extends com.medallia.digital.mobilesdk.d6<com.medallia.digital.mobilesdk.m> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.k4.j>;
            public a(param0: com.medallia.digital.mobilesdk.m): void;
            public a(param0: com.medallia.digital.mobilesdk.g4): void;
            public a(param0: any): void;
          }
          export class k extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.k4.k>;
            public a(): void;
          }
          export class l extends com.medallia.digital.mobilesdk.j2.b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.k4.l>;
            public a(): void;
            public onSuccess(): void;
          }
          export class m extends com.medallia.digital.mobilesdk.v2.g {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.k4.m>;
            public a(): void;
          }
          export class n extends com.medallia.digital.mobilesdk.v2.f<java.lang.Void> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.k4.n>;
            public a(param0: java.lang.Void): void;
            public a(): void;
            public a(param0: any): void;
          }
          export class o extends com.medallia.digital.mobilesdk.d6<com.medallia.digital.mobilesdk.m> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.k4.o>;
            public a(param0: com.medallia.digital.mobilesdk.m): void;
            public a(param0: com.medallia.digital.mobilesdk.g4): void;
            public a(param0: any): void;
          }
          export class p extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.k4.p>;
            public a(): void;
          }
          export class q extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.k4.q>;
            public a(): void;
          }
          export class r extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.k4.r>;
            public a(): void;
          }
          export class s extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.k4.s>;
            public a(): void;
          }
          export module s {
            export class a extends com.medallia.digital.mobilesdk.d6<com.medallia.digital.mobilesdk.m> {
              public static class: java.lang.Class<com.medallia.digital.mobilesdk.k4.s.a>;
              public a(param0: any): void;
              public a(param0: com.medallia.digital.mobilesdk.m): void;
              public a(param0: com.medallia.digital.mobilesdk.g4): void;
            }
          }
          export class t extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.k4.t>;
            public a(): void;
          }
          export class u extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.k4.u>;
            public a(): void;
          }
          export class v extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.k4.v>;
            public a(): void;
          }
          export class w extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.k4.w>;
            public a(): void;
          }
          export class x {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.k4.x>;
            public static a: com.medallia.digital.mobilesdk.k4.x;
            public static b: com.medallia.digital.mobilesdk.k4.x;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.k4.x;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.k4.x>;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class k5 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.k5>;
          public constructor(param0: com.medallia.digital.mobilesdk.d1, param1: com.medallia.digital.mobilesdk.d, param2: com.medallia.digital.mobilesdk.v7);
          public d(): string;
          public b(): com.medallia.digital.mobilesdk.d1;
          public constructor(param0: org.json.JSONObject);
          public c(): com.medallia.digital.mobilesdk.v7;
          public a(): com.medallia.digital.mobilesdk.d;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class k6 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.k6>;
          public static c(): boolean;
          public static a(param0: globalAndroid.content.Context, param1: number): number;
          public static b(): number;
          public static a(): number;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class k7 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.k7>;
          public a(): java.util.concurrent.Executor;
          public c(): java.util.concurrent.Executor;
        }
        export module k7 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.k7.a>;
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.k7.b>;
            public execute(param0: java.lang.Runnable): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class k8 extends com.medallia.digital.mobilesdk.e0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.k8>;
          public constructor(param0: string, param1: string);
          public equals(param0: any): boolean;
          public constructor();
          public b(): string;
          public getDataTableObjectType(): com.medallia.digital.mobilesdk.e0.a;
          public a(): string;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class l {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.l>;
          public a(param0: number, param1: java.lang.Long, param2: java.lang.Boolean, param3: java.lang.Boolean, param4: com.medallia.digital.mobilesdk.d6<com.medallia.digital.mobilesdk.m>, param5: number): void;
          public d(): void;
          public a(param0: com.medallia.digital.mobilesdk.d6<com.medallia.digital.mobilesdk.m>, param1: number, param2: java.lang.Long, param3: number): void;
        }
        export module l {
          export class a extends com.medallia.digital.mobilesdk.d6<com.medallia.digital.mobilesdk.m> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.l.a>;
            public a(param0: com.medallia.digital.mobilesdk.m): void;
            public a(param0: com.medallia.digital.mobilesdk.g4): void;
            public a(param0: any): void;
          }
          export class b extends com.medallia.digital.mobilesdk.d6<java.lang.Void> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.l.b>;
            public a(param0: java.lang.Void): void;
            public a(param0: com.medallia.digital.mobilesdk.g4): void;
            public a(param0: any): void;
          }
          export class c extends com.medallia.digital.mobilesdk.d6<java.lang.Void> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.l.c>;
            public a(param0: java.lang.Void): void;
            public a(param0: com.medallia.digital.mobilesdk.g4): void;
            public a(param0: any): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class l0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.l0>;
          public a(param0: com.medallia.digital.mobilesdk.FormDisplayType, param1: string, param2: com.medallia.digital.mobilesdk.MDResultCallback): void;
          public a(param0: boolean, param1: boolean): void;
          public a(param0: java.util.ArrayList<com.medallia.digital.mobilesdk.n2>): void;
        }
        export module l0 {
          export class a extends com.medallia.digital.mobilesdk.l2 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.l0.a>;
            public a(): void;
            public onSuccess(): void;
          }
          export class b extends com.medallia.digital.mobilesdk.l2 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.l0.b>;
            public a(): void;
            public onSuccess(): void;
          }
          export class c extends com.medallia.digital.mobilesdk.MDResultCallback {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.l0.c>;
            public onError(param0: com.medallia.digital.mobilesdk.MDExternalError): void;
            public onSuccess(): void;
          }
          export class d extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.l0.d>;
            public a(): void;
          }
          export class e extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.l0.e>;
            public a(): void;
          }
          export class f extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.l0.f>;
            public a(): void;
          }
          export class g {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.l0.g>;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class l1 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.l1>;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class l2 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.l2>;
          /**
           * Constructs a new instance of the com.medallia.digital.mobilesdk.l2 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { a(): void; onSuccess(): void });
          public constructor();
          public onSuccess(): void;
          public a(): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class l3 extends com.medallia.digital.mobilesdk.a2<java.lang.Boolean> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.l3>;
          public a(param0: com.medallia.digital.mobilesdk.t0): void;
          public a(): com.medallia.digital.mobilesdk.s0;
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public a(param0: java.lang.Boolean): void;
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public a(param0: com.medallia.digital.mobilesdk.Lifetime): void;
          public a(param0: boolean): void;
          public a(param0: any): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class l4 extends com.medallia.digital.mobilesdk.z7 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.l4>;
          public a(param0: com.medallia.digital.mobilesdk.e6.a): void;
          public clearAndDisconnect(): void;
          public a(param0: com.medallia.digital.mobilesdk.ConfigurationContract): void;
          public a(param0: com.medallia.digital.mobilesdk.v4): java.util.HashMap<string, string>;
          public a(param0: number, param1: number, param2: string, param3: number, param4: number, param5: number, param6: number, param7: string): void;
          public a(param0: string, param1: string, param2: com.medallia.digital.mobilesdk.d6<java.io.File>): void;
          public a(param0: org.json.JSONObject, param1: com.medallia.digital.mobilesdk.d6<com.medallia.digital.mobilesdk.v5>): void;
          public static h(): com.medallia.digital.mobilesdk.l4;
          public b(): number;
          public a(param0: string, param1: com.medallia.digital.mobilesdk.d6<com.medallia.digital.mobilesdk.z0>): void;
          public b(param0: com.medallia.digital.mobilesdk.d6<java.lang.Void>, param1: org.json.JSONObject): void;
          public a(param0: com.medallia.digital.mobilesdk.d6<java.lang.Void>, param1: org.json.JSONObject): void;
          public a(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
          public a(param0: boolean, param1: string, param2: string, param3: com.medallia.digital.mobilesdk.d6<java.io.File>): void;
          public a(param0: com.medallia.digital.mobilesdk.s4): string;
          public a(param0: com.medallia.digital.mobilesdk.e6): void;
          public a(param0: com.medallia.digital.mobilesdk.v4, param1: com.medallia.digital.mobilesdk.s4, param2: java.lang.Boolean, param3: com.medallia.digital.mobilesdk.d6<string>): void;
          public a(param0: com.medallia.digital.mobilesdk.g2, param1: com.medallia.digital.mobilesdk.d6<java.lang.Void>): void;
        }
        export module l4 {
          export class a extends com.medallia.digital.mobilesdk.w0.b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.l4.a>;
            public a(): com.medallia.digital.mobilesdk.q0;
          }
          export class b extends com.medallia.digital.mobilesdk.d6<string> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.l4.b>;
            public a(param0: string): void;
            public a(param0: com.medallia.digital.mobilesdk.g4): void;
            public a(param0: any): void;
          }
          export class c {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.l4.c>;
            public static a: com.medallia.digital.mobilesdk.l4.c;
            public static b: com.medallia.digital.mobilesdk.l4.c;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.l4.c>;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.l4.c;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class l5 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.l5>;
          public constructor(param0: org.json.JSONObject);
          public b(): string;
          public a(): com.medallia.digital.mobilesdk.k5;
          public constructor(param0: com.medallia.digital.mobilesdk.k5);
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class l6 extends com.medallia.digital.mobilesdk.n5<string> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.l6>;
          public constructor(param0: com.medallia.digital.mobilesdk.m5, param1: com.medallia.digital.mobilesdk.s0);
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public r(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class l7<T> extends java.lang.Object {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.l7<any>>;
          public a(param0: T): boolean;
          public constructor(param0: number, param1: com.medallia.digital.mobilesdk.l7.b<T>);
        }
        export module l7 {
          export class a extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.l7.a>;
            public a(): void;
          }
          export module a {
            export class a extends com.medallia.digital.mobilesdk.n4 {
              public static class: java.lang.Class<com.medallia.digital.mobilesdk.l7.a.a>;
              public a(): void;
            }
          }
          export class b<T> extends java.lang.Object {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.l7.b<any>>;
            /**
             * Constructs a new instance of the com.medallia.digital.mobilesdk.l7$b interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { a(param0: T): void });
            public constructor();
            public a(param0: T): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class l8 extends com.medallia.digital.mobilesdk.k1<com.medallia.digital.mobilesdk.k8> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.l8>;
          public b(param0: com.medallia.digital.mobilesdk.k8): globalAndroid.content.ContentValues;
          public c(param0: androidNative.Array<any>): java.util.ArrayList<any>;
          public e(): string;
          public a(param0: androidNative.Array<any>): boolean;
          public d(): java.util.HashMap<string, string>;
          public d(param0: com.medallia.digital.mobilesdk.k8): boolean;
          public b(param0: androidNative.Array<any>): any;
          public c(): number;
          public c(param0: com.medallia.digital.mobilesdk.k8): boolean;
          public c(param0: androidNative.Array<any>): java.util.ArrayList<com.medallia.digital.mobilesdk.k8>;
          public a(param0: boolean, param1: string): void;
          public b(param0: any): globalAndroid.content.ContentValues;
          public b(): boolean;
          public a(param0: com.medallia.digital.mobilesdk.k8): boolean;
          public d(param0: any): boolean;
          public d(param0: androidNative.Array<any>): com.medallia.digital.mobilesdk.k8;
          public a(param0: any): boolean;
          public c(param0: any): boolean;
        }
        export module l8 {
          export class a extends java.util.HashMap<string, string> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.l8.a>;
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.l8.b>;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class m {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.m>;
          public e(): boolean;
          public a(param0: boolean): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class m0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.m0>;
          public a(param0: string): void;
          public a(): boolean;
          public constructor(param0: com.medallia.digital.mobilesdk.l0);
          public a(param0: java.util.Locale, param1: boolean): void;
        }
        export module m0 {
          export class a extends com.medallia.digital.mobilesdk.v2.f<org.json.JSONObject> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.m0.a>;
            public a(param0: org.json.JSONObject): void;
            public a(): void;
            public a(param0: any): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class m1 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.m1>;
          public static d: number;
          public static f: com.medallia.digital.mobilesdk.m1;
          public toString(): string;
        }
        export module m1 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.m1.a>;
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.m1.b>;
            public a(param0: com.medallia.digital.mobilesdk.m1.c): com.medallia.digital.mobilesdk.m1.b;
            public a(): com.medallia.digital.mobilesdk.m1;
            public constructor();
            public a(param0: boolean): com.medallia.digital.mobilesdk.m1.b;
            public a(param0: java.lang.Long): com.medallia.digital.mobilesdk.m1.b;
          }
          export class c {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.m1.c>;
            public static TOP: com.medallia.digital.mobilesdk.m1.c;
            public static BOTTOM: com.medallia.digital.mobilesdk.m1.c;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.m1.c>;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.m1.c;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class m2 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.m2>;
          /**
           * Constructs a new instance of the com.medallia.digital.mobilesdk.m2 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onClose(): void; onReady(): void; mediaCaptureResult(param0: string): void });
          public constructor();
          public onClose(): void;
          public onReady(): void;
          public mediaCaptureResult(param0: string): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class m3 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.m3>;
          public a(param0: string): void;
          public a(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class m4 extends com.medallia.digital.mobilesdk.z7 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.m4>;
          public static f(): com.medallia.digital.mobilesdk.m4;
          public a(param0: com.medallia.digital.mobilesdk.q6.a, param1: string): void;
          public clearAndDisconnect(): void;
          public a(param0: com.medallia.digital.mobilesdk.q6.a): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class m5 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.m5>;
          public a(): number;
          public b(): com.medallia.digital.mobilesdk.m5.a;
          public a(param0: number): void;
        }
        export module m5 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.m5.a>;
            public static ONCE: com.medallia.digital.mobilesdk.m5.a;
            public static FREQUENCY: com.medallia.digital.mobilesdk.m5.a;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.m5.a;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.m5.a>;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class m6 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.m6>;
          public a(param0: com.medallia.digital.mobilesdk.ConfigurationContract): void;
          public b(): void;
          public a(): number;
          public a(param0: number): boolean;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class m7 extends com.medallia.digital.mobilesdk.a2<java.lang.Long> implements com.medallia.digital.mobilesdk.v3.g {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.m7>;
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public l(): void;
          public a(param0: com.medallia.digital.mobilesdk.Lifetime): void;
          public a(param0: any): void;
          public a(param0: number): void;
          public p(): void;
          public m(): void;
          public a(param0: com.medallia.digital.mobilesdk.t0): void;
          public n(): java.lang.Long;
          public a(): com.medallia.digital.mobilesdk.s0;
          public o(): java.lang.Long;
          public a(param0: boolean): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class n extends com.medallia.digital.mobilesdk.m3 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.n>;
          public equals(param0: any): boolean;
          public constructor(param0: string);
          public b(): string;
          public constructor(param0: string, param1: number, param2: string);
          public hashCode(): number;
          public c(): number;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class n0 extends com.medallia.digital.mobilesdk.j0<androidNative.Array<number>> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.n0>;
          public a(): java.net.HttpURLConnection;
          public constructor(param0: com.medallia.digital.mobilesdk.j0.d, param1: string, param2: java.util.HashMap<string, string>, param3: number, param4: com.medallia.digital.mobilesdk.e6.a);
          public a(param0: androidNative.Array<number>): void;
          public c(param0: java.io.InputStream): androidNative.Array<number>;
          public a(param0: string): void;
          public a(param0: number): void;
          public a(param0: any): void;
        }
        export module n0 {
          export class a extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.n0.a>;
            public a(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class n1 extends com.medallia.digital.mobilesdk.n5<string> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.n1>;
          public constructor(param0: com.medallia.digital.mobilesdk.m5, param1: com.medallia.digital.mobilesdk.s0);
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public r(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class n2 extends com.medallia.digital.mobilesdk.e0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.n2>;
          public getTitle(): string;
          public getFormType(): com.medallia.digital.mobilesdk.FormTriggerType;
          public j(): com.medallia.digital.mobilesdk.p7;
          public c(): com.medallia.digital.mobilesdk.n2.a;
          public getDataTableObjectType(): com.medallia.digital.mobilesdk.e0.a;
          public e(param0: string): void;
          public c(param0: string): void;
          public getInviteData(): com.medallia.digital.mobilesdk.InviteData;
          public a(param0: com.medallia.digital.mobilesdk.InviteData): void;
          public f(): java.util.List<com.medallia.digital.mobilesdk.ResourceContract>;
          public constructor();
          public getTitleBackgroundColor(): string;
          public i(): com.medallia.digital.mobilesdk.e7;
          public g(): string;
          public a(param0: com.medallia.digital.mobilesdk.e7): void;
          public getTemplateDebugRemoteUrl(): string;
          public c(param0: boolean): void;
          public hashCode(): number;
          public getTitleTextColor(): string;
          public getFormViewType(): com.medallia.digital.mobilesdk.FormViewType;
          public d(param0: string): void;
          public getFormId(): string;
          public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: java.util.List<com.medallia.digital.mobilesdk.ResourceContract>, param6: string, param7: string, param8: string, param9: com.medallia.digital.mobilesdk.FormTriggerType, param10: com.medallia.digital.mobilesdk.n2.a, param11: com.medallia.digital.mobilesdk.p7, param12: com.medallia.digital.mobilesdk.InviteData, param13: com.medallia.digital.mobilesdk.FormViewType, param14: boolean, param15: string, param16: boolean, param17: com.medallia.digital.mobilesdk.e7, param18: boolean, param19: java.util.ArrayList<string>, param20: string, param21: string, param22: boolean, param23: string, param24: boolean);
          public isPoweredByVisible(): boolean;
          public k(): boolean;
          public n(): boolean;
          public b(param0: string): void;
          public a(param0: com.medallia.digital.mobilesdk.SDKConfigurationFormContract): void;
          public getHeaderThemeName(): string;
          public b(param0: boolean): void;
          public constructor(param0: com.medallia.digital.mobilesdk.SDKConfigurationFormContract);
          public h(): string;
          public l(): boolean;
          public isDarkModeEnabled(): boolean;
          public equals(param0: any): boolean;
          public getFormLanguage(): string;
          public a(param0: java.util.ArrayList<string>): void;
          public d(): com.medallia.digital.mobilesdk.MDAppearanceMode;
          public e(): java.util.ArrayList<string>;
          public b(): string;
          public getUrlVersion(): string;
          public a(param0: string): void;
          public a(): string;
          public a(param0: com.medallia.digital.mobilesdk.n2.a): void;
          public a(param0: boolean): void;
          public a(param0: com.medallia.digital.mobilesdk.MDAppearanceMode): void;
          public a(param0: java.util.List<com.medallia.digital.mobilesdk.ResourceContract>): void;
        }
        export module n2 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.n2.a>;
            public static b: com.medallia.digital.mobilesdk.n2.a;
            public static c: com.medallia.digital.mobilesdk.n2.a;
            public static d: com.medallia.digital.mobilesdk.n2.a;
            public static e: com.medallia.digital.mobilesdk.n2.a;
            public static f: com.medallia.digital.mobilesdk.n2.a;
            public static a(param0: number): com.medallia.digital.mobilesdk.n2.a;
            public a(): number;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.n2.a;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.n2.a>;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class n3 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.n3>;
          public static c(param0: string): string;
          public constructor();
          public static a(param0: string): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class n4 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.n4>;
          public run(): void;
          public a(): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export abstract class n5<T> extends com.medallia.digital.mobilesdk.r0<any> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.n5<any>>;
          public g: com.medallia.digital.mobilesdk.t0;
          public k(): com.medallia.digital.mobilesdk.m5;
          public q(): void;
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public a(param0: com.medallia.digital.mobilesdk.Lifetime): void;
          public j(): any;
          public a(param0: any): void;
          public constructor(param0: com.medallia.digital.mobilesdk.m5, param1: com.medallia.digital.mobilesdk.s0);
          public m(): void;
          public a(param0: com.medallia.digital.mobilesdk.t0): void;
          public a(): com.medallia.digital.mobilesdk.s0;
          public a(param0: com.medallia.digital.mobilesdk.m5): void;
          public n(): void;
          public a(param0: boolean): void;
        }
        export module n5 {
          export class a extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.n5.a>;
            public a(): void;
          }
          export module a {
            export class a extends com.medallia.digital.mobilesdk.n4 {
              public static class: java.lang.Class<com.medallia.digital.mobilesdk.n5.a.a>;
              public a(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class n6 extends com.medallia.digital.mobilesdk.n5<java.lang.Integer> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.n6>;
          public constructor(param0: com.medallia.digital.mobilesdk.m5, param1: com.medallia.digital.mobilesdk.s0);
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public r(): java.lang.Integer;
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class n7 extends com.medallia.digital.mobilesdk.a2<java.lang.Long> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.n7>;
          public o(): com.medallia.digital.mobilesdk.f0;
          public onForeground(): void;
          public onBackground(): void;
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public l(): void;
          public a(param0: com.medallia.digital.mobilesdk.Lifetime): void;
          public a(param0: any): void;
          public a(param0: number): void;
          public m(): void;
          public a(param0: com.medallia.digital.mobilesdk.t0): void;
          public n(): java.lang.Long;
          public a(): com.medallia.digital.mobilesdk.s0;
          public q(): java.lang.Long;
          public a(param0: boolean): void;
          public r(): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class o extends com.medallia.digital.mobilesdk.n5<string> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.o>;
          public constructor(param0: com.medallia.digital.mobilesdk.m5, param1: com.medallia.digital.mobilesdk.s0);
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public r(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class o0 implements com.medallia.digital.mobilesdk.z7, com.medallia.digital.mobilesdk.v3.h {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.o0>;
          public onForeground(): void;
          public clearAndDisconnect(): void;
          public onBackground(): void;
        }
        export module o0 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.o0.a>;
            public static a: com.medallia.digital.mobilesdk.o0.a;
            public static b: com.medallia.digital.mobilesdk.o0.a;
            public static c: com.medallia.digital.mobilesdk.o0.a;
            public static d: com.medallia.digital.mobilesdk.o0.a;
            public static e: com.medallia.digital.mobilesdk.o0.a;
            public static f: com.medallia.digital.mobilesdk.o0.a;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.o0.a>;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.o0.a;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class o1 extends com.medallia.digital.mobilesdk.n5<string> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.o1>;
          public constructor(param0: com.medallia.digital.mobilesdk.m5, param1: com.medallia.digital.mobilesdk.s0);
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public r(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class o2 extends com.medallia.digital.mobilesdk.k1<com.medallia.digital.mobilesdk.n2> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.o2>;
          public c(param0: androidNative.Array<any>): java.util.ArrayList<any>;
          public e(): string;
          public c(param0: com.medallia.digital.mobilesdk.n2): boolean;
          public c(param0: androidNative.Array<any>): java.util.ArrayList<com.medallia.digital.mobilesdk.n2>;
          public a(param0: androidNative.Array<any>): boolean;
          public d(): java.util.HashMap<string, string>;
          public b(param0: androidNative.Array<any>): any;
          public c(): number;
          public a(param0: boolean, param1: string): void;
          public b(param0: any): globalAndroid.content.ContentValues;
          public d(param0: androidNative.Array<any>): com.medallia.digital.mobilesdk.n2;
          public b(): boolean;
          public a(param0: com.medallia.digital.mobilesdk.n2): boolean;
          public d(param0: any): boolean;
          public b(param0: com.medallia.digital.mobilesdk.n2): globalAndroid.content.ContentValues;
          public a(param0: any): boolean;
          public c(param0: any): boolean;
        }
        export module o2 {
          export class a extends java.util.HashMap<string, string> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.o2.a>;
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.o2.b>;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class o3 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.o3>;
          public static f: number;
          public static a(param0: string, param1: boolean): string;
          public static c(param0: string): string;
          public static e(param0: string): string;
          public static a(param0: string): string;
          public static d(param0: string): string;
          public static b(param0: string): string;
          public static a(param0: any): any;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class o4 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.o4>;
          public onMeasure(param0: number, param1: number): void;
          public onDraw(param0: globalAndroid.graphics.Canvas): void;
          public static e(): boolean;
          public k(): boolean;
          public j(): boolean;
          public b(param0: number): void;
          public b(param0: boolean): void;
          public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
          public d(): boolean;
          public c(): number;
          public a(param0: number): void;
          public b(): number;
          public d(param0: boolean): void;
          public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
          public i(): boolean;
          public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
          public onSaveInstanceState(): globalAndroid.os.Parcelable;
          public c(param0: boolean): void;
          public a(param0: boolean): void;
        }
        export module o4 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.o4.a>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.medallia.digital.mobilesdk.o4.a>;
            public describeContents(): number;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
          }
          export module a {
            export class a extends globalAndroid.os.Parcelable.Creator<com.medallia.digital.mobilesdk.o4.a> {
              public static class: java.lang.Class<com.medallia.digital.mobilesdk.o4.a.a>;
              public a(param0: number): androidNative.Array<com.medallia.digital.mobilesdk.o4.a>;
              public a(param0: globalAndroid.os.Parcel): com.medallia.digital.mobilesdk.o4.a;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class o5 extends com.medallia.digital.mobilesdk.a2<string> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.o5>;
          public m(): void;
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public l(): void;
          public n(): string;
        }
        export module o5 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.o5.a>;
            public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.o5.b>;
            public static a: com.medallia.digital.mobilesdk.o5.b;
            public static b: com.medallia.digital.mobilesdk.o5.b;
            public static c: com.medallia.digital.mobilesdk.o5.b;
            public static d: com.medallia.digital.mobilesdk.o5.b;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.o5.b>;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.o5.b;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class o6 extends com.medallia.digital.mobilesdk.a2<string> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.o6>;
          public m(): void;
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public l(): void;
        }
        export module o6 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.o6.a>;
            public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class o7 extends com.medallia.digital.mobilesdk.n5<string> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.o7>;
          public constructor(param0: com.medallia.digital.mobilesdk.m5, param1: com.medallia.digital.mobilesdk.s0);
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public r(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class p extends com.medallia.digital.mobilesdk.n5<string> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.p>;
          public constructor(param0: com.medallia.digital.mobilesdk.m5, param1: com.medallia.digital.mobilesdk.s0);
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public r(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export abstract class p0<T> extends java.lang.Object {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.p0<any>>;
          public a(param0: com.medallia.digital.mobilesdk.y5): com.medallia.digital.mobilesdk.g4;
          public b(param0: com.medallia.digital.mobilesdk.y5): void;
          public d(): com.medallia.digital.mobilesdk.g4;
          public b(): void;
          public a(param0: boolean): void;
          public c(): void;
          public a(): void;
        }
        export module p0 {
          export class a extends com.medallia.digital.mobilesdk.d6<java.lang.Void> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.p0.a>;
            public a(param0: java.lang.Void): void;
            public a(param0: com.medallia.digital.mobilesdk.g4): void;
            public a(param0: any): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class p1 extends com.medallia.digital.mobilesdk.n5<string> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.p1>;
          public constructor(param0: com.medallia.digital.mobilesdk.m5, param1: com.medallia.digital.mobilesdk.s0);
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public s(): string;
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class p2 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.p2>;
          public c: boolean;
          public d: java.util.ArrayList<com.medallia.digital.mobilesdk.ResourceContract>;
          public constructor(param0: com.medallia.digital.mobilesdk.n2, param1: com.medallia.digital.mobilesdk.r2);
          public a(): void;
        }
        export module p2 {
          export class a extends com.medallia.digital.mobilesdk.d6<com.medallia.digital.mobilesdk.c7> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.p2.a>;
            public a(param0: com.medallia.digital.mobilesdk.g4): void;
            public a(param0: any): void;
            public a(param0: com.medallia.digital.mobilesdk.c7): void;
          }
          export class b extends com.medallia.digital.mobilesdk.d6<java.io.File> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.p2.b>;
            public a(param0: java.io.File): void;
            public a(param0: com.medallia.digital.mobilesdk.g4): void;
            public a(param0: any): void;
          }
          export class c extends com.medallia.digital.mobilesdk.c6.b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.p2.c>;
            public a(param0: com.medallia.digital.mobilesdk.ResourceContract): void;
            public b(param0: com.medallia.digital.mobilesdk.ResourceContract): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class p3 extends com.medallia.digital.mobilesdk.q3 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.p3>;
          public c(param0: com.medallia.digital.mobilesdk.KillStatus): boolean;
          public a(param0: com.medallia.digital.mobilesdk.KillStatus): boolean;
          public b(param0: com.medallia.digital.mobilesdk.KillStatus): void;
          public clear(): void;
          public b(): boolean;
          public a(): boolean;
          public c(): number;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class p4 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.p4>;
          public onPageFinished(param0: globalAndroid.webkit.WebView, param1: string): void;
          public shouldOverrideUrlLoading(param0: globalAndroid.webkit.WebView, param1: globalAndroid.webkit.WebResourceRequest): boolean;
          public shouldInterceptRequest(param0: globalAndroid.webkit.WebView, param1: globalAndroid.webkit.WebResourceRequest): globalAndroid.webkit.WebResourceResponse;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class p5 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.p5>;
          /**
           * Constructs a new instance of the com.medallia.digital.mobilesdk.p5 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class p6 extends com.medallia.digital.mobilesdk.a2<java.lang.Integer> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.p6>;
          public m(): void;
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public l(): void;
        }
        export module p6 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.p6.a>;
            public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class p7 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.p7>;
          public static b: com.medallia.digital.mobilesdk.p7;
          public static c: com.medallia.digital.mobilesdk.p7;
          public static d: com.medallia.digital.mobilesdk.p7;
          public static e: com.medallia.digital.mobilesdk.p7;
          public static f: com.medallia.digital.mobilesdk.p7;
          public static g: com.medallia.digital.mobilesdk.p7;
          public static values(): androidNative.Array<com.medallia.digital.mobilesdk.p7>;
          public static valueOf(param0: string): com.medallia.digital.mobilesdk.p7;
          public a(): string;
          public static a(param0: string): com.medallia.digital.mobilesdk.p7;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class q {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.q>;
          public equals(param0: any): boolean;
          public e(): boolean;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class q0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.q0>;
          public b(): java.util.HashMap<string, string>;
          public e(): string;
          public d(): string;
          public a(): org.json.JSONObject;
          public c(): java.util.HashMap<string, string>;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class q1 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.q1>;
          public static a(param0: number): number;
          public static a(): boolean;
          public static b(param0: number): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class q2 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.q2>;
          public c(): java.util.ArrayList<com.medallia.digital.mobilesdk.j5>;
          public b(): string;
          public a(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class q3 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.q3>;
          /**
           * Constructs a new instance of the com.medallia.digital.mobilesdk.q3 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { a(param0: com.medallia.digital.mobilesdk.KillStatus): boolean; b(param0: com.medallia.digital.mobilesdk.KillStatus): void; b(): boolean; a(): boolean; c(param0: com.medallia.digital.mobilesdk.KillStatus): boolean; clear(): void });
          public constructor();
          public c(param0: com.medallia.digital.mobilesdk.KillStatus): boolean;
          public a(param0: com.medallia.digital.mobilesdk.KillStatus): boolean;
          public b(param0: com.medallia.digital.mobilesdk.KillStatus): void;
          public clear(): void;
          public b(): boolean;
          public a(): boolean;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class q4 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.q4>;
          public static b: com.medallia.digital.mobilesdk.q4;
          public static c: com.medallia.digital.mobilesdk.q4;
          public static d: com.medallia.digital.mobilesdk.q4;
          public static e: com.medallia.digital.mobilesdk.q4;
          public static f: com.medallia.digital.mobilesdk.q4;
          public static g: com.medallia.digital.mobilesdk.q4;
          public static h: com.medallia.digital.mobilesdk.q4;
          public static i: com.medallia.digital.mobilesdk.q4;
          public static a(param0: string): com.medallia.digital.mobilesdk.q4;
          public static values(): androidNative.Array<com.medallia.digital.mobilesdk.q4>;
          public static valueOf(param0: string): com.medallia.digital.mobilesdk.q4;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class q5 extends com.medallia.digital.mobilesdk.p0<string> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.q5>;
          public a(param0: com.medallia.digital.mobilesdk.y5): com.medallia.digital.mobilesdk.g4;
          public b(param0: com.medallia.digital.mobilesdk.y5): void;
          public d(): com.medallia.digital.mobilesdk.g4;
          public b(): void;
          public a(param0: boolean): void;
          public a(): void;
        }
        export module q5 {
          export class a extends com.medallia.digital.mobilesdk.e6.a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.q5.a>;
            public a(param0: com.medallia.digital.mobilesdk.a6): void;
            public a(param0: com.medallia.digital.mobilesdk.y5): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class q6<T> extends com.medallia.digital.mobilesdk.z7 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.q6<any>>;
          public a(param0: com.medallia.digital.mobilesdk.q6.a, param1: string): string;
          public clearAndDisconnect(): void;
          public a(param0: globalAndroid.content.Context): void;
          public b(param0: com.medallia.digital.mobilesdk.q6.a): org.json.JSONArray;
          public b(param0: com.medallia.digital.mobilesdk.q6.a, param1: boolean): void;
          public d(): boolean;
          public e(): void;
          public a(): void;
          public static b(): com.medallia.digital.mobilesdk.q6<any>;
          public b(param0: com.medallia.digital.mobilesdk.q6.a, param1: string): void;
          public a(param0: com.medallia.digital.mobilesdk.q6.a, param1: boolean): boolean;
          public a(param0: com.medallia.digital.mobilesdk.q6.a): boolean;
          public b(param0: com.medallia.digital.mobilesdk.q6.a, param1: number): void;
          public a(param0: com.medallia.digital.mobilesdk.q6.a, param1: number): number;
          public c(): globalAndroid.content.SharedPreferences;
          public a(param0: com.medallia.digital.mobilesdk.q6.a, param1: org.json.JSONArray): boolean;
        }
        export module q6 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.q6.a>;
            public static a: com.medallia.digital.mobilesdk.q6.a;
            public static b: com.medallia.digital.mobilesdk.q6.a;
            public static c: com.medallia.digital.mobilesdk.q6.a;
            public static d: com.medallia.digital.mobilesdk.q6.a;
            public static e: com.medallia.digital.mobilesdk.q6.a;
            public static f: com.medallia.digital.mobilesdk.q6.a;
            public static g: com.medallia.digital.mobilesdk.q6.a;
            public static h: com.medallia.digital.mobilesdk.q6.a;
            public static i: com.medallia.digital.mobilesdk.q6.a;
            public static j: com.medallia.digital.mobilesdk.q6.a;
            public static k: com.medallia.digital.mobilesdk.q6.a;
            public static l: com.medallia.digital.mobilesdk.q6.a;
            public static m: com.medallia.digital.mobilesdk.q6.a;
            public static n: com.medallia.digital.mobilesdk.q6.a;
            public static o: com.medallia.digital.mobilesdk.q6.a;
            public static p: com.medallia.digital.mobilesdk.q6.a;
            public static q: com.medallia.digital.mobilesdk.q6.a;
            public static r: com.medallia.digital.mobilesdk.q6.a;
            public static s: com.medallia.digital.mobilesdk.q6.a;
            public static t: com.medallia.digital.mobilesdk.q6.a;
            public static u: com.medallia.digital.mobilesdk.q6.a;
            public static v: com.medallia.digital.mobilesdk.q6.a;
            public static w: com.medallia.digital.mobilesdk.q6.a;
            public static x: com.medallia.digital.mobilesdk.q6.a;
            public static y: com.medallia.digital.mobilesdk.q6.a;
            public static z: com.medallia.digital.mobilesdk.q6.a;
            public static A: com.medallia.digital.mobilesdk.q6.a;
            public static B: com.medallia.digital.mobilesdk.q6.a;
            public static C: com.medallia.digital.mobilesdk.q6.a;
            public static D: com.medallia.digital.mobilesdk.q6.a;
            public static E: com.medallia.digital.mobilesdk.q6.a;
            public static F: com.medallia.digital.mobilesdk.q6.a;
            public static G: com.medallia.digital.mobilesdk.q6.a;
            public static H: com.medallia.digital.mobilesdk.q6.a;
            public static I: com.medallia.digital.mobilesdk.q6.a;
            public static J: com.medallia.digital.mobilesdk.q6.a;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.q6.a>;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.q6.a;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class q7 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.q7>;
          public static a(param0: com.medallia.digital.mobilesdk.p7): com.medallia.digital.mobilesdk.t2;
          public static b(param0: com.medallia.digital.mobilesdk.p7): com.medallia.digital.mobilesdk.t2;
        }
        export module q7 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.q7.a>;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export abstract class r0<T> extends java.util.Observable {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.r0<any>>;
          public i(): com.medallia.digital.mobilesdk.f0;
          public e(): string;
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public f(): any;
          public a(param0: com.medallia.digital.mobilesdk.Lifetime): void;
          public d(): com.medallia.digital.mobilesdk.Lifetime;
          public a(param0: any): void;
          public a(): com.medallia.digital.mobilesdk.s0;
          public b(): string;
          public g(): com.medallia.digital.mobilesdk.ValueType;
          public a(param0: boolean): void;
          public h(): boolean;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class r1 extends com.medallia.digital.mobilesdk.n5<string> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.r1>;
          public constructor(param0: com.medallia.digital.mobilesdk.m5, param1: com.medallia.digital.mobilesdk.s0);
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public r(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class r2 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.r2>;
          /**
           * Constructs a new instance of the com.medallia.digital.mobilesdk.r2 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { a(param0: com.medallia.digital.mobilesdk.n2): void });
          public constructor();
          public a(param0: com.medallia.digital.mobilesdk.n2): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class r3 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.r3>;
          public static a: string;
          public static b: string;
          public static c: string;
          public static d: string;
          public static e: string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class r4<T> extends java.lang.Object {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.r4<any>>;
          /**
           * Constructs a new instance of the com.medallia.digital.mobilesdk.r4<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { a(param0: T): void });
          public constructor();
          public a(param0: T): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class r5 extends com.medallia.digital.mobilesdk.a2<java.lang.Boolean> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.r5>;
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class r6 extends com.medallia.digital.mobilesdk.j0<string> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.r6>;
          public constructor(param0: com.medallia.digital.mobilesdk.j0.d, param1: string, param2: java.util.HashMap<string, string>, param3: org.json.JSONObject, param4: string, param5: number, param6: com.medallia.digital.mobilesdk.e6.a);
          public c(param0: java.io.InputStream): string;
          public b(param0: java.io.InputStream): any;
          public b(param0: string): void;
          public constructor(param0: com.medallia.digital.mobilesdk.j0.d, param1: string, param2: java.util.HashMap<string, string>, param3: org.json.JSONObject, param4: number, param5: com.medallia.digital.mobilesdk.e6.a);
        }
        export module r6 {
          export class a extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.r6.a>;
            public a(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export abstract class r7<T> extends com.medallia.digital.mobilesdk.c1 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.r7<any>>;
          public a(param0: java.util.ArrayList<com.medallia.digital.mobilesdk.f0>, param1: java.util.ArrayList<com.medallia.digital.mobilesdk.f0>, param2: java.util.ArrayList<com.medallia.digital.mobilesdk.w5>): any;
          public a(param0: string, param1: com.medallia.digital.mobilesdk.y1.i): string;
          public toJsonString(): string;
          public a(param0: any, param1: java.lang.Class<any>): any;
          public a(param0: string, param1: string, param2: com.medallia.digital.mobilesdk.y1.i, param3: com.medallia.digital.mobilesdk.y1.c): any;
          public a(param0: java.util.ArrayList<com.medallia.digital.mobilesdk.f6>, param1: string, param2: com.medallia.digital.mobilesdk.y1.i): string;
        }
        export module r7 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.r7.a>;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class s extends com.medallia.digital.mobilesdk.a2<java.lang.Long> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.s>;
          public static h: string;
          public static i: string;
          public m(): void;
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public l(): void;
        }
        export module s {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.s.a>;
            public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class s0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.s0>;
          public static Unknown: com.medallia.digital.mobilesdk.s0;
          public static AppId: com.medallia.digital.mobilesdk.s0;
          public static AppName: com.medallia.digital.mobilesdk.s0;
          public static AppVersion: com.medallia.digital.mobilesdk.s0;
          public static BatteryPercentage: com.medallia.digital.mobilesdk.s0;
          public static CustomParameters: com.medallia.digital.mobilesdk.s0;
          public static DeviceFreeDiskSpace: com.medallia.digital.mobilesdk.s0;
          public static DeviceFreeMemoryCollector: com.medallia.digital.mobilesdk.s0;
          public static DeviceId: com.medallia.digital.mobilesdk.s0;
          public static DeviceModel: com.medallia.digital.mobilesdk.s0;
          public static DeviceResolution: com.medallia.digital.mobilesdk.s0;
          public static DeviceUsedDiskSpace: com.medallia.digital.mobilesdk.s0;
          public static DeviceUsedMemory: com.medallia.digital.mobilesdk.s0;
          public static DeviceVendor: com.medallia.digital.mobilesdk.s0;
          public static ExternalDriveFreeSpace: com.medallia.digital.mobilesdk.s0;
          public static ExternalDriveUsedSpace: com.medallia.digital.mobilesdk.s0;
          public static InvitationDisplayed: com.medallia.digital.mobilesdk.s0;
          public static InterceptEnabled: com.medallia.digital.mobilesdk.s0;
          public static InterceptDisabled: com.medallia.digital.mobilesdk.s0;
          public static IP: com.medallia.digital.mobilesdk.s0;
          public static Language: com.medallia.digital.mobilesdk.s0;
          public static LastDeclineTimestamp: com.medallia.digital.mobilesdk.s0;
          public static LastSubmitTimestamp: com.medallia.digital.mobilesdk.s0;
          public static TimeInBackground: com.medallia.digital.mobilesdk.s0;
          public static TimeInForeground: com.medallia.digital.mobilesdk.s0;
          public static NetworkCarrier: com.medallia.digital.mobilesdk.s0;
          public static NetworkProvider: com.medallia.digital.mobilesdk.s0;
          public static NetworkSpeed: com.medallia.digital.mobilesdk.s0;
          public static NetworkType: com.medallia.digital.mobilesdk.s0;
          public static Orientation: com.medallia.digital.mobilesdk.s0;
          public static OsName: com.medallia.digital.mobilesdk.s0;
          public static OsVersion: com.medallia.digital.mobilesdk.s0;
          public static PowerType: com.medallia.digital.mobilesdk.s0;
          public static PropertyId: com.medallia.digital.mobilesdk.s0;
          public static SdkVersion: com.medallia.digital.mobilesdk.s0;
          public static SessionCalculatedPercentage: com.medallia.digital.mobilesdk.s0;
          public static SessionNumber: com.medallia.digital.mobilesdk.s0;
          public static SessionId: com.medallia.digital.mobilesdk.s0;
          public static Timezone: com.medallia.digital.mobilesdk.s0;
          public static UserEmail: com.medallia.digital.mobilesdk.s0;
          public static UserId: com.medallia.digital.mobilesdk.s0;
          public static UserName: com.medallia.digital.mobilesdk.s0;
          public static NPS: com.medallia.digital.mobilesdk.s0;
          public static CSAT: com.medallia.digital.mobilesdk.s0;
          public static AppRatingLastDeclineTimestamp: com.medallia.digital.mobilesdk.s0;
          public static PromptDisplayed: com.medallia.digital.mobilesdk.s0;
          public static AppRatingLastAcceptedTimestamp: com.medallia.digital.mobilesdk.s0;
          public static SDKAnalyticsVersion: com.medallia.digital.mobilesdk.s0;
          public static SDKFramework: com.medallia.digital.mobilesdk.s0;
          public static AppRatingLastTriggerTimestamp: com.medallia.digital.mobilesdk.s0;
          public static IsOCQUserSet: com.medallia.digital.mobilesdk.s0;
          public static IsOCQRulesValid: com.medallia.digital.mobilesdk.s0;
          public getName(): string;
          public getId(): number;
          public getLifetime(): com.medallia.digital.mobilesdk.Lifetime;
          public static valueOf(param0: string): com.medallia.digital.mobilesdk.s0;
          public static values(): androidNative.Array<com.medallia.digital.mobilesdk.s0>;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class s1 extends com.medallia.digital.mobilesdk.n5<string> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.s1>;
          public constructor(param0: com.medallia.digital.mobilesdk.m5, param1: com.medallia.digital.mobilesdk.s0);
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public r(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class s2 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.s2>;
          public d(param0: string): void;
          public c(): string;
          public constructor(param0: string, param1: string, param2: string, param3: string, param4: string);
          public e(): string;
          public d(): string;
          public b(): string;
          public e(param0: string): void;
          public c(param0: string): void;
          public b(param0: string): void;
          public a(param0: string): void;
          public a(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class s3 extends com.medallia.digital.mobilesdk.n5<string> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.s3>;
          public constructor(param0: com.medallia.digital.mobilesdk.m5, param1: com.medallia.digital.mobilesdk.s0);
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public r(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class s4 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.s4>;
          public c(): string;
          public g(): java.util.ArrayList<string>;
          public d(): string;
          public e(): java.util.ArrayList<string>;
          public b(): string;
          public a(): string;
          public f(): string;
          public h(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class s5 extends com.medallia.digital.mobilesdk.a2<java.lang.Long> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.s5>;
          public m(): void;
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public l(): void;
        }
        export module s5 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.s5.a>;
            public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class s6 extends com.medallia.digital.mobilesdk.p0<java.lang.Void> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.s6>;
          public a(param0: com.medallia.digital.mobilesdk.y5): com.medallia.digital.mobilesdk.g4;
          public b(param0: com.medallia.digital.mobilesdk.y5): void;
          public d(): com.medallia.digital.mobilesdk.g4;
          public b(): void;
          public a(param0: boolean): void;
          public a(): void;
        }
        export module s6 {
          export class a extends com.medallia.digital.mobilesdk.e6.a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.s6.a>;
            public a(param0: com.medallia.digital.mobilesdk.a6): void;
            public a(param0: com.medallia.digital.mobilesdk.y5): void;
          }
          export class b extends com.medallia.digital.mobilesdk.e6.a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.s6.b>;
            public a(param0: com.medallia.digital.mobilesdk.a6): void;
            public a(param0: com.medallia.digital.mobilesdk.y5): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class s7<T> extends com.medallia.digital.mobilesdk.r7<any> implements com.medallia.digital.mobilesdk.c1 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.s7<any>>;
          public a(param0: java.util.ArrayList<com.medallia.digital.mobilesdk.f0>, param1: java.util.ArrayList<com.medallia.digital.mobilesdk.f0>, param2: java.util.ArrayList<com.medallia.digital.mobilesdk.w5>): any;
          public a(param0: string, param1: com.medallia.digital.mobilesdk.y1.i): string;
          public constructor(param0: org.json.JSONObject);
          public b(): com.medallia.digital.mobilesdk.y1.d;
          public toJsonString(): string;
          public a(param0: any, param1: java.lang.Class<any>): any;
          public a(param0: string, param1: string, param2: com.medallia.digital.mobilesdk.y1.i, param3: com.medallia.digital.mobilesdk.y1.c): any;
          public a(): java.util.ArrayList<com.medallia.digital.mobilesdk.r7<any>>;
          public a(param0: java.util.ArrayList<com.medallia.digital.mobilesdk.f6>, param1: string, param2: com.medallia.digital.mobilesdk.y1.i): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class t extends com.medallia.digital.mobilesdk.a2<java.lang.Long> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.t>;
          public static h: string;
          public static i: string;
          public m(): void;
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public l(): void;
        }
        export module t {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.t.a>;
            public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class t0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.t0>;
          public g(): globalAndroid.app.ActivityManager.MemoryInfo;
          public f(): java.util.Locale;
          public d(): globalAndroid.os.StatFs;
          public a(): globalAndroid.content.pm.ApplicationInfo;
          public h(): globalAndroid.content.pm.PackageManager;
          public c(): globalAndroid.net.ConnectivityManager;
          public b(): java.util.Calendar;
          public i(): com.medallia.digital.mobilesdk.q6<any>;
          public e(): globalAndroid.graphics.Point;
          public j(): globalAndroid.telephony.TelephonyManager;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class t1 extends com.medallia.digital.mobilesdk.n5<java.lang.Long> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.t1>;
          public constructor(param0: com.medallia.digital.mobilesdk.m5, param1: com.medallia.digital.mobilesdk.s0);
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public r(): java.lang.Long;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class t2 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.t2>;
          public b(): number;
          public a(): number;
          public constructor(param0: number, param1: number);
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class t3 extends com.medallia.digital.mobilesdk.a2<java.lang.Long> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.t3>;
          public static h: string;
          public static i: string;
          public m(): void;
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public l(): void;
        }
        export module t3 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.t3.a>;
            public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class t4 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.t4>;
          public a(param0: globalAndroid.net.Uri, param1: string, param2: string): string;
          public a(param0: string, param1: string, param2: string, param3: string): com.medallia.digital.mobilesdk.v4;
          public a(param0: string, param1: string): java.io.File;
          public a(param0: globalAndroid.app.Activity): void;
          public a(param0: globalAndroid.net.Uri, param1: number): boolean;
          public a(param0: com.medallia.digital.mobilesdk.x4, param1: com.medallia.digital.mobilesdk.n2, param2: boolean): com.medallia.digital.mobilesdk.v4;
          public b(param0: string): void;
          public static b(): com.medallia.digital.mobilesdk.t4;
          public a(param0: globalAndroid.app.Activity, param1: number): void;
          public a(param0: globalAndroid.net.Uri, param1: java.util.ArrayList<string>): boolean;
          public a(): void;
          public d(): void;
          public b(param0: globalAndroid.net.Uri, param1: string, param2: string): string;
          public a(param0: string): void;
          public c(): void;
          public a(param0: com.medallia.digital.mobilesdk.q4, param1: com.medallia.digital.mobilesdk.r4<com.medallia.digital.mobilesdk.q4>, param2: com.medallia.digital.mobilesdk.n2, param3: boolean): void;
        }
        export module t4 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.t4.a>;
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.t4.b>;
            public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
          }
          export class c {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.t4.c>;
            public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
          }
          export class d {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.t4.d>;
            public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
          }
          export class e {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.t4.e>;
            public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
          }
          export class f {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.t4.f>;
            public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
          }
          export class g {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.t4.g>;
            public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
          }
          export class h {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.t4.h>;
            public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
          }
          export class i extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.t4.i>;
            public a(): void;
          }
          export class j extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.t4.j>;
            public a(): void;
          }
          export class k {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.t4.k>;
            public static b: com.medallia.digital.mobilesdk.t4.k;
            public static c: com.medallia.digital.mobilesdk.t4.k;
            public static d: com.medallia.digital.mobilesdk.t4.k;
            public static e: com.medallia.digital.mobilesdk.t4.k;
            public static f: com.medallia.digital.mobilesdk.t4.k;
            public a(): number;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.t4.k;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.t4.k>;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class t5 extends com.medallia.digital.mobilesdk.k1<com.medallia.digital.mobilesdk.w5> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.t5>;
          public c(param0: androidNative.Array<any>): java.util.ArrayList<any>;
          public e(): string;
          public a(param0: androidNative.Array<any>): boolean;
          public c(param0: androidNative.Array<any>): java.util.ArrayList<com.medallia.digital.mobilesdk.w5>;
          public d(): java.util.HashMap<string, string>;
          public a(param0: com.medallia.digital.mobilesdk.w5): globalAndroid.content.ContentValues;
          public d(param0: androidNative.Array<any>): com.medallia.digital.mobilesdk.w5;
          public a(param0: boolean, param1: string): void;
          public c(): number;
          public b(param0: androidNative.Array<any>): any;
          public b(param0: com.medallia.digital.mobilesdk.w5): boolean;
          public b(param0: any): globalAndroid.content.ContentValues;
          public constructor();
          public b(): boolean;
          public d(param0: any): boolean;
          public a(param0: any): boolean;
          public c(param0: any): boolean;
        }
        export module t5 {
          export class a extends java.util.HashMap<string, string> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.t5.a>;
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.t5.b>;
          }
          export class c {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.t5.c>;
          }
          export class d {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.t5.d>;
            public static a: com.medallia.digital.mobilesdk.t5.d;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.t5.d;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.t5.d>;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class t6 extends com.medallia.digital.mobilesdk.p0<java.lang.Void> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.t6>;
          public a(param0: com.medallia.digital.mobilesdk.y5): com.medallia.digital.mobilesdk.g4;
          public f(): boolean;
          public b(param0: com.medallia.digital.mobilesdk.y5): void;
          public d(): com.medallia.digital.mobilesdk.g4;
          public b(): void;
          public a(param0: boolean): void;
          public e(): void;
          public a(): void;
        }
        export module t6 {
          export class a extends com.medallia.digital.mobilesdk.e6.a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.t6.a>;
            public a(param0: com.medallia.digital.mobilesdk.a6): void;
            public a(param0: com.medallia.digital.mobilesdk.y5): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class t7<T> extends com.medallia.digital.mobilesdk.r7<any> implements com.medallia.digital.mobilesdk.c1 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.t7<any>>;
          public a(param0: java.util.ArrayList<com.medallia.digital.mobilesdk.f0>, param1: java.util.ArrayList<com.medallia.digital.mobilesdk.f0>, param2: java.util.ArrayList<com.medallia.digital.mobilesdk.w5>): any;
          public a(param0: string, param1: com.medallia.digital.mobilesdk.y1.i): string;
          public a(): com.medallia.digital.mobilesdk.y1.c;
          public toJsonString(): string;
          public a(param0: any, param1: java.lang.Class<any>): any;
          public a(param0: string, param1: string, param2: com.medallia.digital.mobilesdk.y1.i, param3: com.medallia.digital.mobilesdk.y1.c): any;
          public b(): com.medallia.digital.mobilesdk.u7;
          public c(): com.medallia.digital.mobilesdk.u7;
          public a(param0: java.util.ArrayList<com.medallia.digital.mobilesdk.f6>, param1: string, param2: com.medallia.digital.mobilesdk.y1.i): string;
        }
        export module t7 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.t7.a>;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class u extends com.medallia.digital.mobilesdk.a2<java.lang.Long> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.u>;
          public static h: string;
          public static i: string;
          public m(): void;
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public l(): void;
        }
        export module u {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.u.a>;
            public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class u0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.u0>;
          /**
           * Constructs a new instance of the com.medallia.digital.mobilesdk.u0 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            updateConfiguration(param0: com.medallia.digital.mobilesdk.CollectorsConfigurationContract): void;
            pollAll(): void;
            getDeviceModel(): string;
            getDeviceVendor(): string;
            getDeviceResolution(): string;
            getDeviceUsedMemory(): java.lang.Long;
            getDeviceFreeMemory(): string;
            getDeviceUsedDiskSpace(): java.lang.Long;
            getDeviceFreeDiskSpace(): string;
            getOSName(): string;
            getOSVersion(): string;
            getNetworkProvider(): string;
            getNetworkCarrier(): string;
            getLanguage(): string;
            getTimezone(): string;
            getIp(): string;
            getNetworkSpeed(): java.lang.Double;
            getPowerType(): string;
            getBatteryPercentage(): java.lang.Integer;
            getOrientation(): com.medallia.digital.mobilesdk.f5.b;
            getDeviceId(): string;
            getUserID(): string;
            getUserName(): string;
            getUserEmail(): string;
            getCustomParameters(): java.util.ArrayList<com.medallia.digital.mobilesdk.CustomParameter>;
            setUserID(param0: string): void;
            setUserName(param0: string): void;
            setUserEmail(param0: string): void;
            getAppName(): string;
            getAppId(): string;
            getAppVersion(): string;
            getTimeInBackground(): java.lang.Long;
            getTimeInForeground(): java.lang.Long;
            getSDKVersion(): string;
            getSessionCalculatedPercentage(): java.lang.Integer;
            getSessionNumber(): java.lang.Integer;
            setSessionNumber(param0: java.lang.Integer): void;
            getSessionId(): string;
            setSessionId(param0: string): void;
            getLastDeclineTimestamp(): java.lang.Long;
            getLastSubmitTimestamp(): java.lang.Long;
            isInvitationDisplayed(): string;
            getPropertyId(): java.lang.Long;
            setPropertyId(param0: java.lang.Long): void;
            getNPS(): java.lang.Integer;
            getCSAT(): java.lang.Integer;
            getAppRatingLastDeclineTimestamp(): java.lang.Long;
            getAppRatingLastAcceptedTimestamp(): java.lang.Long;
            getAppRatingLastTriggerTimestamp(): java.lang.Long;
            isOCQUserSet(): string;
            isOCQRulesValid(): string;
            isPromptDisplayed(): string;
            getSDKAnalyticsVersion(): com.medallia.digital.mobilesdk.g6.a;
            setSDKAnalyticsVersion(param0: com.medallia.digital.mobilesdk.g6.a): void;
            setSDKFramework(param0: com.medallia.digital.mobilesdk.MDSdkFrameworkType): void;
            getSDKFramework(): com.medallia.digital.mobilesdk.MDSdkFrameworkType;
            register(): void;
            unregister(): void;
            stopCollectors(): void;
            addObserverToCollector(param0: java.util.Observer, param1: com.medallia.digital.mobilesdk.s0): void;
            addObserverToCollectors(param0: java.util.Observer): void;
          });
          public constructor();
          public getOSVersion(): string;
          public getCustomParameters(): java.util.ArrayList<com.medallia.digital.mobilesdk.CustomParameter>;
          public setSDKAnalyticsVersion(param0: com.medallia.digital.mobilesdk.g6.a): void;
          public setUserEmail(param0: string): void;
          public addObserverToCollector(param0: java.util.Observer, param1: com.medallia.digital.mobilesdk.s0): void;
          public isInvitationDisplayed(): string;
          public getAppRatingLastDeclineTimestamp(): java.lang.Long;
          public getAppName(): string;
          public getDeviceUsedMemory(): java.lang.Long;
          public setSDKFramework(param0: com.medallia.digital.mobilesdk.MDSdkFrameworkType): void;
          public getLastSubmitTimestamp(): java.lang.Long;
          public getTimezone(): string;
          public setPropertyId(param0: java.lang.Long): void;
          public stopCollectors(): void;
          public unregister(): void;
          public updateConfiguration(param0: com.medallia.digital.mobilesdk.CollectorsConfigurationContract): void;
          public getSDKAnalyticsVersion(): com.medallia.digital.mobilesdk.g6.a;
          public getAppRatingLastAcceptedTimestamp(): java.lang.Long;
          public getUserID(): string;
          public isPromptDisplayed(): string;
          public getAppId(): string;
          public getIp(): string;
          public isOCQUserSet(): string;
          public getLastDeclineTimestamp(): java.lang.Long;
          public getOrientation(): com.medallia.digital.mobilesdk.f5.b;
          public setSessionId(param0: string): void;
          public getDeviceUsedDiskSpace(): java.lang.Long;
          public addObserverToCollectors(param0: java.util.Observer): void;
          public getNetworkCarrier(): string;
          public pollAll(): void;
          public setUserName(param0: string): void;
          public isOCQRulesValid(): string;
          public getDeviceResolution(): string;
          public getTimeInForeground(): java.lang.Long;
          public getSDKVersion(): string;
          public getPropertyId(): java.lang.Long;
          public getSessionCalculatedPercentage(): java.lang.Integer;
          public setSessionNumber(param0: java.lang.Integer): void;
          public getNetworkSpeed(): java.lang.Double;
          public getSDKFramework(): com.medallia.digital.mobilesdk.MDSdkFrameworkType;
          public getOSName(): string;
          public getUserName(): string;
          public getAppVersion(): string;
          public getTimeInBackground(): java.lang.Long;
          public getAppRatingLastTriggerTimestamp(): java.lang.Long;
          public getSessionId(): string;
          public getSessionNumber(): java.lang.Integer;
          public getNetworkProvider(): string;
          public getDeviceFreeDiskSpace(): string;
          public getDeviceModel(): string;
          public setUserID(param0: string): void;
          public register(): void;
          public getPowerType(): string;
          public getBatteryPercentage(): java.lang.Integer;
          public getUserEmail(): string;
          public getDeviceVendor(): string;
          public getDeviceId(): string;
          public getDeviceFreeMemory(): string;
          public getLanguage(): string;
          public getCSAT(): java.lang.Integer;
          public getNPS(): java.lang.Integer;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class u1 extends com.medallia.digital.mobilesdk.n5<java.lang.Long> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.u1>;
          public constructor(param0: com.medallia.digital.mobilesdk.m5, param1: com.medallia.digital.mobilesdk.s0);
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public r(): java.lang.Long;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class u2 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.u2>;
          public static c: string;
          public static a(param0: string, param1: boolean, param2: java.util.ArrayList<string>, param3: string, param4: com.medallia.digital.mobilesdk.FormTriggerType): boolean;
          public static a(param0: string): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class u3 extends com.medallia.digital.mobilesdk.a2<java.lang.Long> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.u3>;
          public static h: string;
          public static i: string;
          public m(): void;
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public l(): void;
        }
        export module u3 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.u3.a>;
            public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class u4 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.u4>;
          public equals(param0: any): boolean;
          public c(): string;
          public b(): string;
          public a(): string;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class u5 extends com.medallia.digital.mobilesdk.p0<com.medallia.digital.mobilesdk.v5> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.u5>;
          public static g: string;
          public static h: number;
          public a(param0: com.medallia.digital.mobilesdk.y5): com.medallia.digital.mobilesdk.g4;
          public b(param0: com.medallia.digital.mobilesdk.y5): void;
          public d(): com.medallia.digital.mobilesdk.g4;
          public b(): void;
          public a(param0: boolean): void;
          public a(): void;
        }
        export module u5 {
          export class a extends com.medallia.digital.mobilesdk.e6.a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.u5.a>;
            public a(param0: com.medallia.digital.mobilesdk.a6): void;
            public a(param0: com.medallia.digital.mobilesdk.y5): void;
          }
          export class b extends com.medallia.digital.mobilesdk.e6.a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.u5.b>;
            public a(param0: com.medallia.digital.mobilesdk.a6): void;
            public a(param0: com.medallia.digital.mobilesdk.y5): void;
          }
          export module b {
            export class a extends com.medallia.digital.mobilesdk.e6.a {
              public static class: java.lang.Class<com.medallia.digital.mobilesdk.u5.b.a>;
              public a(param0: com.medallia.digital.mobilesdk.a6): void;
              public a(param0: com.medallia.digital.mobilesdk.y5): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class u6 extends com.medallia.digital.mobilesdk.p0<string> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.u6>;
          public a(param0: com.medallia.digital.mobilesdk.y5): com.medallia.digital.mobilesdk.g4;
          public c(param0: com.medallia.digital.mobilesdk.d6<string>): void;
          public f(): boolean;
          public b(param0: com.medallia.digital.mobilesdk.y5): void;
          public d(): com.medallia.digital.mobilesdk.g4;
          public b(): void;
          public b(param0: com.medallia.digital.mobilesdk.d6<string>): void;
          public a(param0: boolean): void;
          public a(param0: com.medallia.digital.mobilesdk.d6<string>): void;
          public c(): void;
          public e(): void;
          public a(): void;
        }
        export module u6 {
          export class a extends com.medallia.digital.mobilesdk.d6<string> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.u6.a>;
            public a(param0: string): void;
            public a(param0: com.medallia.digital.mobilesdk.g4): void;
            public a(param0: any): void;
          }
          export module a {
            export class a extends com.medallia.digital.mobilesdk.d6<string> {
              public static class: java.lang.Class<com.medallia.digital.mobilesdk.u6.a.a>;
              public a(param0: any): void;
              public a(param0: com.medallia.digital.mobilesdk.g4): void;
              public a(param0: string): void;
            }
            export module a {
              export class a extends com.medallia.digital.mobilesdk.d6<string> {
                public static class: java.lang.Class<com.medallia.digital.mobilesdk.u6.a.a.a>;
                public a(param0: any): void;
                public a(param0: com.medallia.digital.mobilesdk.g4): void;
                public a(param0: string): void;
              }
            }
          }
          export class b extends com.medallia.digital.mobilesdk.d6<string> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.u6.b>;
            public a(param0: string): void;
            public a(param0: com.medallia.digital.mobilesdk.g4): void;
            public a(param0: any): void;
          }
          export class c extends com.medallia.digital.mobilesdk.d6<string> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.u6.c>;
            public a(param0: string): void;
            public a(param0: com.medallia.digital.mobilesdk.g4): void;
            public a(param0: any): void;
          }
          export class d extends com.medallia.digital.mobilesdk.d6<string> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.u6.d>;
            public a(param0: string): void;
            public a(param0: com.medallia.digital.mobilesdk.g4): void;
            public a(param0: any): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class u7 extends com.medallia.digital.mobilesdk.c1 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.u7>;
          public c(): string;
          public a(): java.util.ArrayList<com.medallia.digital.mobilesdk.f6>;
          public constructor(param0: org.json.JSONObject);
          public toJsonString(): string;
          public b(): com.medallia.digital.mobilesdk.y1.i;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class v extends com.medallia.digital.mobilesdk.n5<string> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.v>;
          public constructor(param0: com.medallia.digital.mobilesdk.m5, param1: com.medallia.digital.mobilesdk.s0);
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public r(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class v0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.v0>;
          /**
           * Constructs a new instance of the com.medallia.digital.mobilesdk.v0 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { a(param0: com.medallia.digital.mobilesdk.d6<com.medallia.digital.mobilesdk.z0>): void });
          public constructor();
          public a(param0: com.medallia.digital.mobilesdk.d6<com.medallia.digital.mobilesdk.z0>): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class v1 extends com.medallia.digital.mobilesdk.n5<string> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.v1>;
          public constructor(param0: com.medallia.digital.mobilesdk.m5, param1: com.medallia.digital.mobilesdk.s0);
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public r(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class v2 extends com.medallia.digital.mobilesdk.z7 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.v2>;
          public m: java.util.LinkedHashMap<string, com.medallia.digital.mobilesdk.n2>;
          public n: java.util.List<com.medallia.digital.mobilesdk.ResourceContract>;
          public o: java.util.List<com.medallia.digital.mobilesdk.ResourceContract>;
          public s: java.util.LinkedHashMap<string, com.medallia.digital.mobilesdk.q>;
          public clearAndDisconnect(): void;
          public static f(): com.medallia.digital.mobilesdk.v2;
          public k(): boolean;
          public d(param0: string): string;
          public j(): boolean;
          public a(param0: com.medallia.digital.mobilesdk.v2.f<java.lang.Void>): void;
          public b(): void;
          public b(param0: com.medallia.digital.mobilesdk.PropertyConfigurationContract): void;
          public e(): java.util.ArrayList<com.medallia.digital.mobilesdk.ResourceContract>;
          public h(): java.util.HashMap<string, java.lang.Boolean>;
          public a(param0: string, param1: com.medallia.digital.mobilesdk.MDResultCallback): void;
          public c(): boolean;
          public c(param0: string): com.medallia.digital.mobilesdk.n2;
          public a(param0: string, param1: com.medallia.digital.mobilesdk.v2.f<org.json.JSONObject>): void;
          public a(param0: string, param1: com.medallia.digital.mobilesdk.l2): void;
          public b(param0: com.medallia.digital.mobilesdk.n2): java.io.File;
          public g(): java.util.ArrayList<com.medallia.digital.mobilesdk.n2>;
          public a(param0: com.medallia.digital.mobilesdk.n2): boolean;
          public c(param0: com.medallia.digital.mobilesdk.PropertyConfigurationContract): boolean;
        }
        export module v2 {
          export class a extends com.medallia.digital.mobilesdk.c6.b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.v2.a>;
            public a(param0: com.medallia.digital.mobilesdk.ResourceContract): void;
            public b(param0: com.medallia.digital.mobilesdk.ResourceContract): void;
          }
          export class b extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.v2.b>;
            public a(): void;
          }
          export class c extends com.medallia.digital.mobilesdk.c6.b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.v2.c>;
            public a(param0: com.medallia.digital.mobilesdk.ResourceContract): void;
            public b(param0: com.medallia.digital.mobilesdk.ResourceContract): void;
          }
          export class d extends com.medallia.digital.mobilesdk.r2 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.v2.d>;
            public a(param0: com.medallia.digital.mobilesdk.n2): void;
          }
          export class e extends com.medallia.digital.mobilesdk.v2.f<java.lang.Void> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.v2.e>;
            public a(param0: java.lang.Void): void;
            public a(): void;
            public a(param0: any): void;
          }
          export class f<T> extends java.lang.Object {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.v2.f<any>>;
            /**
             * Constructs a new instance of the com.medallia.digital.mobilesdk.v2$f interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { a(param0: T): void; a(): void });
            public constructor();
            public a(param0: T): void;
            public a(): void;
          }
          export class g {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.v2.g>;
            /**
             * Constructs a new instance of the com.medallia.digital.mobilesdk.v2$g interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { a(): void });
            public constructor();
            public a(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class v3 extends com.medallia.digital.mobilesdk.z7 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.v3>;
          public onActivityStarted(param0: globalAndroid.app.Activity): void;
          public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
          public a(param0: globalAndroid.app.Activity): void;
          public b(param0: com.medallia.digital.mobilesdk.v3.g): void;
          public clearAndDisconnect(): void;
          public b(param0: com.medallia.digital.mobilesdk.v3.h): void;
          public a(param0: com.medallia.digital.mobilesdk.v3.g): void;
          public d(): java.lang.Long;
          public static b(): com.medallia.digital.mobilesdk.v3;
          public l(): void;
          public a(param0: com.medallia.digital.mobilesdk.v3.h): void;
          public c(): java.lang.Long;
          public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
          public f(): boolean;
          public onActivityStopped(param0: globalAndroid.app.Activity): void;
          public a(param0: string): boolean;
          public a(param0: com.medallia.digital.mobilesdk.v3.f): void;
          public b(param0: com.medallia.digital.mobilesdk.v3.f): void;
          public onActivityResumed(param0: globalAndroid.app.Activity): void;
          public onActivityPaused(param0: globalAndroid.app.Activity): void;
          public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
        }
        export module v3 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.v3.a>;
            public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
            public onTrimMemory(param0: number): void;
            public onLowMemory(): void;
          }
          export class b extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.v3.b>;
            public a(): void;
          }
          export class c extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.v3.c>;
            public a(): void;
          }
          export class d extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.v3.d>;
            public a(): void;
          }
          export class e extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.v3.e>;
            public a(): void;
          }
          export class f {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.v3.f>;
            /**
             * Constructs a new instance of the com.medallia.digital.mobilesdk.v3$f interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { b(): void; a(): void });
            public constructor();
            public a(): void;
            public b(): void;
          }
          export class g {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.v3.g>;
            /**
             * Constructs a new instance of the com.medallia.digital.mobilesdk.v3$g interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { a(param0: number): void });
            public constructor();
            public a(param0: number): void;
          }
          export class h {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.v3.h>;
            /**
             * Constructs a new instance of the com.medallia.digital.mobilesdk.v3$h interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onBackground(): void; onForeground(): void });
            public constructor();
            public onForeground(): void;
            public onBackground(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class v4 extends com.medallia.digital.mobilesdk.e0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.v4>;
          public getFormId(): string;
          public h(): number;
          public c(): string;
          public e(): string;
          public getDataTableObjectType(): com.medallia.digital.mobilesdk.e0.a;
          public b(param0: string): void;
          public i(): void;
          public f(): string;
          public g(): number;
          public equals(param0: any): boolean;
          public d(): string;
          public b(): string;
          public a(param0: string): void;
          public a(): string;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class v5 extends com.medallia.digital.mobilesdk.c1 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.v5>;
          public constructor(param0: org.json.JSONObject);
          public constructor();
          public b(): string;
          public toJsonString(): string;
          public c(): java.util.ArrayList<com.medallia.digital.mobilesdk.w5>;
          public a(param0: string): void;
          public a(): string;
          public d(): boolean;
          public a(param0: boolean): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class v6 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.v6>;
          public static a: com.medallia.digital.mobilesdk.v6;
          public static b: com.medallia.digital.mobilesdk.v6;
          public static values(): androidNative.Array<com.medallia.digital.mobilesdk.v6>;
          public static valueOf(param0: string): com.medallia.digital.mobilesdk.v6;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class v7 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.v7>;
          public constructor(param0: string, param1: string, param2: com.medallia.digital.mobilesdk.d);
          public c(): string;
          public d(): string;
          public constructor(param0: org.json.JSONObject);
          public b(): string;
          public a(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class w {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.w>;
          public a(param0: com.medallia.digital.mobilesdk.d6<java.lang.Void>): void;
        }
        export module w {
          export class a extends com.medallia.digital.mobilesdk.e6.a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.w.a>;
            public a(param0: com.medallia.digital.mobilesdk.a6): void;
            public a(param0: com.medallia.digital.mobilesdk.y5): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class w0 extends com.medallia.digital.mobilesdk.p0<com.medallia.digital.mobilesdk.z0> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.w0>;
          public a(param0: com.medallia.digital.mobilesdk.y5): com.medallia.digital.mobilesdk.g4;
          public b(param0: com.medallia.digital.mobilesdk.y5): void;
          public d(): com.medallia.digital.mobilesdk.g4;
          public b(): void;
          public f(): void;
          public a(param0: boolean): void;
          public e(): void;
          public a(): void;
        }
        export module w0 {
          export class a extends com.medallia.digital.mobilesdk.e6.a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.w0.a>;
            public a(param0: com.medallia.digital.mobilesdk.a6): void;
            public a(param0: com.medallia.digital.mobilesdk.y5): void;
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.w0.b>;
            /**
             * Constructs a new instance of the com.medallia.digital.mobilesdk.w0$b interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { a(): com.medallia.digital.mobilesdk.q0 });
            public constructor();
            public a(): com.medallia.digital.mobilesdk.q0;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class w1 extends com.medallia.digital.mobilesdk.g4 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.w1>;
          public constructor(param0: number, param1: com.medallia.digital.mobilesdk.MDExternalError.ExternalError, param2: string);
          public constructor(param0: number, param1: string);
          public constructor(param0: com.medallia.digital.mobilesdk.g4.a);
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class w2 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.w2>;
          public c: com.medallia.digital.mobilesdk.r2;
          public b(param0: com.medallia.digital.mobilesdk.n2): boolean;
          public a(param0: java.util.LinkedHashMap<string, com.medallia.digital.mobilesdk.n2>, param1: com.medallia.digital.mobilesdk.r2): void;
        }
        export module w2 {
          export class a extends com.medallia.digital.mobilesdk.r2 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.w2.a>;
            public a(param0: com.medallia.digital.mobilesdk.n2): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class w3 extends com.medallia.digital.mobilesdk.v0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.w3>;
          public constructor();
          public a(param0: com.medallia.digital.mobilesdk.d6<com.medallia.digital.mobilesdk.z0>): void;
          public constructor(param0: boolean, param1: com.medallia.digital.mobilesdk.g4);
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class w4 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.w4>;
          public b(): java.util.ArrayList<com.medallia.digital.mobilesdk.v4>;
          public static a(): com.medallia.digital.mobilesdk.w4;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class w5 extends com.medallia.digital.mobilesdk.e0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.w5>;
          public constructor();
          public constructor(param0: org.json.JSONObject);
          public b(): string;
          public toJsonString(): string;
          public getDataTableObjectType(): com.medallia.digital.mobilesdk.e0.a;
          public c(): java.lang.Boolean;
          public constructor(param0: string, param1: java.lang.Long, param2: java.lang.Boolean);
          public a(): java.lang.Long;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class w6 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.w6>;
          /**
           * Constructs a new instance of the com.medallia.digital.mobilesdk.w6 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { a(param0: boolean, param1: boolean): void; a(param0: com.medallia.digital.mobilesdk.ConfigurationContract): void; a(param0: com.medallia.digital.mobilesdk.y1.b): void; c(): boolean; b(param0: boolean): void; a(param0: boolean): void; a(): com.medallia.digital.mobilesdk.v6; b(): java.util.ArrayList<com.medallia.digital.mobilesdk.x1> });
          public constructor();
          public a(param0: com.medallia.digital.mobilesdk.ConfigurationContract): void;
          public a(param0: boolean, param1: boolean): void;
          public c(): boolean;
          public a(): com.medallia.digital.mobilesdk.v6;
          public a(param0: com.medallia.digital.mobilesdk.y1.b): void;
          public b(param0: boolean): void;
          public a(param0: boolean): void;
          public b(): java.util.ArrayList<com.medallia.digital.mobilesdk.x1>;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class w7 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.w7>;
          public static a(param0: com.medallia.digital.mobilesdk.w7.b, param1: string): boolean;
          public static b(param0: com.medallia.digital.mobilesdk.w7.b): string;
          public static a(param0: com.medallia.digital.mobilesdk.w7.b): void;
          public static b(param0: com.medallia.digital.mobilesdk.w7.b, param1: string): void;
          public static c(param0: com.medallia.digital.mobilesdk.w7.b): string;
          public static c(param0: com.medallia.digital.mobilesdk.w7.b, param1: string): void;
        }
        export module w7 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.w7.a>;
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.w7.b>;
            public static a: com.medallia.digital.mobilesdk.w7.b;
            public static b: com.medallia.digital.mobilesdk.w7.b;
            public static c: com.medallia.digital.mobilesdk.w7.b;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.w7.b;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.w7.b>;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class x {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.x>;
          public onCancel(param0: globalAndroid.content.DialogInterface): void;
          public toString(): string;
          public b(): void;
          public onDismiss(param0: globalAndroid.content.DialogInterface): void;
          public static a(param0: globalAndroid.app.Activity, param1: com.medallia.digital.mobilesdk.d0, param2: com.medallia.digital.mobilesdk.m1, param3: com.medallia.digital.mobilesdk.y): void;
        }
        export module x {
          export class a extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.x.a>;
            public a(): void;
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.x.b>;
            public onClick(param0: globalAndroid.view.View): void;
          }
          export class c {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.x.c>;
            public onClick(param0: globalAndroid.view.View): void;
          }
          export class d extends com.medallia.digital.mobilesdk.z {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.x.d>;
            public e(): void;
            public c(): void;
            public g(): void;
            public h(): void;
            public f(): void;
            public d(): void;
          }
          export class e {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.x.e>;
            public run(): void;
          }
          export class f extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.x.f>;
            public a(): void;
          }
          export class g {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.x.g>;
            public onGlobalLayout(): void;
          }
          export class h {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.x.h>;
          }
          export class i {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.x.i>;
            public static b: com.medallia.digital.mobilesdk.x.i;
            public static c: com.medallia.digital.mobilesdk.x.i;
            public static d: com.medallia.digital.mobilesdk.x.i;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.x.i;
            public a(param0: com.medallia.digital.mobilesdk.x): globalAndroid.view.animation.Animation;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.x.i>;
          }
          export class j {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.x.j>;
            public static a: com.medallia.digital.mobilesdk.x.j;
            public static b: com.medallia.digital.mobilesdk.x.j;
            public static c: com.medallia.digital.mobilesdk.x.j;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.x.j>;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.x.j;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class x0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.x0>;
        }
        export module x0 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.x0.a>;
            public static a: com.medallia.digital.mobilesdk.CollectorContract;
            public static b: com.medallia.digital.mobilesdk.CollectorContract;
            public static c: com.medallia.digital.mobilesdk.CollectorContract;
            public static d: com.medallia.digital.mobilesdk.CollectorContract;
            public static e: com.medallia.digital.mobilesdk.CollectorContract;
            public static f: com.medallia.digital.mobilesdk.CollectorContract;
            public static g: com.medallia.digital.mobilesdk.CollectorContract;
            public static h: com.medallia.digital.mobilesdk.CollectorContract;
            public static i: com.medallia.digital.mobilesdk.CollectorContract;
            public static j: com.medallia.digital.mobilesdk.CollectorContract;
            public static k: com.medallia.digital.mobilesdk.CollectorContract;
            public static l: com.medallia.digital.mobilesdk.CollectorContract;
            public static m: com.medallia.digital.mobilesdk.CollectorContract;
            public static n: com.medallia.digital.mobilesdk.CollectorContract;
            public static o: com.medallia.digital.mobilesdk.CollectorContract;
            public static p: com.medallia.digital.mobilesdk.CollectorContract;
            public static q: com.medallia.digital.mobilesdk.CollectorContract;
            public static r: com.medallia.digital.mobilesdk.CollectorContract;
            public static s: com.medallia.digital.mobilesdk.CollectorContract;
            public static t: com.medallia.digital.mobilesdk.CollectorContract;
            public static u: com.medallia.digital.mobilesdk.CollectorContract;
            public static v: com.medallia.digital.mobilesdk.CollectorContract;
            public static w: com.medallia.digital.mobilesdk.CollectorContract;
            public static x: com.medallia.digital.mobilesdk.CollectorContract;
            public static y: com.medallia.digital.mobilesdk.CollectorContract;
            public static z: com.medallia.digital.mobilesdk.CollectorContract;
            public static A: com.medallia.digital.mobilesdk.CollectorContract;
            public static B: com.medallia.digital.mobilesdk.CollectorContract;
            public static C: com.medallia.digital.mobilesdk.CollectorContract;
            public static D: com.medallia.digital.mobilesdk.CollectorContract;
            public static E: com.medallia.digital.mobilesdk.CollectorContract;
            public static F: com.medallia.digital.mobilesdk.CollectorContract;
            public static G: com.medallia.digital.mobilesdk.CollectorContract;
            public static H: com.medallia.digital.mobilesdk.CollectorContract;
            public static I: com.medallia.digital.mobilesdk.CollectorContract;
            public static J: com.medallia.digital.mobilesdk.CollectorContract;
            public static K: com.medallia.digital.mobilesdk.CollectorContract;
            public static L: com.medallia.digital.mobilesdk.CollectorContract;
            public static M: com.medallia.digital.mobilesdk.CollectorContract;
            public static N: com.medallia.digital.mobilesdk.CollectorContract;
            public static O: com.medallia.digital.mobilesdk.CollectorContract;
            public static P: com.medallia.digital.mobilesdk.CollectorContract;
            public static Q: com.medallia.digital.mobilesdk.CollectorContract;
            public static R: com.medallia.digital.mobilesdk.CollectorContract;
            public static S: com.medallia.digital.mobilesdk.CollectorContract;
            public static T: com.medallia.digital.mobilesdk.CollectorContract;
            public static U: com.medallia.digital.mobilesdk.CollectorContract;
            public static V: com.medallia.digital.mobilesdk.CollectorContract;
            public static W: com.medallia.digital.mobilesdk.CollectorContract;
            public static X: com.medallia.digital.mobilesdk.CollectorContract;
            public static Y: com.medallia.digital.mobilesdk.CollectorContract;
            public constructor();
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.x0.b>;
            public static a: number;
            public constructor();
          }
          export class c {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.x0.c>;
            public static a: number;
            public static b: number;
            public static c: number;
            public static d: string;
            public static e: string;
            public static f: string;
            public static g: string;
            public static h: boolean;
            public static i: boolean;
            public constructor();
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class x1 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.x1>;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class x2 extends com.medallia.digital.mobilesdk.p0<java.io.File> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.x2>;
          public a(param0: com.medallia.digital.mobilesdk.y5): com.medallia.digital.mobilesdk.g4;
          public b(param0: com.medallia.digital.mobilesdk.y5): void;
          public d(): com.medallia.digital.mobilesdk.g4;
          public b(): void;
          public a(param0: boolean): void;
          public a(): void;
        }
        export module x2 {
          export class a extends com.medallia.digital.mobilesdk.e6.a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.x2.a>;
            public a(param0: com.medallia.digital.mobilesdk.a6): void;
            public a(param0: com.medallia.digital.mobilesdk.y5): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class x3 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.x3>;
          public a(param0: java.util.Locale): void;
          public c(): string;
          public e(): string;
          public f(): string;
          public b(param0: string): boolean;
          public static d(): com.medallia.digital.mobilesdk.x3;
          public a(param0: string): boolean;
          public constructor();
          public b(): string;
          public i(): boolean;
          public g(): string;
          public a(): string;
          public a(param0: string, param1: java.util.ArrayList<string>): string;
          public a(param0: boolean): void;
          public h(): boolean;
          public a(param0: string, param1: string, param2: com.medallia.digital.mobilesdk.x3.c, param3: com.medallia.digital.mobilesdk.x3.a): string;
          public d(param0: string): com.medallia.digital.mobilesdk.MDExternalError;
        }
        export module x3 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.x3.a>;
            public static b: com.medallia.digital.mobilesdk.x3.a;
            public static c: com.medallia.digital.mobilesdk.x3.a;
            public static d: com.medallia.digital.mobilesdk.x3.a;
            public static e: com.medallia.digital.mobilesdk.x3.a;
            public static f: com.medallia.digital.mobilesdk.x3.a;
            public static g: com.medallia.digital.mobilesdk.x3.a;
            public static h: com.medallia.digital.mobilesdk.x3.a;
            public static i: com.medallia.digital.mobilesdk.x3.a;
            public static j: com.medallia.digital.mobilesdk.x3.a;
            public static k: com.medallia.digital.mobilesdk.x3.a;
            public static l: com.medallia.digital.mobilesdk.x3.a;
            public static m: com.medallia.digital.mobilesdk.x3.a;
            public static n: com.medallia.digital.mobilesdk.x3.a;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.x3.a;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.x3.a>;
            public a(): string;
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.x3.b>;
            public static a: com.medallia.digital.mobilesdk.x3.b;
            public static b: com.medallia.digital.mobilesdk.x3.b;
            public static c: com.medallia.digital.mobilesdk.x3.b;
            public static d: com.medallia.digital.mobilesdk.x3.b;
            public static e: com.medallia.digital.mobilesdk.x3.b;
            public static f: com.medallia.digital.mobilesdk.x3.b;
            public static g: com.medallia.digital.mobilesdk.x3.b;
            public static h: com.medallia.digital.mobilesdk.x3.b;
            public static i: com.medallia.digital.mobilesdk.x3.b;
            public static j: com.medallia.digital.mobilesdk.x3.b;
            public static k: com.medallia.digital.mobilesdk.x3.b;
            public static l: com.medallia.digital.mobilesdk.x3.b;
            public static m: com.medallia.digital.mobilesdk.x3.b;
            public static n: com.medallia.digital.mobilesdk.x3.b;
            public static o: com.medallia.digital.mobilesdk.x3.b;
            public static p: com.medallia.digital.mobilesdk.x3.b;
            public static q: com.medallia.digital.mobilesdk.x3.b;
            public static r: com.medallia.digital.mobilesdk.x3.b;
            public static s: com.medallia.digital.mobilesdk.x3.b;
            public static t: com.medallia.digital.mobilesdk.x3.b;
            public static u: com.medallia.digital.mobilesdk.x3.b;
            public static v: com.medallia.digital.mobilesdk.x3.b;
            public static w: com.medallia.digital.mobilesdk.x3.b;
            public static x: com.medallia.digital.mobilesdk.x3.b;
            public static y: com.medallia.digital.mobilesdk.x3.b;
            public static z: com.medallia.digital.mobilesdk.x3.b;
            public static A: com.medallia.digital.mobilesdk.x3.b;
            public static B: com.medallia.digital.mobilesdk.x3.b;
            public static C: com.medallia.digital.mobilesdk.x3.b;
            public static D: com.medallia.digital.mobilesdk.x3.b;
            public static E: com.medallia.digital.mobilesdk.x3.b;
            public static F: com.medallia.digital.mobilesdk.x3.b;
            public static G: com.medallia.digital.mobilesdk.x3.b;
            public static H: com.medallia.digital.mobilesdk.x3.b;
            public static I: com.medallia.digital.mobilesdk.x3.b;
            public static J: com.medallia.digital.mobilesdk.x3.b;
            public static K: com.medallia.digital.mobilesdk.x3.b;
            public static L: com.medallia.digital.mobilesdk.x3.b;
            public static M: com.medallia.digital.mobilesdk.x3.b;
            public static N: com.medallia.digital.mobilesdk.x3.b;
            public static O: com.medallia.digital.mobilesdk.x3.b;
            public static P: com.medallia.digital.mobilesdk.x3.b;
            public static Q: com.medallia.digital.mobilesdk.x3.b;
            public static R: com.medallia.digital.mobilesdk.x3.b;
            public static S: com.medallia.digital.mobilesdk.x3.b;
            public static T: com.medallia.digital.mobilesdk.x3.b;
            public static U: com.medallia.digital.mobilesdk.x3.b;
            public static V: com.medallia.digital.mobilesdk.x3.b;
            public static W: com.medallia.digital.mobilesdk.x3.b;
            public static X: com.medallia.digital.mobilesdk.x3.b;
            public static Y: com.medallia.digital.mobilesdk.x3.b;
            public static Z: com.medallia.digital.mobilesdk.x3.b;
            public static a0: com.medallia.digital.mobilesdk.x3.b;
            public static b0: com.medallia.digital.mobilesdk.x3.b;
            public static c0: com.medallia.digital.mobilesdk.x3.b;
            public static d0: com.medallia.digital.mobilesdk.x3.b;
            public static e0: com.medallia.digital.mobilesdk.x3.b;
            public static f0: com.medallia.digital.mobilesdk.x3.b;
            public static g0: com.medallia.digital.mobilesdk.x3.b;
            public static h0: com.medallia.digital.mobilesdk.x3.b;
            public static i0: com.medallia.digital.mobilesdk.x3.b;
            public static j0: com.medallia.digital.mobilesdk.x3.b;
            public static k0: com.medallia.digital.mobilesdk.x3.b;
            public static l0: com.medallia.digital.mobilesdk.x3.b;
            public static m0: com.medallia.digital.mobilesdk.x3.b;
            public static n0: com.medallia.digital.mobilesdk.x3.b;
            public static o0: com.medallia.digital.mobilesdk.x3.b;
            public static p0: com.medallia.digital.mobilesdk.x3.b;
            public static q0: com.medallia.digital.mobilesdk.x3.b;
            public static r0: com.medallia.digital.mobilesdk.x3.b;
            public static s0: com.medallia.digital.mobilesdk.x3.b;
            public static t0: com.medallia.digital.mobilesdk.x3.b;
            public static u0: com.medallia.digital.mobilesdk.x3.b;
            public static v0: com.medallia.digital.mobilesdk.x3.b;
            public static w0: com.medallia.digital.mobilesdk.x3.b;
            public static x0: com.medallia.digital.mobilesdk.x3.b;
            public static y0: com.medallia.digital.mobilesdk.x3.b;
            public static z0: com.medallia.digital.mobilesdk.x3.b;
            public static A0: com.medallia.digital.mobilesdk.x3.b;
            public static B0: com.medallia.digital.mobilesdk.x3.b;
            public static C0: com.medallia.digital.mobilesdk.x3.b;
            public static D0: com.medallia.digital.mobilesdk.x3.b;
            public static E0: com.medallia.digital.mobilesdk.x3.b;
            public static F0: com.medallia.digital.mobilesdk.x3.b;
            public static G0: com.medallia.digital.mobilesdk.x3.b;
            public static H0: com.medallia.digital.mobilesdk.x3.b;
            public static I0: com.medallia.digital.mobilesdk.x3.b;
            public static J0: com.medallia.digital.mobilesdk.x3.b;
            public static K0: com.medallia.digital.mobilesdk.x3.b;
            public static L0: com.medallia.digital.mobilesdk.x3.b;
            public static M0: com.medallia.digital.mobilesdk.x3.b;
            public static N0: com.medallia.digital.mobilesdk.x3.b;
            public static O0: com.medallia.digital.mobilesdk.x3.b;
            public static P0: com.medallia.digital.mobilesdk.x3.b;
            public static Q0: com.medallia.digital.mobilesdk.x3.b;
            public static R0: com.medallia.digital.mobilesdk.x3.b;
            public static S0: com.medallia.digital.mobilesdk.x3.b;
            public static T0: com.medallia.digital.mobilesdk.x3.b;
            public static U0: com.medallia.digital.mobilesdk.x3.b;
            public static V0: com.medallia.digital.mobilesdk.x3.b;
            public static W0: com.medallia.digital.mobilesdk.x3.b;
            public static X0: com.medallia.digital.mobilesdk.x3.b;
            public static Y0: com.medallia.digital.mobilesdk.x3.b;
            public static Z0: com.medallia.digital.mobilesdk.x3.b;
            public static a1: com.medallia.digital.mobilesdk.x3.b;
            public static b1: com.medallia.digital.mobilesdk.x3.b;
            public static c1: com.medallia.digital.mobilesdk.x3.b;
            public static d1: com.medallia.digital.mobilesdk.x3.b;
            public static e1: com.medallia.digital.mobilesdk.x3.b;
            public static f1: com.medallia.digital.mobilesdk.x3.b;
            public static g1: com.medallia.digital.mobilesdk.x3.b;
            public static h1: com.medallia.digital.mobilesdk.x3.b;
            public static i1: com.medallia.digital.mobilesdk.x3.b;
            public static j1: com.medallia.digital.mobilesdk.x3.b;
            public static k1: com.medallia.digital.mobilesdk.x3.b;
            public static l1: com.medallia.digital.mobilesdk.x3.b;
            public static m1: com.medallia.digital.mobilesdk.x3.b;
            public static n1: com.medallia.digital.mobilesdk.x3.b;
            public static o1: com.medallia.digital.mobilesdk.x3.b;
            public static p1: com.medallia.digital.mobilesdk.x3.b;
            public static q1: com.medallia.digital.mobilesdk.x3.b;
            public static r1: com.medallia.digital.mobilesdk.x3.b;
            public static s1: com.medallia.digital.mobilesdk.x3.b;
            public static t1: com.medallia.digital.mobilesdk.x3.b;
            public static u1: com.medallia.digital.mobilesdk.x3.b;
            public static v1: com.medallia.digital.mobilesdk.x3.b;
            public static w1: com.medallia.digital.mobilesdk.x3.b;
            public static x1: com.medallia.digital.mobilesdk.x3.b;
            public static y1: com.medallia.digital.mobilesdk.x3.b;
            public static z1: com.medallia.digital.mobilesdk.x3.b;
            public static A1: com.medallia.digital.mobilesdk.x3.b;
            public static B1: com.medallia.digital.mobilesdk.x3.b;
            public static C1: com.medallia.digital.mobilesdk.x3.b;
            public static D1: com.medallia.digital.mobilesdk.x3.b;
            public static E1: com.medallia.digital.mobilesdk.x3.b;
            public static F1: com.medallia.digital.mobilesdk.x3.b;
            public static G1: com.medallia.digital.mobilesdk.x3.b;
            public static H1: com.medallia.digital.mobilesdk.x3.b;
            public static I1: com.medallia.digital.mobilesdk.x3.b;
            public static J1: com.medallia.digital.mobilesdk.x3.b;
            public static K1: com.medallia.digital.mobilesdk.x3.b;
            public static L1: com.medallia.digital.mobilesdk.x3.b;
            public static M1: com.medallia.digital.mobilesdk.x3.b;
            public static N1: com.medallia.digital.mobilesdk.x3.b;
            public static O1: com.medallia.digital.mobilesdk.x3.b;
            public static P1: com.medallia.digital.mobilesdk.x3.b;
            public static Q1: com.medallia.digital.mobilesdk.x3.b;
            public static R1: com.medallia.digital.mobilesdk.x3.b;
            public static S1: com.medallia.digital.mobilesdk.x3.b;
            public static T1: com.medallia.digital.mobilesdk.x3.b;
            public static U1: com.medallia.digital.mobilesdk.x3.b;
            public static V1: com.medallia.digital.mobilesdk.x3.b;
            public static W1: com.medallia.digital.mobilesdk.x3.b;
            public static X1: com.medallia.digital.mobilesdk.x3.b;
            public static Y1: com.medallia.digital.mobilesdk.x3.b;
            public static Z1: com.medallia.digital.mobilesdk.x3.b;
            public static a2: com.medallia.digital.mobilesdk.x3.b;
            public static b2: com.medallia.digital.mobilesdk.x3.b;
            public static c2: com.medallia.digital.mobilesdk.x3.b;
            public static d2: com.medallia.digital.mobilesdk.x3.b;
            public static e2: com.medallia.digital.mobilesdk.x3.b;
            public static f2: com.medallia.digital.mobilesdk.x3.b;
            public static g2: com.medallia.digital.mobilesdk.x3.b;
            public static h2: com.medallia.digital.mobilesdk.x3.b;
            public static i2: com.medallia.digital.mobilesdk.x3.b;
            public static j2: com.medallia.digital.mobilesdk.x3.b;
            public static k2: com.medallia.digital.mobilesdk.x3.b;
            public static l2: com.medallia.digital.mobilesdk.x3.b;
            public static m2: com.medallia.digital.mobilesdk.x3.b;
            public static n2: com.medallia.digital.mobilesdk.x3.b;
            public static o2: com.medallia.digital.mobilesdk.x3.b;
            public static p2: com.medallia.digital.mobilesdk.x3.b;
            public static q2: com.medallia.digital.mobilesdk.x3.b;
            public static r2: com.medallia.digital.mobilesdk.x3.b;
            public static s2: com.medallia.digital.mobilesdk.x3.b;
            public static t2: com.medallia.digital.mobilesdk.x3.b;
            public static u2: com.medallia.digital.mobilesdk.x3.b;
            public static v2: com.medallia.digital.mobilesdk.x3.b;
            public static w2: com.medallia.digital.mobilesdk.x3.b;
            public static x2: com.medallia.digital.mobilesdk.x3.b;
            public static y2: com.medallia.digital.mobilesdk.x3.b;
            public static z2: com.medallia.digital.mobilesdk.x3.b;
            public static A2: com.medallia.digital.mobilesdk.x3.b;
            public static B2: com.medallia.digital.mobilesdk.x3.b;
            public static C2: com.medallia.digital.mobilesdk.x3.b;
            public static D2: com.medallia.digital.mobilesdk.x3.b;
            public static E2: com.medallia.digital.mobilesdk.x3.b;
            public static F2: com.medallia.digital.mobilesdk.x3.b;
            public static G2: com.medallia.digital.mobilesdk.x3.b;
            public static H2: com.medallia.digital.mobilesdk.x3.b;
            public static I2: com.medallia.digital.mobilesdk.x3.b;
            public static J2: com.medallia.digital.mobilesdk.x3.b;
            public static K2: com.medallia.digital.mobilesdk.x3.b;
            public static L2: com.medallia.digital.mobilesdk.x3.b;
            public static M2: com.medallia.digital.mobilesdk.x3.b;
            public static N2: com.medallia.digital.mobilesdk.x3.b;
            public static O2: com.medallia.digital.mobilesdk.x3.b;
            public static P2: com.medallia.digital.mobilesdk.x3.b;
            public static Q2: com.medallia.digital.mobilesdk.x3.b;
            public static R2: com.medallia.digital.mobilesdk.x3.b;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.x3.b;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.x3.b>;
          }
          export class c {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.x3.c>;
            public static b: com.medallia.digital.mobilesdk.x3.c;
            public static c: com.medallia.digital.mobilesdk.x3.c;
            public static d: com.medallia.digital.mobilesdk.x3.c;
            public static e: com.medallia.digital.mobilesdk.x3.c;
            public static f: com.medallia.digital.mobilesdk.x3.c;
            public static g: com.medallia.digital.mobilesdk.x3.c;
            public static h: com.medallia.digital.mobilesdk.x3.c;
            public static i: com.medallia.digital.mobilesdk.x3.c;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.x3.c;
            public a(): string;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.x3.c>;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class x4 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.x4>;
          public c(): string;
          public d(): string;
          public b(): string;
          public a(): string;
          public e(): number;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class x5 extends com.medallia.digital.mobilesdk.v0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.x5>;
          public a(param0: com.medallia.digital.mobilesdk.d6<com.medallia.digital.mobilesdk.z0>): void;
          public a(): void;
          public a(param0: com.medallia.digital.mobilesdk.y5): void;
        }
        export module x5 {
          export class a extends com.medallia.digital.mobilesdk.e6.a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.x5.a>;
            public a(param0: com.medallia.digital.mobilesdk.a6): void;
            public a(param0: com.medallia.digital.mobilesdk.y5): void;
          }
          export class b extends com.medallia.digital.mobilesdk.d6<java.lang.Void> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.x5.b>;
            public a(param0: java.lang.Void): void;
            public a(param0: com.medallia.digital.mobilesdk.g4): void;
            public a(param0: any): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class x6 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.x6>;
          public static b(): com.medallia.digital.mobilesdk.x6;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class x7 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.x7>;
          public a(param0: com.medallia.digital.mobilesdk.e6.a): void;
        }
        export module x7 {
          export class a extends com.medallia.digital.mobilesdk.e6.a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.x7.a>;
            public a(param0: com.medallia.digital.mobilesdk.a6): void;
            public a(param0: com.medallia.digital.mobilesdk.y5): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export abstract class y {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.y>;
          public describeContents(): number;
          public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class y0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.y0>;
          public static c(): com.medallia.digital.mobilesdk.y0;
          public b(): com.medallia.digital.mobilesdk.ConfigurationUUID;
          public a(param0: com.medallia.digital.mobilesdk.ConfigurationContract): void;
          public a(): com.medallia.digital.mobilesdk.ConfigurationContract;
          public a(param0: com.medallia.digital.mobilesdk.PropertyConfigurationContract): void;
          public a(param0: com.medallia.digital.mobilesdk.ConfigurationUUID): void;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class y1 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.y1>;
          public constructor();
        }
        export module y1 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.y1.a>;
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.y1.b>;
            public static a: com.medallia.digital.mobilesdk.y1.b;
            public static b: com.medallia.digital.mobilesdk.y1.b;
            public static c: com.medallia.digital.mobilesdk.y1.b;
            public static d: com.medallia.digital.mobilesdk.y1.b;
            public static e: com.medallia.digital.mobilesdk.y1.b;
            public static f: com.medallia.digital.mobilesdk.y1.b;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.y1.b>;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.y1.b;
          }
          export class c {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.y1.c>;
            public static b: com.medallia.digital.mobilesdk.y1.c;
            public static c: com.medallia.digital.mobilesdk.y1.c;
            public static d: com.medallia.digital.mobilesdk.y1.c;
            public static e: com.medallia.digital.mobilesdk.y1.c;
            public static f: com.medallia.digital.mobilesdk.y1.c;
            public static g: com.medallia.digital.mobilesdk.y1.c;
            public static h: com.medallia.digital.mobilesdk.y1.c;
            public static i: com.medallia.digital.mobilesdk.y1.c;
            public static j: com.medallia.digital.mobilesdk.y1.c;
            public static k: com.medallia.digital.mobilesdk.y1.c;
            public static a(param0: string): com.medallia.digital.mobilesdk.y1.c;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.y1.c>;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.y1.c;
          }
          export class d {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.y1.d>;
            public static b: com.medallia.digital.mobilesdk.y1.d;
            public static c: com.medallia.digital.mobilesdk.y1.d;
            public static d: com.medallia.digital.mobilesdk.y1.d;
            public static a(param0: string): com.medallia.digital.mobilesdk.y1.d;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.y1.d;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.y1.d>;
          }
          export class e {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.y1.e>;
            public static b: com.medallia.digital.mobilesdk.y1.e;
            public static c: com.medallia.digital.mobilesdk.y1.e;
            public static d: com.medallia.digital.mobilesdk.y1.e;
            public static e: com.medallia.digital.mobilesdk.y1.e;
            public static f: com.medallia.digital.mobilesdk.y1.e;
            public static g: com.medallia.digital.mobilesdk.y1.e;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.y1.e;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.y1.e>;
            public static a(param0: string): com.medallia.digital.mobilesdk.y1.e;
          }
          export class f {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.y1.f>;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.y1.f;
            public static a(param0: string): com.medallia.digital.mobilesdk.y1.f;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.y1.f>;
          }
          export class g {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.y1.g>;
            public static b: com.medallia.digital.mobilesdk.y1.g;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.y1.g;
            public static a(param0: string): com.medallia.digital.mobilesdk.y1.g;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.y1.g>;
          }
          export class h {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.y1.h>;
            public static b: com.medallia.digital.mobilesdk.y1.h;
            public static c: com.medallia.digital.mobilesdk.y1.h;
            public static d: com.medallia.digital.mobilesdk.y1.h;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.y1.h>;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.y1.h;
            public static a(param0: string): com.medallia.digital.mobilesdk.y1.h;
          }
          export class i {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.y1.i>;
            public static b: com.medallia.digital.mobilesdk.y1.i;
            public static c: com.medallia.digital.mobilesdk.y1.i;
            public static d: com.medallia.digital.mobilesdk.y1.i;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.y1.i>;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.y1.i;
            public static a(param0: com.medallia.digital.mobilesdk.ValueType): com.medallia.digital.mobilesdk.y1.i;
            public static a(param0: string): com.medallia.digital.mobilesdk.y1.i;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class y2 extends com.medallia.digital.mobilesdk.p0<string> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.y2>;
          public a(param0: com.medallia.digital.mobilesdk.y5): com.medallia.digital.mobilesdk.g4;
          public b(param0: com.medallia.digital.mobilesdk.y5): void;
          public d(): com.medallia.digital.mobilesdk.g4;
          public b(): void;
          public a(param0: boolean): void;
          public a(): void;
        }
        export module y2 {
          export class a extends com.medallia.digital.mobilesdk.e6.a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.y2.a>;
            public a(param0: com.medallia.digital.mobilesdk.a6): void;
            public a(param0: com.medallia.digital.mobilesdk.y5): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class y3 extends com.medallia.digital.mobilesdk.i0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.y3>;
          public toJsonString(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class y4 extends com.medallia.digital.mobilesdk.k1<com.medallia.digital.mobilesdk.v4> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.y4>;
          public a(param0: com.medallia.digital.mobilesdk.v4): boolean;
          public c(param0: androidNative.Array<any>): java.util.ArrayList<any>;
          public e(): string;
          public b(param0: com.medallia.digital.mobilesdk.v4): globalAndroid.content.ContentValues;
          public a(param0: androidNative.Array<any>): boolean;
          public c(param0: androidNative.Array<any>): java.util.ArrayList<com.medallia.digital.mobilesdk.v4>;
          public d(): java.util.HashMap<string, string>;
          public d(param0: com.medallia.digital.mobilesdk.v4): boolean;
          public d(param0: androidNative.Array<any>): com.medallia.digital.mobilesdk.v4;
          public b(param0: androidNative.Array<any>): any;
          public c(): number;
          public a(param0: boolean, param1: string): void;
          public b(param0: any): globalAndroid.content.ContentValues;
          public b(): boolean;
          public c(param0: com.medallia.digital.mobilesdk.v4): boolean;
          public d(param0: any): boolean;
          public a(param0: any): boolean;
          public c(param0: any): boolean;
        }
        export module y4 {
          export class a extends java.util.HashMap<string, string> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.y4.a>;
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.y4.b>;
          }
          export class c {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.y4.c>;
          }
          export class d {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.y4.d>;
            public static a: com.medallia.digital.mobilesdk.y4.d;
            public static b: com.medallia.digital.mobilesdk.y4.d;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.y4.d;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.y4.d>;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class y5 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.y5>;
          public b(): number;
          public a(): com.medallia.digital.mobilesdk.y5.a;
          public constructor(param0: number);
        }
        export module y5 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.y5.a>;
            public static b: com.medallia.digital.mobilesdk.y5.a;
            public static c: com.medallia.digital.mobilesdk.y5.a;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.y5.a;
            public static a(param0: number): com.medallia.digital.mobilesdk.y5.a;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.y5.a>;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class y6 extends com.medallia.digital.mobilesdk.c1 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.y6>;
          public constructor(param0: org.json.JSONObject);
          public toJsonString(): string;
          public b(): com.medallia.digital.mobilesdk.s7<java.lang.Boolean>;
          public a(): java.util.ArrayList<com.medallia.digital.mobilesdk.z1<java.lang.Long>>;
          public c(): java.util.ArrayList<com.medallia.digital.mobilesdk.z1<java.lang.Boolean>>;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class y7 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.y7>;
          public constructor();
          public static b(param0: number): string;
          public static a(param0: number): string;
        }
        export module y7 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.y7.a>;
            public static a: number;
            public static b: number;
            public static d: number;
            public constructor();
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.y7.b>;
            public static a: number;
            public static b: number;
            public static c: number;
            public static d: number;
            public constructor();
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class z {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.z>;
          public h(): void;
          public d(): void;
          public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
          public f(): void;
          public g(): void;
          public e(): void;
          public c(): void;
        }
        export module z {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.z.a>;
          }
          export class b {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.z.b>;
            public onSingleTapUp(param0: globalAndroid.view.MotionEvent): boolean;
          }
          export class c {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.z.c>;
            public static a: com.medallia.digital.mobilesdk.z.c;
            public static b: com.medallia.digital.mobilesdk.z.c;
            public static c: com.medallia.digital.mobilesdk.z.c;
            public static d: com.medallia.digital.mobilesdk.z.c;
            public static valueOf(param0: string): com.medallia.digital.mobilesdk.z.c;
            public static values(): androidNative.Array<com.medallia.digital.mobilesdk.z.c>;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class z0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.z0>;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class z1<T> extends com.medallia.digital.mobilesdk.c1 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.z1<any>>;
          public b(): com.medallia.digital.mobilesdk.r7<any>;
          public constructor(param0: org.json.JSONObject);
          public c(): com.medallia.digital.mobilesdk.MDEngagementType;
          public toJsonString(): string;
          public a(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class z2 extends com.medallia.digital.mobilesdk.n5<string> {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.z2>;
          public constructor(param0: com.medallia.digital.mobilesdk.m5, param1: com.medallia.digital.mobilesdk.s0);
          public constructor(param0: com.medallia.digital.mobilesdk.s0);
          public c(): com.medallia.digital.mobilesdk.CollectorContract;
          public r(): string;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class z3 extends com.medallia.digital.mobilesdk.h0 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.z3>;
          public c(): globalAndroid.content.BroadcastReceiver;
          public a(): string;
          public a(param0: any): void;
          public b(): any;
        }
        export module z3 {
          export class a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.z3.a>;
            public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class z4 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.z4>;
          public static values(): androidNative.Array<com.medallia.digital.mobilesdk.z4>;
          public static valueOf(param0: string): com.medallia.digital.mobilesdk.z4;
          public static c(param0: string): string;
          public static d(param0: string): string;
          public static b(param0: string): string;
          public static a(param0: string): com.medallia.digital.mobilesdk.z4;
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class z5 extends com.medallia.digital.mobilesdk.v3.h {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.z5>;
          public onForeground(): void;
          public onBackground(): void;
          public a(param0: com.medallia.digital.mobilesdk.a6): void;
          public b(): void;
          public f(): void;
          public a(param0: java.util.concurrent.ExecutorService, param1: com.medallia.digital.mobilesdk.e6.b, param2: com.medallia.digital.mobilesdk.j0.d, param3: string, param4: java.util.HashMap<string, string>, param5: org.json.JSONObject, param6: number, param7: number, param8: com.medallia.digital.mobilesdk.e6.a, param9: number): void;
          public a(param0: java.util.concurrent.ExecutorService, param1: com.medallia.digital.mobilesdk.e6.b, param2: com.medallia.digital.mobilesdk.j0.d, param3: string, param4: java.util.HashMap<string, string>, param5: org.json.JSONObject, param6: string, param7: number, param8: number, param9: com.medallia.digital.mobilesdk.e6.a, param10: number): void;
          public e(): void;
          public a(param0: com.medallia.digital.mobilesdk.y5): void;
        }
        export module z5 {
          export class a extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.z5.a>;
            public a(): void;
          }
          export class b extends com.medallia.digital.mobilesdk.e6.a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.z5.b>;
            public a(param0: com.medallia.digital.mobilesdk.a6): void;
            public a(param0: com.medallia.digital.mobilesdk.y5): void;
          }
          export class c extends com.medallia.digital.mobilesdk.e6.a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.z5.c>;
            public a(param0: com.medallia.digital.mobilesdk.a6): void;
            public a(param0: com.medallia.digital.mobilesdk.y5): void;
          }
          export class d extends com.medallia.digital.mobilesdk.e6.a {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.z5.d>;
            public a(param0: com.medallia.digital.mobilesdk.a6): void;
            public a(param0: com.medallia.digital.mobilesdk.y5): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class z6 extends java.lang.Object {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.z6>;
          public static q: string;
          public f: string;
          public i: boolean;
          public l: boolean;
          public m: boolean;
          public b(param0: com.medallia.digital.mobilesdk.y1.b): void;
          public onForeground(): void;
          public clearAndDisconnect(): void;
          public onBackground(): void;
          public a(param0: com.medallia.digital.mobilesdk.ConfigurationContract): void;
          public b(param0: boolean, param1: boolean): void;
          public a(param0: com.medallia.digital.mobilesdk.y1.b): void;
          public b(param0: boolean): void;
          public b(): java.util.ArrayList<com.medallia.digital.mobilesdk.x1>;
          public a(param0: any): void;
          public constructor();
          public a(param0: boolean, param1: boolean): void;
          public c(): boolean;
          public a(): com.medallia.digital.mobilesdk.v6;
          public g(): void;
          public a(param0: boolean): void;
        }
        export module z6 {
          export class a extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.z6.a>;
            public a(): void;
          }
          export module a {
            export class a extends com.medallia.digital.mobilesdk.n4 {
              public static class: java.lang.Class<com.medallia.digital.mobilesdk.z6.a.a>;
              public a(): void;
            }
          }
          export class b extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.z6.b>;
            public a(): void;
          }
          export module b {
            export class a {
              public static class: java.lang.Class<com.medallia.digital.mobilesdk.z6.b.a>;
              public onPageFinished(param0: globalAndroid.webkit.WebView, param1: string): void;
            }
            export module a {
              export class a extends globalAndroid.webkit.ValueCallback<string> {
                public static class: java.lang.Class<com.medallia.digital.mobilesdk.z6.b.a.a>;
                public a(param0: string): void;
              }
              export module a {
                export class a extends com.medallia.digital.mobilesdk.n4 {
                  public static class: java.lang.Class<com.medallia.digital.mobilesdk.z6.b.a.a.a>;
                  public a(): void;
                }
              }
            }
          }
          export class c extends com.medallia.digital.mobilesdk.n4 {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.z6.c>;
            public a(): void;
          }
          export class d extends com.medallia.digital.mobilesdk.d6<java.io.File> {
            public static class: java.lang.Class<com.medallia.digital.mobilesdk.z6.d>;
            public a(param0: java.io.File): void;
            public a(param0: com.medallia.digital.mobilesdk.g4): void;
            public a(param0: any): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class z7 {
          public static class: java.lang.Class<com.medallia.digital.mobilesdk.z7>;
          /**
           * Constructs a new instance of the com.medallia.digital.mobilesdk.z7 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { clearAndDisconnect(): void });
          public constructor();
          public clearAndDisconnect(): void;
        }
      }
    }
  }
}

//Generics information:
//com.medallia.digital.mobilesdk.a:1
//com.medallia.digital.mobilesdk.a2:1
//com.medallia.digital.mobilesdk.d2:1
//com.medallia.digital.mobilesdk.d6:1
//com.medallia.digital.mobilesdk.j0:1
//com.medallia.digital.mobilesdk.k1:1
//com.medallia.digital.mobilesdk.l7:1
//com.medallia.digital.mobilesdk.l7.b:1
//com.medallia.digital.mobilesdk.n5:1
//com.medallia.digital.mobilesdk.p0:1
//com.medallia.digital.mobilesdk.q6:1
//com.medallia.digital.mobilesdk.r0:1
//com.medallia.digital.mobilesdk.r4:1
//com.medallia.digital.mobilesdk.r7:1
//com.medallia.digital.mobilesdk.s7:1
//com.medallia.digital.mobilesdk.t7:1
//com.medallia.digital.mobilesdk.v2.f:1
//com.medallia.digital.mobilesdk.z1:1
