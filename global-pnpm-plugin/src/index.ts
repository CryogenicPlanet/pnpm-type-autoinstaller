import { installPackage } from './packageInstaller';
import { checkTypes } from './typesChecker';

export function initPlugin() {
  const packageToInstall = process.argv[2];

  if (!packageToInstall) {
    console.error('No package specified for installation.');
    process.exit(1);
  }

  installPackage(packageToInstall)
    .then(() => checkTypes(packageToInstall))
    .then((typesExist) => {
      if (typesExist) {
        return installPackage(`@types/${packageToInstall}`, true);
      }
    })
    .catch((error) => {
      console.error('An error occurred during the installation process:', error);
      process.exit(1);
    });
}