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

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/script/dom/toggle-detailed.js":
/*!*******************************************!*\
  !*** ./src/script/dom/toggle-detailed.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toggleDetailWindow)\n/* harmony export */ });\nfunction toggleDetailWindow() {\n  if (!document.querySelector(\".detailed\").style.display || document.querySelector(\".detailed\").style.display == \"none\") {\n    document.querySelector(\".detailed\").style.display = \"flex\";\n    document.querySelector(\"main\").style.display = \"none\";\n    document.querySelector(\".extended\").style.display = \"none\";\n    document.querySelector(\".gradient\").style.bottom = 0;\n    document.querySelector(\".gradient\").style.backgroundImage = \"none\";\n    document.querySelector(\".gradient\").style.webkitMaskImage = \"none\";\n    document.querySelector(\".all\").style.backgroundImage = \"linear-gradient(315deg,#ff3cac 0%, #784ba0 50%, #2b86c5 100% )\";\n  } else {\n    document.querySelector(\".detailed\").style.display = \"none\";\n    document.querySelector(\"main\").style.display = \"block\";\n    document.querySelector(\".extended\").style.display = \"block\";\n    document.querySelector(\".gradient\").style.bottom = \"-25px\";\n    document.querySelector(\".gradient\").style.webkitMaskImage = \"linear-gradient(rgba(0, 0, 0, 0.786) 60%, transparent)\";\n    document.querySelector(\".gradient\").style.backgroundImage = \"linear-gradient(315deg,#ff3cac 0%, #784ba0 50%, #2b86c5 100% )\";\n    document.querySelector(\".all\").style.backgroundImage = \"none\";\n  }\n}\n\n//# sourceURL=webpack://weather-app/./src/script/dom/toggle-detailed.js?");

/***/ }),

