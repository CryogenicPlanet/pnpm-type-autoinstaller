import { checkTypes } from './checkTypes';
import { installTypes } from './installTypes';

export default async function globalPnpmPlugin(
  args: string[],
  opts: { [key: string]: any }
) {
  const packageName = args[0];

  if (await checkTypes(packageName)) {
    await installTypes(packageName, opts);
  }
}