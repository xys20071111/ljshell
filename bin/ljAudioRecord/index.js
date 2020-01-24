'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ljAudioRecord = undefined;

var _index = require('../callnative/index');

//ljshell语音录音类
console.log('ljshell ljAudioRecord index running');

var ljAudioRecord = {
  startRecord: function startRecord(callback) {
    var param = {};
    (0, _index.callNative)('AudioRecord', 'startAudioRecord', param, callback);
  },
  pauseRecord: function pauseRecord() {
    var param = {};
    (0, _index.callNative)('AudioRecord', 'pauseAudioRecord', param, "");
  },
  resumeRecord: function resumeRecord() {
    var param = {};
    (0, _index.callNative)('AudioRecord', 'resumeAudioRecord', param, "");
  },
  stopRecord: function stopRecord() {
    var param = {};
    (0, _index.callNative)('AudioRecord', 'stopAudioRecord', param, "");
  },
  cancelRecord: function cancelRecord() {
    var param = {};
    (0, _index.callNative)('AudioRecord', 'cancelRecord', param, "");
  },
  resetRecord: function resetRecord() {
    var param = {};
    (0, _index.callNative)('AudioRecord', 'resetAudioRecord', param, "");
  },
  setAudioPosition: function setAudioPosition(fSec) {
    var param = {
      "position": fSec
    };
    (0, _index.callNative)('AudioRecord', 'setAudioPosition', param, "");
  }

};
exports.ljAudioRecord = ljAudioRecord;