/***/ "./src/script/index.js":
/*!*****************************!*\
  !*** ./src/script/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/style.scss */ \"./src/style/style.scss\");\n/* harmony import */ var _modules_set_images_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/set-images.js */ \"./src/script/modules/set-images.js\");\n/* harmony import */ var _modules_get_current_weather_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/get-current-weather.js */ \"./src/script/modules/get-current-weather.js\");\n/* harmony import */ var _modules_get_direction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/get-direction.js */ \"./src/script/modules/get-direction.js\");\n/* harmony import */ var _modules_get_city_time_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/get-city-time.js */ \"./src/script/modules/get-city-time.js\");\n/* harmony import */ var _modules_convert_temp_scale_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/convert-temp-scale.js */ \"./src/script/modules/convert-temp-scale.js\");\n/* harmony import */ var _modules_three_day_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/three-day.js */ \"./src/script/modules/three-day.js\");\n/* harmony import */ var _modules_three_hour_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/three-hour.js */ \"./src/script/modules/three-hour.js\");\n/* harmony import */ var _modules_get_forecast_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/get-forecast.js */ \"./src/script/modules/get-forecast.js\");\n/* harmony import */ var _modules_set_icon_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/set-icon.js */ \"./src/script/modules/set-icon.js\");\n/* harmony import */ var _dom_toggle_detailed_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dom/toggle-detailed.js */ \"./src/script/dom/toggle-detailed.js\");\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_set_images_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst searchbar = document.querySelector(\"input\");\nconst changeUnitButton = document.querySelector(\".unit\");\nconst expandButton = document.querySelector(\".expand\");\nconst compressButton = document.querySelector(\".compress\");\nconst jupiterLogo = document.querySelector(\".jupiter\");\nconst city = document.querySelector(\".lower h1\");\nconst temp = document.querySelector(\".weather h1\");\nconst extraData = document.querySelector(\".weather h2\");\nconst time = document.querySelector(\".time\");\nconst forecastCards = document.querySelector(\".extended\");\nlet unit = \"F\";\nlet displayedTemp;\nlet offset;\n\n(function refreshTime() {\n  time.innerText = (0,_modules_get_city_time_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(offset);\n  setTimeout(function () {\n    refreshTime();\n  }, 1000);\n})();\n\nsearchbar.addEventListener(\"keypress\", e => {\n  if (e.key == \"Enter\") {\n    // Get current weather data\n    (0,_modules_get_current_weather_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(unit, searchbar.value).then(obj => {\n      time.style.opacity = 1;\n      temp.style.opacity = 1;\n      forecastCards.style.display = \"block\";\n      console.log(obj);\n      city.innerText = obj.name;\n      displayedTemp = obj.main.temp;\n      temp.textContent = `${Math.round(obj.main.temp)}°`;\n      extraData.innerText = `Expect ${obj.weather[0].description} and ${Math.round(obj.wind.speed)}mph ${(0,_modules_get_direction_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(obj.wind.deg)} winds today.`;\n      offset = obj.timezone * 1000;\n    }); // Get forecast data\n\n    (0,_modules_get_current_weather_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(unit, searchbar.value).then(obj => {\n      return {\n        latitude: obj.coord.lat,\n        longitude: obj.coord.lon\n      };\n    }).then(coordinates => {\n      (0,_modules_get_forecast_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(unit, coordinates, \"h\").then(r => {\n        let hourlyTemps = r.hourly.temperature_2m;\n        let weathercodes = r.hourly.weathercode;\n        (0,_modules_get_forecast_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(unit, coordinates, \"d\").then(r => {\n          let threeDayForecast = (0,_modules_three_day_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(hourlyTemps, offset);\n          let threeHourForecast = (0,_modules_three_hour_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(hourlyTemps, weathercodes);\n          let hourlyCards = Array.from(document.querySelectorAll(\".hcard\"));\n          let dailyCards = Array.from(document.querySelectorAll(\".dcard\"));\n          let dailycodes = r.daily.weathercode;\n\n          for (let i = 0; i < 3; i++) {\n            let hcard = hourlyCards[i];\n            let hspan = hcard.querySelector(\"span\");\n            let hweathercode = threeHourForecast[i].weathercode;\n            (0,_modules_set_icon_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(hcard, hweathercode);\n            hspan.innerText = threeHourForecast[i].temperature + \"°\";\n            let dcard = dailyCards[i];\n            let dspans = dcard.querySelectorAll(\"span\");\n            let dweathercode = dailycodes[i + 1];\n            (0,_modules_set_icon_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(dcard, dweathercode);\n            dspans[0].innerText = Math.round(threeDayForecast[i].high) + \"°\";\n            dspans[1].innerText = Math.round(threeDayForecast[i].low) + \"°\";\n          }\n\n          console.log(r);\n        });\n      });\n    });\n    searchbar.value = \"\";\n    e.preventDefault();\n  }\n});\nchangeUnitButton.addEventListener(\"click\", () => {\n  let cardSpans = document.querySelectorAll(\".card span\");\n\n  if (unit == \"F\") {\n    changeUnitButton.innerText = \"°C\";\n    unit = \"C\";\n    displayedTemp = (0,_modules_convert_temp_scale_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"F\", displayedTemp);\n    temp.textContent = `${displayedTemp}°`;\n    cardSpans.forEach(span => {\n      let temp = parseInt(span.innerText);\n      let convertedTemp = (0,_modules_convert_temp_scale_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"F\", +temp);\n      span.innerText = convertedTemp + \"°\";\n    });\n  } else {\n    changeUnitButton.innerText = \"°F\";\n    unit = \"F\";\n    displayedTemp = (0,_modules_convert_temp_scale_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"C\", displayedTemp);\n    temp.textContent = `${displayedTemp}°`;\n    cardSpans.forEach(span => {\n      let temp = parseInt(span.innerText);\n      let convertedTemp = (0,_modules_convert_temp_scale_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"C\", +temp);\n      span.innerText = convertedTemp + \"°\";\n    });\n  }\n});\nexpandButton.onclick = _dom_toggle_detailed_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"];\ncompressButton.onclick = _dom_toggle_detailed_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"];\njupiterLogo.addEventListener(\"click\", () => {\n  window.location.reload();\n});\n\n//# sourceURL=webpack://weather-app/./src/script/index.js?");

/***/ }),

/***/ "./src/script/modules/convert-temp-scale.js":
/*!**************************************************!*\
  !*** ./src/script/modules/convert-temp-scale.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ convertTemperatureScale)\n/* harmony export */ });\nfunction convertTemperatureScale(currentUnit, temp) {\n  if (currentUnit == \"C\") {\n    return Math.round(temp * (9 / 5) + 32);\n  } else {\n    return Math.round((temp - 32) * (5 / 9));\n  }\n}\n\n//# sourceURL=webpack://weather-app/./src/script/modules/convert-temp-scale.js?");

/***/ }),

