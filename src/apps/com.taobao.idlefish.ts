import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.idlefish',
  name: '闲鱼',
  groups: [
    {
      key: 1,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[desc^="开启系统通知"] > ImageView[clickable=true][desc=null]',
      snapshotUrls: 'https://i.gkd.li/i/13538351',
    },
    {
      key: 2,
      name: '权限提示',
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.taobao.idlefish.maincontainer.activity.MainActivity',
      rules:
        '@Button[visibleToUser=true][text="取消"] <<n FrameLayout >n TextView[text*="手机信息"]',
      snapshotUrls: 'https://i.gkd.li/i/13620277',
    },
    {
      key: 3,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="立即升级"] -2 [text="暂不升级"]',
      snapshotUrls: 'https://i.gkd.li/i/13832272',
    },
    {
      key: 4,
      name: '全屏广告-红包弹窗',
      desc: '点击关闭',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds:
            'com.taobao.idlefish.maincontainer.activity.MainActivity',
          matches:
            'WebView[text="Rax App"] > [id="root"] >6 View[index=2][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14551046',
        },
      ],
    },
    {
      key: 5,
      name: '分段广告-搜索结果页广告',
      rules: [
        {
          key: 0,
          activityIds:
            'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
          matches: '@[clickable=true] > [desc$="广告"]',
          excludeMatches: '@[clickable=true] > [desc^="反馈成功"]',
          action: 'longClick',
          snapshotUrls: [
            'https://i.gkd.li/i/14723597',
            'https://i.gkd.li/i/14723718', // excludeMatches
          ],
        },
        {
          key: 1,
          preKeys: 0,
          activityIds:
            'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
          matches:
            '[desc^="不喜欢该商品"] > ImageView[index=1][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14723632',
        },
      ],
    },
    {
      key: 6,
      name: '功能类-自动点击[查看原图]',
      rules: [
        {
          activityIds:
            'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
          matches: '[desc="查看原图"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/12b60303-4fb8-4786-b636-4efef10f3d78',
          snapshotUrls: 'https://i.gkd.li/i/15463399',
        },
      ],
    },
<<<<<<< HEAD
    {
      key: 7,
      name: '功能类-闲鱼币',
      desc: '领取奖励-扱骰子',
      activityIds: '.webview.WebHybridActivity',
      rules: [
        {
          key: 1,
          name: '点击x[关闭]-弹窗',
          matches: 'View[childCount=3] > Image[index=2][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/17606064',
        },
        {
          key: 2,
          actionDelay: 5000,
          name: '点击[扱骰子寻宝]',
          matches: '@View[id="mapDiceBtn"] > View[text.length>1]',
          snapshotUrls: 'https://i.gkd.li/i/17606060',
        },
        {
          key: 3,
          actionDelay: 1500,
          name: '点击[赚骰子]-有领取奖励',
          matches:
            'View[text="领"] <2 @View[index=1] +3 View > View[text="赚"]',
          snapshotUrls: 'https://i.gkd.li/i/17634886',
        },
        {
          key: 4,
          actionMaximum: 1,
          name: '签到',
          matches: 'View[text="签到"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/17606057',
        },
        {
          key: 5,
          actionDelay: 300,
          name: '领取任务',
          matches: 'View[index=9 || index=5][text="领取奖励"]',
          snapshotUrls: [
            'https://i.gkd.li/i/17606051',
            'https://i.gkd.li/i/17606057',
          ],
        },
        {
          preKeys: [5],
          key: 6,
          name: '点击x[关闭底部弹窗]',
          matches:
            'View[id="taskWrap"] > @View[index=1] +3 View[index=4] >2 View[index=9 || index=5][text!="领取奖励"]',
          snapshotUrls: 'https://i.gkd.li/i/17606054',
        },
        {
          key: 7,
          name: '点击[全部收下]',
          matches: 'View[text^="全部收下"]',
          snapshotUrls: 'https://i.gkd.li/i/17606050',
        },
      ],
    },
    {
      key: 8,
      name: '功能类-点击背包使用道具',
      desc: '使用道具',
      activityIds: '.webview.WebHybridActivity',
      rules: [
        {
          key: 1,
          actionDelay: 2000,
          name: '点击[背包]',
          matches:
            'View[text!="领"] <2 View +3 View > View[text="赚"] <2 View - View > Image',
          snapshotUrls: [
            'https://i.gkd.li/i/17606060',
            'https://i.gkd.li/i/17606487',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          actionDelay: 200,
          name: '点击[道具]',
          matches:
            'View > View[index=1 || index=0] > View[index=1][text!="加点卡"] + View[index=2][text="使用"]',
          snapshotUrls: 'https://i.gkd.li/i/17606047',
        },
      ],
    },
=======
>>>>>>> bfe3f98795eadca621be6cb0d2359e624d0623d7
  ],
});
