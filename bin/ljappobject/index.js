'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ljAppObject = undefined;

var _index = require('../callnative/index');

//ljshell主对象导出类
console.log('ljshell ljappobject index running');

var ljAppObject = {
  payOrder: function payOrder(orderno, callback, force) {
    var param = {
      orderno: orderno,
      force: force
    };
    (0, _index.callNative)('theAppObject', 'payOrder', param, callback);
  },
  closeWebView: function closeWebView(res) {
    var param = {
      res: res
    };
    (0, _index.callNative)('theAppObject', 'closeWebView', param, '');
  },
  changeToApp: function changeToApp(strUrl, callback) {
    var param = {
      url: strUrl
    };
    (0, _index.callNative)('theAppObject', 'changeToApp', param, callback);
  },
  changeToAppAndClose: function changeToAppAndClose(strUrl, bClose, bWait) {
    var param = {
      url: strUrl,
      bClose: bClose === undefined ? true : bClose,
      bWait: bWait ? true : false
    };
    (0, _index.callNative)('theAppObject', 'changeToAppAndClose', param, "");
  },
  openScan: function openScan(callback) {
    var param = {};
    (0, _index.callNative)('theAppObject', 'openScan', param, callback);
  },
  bindReturnKey: function bindReturnKey(callback) {
    var param = {};
    (0, _index.callNative)('theAppObject', 'bindReturnKey', param, callback);
  },
  unbindReturnKey: function unbindReturnKey() {
    (0, _index.callNative)('theAppObject', 'unbindReturnKey');
  },
  callCustomerCenter: function callCustomerCenter() {
    (0, _index.callNative)('theAppObject', 'callCustomerCenter');
  },
  openUrl: function openUrl(url, callback) {
    var param = {
      url: url
    };
    (0, _index.callNative)('theAppObject', 'openurl', param, callback);
  },
  filterUrl: function filterUrl(urlRegex, openType, callback) {
    var param = {
      urlRegex: urlRegex,
      openType: openType
    };
    (0, _index.callNative)('theAppObject', 'addFilterUrl', param, callback);
  },
  pickFile: function pickFile(type, maxCount, filter, ext, callback, param) {
    var strParam = "";
    if (param) {
      strParam = JSON.stringify(param);
    }
    var paramJson = {
      type: type,
      maxCount: maxCount,
      filter: filter,
      ext: ext,
      param: strParam
    };
    (0, _index.callNative)('theAppObject', 'pickfile', paramJson, callback);
  },
  copyResToPath: function copyResToPath(res, path, rename, callback) {
    var param = {
      res: res,
      path: path,
      rename: rename
    };
    (0, _index.callNative)('theAppObject', 'copyResToPath', param, callback);
  },
  copyDataToPath: function copyDataToPath(data, path, name, callback) {
    var param = {
      data: data,
      path: path,
      name: name
    };
    (0, _index.callNative)('theAppObject', 'copyDataToPath', param, callback);
  },
  getLocalUrl: function getLocalUrl(files, callback) {
    var param = {
      files: files
    };
    (0, _index.callNative)('theAppObject', 'getLocalUrl', param, callback);
  },
  getTikuOutline: function getTikuOutline(filter, callback) {
    (0, _index.callNative)('theAppObject', 'getTikuOutline', filter, callback);
  },
  getTikuKnowledgeList: function getTikuKnowledgeList(filter, callback) {
    (0, _index.callNative)('theAppObject', 'getTikuKnowledgeList', filter, callback);
  },
  getTikuKnowledgeListFromChapter: function getTikuKnowledgeListFromChapter(filter, callback) {
    (0, _index.callNative)('theAppObject', 'getTikuKnowledgeListFromChapter', filter, callback);
  },
  saveObjectToLocalStorage: function saveObjectToLocalStorage(appid, key, object, callback) {
    var param = {
      appid: appid,
      key: key,
      object: object
    };
    (0, _index.callNative)('theAppObject', 'saveObjectToLocalStorage', param, callback);
  },
  getObjectFromLocalStorage: function getObjectFromLocalStorage(appid, key, callback) {
    var param = {
      appid: appid,
      key: key
    };
    (0, _index.callNative)('theAppObject', 'getObjectFromLocalStorage', param, callback);
  },
  getClassMembers: function getClassMembers(classid, bStudent, callback) {
    var param = {
      classid: classid,
      student: bStudent
    };
    (0, _index.callNative)('theAppObject', 'getClassMembers', param, callback);
  },
  setValueFromKey: function setValueFromKey(key, value, callback) {
    var param = {
      key: key,
      value: value
    };
    (0, _index.callNative)('theAppObject', 'setValueFromKey', param, callback);
  },
  getValueFromKey: function getValueFromKey(key, callback) {
    var param = {
      key: key
    };
    (0, _index.callNative)('theAppObject', 'getValueFromKey', param, callback);
  },
  doShare: function doShare(app, appFlag, type, url, title, desc, image, callback) {
    var param = {
      app: app,
      appFlag: appFlag,
      type: type,
      url: url,
      title: title,
      desc: desc,
      image: image
    };
    (0, _index.callNative)('theAppObject', 'doShare', param, callback);
  },
  changeViewSize: function changeViewSize(fullscreen, width, height, callback) {
    var param = {
      fullscreen: fullscreen,
      width: width,
      height: height
    };
    (0, _index.callNative)('theAppObject', 'changeViewSize', param, callback);
  },
  recoverViewSize: function recoverViewSize(callback) {
    var param = {};
    (0, _index.callNative)('theAppObject', 'recoverViewSize', param, callback);
  },
  openDoc: function openDoc(resName, callback) {
    var param = {
      resName: resName
    };
    (0, _index.callNative)('theAppObject', 'openDoc', param, callback);
  },
  resInLocal: function resInLocal(resName, callback) {
    var param = {
      resName: resName
    };
    (0, _index.callNative)('theAppObject', 'resInLocal', param, callback);
  },
  openurl: function openurl(url, webinview, callback) {
    var param = {
      url: url,
      webinview: webinview
    };
    (0, _index.callNative)('theAppObject', 'openurl', param, callback);
  },
  getNavigatorProvider: function getNavigatorProvider(callback) {
    var param = {};
    (0, _index.callNative)('theAppObject', 'getNavigatorProvider', param, callback);
  },
  NavigatorToPos: function NavigatorToPos(provider, lng, lat, callback) {
    var param = {
      provider: provider,
      lng: lng,
      lat: lat
    };
    (0, _index.callNative)('theAppObject', 'NavigatorToPos', param, callback);
  },
  getCurrentGeoPosition: function getCurrentGeoPosition(callback) {
    var param = {};
    (0, _index.callNative)('theAppObject', 'getCurrentGeoPosition', param, callback);
  },
  getAppStatus: function getAppStatus(appid, callback) {
    var param = {
      appid: appid
    };
    (0, _index.callNative)('theAppObject', 'getAppStatus', param, callback);
  },
  getAppConfigInfo: function getAppConfigInfo(appid, callback) {
    var param = {
      appid: appid
    };
    (0, _index.callNative)('theAppObject', 'getAppConfigInfo', param, callback);
  },
  backToLogin: function backToLogin(loginname, authcode, password) {
    var param = {
      loginname: loginname,
      authcode: authcode,
      password: password
    };
    (0, _index.callNative)('theAppObject', 'backToLogin', param);
  },
  getMySchoolInfo: function getMySchoolInfo(callback) {
    (0, _index.callNative)('theAppObject', 'getMySchoolInfo', {}, callback);
  },
  getVideoStreamsInfo: function getVideoStreamsInfo(video, callback) {
    (0, _index.callNative)('theAppObject', 'getVideoStreamsInfo', { video: video }, callback);
  },
  synthesizeAudio: function synthesizeAudio(audioList, totalTime, video, background, callback) {
    (0, _index.callNative)('theAppObject', 'synthesizeAudio', { audioList: audioList, totalTime: totalTime, video: video, background: background }, callback);
  },
  getAudioDuration: function getAudioDuration(audio, callback) {
    (0, _index.callNative)('theAppObject', 'getAudioDuration', { audio: audio }, callback);
  },
  getStatusColorInfo: function getStatusColorInfo(callback) {
    (0, _index.callNative)('theAppObject', 'getStatusColorInfo', {}, callback);
  },
  SetStatusColorInfo: function SetStatusColorInfo(info, callback) {
    (0, _index.callNative)('theAppObject', 'SetStatusColorInfo', info, callback);
  },
  EnterVideoChatRoom: function EnterVideoChatRoom(paramObj, callback) {
    (0, _index.callNative)('theAppObject', 'EnterVideoChatRoom', paramObj, callback);
  },
  LeaveVideoChatRoom: function LeaveVideoChatRoom(roomid, paramObj, callback) {
    paramObj.roomid = roomid;
    (0, _index.callNative)('theAppObject', 'LeaveVideoChatRoom', paramObj, callback);
  },
  banpaiEnterLjlx: function banpaiEnterLjlx(userid) {
    var param = {
      userid: userid
    };
    (0, _index.callNative)('theAppObject', 'banpaiEnterLjlx', param);
  },
  banpaiEnterDesktop: function banpaiEnterDesktop() {
    (0, _index.callNative)('theAppObject', 'banpaiEnterDesktop', {});
  },
  shutdownBanpai: function shutdownBanpai(reboot) {
    var param = {
      reboot: reboot
    };
    (0, _index.callNative)('theAppObject', 'shutdownBanpai', param);
  },
  enableScreenSaver: function enableScreenSaver(bEnable) {
    var param = {
      enable: bEnable
    };
    (0, _index.callNative)('theAppObject', 'enableScreenSaver', param);
  },
  openFaceRecognise: function openFaceRecognise(param) {
    (0, _index.callNative)('theAppObject', 'openFaceRecognise', param);
  },
  closeFaceRecognise: function closeFaceRecognise() {
    (0, _index.callNative)('theAppObject', 'closeFaceRecognise', {});
  },
  playBeeSound: function playBeeSound() {
    (0, _index.callNative)('theAppObject', 'playBeeSound', {});
  },
  getBanpaiAudioVolumn: function getBanpaiAudioVolumn(callback) {
    (0, _index.callNative)('theAppObject', 'getBanpaiAudioVolumn', {}, callback);
  },
  setBanpaiAudioVolumn: function setBanpaiAudioVolumn(volumn, callback) {
    var param = {
      volumn: volumn
    };
    (0, _index.callNative)('theAppObject', 'setBanpaiAudioVolumn', param, callback);
  },
  getWifiInfo: function getWifiInfo(callback) {
    (0, _index.callNative)('theAppObject', 'getWifiInfo', {}, callback);
  },
  banpaiQueryAttendance: function banpaiQueryAttendance(cardID, image, type) {
    var param = {
      cardID: cardID,
      image: image,
      type: type
    };
    (0, _index.callNative)('theAppObject', 'banpaiQueryAttendance', param);
  },
  copyToClipboard: function copyToClipboard(text, callback) {
    var param = {
      text: text
    };
    (0, _index.callNative)('theAppObject', 'copyToClipboard', param, callback);
  },
  copyFromClipboard: function copyFromClipboard(callback) {
    (0, _index.callNative)('theAppObject', 'copyFromClipboard', {}, callback);
  },
  addWatchProgress: function addWatchProgress(resname, progress, watchCnt, forceUpdate, curSecond, callback) {
    (0, _index.callNative)('theAppObject', 'addWatchProgress', { resname: resname, progress: progress, watchCnt: watchCnt, forceUpdate: forceUpdate, curSecond: curSecond }, callback);
  }
};
exports.ljAppObject = ljAppObject;