/***/ "./src/script/modules/get-city-time.js":
/*!*********************************************!*\
  !*** ./src/script/modules/get-city-time.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getCityTime)\n/* harmony export */ });\n/* harmony import */ var _utils_get_utc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/get-utc.js */ \"./src/script/utils/get-utc.js\");\n\nfunction getCityTime(offset) {\n  // Get city time\n  let cityTimeObj = new Date((0,_utils_get_utc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().getTime() + offset); // Manipulate data into string\n\n  let hrs;\n  let mins;\n  let meridiem;\n\n  if (cityTimeObj.getHours() > 12) {\n    hrs = cityTimeObj.getHours() - 12;\n    meridiem = \"PM\";\n  } else if (cityTimeObj.getHours() == 0) {\n    hrs = 12;\n    meridiem = \"AM\";\n  } else {\n    hrs = cityTimeObj.getHours();\n    meridiem = \"AM\";\n  }\n\n  if (cityTimeObj.getMinutes() < 10) {\n    mins = \"0\" + cityTimeObj.getMinutes();\n  } else {\n    mins = cityTimeObj.getMinutes();\n  }\n\n  return `${hrs}:${mins} ${meridiem}`;\n}\n\n//# sourceURL=webpack://weather-app/./src/script/modules/get-city-time.js?");

/***/ }),

/***/ "./src/script/modules/get-current-weather.js":
/*!***************************************************!*\
  !*** ./src/script/modules/get-current-weather.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getCurrentWeather)\n/* harmony export */ });\nasync function getCurrentWeather(units, city, country, state) {\n  const u = units == \"F\" ? \"imperial\" : \"metric\";\n  let response;\n\n  if (state) {\n    response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country},${state}&units=${u}&appid=1a96bd0316e7aa5f290b2d5c4f190c97`);\n  } else if (country) {\n    response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=${u}&appid=1a96bd0316e7aa5f290b2d5c4f190c97`);\n  } else {\n    response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${u}&appid=1a96bd0316e7aa5f290b2d5c4f190c97`).catch(\"Error\");\n  }\n\n  const jsonResponse = await response.json();\n  return jsonResponse;\n}\n\n//# sourceURL=webpack://weather-app/./src/script/modules/get-current-weather.js?");

/***/ }),

/***/ "./src/script/modules/get-direction.js":
/*!*********************************************!*\
  !*** ./src/script/modules/get-direction.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getDirection)\n/* harmony export */ });\nfunction getDirection(degrees) {\n  console.log(degrees);\n\n  if (degrees < 22.5) {\n    return \"north\";\n  } else if (degrees < 67.5) {\n    return \"north-east\";\n  } else if (degrees < 112.5) {\n    return \"east\";\n  } else if (degrees < 157.5) {\n    return \"south-east\";\n  } else if (degrees < 202.5) {\n    return \"south\";\n  } else if (degrees < 247.5) {\n    return \"south-west\";\n  } else if (degrees < 292.5) {\n    return \"west\";\n  } else if (degrees < 337.5) {\n    return \"north-west\";\n  } else {\n    return \"north\";\n  }\n}\n\n//# sourceURL=webpack://weather-app/./src/script/modules/get-direction.js?");

/***/ }),

/***/ "./src/script/modules/get-forecast.js":
/*!********************************************!*\
  !*** ./src/script/modules/get-forecast.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getForecastData)\n/* harmony export */ });\nasync function getForecastData(units, coords, t) {\n  let time;\n  let u;\n  t == \"h\" ? time = \"\" : time = \"&daily=weathercode&timezone=auto\";\n  units == \"F\" ? u = \"fahrenheit\" : u = \"celsius\";\n  const forecast = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&hourly=temperature_2m,weathercode&temperature_unit=${u}${time}`);\n  const jsonObject = await forecast.json();\n  return jsonObject;\n}\n\n//# sourceURL=webpack://weather-app/./src/script/modules/get-forecast.js?");

/***/ }),

