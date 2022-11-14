module.exports = {
  message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
  pageSize: 32,
  scripts: {
    default: 'nps-i',
    nx: {
      script: 'nx',
      description: 'Execute any command with the @nrwl/cli',
    },
    format: {
      script: 'nx format:write',
      description: 'Format source code of the entire workspace (auto-run on precommit hook)',
    },
    '🔧': {
      script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
      description: '_____________  Apps to demo plugins with  _____________',
    },
    // demos
    apps: {
      '...Vanilla...': {
        script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
        description: ` 🔻 Vanilla`,
      },
      demo: {
        clean: {
          script: 'nx run demo:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo:android',
          description: '⚆  Run Android  🤖',
        },
      },
      '...Angular...': {
        script: `npx cowsay "Test all the Angles!"`,
        description: ` 🔻 Angular`,
      },
      'demo-angular': {
        clean: {
          script: 'nx run demo-angular:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo-angular:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo-angular:android',
          description: '⚆  Run Android  🤖',
        },
      },
    },
    '⚙️': {
      script: `npx cowsay "@essent/* packages will keep your ⚙️ cranking"`,
      description: '_____________  @essent/*  _____________',
    },
    // packages
    // build output is always in dist/packages
    '@essent': {
      // @essent/nativescript-iadvize
      'nativescript-iadvize': {
        build: {
          script: 'nx run nativescript-iadvize:build.all',
          description: '@essent/nativescript-iadvize: Build',
        },
      },
      // @essent/nativescript-medallia
      'nativescript-medallia': {
        build: {
          script: 'nx run nativescript-medallia:build.all',
          description: '@essent/nativescript-medallia: Build',
        },
      },
      // @essent/nativescript-urban-airship
      'nativescript-urban-airship': {
        build: {
          script: 'nx run nativescript-urban-airship:build.all',
          description: '@essent/nativescript-urban-airship: Build',
        },
      },
      // @essent/nativescript-appdynamics
      'nativescript-appdynamics': {
        build: {
          script: 'nx run nativescript-appdynamics:build.all',
          description: '@essent/nativescript-appdynamics: Build',
        },
      },
      'build-all': {
        script: 'nx run-many --target=build.all --all',
        description: 'Build all packages',
      },
    },
    '⚡': {
      script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
      description: '_____________  Focus (VS Code supported)  _____________',
    },
    focus: {
      'nativescript-iadvize': {
        script: 'nx run nativescript-iadvize:focus',
        description: 'Focus on @essent/nativescript-iadvize',
      },
      'nativescript-medallia': {
        script: 'nx run nativescript-medallia:focus',
        description: 'Focus on @essent/nativescript-medallia',
      },
      'nativescript-urban-airship': {
        script: 'nx run nativescript-urban-airship:focus',
        description: 'Focus on @essent/nativescript-urban-airship',
      },
      'nativescript-appdynamics': {
        script: 'nx run nativescript-appdynamics:focus',
        description: 'Focus on @essent/nativescript-appdynamics',
      },
      reset: {
        script: 'nx g @nativescript/plugin-tools:focus-packages',
        description: 'Reset Focus',
      },
    },
    '.....................': {
      script: `npx cowsay "That's all for now folks ~"`,
      description: '.....................',
    },
  },
};
