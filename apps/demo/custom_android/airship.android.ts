// import { NsUrbanAirship, UrbanAirshipSettings } from '@essent/nativescript-urban-airship';

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

// the `JavaProxy` decorator specifies the package and the name for the native *.JAVA file generated.
// @NativeClass()
// @JavaProxy('com.tns.MyUAApplication')
// class MyCustomApplication extends android.app.Application {

//     public onCreate(): void {
//         super.onCreate();

//         NsUrbanAirship.getInstance().startUp(urbanAirshipSettings, this);
//     }

//     public attachBaseContext(baseContext: android.content.Context) {
//         super.attachBaseContext(baseContext);

//         // This code enables MultiDex support for the application (if needed)
//         androidx.multidex.MultiDex.install(this);
//     }
// }
