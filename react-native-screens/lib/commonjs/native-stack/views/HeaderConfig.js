"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HeaderConfig;

var _native = require("@react-navigation/native");

var React = _interopRequireWildcard(require("react"));

var _reactNativeScreens = require("react-native-screens");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function HeaderConfig({
  route,
  title,
  headerRight,
  headerLeft,
  headerCenter,
  headerTitle,
  headerBackTitle,
  headerBackTitleVisible = true,
  backButtonImage,
  headerHideBackButton,
  headerHideShadow,
  headerLargeTitleHideShadow,
  headerTintColor,
  headerTopInsetEnabled = true,
  headerLargeTitle,
  headerTranslucent,
  headerStyle = {},
  headerLargeStyle = {},
  headerTitleStyle = {},
  headerLargeTitleStyle = {},
  headerBackTitleStyle = {},
  headerShown,
  backButtonInCustomView,
  direction
}) {
  const {
    colors
  } = (0, _native.useTheme)();
  const tintColor = headerTintColor !== null && headerTintColor !== void 0 ? headerTintColor : colors.primary;
  return /*#__PURE__*/React.createElement(_reactNativeScreens.ScreenStackHeaderConfig, {
    backButtonInCustomView: backButtonInCustomView,
    backgroundColor: headerStyle.backgroundColor ? headerStyle.backgroundColor : colors.card,
    backTitle: headerBackTitleVisible ? headerBackTitle : ' ',
    backTitleFontFamily: headerBackTitleStyle.fontFamily,
    backTitleFontSize: headerBackTitleStyle.fontSize,
    blurEffect: headerStyle.blurEffect,
    color: tintColor,
    direction: direction,
    hidden: headerShown === false,
    hideBackButton: headerHideBackButton,
    hideShadow: headerHideShadow,
    largeTitle: headerLargeTitle,
    largeTitleBackgroundColor: headerLargeStyle.backgroundColor,
    largeTitleColor: headerLargeTitleStyle.color,
    largeTitleFontFamily: headerLargeTitleStyle.fontFamily,
    largeTitleFontSize: headerLargeTitleStyle.fontSize,
    largeTitleHideShadow: headerLargeTitleHideShadow,
    title: headerTitle !== undefined ? headerTitle : title !== undefined ? title : route.name,
    titleColor: headerTitleStyle.color !== undefined ? headerTitleStyle.color : headerTintColor !== undefined ? headerTintColor : colors.text,
    titleFontFamily: headerTitleStyle.fontFamily,
    titleFontSize: headerTitleStyle.fontSize,
    topInsetEnabled: headerTopInsetEnabled,
    translucent: headerTranslucent === true
  }, headerRight !== undefined ? /*#__PURE__*/React.createElement(_reactNativeScreens.ScreenStackHeaderRightView, null, headerRight({
    tintColor
  })) : null, backButtonImage !== undefined ? /*#__PURE__*/React.createElement(_reactNativeScreens.ScreenStackHeaderBackButtonImage, {
    key: "backImage",
    source: backButtonImage
  }) : null, headerLeft !== undefined ? /*#__PURE__*/React.createElement(_reactNativeScreens.ScreenStackHeaderLeftView, null, headerLeft({
    tintColor
  })) : null, headerCenter !== undefined ? /*#__PURE__*/React.createElement(_reactNativeScreens.ScreenStackHeaderCenterView, null, headerCenter({
    tintColor
  })) : null);
}
//# sourceMappingURL=HeaderConfig.js.map