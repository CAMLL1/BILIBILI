import { Route } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '../types';
declare type Props = NativeStackNavigationOptions & {
    route: Route<string>;
};
export default function HeaderConfig({ route, title, headerRight, headerLeft, headerCenter, headerTitle, headerBackTitle, headerBackTitleVisible, backButtonImage, headerHideBackButton, headerHideShadow, headerLargeTitleHideShadow, headerTintColor, headerTopInsetEnabled, headerLargeTitle, headerTranslucent, headerStyle, headerLargeStyle, headerTitleStyle, headerLargeTitleStyle, headerBackTitleStyle, headerShown, backButtonInCustomView, direction, }: Props): JSX.Element;
export {};
