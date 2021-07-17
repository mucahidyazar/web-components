var _excluded = ["children", "copyable", "editable", "paragraphRef"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from "react";
import PropTypes from "prop-types";
import * as S from "./style";
import { ParagraphSize } from "./constants";

function Paragraph(_ref) {
  var {
    children,
    copyable,
    editable,
    paragraphRef
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var paragraphProps = _extends({}, props, {
    editable
  });

  return /*#__PURE__*/React.createElement(S.Paragraph, _extends({
    "data-testid": "paragraph"
  }, paragraphProps), /*#__PURE__*/React.createElement(S.ParagraphText, {
    contentEditable: editable,
    suppressContentEditableWarning: true
  }, children), copyable && /*#__PURE__*/React.createElement(S.ParagraphInput, {
    ref: paragraphRef,
    type: "text",
    defaultValue: children
  }));
}

Paragraph.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  editable: PropTypes.bool,
  copyable: PropTypes.bool,
  paragraphRef: PropTypes.object,
  size: PropTypes.oneOf(Object.values(ParagraphSize)),
  row: PropTypes.number,
  ellipsis: PropTypes.bool
};
Paragraph.defaultProps = {
  editable: false,
  copyable: false,
  children: null,
  paragraphRef: null,
  size: ParagraphSize.MEDIUM,
  row: 0,
  ellipsis: false
};
Paragraph.S = S;
Paragraph.constants = {
  ParagraphSize
};
export default Paragraph;
//# sourceMappingURL=Paragraph.js.map