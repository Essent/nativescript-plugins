var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (((f = 1), y && (t = op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)) return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var __values =
  (this && this.__values) ||
  function (o) {
    var s = typeof Symbol === 'function' && Symbol.iterator,
      m = s && o[s],
      i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === 'number')
      return {
        next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
        },
      };
    throw new TypeError(s ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
  };
var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error: error };
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
if (!Object.keys) {
  Object.keys = (function () {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var hasDontEnumBug = !{ toString: null }.propertyIsEnumerable('toString');
    var dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];
    var dontEnumsLength = dontEnums.length;
    return function (obj) {
      if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }
      var result = new Array();
      for (var prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }
      if (hasDontEnumBug) {
        for (var i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  })();
}
if (!Object.entries) {
  Object.entries = function (obj) {
    var ownProps = Object.keys(obj);
    var i = ownProps.length;
    var resArray = new Array(i);
    while (i--) {
      resArray[i] = [ownProps[i], obj[ownProps[i]]];
    }
    return resArray;
  };
}
function getWkWebViewMessageHandler() {
  var _a, _b;
  var w = window;
  if (!((_b = (_a = w === null || w === void 0 ? void 0 : w.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.nsBridge)) {
    console.error("Cannot get the window.webkit.messageHandlers.nsBridge - we can't communicate with native-layer");
    return;
  }
  return w.webkit.messageHandlers.nsBridge;
}
var NSWebViewBridge = (function () {
  function NSWebViewBridge() {
    this.eventListenerMap = {};
  }
  Object.defineProperty(NSWebViewBridge.prototype, 'androidWebViewBridge', {
    get: function () {
      if (typeof androidWebViewBridge !== 'undefined') {
        return androidWebViewBridge;
      }
    },
    enumerable: false,
    configurable: true,
  });
  NSWebViewBridge.prototype.onNativeEvent = function (eventName, data) {
    var e_1, _a;
    var events = this.eventListenerMap[eventName];
    if (!(events === null || events === void 0 ? void 0 : events.length)) {
      return;
    }
    try {
      for (var events_1 = __values(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
        var listener = events_1_1.value;
        var res = listener === null || listener === void 0 ? void 0 : listener(data);
        if (res === false) {
          break;
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  };
  NSWebViewBridge.prototype.emitEventToIOS = function (eventName, data) {
    var messageHandler = getWkWebViewMessageHandler();
    if (messageHandler) {
      messageHandler.postMessage(
        JSON.stringify({
          eventName: eventName,
          data: data,
        })
      );
      return;
    }
    console.error('NSWebViewBridge only supports WKWebView');
  };
  NSWebViewBridge.prototype.emitEventToAndroid = function (eventName, data) {
    var androidWebViewBridge = this.androidWebViewBridge;
    if (!androidWebViewBridge) {
      console.error('Tried to emit to android without the androidWebViewBridge');
      return;
    }
    androidWebViewBridge.emitEvent(eventName, data !== null && data !== void 0 ? data : 'null');
  };
  NSWebViewBridge.prototype.on = function (eventName, callback) {
    if (!callback) {
      return;
    }
    if (!this.eventListenerMap[eventName]) {
      this.eventListenerMap[eventName] = [];
    }
    this.eventListenerMap[eventName].push(callback);
  };
  NSWebViewBridge.prototype.addEventListener = function (eventName, callback) {
    this.on(eventName, callback);
  };
  NSWebViewBridge.prototype.off = function (eventName, callback) {
    if (!eventName) {
      this.eventListenerMap = {};
      return;
    }
    if (!this.eventListenerMap[eventName]) {
      return;
    }
    if (!callback) {
      delete this.eventListenerMap[eventName];
      return;
    }
    this.eventListenerMap[eventName] = this.eventListenerMap[eventName].filter(function (oldCallback) {
      return oldCallback !== callback;
    });
    if (this.eventListenerMap[eventName].length === 0) {
      delete this.eventListenerMap[eventName];
    }
  };
  NSWebViewBridge.prototype.removeEventListener = function (eventName, callback) {
    return this.off(eventName, callback);
  };
  NSWebViewBridge.prototype.emit = function (eventName, data) {
    if (this.androidWebViewBridge) {
      this.emitEventToAndroid(eventName, JSON.stringify(data));
    } else {
      this.emitEventToIOS(eventName, data);
    }
  };
  NSWebViewBridge.prototype.injectJavaScriptFile = function (href) {
    var _this = this;
    var elId = this.elementIdFromHref(href);
    if (document.getElementById(elId)) {
      console.log(''.concat(elId, ' already exists'));
      return Promise.resolve();
    }
    return new Promise(function (resolve, reject) {
      var scriptElement = document.createElement('script');
      scriptElement.async = true;
      scriptElement.setAttribute('id', elId);
      scriptElement.addEventListener('error', function (error) {
        console.error('Failed to load '.concat(href, ' - error: ').concat(error));
        reject(_this.serializeError(error));
        if (scriptElement.parentElement) {
          scriptElement.parentElement.removeChild(scriptElement);
        }
      });
      scriptElement.addEventListener('load', function () {
        console.info('Loaded '.concat(href));
        window.requestAnimationFrame(function () {
          resolve();
        });
        if (scriptElement.parentElement) {
          scriptElement.parentElement.removeChild(scriptElement);
        }
      });
      scriptElement.src = href;
      document.body.appendChild(scriptElement);
    });
  };
  NSWebViewBridge.prototype.injectJavaScript = function (elId, scriptCode) {
    if (document.getElementById(elId)) {
      console.log(''.concat(elId, ' already exists'));
      return Promise.resolve();
    }
    return new Promise(function (resolve, reject) {
      var scriptElement = document.createElement('script');
      scriptElement.setAttribute('id', elId);
      scriptElement.addEventListener('error', function (error) {
        console.error('Failed to inject javascript- error: '.concat(error));
        reject(error);
        if (scriptElement.parentElement) {
          scriptElement.parentElement.removeChild(scriptElement);
        }
      });
      scriptElement.text = scriptCode;
      document.body.appendChild(scriptElement);
      window.requestAnimationFrame(function () {
        return resolve();
      });
    });
  };
  NSWebViewBridge.prototype.injectStyleSheetFile = function (href, insertBefore) {
    var elId = this.elementIdFromHref(href);
    if (document.getElementById(elId)) {
      console.log(''.concat(elId, ' already exists'));
      return Promise.resolve();
    }
    return new Promise(function (resolve, reject) {
      var linkElement = document.createElement('link');
      linkElement.addEventListener('error', function (error) {
        console.error('Failed to load '.concat(href, ' - error: ').concat(error));
        reject(error);
        if (linkElement.parentElement) {
          linkElement.parentElement.removeChild(linkElement);
        }
      });
      linkElement.addEventListener('load', function () {
        console.info('Loaded '.concat(href));
        window.requestAnimationFrame(function () {
          resolve();
        });
      });
      linkElement.setAttribute('id', elId);
      linkElement.setAttribute('rel', 'stylesheet');
      linkElement.setAttribute('type', 'text/css');
      linkElement.setAttribute('href', href);
      if (document.head) {
        if (insertBefore && document.head.childElementCount > 0) {
          document.head.insertBefore(linkElement, document.head.firstElementChild);
        } else {
          document.head.appendChild(linkElement);
        }
      }
    });
  };
  NSWebViewBridge.prototype.injectStyleSheet = function (elId, stylesheet, insertBefore) {
    if (document.getElementById(elId)) {
      console.log(''.concat(elId, ' already exists'));
      return Promise.resolve();
    }
    return new Promise(function (resolve, reject) {
      var _a;
      var styleElement = document.createElement('style');
      styleElement.addEventListener('error', reject);
      styleElement.textContent = stylesheet;
      styleElement.setAttribute('id', elId);
      var parentElement = (_a = document.head) !== null && _a !== void 0 ? _a : document.body;
      if (parentElement) {
        if (insertBefore && parentElement.childElementCount > 0) {
          document.head.insertBefore(styleElement, parentElement.firstElementChild);
        } else {
          document.head.appendChild(styleElement);
        }
      } else {
        reject(new Error("Couldn't find parent element"));
        return;
      }
      resolve();
    });
  };
  NSWebViewBridge.prototype.executePromise = function (promise, eventName) {
    return __awaiter(this, void 0, void 0, function () {
      var data, err_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4, promise];
          case 1:
            data = _a.sent();
            this.emit(eventName, {
              data: data,
            });
            return [3, 3];
          case 2:
            err_1 = _a.sent();
            this.emitError(err_1, eventName);
            return [3, 3];
          case 3:
            return [2];
        }
      });
    });
  };
  NSWebViewBridge.prototype.emitError = function (err, eventName) {
    if (eventName === void 0) {
      eventName = 'web-error';
    }
    if (typeof err === 'object' && (err === null || err === void 0 ? void 0 : err.message)) {
      this.emit(eventName, {
        err: this.serializeError(err),
      });
    } else {
      this.emit(eventName, {
        err: err,
      });
    }
  };
  NSWebViewBridge.prototype.elementIdFromHref = function (href) {
    return href.replace(/^[:]*:\/\//, '').replace(/[^a-z0-9]/g, '');
  };
  NSWebViewBridge.prototype.serializeError = function (error) {
    var e_2, _a;
    var name = error.name,
      message = error.message,
      stack = error.stack;
    var res = {
      name: name,
      message: message,
      stack: stack,
    };
    try {
      for (var _b = __values(Object.entries(error)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var _d = __read(_c.value, 2),
          key = _d[0],
          value = _d[1];
        if (value instanceof HTMLElement) {
          continue;
        }
        if (!(key in res)) {
          res[key] = value;
        }
      }
    } catch (e_2_1) {
      e_2 = { error: e_2_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_2) throw e_2.error;
      }
    }
    return res;
  };
  return NSWebViewBridge;
})();
var nsBridgeReadyEventName = 'ns-bridge-ready';
if (!('nsWebViewBridge' in window)) {
  (function (fn) {
    window['nsWebViewBridge'] = new NSWebViewBridge();
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      setTimeout(fn, 1);
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  })(function () {
    var e_3, _a;
    try {
      for (var _b = __values([nsBridgeReadyEventName, 'ns-brige-ready']), _c = _b.next(); !_c.done; _c = _b.next()) {
        var eventName = _c.value;
        if (typeof CustomEvent !== 'undefined') {
          window.dispatchEvent(
            new CustomEvent(eventName, {
              detail: window['nsWebViewBridge'],
            })
          );
        } else {
          window.dispatchEvent(new Event(eventName));
        }
      }
    } catch (e_3_1) {
      e_3 = { error: e_3_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_3) throw e_3.error;
      }
    }
  });
}
