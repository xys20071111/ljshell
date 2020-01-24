'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ljtest = undefined;

var _index = require('../callnative/index');

var ljtest = {
  payOrder: function payOrder(orderno, callback) {
    var param = {
      orderno: orderno
    };
    (0, _index.callNative)('theAppObject', 'payOrder', param, callback);
  }
}; //ljshell主对象导出类
//console.log('ljshell ljappobject index running');

exports.ljtest = ljtest;