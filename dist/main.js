/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var Client;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculateDaysDiff: () => (/* reexport safe */ _js_calculateDaysDiff_js__WEBPACK_IMPORTED_MODULE_2__.calculateDaysDiff)\n/* harmony export */ });\n/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app.js */ \"./src/client/js/app.js\");\n/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_app_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/client/styles/style.scss\");\n/* harmony import */ var _js_calculateDaysDiff_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/calculateDaysDiff.js */ \"./src/client/js/calculateDaysDiff.js\");\n/* harmony import */ var _js_calculateDaysDiff_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_calculateDaysDiff_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconsole.log(\"hello\");\n\n\n//# sourceURL=webpack://Client/./src/client/index.js?");

/***/ }),

/***/ "./src/client/js/app.js":
/*!******************************!*\
  !*** ./src/client/js/app.js ***!
  \******************************/
/***/ (() => {

eval("function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = \"function\" == typeof Symbol ? Symbol : {}, a = i.iterator || \"@@iterator\", c = i.asyncIterator || \"@@asyncIterator\", u = i.toStringTag || \"@@toStringTag\"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, \"\"); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, \"_invoke\", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: \"normal\", arg: t.call(e, r) }; } catch (t) { return { type: \"throw\", arg: t }; } } e.wrap = wrap; var h = \"suspendedStart\", l = \"suspendedYield\", f = \"executing\", s = \"completed\", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { [\"next\", \"throw\", \"return\"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if (\"throw\" !== c.type) { var u = c.arg, h = u.value; return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) { invoke(\"next\", t, i, a); }, function (t) { invoke(\"throw\", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke(\"throw\", t, i, a); }); } a(c.arg); } var r; o(this, \"_invoke\", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error(\"Generator is already running\"); if (o === s) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = f; var p = tryCatch(e, r, n); if (\"normal\" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y; var i = tryCatch(o, e.iterator, r.arg); if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = \"normal\", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: \"root\" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || \"\" === e) { var r = e[a]; if (r) return r.call(e); if (\"function\" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) { var e = \"function\" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () { return this; }), define(g, \"toString\", function () { return \"[object Generator]\"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if (\"root\" === i.tryLoc) return handle(\"end\"); if (i.tryLoc <= this.prev) { var c = n.call(i, \"catchLoc\"), u = n.call(i, \"finallyLoc\"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error(\"try statement without catch or finally\"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) { var i = o; break; } } i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, \"catch\": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if (\"throw\" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, \"next\" === this.method && (this.arg = t), y; } }, e; }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }\nfunction _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n); } _next(void 0); }); }; }\ndocument.getElementById(\"add-trip-button\").addEventListener(\"click\", function () {\n  var city = document.getElementById(\"trip-city\").value;\n  var url = \"http://api.geonames.org/searchJSON?q=\".concat(city, \"&maxRows=10&username=\").concat(\"mohammadKh\");\n  console.log(city);\n  fetch(url).then(function (response) {\n    if (!response.ok) {\n      throw new Error(\"Network response was not ok \" + response.statusText);\n    }\n    return response.json();\n  }).then(function (data) {\n    var _data$geonames$, _data$geonames$2, _data$geonames$3;\n    var tripDateStart = document.getElementById(\"trip-date\").value;\n    var tripDateEnd = document.getElementById(\"end-date\").value;\n    var countryName = data === null || data === void 0 || (_data$geonames$ = data.geonames[0]) === null || _data$geonames$ === void 0 ? void 0 : _data$geonames$.countryName;\n    var location_latitude = data === null || data === void 0 || (_data$geonames$2 = data.geonames[0]) === null || _data$geonames$2 === void 0 ? void 0 : _data$geonames$2.lat;\n    var location_longitude = data === null || data === void 0 || (_data$geonames$3 = data.geonames[0]) === null || _data$geonames$3 === void 0 ? void 0 : _data$geonames$3.lng;\n    var trip = {\n      city: city,\n      country: countryName,\n      latitude: location_latitude,\n      longitude: location_longitude,\n      date: tripDateStart,\n      endDate: tripDateEnd\n    };\n    var saved = false;\n    var id = trip.id;\n    updateUI(trip, saved, id);\n  })[\"catch\"](function (error) {\n    console.error(\"There has been a problem with your fetch operation:\", error);\n  });\n});\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  fetch(\"http://localhost:3000/all\").then(function (response) {\n    if (!response.ok) {\n      throw new Error(\"Network response was not ok \" + response.statusText);\n    }\n    return response.json();\n  }).then(function (data) {\n    data.forEach(function (trip) {\n      var saved = true;\n      var id = trip.id;\n      updateUI(trip, saved, id);\n    });\n  })[\"catch\"](function (error) {\n    console.error(\"Error fetching trips:\", error);\n  });\n});\nfunction fetchImageURL(_x, _x2) {\n  return _fetchImageURL.apply(this, arguments);\n}\nfunction _fetchImageURL() {\n  _fetchImageURL = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(city, country) {\n    var pixabayKey, imageFetchURL, response, data;\n    return _regeneratorRuntime().wrap(function _callee2$(_context2) {\n      while (1) switch (_context2.prev = _context2.next) {\n        case 0:\n          pixabayKey = \"45573088-db42f58058c385fefc00094ce\";\n          imageFetchURL = \"https://pixabay.com/api/?key=\".concat(pixabayKey, \"&q=Tourist+places+in+\").concat(city, \"+\").concat(country, \"&image_type=photo\");\n          _context2.prev = 2;\n          _context2.next = 5;\n          return fetch(imageFetchURL);\n        case 5:\n          response = _context2.sent;\n          if (response.ok) {\n            _context2.next = 8;\n            break;\n          }\n          throw new Error(\"Network response was not ok \" + response.statusText);\n        case 8:\n          _context2.next = 10;\n          return response.json();\n        case 10:\n          data = _context2.sent;\n          if (!(data.hits.length > 0)) {\n            _context2.next = 15;\n            break;\n          }\n          return _context2.abrupt(\"return\", data.hits[0].largeImageURL);\n        case 15:\n          console.log(\"No image found for this city.\");\n          return _context2.abrupt(\"return\", null);\n        case 17:\n          _context2.next = 23;\n          break;\n        case 19:\n          _context2.prev = 19;\n          _context2.t0 = _context2[\"catch\"](2);\n          console.error(\"There has been a problem with your fetch operation:\", _context2.t0);\n          return _context2.abrupt(\"return\", null);\n        case 23:\n        case \"end\":\n          return _context2.stop();\n      }\n    }, _callee2, null, [[2, 19]]);\n  }));\n  return _fetchImageURL.apply(this, arguments);\n}\nfunction fetchWeatherStatus(_x3, _x4) {\n  return _fetchWeatherStatus.apply(this, arguments);\n}\nfunction _fetchWeatherStatus() {\n  _fetchWeatherStatus = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_long, lat) {\n    var weatherbitKey, WeatherFetchUrl, response, data;\n    return _regeneratorRuntime().wrap(function _callee3$(_context3) {\n      while (1) switch (_context3.prev = _context3.next) {\n        case 0:\n          weatherbitKey = \"9d5f0f78c6f5440a96c2191e825e0ff4\"; // Your API key\n          WeatherFetchUrl = \"https://api.weatherbit.io/v2.0/forecast/daily?lat=\".concat(lat, \"&lon=\").concat(_long, \"&days=7&key=\").concat(weatherbitKey);\n          _context3.prev = 2;\n          _context3.next = 5;\n          return fetch(WeatherFetchUrl);\n        case 5:\n          response = _context3.sent;\n          if (response.ok) {\n            _context3.next = 8;\n            break;\n          }\n          throw new Error(\"Network response was not ok \" + response.statusText);\n        case 8:\n          _context3.next = 10;\n          return response.json();\n        case 10:\n          data = _context3.sent;\n          console.log(data);\n          return _context3.abrupt(\"return\", data);\n        case 15:\n          _context3.prev = 15;\n          _context3.t0 = _context3[\"catch\"](2);\n          console.error(\"There has been a problem with your fetch operation:\", _context3.t0);\n          return _context3.abrupt(\"return\", null);\n        case 19:\n        case \"end\":\n          return _context3.stop();\n      }\n    }, _callee3, null, [[2, 15]]);\n  }));\n  return _fetchWeatherStatus.apply(this, arguments);\n}\nfunction updateUI(_x5, _x6, _x7) {\n  return _updateUI.apply(this, arguments);\n}\nfunction _updateUI() {\n  _updateUI = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(trip, saved, id) {\n    var _weather$data$daysAwa, _weather$data$daysAwa2, _weather$data$daysAwa3, _weather$data$daysAwa4, _tripCard$querySelect;\n    var tripCard, tripDate, endDate, currentDate, daysAway, triplength, imageurl, weather;\n    return _regeneratorRuntime().wrap(function _callee4$(_context4) {\n      while (1) switch (_context4.prev = _context4.next) {\n        case 0:\n          console.log(trip);\n          tripCard = document.createElement(\"div\");\n          tripCard.className = \"trip-card\";\n          tripDate = new Date(trip.date);\n          endDate = new Date(trip.endDate);\n          currentDate = new Date();\n          daysAway = Client.calculateDaysDiff(currentDate, trip.date);\n          triplength = Client.calculateDaysDiff(trip.date, trip.endDate); // Fetch image URL\n          _context4.next = 10;\n          return fetchImageURL(trip.city, trip.country);\n        case 10:\n          imageurl = _context4.sent;\n          _context4.next = 13;\n          return fetchWeatherStatus(trip.longitude, trip.latitude);\n        case 13:\n          weather = _context4.sent;\n          tripCard.innerHTML = \"\\n    <img\\n      src=\\\"\".concat(imageurl, \"\\\"\\n      alt=\\\"\").concat(trip.city, \", \").concat(trip.country, \"\\\"\\n      class=\\\"trip-image\\\"\\n    />\\n    <div class=\\\"trip-details\\\">\\n      <p><strong>My trip to:</strong> \").concat(trip.city, \", \").concat(trip.country, \"</p>\\n      <p><strong>Departing:</strong> \").concat(trip.date, \" <strong>to:</strong> \").concat(trip.endDate, \"</p>\\n      <p><strong>Trip length:</strong> \").concat(triplength, \" days</p>\\n      <div class=\\\"trip-buttons\\\">\\n        \").concat(saved ? \"<button class=\\\"remove-trip\\\">Remove Trip</button>\" : \"<button class=\\\"save-trip\\\">Save Trip</button>\", \"\\n      </div>\\n      <p class=\\\"trip-info\\\">\").concat(trip.city, \", \").concat(trip.country, \" is \").concat(daysAway, \" days away</p>\\n   \").concat(daysAway < 7 && daysAway > 0 ? \"<p class=\\\"trip-weather\\\">\\n        Typical weather in \".concat(weather === null || weather === void 0 || (_weather$data$daysAwa = weather.data[daysAway]) === null || _weather$data$daysAwa === void 0 ? void 0 : _weather$data$daysAwa.datetime, \" is:<br />\\n        max tempreture - \").concat(weather === null || weather === void 0 || (_weather$data$daysAwa2 = weather.data[daysAway]) === null || _weather$data$daysAwa2 === void 0 ? void 0 : _weather$data$daysAwa2.app_max_temp, \" min temp - \").concat(weather === null || weather === void 0 || (_weather$data$daysAwa3 = weather.data[daysAway]) === null || _weather$data$daysAwa3 === void 0 ? void 0 : _weather$data$daysAwa3.app_min_temp, \"<br />\\n        \").concat(weather === null || weather === void 0 || (_weather$data$daysAwa4 = weather.data[daysAway]) === null || _weather$data$daysAwa4 === void 0 || (_weather$data$daysAwa4 = _weather$data$daysAwa4.weather) === null || _weather$data$daysAwa4 === void 0 ? void 0 : _weather$data$daysAwa4.description, \"\\n      </p>\") : \"<p>whether appear for 7 days or less\", \"\\n      <div class=\\\"list\\\">\\n        <div class=\\\"list-item\\\" id=\\\"add-item\\\">\\n          <p>Add to-do item<span>+</span></p>\\n        </div>\\n        \").concat(trip.list ? trip.list.map(function (item) {\n            return \"<div class=\\\"list-item\\\"><p>\".concat(item, \"</p></div>\");\n          }).join(\"\") : \"\", \"\\n       \\n      </div>\\n    </div>\\n  \");\n          document.getElementById(\"travel-cont\").appendChild(tripCard);\n          (_tripCard$querySelect = tripCard.querySelector(\".save-trip\")) === null || _tripCard$querySelect === void 0 || _tripCard$querySelect.addEventListener(\"click\", function () {\n            var listItems = Array.from(tripCard.querySelectorAll(\".list-item p\")).filter(function (item, index) {\n              return index > 0;\n            }) // Skip the first item\n            .map(function (item) {\n              return item.textContent;\n            });\n            var tripData = {\n              city: trip.city,\n              country: trip.country,\n              latitude: trip.latitude,\n              longitude: trip.longitude,\n              date: trip.date,\n              endDate: trip.endDate,\n              list: listItems\n            };\n            console.log(tripData);\n            fetch(\"http://localhost:3000/add\", {\n              method: \"POST\",\n              headers: {\n                \"Content-Type\": \"application/json\"\n              },\n              body: JSON.stringify(tripData)\n            }).then(function (response) {\n              return response.json();\n            }).then(function (data) {\n              console.log(\"Trip saved:\", data);\n              id = data.id;\n              tripCard.querySelector(\".trip-buttons\").innerHTML = \"\\n          <button class=\\\"remove-trip\\\">Remove Trip</button>\\n        \";\n              addRemoveTripListener(tripCard, data.id);\n            })[\"catch\"](function (error) {\n              console.error(\"Error saving trip:\", error);\n            });\n          });\n          tripCard.querySelector(\".list-item\").addEventListener(\"click\", function () {\n            var newItemText = prompt(\"Enter a new to-do item:\");\n            if (newItemText) {\n              var newListItem = document.createElement(\"div\");\n              newListItem.className = \"list-item\";\n              var newP = document.createElement(\"p\");\n              newP.textContent = newItemText;\n              newListItem.appendChild(newP);\n              tripCard.querySelector(\".list\").appendChild(newListItem);\n              if (id != null) {\n                tripCard.querySelector(\".trip-buttons\").innerHTML = \"\\n        <button class=\\\"update-list\\\">update Trip</button>\\n      \";\n                updateTrip(tripCard, trip, id);\n              }\n            }\n          });\n          if (saved) {\n            addRemoveTripListener(tripCard, trip.id);\n          }\n        case 19:\n        case \"end\":\n          return _context4.stop();\n      }\n    }, _callee4);\n  }));\n  return _updateUI.apply(this, arguments);\n}\nfunction addRemoveTripListener(tripCard, tripId) {\n  if (!tripId) {\n    throw new Error(\"tripId must be found\");\n  }\n  tripCard.querySelector(\".remove-trip\").addEventListener(\"click\", function () {\n    fetch(\"http://localhost:3000/delete/\".concat(tripId), {\n      method: \"DELETE\"\n    }).then(function (response) {\n      if (!response.ok) {\n        throw new Error(\"Network response was not ok \" + response.statusText);\n      }\n      console.log(\"Trip with ID \".concat(tripId, \" removed.\"));\n      tripCard.remove();\n    })[\"catch\"](function (error) {\n      console.error(\"Error removing trip:\", error);\n    });\n  });\n}\nfunction updateTrip(tripCard, trip, id) {\n  tripCard.querySelector(\".update-list\").addEventListener(\"click\", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {\n    var listItems, updatedTripData, response, data;\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          listItems = Array.from(tripCard.querySelectorAll(\".list-item p\")).filter(function (item, index) {\n            return index > 0;\n          }) // Skip the first item\n          .map(function (item) {\n            return item.textContent;\n          });\n          updatedTripData = _objectSpread(_objectSpread({}, trip), {}, {\n            list: listItems\n          });\n          _context.prev = 2;\n          _context.next = 5;\n          return fetch(\"http://localhost:3000/update/\".concat(id), {\n            method: \"PUT\",\n            headers: {\n              \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(updatedTripData)\n          });\n        case 5:\n          response = _context.sent;\n          if (response.ok) {\n            _context.next = 8;\n            break;\n          }\n          throw new Error(\"Network response was not ok \" + response.statusText);\n        case 8:\n          _context.next = 10;\n          return response.json();\n        case 10:\n          data = _context.sent;\n          tripCard.querySelector(\".trip-buttons\").innerHTML = \"\\n      <button class=\\\"remove-trip\\\">Remove Trip</button>\\n    \";\n          addRemoveTripListener(tripCard, data.id);\n          console.log(\"Trip updated:\", data);\n          _context.next = 19;\n          break;\n        case 16:\n          _context.prev = 16;\n          _context.t0 = _context[\"catch\"](2);\n          console.error(\"Error updating trip:\", _context.t0);\n        case 19:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee, null, [[2, 16]]);\n  })));\n}\n\n//# sourceURL=webpack://Client/./src/client/js/app.js?");

/***/ }),

