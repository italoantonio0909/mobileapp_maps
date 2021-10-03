import React from 'react'
import { Image, SafeAreaView, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import NavOPtions from './NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux'
import { setOrigin } from './state/slices/navSlices'
import NavFavourites from './components/NavFavourites'

const HomeScreen = function () {
  const dispatch = useDispatch()
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Dónde estás?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              height: 38,
              color: '#5d5d5d',
              fontSize: 16,
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}
          onPress={(data, details) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            )
          }}
          returnKeyType="search"
          fetchDetails={true}
          minLength={2}
          nearbyPlacesAPI="GooglePlacesSearch"
          enablePoweredByContainer={false}
          debounce={400}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'es',
          }}
        />
        <NavOPtions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
