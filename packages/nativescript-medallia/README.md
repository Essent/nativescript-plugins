Integration of Medallia ( https://www.medallia.com/ ) into NativeScript Android and IOS applications.

## Prerequisites / Requirements

The plugin is currently based on NativeScript 7+ and XCode 12

## Installation

```
npm install @essent/nativescript-medallia
```

## Usage

Initializing Medallia (should be done in app.ts):

```
    import { Medallia } from '@essent/nativescript-medallia';
    ...
    if (isIOS) {
      Medallia.init("...Put your IOS Medallia api key here...");
    }

    app.run({ moduleName: "main-page" });

    if (isAndroid) {
      Medallia.init("...Put your Android Medallia api key here...");
    }
```

Showing medallia survey form:

```
    Medallia.showForm("...survey form id here...").subscribe(
      (success: boolean) => {

      },
      (error: string) => {

      });
```

## Demo

The following steps should be performed in order to run demo app for first time:

1. Create global-config.ts file which exports two global constants (MEDALLIA_API_KEY_ANDROID and MEDALLIA_API_KEY_IOS).
   It should look like this:

```
export const MEDALLIA_API_KEY_ANDROID: string = "...Put your Android Medallia api key here...";
export const MEDALLIA_API_KEY_IOS: string = "...Put your IOS Medallia api key here...";
```

2. Place your global-config.ts file into demo/app folder
3. execute "npm install" from "src" folder
4. execute "npm run clean" from "src" folder
5. execute "npm run plugin.prepare" from src folder
6. execute "npm run demo.ios" or "npm run demo.android" from "src" folder

For next demo app runs, it would be usually enough the perform the last step only, but that also depends on the changes you make on the project so some of the other steps could be needed as well.
