'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ljMathProblem = undefined;

var _index = require('../callnative/index');

//ljshell数学题判题类
console.log('ljshell ljMathProblem index running');

var ljMathProblem = {
  takeMathPhoto: function takeMathPhoto(callback) {
    var params = {};
    (0, _index.callNative)('MathProblem', 'takeMathPhoto', params, callback);
  },
  judgeMathProblem: function judgeMathProblem(image, callback) {
    var params = {
      image: image
    };
    (0, _index.callNative)('MathProblem', 'judgeMathProblem', params, callback);
  }
};
exports.ljMathProblem = ljMathProblem;