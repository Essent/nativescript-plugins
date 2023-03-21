import { UIChartsViewBase } from './common';
import { optionsHandler } from './options-handlers/options-handler';
import { Application } from '@nativescript/core';
import { langHandler } from './options-handlers/lang/lang-handler';

let WebViewClient: any; //android.webkit.WebViewClient;
function initWebViewClient() {
  if (!WebViewClient) {
    WebViewClient = (<any>android.webkit.WebViewClient).extend({
      shouldOverrideUrlLoading: function (param0: android.webkit.WebChromeClient, param1) {
        let url = null;
        console.log('param1:', param1);
        if (param1 instanceof String) {
          url = param1;
        }
        if (param1 instanceof (android as any).webkit.WebResourceRequest) {
          url = param1.getUrl().toString();
        }
        if (!url || url.startsWith('http')) {
          return false;
        }
        // if (url && url.startsWith('ns-yt')) {
        //   const uri = android.net.Uri.parse(url);
        //   const owner = this.owner ? this.owner.get() : null;
        //   if (owner) {
        //     owner._handleUrl(uri);
        //     return true;
        //   }
        //   return false;
        // }
        return false;
      },
    });
  }
}

export class UIChartsView extends UIChartsViewBase {
  public _chartInitialized: boolean = false;
  private _clientWebView: android.webkit.WebViewClient;
  private _client: android.webkit.WebChromeClient;
  public customLayoutChangeListener;
  public chartHeight;
  public chartWidth;
  public maxHeight;
  public onLoaded() {
    super.onLoaded();
    if (!this.customLayoutChangeListener) {
      this.customLayoutChangeListener = new android.view.View.OnLayoutChangeListener({
        onLayoutChange: (v) => {
          var w = this.nativeView.owner.get();
          if (w && this.nativeView.getOptions()) {
            const newWidth = w.getActualSize().width;
            const newHeight = w.getActualSize().height;
            if (!this.maxHeight) this.maxHeight = newHeight;
            if (newHeight > this.maxHeight) {
              // condition detected where android chart won't resize above this height,
              // dont attempt resize to avoid chart being cut off at the bottom
            } else if (this.chartHeight !== newHeight) {
              if (this.nativeView.getOptions().getChart()) {
                this.nativeView.getOptions().getChart().setHeight(new java.lang.Long(newHeight));
                this.nativeView.getOptions().getChart().setWidth(new java.lang.Long(newWidth));
              }
              this.chartHeight = newHeight;
              this.chartWidth = newWidth;
              var hiOptions = optionsHandler(this.options);
              this.nativeView.update(hiOptions);
            }
          }
        },
      });
      this.nativeView.addOnLayoutChangeListener(this.customLayoutChangeListener);
    }
  }

  public createNativeView() {
    const chartView = new com.highsoft.highcharts.core.HIChartView(this._context) as any;
    chartView.setBackgroundColor(android.graphics.Color.TRANSPARENT);
    initWebViewClient();
    return chartView;
  }

  // public onUnloaded() {
  //   super.onUnloaded();
  //   this.nativeView.removeOnLayoutChangeListener(this.customLayoutChangeListener);
  // }

  /**
   * Initializes properties/listeners of the native view.
   */
  initNativeView(): void {
    // Attach the owner to nativeView.
    // When nativeView is tapped we get the owning JS object through this field.
    (<any>this.nativeView).owner = new WeakRef(this);
    (<any>this.nativeView).generateDefaultLayoutParams();
    // (<any>this)._orientationHandler = this.onOrientationChange.bind(this);
    // Application.on('orientationChanged', (<any>this)._orientationHandler);
    super.initNativeView();

    const layout = <android.widget.RelativeLayout>this.nativeViewProtected;
    const webView = <android.webkit.WebView>layout.getChildAt(0);
    console.log('webview:', webView);
    const settings = webView.getSettings();

    console.log('android.webkit.WebSettings.LOAD_NO_CACHE:', android.webkit.WebSettings.LOAD_NO_CACHE);
    console.log('android.webkit.WebSettings.LOAD_DEFAULT:', android.webkit.WebSettings.LOAD_DEFAULT);
    settings.setCacheMode(android.webkit.WebSettings.LOAD_CACHE_ELSE_NETWORK);
    console.log('getCacheMode:', settings.getCacheMode());
    console.log('webView.getWebViewClient():', webView.getWebViewClient());
    console.log('webView.getWebChromeClient():', webView.getWebChromeClient());
    settings.setDatabaseEnabled(true);
    settings.setDomStorageEnabled(true);
    settings.setJavaScriptEnabled(true);
    settings.setLoadWithOverviewMode(true);
    settings.setUserAgentString('UICharts_Agent');
    settings.setRenderPriority(android.webkit.WebSettings.RenderPriority.HIGH);
    settings.setMixedContentMode(android.webkit.WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
    settings.setMediaPlaybackRequiresUserGesture(false);
    settings.setBuiltInZoomControls(false);
    settings.setDisplayZoomControls(false);
    settings.setSupportZoom(false);

    this._clientWebView = new WebViewClient();
    this._client = new android.webkit.WebChromeClient();
    // this._client.owner = new WeakRef(this);
    console.log('swapping WebViewClient and WebChromeClient with custom ones...');
    webView.setWebViewClient(this._clientWebView);
    webView.setWebChromeClient(this._client);
    console.log('webView.getWebViewClient():', webView.getWebViewClient());
    console.log('webView.getWebChromeClient():', webView.getWebChromeClient());
  }

  public disposeNativeView() {
    this._chartInitialized = false;
    // Application.off('orientationChanged', (<any>this)._orientationHandler);
    super.disposeNativeView();
  }

  // onOrientationChange() {
  //   setTimeout(() => {
  //     const w = (<any>this).nativeView.owner.get();
  //     if (w) {
  //       // TODO: redraw the chart here to handle orientation change
  //     }
  //   });
  // }

  public setOptions(opts: any) {
    console.log('setOptions');
    this.options = opts;
    if (this.nativeView) {
      const hiOptions = optionsHandler(this.options);
      this.nativeView.setOptions(hiOptions);
      this._chartInitialized = true;
      this.nativeView.reload();
    }
  }

  public updateOptions(opts) {
    console.log('updateOptions');
    this.options = opts;
    if (this.nativeView) {
      const hiOptions = optionsHandler(this.options);
      // this.nativeView.setOptions(hiOptions);
      this.nativeView.update(hiOptions, true, true);
    }
  }

  public setLangOptions(opts: any) {
    const hiLang = langHandler(opts);
    if (this.nativeView) {
      this.nativeView.lang = hiLang;
    }
  }

  public setExtremes(newMin: any, newMax: any, xAxisIndex = 0) {
    console.log(this.nativeView);
    if (!this.nativeView) {
      return;
    }

    const nativeview = <any>this.nativeView;

    const opts = nativeview.getOptions() as com.highsoft.highcharts.common.hichartsclasses.HIOptions;
    if (opts) {
      const xaxisArr = opts.getXAxis();
      const xaxis = xaxisArr.get(xAxisIndex);
      xaxis.setMin(new java.lang.Long(newMin));
      xaxis.setMax(new java.lang.Long(newMax));
      // nativeview.zoomOut();
      this.updateOptions(opts);
      // nativeview.update(opts);
    }
  }

  public enableAnnotationsModule() {
    if (this.nativeView) {
      const nativeArray = new java.util.ArrayList<any>();
      nativeArray.add('annotations');
      this.nativeView.plugins = nativeArray;
    }
  }
}
