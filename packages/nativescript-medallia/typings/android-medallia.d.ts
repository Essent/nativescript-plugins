// com.medallia.digital.mobilesdk
declare module com {
  export module medallia {
    export module digital {
      export module mobilesdk {
        export class MDExternalError {
          public getErrorCode(): number;
          public getMessage(): string;
        }
        export class MDResultCallback {
          public constructor(implementation: {
              onError(param0: com.medallia.digital.mobilesdk.MDExternalError): void;
              onSuccess(): void;
          });
          public onError(param0: com.medallia.digital.mobilesdk.MDExternalError): void;
          public onSuccess(): void;
        }
        export class MedalliaDigital {
          public static init(application: com.android.Application, apiToken: string, callback: com.medallia.digital.mobilesdk.MDResultCallback): void;
          public static showForm(formId: string, callback: com.medallia.digital.mobilesdk.MDResultCallback) : void;
          public static revertStopSDK(): void;
          public static setCustomParameter(name: string, value: any): void;
        }
      }
    }
  }
}

