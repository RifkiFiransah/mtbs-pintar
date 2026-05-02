import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

// Import Screens
import { BerandaScreen } from "../screens/BerandaScreen";
import { CatatanScreen } from "../screens/CatatanScreen";
import { CekKondisiScreen } from "../screens/CekKondisiScreen";
import { PengingatScreen } from "../screens/PengingatScreen";
import { ProfilScreen } from "../screens/ProfilScreen";
import { TandaBahayaScreen } from "../screens/TandaBahayaScreen";
import TanyaJawabScreen from "../screens/TanyaJawabScreen";
import { TindakanScreen } from "../screens/TindakanScreen";
import { WelcomeScreen } from "../screens/WelcomeScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator Component
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#1E88E5",
        tabBarInactiveTintColor: "#999999",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopColor: "#E0E0E0",
          borderTopWidth: 1,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
        },
      }}
    >
      <Tab.Screen
        name="Beranda"
        component={BerandaScreen}
        options={{
          title: "Beranda",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Catatan"
        component={CatatanScreen}
        options={{
          title: "Catatan",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="description" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pengingat"
        component={PengingatScreen}
        options={{
          title: "Pengingat",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="notifications" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfilScreen}
        options={{
          title: "Profil",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Main Stack Navigator
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Welcome Screen */}
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            animationEnabled: false,
          }}
        />

        {/* Main Tabs */}
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{
            animationEnabled: false,
          }}
        />

        {/* Detail Screens (Stack screens that overlay the tabs) */}
        <Stack.Screen
          name="CekKondisi"
          component={CekKondisiScreen}
          options={{
            headerShown: false,
            animationEnabled: true,
          }}
        />

        <Stack.Screen
          name="TandaBahaya"
          component={TandaBahayaScreen}
          options={{
            headerShown: false,
            animationEnabled: true,
          }}
        />

        <Stack.Screen
          name="Tindakan"
          component={TindakanScreen}
          options={{
            headerShown: false,
            animationEnabled: true,
          }}
        />

        <Stack.Screen
          name="TanyaJawab"
          component={TanyaJawabScreen}
          options={{
            headerShown: false,
            animationEnabled: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
