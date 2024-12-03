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
          name: '居中广告-弹窗广告',
          matches: 'TextView + Button[index=1]',
          snapshotUrls: 'https://i.gkd.li/i/17690798',
          exampleUrls: 'https://e.gkd.li/c12f1e9f-792a-4f5a-8222-e3c9d3ce4db2',
        },
        {
          key: 2,
          name: '底部弹窗-打开QQ浏览器',
          matches: '@TextView +2 [text="立即打开"]',
          snapshotUrls: 'https://i.gkd.li/i/17690798',
        },
        {
          key: 3,
          name: '底部弹窗-限时惊喜',
          matches:
            'TextView[text*="QQ浏览器"] < View - @[text*="关闭"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/17986529',
        },
        {
          key: 4,
          name: '搜索页广告',
          matches: '[text="广告"] + Image[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/17986727',
        },
      ],
    },
  ],
});
