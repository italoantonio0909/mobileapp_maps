import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import Map from './components/Map'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NavigateCard from './NavigateCard'
import RideOptionsCard from './RideOptionsCard'

const MapScreen = function () {
  const stack = createNativeStackNavigator()
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <stack.Navigator>
          <stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="NavigateOptionRide"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen
