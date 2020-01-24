'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ljGifObject = undefined;

var _index = require('../callnative/index');

//ljshellgif文件操作类
console.log('ljshell ljGifObject index running');

var ljGifObject = {
  open: function open(res, callback) {
    var param = {
      res: res
    };
    (0, _index.callNative)('GifObject', 'open', param, callback);
  },
  close: function close(id) {
    var param = {
      id: id
    };
    (0, _index.callNative)('GifObject', 'close', param, "");
  },
  getFrameCount: function getFrameCount(id) {
    var param = {
      id: id
    };
    (0, _index.callNative)('GifObject', 'getFrameCount', param, "");
  },
  getGifDimension: function getGifDimension(id) {
    var param = {
      id: id
    };
    (0, _index.callNative)('GifObject', 'getGifDimension', param, "");
  },
  getGifFrameImage: function getGifFrameImage(id, index) {
    var param = {
      id: id
    };
    (0, _index.callNative)('GifObject', 'getGifFrameImage', param, "");
  }
};
exports.ljGifObject = ljGifObject;