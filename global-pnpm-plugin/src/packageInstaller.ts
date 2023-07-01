import { exec } from 'child_process';
import { checkTypes } from './typesChecker';

export function installPackage(packageName: string): Promise<void> {
    return new Promise((resolve, reject) => {
        exec(`pnpm install ${packageName}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Could not install package: ${error.message}`);
                reject(error);
                return;
            }

            if (stderr) {
                console.error(`Error while installing package: ${stderr}`);
                reject(new Error(stderr));
                return;
            }

            console.log(`Package ${packageName} installed successfully.`);
            checkTypes(packageName)
                .then(() => resolve())
                .catch((error) => reject(error));
        });
    });
}