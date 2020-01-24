'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ljSpeechInfo = undefined;

var _index = require('../callnative/index');

//ljshell语音评测信息类
console.log('ljshell ljSpeechInfo index running');

var ljSpeechInfo = {
  initEvalute: function initEvalute(callback) {
    var params = {};
    (0, _index.callNative)('SpeechInfo', 'initEvalute', params, callback);
  },
  startEvalute: function startEvalute(type, language, text, userdata) {
    var params = {
      type: type,
      language: language,
      text: text,
      userdata: userdata
    };
    (0, _index.callNative)('SpeechInfo', 'startEvalute', params, '');
  },
  endEvalute: function endEvalute() {
    var params = {};
    (0, _index.callNative)('SpeechInfo', 'endEvalute', params, '');
  },
  getTranslationFromWord: function getTranslationFromWord(word, callback) {
    var params = {
      word: word
    };
    (0, _index.callNative)('SpeechInfo', 'getTranslationFromWord', params, callback);
  },
  startRecognise: function startRecognise(realtime, resname, callback) {
    var params = {
      realtime: realtime,
      resname: resname
    };
    (0, _index.callNative)('SpeechInfo', 'startRecognise', params, callback);
  },
  endRecognise: function endRecognise() {
    var params = {};
    (0, _index.callNative)('SpeechInfo', 'endRecognise', params, '');
  }
};
exports.ljSpeechInfo = ljSpeechInfo;