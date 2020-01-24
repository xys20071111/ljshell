'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('./ljappobject/index');

Object.defineProperty(exports, 'ljAppObject', {
  enumerable: true,
  get: function get() {
    return _index.ljAppObject;
  }
});

var _index2 = require('./ljuserinfo/index');

Object.defineProperty(exports, 'ljUserInfo', {
  enumerable: true,
  get: function get() {
    return _index2.ljUserInfo;
  }
});

var _index3 = require('./ljhttpinfo/index');

Object.defineProperty(exports, 'ljHttpInfo', {
  enumerable: true,
  get: function get() {
    return _index3.ljHttpInfo;
  }
});

var _index4 = require('./ljSpeechInfo/index');

Object.defineProperty(exports, 'ljSpeechInfo', {
  enumerable: true,
  get: function get() {
    return _index4.ljSpeechInfo;
  }
});

var _index5 = require('./ljAudioRecord/index');

Object.defineProperty(exports, 'ljAudioRecord', {
  enumerable: true,
  get: function get() {
    return _index5.ljAudioRecord;
  }
});

var _index6 = require('./ljAudioPlayer/index');

Object.defineProperty(exports, 'ljAudioPlayer', {
  enumerable: true,
  get: function get() {
    return _index6.ljAudioPlayer;
  }
});

var _index7 = require('./ljGifObject/index');

Object.defineProperty(exports, 'ljGifObject', {
  enumerable: true,
  get: function get() {
    return _index7.ljGifObject;
  }
});

var _index8 = require('./ljMathProblem/index');

Object.defineProperty(exports, 'ljMathProblem', {
  enumerable: true,
  get: function get() {
    return _index8.ljMathProblem;
  }
});

var _index9 = require('./ljDepartmentInfo/index');

Object.defineProperty(exports, 'ljDepartmentInfo', {
  enumerable: true,
  get: function get() {
    return _index9.ljDepartmentInfo;
  }
});

var _index10 = require('./taobao/index');

Object.defineProperty(exports, 'ljTaobao', {
  enumerable: true,
  get: function get() {
    return _index10.ljTaobao;
  }
});

var _callnative = require('./callnative');

Object.defineProperty(exports, 'fireEvent', {
  enumerable: true,
  get: function get() {
    return _callnative.fireEvent;
  }
});
Object.defineProperty(exports, 'fireNativeEvent', {
  enumerable: true,
  get: function get() {
    return _callnative.fireNativeEvent;
  }
});
Object.defineProperty(exports, 'addEventListener', {
  enumerable: true,
  get: function get() {
    return _callnative.addEventListener;
  }
});
Object.defineProperty(exports, 'removeEventListener', {
  enumerable: true,
  get: function get() {
    return _callnative.removeEventListener;
  }
});

//导出外部可见的所有对象类
console.log("components is loading...");