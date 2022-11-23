const fs = require('fs');
const path = require('path');
module.exports = function (androidResourcesMigrationService: IAndroidResourcesMigrationService, logger: ILogger, projectData: IProjectData, injector: IInjector, hookArgs: any) {
  const platformName = ((hookArgs && hookArgs.platformData && hookArgs.platformData.normalizedPlatformName) || (hookArgs.checkForChangesOpts && hookArgs.checkForChangesOpts.platform) || '').toLowerCase();

  projectData = hookArgs && (hookArgs.projectData || (hookArgs.checkForChangesOpts && hookArgs.checkForChangesOpts.projectData));

  const platformData = getPlatformData(hookArgs && hookArgs.platformData, projectData, platformName, injector);

  const environmentName = hookArgs.prepareData.env.use ? hookArgReader(hookArgs.prepareData.env.use) : '';

  if (platformName === 'android') {
    const appdynamics = `
		dependencies {
			  classpath 'com.appdynamics:appdynamics-gradle-plugin:22.8.0'
		  `;

    const rootPath = projectData.projectDir;
    const buildGradle = path.join(rootPath, 'platforms', 'android', 'build.gradle');
    if (fs.existsSync(buildGradle)) {
      const buildGradleData = fs.readFileSync(buildGradle);
      let buildGradleContent = buildGradleData.toString() as string;
      let write = false;

      if (buildGradleContent.indexOf('com.appdynamics:appdynamics-gradle-plugin') === -1) {
        buildGradleContent = buildGradleContent.replace(/dependencies\s*{/, appdynamics);
        write = true;
      }

      // if (buildGradleContent.indexOf("apply plugin: 'adeum'") === -1) {
      // 	buildGradleContent = buildGradleContent + '\n' + "apply plugin: 'adeum'";
      // 	write = true;
      // }

      if (write) {
        fs.writeFileSync(buildGradle, buildGradleContent);
      }
    }
  } else if (platformName === 'ios') {
    // noop
  } else {
    logger.warn(`Platform '${platformName}' isn't supported: skipping appdynamics`);
    return;
  }
};

function getPlatformData(platformData: IPlatformData, projectData: IProjectData, platform: string, injector: IInjector): IPlatformData {
  if (!platformData) {
    // Used in CLI 5.4.x and below:
    const platformsData = injector.resolve<IPlatformsData>('platformsData');
    platformData = platformsData.getPlatformData(platform, projectData);
  }

  return platformData;
}

const hookArgReader = (args) => {
  if (typeof args !== 'string') {
    return Object.keys(args)[0];
  } else {
    return args;
  }
};
