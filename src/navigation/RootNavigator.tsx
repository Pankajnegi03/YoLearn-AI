import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeTabBar } from "@/components/HomeTabBar";
import { ChatScreen } from "@/screens/ChatScreen";
import { CompanionScreen } from "@/screens/CompanionScreen";
import { HomeScreen } from "@/screens/HomeScreen";
import { LibraryScreen } from "@/screens/LibraryScreen";
import { ToolsScreen } from "@/screens/ToolsScreen";
import { Colors } from "@/theme";
import {
  HomeStackParamList,
  RootStackParamList,
  RootTabParamList,
  ToolsStackParamList,
} from "./types";

const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const ToolsStack = createNativeStackNavigator<ToolsStackParamList>();
const Tabs = createBottomTabNavigator<RootTabParamList>();
const RootStack = createNativeStackNavigator<RootStackParamList>();

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
    card: Colors.background,
    text: Colors.textPrimary,
    border: "transparent",
  },
};

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Companion" component={CompanionScreen} />
    </HomeStack.Navigator>
  );
}

function ToolsStackNavigator() {
  return (
    <ToolsStack.Navigator screenOptions={{ headerShown: false }}>
      <ToolsStack.Screen name="Tools" component={ToolsScreen} />
    </ToolsStack.Navigator>
  );
}

function MainTabsNavigator() {
  return (
    <Tabs.Navigator
      tabBar={(props) => <HomeTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="YoLearn" component={HomeStackNavigator} />
      <Tabs.Screen name="Tools" component={ToolsStackNavigator} />
    </Tabs.Navigator>
  );
}

export function RootNavigator() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="MainTabs" component={MainTabsNavigator} />
        <RootStack.Screen name="Chat" component={ChatScreen} />
        <RootStack.Screen name="Library" component={LibraryScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
