import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import CartScreen from "../../screens/CartScreen/CartScreen";
import type { RootStackParamList } from "../../types/interfaces/navigation.types";
import { Text, TouchableOpacity, View, Platform } from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Header() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Drunken Noodle" }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ title: "Your Cart" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
