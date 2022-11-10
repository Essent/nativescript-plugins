/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export class AgentConfiguration {
          public static class: java.lang.Class<com.appdynamics.eumagent.runtime.AgentConfiguration>;
          public appKey: string;
          public applicationName: string;
          public context: globalAndroid.content.Context;
          public collectorURL: string;
          public screenshotURL: string;
          public loggingLevel: number;
          public collectorChannelFactory: com.appdynamics.eumagent.runtime.CollectorChannelFactory;
          public excludedUrlPatterns: java.util.Set<string>;
          public compileTimeInstrumentationCheck: boolean;
          public autoInstrument: boolean;
          public crashCallback: com.appdynamics.eumagent.runtime.CrashReportCallback;
          public networkRequestCallback: com.appdynamics.eumagent.runtime.NetworkRequestCallback;
          public interactionCaptureMode: number;
          public screenshotsEnabled: boolean;
          public jsAgentInjectionEnabled: boolean;
          public jsAgentAjaxEnabled: boolean;
          public crashReportingEnabled: boolean;
          public toString(): string;
          public static builder(): com.appdynamics.eumagent.runtime.AgentConfiguration.Builder;
        }
        export module AgentConfiguration {
          export class Builder {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.AgentConfiguration.Builder>;
            public withLoggingLevel(param0: number): com.appdynamics.eumagent.runtime.AgentConfiguration.Builder;
            public withLoggingEnabled(param0: boolean): com.appdynamics.eumagent.runtime.AgentConfiguration.Builder;
            public withAppKey(param0: string): com.appdynamics.eumagent.runtime.AgentConfiguration.Builder;
            public withExcludedUrlPatterns(param0: java.util.Set<string>): com.appdynamics.eumagent.runtime.AgentConfiguration.Builder;
            public withNetworkRequestCallback(param0: com.appdynamics.eumagent.runtime.NetworkRequestCallback): com.appdynamics.eumagent.runtime.AgentConfiguration.Builder;
            public withJSAgentInjectionEnabled(param0: boolean): com.appdynamics.eumagent.runtime.AgentConfiguration.Builder;
            public withAutoInstrument(param0: boolean): com.appdynamics.eumagent.runtime.AgentConfiguration.Builder;
            public withCompileTimeInstrumentationCheck(param0: boolean): com.appdynamics.eumagent.runtime.AgentConfiguration.Builder;
            public withScreenshotsEnabled(param0: boolean): com.appdynamics.eumagent.runtime.AgentConfiguration.Builder;
            public withJSAgentAjaxEnabled(param0: boolean): com.appdynamics.eumagent.runtime.AgentConfiguration.Builder;
            public withCrashReportingEnabled(param0: boolean): com.appdynamics.eumagent.runtime.AgentConfiguration.Builder;
            public build(): com.appdynamics.eumagent.runtime.AgentConfiguration;
            public withContext(param0: globalAndroid.content.Context): com.appdynamics.eumagent.runtime.AgentConfiguration.Builder;
            public withScreenshotURL(param0: string): com.appdynamics.eumagent.runtime.AgentConfiguration.Builder;
            public withInteractionCaptureMode(param0: number): com.appdynamics.eumagent.runtime.AgentConfiguration.Builder;
            public withApplicationName(param0: string): com.appdynamics.eumagent.runtime.AgentConfiguration.Builder;
            public withCollectorURL(param0: string): com.appdynamics.eumagent.runtime.AgentConfiguration.Builder;
            public withCrashCallback(param0: com.appdynamics.eumagent.runtime.CrashReportCallback): com.appdynamics.eumagent.runtime.AgentConfiguration.Builder;
            public withCollectorChannelFactory(param0: com.appdynamics.eumagent.runtime.CollectorChannelFactory): com.appdynamics.eumagent.runtime.AgentConfiguration.Builder;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export class BreadcrumbVisibility {
          public static class: java.lang.Class<com.appdynamics.eumagent.runtime.BreadcrumbVisibility>;
          public static CRASHES_ONLY: number;
          public static CRASHES_AND_SESSIONS: number;
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export class CallTracker {
          public static class: java.lang.Class<com.appdynamics.eumagent.runtime.CallTracker>;
          /**
           * Constructs a new instance of the com.appdynamics.eumagent.runtime.CallTracker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { withArguments(param0: androidNative.Array<any>): com.appdynamics.eumagent.runtime.CallTracker; reportCallEndedWithReturnValue(param0: any): void; reportCallEndedWithException(param0: java.lang.Exception): void; reportCallEnded(): void; setStartTime(param0: number): void });
          public constructor();
          public withArguments(param0: androidNative.Array<any>): com.appdynamics.eumagent.runtime.CallTracker;
          public reportCallEnded(): void;
          public setStartTime(param0: number): void;
          public reportCallEndedWithException(param0: java.lang.Exception): void;
          public reportCallEndedWithReturnValue(param0: any): void;
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export abstract class CollectorChannel {
          public static class: java.lang.Class<com.appdynamics.eumagent.runtime.CollectorChannel>;
          public setRequestMethod(param0: string): void;
          public getRequestProperties(): java.util.Map<string, java.util.List<string>>;
          public getResponseCode(): number;
          public setURL(param0: java.net.URL): void;
          public setReadTimeout(param0: number): void;
          public getURL(): java.net.URL;
          public getRequestMethod(): string;
          public constructor();
          public getReadTimeout(): number;
          public getOutputStream(): java.io.OutputStream;
          public getInputStream(): java.io.InputStream;
          public getHeaderFields(): java.util.Map<string, java.util.List<string>>;
          public getConnectTimeout(): number;
          public setConnectTimeout(param0: number): void;
          public addRequestProperty(param0: string, param1: string): void;
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export class CollectorChannelFactory {
          public static class: java.lang.Class<com.appdynamics.eumagent.runtime.CollectorChannelFactory>;
          /**
           * Constructs a new instance of the com.appdynamics.eumagent.runtime.CollectorChannelFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { newCollectorChannel(): com.appdynamics.eumagent.runtime.CollectorChannel });
          public constructor();
          public newCollectorChannel(): com.appdynamics.eumagent.runtime.CollectorChannel;
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export class CrashReportCallback {
          public static class: java.lang.Class<com.appdynamics.eumagent.runtime.CrashReportCallback>;
          /**
           * Constructs a new instance of the com.appdynamics.eumagent.runtime.CrashReportCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onCrashesReported(param0: java.util.Collection<com.appdynamics.eumagent.runtime.CrashReportSummary>): void });
          public constructor();
          public onCrashesReported(param0: java.util.Collection<com.appdynamics.eumagent.runtime.CrashReportSummary>): void;
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export class CrashReportSummary {
          public static class: java.lang.Class<com.appdynamics.eumagent.runtime.CrashReportSummary>;
          public crashId: string;
          public exceptionClass: string;
          public exceptionMessage: string;
          public constructor(param0: string, param1: string, param2: string);
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export class DontObfuscate {
          public static class: java.lang.Class<com.appdynamics.eumagent.runtime.DontObfuscate>;
          /**
           * Constructs a new instance of the com.appdynamics.eumagent.runtime.DontObfuscate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export class ErrorSeverityLevel {
          public static class: java.lang.Class<com.appdynamics.eumagent.runtime.ErrorSeverityLevel>;
          /**
           * Constructs a new instance of the com.appdynamics.eumagent.runtime.ErrorSeverityLevel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
          public static WARNING: number;
          public static INFO: number;
          public static CRITICAL: number;
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export class HttpRequestTracker {
          public static class: java.lang.Class<com.appdynamics.eumagent.runtime.HttpRequestTracker>;
          /**
           * Constructs a new instance of the com.appdynamics.eumagent.runtime.HttpRequestTracker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            getException(): java.lang.Exception;
            withException(param0: java.lang.Exception): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            getThrowable(): java.lang.Throwable;
            withThrowable(param0: java.lang.Throwable): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            getError(): string;
            withError(param0: string): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            getURL(): java.net.URL;
            withURL(param0: java.net.URL): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            getResponseCode(): number;
            withResponseCode(param0: number): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            withStatusLine(param0: string): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            getResponseHeaderFields(): java.util.Map<string, java.util.List<string>>;
            withResponseHeaderFields(param0: java.util.Map<string, java.util.List<string>>): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            getResponseContentLength(): java.lang.Long;
            withResponseContentLength(param0: java.lang.Long): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            getRequestHeaderFields(): java.util.Map<string, java.util.List<string>>;
            withRequestHeaderFields(param0: java.util.Map<string, java.util.List<string>>): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            getRequestContentLength(): java.lang.Long;
            withRequestContentLength(param0: java.lang.Long): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            getInstrumentationSource(): string;
            withInstrumentationSource(param0: string): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            withUserData(param0: string, param1: string): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            withUserDataLong(param0: string, param1: java.lang.Long): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            withUserDataDouble(param0: string, param1: java.lang.Double): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            withUserDataBoolean(param0: string, param1: java.lang.Boolean): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            withUserDataDate(param0: string, param1: java.util.Date): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            reportDone(): void;
            setStartTime(param0: number): void;
          });
          public constructor();
          public getResponseContentLength(): java.lang.Long;
          public withStatusLine(param0: string): com.appdynamics.eumagent.runtime.HttpRequestTracker;
          public getResponseCode(): number;
          public withResponseCode(param0: number): com.appdynamics.eumagent.runtime.HttpRequestTracker;
          public withInstrumentationSource(param0: string): com.appdynamics.eumagent.runtime.HttpRequestTracker;
          public getThrowable(): java.lang.Throwable;
          public withThrowable(param0: java.lang.Throwable): com.appdynamics.eumagent.runtime.HttpRequestTracker;
          public withUserDataBoolean(param0: string, param1: java.lang.Boolean): com.appdynamics.eumagent.runtime.HttpRequestTracker;
          public getRequestContentLength(): java.lang.Long;
          public withUserDataLong(param0: string, param1: java.lang.Long): com.appdynamics.eumagent.runtime.HttpRequestTracker;
          public getException(): java.lang.Exception;
          public withResponseHeaderFields(param0: java.util.Map<string, java.util.List<string>>): com.appdynamics.eumagent.runtime.HttpRequestTracker;
          public withRequestContentLength(param0: java.lang.Long): com.appdynamics.eumagent.runtime.HttpRequestTracker;
          public withError(param0: string): com.appdynamics.eumagent.runtime.HttpRequestTracker;
          public setStartTime(param0: number): void;
          public withUserDataDouble(param0: string, param1: java.lang.Double): com.appdynamics.eumagent.runtime.HttpRequestTracker;
          public withUserData(param0: string, param1: string): com.appdynamics.eumagent.runtime.HttpRequestTracker;
          public withException(param0: java.lang.Exception): com.appdynamics.eumagent.runtime.HttpRequestTracker;
          public withURL(param0: java.net.URL): com.appdynamics.eumagent.runtime.HttpRequestTracker;
          public getURL(): java.net.URL;
          public getRequestHeaderFields(): java.util.Map<string, java.util.List<string>>;
          public getError(): string;
          public withResponseContentLength(param0: java.lang.Long): com.appdynamics.eumagent.runtime.HttpRequestTracker;
          public getResponseHeaderFields(): java.util.Map<string, java.util.List<string>>;
          public reportDone(): void;
          public withRequestHeaderFields(param0: java.util.Map<string, java.util.List<string>>): com.appdynamics.eumagent.runtime.HttpRequestTracker;
          public getInstrumentationSource(): string;
          public withUserDataDate(param0: string, param1: java.util.Date): com.appdynamics.eumagent.runtime.HttpRequestTracker;
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export class InfoPoint {
          public static class: java.lang.Class<com.appdynamics.eumagent.runtime.InfoPoint>;
          /**
           * Constructs a new instance of the com.appdynamics.eumagent.runtime.InfoPoint interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export class Instrumentation {
          public static class: java.lang.Class<com.appdynamics.eumagent.runtime.Instrumentation>;
          public static hybridAgentInfo: com.appdynamics.eumagent.runtime.private.o;
          public static LOGGING_LEVEL_NONE: number;
          public static LOGGING_LEVEL_INFO: number;
          public static LOGGING_LEVEL_VERBOSE: number;
          public static MAX_USER_DATA_STRING_LENGTH: number;
          public static VALID_INTERACTION_CAPTURE_MODES: number;
          public static initializationStarted: boolean;
          public static trackUIEvent(param0: string, param1: string, param2: string, param3: number, param4: string, param5: string, param6: number, param7: string, param8: string): void;
          public static setUserDataLong(param0: string, param1: java.lang.Long): void;
          public static stopTimer(param0: string): void;
          public static shutdownAgent(): void;
          public static disableInstrumentation(param0: number): void;
          public static beginHttpRequest(param0: java.net.URL): com.appdynamics.eumagent.runtime.HttpRequestTracker;
          public static endCall(param0: com.appdynamics.eumagent.runtime.CallTracker): void;
          public static unblockScreenshots(): void;
          public static takeScreenshot(): void;
          public static startSessionFrame(param0: string): com.appdynamics.eumagent.runtime.SessionFrame;
          public static blockScreenshots(): void;
          public static changeAppKey(param0: string): void;
          public static startTimer(param0: string): void;
          public static setUserDataDouble(param0: string, param1: java.lang.Double): void;
          public static setUserDataBoolean(param0: string, param1: java.lang.Boolean): void;
          public static reportError(param0: java.lang.Throwable, param1: number): void;
          public static setUserDataDate(param0: string, param1: java.util.Date): void;
          public static trackPageEnd(param0: string, param1: java.util.UUID, param2: number, param3: number): void;
          public static beginCall(param0: boolean, param1: string, param2: string, param3: androidNative.Array<any>): com.appdynamics.eumagent.runtime.CallTracker;
          public static start(param0: com.appdynamics.eumagent.runtime.AgentConfiguration): void;
          public static leaveBreadcrumb(param0: string, param1: number): void;
          public static setUserData(param0: string, param1: string): void;
          public static restartAgent(): void;
          public static startNextSession(): void;
          public static leaveBreadcrumb(param0: string): void;
          public static trackPageStart(param0: string, param1: java.util.UUID, param2: number): void;
          public static reportError(param0: java.lang.Throwable): void;
          public static screenshotsBlocked(): boolean;
          public static start(param0: string, param1: globalAndroid.content.Context, param2: string): void;
          public static reportMetric(param0: string, param1: number): void;
          public static beginCall(param0: string, param1: string, param2: androidNative.Array<any>): com.appdynamics.eumagent.runtime.CallTracker;
          public static start(param0: string, param1: globalAndroid.content.Context): void;
          public static start(param0: string, param1: globalAndroid.content.Context, param2: boolean): void;
          public static createCrashReport(param0: string, param1: string): number;
          public static endCall(param0: com.appdynamics.eumagent.runtime.CallTracker, param1: any): void;
          public static start(param0: string, param1: globalAndroid.content.Context, param2: string, param3: boolean): void;
          public static startFromHybrid(param0: com.appdynamics.eumagent.runtime.AgentConfiguration, param1: string, param2: string): void;
        }
        export module Instrumentation {
          export class a {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.Instrumentation.a>;
            public constructor(param0: com.appdynamics.eumagent.runtime.AgentConfiguration, param1: com.appdynamics.eumagent.runtime.private.r, param2: string, param3: java.util.concurrent.ScheduledThreadPoolExecutor);
            public run(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export class InstrumentationCallbacks {
          public static class: java.lang.Class<com.appdynamics.eumagent.runtime.InstrumentationCallbacks>;
          public static currentActivity: java.lang.ref.WeakReference<globalAndroid.app.Activity>;
          public static execute(param0: org.apache.http.client.HttpClient, param1: org.apache.http.HttpHost, param2: org.apache.http.HttpRequest, param3: org.apache.http.client.ResponseHandler<any>, param4: org.apache.http.protocol.HttpContext): any;
          public static requestSent(param0: java.net.URLConnection): void;
          public static setOnFocusChangeListenerCalled(param0: globalAndroid.view.View, param1: globalAndroid.view.View.OnFocusChangeListener): void;
          public static onStartCalled(param0: globalAndroid.app.Activity): void;
          public static execute(param0: org.apache.http.client.HttpClient, param1: org.apache.http.client.methods.HttpUriRequest, param2: org.apache.http.protocol.HttpContext): org.apache.http.HttpResponse;
          public static onRestartCalled(param0: globalAndroid.app.Activity): void;
          public static execute(param0: org.apache.http.client.HttpClient, param1: org.apache.http.client.methods.HttpUriRequest, param2: org.apache.http.client.ResponseHandler<any>, param3: org.apache.http.protocol.HttpContext): any;
          public static onResumeCalled(param0: globalAndroid.app.Activity): void;
          public static setOnClickListenerCalled(param0: globalAndroid.view.View, param1: globalAndroid.view.View.OnClickListener): void;
          public static onCreateCalled(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
          public static onPauseCalled(param0: globalAndroid.app.Activity): void;
          public static onStopCalled(param0: globalAndroid.app.Activity): void;
          public static loadUrlCalled(param0: globalAndroid.webkit.WebView): void;
          public constructor();
          public static setOnHierarchyChangeListenerCalled(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.ViewGroup.OnHierarchyChangeListener): void;
          public static networkError(param0: java.net.URLConnection, param1: java.io.IOException): void;
          public static requestAboutToBeSent(param0: java.net.URLConnection): void;
          public static setOnItemClickListenerCalled(param0: globalAndroid.widget.AdapterView<any>, param1: globalAndroid.widget.AdapterView.OnItemClickListener): void;
          public static requestHarvestable(param0: java.net.URLConnection): void;
          public static reportAgentError(param0: string, param1: java.lang.Throwable): void;
          public static getInputStream(param0: java.net.URLConnection): java.io.InputStream;
          public static onPageFinishedCalled(param0: globalAndroid.webkit.WebViewClient, param1: globalAndroid.webkit.WebView, param2: string): void;
          public static execute(param0: org.apache.http.client.HttpClient, param1: org.apache.http.HttpHost, param2: org.apache.http.HttpRequest): org.apache.http.HttpResponse;
          public static webViewCrashed(param0: any, param1: java.lang.Throwable): void;
          public static execute(param0: org.apache.http.client.HttpClient, param1: org.apache.http.client.methods.HttpUriRequest): org.apache.http.HttpResponse;
          public static onStartCalled(param0: globalAndroid.app.Fragment): void;
          public static execute(param0: org.apache.http.client.HttpClient, param1: org.apache.http.HttpHost, param2: org.apache.http.HttpRequest, param3: org.apache.http.client.ResponseHandler<any>): any;
          public static onStopCalled(param0: globalAndroid.app.Fragment): void;
          public static onConfigurationChangedCalled(param0: globalAndroid.app.Activity, param1: globalAndroid.content.res.Configuration): void;
          public static getErrorStream(param0: java.net.HttpURLConnection): java.io.InputStream;
          public static execute(param0: org.apache.http.client.HttpClient, param1: org.apache.http.HttpHost, param2: org.apache.http.HttpRequest, param3: org.apache.http.protocol.HttpContext): org.apache.http.HttpResponse;
          public static dispatchTouchEventCalled(param0: globalAndroid.app.Activity, param1: globalAndroid.view.MotionEvent): void;
          public static onDestroyCalled(param0: globalAndroid.app.Activity): void;
          public static execute(param0: org.apache.http.client.HttpClient, param1: org.apache.http.client.methods.HttpUriRequest, param2: org.apache.http.client.ResponseHandler<any>): any;
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export class InteractionCaptureMode {
          public static class: java.lang.Class<com.appdynamics.eumagent.runtime.InteractionCaptureMode>;
          /**
           * Constructs a new instance of the com.appdynamics.eumagent.runtime.InteractionCaptureMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
          public static None: number;
          public static ListViewItemSelected: number;
          public static ButtonPressed: number;
          public static All: number;
          public static EditTextSelected: number;
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export class JSAgentCallback {
          public static class: java.lang.Class<com.appdynamics.eumagent.runtime.JSAgentCallback>;
          public static JSAGENT_BASE_PAGE: number;
          public static JSAGENT_IFRAME: number;
          public static JSAGENT_XHR: number;
          public static JSAGENT_VIRTUAL_PAGE: number;
          public static JSAGENT_PAGE_ERROR: number;
          public postMessage(param0: string): void;
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export class NetworkRequestCallback {
          public static class: java.lang.Class<com.appdynamics.eumagent.runtime.NetworkRequestCallback>;
          /**
           * Constructs a new instance of the com.appdynamics.eumagent.runtime.NetworkRequestCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onNetworkRequest(param0: com.appdynamics.eumagent.runtime.HttpRequestTracker): boolean });
          public constructor();
          public onNetworkRequest(param0: com.appdynamics.eumagent.runtime.HttpRequestTracker): boolean;
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export class ServerCorrelationHeaders {
          public static class: java.lang.Class<com.appdynamics.eumagent.runtime.ServerCorrelationHeaders>;
          public static generate(): java.util.Map<string, java.util.List<string>>;
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export class SessionFrame {
          public static class: java.lang.Class<com.appdynamics.eumagent.runtime.SessionFrame>;
          /**
           * Constructs a new instance of the com.appdynamics.eumagent.runtime.SessionFrame interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { updateName(param0: string): void; end(): void });
          public constructor();
          public updateName(param0: string): void;
          public end(): void;
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module crashes {
          export class NativeCrashHandler extends com.appdynamics.eumagent.runtime.private.an.b {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.crashes.NativeCrashHandler>;
            public b: com.appdynamics.eumagent.runtime.private.an;
            public c: string;
            public d: string;
            public e: string;
            public f: number;
            public g: string;
            public h: number;
            public i: com.appdynamics.eumagent.runtime.private.ag;
            public j: com.appdynamics.eumagent.runtime.private.e;
            public setupSignalHandler(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: number, param9: number, param10: number): number;
            public a(param0: com.appdynamics.eumagent.runtime.private.ci): void;
            public a(param0: any): void;
            public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.appdynamics.eumagent.runtime.private.an, param3: number, param4: com.appdynamics.eumagent.runtime.private.o, param5: com.appdynamics.eumagent.runtime.devicemetrics.DeviceMetricsCollector);
            public leaveBreadcrumb(param0: string): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module crashes {
          export class ProcMapInfo {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.crashes.ProcMapInfo>;
            public constructor();
            public static a(param0: androidNative.Array<number>, param1: number): string;
          }
          export module ProcMapInfo {
            export class FileInfo {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.crashes.ProcMapInfo.FileInfo>;
              public b: string;
              public c: boolean;
              public d: java.lang.Boolean;
              public a(param0: string): boolean;
            }
            export class a {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.crashes.ProcMapInfo.a>;
              public a: java.math.BigInteger;
              public b: java.math.BigInteger;
              public c: com.appdynamics.eumagent.runtime.crashes.ProcMapInfo.FileInfo;
              public d: number;
              public constructor(param0: com.appdynamics.eumagent.runtime.crashes.ProcMapInfo, param1: string);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module devicemetrics {
          export class DeviceMetricsCollector {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.devicemetrics.DeviceMetricsCollector>;
            public constructor(param0: com.appdynamics.eumagent.runtime.private.r, param1: globalAndroid.content.Context);
            public getPowerMode(): java.lang.Boolean;
            public constructor(param0: globalAndroid.content.Context);
            public shouldCollectStorageDeviceSpecification(): java.lang.Boolean;
            public shouldCollectMemoryDeviceSpecification(): java.lang.Boolean;
            public getBatteryLevel(): java.lang.Integer;
            public constructor(param0: com.appdynamics.eumagent.runtime.private.r, param1: globalAndroid.content.Context, param2: com.appdynamics.eumagent.runtime.private.an);
            public getChargingState(): java.lang.Boolean;
            public getAvailableMemoryInMegaBytes(): java.lang.Long;
            public shouldCollectBatteryDeviceSpecification(): java.lang.Boolean;
            public getAvailableDiskSpaceInMegaBytes(): java.lang.Long;
            public getTotalDiskSpaceInMegaBytes(): java.lang.Long;
            public getTotalBatteryCapacity(): java.lang.Double;
            public static byteToMBytes(param0: number): number;
            public getTotalMemoryInMegaBytes(): java.lang.Long;
          }
          export module DeviceMetricsCollector {
            export class a {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.devicemetrics.DeviceMetricsCollector.a>;
              public run(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module logging {
          export class ADLog {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.logging.ADLog>;
            public static TAG: string;
            public static VERBOSE: number;
            public static INFO: number;
            public static ERROR: number;
            public static NONE: number;
            public constructor();
            public static setLoggingLevel(param0: number): void;
            public static logVerbose(param0: string): void;
            public static log(param0: number, param1: string, param2: any, param3: any): void;
            public static logAppError(param0: string): void;
            public static log(param0: number, param1: string, param2: any): void;
            public static logAppError(param0: string, param1: java.lang.Throwable): void;
            public static logInfo(param0: string): void;
            public static isInfoLoggingEnabled(): boolean;
            public static isVerboseLoggingEnabled(): boolean;
            public static logAgentError(param0: string): void;
            public static log(param0: number, param1: string, param2: number): void;
            public static log(param0: number, param1: string, param2: any, param3: any, param4: any): void;
            public static logAgentError(param0: string, param1: java.lang.Throwable): void;
            public static logWarning(param0: string): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class a extends com.appdynamics.eumagent.runtime.private.i {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.a>;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp);
            public constructor(param0: string, param1: string, param2: com.appdynamics.eumagent.runtime.private.cp, param3: java.lang.Iterable<com.appdynamics.eumagent.runtime.private.q>);
            public a(): string;
            public constructor(param0: number);
            public a(param0: com.appdynamics.eumagent.runtime.private.cu): void;
            public a(param0: java.io.Writer): void;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp);
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp, param3: string);
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class aa {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.aa>;
            public constructor();
            public static a(param0: java.io.File): androidNative.Array<number>;
            public static b(param0: java.io.File): com.appdynamics.eumagent.runtime.private.aa.b;
            public static a(param0: androidNative.Array<number>): com.appdynamics.eumagent.runtime.private.aa.c;
          }
          export module aa {
            export class a {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.aa.a>;
              public a: number;
              public b: string;
              public constructor();
              public toString(): string;
            }
            export class b {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.aa.b>;
              public a: number;
              public b: number;
              public c: androidNative.Array<com.appdynamics.eumagent.runtime.private.aa.d>;
              public constructor();
              public toString(): string;
            }
            export class c {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.aa.c>;
              public a: number;
              public b: number;
              public c: number;
              public d: number;
              public e: number;
              public f: number;
              public g: number;
              public h: java.math.BigInteger;
              public i: androidNative.Array<java.math.BigInteger>;
              public j: com.appdynamics.eumagent.runtime.private.ac;
              public k: string;
              public l: string;
              public m: string;
              public n: string;
              public o: string;
              public p: string;
              public q: string;
              public r: string;
              public s: number;
              public t: com.appdynamics.eumagent.runtime.crashes.ProcMapInfo;
              public u: androidNative.Array<com.appdynamics.eumagent.runtime.private.aa.a>;
              public v: java.util.Map<java.lang.Class<any>, java.util.Map<string, any>>;
              public constructor();
              public toString(): string;
            }
            export class d {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.aa.d>;
              public a: number;
              public b: string;
              public constructor();
              public toString(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class ab {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ab>;
            public finalize(): void;
          }
          export module ab {
            export class a {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ab.a>;
            }
            export class b {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ab.b>;
            }
            export class c {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ab.c>;
            }
            export class d {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ab.d>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class ac {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ac>;
            public toString(): string;
          }
          export module ac {
            export class a {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ac.a>;
              public a: java.math.BigInteger;
              public b: com.appdynamics.eumagent.runtime.crashes.ProcMapInfo.a;
              public c: number;
              public d: com.appdynamics.eumagent.runtime.private.ac.b;
            }
            export class b {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ac.b>;
              public a: string;
              public b: number;
              public toString(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class ad {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ad>;
            public constructor();
            public a(): void;
            public a(param0: com.appdynamics.eumagent.runtime.private.ac): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class ae extends com.appdynamics.eumagent.runtime.private.p {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ae>;
            public constructor(param0: number, param1: string);
            public constructor(param0: number);
          }
          export module ae {
            export class a extends com.appdynamics.eumagent.runtime.private.p.a {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ae.a>;
              public constructor();
              public a(param0: number, param1: string): com.appdynamics.eumagent.runtime.private.p;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class af {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.af>;
            public constructor(param0: globalAndroid.content.Context);
            public onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
            public onDowngrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
            public static c(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: string): java.lang.Boolean;
            public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
            public static b(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: string): java.lang.Long;
            public static a(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: string): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class ag {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ag>;
            public b: java.util.concurrent.atomic.AtomicLong;
            public c: java.util.concurrent.atomic.AtomicLong;
            public constructor(param0: globalAndroid.content.Context);
            public a(): number;
          }
          export module ag {
            export class a extends com.appdynamics.eumagent.runtime.private.ag.c {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ag.a>;
              public b(param0: string): boolean;
              public b(param0: string, param1: string): string;
              public a(param0: string, param1: string): void;
              public a(param0: string): void;
              public b(param0: string, param1: number): number;
              public constructor(param0: globalAndroid.content.Context);
              public a(param0: string, param1: number): void;
            }
            export class b extends com.appdynamics.eumagent.runtime.private.ag.c {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ag.b>;
              public b(param0: string): boolean;
              public b(param0: string, param1: string): string;
              public a(param0: string, param1: string): void;
              public a(param0: string): void;
              public b(param0: string, param1: number): number;
              public a(param0: string, param1: number): void;
            }
            export class c {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ag.c>;
              /**
               * Constructs a new instance of the com.appdynamics.eumagent.runtime.private.ag$c interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { a(param0: string): void; b(param0: string): boolean; a(param0: string, param1: number): void; b(param0: string, param1: number): number; a(param0: string, param1: string): void; b(param0: string, param1: string): string });
              public constructor();
              public b(param0: string): boolean;
              public b(param0: string, param1: string): string;
              public a(param0: string, param1: string): void;
              public a(param0: string): void;
              public b(param0: string, param1: number): number;
              public a(param0: string, param1: number): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class ah {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ah>;
            public constructor(param0: com.appdynamics.eumagent.runtime.private.ai, param1: string, param2: com.appdynamics.eumagent.runtime.private.p.a, param3: number);
            public a(param0: number): java.util.List<com.appdynamics.eumagent.runtime.private.p>;
            public a(): void;
            public a(param0: java.util.List<com.appdynamics.eumagent.runtime.private.g>): boolean;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class ai {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ai>;
            public constructor(param0: globalAndroid.content.Context);
            public onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
            public onDowngrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
            public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class aj {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.aj>;
            public constructor(param0: globalAndroid.content.Context);
            public onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
            public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class ak {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ak>;
            public b(param0: com.appdynamics.eumagent.runtime.private.g): boolean;
            public a(): void;
            public a(param0: com.appdynamics.eumagent.runtime.private.g): boolean;
            public c(): void;
            public a(param0: java.util.List<com.appdynamics.eumagent.runtime.private.g>): void;
            public b(): void;
            public constructor(param0: com.appdynamics.eumagent.runtime.private.ah, param1: com.appdynamics.eumagent.runtime.private.an, param2: number);
          }
          export module ak {
            export class a {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ak.a>;
              public toString(): string;
              public run(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class al extends com.appdynamics.eumagent.runtime.private.i {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.al>;
            public i: java.lang.Integer;
            public j: java.lang.Integer;
            public k: java.lang.Integer;
            public l: java.lang.Boolean;
            public m: java.lang.Boolean;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp);
            public constructor();
            public a(): string;
            public constructor(param0: number);
            public a(param0: com.appdynamics.eumagent.runtime.private.cu): void;
            public a(param0: java.io.Writer): void;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp);
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp, param3: string);
          }
          export module al {
            export class a {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.al.a>;
              public a: java.lang.Integer;
              public b: java.lang.Integer;
              public c: java.lang.Integer;
              public d: java.lang.Boolean;
              public e: java.lang.Boolean;
              public f: globalAndroid.content.Context;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class am extends com.appdynamics.eumagent.runtime.private.i {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.am>;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp);
            public a(): string;
            public constructor(param0: number);
            public a(param0: com.appdynamics.eumagent.runtime.private.cu): void;
            public a(param0: java.io.Writer): void;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp);
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp, param3: string);
            public constructor(param0: java.lang.Throwable, param1: number);
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class an {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.an>;
            public b: com.appdynamics.eumagent.runtime.private.an.a;
            public c: java.util.concurrent.BlockingQueue<any>;
            public d: java.util.concurrent.ScheduledThreadPoolExecutor;
            public e: com.appdynamics.eumagent.runtime.private.ao;
            public f: boolean;
            public constructor();
            public a(): void;
            public a(param0: java.lang.Runnable, param1: number): void;
            public a(param0: any): void;
            public a(param0: java.lang.Runnable): void;
            public a(param0: java.lang.Class<any>, param1: com.appdynamics.eumagent.runtime.private.an.b): void;
          }
          export module an {
            export class a {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.an.a>;
              public run(): void;
            }
            export class b {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.an.b>;
              /**
               * Constructs a new instance of the com.appdynamics.eumagent.runtime.private.an$b interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { a(param0: any): void });
              public constructor();
              public a(param0: any): void;
            }
            export class c {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.an.c>;
              public toString(): string;
              public run(): void;
            }
            export class d {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.an.d>;
              public a: java.lang.Runnable;
              public b: number;
              public c: number;
              public toString(): string;
              public constructor(param0: java.lang.Runnable, param1: number, param2: number);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class ao {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ao>;
            public a: java.util.ArrayList<java.util.regex.Pattern>;
            public constructor(param0: java.util.Set<string>);
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class ap extends com.appdynamics.eumagent.runtime.private.i {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ap>;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp);
            public a(): string;
            public constructor(param0: number);
            public a(param0: com.appdynamics.eumagent.runtime.private.cu): void;
            public constructor(param0: string, param1: string, param2: boolean, param3: androidNative.Array<any>, param4: any, param5: java.lang.Throwable, param6: com.appdynamics.eumagent.runtime.private.cp, param7: com.appdynamics.eumagent.runtime.private.cp);
            public a(param0: java.io.Writer): void;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp);
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp, param3: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class aq extends com.appdynamics.eumagent.runtime.CallTracker {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.aq>;
            public static a: com.appdynamics.eumagent.runtime.CallTracker;
            public reportCallEnded(): void;
            public reportCallEndedWithReturnValue(param0: any): void;
            public setStartTime(param0: number): void;
            public constructor(param0: com.appdynamics.eumagent.runtime.private.an, param1: string, param2: string, param3: boolean);
            public withArguments(param0: androidNative.Array<any>): com.appdynamics.eumagent.runtime.CallTracker;
            public toString(): string;
            public reportCallEndedWithException(param0: java.lang.Exception): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class ar {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ar>;
            public static a: string;
            public static b: string;
            public static c: string;
            public static d: string;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class as extends com.appdynamics.eumagent.runtime.private.i {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.as>;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp);
            public constructor(param0: string, param1: java.lang.Throwable, param2: number);
            public a(): string;
            public constructor(param0: number);
            public a(param0: com.appdynamics.eumagent.runtime.private.cu): void;
            public a(param0: java.io.Writer): void;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp);
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp, param3: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class at {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.at>;
            public a: number;
            public b: number;
            public c: number;
            public d: com.appdynamics.eumagent.runtime.private.an;
            public constructor(param0: com.appdynamics.eumagent.runtime.private.an);
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class au extends com.appdynamics.eumagent.runtime.private.i {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.au>;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp);
            public a(): string;
            public constructor(param0: number);
            public a(param0: com.appdynamics.eumagent.runtime.private.cu): void;
            public constructor(param0: string, param1: number, param2: com.appdynamics.eumagent.runtime.private.cp);
            public a(param0: java.io.Writer): void;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp);
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp, param3: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export abstract class av extends com.appdynamics.eumagent.runtime.HttpRequestTracker {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.av>;
            public a: java.lang.Exception;
            public b: java.lang.Throwable;
            public c: java.net.URL;
            public d: string;
            public e: java.lang.Integer;
            public f: string;
            public g: java.util.Map<string, java.util.List<string>>;
            public h: java.util.Map<string, java.util.List<string>>;
            public i: java.util.Map<string, any>;
            public j: java.util.Map<string, any>;
            public k: java.util.Map<string, any>;
            public l: java.util.Map<string, any>;
            public m: java.util.Map<string, any>;
            public n: java.lang.Long;
            public o: java.lang.Long;
            public p: string;
            public withUserData(param0: string, param1: string): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public withException(param0: java.lang.Exception): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public getInstrumentationSource(): string;
            public getResponseCode(): number;
            public getThrowable(): java.lang.Throwable;
            public withUserDataDate(param0: string, param1: java.util.Date): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public withResponseCode(param0: number): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public withRequestContentLength(param0: java.lang.Long): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public getResponseContentLength(): java.lang.Long;
            public withUserDataDouble(param0: string, param1: java.lang.Double): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public withRequestHeaderFields(param0: java.util.Map<string, java.util.List<string>>): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public withUserDataLong(param0: string, param1: java.lang.Long): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public getURL(): java.net.URL;
            public withUserDataBoolean(param0: string, param1: java.lang.Boolean): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public getRequestContentLength(): java.lang.Long;
            public withResponseContentLength(param0: java.lang.Long): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public getResponseHeaderFields(): java.util.Map<string, java.util.List<string>>;
            public reportDone(): void;
            public withThrowable(param0: java.lang.Throwable): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public withStatusLine(param0: string): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public withResponseHeaderFields(param0: java.util.Map<string, java.util.List<string>>): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public withURL(param0: java.net.URL): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public getRequestHeaderFields(): java.util.Map<string, java.util.List<string>>;
            public setStartTime(param0: number): void;
            public getError(): string;
            public withInstrumentationSource(param0: string): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public getException(): java.lang.Exception;
            public withError(param0: string): com.appdynamics.eumagent.runtime.HttpRequestTracker;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class aw {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.aw>;
            public a: string;
            public b: string;
            public c: java.util.List<com.appdynamics.eumagent.runtime.private.aw.a>;
            public d: string;
            public e: boolean;
            public toString(): string;
          }
          export module aw {
            export class a {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.aw.a>;
              public a: string;
              public b: number;
              public c: number;
              public toString(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class ax {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ax>;
            public constructor();
          }
          export module ax {
            export class a extends java.lang.Comparable<com.appdynamics.eumagent.runtime.private.ax.a> {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ax.a>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class ay extends com.appdynamics.eumagent.runtime.private.av {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ay>;
            public withUserData(param0: string, param1: string): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public withException(param0: java.lang.Exception): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public getInstrumentationSource(): string;
            public getResponseCode(): number;
            public getThrowable(): java.lang.Throwable;
            public withUserDataDate(param0: string, param1: java.util.Date): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public withResponseCode(param0: number): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public withRequestContentLength(param0: java.lang.Long): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public getResponseContentLength(): java.lang.Long;
            public withUserDataDouble(param0: string, param1: java.lang.Double): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public withRequestHeaderFields(param0: java.util.Map<string, java.util.List<string>>): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public withUserDataLong(param0: string, param1: java.lang.Long): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public getURL(): java.net.URL;
            public withUserDataBoolean(param0: string, param1: java.lang.Boolean): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public constructor();
            public getRequestContentLength(): java.lang.Long;
            public withResponseContentLength(param0: java.lang.Long): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public reportDone(): void;
            public getResponseHeaderFields(): java.util.Map<string, java.util.List<string>>;
            public withThrowable(param0: java.lang.Throwable): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public withStatusLine(param0: string): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public withResponseHeaderFields(param0: java.util.Map<string, java.util.List<string>>): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public withURL(param0: java.net.URL): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public getRequestHeaderFields(): java.util.Map<string, java.util.List<string>>;
            public setStartTime(param0: number): void;
            public getError(): string;
            public withInstrumentationSource(param0: string): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public getException(): java.lang.Exception;
            public withError(param0: string): com.appdynamics.eumagent.runtime.HttpRequestTracker;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class az {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.az>;
            public a(param0: org.apache.http.client.HttpClient, param1: org.apache.http.client.methods.HttpUriRequest, param2: org.apache.http.client.ResponseHandler<any>, param3: org.apache.http.protocol.HttpContext): any;
            public a(param0: org.apache.http.client.HttpClient, param1: org.apache.http.client.methods.HttpUriRequest, param2: org.apache.http.client.ResponseHandler<any>): any;
            public a(param0: org.apache.http.client.HttpClient, param1: org.apache.http.HttpHost, param2: org.apache.http.HttpRequest, param3: org.apache.http.client.ResponseHandler<any>, param4: org.apache.http.protocol.HttpContext): any;
            public a(param0: org.apache.http.client.HttpClient, param1: org.apache.http.HttpHost, param2: org.apache.http.HttpRequest, param3: org.apache.http.client.ResponseHandler<any>): any;
            public a(param0: org.apache.http.client.HttpClient, param1: org.apache.http.client.methods.HttpUriRequest, param2: org.apache.http.protocol.HttpContext): org.apache.http.HttpResponse;
            public a(param0: org.apache.http.client.HttpClient, param1: org.apache.http.client.methods.HttpUriRequest): org.apache.http.HttpResponse;
            public a(param0: org.apache.http.client.HttpClient, param1: org.apache.http.HttpHost, param2: org.apache.http.HttpRequest): org.apache.http.HttpResponse;
            public a(param0: org.apache.http.client.HttpClient, param1: org.apache.http.HttpHost, param2: org.apache.http.HttpRequest, param3: org.apache.http.protocol.HttpContext): org.apache.http.HttpResponse;
            public constructor(param0: com.appdynamics.eumagent.runtime.private.an, param1: com.appdynamics.eumagent.runtime.NetworkRequestCallback);
          }
          export module az {
            export class a {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.az.a>;
              public handleResponse(param0: org.apache.http.HttpResponse): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class b extends com.appdynamics.eumagent.runtime.private.i {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.b>;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp);
            public constructor();
            public a(): string;
            public constructor(param0: number);
            public a(param0: com.appdynamics.eumagent.runtime.private.cu): void;
            public a(param0: java.io.Writer): void;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp);
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp, param3: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class ba extends com.appdynamics.eumagent.runtime.private.av implements com.appdynamics.eumagent.runtime.HttpRequestTracker {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ba>;
            public withUserData(param0: string, param1: string): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public withException(param0: java.lang.Exception): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public getInstrumentationSource(): string;
            public constructor(param0: com.appdynamics.eumagent.runtime.private.an, param1: java.net.URL, param2: com.appdynamics.eumagent.runtime.NetworkRequestCallback);
            public getResponseCode(): number;
            public withUserDataDate(param0: string, param1: java.util.Date): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public getThrowable(): java.lang.Throwable;
            public withResponseCode(param0: number): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public withRequestContentLength(param0: java.lang.Long): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public getResponseContentLength(): java.lang.Long;
            public withUserDataDouble(param0: string, param1: java.lang.Double): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public withUserDataLong(param0: string, param1: java.lang.Long): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public withRequestHeaderFields(param0: java.util.Map<string, java.util.List<string>>): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public getURL(): java.net.URL;
            public withUserDataBoolean(param0: string, param1: java.lang.Boolean): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public getRequestContentLength(): java.lang.Long;
            public withResponseContentLength(param0: java.lang.Long): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public reportDone(): void;
            public getResponseHeaderFields(): java.util.Map<string, java.util.List<string>>;
            public withThrowable(param0: java.lang.Throwable): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public withStatusLine(param0: string): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public withResponseHeaderFields(param0: java.util.Map<string, java.util.List<string>>): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public withURL(param0: java.net.URL): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public getRequestHeaderFields(): java.util.Map<string, java.util.List<string>>;
            public setStartTime(param0: number): void;
            public getError(): string;
            public withInstrumentationSource(param0: string): com.appdynamics.eumagent.runtime.HttpRequestTracker;
            public getException(): java.lang.Exception;
            public withError(param0: string): com.appdynamics.eumagent.runtime.HttpRequestTracker;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class bb {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bb>;
            public a(param0: java.net.HttpURLConnection): void;
            public b(param0: java.net.HttpURLConnection): void;
            public c(param0: java.net.HttpURLConnection): void;
            public a(param0: java.net.HttpURLConnection, param1: java.lang.Throwable): void;
            public constructor(param0: com.appdynamics.eumagent.runtime.private.an, param1: com.appdynamics.eumagent.runtime.NetworkRequestCallback);
          }
          export module bb {
            export abstract class a {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bb.a>;
              public a(param0: java.net.HttpURLConnection): java.io.InputStream;
            }
            export class b {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bb.b>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class bc extends com.appdynamics.eumagent.runtime.private.i {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bc>;
            public i: java.net.URL;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp);
            public constructor(param0: java.net.URL, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp, param3: number, param4: string, param5: com.appdynamics.eumagent.runtime.private.aw, param6: number, param7: number, param8: string, param9: java.util.Map<java.lang.Class<any>, java.util.Map<string, any>>);
            public a(): string;
            public constructor(param0: number);
            public a(param0: com.appdynamics.eumagent.runtime.private.cu): void;
            public constructor(param0: java.net.URL, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp, param3: string, param4: java.lang.Throwable, param5: java.util.Map<java.lang.Class<any>, java.util.Map<string, any>>);
            public constructor(param0: java.net.URL, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp, param3: string, param4: string, param5: java.util.Map<java.lang.Class<any>, java.util.Map<string, any>>);
            public a(param0: java.io.Writer): void;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp);
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp, param3: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class bd {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bd>;
            public constructor(param0: globalAndroid.view.MotionEvent);
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class be {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.be>;
            public a: globalAndroid.view.View;
            public constructor(param0: globalAndroid.view.View);
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class bf {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bf>;
            public equals(param0: any): boolean;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class bg extends com.appdynamics.eumagent.runtime.private.an.b {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bg>;
            public a(param0: any): void;
            public constructor(param0: com.appdynamics.eumagent.runtime.private.an, param1: com.appdynamics.eumagent.runtime.private.r, param2: com.appdynamics.eumagent.runtime.private.e);
          }
          export module bg {
            export class a {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bg.a>;
            }
            export class b {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bg.b>;
              public run(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class bh extends com.appdynamics.eumagent.runtime.private.i {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bh>;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp);
            public a(): string;
            public constructor(param0: number);
            public a(param0: com.appdynamics.eumagent.runtime.private.cu): void;
            public a(param0: java.io.Writer): void;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: number, param3: number, param4: androidNative.Array<string>, param5: number);
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp);
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp, param3: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class bi extends com.appdynamics.eumagent.runtime.private.an.b {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bi>;
            public d: boolean;
            public constructor(param0: com.appdynamics.eumagent.runtime.private.an, param1: com.appdynamics.eumagent.runtime.private.bg, param2: com.appdynamics.eumagent.runtime.private.bn, param3: com.appdynamics.eumagent.runtime.private.r, param4: com.appdynamics.eumagent.runtime.private.e);
            public a(param0: any): void;
          }
          export module bi {
            export class a {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bi.a>;
              public toString(): string;
              public run(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class bj {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bj>;
            public constructor(param0: com.appdynamics.eumagent.runtime.private.m);
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class bk {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bk>;
            public constructor();
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class bl {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bl>;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class bm extends com.appdynamics.eumagent.runtime.private.an.b {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bm>;
            public constructor(param0: java.io.File, param1: com.appdynamics.eumagent.runtime.private.an, param2: java.util.concurrent.ScheduledThreadPoolExecutor);
            public a(param0: any): void;
          }
          export module bm {
            export class a {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bm.a>;
              public run(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class bn {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bn>;
            public constructor(param0: java.util.concurrent.ScheduledThreadPoolExecutor, param1: com.appdynamics.eumagent.runtime.private.bm, param2: com.appdynamics.eumagent.runtime.private.bj, param3: com.appdynamics.eumagent.runtime.private.r, param4: com.appdynamics.eumagent.runtime.private.e);
          }
          export module bn {
            export class a {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bn.a>;
              public run(): void;
            }
            export class b {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bn.b>;
              public run(): void;
            }
            export class c {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bn.c>;
              public run(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class bo {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bo>;
            public constructor();
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class bp extends com.appdynamics.eumagent.runtime.private.an.b {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bp>;
            public constructor(param0: com.appdynamics.eumagent.runtime.private.an, param1: com.appdynamics.eumagent.runtime.private.r);
            public a(param0: any): void;
          }
          export module bp {
            export class a {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bp.a>;
              public toString(): string;
              public run(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class bq extends com.appdynamics.eumagent.runtime.private.i {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bq>;
            public a(): string;
            public a(param0: com.appdynamics.eumagent.runtime.private.cu): void;
            public a(param0: java.io.Writer): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class br {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.br>;
            public constructor();
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class bs extends com.appdynamics.eumagent.runtime.private.i {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bs>;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp);
            public a(): string;
            public constructor(param0: number);
            public a(param0: com.appdynamics.eumagent.runtime.private.cu): void;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp, param3: java.util.UUID, param4: string);
            public a(param0: java.io.Writer): void;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp);
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp, param3: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class bt extends com.appdynamics.eumagent.runtime.SessionFrame {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bt>;
            public static a: com.appdynamics.eumagent.runtime.SessionFrame;
            public updateName(param0: string): void;
            public constructor(param0: com.appdynamics.eumagent.runtime.private.an, param1: string);
            public end(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class bu extends com.appdynamics.eumagent.runtime.private.i {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bu>;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp);
            public a(): string;
            public constructor(param0: number);
            public a(param0: com.appdynamics.eumagent.runtime.private.cu): void;
            public a(param0: java.io.Writer): void;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp);
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp, param3: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class bv extends com.appdynamics.eumagent.runtime.private.an.b {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bv>;
            public a(param0: any): void;
            public constructor(param0: com.appdynamics.eumagent.runtime.private.an, param1: number);
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class bw {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bw>;
            public a: string;
            public b: boolean;
            public c: com.appdynamics.eumagent.runtime.private.cp;
            public constructor(param0: string, param1: boolean, param2: com.appdynamics.eumagent.runtime.private.cp);
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class bx {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bx>;
            public a(param0: globalAndroid.widget.AdapterView<any>, param1: globalAndroid.widget.AdapterView.OnItemClickListener): void;
            public constructor(param0: com.appdynamics.eumagent.runtime.private.an);
          }
          export module bx {
            export class a {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bx.a>;
              public onItemClick(param0: globalAndroid.widget.AdapterView<any>, param1: globalAndroid.view.View, param2: number, param3: number): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class by {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.by>;
            public a: number;
            public b: string;
            public c: com.appdynamics.eumagent.runtime.private.cp;
            public constructor(param0: string, param1: number);
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class bz {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bz>;
            public a(param0: globalAndroid.view.View, param1: globalAndroid.view.View.OnClickListener): void;
            public constructor(param0: com.appdynamics.eumagent.runtime.private.an);
          }
          export module bz {
            export class a {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.bz.a>;
              public onClick(param0: globalAndroid.view.View): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class c {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.c>;
            public constructor(param0: string, param1: string);
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class ca {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ca>;
            public c: com.appdynamics.eumagent.runtime.private.bi;
            public a(param0: globalAndroid.view.View, param1: globalAndroid.view.View.OnFocusChangeListener): void;
            public constructor(param0: com.appdynamics.eumagent.runtime.private.an);
          }
          export module ca {
            export class a {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ca.a>;
              public onFocusChange(param0: globalAndroid.view.View, param1: boolean): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class cb extends com.appdynamics.eumagent.runtime.private.i {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.cb>;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp);
            public a(): string;
            public constructor(param0: number);
            public a(param0: com.appdynamics.eumagent.runtime.private.cu): void;
            public constructor(param0: string, param1: string, param2: java.util.UUID, param3: com.appdynamics.eumagent.runtime.private.cp, param4: com.appdynamics.eumagent.runtime.private.cp);
            public a(param0: java.io.Writer): void;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp);
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp, param3: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class cc {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.cc>;
            public a: string;
            public b: number;
            public c: number;
            public d: com.appdynamics.eumagent.runtime.private.cp;
            public constructor(param0: string, param1: number, param2: number, param3: com.appdynamics.eumagent.runtime.private.cp);
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class cd extends com.appdynamics.eumagent.runtime.private.an.b {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.cd>;
            public a(param0: any): void;
            public constructor(param0: com.appdynamics.eumagent.runtime.private.an);
          }
          export module cd {
            export class a {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.cd.a>;
              public constructor(param0: java.util.UUID, param1: com.appdynamics.eumagent.runtime.private.cp);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class ce extends com.appdynamics.eumagent.runtime.private.an.b {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ce>;
            public a(param0: any): void;
            public constructor(param0: com.appdynamics.eumagent.runtime.private.an);
          }
          export module ce {
            export class a {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ce.a>;
              public toString(): string;
              public run(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class cf extends com.appdynamics.eumagent.runtime.private.i {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.cf>;
            public i: string;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp);
            public constructor(param0: string, param1: string, param2: com.appdynamics.eumagent.runtime.private.cp, param3: com.appdynamics.eumagent.runtime.private.cp);
            public a(): string;
            public constructor(param0: string, param1: string, param2: com.appdynamics.eumagent.runtime.private.cp, param3: com.appdynamics.eumagent.runtime.private.cp, param4: string, param5: string, param6: string, param7: string, param8: string, param9: number);
            public a(param0: java.io.Writer): void;
            public static a(param0: globalAndroid.widget.AdapterView<any>, param1: globalAndroid.view.View, param2: number, param3: string, param4: com.appdynamics.eumagent.runtime.private.cp): com.appdynamics.eumagent.runtime.private.cf;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp);
            public constructor(param0: number);
            public static a(param0: globalAndroid.widget.EditText, param1: com.appdynamics.eumagent.runtime.private.cp, param2: boolean): com.appdynamics.eumagent.runtime.private.cf;
            public a(param0: com.appdynamics.eumagent.runtime.private.cu): void;
            public static a(param0: globalAndroid.widget.Button, param1: string, param2: com.appdynamics.eumagent.runtime.private.cp): com.appdynamics.eumagent.runtime.private.cf;
            public constructor(param0: string, param1: string);
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp, param3: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class cg {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.cg>;
            public b: globalAndroid.view.ViewGroup.OnHierarchyChangeListener;
            public c: java.lang.ThreadLocal<java.lang.Boolean>;
            public static a(): boolean;
            public constructor(param0: com.appdynamics.eumagent.runtime.private.bz, param1: com.appdynamics.eumagent.runtime.private.bx, param2: com.appdynamics.eumagent.runtime.private.ca);
            public a(param0: globalAndroid.view.View): void;
          }
          export module cg {
            export class a {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.cg.a>;
              public onChildViewAdded(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
              public onChildViewRemoved(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class ch {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ch>;
            public a: string;
            public b: any;
            public c: java.lang.Class<any>;
            public constructor(param0: string, param1: any, param2: java.lang.Class<any>);
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class ci {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ci>;
            public constructor();
            public a(): java.util.Map<java.lang.Class<any>, java.util.Map<string, any>>;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class cj<T> extends java.lang.Object {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.cj<any>>;
            public a: java.util.Map<string, T>;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class ck<T> extends java.lang.Iterable<any> {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ck<any>>;
            public constructor();
            public iterator(): java.util.Iterator<any>;
            public a(param0: any): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class cl {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.cl>;
            public constructor(param0: java.lang.Throwable);
            public a(): void;
            public a(param0: java.lang.Class<any>): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class cm<K, V> extends java.lang.Object {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.cm<any, any>>;
            public constructor();
            public a(param0: K): java.util.Collection<V>;
            public a(): void;
            public a(param0: K, param1: V): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class cn {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.cn>;
            public a: number;
            public constructor();
            public constructor(param0: number);
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class co {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.co>;
            public a: string;
            public constructor(param0: string, param1: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class cp {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.cp>;
            public constructor();
            public static b(param0: number): com.appdynamics.eumagent.runtime.private.cp;
            public constructor(param0: number, param1: number);
            public static a(param0: number): com.appdynamics.eumagent.runtime.private.cp;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class cq {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.cq>;
            public static a(param0: java.io.Closeable): void;
            public static b(param0: string): string;
            public static c(param0: string): string;
            public static a(param0: string): boolean;
            public static a(param0: androidNative.Array<number>): string;
            public static b(param0: java.io.InputStream): boolean;
            public static e(param0: string): string;
            public static f(param0: string): boolean;
            public static a(param0: java.lang.Throwable): androidNative.Array<java.lang.Throwable>;
            public static a(param0: java.io.InputStream, param1: java.io.OutputStream): void;
            public static a(param0: java.io.InputStream): java.lang.StringBuilder;
            public static a(): string;
            public static a(param0: boolean): string;
            public static d(param0: string): string;
            public static a(param0: com.appdynamics.eumagent.runtime.private.cu, param1: java.util.Map<java.lang.Class<any>, java.util.Map<string, any>>): void;
            public static b(param0: java.lang.Throwable): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export abstract class cr {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.cr>;
            public constructor();
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class cs {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.cs>;
            public f(): com.appdynamics.eumagent.runtime.private.ct;
            public h(): string;
            public close(): void;
            public c(): void;
            public e(): boolean;
            public toString(): string;
            public d(): void;
            public k(): number;
            public a(): void;
            public g(): string;
            public constructor(param0: java.io.Reader);
            public j(): void;
            public m(): void;
            public b(): void;
            public i(): boolean;
            public l(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class ct {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.ct>;
            public static a: com.appdynamics.eumagent.runtime.private.ct;
            public static b: com.appdynamics.eumagent.runtime.private.ct;
            public static c: com.appdynamics.eumagent.runtime.private.ct;
            public static d: com.appdynamics.eumagent.runtime.private.ct;
            public static e: com.appdynamics.eumagent.runtime.private.ct;
            public static f: com.appdynamics.eumagent.runtime.private.ct;
            public static g: com.appdynamics.eumagent.runtime.private.ct;
            public static h: com.appdynamics.eumagent.runtime.private.ct;
            public static i: com.appdynamics.eumagent.runtime.private.ct;
            public static j: com.appdynamics.eumagent.runtime.private.ct;
            public static valueOf(param0: string): com.appdynamics.eumagent.runtime.private.ct;
            public static values(): androidNative.Array<com.appdynamics.eumagent.runtime.private.ct>;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class cu {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.cu>;
            public f(): com.appdynamics.eumagent.runtime.private.cu;
            public close(): void;
            public constructor(param0: java.io.Writer);
            public flush(): void;
            public g(): void;
            public b(): com.appdynamics.eumagent.runtime.private.cu;
            public a(param0: java.lang.Boolean): com.appdynamics.eumagent.runtime.private.cu;
            public a(): com.appdynamics.eumagent.runtime.private.cu;
            public e(): void;
            public a(param0: boolean): com.appdynamics.eumagent.runtime.private.cu;
            public d(): com.appdynamics.eumagent.runtime.private.cu;
            public a(param0: string): com.appdynamics.eumagent.runtime.private.cu;
            public b(param0: string): com.appdynamics.eumagent.runtime.private.cu;
            public a(param0: number): com.appdynamics.eumagent.runtime.private.cu;
            public c(): com.appdynamics.eumagent.runtime.private.cu;
            public a(param0: java.lang.Number): com.appdynamics.eumagent.runtime.private.cu;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class cv {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.cv>;
            public constructor(param0: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class d {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.d>;
            public b: number;
            public c: string;
            public d: string;
            public e: string;
            public f: string;
            public g: string;
            public h: java.lang.Long;
            public i: string;
            public j: string;
            public k: java.lang.Integer;
            public l: string;
            public m: string;
            public n: string;
            public o: string;
            public p: string;
            public q: java.util.Map<java.lang.Class<any>, java.util.Map<string, any>>;
            public r: com.appdynamics.eumagent.runtime.devicemetrics.DeviceMetricsCollector;
            public static a(param0: any, param1: string): any;
            public constructor(param0: string, param1: number, param2: string, param3: string, param4: string, param5: string, param6: string, param7: java.lang.Long, param8: string, param9: string, param10: java.lang.Integer, param11: string, param12: string, param13: string, param14: java.util.Map<java.lang.Class<any>, java.util.Map<string, any>>, param15: string, param16: string, param17: com.appdynamics.eumagent.runtime.devicemetrics.DeviceMetricsCollector);
            public a(param0: string, param1: string, param2: java.util.Map<java.lang.Class<any>, java.util.Map<string, any>>): com.appdynamics.eumagent.runtime.private.d;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class e extends com.appdynamics.eumagent.runtime.private.an.b {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.e>;
            public c: string;
            public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: com.appdynamics.eumagent.runtime.private.an, param4: com.appdynamics.eumagent.runtime.private.ci, param5: com.appdynamics.eumagent.runtime.private.o, param6: com.appdynamics.eumagent.runtime.devicemetrics.DeviceMetricsCollector);
            public a(param0: any): void;
            public b(): boolean;
            public a(): com.appdynamics.eumagent.runtime.private.d;
          }
          export module e {
            export class a {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.e.a>;
              public accept(param0: java.io.File): boolean;
            }
            export class b {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.e.b>;
              public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
            }
            export module b {
              export class a {
                public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.e.b.a>;
                public toString(): string;
                public run(): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class f extends com.appdynamics.eumagent.runtime.private.i {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.f>;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp);
            public a(): string;
            public constructor(param0: number);
            public a(param0: com.appdynamics.eumagent.runtime.private.cu): void;
            public constructor(param0: string, param1: string);
            public a(param0: java.io.Writer): void;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp);
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp, param3: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export abstract class g {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.g>;
            public a(): string;
            public constructor(param0: number);
            public a(param0: java.io.Writer): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class h extends com.appdynamics.eumagent.runtime.private.an.b {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.h>;
            public b: boolean;
            public a(param0: any): void;
            public constructor(param0: com.appdynamics.eumagent.runtime.private.an, param1: com.appdynamics.eumagent.runtime.private.j, param2: com.appdynamics.eumagent.runtime.private.k, param3: com.appdynamics.eumagent.runtime.private.ag, param4: com.appdynamics.eumagent.runtime.private.e);
          }
          export module h {
            export class a {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.h.a>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export abstract class i extends com.appdynamics.eumagent.runtime.private.g {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.i>;
            public c: com.appdynamics.eumagent.runtime.private.d;
            public d: java.lang.Boolean;
            public e: number;
            public f: java.util.Map<java.lang.Class<any>, java.util.Map<string, any>>;
            public g: com.appdynamics.eumagent.runtime.private.cp;
            public h: com.appdynamics.eumagent.runtime.private.cp;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp);
            public a(): string;
            public constructor(param0: number);
            public a(param0: com.appdynamics.eumagent.runtime.private.cu): void;
            public a(param0: java.io.Writer): void;
            public b(param0: com.appdynamics.eumagent.runtime.private.cu): void;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp);
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp, param3: string);
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class j extends com.appdynamics.eumagent.runtime.private.an.b {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.j>;
            public constructor(param0: com.appdynamics.eumagent.runtime.private.ak, param1: com.appdynamics.eumagent.runtime.private.ak, param2: com.appdynamics.eumagent.runtime.private.an, param3: com.appdynamics.eumagent.runtime.private.r);
            public a(param0: any): void;
            public a(): java.util.List<com.appdynamics.eumagent.runtime.private.g>;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class k {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.k>;
            public constructor(param0: com.appdynamics.eumagent.runtime.private.m, param1: com.appdynamics.eumagent.runtime.private.ag, param2: com.appdynamics.eumagent.runtime.private.an, param3: com.appdynamics.eumagent.runtime.private.j, param4: java.util.concurrent.ScheduledExecutorService, param5: com.appdynamics.eumagent.runtime.private.r);
          }
          export module k {
            export class a {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.k.a>;
              public toString(): string;
              public run(): void;
            }
            export class b {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.k.b>;
              public constructor(param0: java.util.List<com.appdynamics.eumagent.runtime.private.g>);
              public run(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class l {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.l>;
            public b: java.lang.Long;
            public c: string;
            public d: com.appdynamics.eumagent.runtime.private.t;
            public constructor();
            public static a(param0: com.appdynamics.eumagent.runtime.private.cs): com.appdynamics.eumagent.runtime.private.l;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class m {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.m>;
            public constructor(param0: java.net.URL, param1: java.net.URL, param2: java.net.URL, param3: com.appdynamics.eumagent.runtime.private.e, param4: com.appdynamics.eumagent.runtime.CollectorChannelFactory);
            public a(): com.appdynamics.eumagent.runtime.CollectorChannel;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class n extends com.appdynamics.eumagent.runtime.CollectorChannel {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.n>;
            public getOutputStream(): java.io.OutputStream;
            public constructor();
            public getHeaderFields(): java.util.Map<string, java.util.List<string>>;
            public getResponseCode(): number;
            public getInputStream(): java.io.InputStream;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class o {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.o>;
            public a: string;
            public b: string;
            public constructor(param0: string, param1: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class p extends com.appdynamics.eumagent.runtime.private.g {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.p>;
            public constructor(param0: number, param1: string);
            public a(): string;
            public constructor(param0: number);
            public a(param0: java.io.Writer): void;
            public toString(): string;
          }
          export module p {
            export class a {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.p.a>;
              public constructor();
              public a(param0: number, param1: string): com.appdynamics.eumagent.runtime.private.p;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class q extends com.appdynamics.eumagent.runtime.private.i {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.q>;
            public i: string;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp);
            public a(): string;
            public constructor(param0: number);
            public a(param0: com.appdynamics.eumagent.runtime.private.cu): void;
            public a(param0: java.io.Writer): void;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp);
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp, param3: string);
            public constructor(param0: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class r extends com.appdynamics.eumagent.runtime.private.an.b {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.r>;
            public g(): boolean;
            public d(): number;
            public h(): boolean;
            public e(): boolean;
            public constructor(param0: com.appdynamics.eumagent.runtime.private.s, param1: com.appdynamics.eumagent.runtime.AgentConfiguration, param2: com.appdynamics.eumagent.runtime.private.an);
            public f(): boolean;
            public c(): boolean;
            public a(param0: any): void;
            public a(): boolean;
            public i(): boolean;
            public b(): boolean;
            public j(): boolean;
            public a(param0: string): boolean;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class s {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.s>;
            public constructor(param0: java.io.File);
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class t {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.t>;
            public b: java.lang.Boolean;
            public c: java.lang.Boolean;
            public d: java.lang.Long;
            public e: java.lang.Boolean;
            public f: java.lang.Boolean;
            public g: java.lang.Boolean;
            public h: java.util.List<string>;
            public i: java.lang.Long;
            public j: java.lang.Boolean;
            public k: java.lang.Boolean;
            public l: java.lang.Boolean;
            public m: java.lang.Integer;
            public n: java.lang.Integer;
            public o: java.lang.Integer;
            public p: java.lang.Integer;
            public constructor();
            public static a(param0: com.appdynamics.eumagent.runtime.private.cs): com.appdynamics.eumagent.runtime.private.t;
            public a(param0: com.appdynamics.eumagent.runtime.private.cu): void;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class u extends com.appdynamics.eumagent.runtime.private.an.b {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.u>;
            public d: number;
            public e: com.appdynamics.eumagent.runtime.private.an;
            public j: java.lang.Runnable;
            public constructor(param0: number, param1: com.appdynamics.eumagent.runtime.private.an, param2: com.appdynamics.eumagent.runtime.private.x);
            public a(param0: any): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class v extends com.appdynamics.eumagent.runtime.private.i {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.v>;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp);
            public a(): string;
            public constructor(param0: number);
            public a(param0: com.appdynamics.eumagent.runtime.private.cu): void;
            public constructor(param0: com.appdynamics.eumagent.runtime.private.cp, param1: com.appdynamics.eumagent.runtime.private.cp, param2: androidNative.Array<java.lang.StackTraceElement>);
            public a(param0: java.io.Writer): void;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp);
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp, param3: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class w extends com.appdynamics.eumagent.runtime.private.i {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.w>;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp);
            public a(): string;
            public constructor(param0: number);
            public a(param0: com.appdynamics.eumagent.runtime.private.cu): void;
            public constructor(param0: java.lang.Throwable, param1: java.lang.Thread, param2: com.appdynamics.eumagent.runtime.private.cp, param3: java.lang.Iterable<com.appdynamics.eumagent.runtime.private.q>, param4: number);
            public a(param0: java.io.Writer): void;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp);
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp, param3: string);
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class x {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.x>;
            public e: com.appdynamics.eumagent.runtime.private.ag;
            public f: com.appdynamics.eumagent.runtime.private.e;
            public g: com.appdynamics.eumagent.runtime.private.x.a;
            public h: com.appdynamics.eumagent.runtime.private.r;
            public constructor(param0: globalAndroid.content.Context, param1: java.lang.Thread.UncaughtExceptionHandler, param2: com.appdynamics.eumagent.runtime.private.an, param3: com.appdynamics.eumagent.runtime.private.y, param4: com.appdynamics.eumagent.runtime.CrashReportCallback, param5: com.appdynamics.eumagent.runtime.private.r);
            public a(param0: com.appdynamics.eumagent.runtime.private.i): com.appdynamics.eumagent.runtime.private.i;
            public a(): void;
            public b(param0: com.appdynamics.eumagent.runtime.private.i): java.io.File;
            public a(param0: java.util.List<string>): void;
            public a(param0: java.lang.Thread, param1: java.lang.Throwable): java.io.File;
          }
          export module x {
            export class a {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.x.a>;
              public uncaughtException(param0: java.lang.Thread, param1: java.lang.Throwable): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class y {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.y>;
            public a(param0: string): com.appdynamics.eumagent.runtime.private.y.a;
            public constructor();
          }
          export module y {
            export class a {
              public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.y.a>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module appdynamics {
    export module eumagent {
      export module runtime {
        export module private {
          export class z extends com.appdynamics.eumagent.runtime.private.i {
            public static class: java.lang.Class<com.appdynamics.eumagent.runtime.private.z>;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp);
            public constructor(param0: com.appdynamics.eumagent.runtime.private.aa.c);
            public a(): string;
            public constructor(param0: number);
            public a(param0: com.appdynamics.eumagent.runtime.private.cu): void;
            public a(param0: java.io.Writer): void;
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp);
            public constructor(param0: string, param1: com.appdynamics.eumagent.runtime.private.cp, param2: com.appdynamics.eumagent.runtime.private.cp, param3: string);
          }
        }
      }
    }
  }
}

//Generics information:
//com.appdynamics.eumagent.runtime.private.cj:1
//com.appdynamics.eumagent.runtime.private.ck:1
//com.appdynamics.eumagent.runtime.private.cm:2
