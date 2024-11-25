"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/words/route";
exports.ids = ["app/api/words/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "http2":
/*!************************!*\
  !*** external "http2" ***!
  \************************/
/***/ ((module) => {

module.exports = require("http2");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwords%2Froute&page=%2Fapi%2Fwords%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwords%2Froute.ts&appDir=C%3A%5CUsers%5CEthan%5CDesktop%5CCS%20Stuff%5C2024%20Fall%20Semester%5CWeb%20Dev%20Projects%5CFlip%20App%5Cflip-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEthan%5CDesktop%5CCS%20Stuff%5C2024%20Fall%20Semester%5CWeb%20Dev%20Projects%5CFlip%20App%5Cflip-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwords%2Froute&page=%2Fapi%2Fwords%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwords%2Froute.ts&appDir=C%3A%5CUsers%5CEthan%5CDesktop%5CCS%20Stuff%5C2024%20Fall%20Semester%5CWeb%20Dev%20Projects%5CFlip%20App%5Cflip-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEthan%5CDesktop%5CCS%20Stuff%5C2024%20Fall%20Semester%5CWeb%20Dev%20Projects%5CFlip%20App%5Cflip-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Ethan_Desktop_CS_Stuff_2024_Fall_Semester_Web_Dev_Projects_Flip_App_flip_app_src_app_api_words_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/words/route.ts */ \"(rsc)/./src/app/api/words/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/words/route\",\n        pathname: \"/api/words\",\n        filename: \"route\",\n        bundlePath: \"app/api/words/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Ethan\\\\Desktop\\\\CS Stuff\\\\2024 Fall Semester\\\\Web Dev Projects\\\\Flip App\\\\flip-app\\\\src\\\\app\\\\api\\\\words\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Ethan_Desktop_CS_Stuff_2024_Fall_Semester_Web_Dev_Projects_Flip_App_flip_app_src_app_api_words_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/words/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ3b3JkcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGd29yZHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ3b3JkcyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNFdGhhbiU1Q0Rlc2t0b3AlNUNDUyUyMFN0dWZmJTVDMjAyNCUyMEZhbGwlMjBTZW1lc3RlciU1Q1dlYiUyMERldiUyMFByb2plY3RzJTVDRmxpcCUyMEFwcCU1Q2ZsaXAtYXBwJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNFdGhhbiU1Q0Rlc2t0b3AlNUNDUyUyMFN0dWZmJTVDMjAyNCUyMEZhbGwlMjBTZW1lc3RlciU1Q1dlYiUyMERldiUyMFByb2plY3RzJTVDRmxpcCUyMEFwcCU1Q2ZsaXAtYXBwJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUM2RTtBQUMxSjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2ZsaXAtYXBwLz8xYzgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEV0aGFuXFxcXERlc2t0b3BcXFxcQ1MgU3R1ZmZcXFxcMjAyNCBGYWxsIFNlbWVzdGVyXFxcXFdlYiBEZXYgUHJvamVjdHNcXFxcRmxpcCBBcHBcXFxcZmxpcC1hcHBcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcd29yZHNcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3dvcmRzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvd29yZHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3dvcmRzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcRXRoYW5cXFxcRGVza3RvcFxcXFxDUyBTdHVmZlxcXFwyMDI0IEZhbGwgU2VtZXN0ZXJcXFxcV2ViIERldiBQcm9qZWN0c1xcXFxGbGlwIEFwcFxcXFxmbGlwLWFwcFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx3b3Jkc1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvd29yZHMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwords%2Froute&page=%2Fapi%2Fwords%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwords%2Froute.ts&appDir=C%3A%5CUsers%5CEthan%5CDesktop%5CCS%20Stuff%5C2024%20Fall%20Semester%5CWeb%20Dev%20Projects%5CFlip%20App%5Cflip-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEthan%5CDesktop%5CCS%20Stuff%5C2024%20Fall%20Semester%5CWeb%20Dev%20Projects%5CFlip%20App%5Cflip-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/words/route.ts":
/*!************************************!*\
  !*** ./src/app/api/words/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../firebase */ \"(rsc)/./src/app/firebase.ts\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"(rsc)/./node_modules/firebase/firestore/dist/index.mjs\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nasync function GET() {\n    try {\n        const wordsCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_0__.db, \"Words\");\n        const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(wordsCollection);\n        const words = querySnapshot.docs.map((doc)=>({\n                id: doc.id,\n                ...doc.data()\n            }));\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json(words);\n    } catch (error) {\n        console.error(\"Error fetching documents:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: \"Failed to fetch documents\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(req) {\n    try {\n        const body = await req.json();\n        const { word, definition, pos, pronunciation, confidence } = body;\n        if (!word || !definition || !pos || !pronunciation || !confidence) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                error: \"All fields are required\"\n            }, {\n                status: 400\n            });\n        }\n        const wordsCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_0__.db, \"Words\");\n        const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(wordsCollection, {\n            word,\n            definition,\n            pos,\n            pronunciation,\n            confidence\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            success: true,\n            id: docRef.id\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        console.error(\"Error adding document:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: \"Failed to add document\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS93b3Jkcy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFvQztBQUM2QjtBQUN0QjtBQUVwQyxlQUFlSztJQUNwQixJQUFJO1FBQ0YsTUFBTUMsa0JBQWtCTCw4REFBVUEsQ0FBQ0QseUNBQUVBLEVBQUU7UUFDdkMsTUFBTU8sZ0JBQWdCLE1BQU1MLDJEQUFPQSxDQUFDSTtRQUVwQyxNQUFNRSxRQUFRRCxjQUFjRSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFTO2dCQUM3Q0MsSUFBSUQsSUFBSUMsRUFBRTtnQkFDVixHQUFHRCxJQUFJRSxJQUFJLEVBQUU7WUFDZjtRQUVBLE9BQU9ULHFEQUFZQSxDQUFDVSxJQUFJLENBQUNOO0lBQzNCLEVBQUUsT0FBT08sT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsNkJBQTZCQTtRQUMzQyxPQUFPWCxxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBNEIsR0FBRztZQUFFRSxRQUFRO1FBQUk7SUFDakY7QUFDRjtBQUVPLGVBQWVDLEtBQUtDLEdBQVk7SUFDckMsSUFBSTtRQUNGLE1BQU1DLE9BQU8sTUFBTUQsSUFBSUwsSUFBSTtRQUMzQixNQUFNLEVBQUVPLElBQUksRUFBRUMsVUFBVSxFQUFFQyxHQUFHLEVBQUVDLGFBQWEsRUFBRUMsVUFBVSxFQUFFLEdBQUdMO1FBRTdELElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sQ0FBQ0MsaUJBQWlCLENBQUNDLFlBQVk7WUFDakUsT0FBT3JCLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBMEIsR0FBRztnQkFBRUUsUUFBUTtZQUFJO1FBQy9FO1FBRUEsTUFBTVgsa0JBQWtCTCw4REFBVUEsQ0FBQ0QseUNBQUVBLEVBQUU7UUFDdkMsTUFBTTBCLFNBQVMsTUFBTXZCLDBEQUFNQSxDQUFDRyxpQkFBaUI7WUFDM0NlO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1FBQ0Y7UUFFQSxPQUFPckIscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUFFYSxTQUFTO1lBQU1mLElBQUljLE9BQU9kLEVBQUU7UUFBQyxHQUFHO1lBQUVLLFFBQVE7UUFBSTtJQUMzRSxFQUFFLE9BQU9GLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLDBCQUEwQkE7UUFDeEMsT0FBT1gscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXlCLEdBQUc7WUFBRUUsUUFBUTtRQUFJO0lBQzlFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbGlwLWFwcC8uL3NyYy9hcHAvYXBpL3dvcmRzL3JvdXRlLnRzPzBlM2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi9maXJlYmFzZSc7XHJcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGdldERvY3MsIGFkZERvYyB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHdvcmRzQ29sbGVjdGlvbiA9IGNvbGxlY3Rpb24oZGIsICdXb3JkcycpO1xyXG4gICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3Mod29yZHNDb2xsZWN0aW9uKTtcclxuICAgIFxyXG4gICAgY29uc3Qgd29yZHMgPSBxdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7XHJcbiAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICB9KSk7XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHdvcmRzKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZG9jdW1lbnRzOicsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIGRvY3VtZW50cycgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogUmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICAgIGNvbnN0IHsgd29yZCwgZGVmaW5pdGlvbiwgcG9zLCBwcm9udW5jaWF0aW9uLCBjb25maWRlbmNlIH0gPSBib2R5O1xyXG5cclxuICAgIGlmICghd29yZCB8fCAhZGVmaW5pdGlvbiB8fCAhcG9zIHx8ICFwcm9udW5jaWF0aW9uIHx8ICFjb25maWRlbmNlKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnQWxsIGZpZWxkcyBhcmUgcmVxdWlyZWQnIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgd29yZHNDb2xsZWN0aW9uID0gY29sbGVjdGlvbihkYiwgJ1dvcmRzJyk7XHJcbiAgICBjb25zdCBkb2NSZWYgPSBhd2FpdCBhZGREb2Mod29yZHNDb2xsZWN0aW9uLCB7XHJcbiAgICAgIHdvcmQsXHJcbiAgICAgIGRlZmluaXRpb24sXHJcbiAgICAgIHBvcyxcclxuICAgICAgcHJvbnVuY2lhdGlvbixcclxuICAgICAgY29uZmlkZW5jZSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGlkOiBkb2NSZWYuaWQgfSwgeyBzdGF0dXM6IDIwMSB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgYWRkaW5nIGRvY3VtZW50OicsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRmFpbGVkIHRvIGFkZCBkb2N1bWVudCcgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImRiIiwiY29sbGVjdGlvbiIsImdldERvY3MiLCJhZGREb2MiLCJOZXh0UmVzcG9uc2UiLCJHRVQiLCJ3b3Jkc0NvbGxlY3Rpb24iLCJxdWVyeVNuYXBzaG90Iiwid29yZHMiLCJkb2NzIiwibWFwIiwiZG9jIiwiaWQiLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsInN0YXR1cyIsIlBPU1QiLCJyZXEiLCJib2R5Iiwid29yZCIsImRlZmluaXRpb24iLCJwb3MiLCJwcm9udW5jaWF0aW9uIiwiY29uZmlkZW5jZSIsImRvY1JlZiIsInN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/words/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/firebase.ts":
/*!*****************************!*\
  !*** ./src/app/firebase.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"(rsc)/./node_modules/firebase/app/dist/index.mjs\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"(rsc)/./node_modules/firebase/firestore/dist/index.mjs\");\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDO1S2BHeC0YNPk16_Ir875fVnoFqUb-k4\",\n    authDomain: \"flip-b47e9.firebaseapp.com\",\n    projectId: \"flip-b47e9\",\n    storageBucket: \"flip-b47e9.firebasestorage.app\",\n    messagingSenderId: \"243918139967\",\n    appId: \"1:243918139967:web:fb23f88a4942589ff77e8a\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2ZpcmViYXNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUMwQjtBQUV2RSxNQUFNRSxpQkFBaUI7SUFDbkJDLFFBQVE7SUFDUkMsWUFBWTtJQUNaQyxXQUFXO0lBQ1hDLGVBQWU7SUFDZkMsbUJBQW1CO0lBQ25CQyxPQUFPO0FBQ1g7QUFFQSxNQUFNQyxNQUFNVCwyREFBYUEsQ0FBQ0U7QUFFbkIsTUFBTVEsS0FBS1QsZ0VBQVlBLENBQUNRLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbGlwLWFwcC8uL3NyYy9hcHAvZmlyZWJhc2UudHM/NjE5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlLCBjb2xsZWN0aW9uLCBnZXREb2NzIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeURPMVMyQkhlQzBZTlBrMTZfSXI4NzVmVm5vRnFVYi1rNFwiLFxyXG4gICAgYXV0aERvbWFpbjogXCJmbGlwLWI0N2U5LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcImZsaXAtYjQ3ZTlcIixcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwiZmxpcC1iNDdlOS5maXJlYmFzZXN0b3JhZ2UuYXBwXCIsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCIyNDM5MTgxMzk5NjdcIixcclxuICAgIGFwcElkOiBcIjE6MjQzOTE4MTM5OTY3OndlYjpmYjIzZjg4YTQ5NDI1ODlmZjc3ZThhXCJcclxufTtcclxuXHJcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7Il0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJnZXRGaXJlc3RvcmUiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImFwcCIsImRiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/firebase.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@grpc","vendor-chunks/protobufjs","vendor-chunks/@protobufjs","vendor-chunks/@firebase","vendor-chunks/idb","vendor-chunks/firebase","vendor-chunks/long","vendor-chunks/lodash.camelcase"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwords%2Froute&page=%2Fapi%2Fwords%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwords%2Froute.ts&appDir=C%3A%5CUsers%5CEthan%5CDesktop%5CCS%20Stuff%5C2024%20Fall%20Semester%5CWeb%20Dev%20Projects%5CFlip%20App%5Cflip-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEthan%5CDesktop%5CCS%20Stuff%5C2024%20Fall%20Semester%5CWeb%20Dev%20Projects%5CFlip%20App%5Cflip-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();