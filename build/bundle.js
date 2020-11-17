/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/getHeadlines.js":
/*!**********************************!*\
  !*** ./frontend/getHeadlines.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst getHeadline = async (title, active) => {\n    const tabContents = document.getElementById('tab-content');\n    let panel = document.createElement('article');\n    panel.setAttribute('role', 'tabpanel');\n    panel.setAttribute('class', 'tab-panel');\n    panel.setAttribute('id', title);\n\n    // if (active = true) {\n    //     panel.setAttribute('aria-hidden', 'false');\n    //     panel.classList.add('active')\n    // }else{\n    //     panel.setAttribute('aria-hidden', 'true')\n    // }\n\n    let list = document.createElement('ol');\n    let url = `https://content.guardianapis.com/search?order-by=relevance&q=${title}&api-key=9wur7sdh84azzazdt3ye54k4`;\n\n    console.log('you are about to start a fetch');\n\n    fetch(url\n    //     , \n    //     {\n    //     method: 'GET',\n    //     mode: 'cors',\n    //     headers: { 'Content-Type': 'application/json' }\n    // }\n    ).then(response => response.json()).then(data => {\n\n        let results = data.response.results;\n        console.log('this is data', results);\n        results.forEach(element => {\n            let item = document.createElement('li');\n            let link = document.createElement('a');\n            link.setAttribute('href', element.webUrl);\n            link.appendChild(document.createTextNode(element.webTitle));\n            item.appendChild(link);\n            list.appendChild(item);\n        });\n        panel.appendChild(list);\n        tabContents.appendChild(panel);\n    }).catch(error => {\n        console.log(error);\n        panel.appendChild(document.createTextNode('No headlines available'));\n    });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getHeadline);\n\n//# sourceURL=webpack://GuardianTab/./frontend/getHeadlines.js?");

/***/ }),

/***/ "./frontend/main.js":
/*!**************************!*\
  !*** ./frontend/main.js ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./frontend/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _getHeadlines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getHeadlines */ \"./frontend/getHeadlines.js\");\n\n\n\n\n\n\nconst onTabClick = event => {\n    let activeNavTabs = document.querySelectorAll('.activeNav');\n    activeNavTabs.forEach(el => {\n        el.className = el.className.replace('activeNav', '');\n        el.removeAttribute('aria-selected');\n    });\n    event.target.setAttribute(\"aria-selected\", true);\n    event.target.parentElement.className = \"activeNav\";\n\n    //edit table content\n    let activePanels = document.querySelectorAll('.active');\n    activePanels.forEach(el => {\n        el.className = el.className.replace('active', 'inactive');\n        el.setAttribute('aria-hidden', 'true');\n    });\n    let page = event.target.href.split('#')[1];\n    let panel = document.getElementById(page);\n    panel.className = panel.className.replace('inactive', 'active');\n    panel.setAttribute('aria-hidden', 'false');\n};\n\nconst tabs = document.querySelector('nav');\n\ntabs.addEventListener('click', onTabClick, false);\ntabs.addEventListener('keydown', event => {\n    if (event.code === 'Space' || event.code === 'Enter') {\n        tabs.click();\n    }\n});\n\nconst fetchHeadlines = async () => {\n    let titles = document.querySelectorAll('.tab');\n    let activeItem = document.querySelector('.activeNav');\n    let active = false;\n    // let tabs = document.getElementById('tab-content')\n\n    titles.forEach(item => {\n        // tabs.appendChild(document.createTextNode(item.id))\n        let title = item.id;\n        if (title === activeItem.id) {\n            active = true;\n        }\n\n        try {\n            (0,_getHeadlines__WEBPACK_IMPORTED_MODULE_2__.default)(title, active);\n        } catch (err) {\n            console.log('there has been a prblem houston!');\n        }\n    });\n};\n\ndocument.addEventListener('DOMContentLoaded', () => fetchHeadlines());\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ fetchHeadlines, onTabClick });\n\n//# sourceURL=webpack://GuardianTab/./frontend/main.js?");

/***/ }),

/***/ "./frontend/styles.css":
/*!*****************************!*\
  !*** ./frontend/styles.css ***!
  \*****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/css-loader/dist/cjs.js):\\nCssSyntaxError\\n\\n(1:1) /Users/Imogen/Documents/GuardianTab/frontend/styles.css Unknown word\\n\\n\\u001b[1m\\u001b[31m>\\u001b[39m\\u001b[22m\\u001b[90m 1 | \\u001b[39mimport api from \\u001b[32m\\\"!../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\\\"\\u001b[39m\\u001b[33m;\\u001b[39m\\n \\u001b[90m   | \\u001b[39m\\u001b[1m\\u001b[31m^\\u001b[39m\\u001b[22m\\n \\u001b[90m 2 | \\u001b[39m            import content from \\u001b[32m\\\"!!./styles.css\\\"\\u001b[39m\\u001b[33m;\\u001b[39m\\n \\u001b[90m 3 | \\u001b[39m\\n\");\n\n//# sourceURL=webpack://GuardianTab/./frontend/styles.css?");

/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/css-loader/dist/cjs.js):\\nCssSyntaxError\\n\\n(1:1) /Users/Imogen/Documents/GuardianTab/node_modules/normalize.css/normalize.css Unknown word\\n\\n\\u001b[1m\\u001b[31m>\\u001b[39m\\u001b[22m\\u001b[90m 1 | \\u001b[39mimport api from \\u001b[32m\\\"!../style-loader/dist/runtime/injectStylesIntoStyleTag.js\\\"\\u001b[39m\\u001b[33m;\\u001b[39m\\n \\u001b[90m   | \\u001b[39m\\u001b[1m\\u001b[31m^\\u001b[39m\\u001b[22m\\n \\u001b[90m 2 | \\u001b[39m            import content from \\u001b[32m\\\"!!./normalize.css\\\"\\u001b[39m\\u001b[33m;\\u001b[39m\\n \\u001b[90m 3 | \\u001b[39m\\n\");\n\n//# sourceURL=webpack://GuardianTab/./node_modules/normalize.css/normalize.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./frontend/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;