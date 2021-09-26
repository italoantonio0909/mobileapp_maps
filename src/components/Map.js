import React from 'react'
import { View, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { selectOrigin } from '../state/slices/navSlices'
import { GOOGLE_MAPS_APIKEY } from '@env'

const Map = () => {
  const origin = useSelector(selectOrigin)
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      zo
    >
      {origin.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Mi ubicación"
          description=""
          identifier="origin"
        />
      )}
    </MapView>
  )
}

const styles = StyleSheet.create({})

export default Map