/***/ "./src/client/js/calculateDaysDiff.js":
/*!********************************************!*\
  !*** ./src/client/js/calculateDaysDiff.js ***!
  \********************************************/
/***/ ((module) => {

eval("function calculateDaysDiff(date1, date2) {\n  var startDate = new Date(date1);\n  var endDate = new Date(date2);\n  var timeDiff = endDate - startDate;\n  var daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));\n  return daysDiff;\n}\nmodule.exports = {\n  calculateDaysDiff: calculateDaysDiff\n};\n\n//# sourceURL=webpack://Client/./src/client/js/calculateDaysDiff.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/style.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/style.scss ***!
  \*******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/travel.jpeg */ \"./src/client/assets/images/travel.jpeg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  height: 100vh;\n  background-color: #f8f8f8;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  overflow-y: auto; }\n\n.travel-planner {\n  background-color: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  width: 600px;\n  margin-top: 20px;\n  /* Added margin to prevent it from being at the top */ }\n\nh1 {\n  font-size: 24px;\n  padding: 16px;\n  text-align: center;\n  margin: 0;\n  border-bottom: 1px solid #ddd; }\n\n.trip-card {\n  display: flex;\n  padding: 16px;\n  background-color: #fff;\n  border-bottom: 1px solid #ddd;\n  /* Added border to separate trip cards */ }\n\n.trip-image {\n  width: 150px;\n  height: 150px;\n  border-radius: 8px;\n  margin-right: 16px; }\n\n.trip-details {\n  flex: 1; }\n\n.trip-details p {\n  margin: 4px 0;\n  font-size: 14px;\n  color: #333; }\n\n.trip-buttons {\n  margin-top: 8px;\n  margin-bottom: 8px; }\n\n.trip-buttons button {\n  padding: 8px 12px;\n  margin-right: 8px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer; }\n\n.save-trip {\n  background-color: #4caf50;\n  color: white; }\n\n.remove-trip {\n  background-color: #f8d7da;\n  color: #721c24; }\n\n.trip-info {\n  margin-top: 8px;\n  font-size: 14px;\n  color: #888; }\n\n.trip-weather {\n  font-size: 14px;\n  color: #888; }\n\n.add-trip {\n  display: flex;\n  align-items: flex-start;\n  margin: 10px;\n  flex-direction: column; }\n  .add-trip .add-trip-element {\n    margin-top: 10px; }\n  .add-trip .add-trip-button {\n    padding: 8px 12px;\n    margin-right: 8px;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    background-color: #4caf50;\n    margin-top: 10px;\n    color: white; }\n\n.list {\n  display: flex;\n  align-items: start;\n  flex-wrap: wrap; }\n  .list .list-item {\n    background-color: #e4e4e4;\n    border-radius: 10px;\n    display: flex;\n    flex: 0 0 auto;\n    width: auto;\n    align-items: center;\n    margin-left: 6px;\n    margin-right: 6px;\n    padding-left: 6px;\n    padding-right: 6px;\n    margin-top: 5px; }\n    .list .list-item p {\n      display: flex;\n      align-items: center; }\n      .list .list-item p span {\n        background-color: white;\n        padding-left: 5px;\n        padding-right: 5px;\n        margin-left: 10px;\n        margin-right: 3px;\n        border-radius: 50%; }\n\n#add-item {\n  cursor: pointer; }\n\n@media (max-width: 480px) {\n  .travel-planner {\n    width: 300px; }\n  .trip-card {\n    flex-direction: column;\n    align-items: center; } }\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Client/./src/client/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://Client/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://Client/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://Client/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/client/styles/style.scss":
/*!**************************************!*\
  !*** ./src/client/styles/style.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://Client/./src/client/styles/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Client/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://Client/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://Client/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://Client/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://Client/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://Client/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/client/assets/images/travel.jpeg":
/*!**********************************************!*\
  !*** ./src/client/assets/images/travel.jpeg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d93c56945056c1346c72.jpeg\";\n\n//# sourceURL=webpack://Client/./src/client/assets/images/travel.jpeg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/client/index.js");
/******/ 	Client = __webpack_exports__;
/******/ 	
/******/ })()
;