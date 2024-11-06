import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sinovatech.unicom.ui',
  name: '中国联通',
  groups: [
    {
<<<<<<< HEAD
      name: '开屏广告',
      key: 0,
      fastQuery: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          matches:
            'ImageView[vid="adv_bottom_detail"] - TextView[text*="跳过"]',
          snapshotUrls: ['https://i.gkd.li/i/17550316'],
        },
      ],
    },
    {
=======
>>>>>>> bfe3f98795eadca621be6cb0d2359e624d0623d7
      key: 1,
      name: '权限提示',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.sinovatech.unicom.basic.ui.activity.MainActivity',
        'com.sinovatech.unicom.basic.ui.activity.WelcomeClient',
      ],
<<<<<<< HEAD
      rules: '[text="去开启"] - [text="以后再说"]',
=======
      rules: '[text="去开启"] - [vid="custom_dialog_cancel_button"]',
>>>>>>> bfe3f98795eadca621be6cb0d2359e624d0623d7
      snapshotUrls: [
        'https://i.gkd.li/i/13331268',
        'https://i.gkd.li/i/14751210',
      ],
    },
    {
      key: 2,
      name: '更新提示',
<<<<<<< HEAD
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        'ImageView[id="com.sinovatech.unicom.ui:id/custom_dialog_cancel_button"]',
=======
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.sinovatech.unicom.ui:id/custom_dialog_cancel_button"]',
>>>>>>> bfe3f98795eadca621be6cb0d2359e624d0623d7
      snapshotUrls: 'https://i.gkd.li/i/13511386',
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          forcedTime: 10000,
          activityIds: 'com.sinovatech.unicom.basic.ui.activity.MainActivity',
          matches:
<<<<<<< HEAD
            '[text="首页弹窗"] >3 View > Image[clickable=true][text!=null]',
=======
            '[text="首页弹窗"] >2 View > @Image[clickable=true][text!=null] <<n [vid="main_fragment_layout"]',
>>>>>>> bfe3f98795eadca621be6cb0d2359e624d0623d7
          snapshotUrls: 'https://i.gkd.li/i/14504242',
        },
        {
          key: 1,
          activityIds: 'com.sinovatech.unicom.basic.ui.activity.MainActivity',
          matches:
<<<<<<< HEAD
            '@TextView[id="home_popup_close"] <<n [vid="main_fragment_layout_haoka"]',
=======
            '@TextView[childCount=0][clickable=true][id="home_popup_close"] <<n [vid="main_fragment_layout_haoka"]',
>>>>>>> bfe3f98795eadca621be6cb0d2359e624d0623d7
          snapshotUrls: 'https://i.gkd.li/i/15971964',
        },
      ],
    },
    {
      key: 4,
      fastQuery: true,
      name: '局部广告-首页右下角卡片悬浮窗',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.sinovatech.unicom.basic.ui.activity.MainActivity',
<<<<<<< HEAD
          matches: 'ImageView[vid="home_xuanfu_close"]',
=======
          matches: '[id="com.sinovatech.unicom.ui:id/home_xuanfu_close"]',
>>>>>>> bfe3f98795eadca621be6cb0d2359e624d0623d7
          snapshotUrls: 'https://i.gkd.li/i/13930543',
        },
      ],
    },
  ],
});
