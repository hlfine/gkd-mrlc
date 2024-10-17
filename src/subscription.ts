import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 233,
  name: '111111',
  version: 0,
  author: 'author',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/mrlctate/subscription-json',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