/***/ "./src/script/modules/set-icon.js":
/*!****************************************!*\
  !*** ./src/script/modules/set-icon.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setWeatherIcon)\n/* harmony export */ });\n/* harmony import */ var _assets_icons_overcast_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/icons/overcast.png */ \"./src/assets/icons/overcast.png\");\n/* harmony import */ var _assets_icons_sun_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/icons/sun.png */ \"./src/assets/icons/sun.png\");\n/* harmony import */ var _assets_icons_storm_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/icons/storm.png */ \"./src/assets/icons/storm.png\");\n/* harmony import */ var _assets_icons_snowy_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/icons/snowy.png */ \"./src/assets/icons/snowy.png\");\n/* harmony import */ var _assets_icons_drizzle_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/icons/drizzle.png */ \"./src/assets/icons/drizzle.png\");\n/* harmony import */ var _assets_icons_mist_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/icons/mist.png */ \"./src/assets/icons/mist.png\");\n/* harmony import */ var _assets_icons_snowflake_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/icons/snowflake.png */ \"./src/assets/icons/snowflake.png\");\n/* harmony import */ var _assets_icons_rain_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/icons/rain.png */ \"./src/assets/icons/rain.png\");\n\n\n\n\n\n\n\n\nfunction setWeatherIcon(card, weathercode) {\n  let img = card.querySelector(\"img\");\n\n  switch (weathercode) {\n    case 0:\n      img.src = _assets_icons_sun_png__WEBPACK_IMPORTED_MODULE_1__;\n      break;\n\n    case 1:\n    case 2:\n    case 3:\n      img.src = _assets_icons_overcast_png__WEBPACK_IMPORTED_MODULE_0__;\n      break;\n\n    case 45:\n    case 48:\n      img.src = _assets_icons_mist_png__WEBPACK_IMPORTED_MODULE_5__;\n      break;\n\n    case 51:\n    case 53:\n    case 55:\n    case 56:\n    case 57:\n      img.src = _assets_icons_drizzle_png__WEBPACK_IMPORTED_MODULE_4__;\n      break;\n\n    case 61:\n    case 63:\n    case 65:\n    case 80:\n    case 81:\n    case 82:\n      img.src = _assets_icons_rain_png__WEBPACK_IMPORTED_MODULE_7__;\n      break;\n\n    case 66:\n    case 67:\n      img.src = _assets_icons_snowflake_png__WEBPACK_IMPORTED_MODULE_6__;\n      break;\n\n    case 71:\n    case 73:\n    case 75:\n    case 77:\n      img.src = _assets_icons_snowy_png__WEBPACK_IMPORTED_MODULE_3__;\n      break;\n\n    case 95:\n    case 96:\n    case 99:\n      img.src = _assets_icons_storm_png__WEBPACK_IMPORTED_MODULE_2__;\n      break;\n  }\n}\n\n//# sourceURL=webpack://weather-app/./src/script/modules/set-icon.js?");

/***/ }),

/***/ "./src/script/modules/set-images.js":
/*!******************************************!*\
  !*** ./src/script/modules/set-images.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setImages)\n/* harmony export */ });\n/* harmony import */ var _assets_icons_jupiter_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/icons/jupiter.png */ \"./src/assets/icons/jupiter.png\");\n/* harmony import */ var _assets_art_work_in_progress_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/art/work-in-progress.png */ \"./src/assets/art/work-in-progress.png\");\n\n\nfunction setImages() {\n  document.querySelector(\".jupiter\").src = _assets_icons_jupiter_png__WEBPACK_IMPORTED_MODULE_0__;\n  document.querySelector(\".progress\").src = _assets_art_work_in_progress_png__WEBPACK_IMPORTED_MODULE_1__;\n}\n\n//# sourceURL=webpack://weather-app/./src/script/modules/set-images.js?");

/***/ }),

