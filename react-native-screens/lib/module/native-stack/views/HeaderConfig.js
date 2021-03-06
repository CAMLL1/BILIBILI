import { useTheme } from '@react-navigation/native';
import * as React from 'react';
import { ScreenStackHeaderBackButtonImage, ScreenStackHeaderCenterView, ScreenStackHeaderConfig, ScreenStackHeaderLeftView, ScreenStackHeaderRightView } from 'react-native-screens';
export default function HeaderConfig({
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
  } = useTheme();
  const tintColor = headerTintColor !== null && headerTintColor !== void 0 ? headerTintColor : colors.primary;
  return /*#__PURE__*/React.createElement(ScreenStackHeaderConfig, {
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
  }, headerRight !== undefined ? /*#__PURE__*/React.createElement(ScreenStackHeaderRightView, null, headerRight({
    tintColor
  })) : null, backButtonImage !== undefined ? /*#__PURE__*/React.createElement(ScreenStackHeaderBackButtonImage, {
    key: "backImage",
    source: backButtonImage
  }) : null, headerLeft !== undefined ? /*#__PURE__*/React.createElement(ScreenStackHeaderLeftView, null, headerLeft({
    tintColor
  })) : null, headerCenter !== undefined ? /*#__PURE__*/React.createElement(ScreenStackHeaderCenterView, null, headerCenter({
    tintColor
  })) : null);
}
//# sourceMappingURL=HeaderConfig.js.map