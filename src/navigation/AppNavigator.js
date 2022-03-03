import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { themeColor, useTheme } from "react-native-rapi-ui";
import TabBarIcon from "../components/utils/TabBarIcon";
import TabBarText from "../components/utils/TabBarText";
import Home from "../screens/Home";
import SecondScreen from "../screens/SecondScreen";
import About from "../screens/About";
import Profile from "../screens/Profile";
import { useSelector } from "react-redux";
import * as en from '../lang/en.json'
import * as ar from '../lang/ar.json'
import * as ku from '../lang/ku.json'
const MainStack = createNativeStackNavigator();
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="MainTabs" component={MainTabs} />
      <MainStack.Screen name="SecondScreen" component={SecondScreen} />
    </MainStack.Navigator>
  );
};

const Tabs = createBottomTabNavigator();
const MainTabs = () => {
  const { isDarkmode } = useTheme();
  const selectedlang = useSelector((state) => state.SelectLang.Lang)
  const [lang, setLang] = useState({})

  useEffect(() => {
    if (selectedlang == 'en' || null || undefined || '' || {}) {

      setLang(en.screen)
    }
    if (selectedlang == 'ku') {
      setLang(ku.screen)
    }
    if (selectedlang == 'ar') {
      setLang(ar.screen)

    }


  }, [selectedlang]);
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: isDarkmode ? themeColor.dark100 : "#ffffff",
          backgroundColor: isDarkmode ? themeColor.dark200 : "#dddddd",

        },
      }}
    >
      {/* these icons using Ionicons */}
      <Tabs.Screen
        name="Home"
        component={Home}

        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title={lang.home} />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"md-home"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title={lang.quran} />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"book"} />
          ),
        }}
      />
      <Tabs.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title={lang.about} />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"ios-information-circle"} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};