/***/ "./src/script/modules/three-day.js":
/*!*****************************************!*\
  !*** ./src/script/modules/three-day.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getThreeDayForecast)\n/* harmony export */ });\n/* harmony import */ var _utils_get_utc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/get-utc.js */ \"./src/script/utils/get-utc.js\");\n/* harmony import */ var _utils_get_high_low_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/get-high-low.js */ \"./src/script/utils/get-high-low.js\");\n\n\nfunction getThreeDayForecast(arr, offset) {\n  let currentHourIndex = (0,_utils_get_utc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().getHours();\n  let UTC = (0,_utils_get_utc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().getTime();\n  let cityDate = new Date(UTC + offset);\n  let currentHr = cityDate.getHours();\n  let hrsTillNewDay = 24 - currentHr;\n  let tomorrowStart = currentHourIndex + hrsTillNewDay;\n  let tomorrowEnd = currentHourIndex + hrsTillNewDay + 24;\n  let twoDayEnd = tomorrowEnd + 24;\n  let threeDayEnd = twoDayEnd + 24;\n  let dayOne = (0,_utils_get_high_low_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr, tomorrowStart, tomorrowEnd);\n  let dayTwo = (0,_utils_get_high_low_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr, tomorrowEnd, twoDayEnd);\n  let dayThree = (0,_utils_get_high_low_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr, twoDayEnd, threeDayEnd);\n  return [{\n    high: dayOne.high,\n    low: dayOne.low\n  }, {\n    high: dayTwo.high,\n    low: dayTwo.low\n  }, {\n    high: dayThree.high,\n    low: dayThree.low\n  }];\n}\n\n//# sourceURL=webpack://weather-app/./src/script/modules/three-day.js?");

/***/ }),

/***/ "./src/script/modules/three-hour.js":
/*!******************************************!*\
  !*** ./src/script/modules/three-hour.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getThreeHourForecast)\n/* harmony export */ });\n/* harmony import */ var _utils_get_utc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/get-utc.js */ \"./src/script/utils/get-utc.js\");\n\nfunction getThreeHourForecast(arr, wcodes) {\n  let currentHourIndex = (0,_utils_get_utc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().getHours();\n\n  for (let i = 0; i < arr.length; i++) {\n    arr[i] = Math.round(arr[i]);\n  }\n\n  return [{\n    temperature: arr[currentHourIndex + 1],\n    weathercode: wcodes[currentHourIndex + 1]\n  }, {\n    temperature: arr[currentHourIndex + 2],\n    weathercode: wcodes[currentHourIndex + 2]\n  }, {\n    temperature: arr[currentHourIndex + 3],\n    weathercode: wcodes[currentHourIndex + 3]\n  }];\n}\n\n//# sourceURL=webpack://weather-app/./src/script/modules/three-hour.js?");

/***/ }),

/***/ "./src/script/utils/get-high-low.js":
/*!******************************************!*\
  !*** ./src/script/utils/get-high-low.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getHighLow)\n/* harmony export */ });\n// Return an object with the highest and lowest values between specifed start and end indices in a numerical array.\nfunction getHighLow(arr, start, end) {\n  let high = arr[start];\n  let low = arr[start];\n\n  for (let i = start; i < end; i++) {\n    if (arr[i] > high) {\n      high = arr[i];\n    } else if (arr[i] < low) {\n      low = arr[i];\n    }\n  }\n\n  return {\n    high,\n    low\n  };\n}\n\n//# sourceURL=webpack://weather-app/./src/script/utils/get-high-low.js?");

/***/ }),

