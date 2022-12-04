# Adobe Experience Cloud for NativeScript

```
npm install @essent/nativescript-adobe-experience-cloud --save
```
This plugin provides the Adobe Experience Platform 

https://github.com/Adobe-Marketing-Cloud/acp-sdks/releases
Get the Adobe Experience Platform SDK https://aep-sdks.gitbook.io/docs/getting-started/get-the-sdk

# Setting up the application for usage with this plugin.

## Setup config.ts

Create a configuration file and place your ENVIRONMENT_ID from Adobe Experience platform.

```ts
import { AdobeAnalyticsSettings } from "@essent/nativescript-adobe-experience-cloud";

export const adobeExperienceSettings: AdobeAnalyticsSettings = {
    environmentId: 'Put your environment id here.',
    debug: true
};
```
## Initialize SDK

### Android

```ts
import { AdobeAnalytics } from '@essent/nativescript-adobe-experience-cloud';
import { adobeExperienceSettings } from './config'; 

@NativeClass()
@JavaProxy('nl.essent.Application')
class Application extends android.app.Application {

    public onCreate(): void {
        super.onCreate();
        AdobeAnalytics.getInstance().initSdk(adobeExperienceSettings, this);
    }

    public attachBaseContext(baseContext: android.content.Context) {
        super.attachBaseContext(baseContext);
    }
}
```

### IOS

```ts
import { AdobeAnalytics } from '@essent/nativescript-adobe-experience-cloud';
import { adobeExperienceSettings } from './config'; 

@NativeClass()
class MyDelegate extends UIResponder implements UIApplicationDelegate {
    public static ObjCProtocols = [UIApplicationDelegate];

    applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean {
        AdobeAnalytics.getInstance().initSdk(adobeExperienceSettings, application);
        return true;
     }
 }
    ios.delegate = MyDelegate;
```

**NOTE** This plugin provides only initial set of extensions registered with Adobe Experience platform. For any additional extension fork this plugin and configure based on Mobile Property installation instructions. 

## Enable lifecycle tracking

### Android
 
With onResume function start Lifecycle data collection:

```ts
import {AdobeAnalytics} from "@essent/nativescript-adobe-experience-cloud";

public onResume() : void {
        AdobeAnalytics.getInstance().resumeCollectingLifecycleData();
        super.onResume();
    }
}
```

Use onPause function to pause collection Lifecycle data:

```ts
public onPause() : void {
        AdobeAnalytics.getInstance().pauseCollectingLifecycleData();
        super.onPause();
    }
```
### IOS

Start collection Lifecycle data is part of plugin implementation called during initialization of SDK.

When application is resuming from background state, you need to resume collection of Lifecycle data:

```ts
applicationWillEnterForeground(application: UIApplication){
    AdobeAnalytics.getInstance().resumeCollectingLifecycleData();
 }
```
When the app enters the background, pause collecting Lifecycle data:

```ts
applicationDidEnterBackground(application: UIApplication): void {
    AdobeAnalytics.getInstance().pauseCollectingLifecycleData();
}
```

## Track states and actions

States and actions can be traced through method calls that match their native counterparts signature.

## Privacy options
See: https://marketing.adobe.com/resources/help/en_US/mobile/ios/privacy.html

Select a privacy option:

Send Data Until Opt-Out
```ts
AdobeAnalytics.getInstance().optIn();
```
Hold Data Until Opt-In
```ts
AdobeAnalytics.getInstance().optOut();
```
