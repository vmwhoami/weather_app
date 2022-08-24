/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".input__container {\\n  position: absolute;\\n  top: 2vh;\\n  left: 2vw;\\n  z-index: 20;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.input {\\n  width: 25vw;\\n  height: 5rem;\\n  padding: 1rem;\\n  border-radius: 5px;\\n  border: none;\\n  background-color: rgba(5, 5, 5, 0.4);\\n  color: white;\\n  transition: all 0.2s;\\n}\\n@media only screen and (max-width: 60rem) {\\n  .input {\\n    top: 1rem;\\n    margin: 0 auto;\\n    width: 50vw;\\n  }\\n}\\n\\n.input:focus {\\n  background-color: rgba(5, 5, 5, 0.4);\\n  width: 31vw;\\n}\\n@media only screen and (max-width: 60rem) {\\n  .input:focus {\\n    width: 80vw;\\n  }\\n}\\n\\n.btn {\\n  display: none;\\n}\\n\\n.error__msg {\\n  color: rgb(255, 23, 23);\\n  font-weight: 600;\\n  text-transform: uppercase;\\n  font-size: 1.5rem;\\n  visibility: hidden;\\n  margin-top: 1rem;\\n  transform: scaleY(0);\\n  transform-origin: top;\\n  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);\\n}\\n\\n.visible {\\n  visibility: visible;\\n  transform: scaleY(1);\\n}\\n\\n.search {\\n  cursor: pointer;\\n  position: absolute;\\n  top: 15vh;\\n  display: flex;\\n  flex-direction: column;\\n  background-color: rgba(5, 5, 5, 0.4);\\n  min-height: 30%;\\n  width: 50%;\\n  z-index: 200;\\n  border-radius: 1rem;\\n  overflow: hidden;\\n  padding: 1rem;\\n  color: white;\\n}\\n@media only screen and (max-width: 60rem) {\\n  .search {\\n    width: 90%;\\n  }\\n}\\n.search::before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  left: 0;\\n  top: 11vh;\\n  background-color: hsla(0deg, 0%, 100%, 0.275);\\n  height: 1px;\\n  width: 100%;\\n}\\n\\n.topinfo {\\n  cursor: pointer;\\n  width: 100%;\\n  height: 8vh;\\n  padding: 0 1rem;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  position: relative;\\n}\\n\\n.temptext {\\n  font-size: 2.5rem;\\n}\\n\\n.temperature {\\n  font-size: 5rem;\\n  margin-left: 1rem;\\n}\\n\\n.infoimg {\\n  width: 7rem;\\n  height: 7rem;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n}\\n\\n.description {\\n  text-transform: uppercase;\\n  font-size: 2rem;\\n}\\n\\n.undertop {\\n  width: 100%;\\n  height: 6vh;\\n  margin-top: 2.5vh;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.locattion__cont {\\n  color: white;\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.info {\\n  display: flex;\\n}\\n\\n.location__cont {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  width: 100%;\\n}\\n\\n.location {\\n  font-size: 3.5rem;\\n  padding: 1rem;\\n}\\n\\n.countryInitials {\\n  font-size: 2.5rem;\\n  padding: 1rem;\\n}\\n\\n.main {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n.main__con {\\n  display: flex;\\n  flex-direction: column;\\n}\\n.main__notice {\\n  font-size: 1rem;\\n  text-align: center;\\n}\\n.main__time {\\n  font-size: 10rem;\\n}\\n.main__date {\\n  margin: 1rem;\\n  font-size: 2rem;\\n}\\n\\n*,\\n*::before,\\n*::after {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n}\\n\\nbody {\\n  font-size: 1.6rem;\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n}\\n\\n.container {\\n  width: 100%;\\n  height: 100%;\\n  position: absolute;\\n  display: flex;\\n  justify-content: center;\\n  top: 0;\\n  left: 0;\\n  z-index: 4;\\n}\\n\\n.imgfilter {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background: rgb(0, 0, 0);\\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4293067569) 0%, rgba(19, 19, 19, 0.2) 100%);\\n  backdrop-filter: blur(2px);\\n  z-index: 3;\\n}\\n\\n.imgcontainer {\\n  position: absolute;\\n  margin: 0 auto;\\n  width: 100%;\\n  height: 100%;\\n  z-index: 1;\\n}\\n\\n.img {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n  object-position: top;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weatherapp/./src/styles/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack://weatherapp/./src/styles/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.scss */ \"./src/styles/styles.scss\");\n/* harmony import */ var _scripts_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/events */ \"./src/scripts/events.js\");\n\n\n\n(0,_scripts_events__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ }),

