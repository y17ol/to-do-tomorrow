// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scripts/htmlBlocks/bigBlocks.js":[function(require,module,exports) {
function returnMenu() {
  var location = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var accessRights = Number(getCookie('accessRights'));
  return "\n        <div class=\"menu\">\n            <div class=\"container\">\n                <div class=\"row d-flex justify-content-between align-items-center align-self-stretch\">\n\n                    <div class=\"col-2 menu__item d-flex justify-content-end\">\n                        <a href=\"" + location + "index.html\">\n                            <div class=\"menu__item__logo d-flex\">\n                                <i class=\"fa fa-calendar-check-o\"></i>\n                                <p>todotomorrow</p>\n                            </div>\n                        </a>\n                    </div>\n\n                    " + (accessRights == 2 ? "\n                                <style>\n                                    .menu__item {\n                                        padding-bottom: 15px;\n                                    }\n                                </style>\n\n                                <div class=\"col-2 menu__item d-flex\">\n                                    <div class=\"menu__item dropdown\">\n                                        <div class=\"btn dropdown-toggle\" data-toggle=\"dropdown\">\n                                            <a>\u041D\u043E\u0432\u043E\u0441\u0442\u043D\u0430\u044F \u043B\u0435\u043D\u0442\u0430</a>\n                                        </div>\n                                        <div class=\"dropdown-menu\">\n                                            <a class=\"dropdown-item\" href=\"" + location + "pages/news.html\">\u041F\u0435\u0440\u0435\u0439\u0442\u0438</a>\n                                            <a class=\"dropdown-item\" href=\"" + location + "pages/add/add-news.html\">\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C \u043D\u043E\u0432\u043E\u0441\u0442\u044C</a>\n                                        </div>\n                                    </div>\n                                </div>\n            \n                                <div class=\"col-2 menu__item d-flex\">\n                                    <div class=\"menu__item dropdown\">\n                                        <div class=\"btn dropdown-toggle\" data-toggle=\"dropdown\">\n                                            <a>\u041C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F</a>\n                                        </div>\n                                        <div class=\"dropdown-menu\">\n                                            <a class=\"dropdown-item\" href=\"" + location + "pages/events/events.html\">\u041F\u0435\u0440\u0435\u0439\u0442\u0438</a>\n                                            <a class=\"dropdown-item\" href=\"" + location + "pages/add/add-event.html\">\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0435</a>\n                                        </div>\n                                    </div>    \n                                </div>\n\n                                <div class=\"col-2 menu__item d-flex\">\n                                    <div class=\"menu__item dropdown\">\n                                        <div class=\"btn dropdown-toggle\" data-toggle=\"dropdown\">\n                                            <a>\u0412\u0438\u0434\u0435\u043E\u0440\u043E\u043B\u0438\u043A\u0438</a>\n                                        </div>\n                                        <div class=\"dropdown-menu\">\n                                            <a class=\"dropdown-item\" href=\"" + location + "pages/video.html\">\u041F\u0435\u0440\u0435\u0439\u0442\u0438</a>\n                                            <a class=\"dropdown-item\" href=\"" + location + "pages/add/add-video.html\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u0438\u0434\u0435\u043E\u0440\u043E\u043B\u0438\u043A</a>\n                                        </div>\n                                    </div>    \n                                </div>\n\n                                <div class=\"col-2 menu__item d-flex\">\n                                    <div class=\"menu__item dropdown\">\n                                        <div class=\"btn dropdown-toggle\" data-toggle=\"dropdown\">\n                                            <a>\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430</a>\n                                        </div>\n                                        <div class=\"dropdown-menu\">\n                                            <a class=\"dropdown-item\" href=\"" + location + "pages/analytics.html\">\u041F\u0435\u0440\u0435\u0439\u0442\u0438</a>\n                                            <a class=\"dropdown-item\" href=\"" + location + "pages/add/add-analytics.html\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435</a>\n                                        </div>\n                                    </div>    \n                                </div>\n                                " : "<div class=\"col-2 menu__item d-flex\">\n                                    <a href=\"" + location + "pages/news.html\">\u041D\u043E\u0432\u043E\u0441\u0442\u043D\u0430\u044F \u043B\u0435\u043D\u0442\u0430</a>\n                                </div>\n            \n                                <div class=\"col-2 menu__item d-flex\">\n                                    <a href=\"" + location + "pages/events/events.html\">\u041C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F</a>\n                                </div>\n            \n                                <div class=\"col-2 menu__item d-flex\">\n                                    <a href=\"" + location + "pages/video.html\">\u0412\u0438\u0434\u0435\u043E\u0440\u043E\u043B\u0438\u043A\u0438</a>\n                                </div>\n            \n                                <div class=\"col-2 menu__item d-flex\">\n                                    <a href=\"" + location + "pages/analytics.html\">\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430</a>\n                                </div>") + "\n\n                    \n\n                    <div class=\"col-1 menu__item d-flex justify-content-end\">\n                        <div class=\"menu__item__user dropdown\">\n                            <div class=\"btn dropdown-toggle\" data-toggle=\"dropdown\">\n                                <i class=\"fa fa-user\"></i>\n                            </div>\n                            <div class=\"dropdown-menu\">\n                            " + (accessRights == 0 ? "<a class=\"dropdown-item\" href=\"" + location + "pages/user/login.html\">\u0412\u043E\u0439\u0442\u0438 / \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F</a>" : accessRights == 1 ? "<a class=\"dropdown-item\" href=\"" + location + "pages/user/account.html\">\u041C\u043E\u044F \u0443\u0447\u0435\u0442\u043D\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C</a>\n                                            <a class=\"dropdown-item\" href=\"" + location + " #################################################################### \">\u0412\u044B\u0439\u0442\u0438</a>" : accessRights == 2 ? "<a class=\"dropdown-item\" href=\"" + location + "pages/user/account.html\">\u041C\u043E\u044F \u0443\u0447\u0435\u0442\u043D\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C</a>\n                                                <a class=\"dropdown-item\" href=\"" + location + " ######################################################## \">\u0412\u044B\u0439\u0442\u0438</a>" : alert('Ошибка в определении прав доступа')) + "\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    ";
}

