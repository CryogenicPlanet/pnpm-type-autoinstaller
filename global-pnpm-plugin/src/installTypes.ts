import { exec } from 'child_process';

export function installTypes(packageName: string): Promise<void> {
    return new Promise((resolve, reject) => {
        exec(`pnpm install -D @types/${packageName}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                reject(error);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
            resolve();
        });
    });
}