/***/ "./src/script/utils/get-utc.js":
/*!*************************************!*\
  !*** ./src/script/utils/get-utc.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getUTC)\n/* harmony export */ });\nfunction getUTC() {\n  let date = new Date();\n  return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());\n}\n\n//# sourceURL=webpack://weather-app/./src/script/utils/get-utc.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/art/valley.jpg */ \"./src/assets/art/valley.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n  font-family: \\\"Poppins\\\";\\n}\\n\\nhtml,\\nbody,\\n.all {\\n  height: 100%;\\n}\\n\\n.all {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\nheader {\\n  display: flex;\\n  padding: 15px;\\n  gap: 20px;\\n  flex-direction: column;\\n  position: relative;\\n  color: white;\\n}\\nheader .upper,\\nheader .lower {\\n  z-index: 1;\\n  display: flex;\\n  flex-direction: row;\\n}\\n\\n.gradient {\\n  position: absolute;\\n  top: 0;\\n  bottom: -25px;\\n  right: 0;\\n  left: 0;\\n  background-image: linear-gradient(315deg, #ff3cac 0%, #784ba0 50%, #2b86c5 100%);\\n  -webkit-mask-image: linear-gradient(rgba(0, 0, 0, 0.786) 60%, transparent);\\n  mask-image: linear-gradient(rgba(0, 0, 0, 0.784) 60%, transparent);\\n}\\n\\n.upper {\\n  padding: 0px 10px;\\n}\\n.upper .logo {\\n  user-select: none;\\n  flex-grow: 1;\\n  display: flex;\\n  gap: 10px;\\n}\\n.upper .logo img {\\n  width: 50px;\\n  transition: 300ms;\\n}\\n.upper .logo img:hover {\\n  color: rgb(224, 219, 219);\\n  cursor: pointer;\\n  transform: scale(1.2);\\n}\\n.upper .unit {\\n  position: absolute;\\n  margin-bottom: 10px;\\n  padding: 0 15px;\\n  font-size: 2.5rem;\\n  right: 5px;\\n  user-select: none;\\n  top: 7px;\\n  cursor: pointer;\\n}\\n.upper .unit:hover {\\n  color: rgb(219, 219, 219);\\n}\\n\\n.lower {\\n  justify-content: center;\\n  gap: 30px;\\n}\\n.lower h1 {\\n  font-size: 4rem;\\n  text-align: center;\\n}\\n.lower i {\\n  font-size: 4rem;\\n}\\n\\n.upper input {\\n  border: solid 3px white;\\n  background-color: rgb(116, 26, 126);\\n  color: white;\\n  padding: 5px 15px;\\n  border-radius: 25px;\\n  font-size: 1rem;\\n  width: min(30vw, 350px);\\n  margin-right: 50px;\\n}\\n.upper input:focus {\\n  outline: none;\\n}\\n.upper input::placeholder {\\n  color: rgba(255, 255, 255, 0.482);\\n}\\n\\ni {\\n  align-self: center;\\n}\\n\\nbody {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n  background-position: center;\\n}\\n\\nmain {\\n  flex: 1;\\n}\\n\\n.time {\\n  color: white;\\n  text-align: center;\\n  font-size: 2.5rem;\\n  text-shadow: 1px 1px 15px black;\\n  opacity: 0;\\n}\\n\\n.content {\\n  display: flex;\\n  align-items: center;\\n  color: white;\\n}\\n\\n.weather {\\n  padding: 0 10%;\\n}\\n.weather h1 {\\n  text-shadow: 1px 1px 15px black;\\n  font-size: 10rem;\\n  opacity: 0;\\n}\\n.weather h2 {\\n  margin-top: -30px;\\n  font-size: 2rem;\\n  text-shadow: 1px 1px 15px black;\\n  font-style: italic;\\n  width: 600px;\\n}\\n\\n.status {\\n  flex: 1;\\n  text-align: center;\\n  font-style: italic;\\n  text-shadow: 1px 1px 15px black;\\n  color: rgba(255, 255, 255, 0.982);\\n}\\n\\n.extended {\\n  display: none;\\n  height: 150px;\\n  backdrop-filter: blur(3px);\\n}\\n.extended .cards {\\n  display: flex;\\n  justify-content: center;\\n  gap: 25px;\\n  width: 100%;\\n  padding: 10px;\\n}\\n.extended .cards #hour3 {\\n  margin-right: 50px;\\n}\\n\\n.card {\\n  padding: 25px;\\n  height: 125px;\\n  width: max(80px, 50%);\\n  background-color: rgba(255, 255, 255, 0.512);\\n  border-radius: 25px;\\n  display: flex;\\n  align-items: center;\\n  gap: 10px;\\n  position: relative;\\n}\\n.card img {\\n  max-width: 60%;\\n}\\n.card span {\\n  font-size: 2.5rem;\\n  color: white;\\n  text-shadow: 3px 3px 10px black;\\n}\\n.card p {\\n  position: absolute;\\n  top: -30px;\\n  font-size: 1.5rem;\\n  left: 10px;\\n  color: white;\\n  text-shadow: 3px 3px 10px black;\\n}\\n\\n.expand {\\n  position: absolute;\\n  top: 20%;\\n  left: 50%;\\n  transform: translateX(-50%);\\n  padding: 15px;\\n  border-radius: 50%;\\n  cursor: pointer;\\n  transition: 200ms;\\n}\\n.expand i {\\n  font-size: 3rem;\\n  color: white;\\n  text-shadow: 3px 3px 10px black;\\n}\\n.expand:hover {\\n  transform: translateX(-50%) scale(1.1) translateY(-10px);\\n}\\n\\n@media only screen and (max-width: 900px) {\\n  #hour3,\\n#day3 {\\n    display: none;\\n  }\\n  #hour2 {\\n    margin-right: 50px;\\n  }\\n}\\n@media only screen and (max-width: 1300px) {\\n  .card span {\\n    font-size: 1.5rem;\\n  }\\n}\\n.detailed {\\n  flex-grow: 1;\\n  display: none;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 25px;\\n}\\n\\n.compress {\\n  display: flex;\\n  justify-content: center;\\n  color: white;\\n  font-size: 3rem;\\n  cursor: pointer;\\n}\\n.compress i {\\n  transform: rotate(180deg);\\n  text-shadow: 3px 3px 10px black;\\n  transition: 200ms;\\n  margin-top: -20px;\\n}\\n.compress i:hover {\\n  transform: rotate(180deg) scale(1.2);\\n}\\n\\n.info {\\n  border-radius: 25px;\\n  border: solid 1px rgba(255, 255, 255, 0.1);\\n  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);\\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.488), transparent);\\n  width: 80%;\\n  height: 500px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.info img {\\n  max-height: 80%;\\n}\\n\\n@media only screen and (max-width: 1300px) {\\n  .info {\\n    flex: 1;\\n    width: 100%;\\n    border-radius: 0;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/style/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/art/valley.jpg":
