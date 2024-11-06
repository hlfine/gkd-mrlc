import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bbk.appstore',
  name: 'vivo应用商店',
  groups: [
    {
      key: 1,
      name: '权限提示-通知权限',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
<<<<<<< HEAD
          key: 0,
          matches: '[id="com.bbk.appstore:id/upgrade_necessary_btn_high_new"]',
          snapshotUrls: 'https://i.gkd.li/i/13198101',
        },
        {
          key: 1,
=======
          key: 1,
          activityIds: '.ui.AppStoreTabActivity',
>>>>>>> bfe3f98795eadca621be6cb0d2359e624d0623d7
          matches: ['[text*="通知"]', '[text="取消"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/13198234',
            'https://i.gkd.li/i/13246971',
            'https://i.gkd.li/i/13884356',
          ],
        },
      ],
    },
<<<<<<< HEAD
=======
    {
      key: 2,
      name: '全屏广告-热门应用推荐',
      desc: '点击[跳过，进入首页]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.upgrade.UpgradeNecessaryActivity',
          matches: '[text="跳过，进入首页"]',
          exampleUrls: 'https://e.gkd.li/eb96ca80-2e68-4f41-ac0f-3c82092034d7',
          snapshotUrls: 'https://i.gkd.li/i/13198101',
        },
      ],
    },
>>>>>>> bfe3f98795eadca621be6cb0d2359e624d0623d7
  ],
});