/***/ "./src/scripts/async.js":
/*!******************************!*\
  !*** ./src/scripts/async.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeMerics\": () => (/* binding */ changeMerics),\n/* harmony export */   \"fetchData\": () => (/* binding */ fetchData),\n/* harmony export */   \"getPredictions\": () => (/* binding */ getPredictions),\n/* harmony export */   \"populateDom\": () => (/* binding */ populateDom),\n/* harmony export */   \"showError\": () => (/* binding */ showError)\n/* harmony export */ });\n/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./queries */ \"./src/scripts/queries.js\");\n/* harmony import */ var _localTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localTime */ \"./src/scripts/localTime.js\");\n\n\n\nconst getTemp = (data) => {\n  const num = Number(data.main.temp);\n  const cel = Math.round(num - 273.15);\n  const celsius = `${cel}\\xB0`;\n  const f = (num - 273.15) * 9;\n  const faht = Math.round((f / 5) + 32);\n  const fahrenheit = `${faht}\\xB0`;\n  return [celsius, fahrenheit];\n};\n\nconst feelsLike = (data) => {\n  const num = Number(data.main.feels_like);\n  const cel = Math.round(num - 273.15);\n  const celsius = `${cel}\\xB0`;\n  const f = (num - 273.15) * 9;\n  const faht = Math.round((f / 5) + 32);\n  const fahrenheit = `${faht}\\xB0`;\n  return [celsius, fahrenheit];\n};\n\nconst setImg = (data, location) => {\n  const imgcode = data.weather[0].icon;\n  const imgLink = `./${location}/${imgcode}.png`;\n  return imgLink;\n};\n\nconst setImages = (data) => {\n  const img = document.querySelector('.img');\n  const infoimg = document.querySelector('.infoimg');\n  img.src = setImg(data, 'imgs');\n  infoimg.src = setImg(data, 'icons');\n};\n\nconst setlocalTime = (data) => {\n  const notice = document.querySelector('.main__notice');\n  const dispTime = document.querySelector('.main__time');\n  const mainDate = document.querySelector('.main__date');\n  const time = (0,_localTime__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\n  const dayofweek = time[0];\n  const date = time[1];\n  const month = time[2];\n  const hoursMin = time[3];\n  mainDate.textContent = `${dayofweek}, ${date} of ${month}`;\n  notice.textContent = '*Local time 24 hours format';\n  dispTime.textContent = hoursMin;\n};\n\nconst setTemp = (data, num, s) => {\n  const temperature = document.querySelector('.temperature');\n  const feel = document.querySelector('.undertop__feelslike');\n  temperature.textContent = `${(getTemp(data))[num]}${s}`;\n  feel.textContent = `Feels like ${(feelsLike(data))[num]}${s}`;\n};\nconst changeMerics = (data) => {\n  const topinfo = document.querySelector('.topinfo');\n  if (topinfo.classList.contains('fahrenheit')) {\n    setTemp(data, 1, 'F');\n  } else if (!topinfo.classList.contains('fahrenheit')) {\n    setTemp(data, 0, 'C');\n  }\n};\n\nconst watchClass = (data) => {\n  const topinfo = document.querySelector('.topinfo');\n  const observer = new MutationObserver((() => {\n    changeMerics(data);\n  }));\n  observer.observe(topinfo, {\n    attributes: true,\n    attributeFilter: ['class'],\n    childList: false,\n    characterData: false,\n  });\n};\n\nconst populateDom = (data) => {\n  setlocalTime(data);\n  setImages(data);\n  watchClass(data);\n  changeMerics(data);\n  const location = document.querySelector('.location');\n  const countryInitials = document.querySelector('.countryInitials');\n  const descr = document.querySelector('.description');\n  descr.textContent = data.weather[0].main;\n  location.textContent = data.name;\n  countryInitials.textContent = data.sys.country;\n};\n\nconst showError = (erro) => {\n  const err = document.querySelector('.error__msg');\n  err.classList.add('visible');\n  err.textContent = erro.message;\n};\n\nasync function getPredictions(lat, lon, exclude) {\n  const link = (0,_queries__WEBPACK_IMPORTED_MODULE_0__.forecast)(lat, lon, exclude);\n  const data = fetch(link);\n  const raw = await data;\n  const predictions = raw.json();\n  return predictions;\n}\n\nasync function fetchData(url) {\n  try {\n    const response = await fetch(url);\n    if (!response.ok) {\n      const dataError = await response.json();\n      return Promise.reject(new Error(dataError.message));\n    }\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    return Promise.reject(new Error('network failure'));\n  }\n}\n\n\n\n//# sourceURL=webpack://weatherapp/./src/scripts/async.js?");

