import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.oplus.appdetail',
  name: '应用安装器',
  groups: [
    {
      key: 1,
      name: '功能类-自动安装应用',
      fastQuery: true,
      activityIds: [
        '.InstallStart',
        '.model.guide.ui.InstallGuideActivity',
        '.model.finish.InstallFinishActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击[继续安装]',
          excludeMatches:
            '[id="com.oplus.appdetail:id/view_scanning_and_tip_view_tv_title"][text^="正在扫描"]',
          matches: '[text="继续安装" && text.length=4]',
          snapshotUrls: [
            'https://i.gkd.li/i/13038560', // 使用 excludeMatches，扫描病毒阶段不进行点击
            'https://i.gkd.li/i/13054204',
            'https://i.gkd.li/i/13038570',
            'https://i.gkd.li/i/19665327',
          ],
        },
        {
          key: 1,
          name: '点击[完成]',
          matches: '[text="完成" && text.length=2]',
          snapshotUrls: [
            'https://i.gkd.li/i/13038664',
            'https://i.gkd.li/i/13054849',
            'https://i.gkd.li/i/19665319',
          ],
        },
      ],
    },
  ],
});