function returnFooter() {
  var location = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return "\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-6 footer__contacts\">\n                    <h3 d-flex justify-content-around>\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F</h3>\n                    <p>\u0427\u0442\u043E\u0431\u044B \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u044C \u043D\u0430\u0448 \u0433\u043E\u043B\u043E\u0432\u043D\u043E\u0439 \u043E\u0444\u0438\u0441 \u0432\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435\u0441\u044C \u0430\u0434\u0440\u0435\u0441\u043E\u043C</p>\n                    <p><span class=\"bold\">\u0410\u0434\u0440\u0435\u0441:</span> &nbsp \u0420\u043E\u0441\u0442\u043E\u0432-\u043D\u0430-\u0414\u043E\u043D\u0443, \u0443\u043B.\u041F\u0443\u0448\u043A\u0438\u043D\u0430, \u0434.17</p>\n                    <p>+7 (565) 265-93-25 &nbsp &nbsp &nbsp &nbsp +7 (965) 789-58-74</p>\n                    <a href=\"" + location + "index.html\"><p>www.gorevents.com</p></a>\n                </div>\n                <div class=\"col-6 footer__info\">\n                    <h3>\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F</h3>\n                    <a href=\"" + location + "index.html\"><p>\u0413\u043B\u0430\u0432\u043D\u0430\u044F</p></a>\n                    <a href=\"" + location + "pages/events/events.html\"><p>\u041C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F</p></a>\n                    <a href=\"" + location + "pages/news.html\"><p>\u041D\u043E\u0432\u043E\u0441\u0442\u043D\u0430\u044F \u043B\u0435\u043D\u0442\u0430</p></a>\n                    <a href=\"" + location + "pages/video.html\"><p>\u0412\u0438\u0434\u0435\u043E\u0440\u043E\u043B\u0438\u043A\u0438</p></a>\n                    <a href=\"" + location + "pages/analytics.html\"><p>\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430</p></a>\n                </div>\n            </div>\n        </div>\n    ";
}
},{}],"C:/Users/legolas/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62406" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/legolas/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/htmlBlocks/bigBlocks.js"], null)
//# sourceMappingURL=/bigBlocks.7ad60930.js.map