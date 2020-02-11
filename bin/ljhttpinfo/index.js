'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ljHttpInfo = undefined;

var _index = require('../callnative/index');

//ljshell网络请求信息类
console.log('ljshell ljHttpInfo index running');

var ljHttpInfo = {
  fetch: function fetch(url, param) {
    var params = {
      url: url,
      param: param
    };
    return new Promise(function (resolve, reject) {
      (0, _index.callNative)('HttpInfo', 'fetch', params, function (params) {
        if (params.code == 0) {
          resolve(params);
        } else {
          reject(params);
        }
      });
    });
  },
  query: function query(url, param, callback) {
    var params = {
      url: url,
      param: param
    };
    (0, _index.callNative)('HttpInfo', 'fetch', params, callback);
  },
  upload: function upload(files, callback) {
    (0, _index.callNative)('HttpInfo', 'upload', files, callback);
  },
  download: function download(files, callback) {
    (0, _index.callNative)('HttpInfo', 'download', files, callback);
  },
  downloadvideo: function downloadvideo(url, localfile, param, callback) {
    var params = {
      url: url,
      localfile: localfile,
      param: param
    };
    (0, _index.callNative)('HttpInfo', 'downloadvideo', params, callback);
  },
  getResourceUrl: function getResourceUrl(resname, callback) {
    var params = {
      resname: resname
    };
    (0, _index.callNative)('HttpInfo', 'getResourceUrl', params, callback);
  },
  getResourceLocalUrl: function getResourceLocalUrl(resname, callback, width, height, viewWidth, viewHeight) {
    var params = {
      resname: resname,
      viewWidth: viewWidth,
      viewHeight: viewHeight,
      width: width,
      height: height
    };
    (0, _index.callNative)('HttpInfo', 'getResourceLocalUrl', params, callback);
  },
  getResourceData: function getResourceData(resname, callback) {
    var params = {
      resname: resname
    };
    (0, _index.callNative)('HttpInfo', 'getResourceData', params, callback);
  },
  queryPreviewDoc: function queryPreviewDoc(resname, callback) {
    var params = {
      resname: resname
    };
    (0, _index.callNative)('HttpInfo', 'queryPreviewDoc', params, callback);
  }
};
exports.ljHttpInfo = ljHttpInfo;