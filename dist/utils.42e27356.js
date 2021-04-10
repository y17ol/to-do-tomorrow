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
})({"scripts/utils.js":[function(require,module,exports) {
// 
//  Утилиты
// 
function getDateStr(date) {
  date = new Date(Number(date));
  return date.getHours() + ':' + date.getMinutes() + ' &nbsp ' + date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
}

function getNowDate() {
  var date = new Date(Date.now());
  return dateToDD(date.getFullYear()) + '-' + dateToDD(date.getMonth() + 1) + '-' + dateToDD(date.getDate()) + 'T' + dateToDD(date.getHours()) + ':' + dateToDD(date.getMinutes());
}

function dateToDD(date) {
  return date > 9 ? date : '0' + date;
}

function errorAdd(data) {
  console.error('ERROR: Запись не добавлена\n\n' + data);
} // src = https://learn.javascript.ru/cookie#getcookie-name


function getCookie(name) {
  var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
} // src = https://learn.javascript.ru/cookie#deletecookie-name


function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  });
} // 
//  item cards
// 


function printVideoCards(arrayVideo, currentPage, countItemsOnPage) {
  for (var i = currentPage * 4 - 4; i < currentPage * 4 - 4 + countItemsOnPage; i++) {
    var $video = document.querySelector('.video' + (i - currentPage * 4 + 6));
    $video.innerHTML = returnCardVideo(arrayVideo[i + 1][3], arrayVideo[i + 1][1], arrayVideo[i + 1][2], getDateStr(arrayVideo[i + 1][4]));
    $video.firstElementChild.style.display = '';
  }

  for (var _i = countItemsOnPage + 2; _i <= 5; _i++) {
    document.querySelector('.video' + _i).firstElementChild.style.display = 'none';
  }
}

function printChartCards(arrayChart, currentPage, countItemsOnPage) {
  for (var i = currentPage * 4 - 4; i < currentPage * 4 - 4 + countItemsOnPage; i++) {
    var n = i - currentPage * 4 + 5;
    var opt = getOptions(arrayChart[i][3].data, arrayChart[i][3].opt);
    document.querySelector('.chart__chart' + n).innerHTML = returnCardChart(arrayChart[i][1], arrayChart[i][2], n, getDateStr(arrayChart[i][4]));
    $('#chart' + n).CanvasJSChart(opt);
    document.querySelector('.chart__chart' + n).style.display = 'block';
  }

  for (var _i2 = countItemsOnPage + 1; _i2 < 5; _i2++) {
    document.querySelector('.chart__chart' + _i2).style.display = 'none';
  }
}

function printEventCards(arrayEvent, currentPage, countItemsOnPage) {
  for (var i = currentPage * 4 - 4; i < currentPage * 4 - 4 + countItemsOnPage; i++) {
    var $event = document.querySelector('.event' + (i - currentPage * 4 + 6));
    $event.innerHTML = returnCardEvent(arrayEvent[i + 1]);
    $event.firstElementChild.style.display = '';
    getImage(arrayEvent[i + 1][4], 'minImage');
  }

  for (var _i3 = countItemsOnPage + 2; _i3 <= 5; _i3++) {
    document.querySelector('.event' + _i3).firstElementChild.style.display = 'none';
  }
} //
//  card nav
//


function printCardNav(startPage, endPage, countPages, currentPage) {
  document.querySelector('.subCardNav').innerHTML = '';

  for (var i = startPage; i <= endPage; i++) {
    document.querySelector('.subCardNav').insertAdjacentHTML('beforeend', '<button class="cardNav' + i + '">' + i + '</button>');
  }

  disableCardNav(currentPage, countPages);
}

function disableCardNav(currentPage, countPages) {
  if (currentPage == 1) {
    document.querySelector('.cardNav').firstElementChild.setAttribute('disabled', 'disabled');
  } else if (currentPage == countPages) {
    document.querySelector('.cardNav').lastElementChild.setAttribute('disabled', 'disabled');
  }
}

function cardNavClick(event, type, numberBigCards, arrayItems, currentPage, countPages, firstPage, lastPage) {
  if (event.target.tagName != 'DIV') {
    document.querySelector('.cardNav' + currentPage).classList.remove('cardNavTarget');

    if (event.target.textContent == 'Предыдущая') {
      if (currentPage > 1) {
        currentPage -= 1;
        document.querySelector('.cardNav').lastElementChild.removeAttribute('disabled');

        if (currentPage < firstPage) {
          if (currentPage - 4 >= 1) {
            firstPage = currentPage - 4;
            lastPage = currentPage;
          } else {
            firstPage = 1;
            lastPage = 5;
          }

          printCardNav(firstPage, lastPage, countPages, currentPage);
        } else {
          disableCardNav(currentPage, countPages);
        }
      }
    } else if (event.target.textContent == 'Следующая') {
      if (currentPage < countPages) {
        currentPage += 1;
        document.querySelector('.cardNav').firstElementChild.removeAttribute('disabled');

        if (currentPage > lastPage) {
          if (currentPage + 4 <= countPages) {
            firstPage = currentPage;
            lastPage = currentPage + 4;
          } else {
            firstPage = countPages - 4;
            lastPage = countPages;
          }

          printCardNav(firstPage, lastPage, countPages, currentPage);
        } else {
          disableCardNav(currentPage, countPages);
        }
      }
    } else {
      currentPage = parseInt(event.target.textContent, 10);

      if (currentPage > 1) {
        document.querySelector('.cardNav').lastElementChild.removeAttribute('disabled');

        if (currentPage > firstPage) {
          disableCardNav(currentPage, countPages);
        }
      }

      if (currentPage < countPages) {
        document.querySelector('.cardNav').firstElementChild.removeAttribute('disabled');

        if (currentPage < lastPage) {
          disableCardNav(currentPage, countPages);
        }
      }
    }

    document.querySelector('.cardNav' + currentPage).classList.add('cardNavTarget');
    var countItemsOnPage = currentPage * 4 <= arrayItems.length - numberBigCards ? 4 : arrayItems.length - (currentPage * 4 - 4) - numberBigCards;

    if (type == 'video') {
      printVideoCards(arrayItems, currentPage, countItemsOnPage);
    } else if (type == 'chart') {
      printChartCards(arrayItems, currentPage, countItemsOnPage);
    } else if (type == 'event') {
      printEventCards(arrayItems, currentPage, countItemsOnPage);
    }
  }

  return [currentPage, firstPage, lastPage];
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
},{}]},{},["C:/Users/legolas/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/utils.js"], null)
//# sourceMappingURL=/utils.42e27356.js.map