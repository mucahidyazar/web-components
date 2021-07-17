var _excluded = ["children", "code"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from "react";
import PropTypes from "prop-types";
import { TextType } from "./constants";
import * as S from "./style";

function Text(_ref) {
  var {
    children,
    code
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var TextItem = code ? S.Code : S.Text;
  return /*#__PURE__*/React.createElement(TextItem, _extends({
    "data-testid": "text"
  }, props), children);
}

Text.propTypes = {
  children: PropTypes.node,
  code: PropTypes.bool,
  strong: PropTypes.bool,
  delete: PropTypes.bool,
  underline: PropTypes.bool,
  mark: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(Object.values(TextType))
};
Text.defaultProps = {
  children: null,
  code: false,
  strong: false,
  delete: false,
  underline: false,
  mark: false,
  disabled: false,
  type: TextType.PRIMARY
};
Text.S = S;
Text.Constants = {
  TextType
};
export default Text;
//# sourceMappingURL=Text.js.map