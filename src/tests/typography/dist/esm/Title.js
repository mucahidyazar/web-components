var _excluded = ["children", "level"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from "react";
import PropTypes from "prop-types";
import * as S from "./style";

var Title = _ref => {
  var {
    children,
    level
  } = _ref,
      titleProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var TitleItem = S["Title" + level];
  return /*#__PURE__*/React.createElement(TitleItem, _extends({
    "data-testid": "title"
  }, titleProps), children);
};

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6])
};
Title.defaultProps = {
  level: 1,
  children: null
};
Title.S = S;
export default Title;
//# sourceMappingURL=Title.js.map