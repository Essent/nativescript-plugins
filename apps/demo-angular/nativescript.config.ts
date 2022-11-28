import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.plugindemoangular',
  appResourcesPath: '../../tools/assets/App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
  },
  appPath: 'src',
  cli: {
    packageManager: 'npm',
  },
  hooks: [
    {
      type: 'before-checkForChanges',
      script: './scripts/nativescript-appdynamics/before-checkForChanges.js',
    },
    {
      type: 'before-watchPatterns',
      script: './scripts/nativescript-appdynamics/before-watchPatterns.js',
    },
  ],
} as NativeScriptConfig;
