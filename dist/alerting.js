/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/scss/alerting.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/scss/alerting.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ \"./node_modules/css-loader/dist/runtime/url-escape.js\");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../img/checked.png */ \"./src/img/checked.png\"));\n\n// Module\nexports.push([module.i, \".alerting-notification {\\n  position: fixed;\\n  top: 0px;\\n  right: 0px;\\n  z-index: 2000;\\n  display: none;\\n  overflow: auto;\\n  outline: 0;\\n  transition: all 0.3s ease;\\n  font-size: 14px;\\n  font-style: normal;\\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Arial, Ubuntu, Roboto, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; }\\n  .alerting-notification-dialog {\\n    max-width: 420px;\\n    position: relative;\\n    width: auto;\\n    margin: 20px; }\\n  .alerting-notification-content {\\n    position: relative;\\n    background-color: #ffffff;\\n    background-clip: padding-box;\\n    border-radius: 3px;\\n    outline: 0;\\n    box-shadow: none;\\n    border: none; }\\n  .alerting-notification-fade.alerting-notification-in {\\n    opacity: 1 !important; }\\n  .alerting-notification-fade-right .alerting-notification-content {\\n    opacity: 0;\\n    transform: translateX(20px);\\n    transition: transform 0.3s, opacity 0.3s; }\\n  .alerting-notification-fade-right.alerting-notification-in .alerting-notification-content {\\n    opacity: 1;\\n    transform: translateX(0);\\n    box-shadow: rgba(9, 30, 66, 0.08) 0px 1px 2px 0px, rgba(9, 30, 66, 0.08) 0px 2px 4px, rgba(9, 30, 66, 0.31) 0px 3px 20px -5px; }\\n  .alerting-notification-fade-right.alerting-notification-out .alerting-notification-content {\\n    opacity: 0;\\n    transform: translateX(20px); }\\n  .alerting-notification-warning .alerting-notification-content {\\n    border-top: 1px solid #ffc400;\\n    border-right: 1px solid #ffc400;\\n    border-bottom: 1px solid #ffc400; }\\n  .alerting-notification-warning .alerting-notification-content-inner-warning {\\n    display: flex;\\n    flex-direction: row; }\\n    .alerting-notification-warning .alerting-notification-content-inner-warning-left {\\n      flex-basis: 40px;\\n      display: flex;\\n      flex-direction: column;\\n      justify-content: space-around;\\n      text-align: center;\\n      border-left: 3px solid #ffc400;\\n      border-top-left-radius: 3px;\\n      border-bottom-left-radius: 3px; }\\n      .alerting-notification-warning .alerting-notification-content-inner-warning-left i {\\n        color: #ff8c00; }\\n    .alerting-notification-warning .alerting-notification-content-inner-warning-right {\\n      flex: 1;\\n      padding: 20px; }\\n      .alerting-notification-warning .alerting-notification-content-inner-warning-right-close {\\n        position: absolute;\\n        top: 13px;\\n        right: 13px; }\\n      .alerting-notification-warning .alerting-notification-content-inner-warning-right-title {\\n        font-weight: bold;\\n        max-width: 90%; }\\n      .alerting-notification-warning .alerting-notification-content-inner-warning-right-message {\\n        margin-top: 5px; }\\n  .alerting-notification-danger .alerting-notification-content {\\n    border-top: 1px solid #ff542e;\\n    border-right: 1px solid #ff542e;\\n    border-bottom: 1px solid #ff542e; }\\n  .alerting-notification-danger .alerting-notification-content-inner-danger {\\n    display: flex;\\n    flex-direction: row; }\\n    .alerting-notification-danger .alerting-notification-content-inner-danger-left {\\n      flex-basis: 40px;\\n      display: flex;\\n      flex-direction: column;\\n      justify-content: space-around;\\n      text-align: center;\\n      border-left: 3px solid #ff542e;\\n      border-top-left-radius: 3px;\\n      border-bottom-left-radius: 3px; }\\n      .alerting-notification-danger .alerting-notification-content-inner-danger-left i {\\n        color: #ff542e; }\\n    .alerting-notification-danger .alerting-notification-content-inner-danger-right {\\n      flex: 1;\\n      padding: 20px; }\\n      .alerting-notification-danger .alerting-notification-content-inner-danger-right-close {\\n        position: absolute;\\n        top: 13px;\\n        right: 13px; }\\n      .alerting-notification-danger .alerting-notification-content-inner-danger-right-title {\\n        font-weight: bold;\\n        max-width: 90%; }\\n      .alerting-notification-danger .alerting-notification-content-inner-danger-right-message {\\n        margin-top: 5px; }\\n  .alerting-notification-success .alerting-notification-content {\\n    border-top: 1px solid #59d9a4;\\n    border-right: 1px solid #59d9a4;\\n    border-bottom: 1px solid #59d9a4; }\\n  .alerting-notification-success .alerting-notification-content-inner-success {\\n    display: flex;\\n    flex-direction: row; }\\n    .alerting-notification-success .alerting-notification-content-inner-success-left {\\n      flex-basis: 40px;\\n      display: flex;\\n      flex-direction: column;\\n      justify-content: space-around;\\n      text-align: center;\\n      border-left: 3px solid #59d9a4;\\n      border-top-left-radius: 3px;\\n      border-bottom-left-radius: 3px; }\\n      .alerting-notification-success .alerting-notification-content-inner-success-left i {\\n        color: #008558; }\\n    .alerting-notification-success .alerting-notification-content-inner-success-right {\\n      flex: 1;\\n      padding: 20px; }\\n      .alerting-notification-success .alerting-notification-content-inner-success-right-close {\\n        position: absolute;\\n        top: 13px;\\n        right: 13px; }\\n      .alerting-notification-success .alerting-notification-content-inner-success-right-title {\\n        font-weight: bold;\\n        max-width: 90%; }\\n      .alerting-notification-success .alerting-notification-content-inner-success-right-message {\\n        margin-top: 5px; }\\n  .alerting-notification-info .alerting-notification-content {\\n    border-top: 1px solid #4d9aff;\\n    border-right: 1px solid #4d9aff;\\n    border-bottom: 1px solid #4d9aff; }\\n  .alerting-notification-info .alerting-notification-content-inner-info {\\n    display: flex;\\n    flex-direction: row; }\\n    .alerting-notification-info .alerting-notification-content-inner-info-left {\\n      flex-basis: 40px;\\n      display: flex;\\n      flex-direction: column;\\n      justify-content: space-around;\\n      text-align: center;\\n      border-left: 3px solid #4d9aff;\\n      border-top-left-radius: 3px;\\n      border-bottom-left-radius: 3px; }\\n      .alerting-notification-info .alerting-notification-content-inner-info-left i {\\n        color: #4d9aff; }\\n    .alerting-notification-info .alerting-notification-content-inner-info-right {\\n      flex: 1;\\n      padding: 20px; }\\n      .alerting-notification-info .alerting-notification-content-inner-info-right-close {\\n        position: absolute;\\n        top: 13px;\\n        right: 13px; }\\n      .alerting-notification-info .alerting-notification-content-inner-info-right-title {\\n        font-weight: bold;\\n        max-width: 90%; }\\n      .alerting-notification-info .alerting-notification-content-inner-info-right-message {\\n        margin-top: 5px; }\\n\\n.alerting-icon {\\n  height: 20px;\\n  margin-left: 15px; }\\n  .alerting-icon.alerting-icon-success {\\n    background: url(\" + ___CSS_LOADER_URL___0___ + \") no-repeat;\\n    background-size: 20px; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/scss/alerting.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function escape(url, needQuotes) {\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"';\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/url-escape.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  } // blank or null?\n\n\n  if (!css || typeof css !== \"string\") {\n    return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\"); // convert each url(...)\n\n  /*\n  This regular expression is just a way to recursively match brackets within\n  a string.\n  \t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n     (  = Start a capturing group\n       (?:  = Start a non-capturing group\n           [^)(]  = Match anything that isn't a parentheses\n           |  = OR\n           \\(  = Match a start parentheses\n               (?:  = Start another non-capturing groups\n                   [^)(]+  = Match anything that isn't a parentheses\n                   |  = OR\n                   \\(  = Match a start parentheses\n                       [^)(]*  = Match anything that isn't a parentheses\n                   \\)  = Match a end parentheses\n               )  = End Group\n               *\\) = Match anything and then a close parens\n           )  = Close non-capturing group\n           *  = Match anything\n        )  = Close capturing group\n   \\)  = Match a close parens\n  \t /gi  = Get all matches, not the first.  Be case insensitive.\n   */\n\n  var fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function (fullMatch, origUrl) {\n    // strip quotes (if they exist)\n    var unquotedOrigUrl = origUrl.trim().replace(/^\"(.*)\"$/, function (o, $1) {\n      return $1;\n    }).replace(/^'(.*)'$/, function (o, $1) {\n      return $1;\n    }); // already a full url? no change\n\n    if (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n      return fullMatch;\n    } // convert the url to a full url\n\n\n    var newUrl;\n\n    if (unquotedOrigUrl.indexOf(\"//\") === 0) {\n      //TODO: should we add protocol?\n      newUrl = unquotedOrigUrl;\n    } else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n      // path should be relative to the base url\n      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n    } else {\n      // path should be relative to current directory\n      newUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n    } // send back the fixed url(...)\n\n\n    return \"url(\" + JSON.stringify(newUrl) + \")\";\n  }); // send back the fixed css\n\n  return fixedCss;\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g; // This works in non-strict mode\n\ng = function () {\n  return this;\n}();\n\ntry {\n  // This works if eval is allowed (see CSP)\n  g = g || new Function(\"return this\")();\n} catch (e) {\n  // This works if the window reference is available\n  if (typeof window === \"object\") g = window;\n} // g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\n\nmodule.exports = g;\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/img/checked.png":
/*!*****************************!*\
  !*** ./src/img/checked.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHJAAAByQFhD1RcAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAW5QTFRF////VaqqM7OzK7+qL72qMb2lM7+mMr+kMb6nMb6nM7+mMb2nMr2mM72nMr6mMr6lMr6mM76nMr+lMr+mMr6mMr6mMr6mMr6mMr6mMr6mMr6mMr6mMr6mMr6mMr6mM76mNL+nNb+nNr+oOMCoOMCpOcCpOsGpPMGqPcKrPsKrQcOtQsOtRMSuRsSvSsawTMaxTseyUMezUcizVcm1Vsm2Wcq3W8u4Xcy4Xcy5YM26Yc26Yc27Zc68Zs+9aM+9a9C/btHAb9HBctLCeNTEe9XGfdbGftbHf9bIgdfIgtfJhtnLiNnLld3Rlt7Rlt7Sm9/UnODUqOPZrOXbr+bcsebdsufds+fetejftujfuunhu+rivOriwOvkxe3mx+3ny+7ozO/p0PDq1vLt2vPv3PTw3fTw5Pbz5Pfz5vf06/n27vr48Pr48fv58/v69fz69fz79vz7+P38+f38+f39+v39+/79/P7+/f7+/v//////2EEnkwAAAB50Uk5TAAMKDBsfPExOYmRocHSKjqSwtr7Ay9XY5ery+Pn+bfME6gAAAmlJREFUWMOtV/lf0zAUzxgbZV270q7rzjdBFEXxAvG+wPucN+CFB3igKIhK/3u3Jhttl6Rps+8vbV76fZ/m5eWb9xBiIK3kdcNyqlXHMvS8kkaxMKyaNQigZqrDouwhzW4ABQ1bGxKgp3JlYKKcS0XxR0rARWmES88UIRLFDJufrYAAKlkWf7QOQqiP0qNXAGEUKLFMjUEMjPV7KEAsFPrWDzERikO2HtdBPbAXmQrERsWfD0VIgKIvfyERelmdKiVzUOruZQ4SIkfOfzmpgzLWB02cMT4zN+Ufa54DW5Q+09pw3Y0TPovt6V9DjH7qxY7bwVO/ynV0UhXj391yMZb9VrXtwBShH3ntdtHy2822/tcE+Ge+9vjPmwG1TyNFgH9xk7B3l+ZDUwrKR/OvbhP++/m+uTzSI/mLfzD913XKpI6MoGFh7c39/QHLnX+Y/+0szbuBrMD4VufTT6d9lmuEv36S+nsWcgLjZ97H24s9wyyJ34ej9PU5qBoYr5BoPyDj6XVseDvFCFA15ODYdxLwl14gJlbxaGkCmA6CS4ALX4iH1cn26Al+fzfO3CInFESAQ2QV7qt9cA+/fZ5m77EV3kaAZot4eHz5r/f8OctJEoOWSDd+Yw/4sbvAyzKdmsqXdtw9POSmaZ5+mG7u8VeaXAcK4zg/6vI/HuTy28eZLijNZeLgHP+gmUxJO7DWr18UqGxRneuIwNZxPt8TVZasX9l0f9yO+AGbe7FMnj8cpTXaYK426ctV/nqXLjDkSxz5Iku6zJMvNOVLXfliW7rcl284BtDyyDdd8m3fABpP+dZ3AM13vPb/P4du0o8umF/wAAAAAElFTkSuQmCC\"\n\n//# sourceURL=webpack:///./src/img/checked.png?");

/***/ }),

