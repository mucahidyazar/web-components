"use strict";

exports.__esModule = true;

var _assertion = require("./assertion");

Object.keys(_assertion).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _assertion[key]) return;
  exports[key] = _assertion[key];
});

var _dom = require("./dom");

Object.keys(_dom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _dom[key]) return;
  exports[key] = _dom[key];
});
//# sourceMappingURL=index.js.map