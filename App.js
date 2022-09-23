import 'react-native-gesture-handler';
import { Text, LogBox } from 'react-native';
import {
  NavigationContainer,
} from '@react-navigation/native';

import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { signup } from './App/Src/Containers/Auth';
import { home } from './App/Src/Containers/Home';

LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

// Home screen stack
function HomeStackScreen() {
  return (
    <Stack.Navigator headerShown="none">
      <Stack.Screen
        name="signup"
        component={signup}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="home"
        component={home}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </Stack.Navigator>
  );
}

export default function App({ navigation }) {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <HomeStackScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
