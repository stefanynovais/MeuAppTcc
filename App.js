import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./src/SplashScreen";
import InitialScreen from "./src/InitialScreen";
import FlashcardsScreen from "./src/FlashcardsScreen";
import { StyleSheet, Text, View } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="InitialScreen" component={InitialScreen} />
        <Stack.Screen name="FlashcardsScreen" component={FlashcardsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
