"use strict";

exports.__esModule = true;
exports.ParagraphText = exports.ParagraphInput = exports.Paragraph = exports.Title6 = exports.Title5 = exports.Title4 = exports.Title3 = exports.Title2 = exports.Title1 = exports.Code = exports.Text = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _constants = require("./constants");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _TextTypeStyle, _templateObject6, _templateObject7, _templateObject8, _ParagraphSizeStyle, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

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

var disabledStyle = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  color: #838287;\n  cursor: not-allowed;\n"])));
var dangerStyle = (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  color: #ff3939;\n"])));
var warningStyle = (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  color: #e39b0e;\n"])));
var secondaryStyle = (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  color: #3c77bc;\n"])));
var primaryStyle = (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  color: #525252;\n"])));
var TextTypeStyle = (_TextTypeStyle = {}, _TextTypeStyle[_constants.TextType.DANGER] = dangerStyle, _TextTypeStyle[_constants.TextType.WARNING] = warningStyle, _TextTypeStyle[_constants.TextType.SECONDARY] = secondaryStyle, _TextTypeStyle[_constants.TextType.PRIMARY] = primaryStyle, _TextTypeStyle);
var paragraphSmallStyle = (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  font-size: ", "px;\n  line-height: 16px;\n"])), font.size.small);
var paragraphMediumStyle = (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n  font-size: ", "px;\n  line-height: 19px;\n"])), font.size.base);
var paragraphLargeStyle = (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  font-size: ", "px;\n  line-height: 22px;\n"])), font.size.small3);
var ParagraphSizeStyle = (_ParagraphSizeStyle = {}, _ParagraphSizeStyle[_constants.ParagraphSize.SMALL] = paragraphSmallStyle, _ParagraphSizeStyle[_constants.ParagraphSize.MEDIUM] = paragraphMediumStyle, _ParagraphSizeStyle[_constants.ParagraphSize.LARGE] = paragraphLargeStyle, _ParagraphSizeStyle);

var Text = _styledComponents.default.span(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n  line-height: 18px;\n  letter-spacing: 0.16px;\n\n  font-weight: ", ";\n  text-decoration: ", ";\n  text-decoration: ", ";\n  background-color: ", ";\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.strong && font.weight.bold;
}, function (props) {
  return props.delete && "line-through";
}, function (props) {
  return props.underline && "underline";
}, function (props) {
  return props.mark && "#ffe58f";
}, function (_ref) {
  var type = _ref.type;
  return TextTypeStyle[type];
}, function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled && disabledStyle;
});

exports.Text = Text;

var Code = _styledComponents.default.code(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose([""])));

exports.Code = Code;

var Title1 = _styledComponents.default.h1(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n  font-weight: ", ";\n  font-size: 42px;\n  line-height: 57px;\n  letter-spacing: 1px;\n  color: #000000;\n"])), font.weight.bold);

exports.Title1 = Title1;

var Title2 = _styledComponents.default.h2(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n  font-weight: 300;\n  font-size: 42px;\n  line-height: 57px;\n  letter-spacing: -0.5px;\n  color: #000000;\n"])));

exports.Title2 = Title2;

var Title3 = _styledComponents.default.h3(_templateObject13 || (_templateObject13 = _taggedTemplateLiteralLoose(["\n  font-size: ", "px;\n  line-height: 38px;\n  color: #000000;\n"])), font.size.medium3);

exports.Title3 = Title3;

var Title4 = _styledComponents.default.h4(_templateObject14 || (_templateObject14 = _taggedTemplateLiteralLoose(["\n  font-size: ", "px;\n  line-height: 27px;\n  letter-spacing: 0.25px;\n  color: #000000;\n"])), font.size.medium1);

exports.Title4 = Title4;

var Title5 = _styledComponents.default.h5(_templateObject15 || (_templateObject15 = _taggedTemplateLiteralLoose(["\n  font-weight: ", ";\n  font-size: ", "px;\n  line-height: 22px;\n  color: #000000;\n"])), font.weight.bold, font.size.small3);

exports.Title5 = Title5;

var Title6 = _styledComponents.default.h6(_templateObject16 || (_templateObject16 = _taggedTemplateLiteralLoose(["\n  font-weight: ", ";\n  font-size: ", "px;\n  line-height: 19px;\n  color: #000000;\n"])), font.weight.bold, font.size.base);

exports.Title6 = Title6;

var ParagraphInput = _styledComponents.default.textarea(_templateObject17 || (_templateObject17 = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  left: -9999px;\n  font: inherit;\n  margin: -3px;\n"])));

exports.ParagraphInput = ParagraphInput;

var ParagraphText = _styledComponents.default.p(_templateObject18 || (_templateObject18 = _taggedTemplateLiteralLoose(["\n  letter-spacing: 0.16px;\n  color: #3e3e3e;\n"])));

exports.ParagraphText = ParagraphText;

var Paragraph = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteralLoose(["\n  ", ";\n\n  ", ";\n\n  ", "\n\n  ", "\n"])), function (_ref3) {
  var editable = _ref3.editable;
  return editable && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteralLoose(["\n      ", " {\n        position: relative;\n        left: 0;\n      }\n    "])), ParagraphInput);
}, function (_ref4) {
  var ellipsis = _ref4.ellipsis;
  return ellipsis && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteralLoose(["\n      ", " {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n      }\n    "])), ParagraphText);
}, function (_ref5) {
  var row = _ref5.row;
  return row && (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteralLoose(["\n      ", " {\n        overflow: hidden;\n        -webkit-line-clamp: ", ";\n        -webkit-box-orient: vertical;\n        display: -webkit-box;\n      }\n    "])), ParagraphText, row);
}, function (_ref6) {
  var size = _ref6.size;
  return size && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteralLoose(["\n      ", " {\n        ", "\n      }\n    "])), ParagraphText, ParagraphSizeStyle[size]);
});

exports.Paragraph = Paragraph;
//# sourceMappingURL=style.js.map