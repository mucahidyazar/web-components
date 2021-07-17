"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("./constants");

var S = _interopRequireWildcard(require("./style"));

var _excluded = ["children", "code"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Text(_ref) {
  var children = _ref.children,
      code = _ref.code,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var TextItem = code ? S.Code : S.Text;
  return /*#__PURE__*/_react.default.createElement(TextItem, _extends({
    "data-testid": "text"
  }, props), children);
}

Text.propTypes = {
  children: _propTypes.default.node,
  code: _propTypes.default.bool,
  strong: _propTypes.default.bool,
  delete: _propTypes.default.bool,
  underline: _propTypes.default.bool,
  mark: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  type: _propTypes.default.oneOf(Object.values(_constants.TextType))
};
Text.defaultProps = {
  children: null,
  code: false,
  strong: false,
  delete: false,
  underline: false,
  mark: false,
  disabled: false,
  type: _constants.TextType.PRIMARY
};
Text.S = S;
Text.Constants = {
  TextType: _constants.TextType
};
var _default = Text;
exports.default = _default;
//# sourceMappingURL=Text.js.map