/*!***********************************!*\
  !*** ./src/assets/art/valley.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./assets/valley.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/art/valley.jpg?");

/***/ }),

/***/ "./src/assets/art/work-in-progress.png":
/*!*********************************************!*\
  !*** ./src/assets/art/work-in-progress.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./assets/work-in-progress.png\";\n\n//# sourceURL=webpack://weather-app/./src/assets/art/work-in-progress.png?");

/***/ }),

/***/ "./src/assets/icons/drizzle.png":
/*!**************************************!*\
  !*** ./src/assets/icons/drizzle.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./assets/drizzle.png\";\n\n//# sourceURL=webpack://weather-app/./src/assets/icons/drizzle.png?");

/***/ }),

/***/ "./src/assets/icons/jupiter.png":
/*!**************************************!*\
  !*** ./src/assets/icons/jupiter.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./assets/jupiter.png\";\n\n//# sourceURL=webpack://weather-app/./src/assets/icons/jupiter.png?");

/***/ }),

/***/ "./src/assets/icons/mist.png":
/*!***********************************!*\
  !*** ./src/assets/icons/mist.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./assets/mist.png\";\n\n//# sourceURL=webpack://weather-app/./src/assets/icons/mist.png?");

/***/ }),

/***/ "./src/assets/icons/overcast.png":
/*!***************************************!*\
  !*** ./src/assets/icons/overcast.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./assets/overcast.png\";\n\n//# sourceURL=webpack://weather-app/./src/assets/icons/overcast.png?");

/***/ }),

/***/ "./src/assets/icons/rain.png":
/*!***********************************!*\
  !*** ./src/assets/icons/rain.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./assets/rain.png\";\n\n//# sourceURL=webpack://weather-app/./src/assets/icons/rain.png?");

/***/ }),

/***/ "./src/assets/icons/snowflake.png":
/*!****************************************!*\
  !*** ./src/assets/icons/snowflake.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./assets/snowflake.png\";\n\n//# sourceURL=webpack://weather-app/./src/assets/icons/snowflake.png?");

/***/ }),

/***/ "./src/assets/icons/snowy.png":
/*!************************************!*\
  !*** ./src/assets/icons/snowy.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./assets/snowy.png\";\n\n//# sourceURL=webpack://weather-app/./src/assets/icons/snowy.png?");

/***/ }),

/***/ "./src/assets/icons/storm.png":
/*!************************************!*\
  !*** ./src/assets/icons/storm.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./assets/storm.png\";\n\n//# sourceURL=webpack://weather-app/./src/assets/icons/storm.png?");

/***/ }),

/***/ "./src/assets/icons/sun.png":
/*!**********************************!*\
  !*** ./src/assets/icons/sun.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./assets/sun.png\";\n\n//# sourceURL=webpack://weather-app/./src/assets/icons/sun.png?");

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script/index.js");
/******/ 	
/******/ })()
;