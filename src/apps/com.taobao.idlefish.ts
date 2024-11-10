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
      name: '分段广告-搜索页面广告',
      activityIds:
        'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
      rules: [
        {
          key: 0,
          actionDelay: 900,
          action: 'longClick',
          matches: '@View[clickable=true] > [clickable=true][desc$="广告"]',
          excludeMatches: '@View[clickable=true] > [desc^="反馈成功"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14723597',
            'https://i.gkd.li/i/14723718', // excludeMatches
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches:
            'View[desc.length=25][desc^="不喜欢该商品"] > ImageView[index=1][visibleToUser=true]',
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
    {
      key: 7,
      name: '功能类-领取奖励',
      activityIds: '.webview.WebHybridActivity',
      rules: [
        {
          key: 1,
          actionDelay: 2000,
          name: '点击[赚骰子]-有领取奖励',
          matches:
            'View[text="领"] <2 @View[index=1] +3 View > View[text="赚"]',
          snapshotUrls: 'https://i.gkd.li/i/17634886',
        },
        {
          key: 2,
          actionMaximum: 1,
          name: '签到',
          matches: 'View[text="签到"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/17606057',
        },
        {
          key: 3,
          actionDelay: 800,
          name: '领取任务',
          matches: '[id="taskWrap"] >3 [text="领取奖励"]',
          snapshotUrls: [
            'https://i.gkd.li/i/17606051',
            'https://i.gkd.li/i/17606057',
          ],
        },
        {
          preKeys: [3],
          key: 4,
          actionDelay: 500,
          name: '点击x[关闭底部弹窗]',
          matches:
            'View[id="taskWrap"] > @View[index=1] +3 View >2 View[text!="领取奖励"]',
          snapshotUrls: 'https://i.gkd.li/i/17606054',
        },
      ],
    },
    {
      key: 8,
      name: '功能类-背包使用道具',
      activityIds: '.webview.WebHybridActivity',
      rules: [
        {
          key: 1,
          actionDelay: 3000,
          name: '点击[背包]',
          matches:
            'View[childCount=5] > View[index=1][childCount=1] +3 View > View[text="赚"] <2 View - View > Image',
          snapshotUrls: [
            'https://i.gkd.li/i/17606060',
            'https://i.gkd.li/i/17606487',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          actionDelay: 300,
          name: '使用[道具]',
          matches:
            'View[clickable=true] >4 View[index=1][text!="加点卡"] + [text="使用"]',
          snapshotUrls: 'https://i.gkd.li/i/17606047',
        },
      ],
    },
    {
      key: 9,
      name: '功能类-扱骰子',
      activityIds: '.webview.WebHybridActivity',
      rules: [
        {
          key: 1,
          name: '点击x[关闭]-弹窗',
          matches:
            'View[childCount=3][clickable=true] > Image + View + Image[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/17606064',
        },
        {
          key: 2,
          actionDelay: 2000,
          name: '点击[扱骰子]',
          matches: '@View[id="mapDiceBtn"] > View[text!="赚"]',
          snapshotUrls: 'https://i.gkd.li/i/17606060',
        },
        {
          key: 3,
          name: '点击[全部收下]',
          matches: 'View[text^="全部收下"]',
          snapshotUrls: 'https://i.gkd.li/i/17606050',
        },
      ],
    },
    {
      key: 10,
      name: '功能类-删除首页[关注上新/俱乐部/闲鱼精选]',
      activityIds: '.maincontainer.activity.MainActivity',
      rules: [
        {
          key: 0,
          actionDelay: 1200,
          matches:
            'ScrollView > @* > [desc="关注上新" || desc$="俱乐部" || desc="闲鱼精选"]',
          action: 'longClick',
          snapshotUrls: 'https://i.gkd.li/i/17690274',
          exampleUrls: 'https://e.gkd.li/da3b020c-b649-434f-a984-35b9e025023b',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[vid="id_pager"] >9 [desc="删除"]',
          snapshotUrls: 'https://i.gkd.li/i/17690302',
        },
        {
          preKeys: [1],
          key: 2,
          matches: '[desc^="确认删除"] > [desc="取消"] + [desc="确定"]',
          snapshotUrls: 'https://i.gkd.li/i/17690308',
        },
      ],
    },
  ],
});
