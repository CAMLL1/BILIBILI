"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NativeStackView;

var _native = require("@react-navigation/native");

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _AppContainer = _interopRequireDefault(require("react-native/Libraries/ReactNative/AppContainer"));

var _reactNativeScreens = require("react-native-screens");

var _HeaderConfig = _interopRequireDefault(require("./HeaderConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Screen = _reactNativeScreens.Screen;
const isAndroid = _reactNative.Platform.OS === 'android';
let Container = _reactNative.View;

if (__DEV__) {
  const DebugContainer = props => {
    const {
      stackAnimation
    } = props,
          rest = _objectWithoutProperties(props, ["stackAnimation"]);

    if (_reactNative.Platform.OS === 'ios' && stackAnimation !== 'push') {
      return /*#__PURE__*/React.createElement(_AppContainer.default, null, /*#__PURE__*/React.createElement(_reactNative.View, rest));
    }

    return /*#__PURE__*/React.createElement(_reactNative.View, rest);
  }; // @ts-ignore Wrong props


  Container = DebugContainer;
}

function NativeStackView({
  state,
  navigation,
  descriptors
}) {
  const {
    key,
    routes
  } = state;
  const {
    colors
  } = (0, _native.useTheme)();
  return /*#__PURE__*/React.createElement(_reactNativeScreens.ScreenStack, {
    style: styles.container
  }, routes.map(route => {
    const {
      options,
      render: renderScene
    } = descriptors[route.key];
    const {
      gestureEnabled,
      replaceAnimation = 'pop',
      stackPresentation = 'push',
      stackAnimation,
      contentStyle
    } = options;
    const viewStyles = [styles.container, stackPresentation !== 'transparentModal' && {
      backgroundColor: colors.background
    }, contentStyle];
    return /*#__PURE__*/React.createElement(Screen, {
      key: route.key,
      style: _reactNative.StyleSheet.absoluteFill,
      gestureEnabled: isAndroid ? false : gestureEnabled,
      replaceAnimation: replaceAnimation,
      stackPresentation: stackPresentation,
      stackAnimation: stackAnimation,
      onWillAppear: () => {
        navigation.emit({
          type: 'transitionStart',
          data: {
            closing: false
          },
          target: route.key
        });
      },
      onWillDisappear: () => {
        navigation.emit({
          type: 'transitionStart',
          data: {
            closing: true
          },
          target: route.key
        });
      },
      onAppear: () => {
        navigation.emit({
          type: 'appear',
          target: route.key
        });
        navigation.emit({
          type: 'transitionEnd',
          data: {
            closing: false
          },
          target: route.key
        });
      },
      onDisappear: () => {
        navigation.emit({
          type: 'transitionEnd',
          data: {
            closing: true
          },
          target: route.key
        });
      },
      onDismissed: () => {
        navigation.emit({
          type: 'dismiss',
          target: route.key
        });
        navigation.dispatch(_objectSpread(_objectSpread({}, _native.StackActions.pop()), {}, {
          source: route.key,
          target: key
        }));
      }
    }, /*#__PURE__*/React.createElement(_HeaderConfig.default, _extends({}, options, {
      route: route
    })), /*#__PURE__*/React.createElement(Container, {
      style: viewStyles // @ts-ignore Wrong props passed to View
      ,
      stackPresentation: stackPresentation
    }, renderScene()));
  }));
}

const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1
  }
});
//# sourceMappingURL=NativeStackView.js.map