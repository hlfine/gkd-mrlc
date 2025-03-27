import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mxchip.petmarvel',
  name: '滴宠生活',
  groups: [
    {
      key: 1,
      name: '局部广告-左上角卡片弹窗',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.mxchip.petmarvel.device.panel.DevicePanelActivity',
          matches:
            'View[childCount=19] > View[index=1] > Image[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13989316',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.mxchip.petmarvel.MainActivity',
          matches: '[vid="iv_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/de4ea9ad-c85f-4ace-bd4e-7b7fc9adbc2a',
          snapshotUrls: 'https://i.gkd.li/i/14717743',
        },
      ],
    },
  ],
});
