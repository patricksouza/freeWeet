import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import NewWeet from "../../components/NewWeet/";
import FeedWeet from "../../components/FeedWeet";
import Settings from "../../components/Settings";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//import style from './style';

const Tab = createBottomTabNavigator();

export default function Home() {
  function HomeScreen() {
    return <FeedWeet />;
  }

  function NewWeetScreen() {
    return <NewWeet />;
  }

  function SettingScreen() {
    return <Settings />;
  }

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "rgba(255,255,255,0.9)",
        labelStyle: {
          fontSize: 14,
        },
        style: {
          backgroundColor: "#121212",
          borderWidth:1,
          borderTopColor: "rgba(145, 61, 136, 1)",
        },
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="News"
        component={HomeScreen}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="newspaper"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NewWeet"
        component={NewWeetScreen}
        options={{
          tabBarLabel: "New",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cogs" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
