'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ljDepartmentInfo = undefined;

var _index = require('../callnative/index');

//ljshell组织架构类
console.log('ljshell ljDepartmentInfo index running');

var ljDepartmentInfo = {
  getDepartmentInfo: function getDepartmentInfo(id, callback) {
    var param = {
      id: id
    };
    (0, _index.callNative)('DepartmentInfo', 'getDepartmentInfo', param, callback);
  },
  getDepartRoleList: function getDepartRoleList(callback) {
    (0, _index.callNative)('DepartmentInfo', 'getDepartRoleList', {}, callback);
  }
};
exports.ljDepartmentInfo = ljDepartmentInfo;