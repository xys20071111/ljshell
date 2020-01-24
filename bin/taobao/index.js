'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ljTaobao = undefined;

var _index = require('../callnative/index');

//ljshell淘宝交互导出类
console.log('ljshell taobao index running');

var ljTaobao = {
  login: function login(callback) {
    (0, _index.callNative)('ljTaobao', 'login', {}, callback);
  },
  logout: function logout(callback) {
    var param = {};
    (0, _index.callNative)('ljTaobao', 'logout', param, callback);
  },
  openTrade: function openTrade(url, callback) {
    var param = {
      url: url
    };
    (0, _index.callNative)('ljTaobao', 'openTrade', param, callback);
  }
};
exports.ljTaobao = ljTaobao;