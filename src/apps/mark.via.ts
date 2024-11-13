import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'mark.via',
  name: 'Via',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      activityIds: '.Shell',
      rules: [
        {
          key: 1,
          matches: 'TextView + Button[index=1]',
          snapshotUrls: 'https://i.gkd.li/i/17690798',
          exampleUrls: 'https://e.gkd.li/c12f1e9f-792a-4f5a-8222-e3c9d3ce4db2',
        },
        {
          key: 2,
          matches: '@TextView +2 [text="立即打开"]',
          snapshotUrls: 'https://i.gkd.li/i/17690798',
        },
      ],
    },
  ],
});
