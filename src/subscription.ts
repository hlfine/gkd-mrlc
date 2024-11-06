import { defineGkdSubscription } from '@gkd-kit/define';
import categories from './categories';
import globalGroups from './globalGroups';
import { RawApp, RawAppGroup } from '@gkd-kit/api';
import { batchImportApps } from '@gkd-kit/tools';
import { OPEN_AD_ORDER } from './globalGroups';

const apps = await batchImportApps(`${import.meta.dirname}/apps`);
const rawApps: RawApp[] = [];
apps.forEach((appConfig) => {
  appConfig.groups?.forEach((g: RawAppGroup) => {
    if (!g.name.startsWith('开屏广告')) {
      g.enable = false;
    } else {
      g.order = OPEN_AD_ORDER;
    }
  });
  rawApps.push(appConfig);
});

export default defineGkdSubscription({
<<<<<<< HEAD
  id: 2,
  name: 'Mrlc的GKD订阅',
  version: 0,
  author: 'Mrlc',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://www.npmjs.com/package/gkd-mrlc',
=======
  id: 666,
  name: 'AIsouler的GKD订阅',
  version: 0,
  author: 'AIsouler',
  checkUpdateUrl: './AIsouler_gkd.version.json5',
  supportUri: 'https://github.com/AIsouler/GKD_subscription/issues/new/choose',
>>>>>>> bfe3f98795eadca621be6cb0d2359e624d0623d7
  categories,
  globalGroups,
  apps: rawApps,
});
