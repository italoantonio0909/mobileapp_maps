import React from 'react'
import { SafeAreaView } from 'react-native'
import { Text } from 'react-native'
import { View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import tw from 'tailwind-react-native-classnames'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { setDestination } from './state/slices/navSlices'
import NavFavourites from './components/NavFavourites'

const NavigateCard = function ({ navigation }) {
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            styles={googlePlacesCustom}
            query={{ key: GOOGLE_MAPS_APIKEY, language: 'es' }}
            placeholder="A dónde vas?"
            fetchDetails={true}
            returnKeyType="search"
            debounce={400}
            onPress={(data, details) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              )
              navigation.navigate('NavigateOptionRide')
            }}
          />
        </View>
        <NavFavourites />
      </View>
    </SafeAreaView>
  )
}

const googlePlacesCustom = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
})

export default NavigateCard
