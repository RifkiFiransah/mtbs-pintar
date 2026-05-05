import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import "react-native-gesture-handler";
import { initDB } from "./src/database/db";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  useEffect(() => {
    // Initialize database on app launch
    initDB().catch((error) => console.error("Failed to initialize DB:", error));
  }, []);

  return (
    <>
      <StatusBar
        style="dark"
        backgroundColor="transparent"
        translucent={true}
      />
      <AppNavigator />
    </>
  );
}
