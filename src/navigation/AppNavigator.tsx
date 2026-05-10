import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

// Import Screens
import { AboutMTBSScreen } from "../screens/AboutMTBSScreen";
import { BerandaScreen } from "../screens/BerandaScreen";
import { CatatanScreen } from "../screens/CatatanScreen";
import { CekKondisiScreen } from "../screens/CekKondisiScreen";
import { DetailPengingatScreen } from "../screens/DetailPengingatScreen";
import { FormCatatanScreen } from "../screens/FormCatatanScreen";
import { FormPengingatScreen } from "../screens/FormPengingatScreen";
import { PengingatScreen } from "../screens/PengingatScreen";
import { PerawatanDiRumahScreen } from "../screens/PerawatanDiRumahScreen";
import { ProfilScreen } from "../screens/ProfilScreen";
import {
  KejangScreen,
  MuntahScreen,
  PenilaianSAGAScreen,
  PenurunanKesadaranScreen,
  SesakNafasScreen,
  TidakBisaMinumScreen,
} from "../screens/tanda-bahaya";
import { TandaBahayaScreen } from "../screens/TandaBahayaScreen";
import { TanyaJawabScreen } from "../screens/TanyaJawabScreen";
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
          paddingBottom: 40,
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
            headerShown: false,
          }}
        />

        {/* Main Tabs */}
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{
            headerShown: false,
          }}
        />

        {/* About MTBS Screen */}
        <Stack.Screen
          name="AboutMTBS"
          component={AboutMTBSScreen}
          options={{
            headerShown: false,
          }}
        />

        {/* Detail Screens (Stack screens that overlay the tabs) */}
        <Stack.Screen
          name="FormCatatan"
          component={FormCatatanScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="FormPengingat"
          component={FormPengingatScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="DetailPengingat"
          component={DetailPengingatScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="CekKondisi"
          component={CekKondisiScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="TandaBahaya"
          component={TandaBahayaScreen}
          options={{
            headerShown: false,
          }}
        />

        {/* Tanda Bahaya Detail Screens */}
        <Stack.Screen
          name="TidakBisaMinum"
          component={TidakBisaMinumScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Muntah"
          component={MuntahScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Kejang"
          component={KejangScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="PenurunanKesadaran"
          component={PenurunanKesadaranScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="SesakNafas"
          component={SesakNafasScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="PenilaianSAGA"
          component={PenilaianSAGAScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Tindakan"
          component={TindakanScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PerawatanDiRumah"
          component={PerawatanDiRumahScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="TanyaJawab"
          component={TanyaJawabScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
