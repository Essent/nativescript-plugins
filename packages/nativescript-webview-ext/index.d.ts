import { WebViewExtBase } from './common';
export * from './common';
export declare class WebViewExt extends WebViewExtBase {
  ios: any /* WKWebView */;
  static supportXLocalScheme: boolean;
  readonly supportXLocalScheme: boolean;
  viewPortSize: {
    initialScale: number;
  };
  private limitsNavigationsToAppBoundDomains;
  protected injectWebViewBridge(): Promise<void>;
  protected injectViewPortMeta(): Promise<void>;
  executeJavaScript<T>(scriptCode: string, stringifyResult?: boolean): Promise<T>;
  onLoaded(): void;
  onUnloaded(): void;
  stopLoading(): void;
  _loadUrl(src: string): void;
  _loadData(content: string): void;
  get canGoBack(): boolean;
  get canGoForward(): boolean;
  goBack(): void;
  goForward(): void;
  reload(): void;
  _webAlert(message: string, callback: () => void): boolean;
  _webConfirm(message: string, callback: (response: boolean | null) => void): boolean;
  _webPrompt(message: string, defaultText: string, callback: (response: string | null) => void): boolean;
  registerLocalResource(resourceName: string, path: string): void;
  unregisterLocalResource(resourceName: string): void;
  getRegisteredLocalResource(resourceName: string): string;
  getTitle(): Promise<string>;
  autoLoadStyleSheetFile(resourceName: string, path: string, insertBefore?: boolean): Promise<void>;
  removeAutoLoadStyleSheetFile(resourceName: string): void;
  autoLoadJavaScriptFile(resourceName: string, path: string): Promise<void>;
  removeAutoLoadJavaScriptFile(resourceName: string): void;
}
