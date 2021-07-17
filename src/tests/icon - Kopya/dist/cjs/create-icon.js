"use strict";

exports.__esModule = true;
exports.createIcon = createIcon;

var _react = require("react");

var _util = require("@mucahidyazar/util");

var _icon = require("./icon");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function createIcon(options) {
  var _options$viewBox = options.viewBox,
      viewBox = _options$viewBox === void 0 ? "0 0 24 24" : _options$viewBox,
      pathDefinition = options.d,
      path = options.path,
      displayName = options.displayName,
      _options$defaultProps = options.defaultProps,
      defaultProps = _options$defaultProps === void 0 ? {} : _options$defaultProps;
  var Comp = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/React.createElement(_icon.Icon, _extends({
      ref: ref,
      viewBox: viewBox
    }, defaultProps, props), path != null ? path : /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: pathDefinition
    }));
  });

  if (_util.__DEV__) {
    Comp.displayName = displayName;
  }

  return Comp;
}
//# sourceMappingURL=create-icon.js.map