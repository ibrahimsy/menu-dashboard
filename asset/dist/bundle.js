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

/***/ "./assets/js/plugin.js":
/*!*****************************!*\
  !*** ./assets/js/plugin.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDocs\": () => (/* reexport safe */ https_www_gstatic_com_firebasejs_9_5_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_3__.getDocs),\n/* harmony export */   \"doc\": () => (/* reexport safe */ https_www_gstatic_com_firebasejs_9_5_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_3__.doc),\n/* harmony export */   \"getDoc\": () => (/* reexport safe */ https_www_gstatic_com_firebasejs_9_5_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_3__.getDoc),\n/* harmony export */   \"setDoc\": () => (/* reexport safe */ https_www_gstatic_com_firebasejs_9_5_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_3__.setDoc),\n/* harmony export */   \"collection\": () => (/* reexport safe */ https_www_gstatic_com_firebasejs_9_5_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_3__.collection),\n/* harmony export */   \"addDoc\": () => (/* reexport safe */ https_www_gstatic_com_firebasejs_9_5_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_3__.addDoc),\n/* harmony export */   \"onSnapshot\": () => (/* reexport safe */ https_www_gstatic_com_firebasejs_9_5_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_3__.onSnapshot),\n/* harmony export */   \"deleteDoc\": () => (/* reexport safe */ https_www_gstatic_com_firebasejs_9_5_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_3__.deleteDoc),\n/* harmony export */   \"getStorage\": () => (/* reexport safe */ https_www_gstatic_com_firebasejs_9_5_0_firebase_storage_js__WEBPACK_IMPORTED_MODULE_2__.getStorage),\n/* harmony export */   \"uploadBytesResumable\": () => (/* reexport safe */ https_www_gstatic_com_firebasejs_9_5_0_firebase_storage_js__WEBPACK_IMPORTED_MODULE_2__.uploadBytesResumable),\n/* harmony export */   \"getDownloadURL\": () => (/* reexport safe */ https_www_gstatic_com_firebasejs_9_5_0_firebase_storage_js__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL),\n/* harmony export */   \"cloudDB\": () => (/* binding */ cloudDB)\n/* harmony export */ });\n/* harmony import */ var https_www_gstatic_com_firebasejs_9_5_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js */ \"https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js\");\n/* harmony import */ var https_www_gstatic_com_firebasejs_9_5_0_firebase_analytics_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js */ \"https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js\");\n/* harmony import */ var https_www_gstatic_com_firebasejs_9_5_0_firebase_storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/9.5.0/firebase-storage.js */ \"https://www.gstatic.com/firebasejs/9.5.0/firebase-storage.js\");\n/* harmony import */ var https_www_gstatic_com_firebasejs_9_5_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js */ \"https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([https_www_gstatic_com_firebasejs_9_5_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_3__, https_www_gstatic_com_firebasejs_9_5_0_firebase_storage_js__WEBPACK_IMPORTED_MODULE_2__, https_www_gstatic_com_firebasejs_9_5_0_firebase_analytics_js__WEBPACK_IMPORTED_MODULE_1__, https_www_gstatic_com_firebasejs_9_5_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__]);\n([https_www_gstatic_com_firebasejs_9_5_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_3__, https_www_gstatic_com_firebasejs_9_5_0_firebase_storage_js__WEBPACK_IMPORTED_MODULE_2__, https_www_gstatic_com_firebasejs_9_5_0_firebase_analytics_js__WEBPACK_IMPORTED_MODULE_1__, https_www_gstatic_com_firebasejs_9_5_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\r\n      \r\n\r\n      const firebaseConfig = {\r\n        apiKey: \"AIzaSyCYyfp00dWfn_PEEaKlRNRqOdeztn83Ks4\",\r\n        authDomain: \"atoos-menu.firebaseapp.com\",\r\n        projectId: \"atoos-menu\",\r\n        storageBucket: \"atoos-menu.appspot.com\",\r\n        messagingSenderId: \"1004955484041\",\r\n        appId: \"1:1004955484041:web:f5c49cad498826c536eb58\",\r\n        measurementId: \"G-GC4ZJQ7SCM\",\r\n      };\r\n\r\n      // Initialize Firebase\r\n      const app = (0,https_www_gstatic_com_firebasejs_9_5_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\n      const analytics = (0,https_www_gstatic_com_firebasejs_9_5_0_firebase_analytics_js__WEBPACK_IMPORTED_MODULE_1__.getAnalytics)(app);\r\n\r\n      \r\n\r\n      \r\n      \r\n      const cloudDB = (0,https_www_gstatic_com_firebasejs_9_5_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_3__.getFirestore)();\r\n      \n});\n\n//# sourceURL=webpack://cms-menu/./assets/js/plugin.js?");

/***/ }),

/***/ "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js":
false,

/***/ "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js":
false,

/***/ "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js":
false,

/***/ "https://www.gstatic.com/firebasejs/9.5.0/firebase-storage.js":
false

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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var completeQueue = (queue) => {
/******/ 			if(queue) {
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var completeFunction = (fn) => (!--fn.r && fn());
/******/ 		var queueFunction = (queue, fn) => (queue ? queue.push(fn) : completeFunction(fn));
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackThen]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					});
/******/ 					var obj = {};
/******/ 												obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep['catch'](reject));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 								ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 								ret[webpackExports] = dep;
/******/ 								return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue = hasAwait && [];
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var isEvaluating = true;
/******/ 			var nested = false;
/******/ 			var whenAll = (deps, onResolve, onReject) => {
/******/ 				if (nested) return;
/******/ 				nested = true;
/******/ 				onResolve.r += deps.length;
/******/ 				deps.map((dep, i) => (dep[webpackThen](onResolve, onReject)));
/******/ 				nested = false;
/******/ 			};
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = () => (resolve(exports), completeQueue(queue), queue = 0);
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackThen] = (fn, rejectFn) => {
/******/ 				if (isEvaluating) { return completeFunction(fn); }
/******/ 				if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 				queueFunction(queue, fn);
/******/ 				promise['catch'](rejectFn);
/******/ 			};
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				if(!deps) return outerResolve();
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn, result;
/******/ 				var promise = new Promise((resolve, reject) => {
/******/ 					fn = () => (resolve(result = currentDeps.map((d) => (d[webpackExports]))));
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : result;
/******/ 			}).then(outerResolve, reject);
/******/ 			isEvaluating = false;
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/plugin.js");
/******/ 	
/******/ })()
;