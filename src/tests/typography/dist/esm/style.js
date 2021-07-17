var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { css } from "styled-components";
import { TextType, ParagraphSize } from "./constants";
var font = {
  type: '"Open Sans", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"',
  size: {
    small: "12",
    base: "14",
    small3: "16",
    medium1: "20",
    medium2: "24",
    medium3: "28",
    large1: "32",
    large2: "40",
    large3: "48"
  },
  weight: {
    regular: "400",
    bold: "600",
    extrabold: "700"
  }
}; //

var disabledStyle = css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  color: #838287;\n  cursor: not-allowed;\n"])));
var dangerStyle = css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  color: #ff3939;\n"])));
var warningStyle = css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  color: #e39b0e;\n"])));
var secondaryStyle = css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  color: #3c77bc;\n"])));
var primaryStyle = css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  color: #525252;\n"])));
var TextTypeStyle = {
  [TextType.DANGER]: dangerStyle,
  [TextType.WARNING]: warningStyle,
  [TextType.SECONDARY]: secondaryStyle,
  [TextType.PRIMARY]: primaryStyle
};
var paragraphSmallStyle = css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  font-size: ", "px;\n  line-height: 16px;\n"])), font.size.small);
var paragraphMediumStyle = css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n  font-size: ", "px;\n  line-height: 19px;\n"])), font.size.base);
var paragraphLargeStyle = css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  font-size: ", "px;\n  line-height: 22px;\n"])), font.size.small3);
var ParagraphSizeStyle = {
  [ParagraphSize.SMALL]: paragraphSmallStyle,
  [ParagraphSize.MEDIUM]: paragraphMediumStyle,
  [ParagraphSize.LARGE]: paragraphLargeStyle
};
var Text = styled.span(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n  line-height: 18px;\n  letter-spacing: 0.16px;\n\n  font-weight: ", ";\n  text-decoration: ", ";\n  text-decoration: ", ";\n  background-color: ", ";\n\n  ", "\n\n  ", "\n"])), props => props.strong && font.weight.bold, props => props.delete && "line-through", props => props.underline && "underline", props => props.mark && "#ffe58f", _ref => {
  var {
    type
  } = _ref;
  return TextTypeStyle[type];
}, _ref2 => {
  var {
    disabled
  } = _ref2;
  return disabled && disabledStyle;
});
var Code = styled.code(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose([""])));
var Title1 = styled.h1(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n  font-weight: ", ";\n  font-size: 42px;\n  line-height: 57px;\n  letter-spacing: 1px;\n  color: #000000;\n"])), font.weight.bold);
var Title2 = styled.h2(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n  font-weight: 300;\n  font-size: 42px;\n  line-height: 57px;\n  letter-spacing: -0.5px;\n  color: #000000;\n"])));
var Title3 = styled.h3(_templateObject13 || (_templateObject13 = _taggedTemplateLiteralLoose(["\n  font-size: ", "px;\n  line-height: 38px;\n  color: #000000;\n"])), font.size.medium3);
var Title4 = styled.h4(_templateObject14 || (_templateObject14 = _taggedTemplateLiteralLoose(["\n  font-size: ", "px;\n  line-height: 27px;\n  letter-spacing: 0.25px;\n  color: #000000;\n"])), font.size.medium1);
var Title5 = styled.h5(_templateObject15 || (_templateObject15 = _taggedTemplateLiteralLoose(["\n  font-weight: ", ";\n  font-size: ", "px;\n  line-height: 22px;\n  color: #000000;\n"])), font.weight.bold, font.size.small3);
var Title6 = styled.h6(_templateObject16 || (_templateObject16 = _taggedTemplateLiteralLoose(["\n  font-weight: ", ";\n  font-size: ", "px;\n  line-height: 19px;\n  color: #000000;\n"])), font.weight.bold, font.size.base);
var ParagraphInput = styled.textarea(_templateObject17 || (_templateObject17 = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  left: -9999px;\n  font: inherit;\n  margin: -3px;\n"])));
var ParagraphText = styled.p(_templateObject18 || (_templateObject18 = _taggedTemplateLiteralLoose(["\n  letter-spacing: 0.16px;\n  color: #3e3e3e;\n"])));
var Paragraph = styled.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteralLoose(["\n  ", ";\n\n  ", ";\n\n  ", "\n\n  ", "\n"])), _ref3 => {
  var {
    editable
  } = _ref3;
  return editable && css(_templateObject20 || (_templateObject20 = _taggedTemplateLiteralLoose(["\n      ", " {\n        position: relative;\n        left: 0;\n      }\n    "])), ParagraphInput);
}, _ref4 => {
  var {
    ellipsis
  } = _ref4;
  return ellipsis && css(_templateObject21 || (_templateObject21 = _taggedTemplateLiteralLoose(["\n      ", " {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n      }\n    "])), ParagraphText);
}, _ref5 => {
  var {
    row
  } = _ref5;
  return row && css(_templateObject22 || (_templateObject22 = _taggedTemplateLiteralLoose(["\n      ", " {\n        overflow: hidden;\n        -webkit-line-clamp: ", ";\n        -webkit-box-orient: vertical;\n        display: -webkit-box;\n      }\n    "])), ParagraphText, row);
}, _ref6 => {
  var {
    size
  } = _ref6;
  return size && css(_templateObject23 || (_templateObject23 = _taggedTemplateLiteralLoose(["\n      ", " {\n        ", "\n      }\n    "])), ParagraphText, ParagraphSizeStyle[size]);
});
export { Text, Code, Title1, Title2, Title3, Title4, Title5, Title6, Paragraph, ParagraphInput, ParagraphText };
//# sourceMappingURL=style.js.map