/***/ "./src/js/alerting.js":
/*!****************************!*\
  !*** ./src/js/alerting.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Alerting; });\n\n\nclass Alerting {\n  /**\r\n   * Generic constructor\r\n   * @param options\r\n   * @param type\r\n   */\n  constructor(options = [], type = 'primary') {\n    let types = ['default', 'primary', 'success', 'warning', 'danger'];\n\n    if (types.includes(type)) {\n      this.alert(type, options);\n    } else {\n      throw new Error('The alert could not be generated, undefined type');\n    }\n  }\n  /**\r\n   * Alert builder\r\n   * @param type\r\n   * @param options\r\n   */\n\n\n  alert(type, options) {\n    // If not set icon, get default icons\n    if (!options['icon']) {\n      switch (type) {\n        case 'default':\n          options['icon'] = 'fas fa-bell';\n          break;\n\n        case 'primary':\n          options['icon'] = 'fas fa-info-circle';\n          break;\n\n        case 'success':\n          options['icon'] = 'alerting-icon alerting-icon-success';\n          break;\n\n        case 'warning':\n          options['icon'] = 'fas fa-exclamation-triangle';\n          break;\n\n        case 'danger':\n          options['icon'] = 'fas fa-exclamation-circle';\n          break;\n      }\n    } // TODO all\n    // Alert content right\n\n\n    let alertContentRight = document.createElement('div');\n    alertContentRight.className = 'alerting-notification-content-inner-' + type + '-right'; // Alert content left icon\n\n    let alertContentLeftIcon = document.createElement('i');\n    alertContentLeftIcon.className = options['icon']; // Alert content right\n\n    let alertContentLeft = document.createElement('div');\n    alertContentLeft.className = 'alerting-notification-content-inner-' + type + '-left';\n    alertContentLeft.append(alertContentLeftIcon); // Alert content\n\n    let alertContent = document.createElement('div');\n    alertContent.className = 'alerting-notification-content';\n    alertContent.append(alertContentLeft);\n    alertContent.append(alertContentRight); // Alert dialog\n\n    let alertDialog = document.createElement('div');\n    alertDialog.className = 'alerting-notification-dialog';\n    alertDialog.append(alertContent); // Alert container\n\n    let alertHtml = document.createElement('div');\n    alertHtml.className = 'alerting-notification alerting-notification-' + type + ' alerting-notification-fade-right alerting-notification-in';\n    alertHtml.style.cssText = 'display: block !important;';\n    alertHtml.append(alertDialog); // Append alert to body\n\n    document.body.append(alertHtml);\n  }\n\n}\n\nglobal.Alerting = Alerting;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/js/alerting.js?");

/***/ }),

/***/ "./src/scss/alerting.scss":
/*!********************************!*\
  !*** ./src/scss/alerting.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./alerting.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/scss/alerting.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/scss/alerting.scss?");

/***/ }),

/***/ 0:
/*!***********************************************************!*\
  !*** multi ./src/js/alerting.js ./src/scss/alerting.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/alerting.js */\"./src/js/alerting.js\");\nmodule.exports = __webpack_require__(/*! ./src/scss/alerting.scss */\"./src/scss/alerting.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/js/alerting.js_./src/scss/alerting.scss?");

/***/ })

/******/ });