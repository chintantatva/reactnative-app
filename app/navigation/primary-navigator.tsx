import React from "react"
import { createNativeStackNavigator } from "react-native-screens/native-stack"
import { WelcomeScreen, DemoScreen } from "../screens"
import { PrimaryParamList } from "./types"
import { AsteroidInputScreen } from "../screens/asteroidInputScreen/asteroidInputScreen";
import { AsteroidDetailsScreen } from "../screens/asteroidDetailsScreen/asteroidDetailsScreen";

const Stack = createNativeStackNavigator<PrimaryParamList>()

export function PrimaryNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
      }}
    >
     <Stack.Screen name="asteroidInputScreen" component={AsteroidInputScreen} />
     <Stack.Screen name="asteroidDetailsScreen" component={AsteroidDetailsScreen} />
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="demo" component={DemoScreen} />
    </Stack.Navigator>
  )
}

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 */
export const exitRoutes: string[] = ["welcome"]
