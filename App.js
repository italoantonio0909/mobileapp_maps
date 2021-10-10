import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { store } from './src/state/store'
import HomeScreen from './src/HomeScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MapScreen from './src/MapScreen'
import EatScreen from './src/EatScreen'
import { KeyboardAvoidingView } from 'react-native'
import { Platform } from 'react-native'

const App = function () {
  const Stack = createNativeStackNavigator()
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
          >
            <Stack.Navigator>
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
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
              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  )
}

export default App
