import { defineGkdGlobalGroups } from '@gkd-kit/define';
import * as appList from './globalDefaultApps';

export const OPEN_AD_ORDER = -10; // 开屏广告
export const UPDATE_PROMPT_ORDER = -9; // 更新提示
export const YOUTH_MODE_ORDER = -8; // 青少年模式

//  防止在应用的搜索页面误触
const Prevent_application_miscontact =
  '[text^="温馨" || text*="搜索" || text^="猜你" || text="历史记录" || text$="在搜" && text.length>3 && text.length<6 && visibleToUser=true]';

export default defineGkdGlobalGroups([
  {
    key: 0,
    name: '开屏广告',
    desc: '关闭打开应用时的开屏广告',
    order: OPEN_AD_ORDER,
    fastQuery: true,
    matchTime: 3800,
    actionMaximum: 1,
    resetMatch: 'app',
    actionMaximumKey: 0,
    priorityTime: 3800,
    rules: [
      {
        key: 0,
        // 防止在应用的搜索页面误触
        excludeMatches: `${Prevent_application_miscontact}`,
        action: 'clickCenter',
        anyMatches: [
          '[text*="跳过" || text*="跳過" || text*="skip" || text*="Skip" && text.length<10]',
          '[((text*="跳过" || text*="跳過" || text~="(?is).*skip.*") && text.length<10) || (vid~="(?is).*skip.*" && text!="帮助" && text!="取消") || id$="tt_splash_skip_btn" || ((desc*="跳过" || desc*="跳過" || desc~="(?is).*skip.*") && desc.length<10) && childCount=0]',
        ],
      },
      {
        key: 1, // 字节SDK
        anyMatches: [
          '@View[clickable=true][text=null] + TextView[index=parent.childCount.minus(1)][text=null] <n FrameLayout[childCount>2] >(7,8,9,10) [text*="翻转手机" || text*="前倾手机" || text*="第三方应用" || text*="转动手机" || text*="扭动手机" || text*="点击或上滑" && visibleToUser=true]',
          'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null] + TextView[index=parent.childCount.minus(1) && text=null && visibleToUser=true]',
        ],
      },
      {
        key: 2,
        matches: '[text$="s"] + [text="|"] + ImageView[clickable=true]',
      },
    ],
    apps: [...appList.openAdBlackListAppIDs]
      .map((id) => ({ id, enable: false }))
      .concat(
        [...appList.openAdWhiteListAppIDs].map((id) => ({ id, enable: true })),
      ),
  },
  {
    key: 1,
    name: '更新提示',
    desc: '关闭应用的更新弹窗',
    order: UPDATE_PROMPT_ORDER,
    fastQuery: true,
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    rules: [
      {
        key: 0,
        matches: [
          '[text*="内测" || text*="测试版" || text*="新版" || text*="更新" || text*="升级" || text*="体验" || text*="內測" || text*="測試版" || text*="升級" || text*="體驗" || text*="Update" || text*="Upgrade" || text*="Experience"][text!*="自动" && text!*="自動" && text!*="成功" && text!*="失败" && text!*="失敗" && text!*="检查更新" && text!*="检测更新" && text!*="卸载"][name!$=".CheckBox"][childCount=0][visibleToUser=true]',
          '[text*="更新" || text*="下载" || text*="安装" || text*="升级" || text*="查看" || text*="体验" || text*="确定" || text*="确认"][text.length<6][name!$=".CheckBox"][childCount=0][visibleToUser=true]',
          '[text*="不再提醒" || text$="再说" || text$="拒绝" || text$="再想想" || text*="再看看" || text^="忽略" || text^="暂不" || text^="放弃" || text^="取消" || text$="不要" || text$="再說" || text$="暫不" || text$="拒絕" || text*="稍后" || text^="关闭" || text$="Later" || text^="Ignore" || text^="Not now" || text^="Cancel" || vid="iv_close" || vid="iv_cancel" || vid="img_close" || vid="btn_close" || vid="ivCancel" || vid="ivClose" || vid="imgClose" || vid="iv_negative"][name!$=".CheckBox"][childCount=0][visibleToUser=true]',
        ],
        excludeSnapshotUrls: [
          // 避免误触
          'https://i.gkd.li/i/17710149', // text!*="卸载"
        ],
      },
    ],
    apps: [...appList.updateBlackListAppIDs]
      .map((id) => ({ id, enable: false }))
      .concat(
        [...appList.updateWhiteListAppIDs].map((id) => ({ id, enable: true })),
      ),
  },
  {
    key: 2,
    name: '青少年模式',
    desc: '关闭应用的青少年模式弹窗',
    order: YOUTH_MODE_ORDER,
    fastQuery: true,
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    rules: [
      {
        key: 0,
        matches: [
          '[text*="青少年" || text*="未成年" || text*="儿童"][text*="模式" || text*="守护"][text.length<15][childCount=0][visibleToUser=true]',
          '[text*="知道了" || text*="关闭" || text*="我已知晓" || text*="已满" || text="不再提醒" || vid="iv_close"][text.length<8][childCount=0][visibleToUser=true]',
        ],
        excludeSnapshotUrls: [
          'https://i.gkd.li/i/14917848',
          'https://i.gkd.li/i/17610958',
        ],
      },
    ],
    apps: [...appList.yongBlackListAppIDs]
      .map((id) => ({ id, enable: false }))
      .concat(
        [...appList.yongWhiteListAppIDs].map((id) => ({ id, enable: true })),
      ),
  },
]);
