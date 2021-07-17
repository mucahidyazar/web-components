"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var S = _interopRequireWildcard(require("./style"));

var _constants = require("./constants");

var _excluded = ["children", "copyable", "editable", "paragraphRef"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Paragraph(_ref) {
  var children = _ref.children,
      copyable = _ref.copyable,
      editable = _ref.editable,
      paragraphRef = _ref.paragraphRef,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var paragraphProps = _extends({}, props, {
    editable: editable
  });

  return /*#__PURE__*/_react.default.createElement(S.Paragraph, _extends({
    "data-testid": "paragraph"
  }, paragraphProps), /*#__PURE__*/_react.default.createElement(S.ParagraphText, {
    contentEditable: editable,
    suppressContentEditableWarning: true
  }, children), copyable && /*#__PURE__*/_react.default.createElement(S.ParagraphInput, {
    ref: paragraphRef,
    type: "text",
    defaultValue: children
  }));
}

Paragraph.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.string]),
  editable: _propTypes.default.bool,
  copyable: _propTypes.default.bool,
  paragraphRef: _propTypes.default.object,
  size: _propTypes.default.oneOf(Object.values(_constants.ParagraphSize)),
  row: _propTypes.default.number,
  ellipsis: _propTypes.default.bool
};
Paragraph.defaultProps = {
  editable: false,
  copyable: false,
  children: null,
  paragraphRef: null,
  size: _constants.ParagraphSize.MEDIUM,
  row: 0,
  ellipsis: false
};
Paragraph.S = S;
Paragraph.constants = {
  ParagraphSize: _constants.ParagraphSize
};
var _default = Paragraph;
exports.default = _default;
//# sourceMappingURL=Paragraph.js.map