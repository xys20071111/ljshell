'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ljUserInfo = undefined;

var _index = require('../callnative/index');

//ljshell用户信息类
console.log('ljshell ljuserinfo index running');

var ljUserInfo = {
  getInfo: function getInfo(userid, callback) {
    var param = {
      userid: userid
    };
    (0, _index.callNative)('UserInfo', 'getUserInfo', param, callback);
  },
  getPrivilegeInfo: function getPrivilegeInfo(appid, callback) {
    var param = {
      appid: appid
    };
    (0, _index.callNative)('UserInfo', 'getPrivilegeInfo', param, callback);
  },
  getPrivilegeDetailInfo: function getPrivilegeDetailInfo(appinfo, callback) {
    (0, _index.callNative)('UserInfo', 'getPrivilegeInfo', appinfo, callback);
  },
  getUserNickname: function getUserNickname(params, callback) {
    (0, _index.callNative)('UserInfo', 'getUserNickname', params, callback);
  },
  getUserLogo: function getUserLogo(params, callback) {
    (0, _index.callNative)('UserInfo', 'getUserLogo', params, callback);
  }
};
exports.ljUserInfo = ljUserInfo;