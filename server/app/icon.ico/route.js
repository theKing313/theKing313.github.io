"use strict";
(() => {
var exports = {};
exports.id = 451;
exports.ids = [451];
exports.modules = {

/***/ 4021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 3679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ficon.ico%2Froute&isDynamic=0!./app/icon.ico?__next_metadata_route__
var icon_next_metadata_route_namespaceObject = {};
__webpack_require__.r(icon_next_metadata_route_namespaceObject);
__webpack_require__.d(icon_next_metadata_route_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(514);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ficon.ico%2Froute&isDynamic=0!./app/icon.ico?__next_metadata_route__


const contentType = "image/x-icon"
const buffer = Buffer.from("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", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, immutable, no-transform, max-age=31536000",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ficon.ico%2Froute&name=app%2Ficon.ico%2Froute&pagePath=private-next-app-dir%2Ficon.ico&appDir=E%3A%5CYOUTUBE%5CProject%5CTest%20task%5CNEXTREDUX%5Cmy-app%5Capp&appPaths=%2Ficon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/icon.ico/route",
        pathname: "/icon.ico",
        filename: "icon",
        bundlePath: "app/icon.ico/route"
    },
    resolvedPagePath: "next-metadata-route-loader?page=%2Ficon.ico%2Froute&isDynamic=0!E:\\YOUTUBE\\Project\\Test task\\NEXTREDUX\\my-app\\app\\icon.ico?__next_metadata_route__",
    nextConfigOutput,
    userland: icon_next_metadata_route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/icon.ico/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,501,514], () => (__webpack_exec__(3679)));
module.exports = __webpack_exports__;

})();