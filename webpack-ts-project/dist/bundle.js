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

/***/ "./src/index.ts"
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
() {

eval("{\n// 1️⃣ Элементүүдийг олох\nvar section = document.getElementById(\"section-1\");\nvar button = document.querySelector(\"button\");\nvar form = document.getElementById(\"user-form\");\nvar input = document.getElementById(\"user-input\");\n// 2️⃣ Товч дээр дарсан үед div текстийг өөрчлөх\nbutton === null || button === void 0 ? void 0 : button.addEventListener(\"click\", function () {\n    if (section) {\n        section.textContent = \"Та товч дарсан байна!\";\n    }\n    console.log(\"Текст өөрчлөгдсөн эсэхийг шалгаж байна:\", section === null || section === void 0 ? void 0 : section.textContent);\n});\n// 3️⃣ Form submit хийх үед input утгыг console-д хэвлэх\nform === null || form === void 0 ? void 0 : form.addEventListener(\"submit\", function (event) {\n    event.preventDefault(); // Хуудас reload хийхээс сэргийлнэ\n    console.log(\"Хэрэглэгчийн оруулсан утга:\", input.value);\n});\n\n\n//# sourceURL=webpack://webpack-ts-project/./src/index.ts?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;