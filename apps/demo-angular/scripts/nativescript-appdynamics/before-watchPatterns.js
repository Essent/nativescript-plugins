module.exports = function (hookArgs) {
  if (hookArgs.liveSyncData && !hookArgs.liveSyncData.bundle) {
    return (args, originalMethod) => {
      return originalMethod(...args).then((originalPatterns) => {
        const projectData = hookArgs.projectData;
        const appResourcesRelativeDirectoryPath = projectData.getAppResourcesRelativeDirectoryPath();
        console.log('watchPatterns', projectData.projectDir);
        return originalPatterns;
      });
    };
  }
};
//# sourceMappingURL=before-watchPatterns.js.map
