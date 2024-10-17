import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.netdisk',
  name: '百度网盘',
  groups: [
    {
      name: '全屏广告-弹窗广告',
      key: 1,
      desc: '点击关闭',
      enable: false,
      rules: [
        {
          key: 3,
          matches: ['[vid="iv_close"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/17405893',
            'https://i.gkd.li/i/12642505',
            'https://i.gkd.li/i/12783106',
            'https://i.gkd.li/i/12923937',
            'https://i.gkd.li/i/13806852',
            'https://i.gkd.li/i/14730106',
            'https://i.gkd.li/i/14822799',
          ],
          activityIds: [
            'com.baidu.netdisk.business.guide.dialog.lifeproduct.',
            'com.baidu.netdisk.ui.MainActivity',
            'com.baidu.netdisk.ui.Navigate',
          ],
        },
        {
          name: '相册页面激活无限空间弹窗',
          key: 4,
          matches: [
            '@ImageView[id="com.baidu.netdisk:id/close_btn"] + ImageView[id="com.baidu.netdisk:id/bg_image"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/12648987'],
          activityIds: [
            'com.baidu.netdisk.cloudimage.ui.album.AlbumGuideOneImageDialog',
          ],
        },
      ],
    },
  ],
});
