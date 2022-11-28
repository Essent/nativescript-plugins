const ngPackage = require('ng-packagr');
const path = require('path');
const fs = require('fs-extra');
const devkit = require('@nrwl/devkit');

const rootDir = path.resolve(path.join(__dirname, '..', '..'));
const nxConfigPath = path.resolve(path.join(rootDir, 'nx.json'));
const nxConfig = JSON.parse(fs.readFileSync(nxConfigPath));
const npmScope = nxConfig.npmScope;

const cmdArgs = process.argv.slice(2);
const packageName = cmdArgs[0];
const publish = cmdArgs[1] === 'publish';
const isDemoBuild = cmdArgs[1] === 'demo';

const packagePath = path.join('packages', packageName, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packagePath));
const npmPackageName = packageJson.name;
console.log(`Building ${npmPackageName}${isDemoBuild ? ' for demo' : ''}...${publish ? 'and publishing.' : ''}`);

// build angular package
function buildAngular() {
  ngPackage
    .ngPackagr()
    .forProject(path.join('packages', packageName, 'angular', 'ng-package.json'))
    .withTsConfig(path.join('packages', packageName, 'angular', 'tsconfig.angular.json'))
    .build()
    .then(() => {
      console.log(`${npmPackageName} angular built successfully.`);
      finishPreparation();
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}

// copy angular ng-packagr output to dist/packages/{name}
function copyAngularDist() {
  fs.copy(path.join('packages', packageName, 'angular', 'dist'), path.join('dist', 'packages', packageName, 'angular'))
    .then(() => {
      console.log(`${npmPackageName} angular built successfully.`);
      // buildNativeSrc();
      finishPreparation();
    })
    .catch((err) => console.error(err));
}

function prepareHooks() {
  const hooksFolder = path.join(rootDir, 'packages', packageName, 'hooks');
  const hooksFolderDist = path.join(rootDir, 'dist', 'packages', packageName, 'hooks');
  const destinations = [path.join(rootDir, 'apps', 'demo', 'scripts', packageName), path.join(rootDir, 'apps', 'demo-angular', 'scripts', packageName)];
  if (fs.existsSync(hooksFolder)) {
    // prepare hooks for demoing or publishing
    if (isDemoBuild) {
      // copy to demo scripts and adjust hooks in package
      for (const demoPathDest of destinations) {
        fs.copySync(hooksFolderDist, demoPathDest, { overwrite: true });
      }
      if (packageJson.nativescript) {
        const hooks = packageJson.nativescript.hooks;
        packageJson.nativescript.hooksDisabled = hooks;
        delete packageJson.nativescript.hooks;
      }
      if (packageJson.scripts) {
        const scripts = packageJson.scripts;
        packageJson.scriptsDisabled = scripts;
        delete packageJson.scripts;
      }
    } else {
      // if hooks or scripts are disabled, just reenable them
      if (packageJson.nativescript) {
        const hooks = packageJson.nativescript.hooksDisabled;
        packageJson.nativescript.hooks = hooks;
        delete packageJson.nativescript.hooksDisabled;
      }
      if (packageJson.scriptsDisabled) {
        const scripts = packageJson.scriptsDisabled;
        packageJson.scripts = scripts;
        delete packageJson.scriptsDisabled;
      }
    }
    fs.writeFileSync(packagePath, devkit.serializeJson(packageJson));
  }
}

function finishPreparation() {
  prepareHooks();

  fs.copy(path.join('tools', 'assets', 'publishing'), path.join('dist', 'packages', packageName))
    .then(() => console.log(`${npmPackageName} ready to publish.`))
    .catch((err) => console.error(err));
}

if (fs.existsSync(path.join(rootDir, 'packages', packageName, 'angular'))) {
  // package has angular specific src, build it first
  buildAngular();
} else {
  finishPreparation();
}
