import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Block, GalioProvider, Text, theme } from 'galio-framework'
import Screens from './src/navigation/Screens'
import { Provider } from 'react-redux'
import { store } from './src/state/store'
import { Image, SafeAreaView, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import HomeScreen from './src/HomeScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MapScreen from './src/MapScreen'
import EatScreen from './src/EatScreen'

const App = function () {
  const Stack = createNativeStackNavigator()
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="EatScreen"
              component={EatScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  )
}

export default App