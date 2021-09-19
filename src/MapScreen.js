import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import Map from './components/Map'

const MapScreen = function () {
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}></View>
    </View>
  )
}

export default MapScreen
