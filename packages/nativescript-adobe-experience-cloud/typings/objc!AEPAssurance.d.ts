declare var AEPAssuranceVersionNumber: number;

declare var AEPAssuranceVersionString: interop.Reference<number>;

declare class AEPMobileAssurance extends NSObject {
  static alloc(): AEPMobileAssurance; // inherited from NSObject

  static new(): AEPMobileAssurance; // inherited from NSObject

  static setExtensionVersion(value: string): void;

  static startSession(): void;

  static startSessionWithUrl(url: NSURL): void;

  friendlyName: string;

  metadata: NSDictionary<string, string>;

  name: string;

  runtime: AEPExtensionRuntime;

  static extensionVersion: string;

  constructor(o: { runtime: AEPExtensionRuntime });

  initWithRuntime(runtime: AEPExtensionRuntime): this;

  onRegistered(): void;

  onUnregistered(): void;

  readyForEvent(event: AEPEvent): boolean;
}