/***/ }),

/***/ "./src/scripts/events.js":
/*!*******************************!*\
  !*** ./src/scripts/events.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addEventsToSearch)\n/* harmony export */ });\n/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validations */ \"./src/scripts/validations.js\");\n/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queries */ \"./src/scripts/queries.js\");\n/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./async */ \"./src/scripts/async.js\");\n\n\n\n\nfunction addEventsToSearch() {\n  const input = document.getElementById('input');\n  const btn = document.getElementById('btn');\n  const err = document.querySelector('.error__msg');\n\n  window.onload = () => {\n    input.focus();\n  };\n\n  const search = document.querySelector('.search');\n\n  search.addEventListener('click', () => {\n    const topinfo = document.querySelector('.topinfo');\n    topinfo.classList.toggle('fahrenheit');\n  });\n\n  btn.addEventListener('click', () => {\n    const errmsg = (0,_validations__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input);\n    if (!errmsg) {\n      const searchloc = (0,_queries__WEBPACK_IMPORTED_MODULE_1__.weatherNow)(input.value);\n      (0,_async__WEBPACK_IMPORTED_MODULE_2__.fetchData)(searchloc).then((data) => {\n        (0,_async__WEBPACK_IMPORTED_MODULE_2__.populateDom)(data);\n        const { lat } = data.coord;\n        const { lon } = data.coord;\n        (0,_async__WEBPACK_IMPORTED_MODULE_2__.getPredictions)(lat, lon, 'minutely,hourly');\n      }).catch((error) => {\n        (0,_async__WEBPACK_IMPORTED_MODULE_2__.showError)(error);\n      });\n      input.value = '';\n      err.textContent = '';\n    } else {\n      err.classList.add('visible');\n      err.textContent = errmsg;\n    }\n  });\n\n  input.addEventListener('keyup', (e) => {\n    const { key } = e;\n    if (key === 'Enter') btn.click();\n  });\n\n  input.addEventListener('focus', () => {\n    err.classList.remove('visible');\n  });\n}\n\n\n//# sourceURL=webpack://weatherapp/./src/scripts/events.js?");

/***/ }),

/***/ "./src/scripts/localTime.js":
/*!**********************************!*\
  !*** ./src/scripts/localTime.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getLocalTime)\n/* harmony export */ });\nconst getTime = (str) => {\n  const time = str.split(',');\n  const hours = time[1].split(':');\n  const onlyH = `${hours[0]}:${hours[1]}`.trim();\n  return onlyH;\n};\n\nfunction getLocalTime(data) {\n  const { timezone } = data;\n  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\n  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\n  const date = new Date();\n  let localTime = date.getTime();\n  const localOffset = date.getTimezoneOffset() * 60000;\n  const utc = localTime + localOffset;\n  localTime = utc + (1000 * timezone);\n  const nd = new Date(localTime);\n  const day = days[nd.getDay()];\n  const dayOfMonth = nd.getDate();\n  const month = months[nd.getMonth()];\n  const time = nd.toLocaleString();\n  const onlyH = getTime(time);\n  return [day, dayOfMonth, month, onlyH];\n}\n\n//# sourceURL=webpack://weatherapp/./src/scripts/localTime.js?");

/***/ }),

/***/ "./src/scripts/queries.js":
/*!********************************!*\
  !*** ./src/scripts/queries.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"forecast\": () => (/* binding */ forecast),\n/* harmony export */   \"weatherNow\": () => (/* binding */ weatherNow)\n/* harmony export */ });\nconst apikey = \"5851c332295f83af47503cb5be82ee3c\";\nconst forecast = (lat, lon, part = {}) => `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${apikey}`;\nconst weatherNow = (location) => `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apikey}`;\n\n\n\n//# sourceURL=webpack://weatherapp/./src/scripts/queries.js?");

/***/ }),

/***/ "./src/scripts/validations.js":
/*!************************************!*\
  !*** ./src/scripts/validations.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst inputValidtion = (input) => {\n  const { value } = input;\n  const num = value.split('').find(ch => Number(ch));\n  const msg = \"Input can't be empty or a number\";\n  if (!value || num) {\n    return msg;\n  }\n\n  return false;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputValidtion);\n\n//# sourceURL=webpack://weatherapp/./src/scripts/validations.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;