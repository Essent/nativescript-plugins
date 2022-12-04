import { Application } from '@nativescript/core';

// Below you can comment/uncomment different delegates to test different plugin configurations
/**
 * Test @essent/nativescript-adobe-experience-cloud
 */
// import { AdobeAnalytics, AdobeAnalyticsSettings } from '@essent/nativescript-adobe-experience-cloud';

// export const adobeExperienceSettings: AdobeAnalyticsSettings = {
//   environmentId: 'Put your environment id here.',
//   debug: true,
// };

// if (global.isIOS) {
//   @NativeClass()
//   class MyDelegate extends UIResponder implements UIApplicationDelegate {
//     public static ObjCProtocols = [UIApplicationDelegate];

//     applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean {
//       AdobeAnalytics.getInstance().initSdk(adobeExperienceSettings, application.applicationState);
//       return true;
//     }

//     applicationDidEnterBackground(application: UIApplication): void {
//       AdobeAnalytics.getInstance().pauseCollectingLifecycleData();
//     }

//     applicationWillEnterForeground(application: UIApplication) {
//       AdobeAnalytics.getInstance().resumeCollectingLifecycleData();
//     }
//   }

//   Application.ios.delegate = MyDelegate;
// }

/**
 * Test @essent/nativescript-urban-airship
 */
//  import { NsUrbanAirship, UrbanAirshipSettings } from '@essent/nativescript-urban-airship';
//  export const urbanAirshipSettings: UrbanAirshipSettings = {
//     developmentAppKey: "Your Development App Key",
//     developmentAppSecret: "Your Development App Secret",
//     fcmSender: "Your Google API Project Number",
//     detectProvisioningMode: false,
//     // Toggles between the development and production app credentials
//     // Before submitting your application to an app store set to true
//     inProduction: false,
//     productionAppKey: "Your Production App Key",
//     productionAppSecret: "Your Production Secret",
//     urlAllowList: "*",
//     urlAllowListScopeJavaScriptInterface: "*",
//     urlAllowListScopeOpenURL: "*"
// };

// if (global.isIOS) {
//   @NativeClass()
//   class MyDelegate extends UIResponder implements UIApplicationDelegate {
//     public static ObjCProtocols = [UIApplicationDelegate];

//     applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean {
//       NsUrbanAirship.getInstance().startUp(urbanAirshipSettings, null);
//       return true;
//     }

//     applicationWillResignActive(application: UIApplication): void {
//       NsUrbanAirship.getInstance().resetBadgeCount();
//     }
//   }

//   Application.ios.delegate = MyDelegate;
// }

/**
 * Test @essent/nativescript-ng-sentry
 */
// import { NgSentry } from '@essent/nativescript-ng-sentry';

// Application.on(Application.launchEvent, function () {
//   NgSentry.getInstance().setCredentials('123456', '1234567890abcdefghijklmnopqrstuv');
// });

// Application.on(Application.resumeEvent, function () {
//   NgSentry.getInstance().sendCrashes();
// });

// Application.on(Application.uncaughtErrorEvent, function (args) {
//   if (global.isIOS) {
//     NgSentry.getInstance().saveCrash(args.ios, args.ios.stack);
//   } else {
//     NgSentry.getInstance().saveCrash(args.android.nativeException.getMessage(), args.android);
//   }
// });

Application.run({ moduleName: 'app-root' });
