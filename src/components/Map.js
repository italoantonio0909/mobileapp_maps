import React from 'react'
import { View, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { selectOrigin } from '../state/slices/navSlices'

const Map = () => {
  const origin = useSelector(selectOrigin)
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    ></MapView>
  )
}

const styles = StyleSheet.create({})

export default Map
