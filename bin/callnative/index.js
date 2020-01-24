'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.callNative = callNative;
exports.fireEvent = fireEvent;
exports.fireNativeEvent = fireNativeEvent;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
//JS和C++调用交互类
console.log('ljshell callnative index running');

//保持内部调用对象参数
var __ljshellCallInfo = {
    CALLTYPE_UNKNOWN: 0,
    CALLTYPE_METHOD: 1,
    CALLTYPE_CALLBACK: 2,
    CALLTYPE_EVENT: 3,
    callbackId: Math.floor(Math.random() * 1000000),
    callbacks: {},
    eventListener: {}
    //eventListener: (event, args) => {},


    //调用原生方法
};var __invokeNative__ = function __invokeNative__(args) {
    var result = { code: 0, msg: 'Success' };
    try {
        // If webkit contains method 'postMessage', then consider current platform as Windows/Android
        if (window.webkit) {
            if (Object.prototype.toString.call(window.webkit) === "[object Object]" && window.webkit.postMessage && typeof window.webkit.postMessage === "function") {
                window.webkit.postMessage(JSON.stringify(args));
                return result;
            } else {
                // iOS platform
                if (window.webkit.messageHandlers && window.webkit.messageHandlers.NativeEvent) {
                    window.webkit.messageHandlers.NativeEvent.postMessage(JSON.stringify(args));
                    return result;
                }
            }
        }
    } catch (error) {
        console.log(error);
        result.code = 1001;
        result.msg = error;
        return result;
    }

    result.code = 1000;
    result.msg = 'Unsupported action without ljshell framework';
    if (window.__ljshell_log_enable) {
        console.log('该功能仅在ljshell应用框架内才能执行！！');
    }
    return result;
};

//调用JS模块方法
var __invokeJSMothod__ = function __invokeJSMothod__(module, method, params, callback) {}
// let app = require('../../' + module);
// if (app && typeof app.method === "function") {
//     let res = app.method(params);
//     if (params.callback && typeof params.callback === 'string') {
//         res = res || {code: 1, msg: 'error'};
//         callNative('', '', res, params.callback);
//     }
// }


//原生调用JS
;window.__onCallJS__ = function (args) {
    if (window.__ljshell_log_enable) {
        console.log("__onCallJS__", args);
    }
    var params;
    if (Object.prototype.toString.call(args) === "[object Object]") {
        params = args;
    } else {
        params = JSON.parse(args);
    }

    switch (params.type) {
        case __ljshellCallInfo.CALLTYPE_METHOD:
            __invokeJSMothod__(params.module, params.method, params.params, params.callback);
            break;
        case __ljshellCallInfo.CALLTYPE_CALLBACK:
            var callback = __ljshellCallInfo.callbacks[params.callback];
            if (callback && typeof callback === "function") {
                var res = callback.apply(null, [params.params]);
                if (res && Object.prototype.toString.call(res) === "[object Object]" && res.keepcallback == 1) {
                    ;
                } else {
                    delete __ljshellCallInfo.callbacks[params.callback];
                }
            }
            break;
        case __ljshellCallInfo.CALLTYPE_EVENT:
            fireEvent(params.method, params.params);
            //__ljshellCallInfo.eventListener(params.method, params.params);
            break;
    }
};

function callNative(module, method, args, callback) {
    if (window.__ljshell_log_enable) {
        console.log("__callNative__", module, method, args, callback);
    }
    var params = {};
    var type = __ljshellCallInfo.CALLTYPE_UNKNOWN;
    var cbid = "";
    if (callback && typeof callback === "string") {
        type = __ljshellCallInfo.CALLTYPE_CALLBACK;
        cbid = callback;
    } else {
        if (callback && typeof callback === "function") {
            cbid = module + __ljshellCallInfo.callbackId++;
            __ljshellCallInfo.callbacks[cbid] = callback;
        }
        type = __ljshellCallInfo.CALLTYPE_METHOD;
    }

    params.type = type;
    params.callback = cbid;
    if (type == __ljshellCallInfo.CALLTYPE_METHOD) {
        params.module = module;
        params.method = method;
    }
    params.params = args;

    if (type == __ljshellCallInfo.CALLTYPE_UNKNOWN) {
        if (cbid) {
            delete __ljshellCallInfo.callbacks[cbid];
        }
        return { code: 1, msg: 'Invalid arguments' };
    }
    var res = __invokeNative__(params);
    if (res.code !== 0) {
        //调用出错了
        // if (cbid){
        //     delete __ljshellCallInfo.callbacks[cbid];
        // }
        var _args = {
            type: __ljshellCallInfo.CALLTYPE_CALLBACK,
            callback: cbid, //callback,
            params: res
        };
        window.__onCallJS__(_args);
    }
}

function fireEvent(event, params) {
    if (__ljshellCallInfo.eventListener[event]) {
        var bRes = false;
        for (var index = 0; index < __ljshellCallInfo.eventListener[event].length;) {
            bRes = __ljshellCallInfo.eventListener[event][index](event, params);
            if (__ljshellCallInfo.eventListener[event][index].once) {
                __ljshellCallInfo.eventListener[event].splice(index, 1);
            } else {
                index++;
            }
            if (bRes) {
                //如果已经处理了，则返回
                break;
            }
        }
    }
}

function fireNativeEvent(event, eventParams, callback) {
    if (window.__ljshell_log_enable) {
        console.log("fireNativeEvent", event, params, callback);
    }
    var params = {};
    var cbid = '';
    params.type = __ljshellCallInfo.CALLTYPE_EVENT;
    if (callback && typeof callback === "function") {
        cbid = module + __ljshellCallInfo.callbackId++;
        __ljshellCallInfo.callbacks[cbid] = callback;
    }
    params.callback = cbid;
    var callParam = {
        event: event,
        param: eventParams
    };
    params.params = callParam;
    params.module = '';
    params.method = '_custom_native_event_';
    var res = __invokeNative__(params);
    if (res.code !== 0) {
        //调用出错了
        // if (cbid){
        //     delete __ljshellCallInfo.callbacks[cbid];
        // }
        var args = {
            type: __ljshellCallInfo.CALLTYPE_CALLBACK,
            callback: cbid, //callback,
            params: res
        };
        window.__onCallJS__(args);
    }
}

function addEventListener(event, listener, once) {
    if (!__ljshellCallInfo.eventListener[event]) {
        __ljshellCallInfo.eventListener[event] = [];
    }
    if (__ljshellCallInfo.eventListener[event]) {
        for (var index = 0; index < __ljshellCallInfo.eventListener[event].length; index++) {
            if (listener === __ljshellCallInfo.eventListener[event][index]) {
                //已经存在该回调
                return;
            }
        }
    }
    listener.once = once;
    __ljshellCallInfo.eventListener[event].push(listener);
}

function removeEventListener(event, listener) {
    if (__ljshellCallInfo.eventListener[event]) {
        for (var index = 0; index < __ljshellCallInfo.eventListener[event].length; index++) {
            if (listener === __ljshellCallInfo.eventListener[event][index]) {
                __ljshellCallInfo.eventListener[event].splice(index, 1);
                break;
            }
        }
    }
}