'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ljAudioPlayer = undefined;

var _index = require('../callnative/index');

//ljshell音频播放类
console.log('ljshell ljAudioPlayer index running');

var ljAudioPlayer = {
  open: function open(res, callback) {
    var param = {
      res: res
    };
    (0, _index.callNative)('AudioPlayer', 'open', param, callback);
  },
  close: function close(id) {
    var param = {
      id: id
    };
    (0, _index.callNative)('AudioPlayer', 'close', param, "");
  },
  pause: function pause(id) {
    var param = {
      id: id
    };
    (0, _index.callNative)('AudioPlayer', 'pause', param, "");
  },
  resume: function resume(id) {
    var param = {
      id: id
    };
    (0, _index.callNative)('AudioPlayer', 'resume', param, "");
  },
  duration: function duration(id) {
    var param = {
      id: id
    };
    (0, _index.callNative)('AudioPlayer', 'duration', param, "");
  },
  getPos: function getPos(id) {
    var param = {
      id: id
    };
    (0, _index.callNative)('AudioPlayer', 'getPos', param, "");
  },
  setPos: function setPos(id, pos) {
    var param = {
      id: id,
      pos: pos
    };
    (0, _index.callNative)('AudioPlayer', 'setPos', param, "");
  }
};
exports.ljAudioPlayer = ljAudioPlayer;